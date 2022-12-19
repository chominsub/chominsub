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
<%@ page import = "java.io.*" %><%@ page contentType = "text/xml; charset=UTF-8" %><%! 
// Dataset value
public String  dsGet(DataSet ds, int rowno, String colid) throws Exception
{
    String value;
    value = ds.getString(rowno, colid);
    if( value == null )
        return "";
    else 
        return value;
} 
%><%
int nErrorCode = 0;
String strErrorMsg = "START";

HttpPlatformRequest pReq = new HttpPlatformRequest(request);
pReq.receiveData();
PlatformData in_pData = pReq.getData();

VariableList in_varList = in_pData.getVariableList();
String pushType = in_varList.getString("argPUSH_TYPE");
String pushMSG = in_varList.getString("argPUSH_MSG");

System.out.println("pushType=>" + pushType);
System.out.println("pushMSG=>" + pushMSG);  
if(pushType == null)   
{
	pushType = "PUSH";
}

DataSet ds = in_pData.getDataSet("in_Provider");

try {    

	String host = "localhost";
      
	int port = 50002;
	String id = "tobesoft";
	String password = "xpush"; 

	int push_count = 1;

	for(int i = 0; i < ds.getRowCount(); i ++) {

		PushMessageProvider pushMessageProvider = new PushMessageProvider();
		try {
			 
			pushMessageProvider.setUseProject(true);
			
			pushMessageProvider.connect(host, port, id, password);
			PushMessage pushMessage = new PushMessage();

			pushMessage.setProjectID(dsGet(ds,i,"PROJECT_ID"));  //PROJECT ID 
			pushMessage.setAvailablePeriod(30);//일 단위 설정 
			pushMessage.setEmergencyMessage(true);//긴급여부 무조건 true 안드로이드 FCM 용  
			
			   
			if(pushType.equals("RELI"))   
			{	
				pushMessage.setActionType(Constants.ACTION_RELI_STRING);
			} else {
			
				pushMessage.setActionType(Constants.ACTION_PUSH_STRING);
			}
			pushMessage.setCharsetName("utf-8");
			pushMessage.setTopic(dsGet(ds,i,"TOPIC_TYPE"), dsGet(ds,i,"TOPIC_ID")); //TOPIC TYPE과 ID 
			//메시지는 3개를 보내주는데  데이타 구분을 취해 TOPIC TYPE과 CODE, MSG로 전달 
			pushMessage.addData(dsGet(ds,i,"TOPIC_TYPE"));
			pushMessage.addData(dsGet(ds,i,"CODE"));
			pushMessage.addData(dsGet(ds,i,"MSG"));  
			
  
			PushResponse pushresponse = pushMessageProvider.sendPushMessage(pushMessage);
			System.out.println("response : " + pushresponse.isSucceed());
			pushMessageProvider.close();

			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

//		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
//			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (LoginFailException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ConnectionClosedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
    nErrorCode  = 0;
    strErrorMsg = "SUCC";
            
} catch (Throwable th) {
    nErrorCode  = -1;
    strErrorMsg = th.getMessage();
}

// PlatformData 
PlatformData out_pData = new PlatformData();

VariableList out_varList = out_pData.getVariableList();
out_varList.add("ErrorCode", nErrorCode);
out_varList.add("ErrorMsg" , strErrorMsg);


HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
pRes.setData(out_pData);
pRes.sendData();
%>