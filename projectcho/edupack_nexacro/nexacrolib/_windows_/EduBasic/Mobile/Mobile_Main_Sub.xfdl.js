(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Mobile_Main_Sub");this.set_titletext("홈메인화면이미지");if(Form==this.constructor){this._setFormPosition(480,680);}_a=new Static("Static00","7","156",null,"450","9",null,"464",null,null,null,this);_a.set_taborder("0");_a.set_cssclass("sta_MB_mainimg");this.addChild(_a.name,_a);_a=new Static("Static01","24","98",null,"38","26",null,"430",null,null,null,this);_a.set_taborder("1");_a.set_text("Unified Framework for Real OSMU");_a.set_cssclass("sta_MB_mainText");_a.set_textAlign("center");this.addChild(_a.name,_a);_a=new Layout("default","Phone_screen",480,680,this,function(_b){});_a.set_mobileorientation("portrait");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.on_initEvent=function(){};this.loadIncludeScript("Mobile_Main_Sub.xfdl");this.loadPreloadList();_a=null;};})();