(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("XPush_Manager");this.set_titletext("XPush_Manager");if(Form==this.constructor){this._setFormPosition(800,600);}_a=new Dataset("dsUser",this);_a._setContents("<ColumnInfo><Column id=\"Chk\" type=\"STRING\" size=\"256\"/><Column id=\"UserID\" type=\"STRING\" size=\"256\"/><Column id=\"UserName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"UserID\">User01</Col><Col id=\"UserName\">사용자1</Col></Row><Row><Col id=\"UserID\">User02</Col><Col id=\"UserName\">사용자2</Col></Row><Row><Col id=\"UserID\">User03</Col><Col id=\"UserName\">사용자3</Col></Row><Row><Col id=\"UserID\">User04</Col><Col id=\"UserName\">사용자4</Col></Row><Row><Col id=\"UserID\">User05</Col><Col id=\"UserName\">사용자5</Col></Row><Row><Col id=\"UserID\">User06</Col><Col id=\"UserName\">사용자6</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new XPush("XPush00",this);this.addChild(_a.name,_a);_a=new GroupBox("GroupBox00","11","4","782","206",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("Project 정보");this.addChild(_a.name,_a);_a=new Static("staID","20","56","159","27",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("Project Name");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.addChild(_a.name,_a);_a=new Edit("edit_setprojectid","184","57","208","27",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_value("TOBE_EDU");_a.set_text("TOBE_EDU");this.addChild(_a.name,_a);_a=new Edit("edit_setprotocolversion","184","86","208","27",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_value("3");_a.set_text("3");this.addChild(_a.name,_a);_a=new Static("staID00","20","86","159","27",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("Protocal Version");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.addChild(_a.name,_a);_a=new Button("btn_setprojectid","396","57","57","27",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("설정");this.addChild(_a.name,_a);_a=new Button("btn_setprotocolversion","396","86","57","27",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("설정");this.addChild(_a.name,_a);_a=new Button("btn_projectID_protocolversion_check","20","23","765","27",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("프로젝트 아이디, 프로토콜 버전 확인");this.addChild(_a.name,_a);_a=new Static("Static00_00","20","117","159","38",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("Address:Port\r\n(172.10.12.24:10081)");_a.set_cssclass("sta_WF_table_required");this.addChild(_a.name,_a);_a=new Edit("IpPort","184","117","516","38",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_value("tcp://172.10.11.145:10081, http://172.10.11.145:10081");_a.set_text("tcp://172.10.11.145:10081, http://172.10.11.145:10081");this.addChild(_a.name,_a);_a=new Button("btn_connect","458","159","119","28",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_text("xpush 연결 접속");this.addChild(_a.name,_a);_a=new Button("btn_disconnect","581","159","119","28",null,null,null,null,null,null,this);_a.set_taborder("11");_a.set_text("xpush 연결 종료");this.addChild(_a.name,_a);_a=new GroupBox("GroupBox00_00_00","11","300","442","200",null,null,null,null,null,null,this);_a.set_taborder("12");_a.set_text("Push Message 받기");this.addChild(_a.name,_a);_a=new Grid("gdUser",null,null,null,null,null,null,null,null,null,null,this);_a.set_taborder("13");_a.set_binddataset("dsUser");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"UserID\"/><Cell col=\"2\" text=\"UserName\"/></Band><Band id=\"body\"><Cell text=\"bind:Chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:UserID\"/><Cell col=\"2\" text=\"bind:UserName\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_admin_ADUI","460","320","312","77",null,null,null,null,null,null,this);_a.set_taborder("14");_a.set_text("관리자 사용자 등록");this.addChild(_a.name,_a);_a=new Button("btn_admin_UNUI","460","404","312","77",null,null,null,null,null,null,this);_a.set_taborder("15");_a.set_text("관리자 사용자 삭제");this.addChild(_a.name,_a);_a=new Button("btn_admin_MSGC","458","490","312","77",null,null,null,null,null,null,this);_a.set_taborder("16");_a.set_text("관리자 미수신 메시지 갯수 조회");this.addChild(_a.name,_a);_a=new GroupBox("GroupBox00_00","11","200","782","90",null,null,null,null,null,null,this);_a.set_taborder("17");_a.set_text("Topic 정보");this.addChild(_a.name,_a);_a=new Combo("TopicType","185","220","268","26",null,null,null,null,null,null,this);_a.set_taborder("18");_a.set_innerdataset("gds_topicType");_a.set_codecolumn("CODE");_a.set_datacolumn("NAME");_a.set_text("일반 메시지");_a.set_value("9999");_a.set_index("2");this.addChild(_a.name,_a);_a=new Static("Static00_01","20","220","159","27",null,null,null,null,null,null,this);_a.set_taborder("19");_a.set_text("topic Type");_a.set_cssclass("sta_WF_table_required");this.addChild(_a.name,_a);_a=new Static("Static00_03","20","159","159","27",null,null,null,null,null,null,this);_a.set_taborder("20");_a.set_text("User ID (관리자 사번)");_a.set_cssclass("sta_WF_table_required");this.addChild(_a.name,_a);_a=new Edit("loginUserID","184","159","269","27",null,null,null,null,null,null,this);_a.set_taborder("21");_a.set_value("admin");_a.set_text("admin");this.addChild(_a.name,_a);_a=new CheckBox("chk_ALL","460","223","50","20",null,null,null,null,null,null,this);_a.set_taborder("22");_a.set_text("ALL");_a.set_value("true");this.addChild(_a.name,_a);_a=new Static("Static00_01_00","20","253","159","27",null,null,null,null,null,null,this);_a.set_taborder("23");_a.set_text("topic id");_a.set_cssclass("sta_WF_table_required");this.addChild(_a.name,_a);_a=new Edit("TopicId","184","253","208","27",null,null,null,null,null,null,this);_a.set_taborder("24");_a.set_value("TOBEEDU01");_a.set_text("TOBEEDU01");this.addChild(_a.name,_a);_a=new Grid("Grid00","21","321","427","172",null,null,null,null,null,null,this);_a.set_taborder("25");_a.set_binddataset("dsUser");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"66\"/><Column size=\"141\"/><Column size=\"199\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Chk\"/><Cell col=\"1\" text=\"UserID\"/><Cell col=\"2\" text=\"UserName\"/></Band><Band id=\"body\"><Cell text=\"bind:Chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:UserID\"/><Cell col=\"2\" text=\"bind:UserName\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new TextArea("taLog","11","504","440","90",null,null,null,null,null,null,this);_a.set_taborder("26");this.addChild(_a.name,_a);_a=new Layout("default","",800,600,this,function(_b){});this.addLayout(_a.name,_a);_a=new BindItem("item0","edit_setprojectid","value","gds_Info","PROJECT_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","edit_setprotocolversion","value","gds_Info","PROTOCAL_VERSION");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","IpPort","value","gds_Info","ADDRESS");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("XPush_Manager.xfdl",function(){this.btn_projectID_protocolversion_check_onclick=function(_a,_b){alert("projectid : ["+this.XPush00.projectid+"]\nprotocol version : ["+this.XPush00.protocolversion+"]");};this.btn_setprojectid_onclick=function(_a,_b){this.XPush00.set_projectid(this.edit_setprojectid.value);this.taLog.set_value("projectid : ["+this.XPush00.projectid+"]\nprotocol version : ["+this.XPush00.protocolversion+"]");};this.btn_setprotocolversion_onclick=function(_a,_b){this.XPush00.set_protocolversion(this.edit_setprotocolversion.value);this.taLog.set_value("projectid : ["+this.XPush00.projectid+"]\nprotocol version : ["+this.XPush00.protocolversion+"]");};this.Form_onload=function(_a,_b){if(nexacro._OS=="Android"||nexacro._OS=="iOS"){this.XPush00.set_layouturl("%USERAPP%XPushUrl/XPush_Message_Layout.xml");}else{this.XPush00.set_layouturl("XPushUrl::XPush_Message_Layout.xml");}};this.btn_connect_onclick=function(_a,_b){this.XPush00.set_iplist(this.IpPort.value);this.XPush00.connect(this.loginUserID.value,"...");};this.btn_disconnect_onclick=function(_a,_b){this.XPush00.disconnect();};this.fn_push_callback=function(_b,_c,_d,_e,_f,_g){this.taLog.set_value("XPush00_push_callback\n"+" - ActionType : "+_f+"\n"+" - Row : "+_b+"\n"+" - MessageId : "+_g+"\n"+"\n"+this.dsMessage.saveXML());if(_f=="PUSH"){}if(_f=="RELI"){this.XPush00.sendResponse(_g);}};this.XPush00_onsuccess=function(_a,_b){if(_b.message!=null){this.taLog.set_value("e.message != null\n"+" - e.message.messagetype: "+_b.message.messagetype+"\n"+" - e.message.messagekey: "+_b.message.messagekey+"\n"+" - e.message.messageid: "+_b.message.messageid+"\n"+" - e.message.returnvalue: "+_b.message.returnvalue+"\n"+" - e.message.devicetoken: "+_b.message.devicetoken);}if(_b.action==0){this.taLog.set_value("connect() success");}if(_b.action==1){this.taLog.set_value("disconnect() success");}if(_b.action==2){this.taLog.set_value("subscribe() success");}if(_b.action==3){this.taLog.set_value("unsubscribe() success");}if(_b.action==4){this.taLog.set_value("requestMessage() success");}if(_b.action==5){this.taLog.set_value("sendResponse() success");}if(_b.action==6){this.taLog.set_value("reqisterDevice() success");}if(_b.action==7){this.taLog.set_value("unreqisterDevice() success");}if(_b.action==8){this.taLog.set_value("reqisterUser() success");}if(_b.action==9){this.taLog.set_value("unreqisterUser() success");}if(_b.action==10){this.taLog.set_value("requestMessageCount() success");if(_b.message.returnvalue!=undefined||_b.message.returnvalue!=null){var _c=_b.message.returnvalue;this.taLog.set_value("length : "+_c.length);for(var _d=0;_d<_c.length;_d++ ){this.taLog.set_value("index:"+_d+" : "+_c[_d].topictype+" : "+_c[_d].topicid+" : "+_c[_d].count);}}}};this.XPush00_onerror=function(_a,_b){this.taLog.set_value("XPush00_onerror Event\n"+" - eventid: "+_b.eventid+"\n"+" - statuscode: "+_b.statuscode+"\n"+" - errormsg: "+_b.errormsg+"\n"+" - reason: "+_b.reason+"\n"+" - action: "+_b.action+"\n"+" - serverip: "+_b.serverip+"\n"+" - serverport: "+_b.serverport+"\n"+" - e.message: "+_b.message+"\n"+" - e.command : "+_b.command+"\n"+" - e.message : "+_b.message+"\n"+" - e.returnvalue : "+_b.returnvalue);if(_b.message!=null){this.taLog.set_value("e.message != null\n"+" - e.message.messagetype: "+_b.message.messagetype+"\n"+" - e.message.messagekey: "+_b.message.messagekey+"\n"+" - e.message.messageid: "+_b.message.messageid+"\n"+" - e.message.devicetoken: "+_b.message.devicetoken);}if(_b.action==0){this.taLog.set_value("connect() error");}if(_b.action==1){this.taLog.set_value("disconnect() error");}if(_b.action==2){this.taLog.set_value("subscribe() error");}if(_b.action==3){this.taLog.set_value("unsubscribe() error");}if(_b.action==4){this.taLog.set_value("requestMessage() error");}if(_b.action==5){this.taLog.set_value("sendResponse() error");}if(_b.action==6){this.taLog.set_value("reqisterDevice() error");}if(_b.action==7){this.taLog.set_value("unreqisterDevice() error");}if(_b.action==8){this.taLog.set_value("reqisterUser() error");}if(_b.action==9){this.taLog.set_value("unreqisterUser() error");}};this.XPush00_onkeepalive=function(_a,_b){trace("KEEP");};this.btn_admin_ADUI_onclick=function(_a,_b){var _c=this.edit_setprojectid.value;if(_c){for(var _e=0;_e<this.dsUser.getRowCount();_e++ ){if(this.dsUser.getColumn(_e,"Chk")=="1"){if(this.chk_ALL.value==true){var _d=this.XPush00.registerTopicWithUserID(this.TopicType.value,"ALL",this.dsUser.getColumn(_e,"UserID"),_c);}var _d=this.XPush00.registerTopicWithUserID(this.TopicType.value,this.TopicId.value,this.dsUser.getColumn(_e,"UserID"),_c);}}}else{for(var _e=0;_e<this.dsUser.getRowCount();_e++ ){if(this.dsUser.getColumn(_e,"Chk")=="1"){if(this.chk_ALL.value==true){var _d=this.XPush00.registerTopicWithUserID(this.TopicType.value,"ALL",this.dsUser.getColumn(_e,"UserID"));}var _d=this.XPush00.registerTopicWithUserID(this.TopicType.value,this.TopicId.value,this.dsUser.getColumn(_e,"UserID"));}}}};this.btn_admin_UNUI_onclick=function(_a,_b){var _c=this.edit_setprojectid.value;if(_c){for(var _e=0;_e<this.dsUser.getRowCount();_e++ ){if(this.dsUser.getColumn(_e,"Chk")=="1"){if(this.chk_ALL.value==true){var _d=this.XPush00.unregisterTopicWithUserID(this.TopicType.value,"ALL",this.dsUser.getColumn(_e,"UserID"),_c);}var _d=this.XPush00.unregisterTopicWithUserID(this.TopicType.value,this.TopicId.value,this.dsUser.getColumn(_e,"UserID"),_c);}}}else{for(var _e=0;_e<this.dsUser.getRowCount();_e++ ){if(this.dsUser.getColumn(_e,"Chk")=="1"){if(this.chk_ALL.value==true){var _d=this.XPush00.unregisterTopicWithUserID(this.TopicType.value,"ALL",this.dsUser.getColumn(_e,"UserID"));}var _d=this.XPush00.unregisterTopicWithUserID(this.TopicType.value,this.TopicId.value,this.dsUser.getColumn(_e,"UserID"));}}}};this.btn_admin_MSGC_onclick=function(_a,_b){var _c=this.edit_setprojectid.value;if(_c){for(var _d=0;_d<this.dsUser.getRowCount();_d++ ){if(this.dsUser.getColumn(_d,"Chk")=="1"){if(this.chk_ALL.value==true){this.XPush00.requestMessageCountWithUserID(this.TopicType.value,"ALL",this.dsUser.getColumn(_d,"UserID"),_c);}this.XPush00.requestMessageCountWithUserID(this.TopicType.value,this.TopicId.value,this.dsUser.getColumn(_d,"UserID"),_c);}}}else{for(var _d=0;_d<this.dsUser.getRowCount();_d++ ){if(this.dsUser.getColumn(_d,"Chk")=="1"){if(this.chk_ALL.value==true){this.XPush00.requestMessageCountWithUserID(this.TopicType.value,"ALL",this.dsUser.getColumn(_d,"UserID"));}this.XPush00.requestMessageCountWithUserID(this.TopicType.value,this.TopicId.value,this.dsUser.getColumn(_d,"UserID"));}}}};});this.on_initEvent=function(){this.addEventHandler("onload",this.Form_onload,this);this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);this.staID.addEventHandler("onclick",this.div_detail_Static10_onclick,this);this.staID00.addEventHandler("onclick",this.div_detail_Static10_onclick,this);this.btn_setprojectid.addEventHandler("onclick",this.btn_setprojectid_onclick,this);this.btn_setprotocolversion.addEventHandler("onclick",this.btn_setprotocolversion_onclick,this);this.btn_projectID_protocolversion_check.addEventHandler("onclick",this.btn_projectID_protocolversion_check_onclick,this);this.btn_connect.addEventHandler("onclick",this.btn_connect_onclick,this);this.btn_disconnect.addEventHandler("onclick",this.btn_disconnect_onclick,this);this.btn_admin_ADUI.addEventHandler("onclick",this.btn_admin_ADUI_onclick,this);this.btn_admin_UNUI.addEventHandler("onclick",this.btn_admin_UNUI_onclick,this);this.btn_admin_MSGC.addEventHandler("onclick",this.btn_admin_MSGC_onclick,this);this.Static00_03.addEventHandler("onclick",this.Static00_onclick,this);this.XPush00.addEventHandler("onsuccess",this.XPush00_onsuccess,this);this.XPush00.addEventHandler("onerror",this.XPush00_onerror,this);this.XPush00.addEventHandler("onkeepalive",this.XPush00_onkeepalive,this);};this.loadIncludeScript("XPush_Manager.xfdl");this.loadPreloadList();_a=null;};})();