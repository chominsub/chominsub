(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Comp_Div");this.set_titletext("Component-Div");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Dataset("ds_emp",this);_a.set_keystring("");_a._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">BB001</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">CC001</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Button("btn_fmBtn","18","570","70","28",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("Get");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Static("Static00","18","510","322","28",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("this.div_contents.form.edt_text.value;");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Edit("edt_text","btn_fmBtn:5","570","150","28",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_value("Form Component");_a.set_positionstep("0");_a.set_text("Form Component");this.addChild(_a.name,_a);_a=new Static("Static01","18","540","322","28",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_positionstep("0");_a.set_text("this.div_linked.form.edt_text.value;");this.addChild(_a.name,_a);_a=new Div("div_comp","510","510","480","130",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("Div00");_a.set_positionstep("0");_a.set_cssclass("div_WF_Area");this.addChild(_a.name,_a);_a=new Button("btn_div","10","7","259","28",null,null,null,null,null,null,this.div_comp.form);_a.set_taborder("0");_a.set_text(" 1. Div Color Change > Yellow");_a.set_textAlign("left");this.div_comp.addChild(_a.name,_a);_a=new Button("btn_form","10","40","259","28",null,null,null,null,null,null,this.div_comp.form);_a.set_taborder("1");_a.set_text(" 2. Div.Form Color Change > Pink");_a.set_textAlign("left");this.div_comp.addChild(_a.name,_a);_a=new Button("btn_size","10","73","259","28",null,null,null,null,null,null,this.div_comp.form);_a.set_taborder("2");_a.set_text(" 3. Div.Form Size Change");_a.set_textAlign("left");this.div_comp.addChild(_a.name,_a);_a=new Static("Static02","510","480","270","28",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("Div 컴포넌트 구조 Div > InnerForm");_a.set_cssclass("sta_WF_TypeTitle");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Div("div_contents","10","73","420","380",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_cssclass("div_WF_Area");this.addChild(_a.name,_a);_a=new Grid("Grid01","10","10","400","162",null,null,null,null,null,null,this.div_contents.form);_a.set_taborder("");_a.set_binddataset("ds_emp");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"Hire Date\"/><Cell col=\"2\" text=\"Salary\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\"/><Cell col=\"1\" text=\"bind:HIRE_DATE\"/><Cell col=\"2\" text=\"bind:SALARY\"/></Band></Format></Formats>");this.div_contents.addChild(_a.name,_a);_a=new Edit("Edit00",null,"177","162","28","164",null,null,null,null,null,this.div_contents.form);_a.set_taborder("1");this.div_contents.addChild(_a.name,_a);_a=new Calendar("Calendar00",null,"210","162","28","164",null,null,null,null,null,this.div_contents.form);_a.set_taborder("2");this.div_contents.addChild(_a.name,_a);_a=new Button("btn_divBtn","18","339","100","28",null,null,null,null,null,null,this.div_contents.form);_a.set_taborder("3");_a.set_text("Get");this.div_contents.addChild(_a.name,_a);_a=new Static("Static00","18","306","175","28",null,null,null,null,null,null,this.div_contents.form);_a.set_taborder("5");_a.set_text("this.edt_form.value;");this.div_contents.addChild(_a.name,_a);_a=new Edit("edt_text","btn_divBtn:10","339","150","28",null,null,null,null,null,null,this.div_contents.form);_a.set_taborder("4");this.div_contents.addChild(_a.name,_a);_a=new Static("Static08","10","177","110","28",null,null,null,null,null,null,this.div_contents.form);_a.set_taborder("6");_a.set_text("Name");_a.set_background("");_a.set_padding("");this.div_contents.addChild(_a.name,_a);_a=new Static("Static01","10","210","110","28",null,null,null,null,null,null,this.div_contents.form);_a.set_taborder("7");_a.set_text("Hire Date");_a.set_background("");_a.set_padding("");this.div_contents.addChild(_a.name,_a);_a=new Static("Static03","8","273","250","28",null,null,null,null,null,null,this.div_contents.form);_a.set_taborder("8");_a.set_text("Div에서 Form 컴포넌트 접근");_a.set_cssclass("sta_WF_TypeTitle");_a.set_positionstep("0");this.div_contents.addChild(_a.name,_a);_a=new Div("div_linked","510","73","420","380",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_url("EduBasic::Comp/Comp_Div_Sub.xfdl");_a.set_cssclass("div_WF_Area");this.addChild(_a.name,_a);_a=new Static("Static04","10","480","250","28",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("Form에서 Div에 있는 컴포넌트 접근");_a.set_cssclass("sta_WF_TypeTitle");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Static("Static02_00","10","40","250","28",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_text(" Contents Form");_a.set_cssclass("sta_WF_TypeTitle");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Static("Static02_00_00","510","40","250","28",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_text(" Linked Form");_a.set_cssclass("sta_WF_TypeTitle");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Static("Static99","10","0","250","28",null,null,null,null,null,null,this);_a.set_taborder("11");_a.set_text("Div");_a.set_cssclass("sta_WF_FrmTitle");_a.set_positionstep("-1");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_comp.form,function(_b){});this.div_comp.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_contents.form,function(_b){});this.div_contents.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_linked.form,function(_b){});this.div_linked.form.addLayout(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);_a=new BindItem("item2","div_contents.form.Edit00","value","ds_emp","FULL_NAME");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_contents.form.Calendar00","value","ds_emp","HIRE_DATE");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){this._addPreloadList("fdl","EduBasic::Comp/Comp_Div_Sub.xfdl");};this.registerScript("Comp_Div.xfdl",function(){this.div_comp_btn_div_onclick=function(_a,_b){this.div_comp.set_background("yellow");};this.div_comp_btn_form_onclick=function(_a,_b){this.div_comp.form.set_background("pink");};this.div_comp_btn_size_onclick=function(_a,_b){this.div_comp.form.set_width(350);this.div_comp.form.set_height(110);};this.btn_fmBtn_onclick=function(_a,_b){var _c=this.div_linked.form.edt_name.value;this.edt_text.set_value(_c);};this.div_contents_btn_divBtn_onclick=function(_a,_b){var _c=this.edt_text.value;this.div_contents.form.edt_text.set_value(_c);};});this.on_initEvent=function(){this.btn_fmBtn.addEventHandler("onclick",this.btn_fmBtn_onclick,this);this.div_comp.form.btn_div.addEventHandler("onclick",this.div_comp_btn_div_onclick,this);this.div_comp.form.btn_form.addEventHandler("onclick",this.div_comp_btn_form_onclick,this);this.div_comp.form.btn_size.addEventHandler("onclick",this.div_comp_btn_size_onclick,this);this.div_contents.form.btn_divBtn.addEventHandler("onclick",this.div_contents_btn_divBtn_onclick,this);};this.loadIncludeScript("Comp_Div.xfdl");this.loadPreloadList();_a=null;};})();