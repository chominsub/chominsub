(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("CmmToggle");this.set_titletext("토글");this.set_background("#ffffff");if(Form==this.constructor){this._setFormPosition(76,40);}_a=new Div("divToggle","0","0",null,null,"0","0",null,null,null,null,this);_a.set_taborder("0");_a.set_text("div00");this.addChild(_a.name,_a);_a=new Static("staBG","4","4",null,"30","4",null,null,null,null,null,this.divToggle.form);_a.set_taborder("2");_a.set_border("1px solid #d9d9d9");_a.set_borderRadius("20px");_a.set_background("#dddddd");this.divToggle.addChild(_a.name,_a);_a=new Button("btnOff","4","2","34","34",null,null,null,null,null,null,this.divToggle.form);_a.set_taborder("0");_a.set_borderRadius("20px");_a.set_boxShadow("0px 2px 2px HSLA(0,0%,0%,0.12)");this.divToggle.addChild(_a.name,_a);_a=new Button("btnOn",null,"2","34","34","4",null,null,null,null,null,this.divToggle.form);_a.set_taborder("1");_a.set_visible("false");_a.set_boxShadow("0px 2px 2px HSLA(0,0%,0%,0.12)");_a.set_borderRadius("20px");this.divToggle.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.divToggle.form,function(_b){});this.divToggle.form.addLayout(_a.name,_a);_a=new Layout("default","",76,40,this,function(_b){});_a.set_mobileorientation("portrait");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("CmmToggle.xfdl",function(){this.fvTouchStartX= -1;this.callbackfunc;this.Form_onload=function(_a,_b){var _c=this.parent;if(this.gfnIsNull(this.parent.onText)==false){this.divToggle.form.btnOn.set_text(this.parent.onText);}if(this.gfnIsNull(this.parent.offText)==false){this.divToggle.form.btnOff.set_text(this.parent.offText);}this.callbackfunc=_c.callbackfunc;};this.fnTouchMove=function(_b,_c){var _d=_b-_c;if(_d>10){this.fnOff();}else if(_d< -10){this.fnOn();}};this.getValue=function(){if(this.divToggle.form.btnOff.visible){return false;}else{return true;}};this.setValue=function(_b){if(_b){this.fnOn();}else{this.fnOff();}};this.fnOn=function(){this.divToggle.form.btnOff.set_visible(false);this.divToggle.form.btnOn.set_visible(true);this.divToggle.form.staBG.set_background("#31a2de");if(!this.gfnIsNull(this.callbackfunc)){this.lookupFunc(this.callbackfunc).call(this.parent.name,true);}};this.fnOff=function(){this.divToggle.form.btnOff.set_visible(true);this.divToggle.form.btnOn.set_visible(false);this.divToggle.form.staBG.set_background("#dddddd");if(!this.gfnIsNull(this.callbackfunc)){this.lookupFunc(this.callbackfunc).call(this.parent.name,false);}};this.divToggle_ontouchstart=function(_a,_b){if(_b.touchinputinfos.length==1){this.fvTouchStartX=_b.touchinputinfos[0].screenx;}else{this.fvTouchStartX= -1;}};this.divToggle_ontouchend=function(_a,_b){if(this.fvTouchStartX> -1){this.fnTouchMove(this.fvTouchStartX,_b.touchinputinfos[0].screenx);}};this.divToggle_onclick=function(_a,_b){};this.divToggle_staBG_onclick=function(_a,_b){if(_b.canvasx<_a.getOffsetWidth()/2){this.fnOff();}else{this.fnOn();}};});this.on_initEvent=function(){this.addEventHandler("onload",this.Form_onload,this);this.addEventHandler("ontimer",this.Form_ontimer,this);this.divToggle.addEventHandler("ontouchstart",this.divToggle_ontouchstart,this);this.divToggle.addEventHandler("ontouchend",this.divToggle_ontouchend,this);this.divToggle.addEventHandler("onclick",this.divToggle_onclick,this);this.divToggle.form.staBG.addEventHandler("onclick",this.divToggle_staBG_onclick,this);};this.loadIncludeScript("CmmToggle.xfdl");this.loadPreloadList();_a=null;};})();