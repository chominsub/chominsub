(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("XPush_T_UserMessage");this.set_titletext("T_UserMessage 테이블확인");if(Form==this.constructor){this._setFormPosition(800,600);}_a=new Dataset("ds_usermessage",this);_a.set_keystring("");_a._setContents("<ColumnInfo><Column id=\"ID\" type=\"INT\" size=\"10\"/><Column id=\"PROJECT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"50\"/><Column id=\"MESSAGE_ID\" type=\"STRING\" size=\"10\"/><Column id=\"MESSAGE_STATE\" type=\"STRING\" size=\"10\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","10","40",null,"50","10",null,null,null,null,null,this);_a.set_taborder("4");_a.getSetter("leftbase").set("");_a.getSetter("topbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");_a.set_cssclass("div_WFSA");this.addChild(_a.name,_a);_a=new Static("Static04","16","13","46","24",null,null,null,null,null,null,this.div_search.form);_a.set_taborder("1");_a.set_text("Type");this.div_search.addChild(_a.name,_a);_a=new Static("st_title","10","5","193","30",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("T_USER_MESSAGE ");_a.getSetter("leftbase").set("");_a.getSetter("topbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");_a.set_cssclass("sta_WF_emptitle");this.addChild(_a.name,_a);_a=new Button("btn_retrieve",null,"5","60","30","9",null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("조회");_a.getSetter("leftbase").set("");_a.getSetter("topbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");this.addChild(_a.name,_a);_a=new Grid("grd_list","10","95",null,null,"396","10",null,null,null,null,this);_a.set_taborder("3");_a.getSetter("leftbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");_a.set_binddataset("ds_usermessage");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"PROJECT_ID\"/><Cell col=\"2\" text=\"USER_ID\"/><Cell col=\"3\" text=\"MESSAGE_ID\"/><Cell col=\"4\" text=\"MESSAGE_STATE\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:PROJECT_ID\"/><Cell col=\"2\" text=\"bind:USER_ID\"/><Cell col=\"3\" text=\"bind:MESSAGE_ID\"/><Cell col=\"4\" text=\"bind:MESSAGE_STATE\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_detail",null,"95","380",null,"10","10",null,null,null,null,this);_a.set_taborder("2");_a.set_text("Div00");_a.getSetter("leftbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");this.addChild(_a.name,_a);_a=new Static("Static02","128","12","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("1");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Static("Static01","128","45","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("2");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Static("Static09","128","78","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("3");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Edit("edt_name","133","17","162","24",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("0");this.div_detail.addChild(_a.name,_a);_a=new Static("staID","9","12","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("4");_a.set_text("id");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Static("staUserId","9","45","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("5");_a.set_text("PROJECT ID");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Edit("edt_name00","133","50","162","24",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("6");this.div_detail.addChild(_a.name,_a);_a=new Static("staUserId00","9","78","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("7");_a.set_text("사용자ID");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Edit("edt_name00_00","133","83","162","24",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("8");this.div_detail.addChild(_a.name,_a);_a=new Static("staUserId00_00","9","111","360","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("9");_a.set_text("MESSAGE ID");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Edit("edt_name00_00_01","9","151","359","27",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("10");this.div_detail.addChild(_a.name,_a);_a=new Static("staUserId00_00_00","9","184","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("11");_a.set_text("MESSAGE STATE");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Static("Static09_00_00","128","184","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("12");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Edit("edt_name00_00_02","133","189","162","24",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("13");this.div_detail.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_search.form,function(_b){});this.div_search.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_detail.form,function(_b){});this.div_detail.form.addLayout(_a.name,_a);_a=new Layout("default","",800,600,this,function(_b){});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_detail.form.edt_name","value","ds_usermessage","ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_detail.form.edt_name00","value","ds_usermessage","PROJECT_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_detail.form.edt_name00_00","value","ds_usermessage","USER_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_detail.form.edt_name00_00_01","value","ds_usermessage","MESSAGE_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_detail.form.edt_name00_00_02","value","ds_usermessage","MESSAGE_STATE");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("XPush_T_UserMessage.xfdl",function(){this.Form_onload=function(_a,_b){};this.btn_retrieve_onclick=function(_a,_b){this.transaction("TopicSelect","SvcXpushURL::Service_T_UserMessage.jsp","","ds_usermessage=OUTPUT","","fn_call");};});this.on_initEvent=function(){this.addEventHandler("onload",this.Form_onload,this);this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);this.div_detail.form.edt_name.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);this.div_detail.form.staID.addEventHandler("onclick",this.div_detail_Static10_onclick,this);this.div_detail.form.edt_name00.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);this.div_detail.form.edt_name00_00.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);this.div_detail.form.edt_name00_00_01.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);this.div_detail.form.edt_name00_00_02.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);};this.loadIncludeScript("XPush_T_UserMessage.xfdl");this.loadPreloadList();_a=null;};})();