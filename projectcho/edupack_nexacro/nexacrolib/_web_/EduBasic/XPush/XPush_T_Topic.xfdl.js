(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("XPush_T_Topic");this.set_titletext("T_Topic 테이블확인");if(Form==this.constructor){this._setFormPosition(800,600);}_a=new Dataset("ds_topic",this);_a.set_keystring("");_a._setContents("<ColumnInfo><Column id=\"ID\" type=\"INT\" size=\"10\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"50\"/><Column id=\"TOPIC_TYPE\" type=\"STRING\" size=\"10\"/><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REGISTER_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"ACTIVE\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIED_DATE\" type=\"DATE\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","10","40",null,"50","10",null,null,null,null,null,this);_a.set_taborder("4");_a.getSetter("leftbase").set("");_a.getSetter("topbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");_a.set_cssclass("div_WFSA");this.addChild(_a.name,_a);_a=new Static("Static04","16","13","46","24",null,null,null,null,null,null,this.div_search.form);_a.set_taborder("1");_a.set_text("Type");this.div_search.addChild(_a.name,_a);_a=new Static("st_title","10","5","193","30",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("T_TOPIC");_a.getSetter("leftbase").set("");_a.getSetter("topbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");_a.set_cssclass("sta_WF_emptitle");this.addChild(_a.name,_a);_a=new Button("btn_retrieve",null,"5","60","30","9",null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("조회");_a.getSetter("leftbase").set("");_a.getSetter("topbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");this.addChild(_a.name,_a);_a=new Grid("grd_list","10","95",null,null,"396","10",null,null,null,null,this);_a.set_taborder("3");_a.getSetter("leftbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");_a.set_binddataset("ds_topic");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"52\"/><Column size=\"128\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"51\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"User ID\"/><Cell col=\"2\" text=\"Type\"/><Cell col=\"3\" text=\"Topic ID\"/><Cell col=\"4\" text=\"Status\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:USER_ID\"/><Cell col=\"2\" text=\"bind:TOPIC_TYPE\" displaytype=\"combotext\" combodataset=\"gds_topicType\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"3\" text=\"bind:TOPIC_ID\"/><Cell col=\"4\" text=\"bind:ACTIVE\" textAlign=\"center\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_detail",null,"95","380",null,"10","10",null,null,null,null,this);_a.set_taborder("2");_a.set_text("Div00");_a.getSetter("leftbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");this.addChild(_a.name,_a);_a=new Static("Static15_00_00","128","217","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("15");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Static("Static02","128","12","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("2");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Static("Static01","128","45","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("3");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Static("Static09","128","78","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("5");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Static("Static15","128","111","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("8");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Edit("edt_name","133","17","162","24",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("0");this.div_detail.addChild(_a.name,_a);_a=new CheckBox("chk_married","133","219","21","24",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("1");_a.set_falsevalue("N");_a.set_truevalue("Y");this.div_detail.addChild(_a.name,_a);_a=new Static("staTopicType","9","78","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("4");_a.set_text("토픽 타입");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablelabel");this.div_detail.addChild(_a.name,_a);_a=new Static("staID","9","12","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("6");_a.set_text("id");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Static("Static12","9","144","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("7");_a.set_text("등록일시");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Static("staUserId","9","45","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("9");_a.set_text("사용자ID");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Static("Static03","9","217","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("10");_a.set_text("사용 여부");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablelabel");this.div_detail.addChild(_a.name,_a);_a=new Edit("edt_name00","133","50","162","24",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("11");this.div_detail.addChild(_a.name,_a);_a=new Static("Static00_00","9","111","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("12");_a.set_text("토픽 아이디");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Edit("edt_name00_00","133","116","162","24",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("13");this.div_detail.addChild(_a.name,_a);_a=new Static("Static15_00","128","144","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("14");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Combo("Combo00","133","84","159","22",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("16");_a.set_innerdataset("gds_topicType");_a.set_codecolumn("CODE");_a.set_datacolumn("NAME");_a.set_text("Combo00");this.div_detail.addChild(_a.name,_a);_a=new Static("Static12_00","9","177","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("17");_a.set_text("수정일시");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Static("Static15_00_01","128","177","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("18");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00","133","149","230","25",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("19");_a.set_type("string");_a.set_format("####-##-## ##:##:##");this.div_detail.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00_00","133","182","230","25",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("20");_a.set_type("string");_a.set_format("####-##-## ##:##:##");this.div_detail.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_search.form,function(_b){});this.div_search.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_detail.form,function(_b){});this.div_detail.form.addLayout(_a.name,_a);_a=new Layout("default","",800,600,this,function(_b){});this.addLayout(_a.name,_a);_a=new BindItem("item1","div_detail.form.edt_name00","value","ds_topic","USER_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_detail.form.edt_name00_00","value","ds_topic","TOPIC_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_detail.form.chk_married","value","ds_topic","ACTIVE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_detail.form.edt_name","value","ds_topic","ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_detail.form.Combo00","value","ds_topic","TOPIC_TYPE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_detail.form.MaskEdit00","value","ds_topic","REGISTER_DATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_detail.form.MaskEdit00_00","value","ds_topic","REGISTER_DATE");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("XPush_T_Topic.xfdl",function(){this.Form_onload=function(_a,_b){};this.btn_add_onclick=function(_a,_b){this.ds_topic.addRow();this.ds_topic.setColumn(this.ds_topic.rowposition,"ACTIVE","Y");this.ds_topic.setColumn(this.ds_topic.rowposition,"TOPIC_TYPE","ALL");};this.btn_retrieve_onclick=function(_a,_b){this.transaction("TopicSelect","SvcXpushURL::Service_T_Topic.jsp","","ds_topic=OUTPUT","","fn_call");};});this.on_initEvent=function(){this.addEventHandler("onload",this.Form_onload,this);this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);this.div_detail.form.edt_name.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);this.div_detail.form.staID.addEventHandler("onclick",this.div_detail_Static10_onclick,this);this.div_detail.form.edt_name00.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);this.div_detail.form.edt_name00_00.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);};this.loadIncludeScript("XPush_T_Topic.xfdl");this.loadPreloadList();_a=null;};})();