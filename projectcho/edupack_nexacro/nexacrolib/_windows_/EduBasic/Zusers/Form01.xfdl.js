(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Form01");this.set_titletext("New Form");if(Form==this.constructor){this._setFormPosition(1038,560);}_a=new Dataset("ds00",this);_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">11111</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds01",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds02",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Button("btn00","13","38","99","32",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("1_1");this.addChild(_a.name,_a);_a=new Static("sta00","127","38","374","40",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("폼에 생성되어 있는 오브젝트/컴포넌트 정보를 구하기");this.addChild(_a.name,_a);_a=new Button("btn01","12","93","104","27",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("1_2");this.addChild(_a.name,_a);_a=new Static("sta01","128","90","339","33",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("컴포넌트ID String 값을 오브젝트로 만들기");this.addChild(_a.name,_a);_a=new Div("div00","630","13","400","271",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("div00");this.addChild(_a.name,_a);_a=new Grid("grd00","31","23","339","149",null,null,null,null,null,null,this.div00.form);_a.set_taborder("0");_a._setContents("");this.div00.addChild(_a.name,_a);_a=new Button("btn00","30","183","188","32",null,null,null,null,null,null,this.div00.form);_a.set_taborder("1");_a.set_text("btn00");this.div00.addChild(_a.name,_a);_a=new Grid("grd00","131","130","279","64",null,null,null,null,null,null,this);_a.set_taborder("5");_a._setContents("");this.addChild(_a.name,_a);_a=new Button("btn02","25","337","115","58",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("showModal");this.addChild(_a.name,_a);_a=new Button("btn03","28","407","114","46",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("open");this.addChild(_a.name,_a);_a=new Static("Static01","40","240","63","30",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("Param1");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Edit("edt_name","111","240","180","30",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_value("Nexacro");_a.set_positionstep("0");_a.set_text("Nexacro");this.addChild(_a.name,_a);_a=new Button("btn04","30","467","114","33",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_text("timer");this.addChild(_a.name,_a);_a=new Button("btn05","29","517","119","23",null,null,null,null,null,null,this);_a.set_taborder("11");_a.set_text("killTimer");this.addChild(_a.name,_a);_a=new Static("sta02","433","275","228","136",null,null,null,null,null,null,this);_a.set_taborder("12");_a.set_text("sta02");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div00.form,function(_b){});this.div00.form.addLayout(_a.name,_a);_a=new Layout("default","",1038,560,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("Form01.xfdl",function(){this.btn00_onclick=function(_a,_b){this.fn_compList(this);};this.fn_compList=function(_b){var _c=_b.objects;for(var _e=0;_e<_c.length;_e++ ){trace(_b.parent+" : "+_b.valueOf()+" : "+_c[_e]+" : "+_c[_e].name);var _d=_c[_e].valueOf();if(_d=="[object Div]"){this.fn_compList(_c[_e].form);}else if(_d=="[object Tab]"){for(var _f=0;_f<_c[_e].tabpages.length;_f++ ){this.fn_compList(_c[_e].tabpages[_f].form);}}}};this.btn01_onclick=function(_a,_b){var _c=this.grd00.name;trace(_c+":"+typeof _c);var _d=this.all[_c];trace(_d+":"+typeof _d);};this.btn02_onclick=function(_a,_b){var _c=new ChildFrame();_c.init("chf_popup1",0,0,400,400,null,null,"EduBasic::Zusers\\Form01_sub.xfdl");_c.set_openalign("center middle");_c.set_overlaycolor("RGBA(196,196,196,0.5)");_c.set_dragmovetype("all");var _d={param1:this.edt_name.value,param2:this.ds00};_c.showModal(this.getOwnerFrame(),_d,this,"fn_popupCallback");};this.fn_popupCallback=function(_b,_c){if(_c==undefined){return;}if(_b=="chf_popup1"){var _d=_c.split(":");this.edt_name.set_value(_d[0]);trace(_d[0]+_d[1]);}};this.btn03_onclick=function(_a,_b){var _c=400;var _d=400;var _e=nexacro.getApplication();var _f=(_e.mainframe.width/2)-Math.round(_c/2);var _g=(_e.mainframe.height/2)-Math.round(_d/2);_f=system.clientToScreenX(this,_f);_g=system.clientToScreenY(this,_g);var _h="showtitlebar=true showstatusbar=false "+"resizable=true autosize=true titletext=Modeless Popup";var _i={param1:this.edt_name.value,param2:this.ds00};nexacro.open("chf_popup2","EduBasic::Zusers\\Form01_sub.xfdl",this.getOwnerFrame(),_i,_h,_f,_g,_c,_d,this);};this.fn_return=function(_b){this.ds02.copyData(_b);trace(this.ds02.saveXML());};this.btn04_onclick=function(_a,_b){this.setTimer(1,1000);};this.Form01_ontimer=function(_a,_b){if(_b.timerid==1){trace("event load");}};this.btn05_onclick=function(_a,_b){this.killTimer(1);};this.edt_name_onchanged=function(_a,_b){};});this.on_initEvent=function(){this.addEventHandler("ontimer",this.Form01_ontimer,this);this.btn00.addEventHandler("onclick",this.btn00_onclick,this);this.btn01.addEventHandler("onclick",this.btn01_onclick,this);this.btn02.addEventHandler("onclick",this.btn02_onclick,this);this.btn03.addEventHandler("onclick",this.btn03_onclick,this);this.edt_name.addEventHandler("onchanged",this.edt_name_onchanged,this);this.btn04.addEventHandler("onclick",this.btn04_onclick,this);this.btn05.addEventHandler("onclick",this.btn05_onclick,this);};this.loadIncludeScript("Form01.xfdl");this.loadPreloadList();_a=null;};})();