(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("WebBro");this.set_titletext("New Form");if(Form==this.constructor){this._setFormPosition(1280,720);}_a=new WebBrowser("web00","254","88","652","285",null,null,null,null,null,null,this);_a.set_taborder("0");this.addChild(_a.name,_a);_a=new Button("btn00","52","146","95","65",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("btn00");this.addChild(_a.name,_a);_a=new WebView("WebView00","274","428","657","222",null,null,null,null,null,null,this);_a.set_taborder("2");this.addChild(_a.name,_a);_a=new Button("btn01","54","451","158","61",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("btn01");this.addChild(_a.name,_a);_a=new Layout("default","",1280,720,this,function(_b){});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("WebBro.xfdl",function(){this.btn00_onclick=function(_a,_b){this.web00.set_url("http://support.tobesoft.co.kr/Support/?menu=home");};this.btn01_onclick=function(_a,_b){this.WebView00.set_url("http://support.tobesoft.co.kr/Support/?menu=home");};});this.on_initEvent=function(){this.web00.addEventHandler("onusernotify",this.web00_onusernotify,this);this.btn00.addEventHandler("onclick",this.btn00_onclick,this);this.btn01.addEventHandler("onclick",this.btn01_onclick,this);};this.loadIncludeScript("WebBro.xfdl");this.loadPreloadList();_a=null;};})();