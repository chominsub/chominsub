(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Mobile_Barcode");this.set_titletext("Barcode");if(Form==this.constructor){this._setFormPosition(480,768);}_a=new Static("sta11","5","5",null,"60","5",null,null,null,null,null,this);_a.set_taborder("0");_a.set_cssclass("sta_WF_box01");_a.set_text("");this.addChild(_a.name,_a);_a=new TextArea("txt00","5","79",null,"140","5",null,null,null,null,null,this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new TextArea("txtOutput","5","249","470","122",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Button("btn_camera",null,"10","200","40","10",null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("QR / Barcode");_a.set_cssclass("btn_WF_camera");this.addChild(_a.name,_a);_a=new Layout("default","Phone_screen",480,768,this,function(_b){var _c=_b;_b=_c;_b.set_titletext("Barcode");_b.sta11.set_taborder("0");_b.sta11.set_cssclass("sta_WF_box01");_b.sta11.set_text("");_b.sta11.move("5","5",null,"60","5",null);_b.txt00.set_taborder("1");_b.txt00.move("5","79",null,"140","5",null);_b.txtOutput.set_taborder("2");_b.txtOutput.set_visible("false");_b.txtOutput.move("5","249","470","122",null,null);_b.btn_camera.set_taborder("3");_b.btn_camera.set_text("QR / Barcode");_b.btn_camera.set_cssclass("btn_WF_camera");_b.btn_camera.move(null,"10","200","40","10",null);});_a.set_mobileorientation("portrait");this.addLayout(_a.name,_a);_a=new Layout("Layout1","Phone_screen",768,480,this,function(_b){var _c=_b;_b=_c;});_a.set_mobileorientation("landscape");_a.set_type("default");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("Mobile_Barcode.xfdl",function(){this.extComPlugin=null;this.frmBarcode_onload=function(_a,_b){this.extComPlugin=new nexacro.ExtComPlugin();this.extComPlugin.addEventHandler("on_callback",this.on_extcomplugin_callback,this);};this.btn_camera_onclick=function(_a,_b){var _c={pkgName:"test",values:"test",open:"Y"};this.extComPlugin.callMethod("barcode",_c);};this.on_extcomplugin_callback=function(_a,_b){this.txtOutput.set_value("");this.txtOutput.insertText("\n"+"this.on_callback ::: "+_b.svcid);this.txtOutput.insertText("\n"+"this.on_callback ::: "+_b.reason);this.txtOutput.insertText("\n"+"this.on_callback ::: "+_b.returnvalue);this.txtOutput.insertText("\n"+"this.on_callback ::: "+_b.returnvalue.RESULT1);if(_b.reason<0){return;}var _c=nexacro.getApplication();var _d=_b.returnvalue;if(_b.svcid=="barcode"){this.txt00.set_value(_d);if(_d.indexOf("http")>=0){if(system.osversion.toUpperCase().substr(0,7)=="ANDROID"&&system.navigatorname=="nexacro"){system.execBrowser(_d);}}}};});this.on_initEvent=function(){this.addEventHandler("onload",this.frmBarcode_onload,this);this.btn_camera.addEventHandler("onclick",this.btn_camera_onclick,this);};this.loadIncludeScript("Mobile_Barcode.xfdl");this.loadPreloadList();_a=null;};})();