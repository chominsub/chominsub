(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Common");this.set_titletext("New Form");if(Form==this.constructor){this._setFormPosition(1038,560);}_a=new Dataset("Dataset01",this);_a._setContents("<ColumnInfo><Column id=\"COL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COL_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_COLOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_NAME\">이순신</Col><Col id=\"COL_SIZE\">190</Col><Col id=\"COL_COLOR\">red</Col></Row><Row><Col id=\"COL_NAME\">홍킬동</Col><Col id=\"COL_COLOR\">black</Col><Col id=\"COL_SIZE\">200</Col></Row><Row><Col id=\"COL_NAME\">여행자</Col><Col id=\"COL_SIZE\">160</Col><Col id=\"COL_COLOR\">yellow</Col></Row><Row/></Rows>");this.addChild(_a.name,_a);_a=new Button("btn00","190","20",null,"40","707",null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("btn00");this.addChild(_a.name,_a);_a=new Button("btn01","btn00:9.97399999999999","20","140","40",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("btn01");this.addChild(_a.name,_a);_a=new Static("sta00","183","69","32","15",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("sta00");this.addChild(_a.name,_a);_a=new Button("btn02","53","111","117","29",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("컴포넌트생성");this.addChild(_a.name,_a);_a=new Button("btn03","53","141","117","29",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("컴포넌트 삭제");this.addChild(_a.name,_a);_a=new Button("btn04","53","214","117","29",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("Div 컴포넌트 생성");this.addChild(_a.name,_a);_a=new Button("btn05","53","246","117","29",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("Div 컴포넌트 삭제");this.addChild(_a.name,_a);_a=new Div("div00","326","209","224","121",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("div00");this.addChild(_a.name,_a);_a=new Button("btn06","53","309","117","29",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("tab 컴포넌트 생성");this.addChild(_a.name,_a);_a=new Button("btn07","53","341","117","29",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_text("tab 컴포넌트 생성");this.addChild(_a.name,_a);_a=new Tab("tab00","355","304","525","176",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_tabindex("0");this.addChild(_a.name,_a);_a=new Tabpage("Tabpage1",this.tab00);_a.set_text("Tabpage1");this.tab00.addChild(_a.name,_a);_a=new Tabpage("Tabpage2",this.tab00);_a.set_text("Tabpage2");this.tab00.addChild(_a.name,_a);_a=new Button("btn08","190","110","134","29",null,null,null,null,null,null,this);_a.set_taborder("11");_a.set_text("Event추가");this.addChild(_a.name,_a);_a=new Button("btn09","190","150","134","29",null,null,null,null,null,null,this);_a.set_taborder("12");_a.set_text("Event 변경");this.addChild(_a.name,_a);_a=new Button("btn10","190","188","134","29",null,null,null,null,null,null,this);_a.set_taborder("13");_a.set_text("btn10");this.addChild(_a.name,_a);_a=new Button("btn11","625","108","105","25",null,null,null,null,null,null,this);_a.set_taborder("14");_a.set_text("바인딩");this.addChild(_a.name,_a);_a=new Edit("edt_bind","750","100","176","34",null,null,null,null,null,null,this);_a.set_taborder("15");this.addChild(_a.name,_a);_a=new Grid("grd00","649","153","263","134",null,null,null,null,null,null,this);_a.set_taborder("16");_a.set_binddataset("Dataset01");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"COL_NAME\"/><Cell col=\"1\" text=\"COL_SIZE\"/><Cell col=\"2\" text=\"COL_COLOR\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_NAME\"/><Cell col=\"1\" text=\"bind:COL_SIZE\"/><Cell col=\"2\" text=\"bind:COL_COLOR\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div00.form,function(_b){});this.div00.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.tab00.Tabpage1.form,function(_b){});this.tab00.Tabpage1.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.tab00.Tabpage2.form,function(_b){});this.tab00.Tabpage2.form.addLayout(_a.name,_a);_a=new Layout("default","",1038,560,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("Common.xfdl",function(){this.btn00_onclick=function(_a,_b){trace("getOffsetWidth = "+_a.getOffsetWidth());trace("getPixelWidth = "+_a.getPixelWidth());};this.btn02_onclick=function(_a,_b){var _c=new Button();_c.init("btn_Comp",320,100,150,100);this.addChild("btn_Comp",_c);_c.set_text("Create Button");_c.set_background("skyblue");_c.show();};this.btn03_onclick=function(_a,_b){var _c=this.removeChild("btn_Comp");_c.destroy();_c=null;};this.btn04_onclick=function(_a,_b){var _c=new Button();_c.init("btn_DivComp",10,10,150,100);this.div00.form.addChild("btn_DivComp",_c);_c.set_text("Create Button");_c.set_background("skyblue");_c.show();};this.btn05_onclick=function(_a,_b){var _c=this.div00.form.removeChild("btn_DivComp");_c.destroy();_c=null;};this.btn06_onclick=function(_a,_b){var _c=new Button();_c.init("btn_TabComp",10,10,150,100);this.tab00.Tabpage1.form.addChild("btn_TabComp",_c);_c.set_text("Create Button");_c.set_background("skyblue");_c.show();};this.btn07_onclick=function(_a,_b){var _c=this.tab00.Tabpage1.form.removeChild("btn_TabComp");_c.destroy();_c=null;};this.btn08_onclick=function(_a,_b){this.btn_Comp.addEventHandler("onclick",this.fn_temp,this);};this.fn_temp=function(){trace("event");};this.btn09_onclick=function(_a,_b){this.btn_Comp.addEventHandler("onclick",this.fn_ntemp,this);};this.fn_ntemp=function(){trace("new");};this.btn11_onclick=function(_a,_b){var _c=new BindItem();_c.init("item00","edt_bind","value","Dataset01","COL_NAME");this.addChild("item00",_c);_c.bind();var _c=new BindItem();_c.init("item01","edt_bind","width","Dataset01","COL_SIZE");this.addChild("item01",_c);_c.bind();var _c=new BindItem();_c.init("item02","edt_bind","background","Dataset01","COL_COLOR");this.addChild("item02",_c);_c.bind();};});this.on_initEvent=function(){this.btn00.addEventHandler("onclick",this.btn00_onclick,this);this.sta00.addEventHandler("onclick",this.sta00_onclick,this);this.btn02.addEventHandler("onclick",this.btn02_onclick,this);this.btn03.addEventHandler("onclick",this.btn03_onclick,this);this.btn04.addEventHandler("onclick",this.btn04_onclick,this);this.btn05.addEventHandler("onclick",this.btn05_onclick,this);this.btn06.addEventHandler("onclick",this.btn06_onclick,this);this.btn07.addEventHandler("onclick",this.btn07_onclick,this);this.btn08.addEventHandler("onclick",this.btn08_onclick,this);this.btn09.addEventHandler("onclick",this.btn09_onclick,this);this.btn11.addEventHandler("onclick",this.btn11_onclick,this);};this.loadIncludeScript("Common.xfdl");this.loadPreloadList();_a=null;};})();