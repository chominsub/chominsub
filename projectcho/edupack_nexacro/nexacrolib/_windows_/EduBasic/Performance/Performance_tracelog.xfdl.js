(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Performance_tracelog");this.set_titletext("New Form");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Button("trace","10","60","155","40",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("tralog 기록");this.addChild(_a.name,_a);_a=new Static("st_title","10","0","193","30",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("tracelog");_a.getSetter("leftbase").set("");_a.getSetter("topbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");_a.set_cssclass("sta_WF_FrmTitle");this.addChild(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_b){});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("Performance_tracelog.xfdl",function(){this.tracelog_onclick=function(_a,_b){nexacro.getApplication().trace("trace log1");trace("trace log2");};});this.on_initEvent=function(){this.trace.addEventHandler("onclick",this.tracelog_onclick,this);};this.loadIncludeScript("Performance_tracelog.xfdl");this.loadPreloadList();_a=null;};})();