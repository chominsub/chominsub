(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Comp_Radio");this.set_titletext("Component-Radio");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Dataset("ds_dept",this);_a._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static04","10","40","270","28",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text(" Basic Usage - innerdataset");_a.set_cssclass("sta_WF_TypeTitle");this.addChild(_a.name,_a);_a=new Static("Static02","10","230","547","28",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text(" Column Count & Row Count (Prop. columncount, rowcount)");_a.set_cssclass("sta_WF_TypeTitle");this.addChild(_a.name,_a);_a=new Radio("Radio01","20","296","203","140",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_columncount("2");_a.set_rowcount("4");var _b=new nexacro.NormalDataset("Radio01_innerdataset",_a);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SU</Col><Col id=\"datacolumn\">Sunday</Col></Row><Row><Col id=\"codecolumn\">MO</Col><Col id=\"datacolumn\">Monday</Col></Row><Row><Col id=\"codecolumn\">TU</Col><Col id=\"datacolumn\">Tuesday</Col></Row><Row><Col id=\"codecolumn\">WE</Col><Col id=\"datacolumn\">Wednesday</Col></Row><Row><Col id=\"codecolumn\">TH</Col><Col id=\"datacolumn\">Thursday</Col></Row><Row><Col id=\"codecolumn\">FR</Col><Col id=\"datacolumn\">Friday</Col></Row><Row><Col id=\"codecolumn\">SA</Col><Col id=\"datacolumn\">Saturday</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_value("SA");_a.set_index("6");this.addChild(_a.name,_a);_a=new Radio("Radio02","154","73","134","130",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_codecolumn("DEPT_CD");_a.set_datacolumn("DEPT_NAME");_a.set_innerdataset("ds_dept");_a.set_value("03");_a.set_index("2");this.addChild(_a.name,_a);_a=new Radio("Radio03","20","73","101","70",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");var _c=new nexacro.NormalDataset("Radio03_innerdataset",_a);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row></Rows>");_a.set_innerdataset(_c);_a.set_value("M");_a.set_index("0");this.addChild(_a.name,_a);_a=new CheckBox("CheckBox00","20","263","410","28",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("Direction (Prop. direction - horizontal, vertical)");this.addChild(_a.name,_a);_a=new Static("Static99","10","0","250","28",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("Radio");_a.set_cssclass("sta_WF_FrmTitle");_a.set_positionstep("-1");this.addChild(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_d){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);_a=new BindItem("item0","Button01","text","gds_dept","DEPT_NM");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("Comp_Radio.xfdl",function(){this.Radio00_onitemchanged=function(_a,_b){if(_b.postvalue=="readonly"){this.cmb_type.set_readonly(true);}else{this.cmb_type.set_readonly(false);this.cmb_type.set_type(_b.postvalue);}};this.CheckBox00_onclick=function(_a,_b){if(_a.value){this.Radio01.set_direction("vertical");}else{this.Radio01.set_direction("horizontal");}};});this.on_initEvent=function(){this.Radio02.addEventHandler("onitemchanged",this.Radio02_onitemchanged,this);this.CheckBox00.addEventHandler("onclick",this.CheckBox00_onclick,this);};this.loadIncludeScript("Comp_Radio.xfdl");this.loadPreloadList();_a=null;};})();