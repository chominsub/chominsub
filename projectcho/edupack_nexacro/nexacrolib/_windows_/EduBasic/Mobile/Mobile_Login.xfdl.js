(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Mobile_Login");this.set_titletext("로그인");if(Form==this.constructor){this._setFormPosition(480,768);}_a=new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);_a.set_taborder("0");_a.set_cssclass("sta_Login_bg");this.addChild(_a.name,_a);_a=new Static("sta_logo","0","40",null,"75","0",null,null,null,null,null,this);_a.set_taborder("1");_a.set_cssclass("sta_Login_logo");this.addChild(_a.name,_a);_a=new Static("Static02","50","169","60","60",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_cssclass("sta_Login_ID");this.addChild(_a.name,_a);_a=new Static("Static03","50","249","60","60",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_cssclass("sta_Login_pass");this.addChild(_a.name,_a);_a=new Edit("edt_id","115","169","315","60",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_cssclass("edt_Login_ID");_a.set_value("TOBESOFT");_a.set_text("TOBESOFT");this.addChild(_a.name,_a);_a=new Edit("edt_pw","115","249","315","60",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_cssclass("edt_Login_ID");_a.set_password("true");this.addChild(_a.name,_a);_a=new CheckBox("chk_save","50","329","179","30",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("Remember me");_a.set_cssclass("chk_Login_idsave");_a.set_value("true");this.addChild(_a.name,_a);_a=new Button("btn_login","110","410","260","60",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("Login");_a.set_cssclass("btn_Login_login");this.addChild(_a.name,_a);_a=new Layout("default","",480,768,this,function(_b){});_a.set_mobileorientation("portrait");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("Mobile_Login.xfdl",function(){this.objApp=nexacro.getApplication();this.btn_login_onclick=function(_a,_b){var _c=this.edt_id.value;var _d=this.edt_pw.value;trace(this.objApp.av_WorkFrame.form.name);this.objApp.av_WorkFrame.form.fn_login(_c,_d);};});this.on_initEvent=function(){this.btn_login.addEventHandler("onclick",this.btn_login_onclick,this);};this.loadIncludeScript("Mobile_Login.xfdl");this.loadPreloadList();_a=null;};})();