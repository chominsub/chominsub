(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Exe_Form");this.set_titletext("Exe_Form");if(Form==this.constructor){this._setFormPosition(1000,700);}_a=new Dataset("Dataset1",this);_a.set_keystring("");_a._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83490000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">KR180</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76010000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">KR190</Col></Row><Row><Col id=\"FULL_NAME\">Dillon</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20150401</Col><Col id=\"SALARY\">62540000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">JP110</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">99050000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">JP390</Col></Row><Row><Col id=\"FULL_NAME\">Joseph</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070304</Col><Col id=\"SALARY\">61220000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightgray</Col><Col id=\"DEPT_CD\">05</Col><Col id=\"EMPL_ID\">CN300</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">63030000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">KR310</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88450000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">KR350</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">67420000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">CN160</Col></Row><Row><Col id=\"FULL_NAME\">Cameron</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20010303</Col><Col id=\"SALARY\">86250000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">KR260</Col></Row><Row><Col id=\"FULL_NAME\">Aladdin</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20161003</Col><Col id=\"SALARY\">67390000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightgray</Col><Col id=\"DEPT_CD\">05</Col><Col id=\"EMPL_ID\">JP140</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("Dataset3",this);_a.set_keystring("");_a._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"SALARY\">3000</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"SALARY\">6000</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"SALARY\">3000</Col></Row><Row><Col id=\"EMPL_ID\">BB002</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"SALARY\">4000</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"SALARY\">8000</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">Ray</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"SALARY\">5000</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static06","10","8","250","20",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("Exercise - Form");_a.set_cssclass("sta_WF_FrmTitle");_a.set_positionstep("-1");this.addChild(_a.name,_a);_a=new Edit("Edit3_1","90","57","180","24",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_value("nexacro");_a.set_positionstep("0");_a.set_text("nexacro");this.addChild(_a.name,_a);_a=new Edit("Edit3_2","90","91","180","24",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_value("platform");_a.set_positionstep("0");_a.set_text("platform");this.addChild(_a.name,_a);_a=new Static("Static01","19","57","63","24",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("Param1");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Static("Static02","19","91","63","24",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("Param2");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Button("btn_Exe3_1","89","296","36","25",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("3_1");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Button("btn_Exe3_3","89","333","36","25",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("3_3");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Static("Static03","19","125","63","24",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("Param3");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Grid("Grid3","89","125","403","161",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_binddataset("Dataset3");_a.set_autofittype("col");_a.set_positionstep("0");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_CD\"/><Cell col=\"3\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" text=\"bind:SALARY\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static11","135","296","515","24",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_text("모달 팝업창 오픈, 파라메터 전송. 팝업창에서 파라메터 받기. ");this.addChild(_a.name,_a);_a=new Static("Static12","135","333","535","24",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_text("모달리스 팝업창 오픈, 파라메터 전송. ");this.addChild(_a.name,_a);_a=new Layout("default","",1000,700,this,function(_b){});_a.set_stepcount("0");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("Performance_form.xfdl",function(){this.btn_Exe3_1_onclick=function(_a,_b){var _c=new ChildFrame();_c.init("chf_popup1",0,0,400,300,null,null,"EduBasic::Performance/Performance_form_Popup.xfdl");_c.set_openalign("center middle");_c.set_overlaycolor("RGBA(196,196,196,0.5)");_c.set_dragmovetype("all");var _d={param1:this.Edit3_1.value,param2:this.Edit3_2.value,param3:this.Dataset3};_c.showModal(this.getOwnerFrame(),_d,this,"fn_popupCallback");};this.fn_popupCallback=function(_b,_c){if(_c==undefined){return;}if(_b=="chf_popup1"){trace("Return Value: "+_c);var _d=_c.split(":");this.Edit3_1.set_value(_d[0]);this.Edit3_2.set_value(_d[1]);}};this.btn_Exe3_3_onclick=function(_a,_b){var _c=400;var _d=300;var _e=nexacro.getApplication();var _f=(_e.mainframe.width/2)-Math.round(_c/2);var _g=(_e.mainframe.height/2)-Math.round(_d/2);_f=system.clientToScreenX(this,_f);_g=system.clientToScreenY(this,_g);var _h="showtitlebar=true showstatusbar=false "+"resizable=true autosize=true titletext=Modeless Popup";var _i={param1:this.Edit3_1.value,param2:this.Edit3_2.value,param3:this.Dataset3};nexacro.open("chf_popup2","EduBasic::Performance/Performance_form_Popup.xfdl",this.getOwnerFrame(),_i,_h,_f,_g,_c,_d,this);};this.fn_return=function(_b){this.Dataset3.copyData(_b);trace(_b.saveXML());};this.btn_Exe3_5_onclick=function(_a,_b){var _c=nexacro.getPopupFrames();for(var _f=0;_f<_c.length;_f++ ){var _d=_c[_f].name;trace("sPopup == "+_d);}var _e=_c["chf_popup2"].form.Edit3_1.value;trace("Pupup Edit3_1 Value="+_e);};});this.on_initEvent=function(){this.btn_Exe3_1.addEventHandler("onclick",this.btn_Exe3_1_onclick,this);this.btn_Exe3_3.addEventHandler("onclick",this.btn_Exe3_3_onclick,this);};this.loadIncludeScript("Performance_form.xfdl");this.loadPreloadList();_a=null;};})();