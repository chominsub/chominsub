(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("CmmDebug");this.set_titletext("디버깅");if(Form==this.constructor){this._setFormPosition(850,600);}_a=new Dataset("dsDataset",this);_a.getSetter("firefirstcount").set("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("dsGDS",this);_a.getSetter("firefirstcount").set("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("dsGrid",this);_a.getSetter("firefirstcount").set("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("dsGridDataset",this);_a.getSetter("firefirstcount").set("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("dsComponents",this);_a.getSetter("firefirstcount").set("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("dsProperties",this);_a.getSetter("firefirstcount").set("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"FUNCTION\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("dsVariableType",this);_a.getSetter("firefirstcount").set("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">FORM</Col><Col id=\"NAME\">Form</Col></Row><Row><Col id=\"CODE\">GLOBAL</Col><Col id=\"NAME\">Global</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("dsVariable",this);_a.getSetter("firefirstcount").set("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"INT\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("dsDatasetView",this);_a.getSetter("firefirstcount").set("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"INT\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static04","0","0",null,null,"0","0",null,null,null,null,this);_a.set_taborder("9");_a.set_text("");this.addChild(_a.name,_a);_a=new Static("Static00","10","10","65","28",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("Local");this.addChild(_a.name,_a);_a=new Combo("cboDataset","86","10","170","28",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_innerdataset("dsDataset");_a.set_codecolumn("PATH");_a.set_datacolumn("NAME");_a.set_displayrowcount("25");_a.set_type("filterlike");this.addChild(_a.name,_a);_a=new Static("Static01","10","45","65","28",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("Global");this.addChild(_a.name,_a);_a=new Combo("cboGDS","86","45","170","28",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_innerdataset("dsGDS");_a.set_codecolumn("NAME");_a.set_datacolumn("PATH");_a.set_displayrowcount("25");_a.set_type("filterlike");this.addChild(_a.name,_a);_a=new Static("Static02","526","10","95","28",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("Grid");this.addChild(_a.name,_a);_a=new Combo("cboGrid","626","10","210","28",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_innerdataset("dsGrid");_a.set_datacolumn("NAME");_a.set_codecolumn("PATH");_a.set_displayrowcount("25");_a.set_text("Combo00");this.addChild(_a.name,_a);_a=new Tab("tabComponent","10","90",null,null,"10","10",null,null,null,null,this);_a.set_taborder("6");_a.set_tabindex("0");_a.getSetter("scrollbars").set("autoboth");this.addChild(_a.name,_a);_a=new Tabpage("tabpage1",this.tabComponent);_a.set_text("Dataset");this.tabComponent.addChild(_a.name,_a);_a=new Grid("grdDataset","1","5",null,null,"1","5",null,null,null,null,this.tabComponent.tabpage1.form);_a.set_taborder("0");_a.getSetter("useinputpanel").set("false");_a.set_binddataset("dsGridDataset");_a.set_cellsizingtype("col");_a.set_cellmovingtype("col");_a.set_selecttype("row");_a._setContents("<Formats/>");this.tabComponent.tabpage1.addChild(_a.name,_a);_a=new Tabpage("tabpage2",this.tabComponent);_a.set_text("SaveXML");this.tabComponent.addChild(_a.name,_a);_a=new TextArea("txtSaveXML","1","5",null,null,"1","5",null,null,null,null,this.tabComponent.tabpage2.form);_a.set_taborder("0");this.tabComponent.tabpage2.addChild(_a.name,_a);_a=new Tabpage("tabpage3",this.tabComponent);_a.set_text("Dataset To Grid");this.tabComponent.addChild(_a.name,_a);_a=new TextArea("txtSetGrid","1","5",null,null,"1","5",null,null,null,null,this.tabComponent.tabpage3.form);_a.set_taborder("0");this.tabComponent.tabpage3.addChild(_a.name,_a);_a=new Tabpage("tabpage4",this.tabComponent);_a.set_text("Grid Format");this.tabComponent.addChild(_a.name,_a);_a=new TextArea("txtGridFormat","1","5",null,null,"1","5",null,null,null,null,this.tabComponent.tabpage4.form);_a.set_taborder("0");this.tabComponent.tabpage4.addChild(_a.name,_a);_a=new Tabpage("tabpage5",this.tabComponent);_a.set_text("Components");this.tabComponent.addChild(_a.name,_a);_a=new Grid("grdProperties","1","5","348",null,null,"5",null,null,null,null,this.tabComponent.tabpage5.form);_a.set_taborder("0");_a.getSetter("useinputpanel").set("false");_a.set_binddataset("dsProperties");_a.set_cellsizingtype("col");_a.set_cellmovingtype("col");_a.set_autofittype("col");_a.set_selecttype("area");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"186\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Properties Name\"/><Cell col=\"1\" text=\"Value\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:NAME\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;\" text=\"bind:VALUE\"/></Band></Format></Formats>");this.tabComponent.tabpage5.addChild(_a.name,_a);_a=new TextArea("txtScript","355","5",null,null,"1","5",null,null,null,null,this.tabComponent.tabpage5.form);_a.set_taborder("1");this.tabComponent.tabpage5.addChild(_a.name,_a);_a=new Tabpage("tabpage6",this.tabComponent);_a.set_text("Variable");this.tabComponent.addChild(_a.name,_a);_a=new Grid("grdVariable","1","49",null,null,"1","5",null,null,null,null,this.tabComponent.tabpage6.form);_a.set_taborder("0");_a.getSetter("useinputpanel").set("false");_a.set_binddataset("dsVariable");_a.set_cellsizingtype("col");_a.set_cellmovingtype("col");_a.set_autofittype("col");_a.set_selecttype("area");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"340\"/><Column size=\"926\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Variable Name\"/><Cell col=\"1\" text=\"Value\"/></Band><Band id=\"body\"><Cell style=\"align:left;color:BIND(COLOR);color2:BIND(COLOR);\" text=\"bind:NAME\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;color:BIND(COLOR);color2:BIND(COLOR);\" text=\"bind:VALUE\"/></Band></Format></Formats>");this.tabComponent.tabpage6.addChild(_a.name,_a);_a=new Combo("cboVariable","125","10","166","30",null,null,null,null,null,null,this.tabComponent.tabpage6.form);_a.set_taborder("1");_a.set_innerdataset("dsVariableType");_a.set_codecolumn("CODE");_a.set_datacolumn("NAME");_a.set_text("Local");_a.set_value("FORM");_a.set_index("0");this.tabComponent.tabpage6.addChild(_a.name,_a);_a=new Static("Static00","10","10","105","30",null,null,null,null,null,null,this.tabComponent.tabpage6.form);_a.set_text("Variable Type");_a.set_taborder("2");this.tabComponent.tabpage6.addChild(_a.name,_a);_a=new Tabpage("tabpage7",this.tabComponent);_a.set_text("Run Script");this.tabComponent.addChild(_a.name,_a);_a=new TextArea("txtScript","10","10",null,null,"111","60",null,null,null,null,this.tabComponent.tabpage7.form);_a.set_taborder("0");_a.set_value("//디버그 실행 예제\n//alert(this.opener.dsList.saveXML());");this.tabComponent.tabpage7.addChild(_a.name,_a);_a=new Button("btnRunScript",null,"11","94","40","8",null,null,null,null,null,this.tabComponent.tabpage7.form);_a.set_taborder("1");_a.set_text("Run Script");this.tabComponent.tabpage7.addChild(_a.name,_a);_a=new TextArea("txtResult","10",null,null,"50","110","10",null,null,null,null,this.tabComponent.tabpage7.form);_a.set_taborder("2");_a.set_readonly("true");this.tabComponent.tabpage7.addChild(_a.name,_a);_a=new Static("Static03","526","45","95","28",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("Component");this.addChild(_a.name,_a);_a=new Combo("cboComponents","626","45","210","28",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_innerdataset("dsComponents");_a.set_codecolumn("PATH");_a.set_datacolumn("NAME");_a.set_displayrowcount("25");this.addChild(_a.name,_a);_a=new Edit("edtGlobal","351","45","150","28",null,null,null,null,null,null,this);_a.set_taborder("10");this.addChild(_a.name,_a);_a=new Edit("edtLocal","351","10","150","28",null,null,null,null,null,null,this);_a.set_taborder("11");this.addChild(_a.name,_a);_a=new Button("btnLocalFilter","266","10","80","28",null,null,null,null,null,null,this);_a.set_taborder("12");_a.set_text("필터해제");this.addChild(_a.name,_a);_a=new Button("btnGlobalFilter","266","45","80","28",null,null,null,null,null,null,this);_a.set_taborder("13");_a.set_text("필터해제");this.addChild(_a.name,_a);_a=new Button("btnCreatSQL",null,"86","80","30","10",null,null,null,null,null,this);_a.set_taborder("14");_a.set_text("SQL 생성");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.tabComponent.tabpage1.form,function(_b){});this.tabComponent.tabpage1.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.tabComponent.tabpage2.form,function(_b){});this.tabComponent.tabpage2.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.tabComponent.tabpage3.form,function(_b){});this.tabComponent.tabpage3.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.tabComponent.tabpage4.form,function(_b){});this.tabComponent.tabpage4.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.tabComponent.tabpage5.form,function(_b){});this.tabComponent.tabpage5.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.tabComponent.tabpage6.form,function(_b){});this.tabComponent.tabpage6.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.tabComponent.tabpage7.form,function(_b){});this.tabComponent.tabpage7.form.addLayout(_a.name,_a);_a=new Layout("default","",this._adjust_width,this._adjust_height,this,function(_b){});this.addLayout(_a.name,_a);_a=new BindItem("item0","tabComponent.tabpage5.form.txtScript","value","dsProperties","FUNCTION");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("CmmDebug.xfdl",function(){this.fvCurrentCombo="cboDataset";this.objApp=this.gfnGetApplication();this.objEnv=nexacro.getEnvironment();this.form_onload=function(_a,_b){this.gfnFormOnLoad(this);this.fnSaveDatasetList(this.opener);this.cboDataset.set_index(0);this.fnMakeDatasetGrid();this.fnSaveGDSList();this.fnSaveGridList(this.opener);this.cboGrid.set_index(0);this.fnSaveComponetsList(this.opener);this.cboComponents.set_index(0);this.dsVariable.clearData();this.fnSaveVariableList(this.opener);this.fnSaveGlobalVariableList();this.dsVariable.set_keystring("S:LVL+NAME");};this.fnSaveDatasetList=function(_b,_c){var _d=_b.objects;for(var _j=0;_j<_d.length;_j++ ){if(_d[_j]+""=="[object Dataset]"){if(_d[_j].id.indexOf("dsPopupMenu_")== -1){var _e=this.dsDataset.addRow();this.dsDataset.setColumn(_e,"NAME",_d[_j].id);if(this.gfnIsNull(_c)){this.dsDataset.setColumn(_e,"PATH",_d[_j].id);}else{var _f=_c+"."+_d[_j].id;this.dsDataset.setColumn(_e,"NAME",_f);this.dsDataset.setColumn(_e,"PATH",_c+"."+_d[_j].id);}}}}var _g=_b.components;var _h;for(var _j=0;_j<_g.length;_j++ ){_h=_g[_j]+"";if(_h=="[object Div]"){if(this.gfnIsNull(_c)){this.fnSaveDatasetList(_g[_j].form,_g[_j].id+".form");}else{this.fnSaveDatasetList(_g[_j].form,_c+"."+_g[_j].id+".form");}}else if(_h=="[object Tab]"){var _i=_g[_j].tabpages;for(var _k=0;_k<_i.length;_k++ ){if(this.gfnIsNull(_c)){this.fnSaveDatasetList(_i[_k].form,_g[_j].id+_i[_k].id+".form");}else{this.fnSaveDatasetList(_i[_k].form,_c+"."+_g[_j].id+_i[_k].id+".form");}}}}};this.fnSaveGridList=function(_b,_c){var _d;var _e=_b.components;for(var _i=0;_i<_e.length;_i++ ){_d=_e[_i]+"";if(_e[_i]+""=="[object Grid]"){var _f=this.dsGrid.addRow();var _g=this.gfnIsNull(_c)?_e[_i].name:_c+"."+_e[_i].name;this.dsGrid.setColumn(_f,"NAME",_g);if(this.gfnIsNull(_c)){this.dsGrid.setColumn(_f,"PATH",_e[_i].name);}else{this.dsGrid.setColumn(_f,"PATH",_c+"."+_e[_i].name);}}if(_d=="[object Div]"){if(this.gfnIsNull(_c)){this.fnSaveGridList(_e[_i].form,_e[_i].name+".form");}else{this.fnSaveGridList(_e[_i].form,_c+"."+_e[_i].name+".form");}}else if(_d=="[object Tab]"){var _h=_e[_i].tabpages;for(var _j=0;_j<_h.length;_j++ ){if(this.gfnIsNull(_c)){this.fnSaveGridList(_h[_j].form,_e[_i].name+_h[_j].name+".form");}else{this.fnSaveGridList(_h[_j].form,_c+"."+_e[_i].name+_h[_j].name+".form");}}}}};this.fnSaveComponetsList=function(_b,_c){var _d;var _e=_b.components;for(var _i=0;_i<_e.length;_i++ ){_d=_e[_i]+"";if(_d=="[object Div]"){if(this.gfnIsNull(_c)){this.fnSaveComponetsList(_e[_i].form,_e[_i].name+".form");}else{this.fnSaveComponetsList(_e[_i].form,_c+"."+_e[_i].name+".form");}}else if(_d=="[object Tab]"){var _f=_e[_i].tabpages;for(var _j=0;_j<_f.length;_j++ ){if(this.gfnIsNull(_c)){this.fnSaveComponetsList(_f[_j].form,_e[_i].name+_f[_j].name+".form");}else{this.fnSaveComponetsList(_f[_j].form,_c+"."+_e[_i].name+_f[_j].name+".form");}}}else{if(!this.gfnIsNull(_c)){var _g=this.dsComponents.addRow();var _h=_c+"."+_e[_i].name;this.dsComponents.setColumn(_g,"NAME",_h);if(this.gfnIsNull(_c)){this.dsComponents.setColumn(_g,"PATH",_e[_i].name);}else{this.dsComponents.setColumn(_g,"PATH",_c+"."+_e[_i].name);}}}}};this.fnSaveGDSList=function(){var _b=this.objApp.all;for(var _d=0;_d<_b.length;_d++ ){if(_b[_d]+""=="[object Dataset]"){try{if(_b[_d].id.indexOf(".")== -1){var _c=this.dsGDS.addRow();this.dsGDS.setColumn(_c,"NAME",_b[_d].id);this.dsGDS.setColumn(_c,"PATH",_b[_d].id);}}catch(e){trace(">>>> e Message"+e);}}}};this.fnMakeDatasetGrid=function(){var _b;if(this.fvCurrentCombo=="cboDataset"){if(this.cboDataset.index== -1){return;}_b=eval("this.opener."+this.cboDataset.value);}else{if(this.cboGDS.index== -1){return;}_b=this.objApp[this.cboGDS.text];}this.dsDatasetView.assign(_b);if(_b.getColCount()<1){var _c="";_c+='<Formats>\n';_c+='<Format id="default">\n';_c+='<Columns></Columns>\n';_c+='<Rows><Row size="24" band="head" /><Row size="24" /></Rows>\n';_c+='<Band id="head"></Band>\n';_c+='<Band id="body"></Band>\n';_c+='</Format>\n';_c+='</Formats>';this.tabComponent.tabpage1.form.Grid00.set_formats(_c);return;}var _d='    <Column size="30" />\n';var _e='    <Cell col="0" text=""/>\n';var _f='    <Cell col="0" displaytype="normal" text="expr:(dataset.getRowType(currow)==2)?\'I\':(dataset.getRowType(currow)==4)?\'M\':(dataset.getRowType(currow)==8)?\'\':\'\'"/>\n';for(var _l=0;_l<_b.getColCount();_l++ ){var _g=_b.getColumnInfo(_l);var _h="";var _i="";var _j="";try{_h=_g.name;_i=parseInt(_g.size);_j=_g.type.toUpperCase();}catch(e){_h="undefined";_i=50;_j="STRING";}var _k="";if(_j=="STRING"){_i=_i* 9;if(_i<_h.length* 9){_i=_h.length* 9;}if(_i>200){_d+='    <Column size="200" />\n';}else{_d+='    <Column size="'+_i+'" />\n';}_k='style="align:left;"';}else if(_j=="INT"){_d+='<Column size="80" />\n';_k='style="align:right;"';}else if(_j=="FLOAT"){_d+='<Column size="80" />\n';_k='style="align:right;"';}else if(_j=="DATE"){_d+='<Column size="88" />\n';_k='style="align:center;"';}else if(_j=="TIME"){_d+='<Column size="88" />\n';_k='style="align:center;"';}else if(_j=="DATETIME"){_d+='<Column size="120" />\n';_k='style="align:center;"';}else if(_j=="BIGDECIMAL"){_d+='<Column size="120" />\n';_k='style="align:right;"';}else{_d+='<Column size="120" />\n';_k='style="align:left;"';}_e+='    <Cell col="'+(_l+1)+'" text="'+_h+'"/>\n';_f+='    <Cell col="'+(_l+1)+'" '+_k+' text="bind:'+_h+'" displaytype="normal" edittype="normal"/>\n';}var _c="";_c+='<Formats>\n';_c+='<Format id="default">\n';_c+='<Columns>\n'+_d.substring(0,_d.length-1)+'\n</Columns>\n';_c+='<Rows>\n    <Row size="24" band="head" />\n    <Row size="24" />\n</Rows>\n';_c+='<Band id="head">\n'+_e.substring(0,_e.length-1)+'\n</Band>\n';_c+='<Band id="body">\n'+_f.substring(0,_f.length-1)+'\n</Band>\n';_c+='</Format>\n';_c+='</Formats>';this.tabComponent.tabpage1.form.grdDataset.set_binddataset(this.dsDatasetView);this.tabComponent.tabpage1.form.grdDataset.set_formats(_c);};this.fnMakeDatasetXml=function(){var _b;if(this.fvCurrentCombo=="cboDataset"){if(this.cboDataset.index== -1){return;}_b=eval("this.opener."+this.cboDataset.value);}else{if(this.cboGDS.index== -1){return;}_b=this.objApp[this.cboGDS.text];}var _c=nexacro.replaceAll(_b.saveXML(),'<Dataset id="'+_b.id+'">','');_c=nexacro.replaceAll(_c,'</Dataset>','');this.tabComponent.tabpage2.form.txtSaveXML.set_value(_c);};this.fnMakeDatasetGridFormat=function(){this.tabComponent.tabpage3.form.txtSetGrid.set_value(this.tabComponent.tabpage1.form.grdDataset.formats);};this.fnMakeGridFormats=function(){if(this.cboGrid.index== -1){return;}var _b=eval("this.opener."+this.cboGrid.value);var _c=nexacro.replaceAll(_b.formats,"><",">\n<");_c=nexacro.replaceAll(_c,"<Column ","    <Column ");_c=nexacro.replaceAll(_c,"<Cell ","    <Cell ");_c=nexacro.replaceAll(_c,"<Row ","    <Row ");var _d="";for(var _e=0;_e<_b.getCellCount("Body");_e++ ){_d+='    <Column size="'+_b.getRealColSize(_e,true)+'"/>\n';}_c=_c.split("<Columns>")[0]+"<Columns>\n"+_d+"</Columns>"+_c.split("</Columns>")[1];this.tabComponent.tabpage4.form.txtGridFormat.set_value(_c);this.tabComponent.set_tabindex(3);};this.fnMakeCompoentsData=function(){if(this.cboComponents.index== -1){return;}var _b=eval("this.opener."+this.cboComponents.value);this.dsProperties.clearData();this.dsProperties.set_enableevent(false);for(var _f in _b){var _c=_b[_f]+"";if(_f[0]=="_"){continue;}if(_c=="[object Object]"){continue;}if(_c.substring(0,8)=="function"){continue;}if(_c.substring(0,7)=="control"){continue;}if(this.gfnIsNull(_c)){var _d=this.dsProperties.addRow();this.dsProperties.setColumn(_d,"NAME",_f);this.dsProperties.setColumn(_d,"VALUE","");}else{if(_c.indexOf("[object")!= -1){if(_c.indexOf("EventListener")!= -1){var _e=_b.getEventHandler(_f,0);if(!this.gfnIsNull(_e)){var _d=this.dsProperties.addRow();this.dsProperties.setColumn(_d,"NAME",_f);this.dsProperties.setColumn(_d,"VALUE","function");this.dsProperties.setColumn(_d,"FUNCTION",_e);this.dsProperties.setColumn(_d,"COLOR","red");}}}else{var _d=this.dsProperties.addRow();this.dsProperties.setColumn(_d,"NAME",_f);this.dsProperties.setColumn(_d,"VALUE",_c);}}}this.dsProperties.set_enableevent(true);this.dsProperties.set_rowposition(0);};this.fnSaveVariableList=function(_b,_c){var _d=_b+"";this.dsVariable.set_enableevent(false);for(var _k in _b){var _e=_k.substr(0,2).toUpperCase();if(_e=="FV"){var _f=_b[_k]+"";if(_f.indexOf("[object")!= -1){continue;}if(_f.substring(0,8)=="function"){continue;}if(!_b.hasOwnProperty(_k)){continue;}var _g=this.dsVariable.addRow();var _h=this.gfnIsNull(_c)?"this."+_k:_c+"."+_k;this.dsVariable.setColumn(_g,"NAME",_h);this.dsVariable.setColumn(_g,"VALUE",_f);this.dsVariable.setColumn(_g,"TYPE","FORM");this.dsVariable.setColumn(_g,"LVL",_k.split(".").length);}}this.dsVariable.set_enableevent(true);_d="";var _i=_b.components;for(var _l=0;_l<_i.length;_l++ ){_d=_i[_l]+"";if(_d=="[object Div]"){if(this.gfnIsNull(_c)){this.fnSaveVariableList(_i[_l].form,_i[_l].name+".form");}else{this.fnSaveVariableList(_i[_l].form,_c+"."+_i[_l].name+".form");}}else if(_d=="[object Tab]"){var _j=_i[_l].tabpages;for(var _m=0;_m<_j.length;_m++ ){if(this.gfnIsNull(_c)){this.fnSaveVariableList(_j[_m].form,_i[_l].name+_j[_m].name+".form");}else{this.fnSaveVariableList(_j[_m].form,_c+"."+_i[_l].name+_j[_m].name+".form");}}}}};this.fnSaveGlobalVariableList=function(){this.dsVariable.set_enableevent(false);var _b=this.objApp;for(var _f in _b){var _c=_f.substr(0,2).toUpperCase();if(_c=="GV"){var _d=_b[_f]+"";if(_d.indexOf("[object")!= -1){continue;}if(_d.substring(0,8)=="function"){continue;}if(!_b.hasOwnProperty(_f)){continue;}if(this.dsVariable.findRow("NAME",_f)== -1){var _e=this.dsVariable.addRow();this.dsVariable.setColumn(_e,"NAME",_f);this.dsVariable.setColumn(_e,"VALUE",_d);this.dsVariable.setColumn(_e,"TYPE","GLOBAL");this.dsVariable.setColumn(_e,"LVL",0);}}}this.dsVariable.set_enableevent(true);};this.fnMakeVariableList=function(){this.dsVariable.filter("TYPE == '"+this.tabComponent.tabpage6.form.cboVariable.value+"'");this.dsVariable.set_rowposition(0);};this.fnExecScript=function(_a,_b){try{var _c=eval(this.tabComponent.tabpage7.form.txtScript.text);if(this.gfnIsNull(_c)){_c="";}this.tabComponent.tabpage7.form.txtResult.set_value("★★★ 성공 : "+_c);}catch(ex){this.tabComponent.tabpage7.form.txtResult.set_value("＠＠＠ 실패 : "+ex);}};this.tabComponent_onchanged=function(_a,_b){var _c=this.tabComponent.tabindex;switch(_c){case 0:this.fnMakeDatasetGrid();break;case 1:this.fnMakeDatasetXml();break;case 2:this.fnMakeDatasetGridFormat();break;case 3:this.fnMakeGridFormats();break;case 4:this.fnMakeCompoentsData();break;case 5:this.fnMakeVariableList();break;default:break;}};this.cboDataset_onitemchanged=function(_a,_b){this.fvCurrentCombo=_a.name;this.edtLocal.set_value(_a.text);this.edtGlobal.set_value("");this.tabComponent.set_tabindex(0);this.tabComponent_onchanged();};this.cboGDS_onitemchanged=function(_a,_b){this.fvCurrentCombo=_a.name;this.edtGlobal.set_value(_a.value);this.edtLocal.set_value("");this.tabComponent.set_tabindex(0);this.tabComponent_onchanged();};this.cboComponents_onitemchanged=function(_a,_b){this.tabComponent.set_tabindex(4);this.tabComponent_onchanged();};this.tabComponent_tabpage6_cboVariable_onitemchanged=function(_a,_b){this.dsVariable.filter("TYPE == '"+this.tabComponent.tabpage6.form.cboVariable.value+"'");this.dsVariable.set_rowposition(0);};this.edtLocal_onkeydown=function(_a,_b){if(_b.keycode==13){var _c=this.dsDataset.findRow("NAME",_a.value);if(_c!= -1){fvCurrentCombo="local";this.cboDataset.set_index(_c);this.fnMakeDatasetGrid();this.cboDataset_onitemchanged(this.cboDataset);}}};this.edtGlobal_onkeydown=function(_a,_b){if(_b.keycode==13){var _c=this.dsGDS.findRow("NAME",_a.value);if(_c!= -1){fvCurrentCombo="global";this.cboGDS.set_index(_c);this.cboGDS_onitemchanged(this.cboGDS);}}};this.btnCreatSQL_onclick=function(_a,_b){var _c="";var _d=this.tabComponent.tabpage1.form.grdDataset.getBindDataset();for(var _i=0;_i<_d.getRowCount();_i++ ){var _e="";var _f="";for(var _j=0;_j<_d.getColCount();_j++ ){var _g=_d.getColID(_j);var _h=this.gfnNvl(_d.getColumn(_i,_g),"NULL");if(_h!="NULL"){_h="'"+_h+"'";}if(_j==0){_e=_g;_f=_h;}else{_e+=", "+_g;_f+=", "+_h;}}_c+="INSERT INTO "+_d.id+" ("+_e+") VALUES ("+_f+");\n";}trace(_c);system.clearClipboard();system.setClipboard("CF_TEXT",_c);};this.combo_onkeydown=function(_a,_b){system.clearClipboard();system.setClipboard("CF_TEXT",_a.text);};this.btnLocalFilter_onclick=function(_a,_b){var _c=eval("this.opener."+this.cboDataset.value);_c.filter("");};this.btnGlobalFilter_onclick=function(_a,_b){var _c=this.objApp[this.cboGDS.text];_c.filter("");};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);this.cboDataset.addEventHandler("onitemchanged",this.cboDataset_onitemchanged,this);this.cboDataset.addEventHandler("onkeydown",this.combo_onkeydown,this);this.cboGDS.addEventHandler("onkeydown",this.combo_onkeydown,this);this.cboGDS.addEventHandler("onitemchanged",this.cboGDS_onitemchanged,this);this.cboGrid.addEventHandler("onitemchanged",this.fnMakeGridFormats,this);this.cboGrid.addEventHandler("onkeydown",this.combo_onkeydown,this);this.tabComponent.addEventHandler("onchanged",this.tabComponent_onchanged,this);this.tabComponent.tabpage6.form.cboVariable.addEventHandler("onitemchanged",this.tabComponent_tabpage6_cboVariable_onitemchanged,this);this.tabComponent.tabpage7.form.btnRunScript.addEventHandler("onclick",this.fnExecScript,this);this.cboComponents.addEventHandler("onitemchanged",this.cboComponents_onitemchanged,this);this.cboComponents.addEventHandler("onkeydown",this.combo_onkeydown,this);this.edtGlobal.addEventHandler("onkeydown",this.edtGlobal_onkeydown,this);this.edtLocal.addEventHandler("onkeydown",this.edtLocal_onkeydown,this);this.btnLocalFilter.addEventHandler("onclick",this.btnLocalFilter_onclick,this);this.btnGlobalFilter.addEventHandler("onclick",this.btnGlobalFilter_onclick,this);this.btnCreatSQL.addEventHandler("onclick",this.btnCreatSQL_onclick,this);};this.loadIncludeScript("CmmDebug.xfdl");this.loadPreloadList();_a=null;};})();