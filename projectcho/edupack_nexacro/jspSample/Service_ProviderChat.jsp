<%@ page import = "org.apache.commons.logging.*" %>
<%@ page import = "com.nexacro.java.xapi.data.*" %>
<%@ page import = "com.nexacro.java.xapi.tx.*" %>  
<%@ page import = "java.net.UnknownHostException.*" %>
<%@ page import = "com.nexacro.xpush.api.PushMessageProvider" %>
<%@ page import = "com.nexacro.xpush.api.PushResponse" %>
<%@ page import = "com.nexacro.xpush.fw.io.ConnectionClosedException" %>
<%@ page import = "com.nexacro.xpush.fw.service.provider.LoginFailException" %>
<%@ page import = "com.nexacro.xpush.fw.service.provider.PushMessage" %>
<%@ page import = "com.nexacro.xpush.message.Constants" %>
<%@ page import = "java.util.*" %>
<%@ page import = "java.sql.*" %>
<%@ page import = "java.io.*" %>
<%@ page contentType = "text/xml; charset=UTF-8" %>

<% 
int error_code = 0;
String error_msg = "START";

HttpPlatformRequest httpPlatformRequest = new HttpPlatformRequest(request);
httpPlatformRequest.receiveData();
PlatformData in_platformdata = httpPlatformRequest.getData();

//1. 수신자 메시지 생성 --> 넥사크로플랫폼 화면에서 전달된 정보
VariableList in_varList = in_platformdata.getVariableList();
String topic_type = in_varList.getString("TOPIC_TYPE");
String topic_id = in_varList.getString("TOPIC_ID");
String user_id = in_varList.getString("USER_ID");
String project_id = in_varList.getString("PROJECT_ID");
String send_message = in_varList.getString("SEND_MESSAGE");
try {    

	//X-PUSH server address
	String host = "localhost"; 
	      
	//공급자용 port 설정 50002
	int port = 50002;		
	String id = user_id;  
	String password = "xpush"; 

	//pushMessageProvider 클래스 생성
	PushMessageProvider pushMessageProvider = new PushMessageProvider();
	try {		 
		// 2. X-PUSH 연결
		pushMessageProvider.connect(host, port, id, password);
		
		//pushMessage 클래스 생성
		PushMessage pushMessage = new PushMessage();		
		
		//메시지 타입 설정 (실시간)
		pushMessage.setActionType(Constants.ACTION_PUSH_STRING); 
		
		pushMessage.setCharsetName("utf-8");
		
		//PROJECT id 설정
		pushMessage.setProjectID(project_id);  
		
		//3. 메시지 데이터 생성
		//메시지는 데이타 구분을 취해 TOPIC TYPE과 CODE(setTopicType,setTopicId), MSG1(addData)로 전달 
		pushMessage.setTopicType(topic_type);
		pushMessage.setTopicId(topic_id);
	
		//메시지 키(Topic id) 매칭, 넥사크로플랫폼에서 토픽정보 변경 시 함께 변경해야 함
		if(topic_id.equals("SENDMSG"))
		{
			//메시지 추가 -> 다른 채팅창으로 메시지 전달
			pushMessage.addData(send_message);
		}
		
		//메시지 추가
		pushMessage.addData(user_id);
	
		//4. 메시지 공급
		PushResponse pushResponse = pushMessageProvider.sendPushMessage(pushMessage);
		//5. X-PUSH 연결 해제 
		pushMessageProvider.close();

		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

	} catch (IOException e) {
		e.printStackTrace();
	} catch (LoginFailException e) {
		e.printStackTrace();
	} catch (ConnectionClosedException e) {
		e.printStackTrace();
	}
		
	error_code  = 0;
    error_msg = "SUCC";
            
} catch (Throwable throwable) {
	error_code  = -1;
    error_msg = throwable.getMessage();
}

PlatformData out_platformdata = new PlatformData();

VariableList out_varList = out_platformdata.getVariableList();
out_varList.add("ErrorCode", error_code);
out_varList.add("ErrorMsg" , error_msg);

HttpPlatformResponse httpPlatformResponse = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
httpPlatformResponse.setData(out_platformdata);
httpPlatformResponse.sendData();
%>