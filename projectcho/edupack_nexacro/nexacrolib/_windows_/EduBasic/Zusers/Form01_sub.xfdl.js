(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("PopupDiv01_Sub");this.set_titletext("New Form");if(Form==this.constructor){this._setFormPosition(300,300);}_a=new Dataset("Dataset1",this);_a._setContents("<ColumnInfo><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR101</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR102</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR103</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR104</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Kate </Col><Col id=\"EMPL_ID\">KR105</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR106</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR107</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR108</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Elsa</Col><Col id=\"EMPL_ID\">KR109</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Ivy</Col><Col id=\"EMPL_ID\">KR111</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR112</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR113</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Grid("grd00","10","13","283","185",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_binddataset("Dataset1");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_NAME\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"EMPL_ID\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_NAME\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:EMPL_ID\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn00","20","226","112","48",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("shwModal");this.addChild(_a.name,_a);_a=new Button("btn01","163","230","96","46",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("open");this.addChild(_a.name,_a);_a=new Layout("default","",300,300,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("Form01_sub.xfdl",function(){this.btn00_onclick=function(_a,_b){var _c=this.Dataset1.getColumn(this.Dataset1.rowposition,"DEPT_NAME");var _d=this.Dataset1.getColumn(this.Dataset1.rowposition,"FULL_NAME");this.close(_c+":"+_d);};this.btn01_onclick=function(_a,_b){this.opener.fn_return(this.Dataset1);this.close();};this.PopupDiv01_Sub_onload=function(_a,_b){var _c=this.parent.param1;var _d=this.parent.param2;trace("strParam1=="+_c);trace("strParam2=="+_d.saveXML());};});this.on_initEvent=function(){this.addEventHandler("onload",this.PopupDiv01_Sub_onload,this);this.btn00.addEventHandler("onclick",this.btn00_onclick,this);this.btn01.addEventHandler("onclick",this.btn01_onclick,this);};this.loadIncludeScript("Form01_sub.xfdl");this.loadPreloadList();_a=null;};})();