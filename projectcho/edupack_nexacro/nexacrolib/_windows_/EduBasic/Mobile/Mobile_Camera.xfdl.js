(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Mobile_Camera");this.set_titletext("DeviceAPI 카메라");if(Form==this.constructor){this._setFormPosition(480,640);}_a=new Camera("objCamera",this);_a.set_imageheight("600");_a.set_imagewidth("460");_a.set_gettype("imagedata");this.addChild(_a.name,_a);_a=new Button("btn_camera",null,"10","200","40","10",null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("Take a Picture");_a.set_cssclass("btn_WF_camera");this.addChild(_a.name,_a);_a=new ImageViewer("img_picture","10","50",null,null,"10","10",null,null,null,null,this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Layout("default","Phone_screen",480,640,this,function(_b){});_a.set_mobileorientation("portrait");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("Mobile_Camera.xfdl",function(){this.btn_camera_onclick=function(_a,_b){this.objCamera.takePicture();};this.objCamera_oncapture=function(_a,_b){this.img_picture.set_image(_b.imagedata);};this.objCamera_onerror=function(_a,_b){alert(_b.errormsg);};});this.on_initEvent=function(){this.btn_camera.addEventHandler("onclick",this.btn_camera_onclick,this);this.objCamera.addEventHandler("oncapture",this.objCamera_oncapture,this);this.objCamera.addEventHandler("onerror",this.objCamera_onerror,this);};this.loadIncludeScript("Mobile_Camera.xfdl");this.loadPreloadList();_a=null;};})();