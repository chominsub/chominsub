(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("SampleMessage");this.set_titletext("메세지");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Grid("grdMessage","10","238",null,null,"10","10",null,null,null,null,this);_a.set_taborder("0");_a.set_binddataset("gdsMessage");_a.set_autofittype("col");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Msg Id\"/><Cell col=\"1\" text=\"Msg Text\"/><Cell col=\"2\" text=\"Msg Text EN\"/><Cell col=\"3\" text=\"Msg Type\"/></Band><Band id=\"body\"><Cell text=\"bind:MSG_ID\" edittype=\"readonly\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:MSG_TEXT\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:MSG_TEXT_EN\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:MSG_TYPE\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn00",null,"205","90","28","105",null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("Alert");this.addChild(_a.name,_a);_a=new Button("btn01",null,"205","90","28","10",null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("Confirm");this.addChild(_a.name,_a);_a=new Button("btnGoogle",null,"0","90","28","10",null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("구글번역기");this.addChild(_a.name,_a);_a=new Static("sta00","10","0","196","28",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("메시지 처리");_a.set_cssclass("sta_WF_FrmTitle");this.addChild(_a.name,_a);_a=new Static("sta01","10","50",null,"130","10",null,"980",null,null,null,this);_a.set_taborder("6");_a.set_text("- 메시지 팝업을 통해 사용자에게 알림, 확인창을 호출한다.\r\n- 메시지는 AppVariables의 gdsMessage에서 관리한다.\r\n- 업무화면에서 메시지 호출은 아래와 같이 사용한다.\r\n   {0} 의 입력값의 길이는 {1} 이하이어야 합니다.\r\n   this.gfnAlert(\"msg.err.validator.maxlength\", [\"이름\", \"3자\"]);\t");_a.set_verticalAlign("top");_a.set_cssclass("sta_WF_Description");this.addChild(_a.name,_a);_a=new WebBrowser("webGoogle",null,"27","860","20","10",null,null,null,null,null,this);_a.set_taborder("3");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("SampleMessage.xfdl",function(){this.Form_onload=function(_a,_b){this.gfnFormOnLoad(this);};this.fnMsgCallback=function(_b,_c){if(_b=="confirm.before.save"){trace("strVal : "+_c);}};this.btn00_onclick=function(_a,_b){this.gfnAlert("msg.err.validator.maxlength",["이름은","3자"]);};this.btn01_onclick=function(_a,_b){var _c="confirm.before.save";var _d="";var _e=_c;var _f="fnMsgCallback";this.gfnAlert(_c,_d,_e,function(_g,_h){trace("strId : "+_g+" / strVal : "+_h+" / valueOf : "+this.gfnTypeOf(_h));if(_h==true){alert("확인 선택함");}else{alert("취소 선택함");}});alert("팝업창 밑의 alert");};this.grdMessage_oncelldblclick=function(_a,_b){var _c=_a.getBindDataset().getColumn(_b.row,"MSG_ID");var _d=["값1","값2","값3"];var _e=_c;var _f="fnMsgCallback";this.gfnAlert(_c,_d,_e,_f);};this.btnGoogle_onclick=function(_a,_b){if(this.webGoogle.visible){this.webGoogle.set_url("");this.webGoogle.set_height(20);this.webGoogle.set_visible(false);}else{this.webGoogle.set_url("https://translate.google.co.kr/");this.webGoogle.set_height(389);this.webGoogle.set_visible(true);}};this.webGoogle_onusernotify=function(_a,_b){};});this.on_initEvent=function(){this.addEventHandler("onload",this.Form_onload,this);this.grdMessage.addEventHandler("oncelldblclick",this.grdMessage_oncelldblclick,this);this.btn00.addEventHandler("onclick",this.btn00_onclick,this);this.btn01.addEventHandler("onclick",this.btn01_onclick,this);this.btnGoogle.addEventHandler("onclick",this.btnGoogle_onclick,this);this.webGoogle.addEventHandler("onusernotify",this.webGoogle_onusernotify,this);};this.loadIncludeScript("SampleMessage.xfdl");this.loadPreloadList();_a=null;};})();