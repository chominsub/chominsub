(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("LeftFrame");this.set_titletext("frameLeft");this.set_background("#302161");if(Form==this.constructor){this._setFormPosition(220,718);}_a=new Dataset("dsMenu",this);_a.getSetter("firefirstcount").set("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME_EN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("dsPdivMenu",this);_a._setContents("<ColumnInfo><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME_EN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Button("btnOpenMenuFind","78","4","24","24",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_cssclass("btn_LF_Find");this.addChild(_a.name,_a);_a=new Grid("grdMyMenu","10","30","200",null,null,"0",null,null,null,null,this);_a.set_treeinitstatus("collapse,null");_a.set_autofittype("col");_a.set_treeusecheckbox("false");_a.set_cellsizingtype("col");_a.set_binddataset("gdsMyMenu");_a.set_treeuseline("false");_a.set_treeuseimage("false");_a.set_taborder("1");_a.set_visible("false");_a.set_cssclass("grd_LF_Tree");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"208\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" tooltiptext=\"bind:MENU_NAME\" textAlign=\"left\" padding=\"0px 0px 0px 5px\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grdTree","10","30","200",null,null,"0",null,null,null,null,this);_a.set_treeinitstatus("collapse,null");_a.set_cssclass("grd_LF_Tree");_a.set_autofittype("col");_a.set_treeusecheckbox("false");_a.set_cellsizingtype("col");_a.set_binddataset("dsMenu");_a.set_treeuseline("false");_a.set_treeuseimage("false");_a.set_taborder("0");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"208\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell edittype=\"tree\" text=\"bind:MENU_NAME\" treestartlevel=\"1\" treelevel=\"bind:MENU_LEVEL\" tooltiptext=\"bind:MENU_NAME\" textAlign=\"left\" displaytype=\"treeitemcontrol\"/></Band></Format><Format id=\"mymenu\"><Columns><Column size=\"48\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new PopupDiv("pdivMenuSearch","234","68","200","213",null,null,null,null,null,null,this);_a.set_text("pdiv00");this.addChild(_a.name,_a);_a=new Grid("grdMenuSearch","0","30","200","183",null,null,null,null,null,null,this.pdivMenuSearch.form);_a.set_taborder("0");_a.set_autofittype("col");_a.set_binddataset("dsPdivMenu");_a.set_cssclass("grd_WF_Detail");_a.set_nodatatext("no data");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"211\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" textAlign=\"left\" padding=\"0px 0px 0px 5px\"/></Band></Format></Formats>");this.pdivMenuSearch.addChild(_a.name,_a);_a=new Edit("edtMenuSearch","2","2",null,"26","2",null,null,null,null,null,this.pdivMenuSearch.form);_a.set_taborder("1");_a.set_cssclass("edt_LF_Search");_a.set_displaynulltext("메뉴를 검색하세요");_a.set_autoselect("true");this.pdivMenuSearch.addChild(_a.name,_a);_a=new Button("btnMenuSearch","174","4","21","21",null,null,null,null,null,null,this.pdivMenuSearch.form);_a.set_taborder("2");_a.set_cssclass("btn_LF_Search");this.pdivMenuSearch.addChild(_a.name,_a);_a=new Button("btnMenu","10","4","24","24",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_visible("true");_a.set_cssclass("btn_LF_MenuIcon");this.addChild(_a.name,_a);_a=new Button("btnMyMenu","44","4","24","24",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_visible("true");_a.set_cssclass("btn_LF_MymenuIcon");this.addChild(_a.name,_a);_a=new Button("btnHome","110","0","30","30",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_cssclass("btn_MDI_Home");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.pdivMenuSearch.form,function(_b){});this.pdivMenuSearch.form.addLayout(_a.name,_a);_a=new Layout("default","",this._adjust_width,this._adjust_height,this,function(_b){});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("FrameLeft.xfdl",function(){this.fvObjApp=this.gfnGetApplication();this.form_onload=function(_a,_b){this.set_scrollbartype("none");this.btnMenu.setSelectStatus(true);var _c=nexacro.getPrivateProfile("gdsMyMenu");if(!this.gfnIsNull(_c)){this.fvObjApp.gdsMyMenu.loadXML(_c);}};this.fnChangeLang=function(){var _b=nexacro.getEnvironmentVariable("evLanguage");if(_b!="KO"){this.grdTree.setCellProperty("Body",0,"text","bind:MENU_NAME_"+_b);this.grdTree.setCellProperty("Body",0,"tooltiptext","bind:MENU_NAME_"+_b);this.grdMyMenu.setCellProperty("Body",0,"text","bind:MENU_NAME_"+_b);this.pdivMenuSearch.form.edtMenuSearch.set_displaynulltext("Search the menu.");this.pdivMenuSearch.form.grdMenuSearch.setCellProperty("Body",0,"text","bind:MENU_NAME_"+_b);}};this.fnChangeMenu=function(_b){var _c="";if(this.fvObjApp.gvHFrame.separatesize=="0,*"){this.fvObjApp.gvHFrame.set_separatesize("220,*");_c="btn_LF_Close";var _d=this.fvObjApp.gvWorkFrame.frames.length;if(this.fvObjApp.gdsOpenMenu.getRowCount()<1){return;}for(var _f=0;_f<_d;_f++ ){this.fvObjApp.gvWorkFrame.frames[_f].form.btnMenuOpen.set_cssclass(_c);}}var _e=this.FRAME_MENUCOLUMNS.groupId+" == "+nexacro.wrapQuote(_b)+" && "+this.FRAME_MENUCOLUMNS.menuLevel+"!=0 && USE_YN=='Y'";this.fvObjApp.gdsMenu.set_enableevent(false);this.dsMenu.set_enableevent(false);this.fvObjApp.gdsMenu.filter(_e);this.dsMenu.copyData(this.fvObjApp.gdsMenu,true);this.fvObjApp.gdsMenu.filter("");this.fvObjApp.gdsMenu.set_enableevent(true);this.dsMenu.set_enableevent(true);};this.fnFormOpen=function(_b,_c,_d){if(this.gfnIsNull(_b)){return;}if(this.gfnIsNull(_c)){return;}var _e={ds:_b,nRow:_c,oArgs:_d};this.gfnCall(_e);};this.fnGlobalMenuCopy=function(){this.fvObjApp.gdsMenu.filter("MENU_URL.length > 0 && USE_YN=='Y'");this.dsPdivMenu.copyData(this.fvObjApp.gdsMenu,true);this.fvObjApp.gdsMenu.filter("");};this.grdTree_oncellclick=function(_a,_b){if(_b.clickitem=="treeitembutton"){return;}var _c=_a.getTreeRow(_b.row);var _d=_a.getTreeStatus(_c)^1;if(_d!=2){_a.setTreeStatus(_c,_d);}this.fnExceptSelfCollapse(_a,_b.row);var _e=_a.getBindDataset();var _f=_e.getColumn(_b.row,"MENU_ID");if(this.gfnIsNull(_f)==false){this.fnFormOpen(_e,_b.row);}};this.grdMyMenu_oncellclick=function(_a,_b){var _c=_a.getBindDataset();var _d=_c.getColumn(_b.row,"MENU_ID");if(this.gfnIsNull(_d)==false){this.fnFormOpen(_c,_b.row);}};this.btnMenu_onclick=function(_a,_b){this.grdTree.set_visible(true);this.grdMyMenu.set_visible(false);this.btnMenu.setSelectStatus(true);this.btnMyMenu.setSelectStatus(false);};this.btnMyMenu_onclick=function(_a,_b){this.grdTree.set_visible(false);this.grdMyMenu.set_visible(true);this.btnMenu.setSelectStatus(false);this.btnMyMenu.setSelectStatus(true);};this.fnExceptSelfCollapse=function(_a,_b){_a.set_enableredraw(false);_a.set_enableevent(false);var _c=_a.getTreePath(_b);var _d;for(var _e=_b+1;_e<_a.getBindDataset().rowcount;_e++ ){_d=_a.isTreeLeafRow(_e);if(!_d){if(_a.getTreePath(_e).indexOf(_c)> -1){_a.setTreeStatus(_a.getTreeRow(_e),true);_c=_a.getTreePath(_e);}else{_a.setTreeStatus(_a.getTreeRow(_e),false);}}}for(var _e=_b;_e>=0; --_e){_d=_a.isTreeLeafRow(_e);if(!_d){if(_c.indexOf(_a.getTreePath(_e))> -1){}else{_a.setTreeStatus(_a.getTreeRow(_e),false);}}}_a.set_enableevent(true);_a.set_enableredraw(true);};this.edtMenuSearch_onkeydown=function(_a,_b){if(_b.keycode==13){var _c=_a.value;this.fnSearchMenu(_c);}};this.btnOpenMenuFind_onclick=function(_a,_b){this.pdivMenuSearch.trackPopupByComponent(this.grdTree,0,0);this.pdivMenuSearch.form.edtMenuSearch.setFocus();};this.btnMenuSearch_onclick=function(_a,_b){var _c=this.edtMenuSearch.value;this.fnSearchMenu(_c);};this.fnSearchMenu=function(_b){if(this.gfnIsNull(_b)){return;}_b=_b.trim();this.dsPdivMenu.set_enableevent(false);this.pdivMenuSearch.form.grdMenuSearch.set_enableredraw(false);this.dsPdivMenu.filter("");_b=_b.toLowerCase();this.dsPdivMenu.filter("MENU_NAME.toLowerCase().indexOf('"+_b+"') > -1 || MENU_NAME_EN.toLowerCase().indexOf('"+_b+"') > -1");this.dsPdivMenu.set_enableevent(true);this.pdivMenuSearch.form.grdMenuSearch.set_enableredraw(true);if(this.dsPdivMenu.rowcount>0){this.pdivMenuSearch.form.grdMenuSearch.setFocus();this.pdivMenuSearch.form.grdMenuSearch.selectCell(0,0,true);}else{this.pdivMenuSearch.form.edtMenuSearch.setFocus();}};this.pdivMenuSearch_grdMenuSearch_oncellclick=function(_a,_b){if(_b.row> -1){this.fnFormOpen(this.dsPdivMenu,_b.row);this.pdivMenuSearch.closePopup();}};this.pdivMenuSearch_grdMenuSearch_onkeydown=function(_a,_b){if(_b.keycode==13){if(_a.currentrow> -1){this.fnFormOpen(this.dsPdivMenu,_a.currentrow);this.pdivMenuSearch.closePopup();}}};this.btnhome_onclick=function(_a,_b){this.fvObjApp.gvVFrameSet1.set_separatesize("30,*,0");};});this.on_initEvent=function(){this.addEventHandler("onsize",this.Form_onsize,this);this.addEventHandler("onload",this.form_onload,this);this.btnOpenMenuFind.addEventHandler("onclick",this.btnOpenMenuFind_onclick,this);this.grdMyMenu.addEventHandler("oncellclick",this.grdMyMenu_oncellclick,this);this.grdTree.addEventHandler("oncellclick",this.grdTree_oncellclick,this);this.pdivMenuSearch.form.grdMenuSearch.addEventHandler("oncellclick",this.pdivMenuSearch_grdMenuSearch_oncellclick,this);this.pdivMenuSearch.form.grdMenuSearch.addEventHandler("onkeydown",this.pdivMenuSearch_grdMenuSearch_onkeydown,this);this.pdivMenuSearch.form.edtMenuSearch.addEventHandler("onkeydown",this.edtMenuSearch_onkeydown,this);this.pdivMenuSearch.form.btnMenuSearch.addEventHandler("onclick",this.btnMenuSearch_onclick,this);this.btnMenu.addEventHandler("onclick",this.btnMenu_onclick,this);this.btnMyMenu.addEventHandler("onclick",this.btnMyMenu_onclick,this);this.btnHome.addEventHandler("onclick",this.btnhome_onclick,this);};this.loadIncludeScript("FrameLeft.xfdl");this.loadPreloadList();_a=null;};})();