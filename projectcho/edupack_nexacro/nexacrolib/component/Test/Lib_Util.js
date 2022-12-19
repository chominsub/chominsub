var pForm = nexacro.Form.prototype;

pForm.lfn_getToday = function ()
{
	var objDate = new Date();
	var sYear  = objDate.getFullYear().toString();
	var sMonth = (objDate.getMonth()+1).toString().padLeft(2, "0");
	var sDay   =  objDate.getDate().toString().padLeft(2, "0"); 	
	return sYear + sMonth + sDay;
};

//해당일의 1일 구하기
pForm.lfn_getFirstDay = function ()
{
	var objDate = new Date();
	var sYear  = objDate.getFullYear().toString();
	var sMonth = (objDate.getMonth()+1).toString().padLeft(2, "0");
	var sDay   =  "30"; 
	return sYear + sMonth + sDay;
};


pForm.lfn_isNull = function (sValue)
{
	if(new String(sValue).valueOf() == "undefined") return true;
	if(sValue==null) return true;
	var ChkStr = new String(sValue);
	if(ChkStr == null) return true;
	if(ChkStr.toString().length == 0) return true;
	return false;
};

pForm.lfn_alert = function (sMsgId, arrArg)
{
	var objApp = nexacro.getApplication();
	
	var sMsgType = objApp.gdsMessage.lookup("MSG_ID", sMsgId, "MSG_TYPE");//A,C
	var sMsg = this.lfn_getMsg(sMsgId, arrArg);
	
	if(sMsgType == "A"){
		this.alert(sMsg);
	}else if(sMsgType == "C"){
		//this.confirm(sMsg)
		return this.confirm(sMsg);//confirm을 사용할 경우  return 사용
	}
	return sMsg;
};


pForm.lfn_getMsg = function (sMsgId, arrArg)
{
	var objApp = nexacro.getApplication();
	
	sMsg = objApp.gdsMessage.lookup("MSG_ID", sMsgId, "MSG_TEXT");
	if(!this.lfn_isNull(arrArg)){//치환할 값이 있는지 확인하는 로직
		for(var i = 0; i<arrArg.length;i++){
			var sIdx = "{"+ i.toString()+"}";//{0},{1}....
			sMsg = sMsg.replace(sIdx, arrArg[i]);
		}
	}
	return sMsg;
};
