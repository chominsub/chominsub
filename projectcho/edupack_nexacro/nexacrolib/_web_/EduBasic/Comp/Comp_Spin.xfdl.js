(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Comp_Spin");this.set_titletext("Component-Spin");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Spin("Spin02","20","169","160","28",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_increment("10");_a.set_min("100");_a.set_max("200");_a.set_value("100");this.addChild(_a.name,_a);_a=new Spin("Spin03","118","265","96","28",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_increment("10");_a.set_min("100");_a.set_max("200");_a.set_value("100");this.addChild(_a.name,_a);_a=new Spin("Spin00","20","73","160","28",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_value("1");this.addChild(_a.name,_a);_a=new Spin("Spin04","118","298","96","28",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_increment("10");_a.set_type("noneditable");_a.set_min("100");_a.set_max("200");_a.set_value("100");this.addChild(_a.name,_a);_a=new Spin("Spin06","18","427","128","28",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_increment("1000");_a.set_buttonposition("left");_a.set_min("10000");_a.set_max("20000");_a.set_value("100");this.addChild(_a.name,_a);_a=new Spin("Spin05","118","331","24","28",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_increment("10");_a.set_type("spinonly");_a.set_min("100");_a.set_max("200");_a.set_value("100");this.addChild(_a.name,_a);_a=new Static("Static04","18","298","95","28",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("non editable");_a.set_cssclass("sta_WF_LabelTxt12");this.addChild(_a.name,_a);_a=new Static("Static03","18","265","95","28",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_text("normal");_a.set_cssclass("sta_WF_LabelTxt12");this.addChild(_a.name,_a);_a=new Static("Static05","18","331","95","28",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_text("spin only");_a.set_cssclass("sta_WF_LabelTxt12");this.addChild(_a.name,_a);_a=new Static("Static07","10","40","250","28",null,null,null,null,null,null,this);_a.set_taborder("11");_a.set_text(" Basic Usage");_a.set_cssclass("sta_WF_TypeTitle");this.addChild(_a.name,_a);_a=new CheckBox("CheckBox01","154","427","144","28",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("Display Comma");_a.set_value("false");this.addChild(_a.name,_a);_a=new CheckBox("CheckBox00","192","169","118","28",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("circulation");_a.set_value("false");this.addChild(_a.name,_a);_a=new Static("Static00","10","136","580","28",null,null,null,null,null,null,this);_a.set_taborder("12");_a.set_text(" Increment: 10 / Max: 200 / Min: 100 (Prop. increment, max, min)");_a.set_cssclass("sta_WF_TypeTitle");this.addChild(_a.name,_a);_a=new Static("Static09","8","232","282","28",null,null,null,null,null,null,this);_a.set_taborder("13");_a.set_text(" Type (Prop. type)");_a.set_cssclass("sta_WF_TypeTitle");this.addChild(_a.name,_a);_a=new Static("Static10","8","394","392","28",null,null,null,null,null,null,this);_a.set_taborder("14");_a.set_text(" Spin Button Position (Prop. buttonposition)");_a.set_cssclass("sta_WF_TypeTitle");this.addChild(_a.name,_a);_a=new Static("Static99","10","0","250","28",null,null,null,null,null,null,this);_a.set_taborder("15");_a.set_text("Spin");_a.set_cssclass("sta_WF_FrmTitle");_a.set_positionstep("-1");this.addChild(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);_a=new BindItem("item0","Button01","text","gds_dept","DEPT_NM");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("Comp_Spin.xfdl",function(){this.chk_pass_onclick=function(_a,_b){this.edt_auto.set_password(_a.value);};this.Spin02_onspin=function(_a,_b){_a.set_circulation(this.CheckBox00.value);};this.CheckBox01_onclick=function(_a,_b){this.Spin06.set_displaycomma(_a.value);};});this.on_initEvent=function(){this.Spin02.addEventHandler("onspin",this.Spin02_onspin,this);this.Spin06.addEventHandler("onspin",this.Spin02_onspin,this);this.CheckBox01.addEventHandler("onclick",this.CheckBox01_onclick,this);};this.loadIncludeScript("Comp_Spin.xfdl");this.loadPreloadList();_a=null;};})();