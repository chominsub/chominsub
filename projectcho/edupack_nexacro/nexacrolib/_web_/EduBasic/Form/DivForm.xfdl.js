(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("DivForm");this.set_titletext("New Form");if(Form==this.constructor){this._setFormPosition(1280,720);}_a=new Dataset("dsDivDs",this);_a._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">1</Col><Col id=\"Column1\">a</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"EMPL_ID\">2</Col><Col id=\"Column1\">c</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"EMPL_ID\">3</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"EMPL_ID\">1</Col><Col id=\"Column1\">a</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"EMPL_ID\">2</Col><Col id=\"Column1\">c</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"EMPL_ID\">3</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"EMPL_ID\">1</Col><Col id=\"Column1\">a</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"EMPL_ID\">2</Col><Col id=\"Column1\">c</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"EMPL_ID\">3</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"EMPL_ID\">1</Col><Col id=\"Column1\">a</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"EMPL_ID\">2</Col><Col id=\"Column1\">c</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"EMPL_ID\">3</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"EMPL_ID\">1</Col><Col id=\"Column1\">a</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"EMPL_ID\">2</Col><Col id=\"Column1\">c</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"EMPL_ID\">3</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">C</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Grid("grd00","20","10","270","136",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_binddataset("dsDivDs");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd01","30","195","288","265",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_binddataset("dsDivDs");_a.getSetter("griduserproperty").set("checkbox,!sort,!rowfix,!colfix,!filter,!initial");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd03","742","168","288","265",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_binddataset("dsDivDs");_a.getSetter("griduserproperty").set("status,!sort,!rowfix,!colfix,!filter,!initial");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:Column1\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:Column2\" edittype=\"normal\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd02","380","180","288","265",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_binddataset("dsDivDs");_a.getSetter("griduserproperty").set("no,!sort,!rowfix,!colfix,!filter,!initial");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn00","1080","260","140","45",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("삭제");this.addChild(_a.name,_a);_a=new Button("btn01","1097","176","146","54",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("추가");this.addChild(_a.name,_a);_a=new Grid("grd04","22","478","288","265",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_binddataset("dsDivDs");_a.getSetter("griduserproperty").set("!rowfix,!colfix,!filter,!initial");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column0\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column4\"/><Cell col=\"6\" text=\"Column5\"/><Cell col=\"7\" text=\"Column6\"/><Cell row=\"1\" colspan=\"2\" text=\"sumCol\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" text=\"sumCol02\"/><Cell row=\"1\" col=\"4\" colspan=\"4\" text=\"sumCol03\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column0\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell row=\"1\" colspan=\"2\" text=\"bind:sumCol\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" text=\"bind:sumCol02\"/><Cell row=\"1\" col=\"4\" colspan=\"4\" text=\"bind:sumCol03\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd05","366","490","288","265",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_binddataset("dsDivDs");_a.getSetter("griduserproperty").set("!sort,!colfix,!filter,!initial");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column0\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column4\"/><Cell col=\"6\" text=\"Column5\"/><Cell col=\"7\" text=\"Column6\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column0\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd06","696","490","288","265",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_binddataset("dsDivDs");_a.getSetter("griduserproperty").set("!sort,!rowfix,!filter,!initial");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column0\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column4\"/><Cell col=\"6\" text=\"Column5\"/><Cell col=\"7\" text=\"Column6\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column0\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",1280,720,this,function(_b){});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("DivForm.xfdl",function(){this.DivForm_onload=function(_a,_b){this.gfnFormOnLoad(this);};this.btn00_onclick=function(_a,_b){this.dsDivDs.deleteRow(this.dsDivDs.rowposition);};this.btn01_onclick=function(_a,_b){this.dsDivDs.addRow();};});this.on_initEvent=function(){this.addEventHandler("onload",this.DivForm_onload,this);this.btn00.addEventHandler("onclick",this.btn00_onclick,this);this.btn01.addEventHandler("onclick",this.btn01_onclick,this);};this.loadIncludeScript("DivForm.xfdl");this.loadPreloadList();_a=null;};})();