(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("SampleSplitter");this.set_titletext("Splitter");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Dataset("Dataset00",this);_a._setContents("<ColumnInfo><Column id=\"Category\" type=\"STRING\" size=\"256\"/><Column id=\"Region\" type=\"String\" size=\"256\"/><Column id=\"Rep\" type=\"String\" size=\"256\"/><Column id=\"Item\" type=\"String\" size=\"256\"/><Column id=\"Units\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UnitCost\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">95</Col><Col id=\"UnitCost\">1</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Kivell</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">50</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Jardine</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">36</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Gill</Col><Col id=\"Item\">Pen</Col><Col id=\"Units\">27</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">West</Col><Col id=\"Rep\">Sorvino</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">56</Col><Col id=\"UnitCost\">2</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">60</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Andrews</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">75</Col><Col id=\"UnitCost\">1</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Jardine</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">90</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">West</Col><Col id=\"Rep\">Thompson</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">32</Col><Col id=\"UnitCost\">1</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">60</Col><Col id=\"UnitCost\">8</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Morgan</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">90</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Howard</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">29</Col><Col id=\"UnitCost\">1</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Parent</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">81</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">35</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Smith</Col><Col id=\"Item\">Desk</Col><Col id=\"Units\">2</Col><Col id=\"UnitCost\">125</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">16</Col><Col id=\"UnitCost\">15</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Morgan</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">28</Col><Col id=\"UnitCost\">8</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Pen</Col><Col id=\"Units\">64</Col><Col id=\"UnitCost\">8</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Parent</Col><Col id=\"Item\">Pen</Col><Col id=\"Units\">15</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Kivell</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">96</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Smith</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">67</Col><Col id=\"UnitCost\">1.29</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Parent</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">74</Col><Col id=\"UnitCost\">15</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Gill</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">46</Col><Col id=\"UnitCost\">8</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Smith</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">87</Col><Col id=\"UnitCost\">15</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">4</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">West</Col><Col id=\"Rep\">Sorvino</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">7</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Jardine</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">50</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Andrews</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">66</Col><Col id=\"UnitCost\">1</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Howard</Col><Col id=\"Item\">Pen</Col><Col id=\"Units\">96</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Gill</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">53</Col><Col id=\"UnitCost\">1.29</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Gill</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">80</Col><Col id=\"UnitCost\">8</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Kivell</Col><Col id=\"Item\">Desk</Col><Col id=\"Units\">5</Col><Col id=\"UnitCost\">125</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">62</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Morgan</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">55</Col><Col id=\"UnitCost\">12.49</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Kivell</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">42</Col><Col id=\"UnitCost\">23.95</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">West</Col><Col id=\"Rep\">Sorvino</Col><Col id=\"Item\">Desk</Col><Col id=\"Units\">3</Col><Col id=\"UnitCost\">275</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Gill</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">7</Col><Col id=\"UnitCost\">1.29</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">West</Col><Col id=\"Rep\">Sorvino</Col><Col id=\"Item\">Pen</Col><Col id=\"Units\">76</Col><Col id=\"UnitCost\">1</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">West</Col><Col id=\"Rep\">Thompson</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">57</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Andrews</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">14</Col><Col id=\"UnitCost\">1.29</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Jardine</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">11</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Jardine</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">94</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Andrews</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">28</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Category\">Sub</Col><Col id=\"Region\">Central</Col><Col id=\"Rep\">Jardine</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">90</Col><Col id=\"UnitCost\">4</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("stc","22","45",null,"152","-2",null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("Splitter 기능 적용방법\r\n1. Splitter 컴포넌트 추가\r\n2. type 속성 확인(vertical, horizontal)\r\n3. form onload 이벤트에서 Splitter 초기화\r\n   - Splittter.addItem() 메소드로 item 적용\r\n   - Splittter.addSplitter() 메소드로 최대, 최소 position 기준 컴포넌트 세팅");_a.set_cssclass("sta_WF_Description");this.addChild(_a.name,_a);_a=new Static("sta00","10","0","221","30",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("Splitter");_a.set_cssclass("sta_WF_FrmTitle");this.addChild(_a.name,_a);_a=new Splitter("Splitter00","10","342",null,"10","10",null,null,null,null,null,this);_a.set_taborder("2");_a.set_type("vertical");_a.set_background("#dddddd");this.addChild(_a.name,_a);_a=new Grid("grd00","10","207",null,"130","10",null,null,null,null,null,this);_a.set_taborder("3");_a.set_binddataset("Dataset00");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Category\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"Units\"/><Cell col=\"5\" text=\"UnitCost\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/><Cell col=\"4\" text=\"bind:Units\"/><Cell col=\"5\" text=\"bind:UnitCost\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd01","10","357",null,"161","10",null,null,null,null,null,this);_a.set_taborder("4");_a.set_binddataset("Dataset00");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Category\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"Units\"/><Cell col=\"5\" text=\"UnitCost\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/><Cell col=\"4\" text=\"bind:Units\"/><Cell col=\"5\" text=\"bind:UnitCost\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Splitter("Splitter01","486","528","10","212",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_max("1000");_a.set_cssclass("spl_WF_H");_a.set_min("15");_a.set_background("#dddddd");this.addChild(_a.name,_a);_a=new Div("div00","10","528",null,"212","557",null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("div00");_a.set_background("antiquewhite");this.addChild(_a.name,_a);_a=new Button("btn00","359","12","100","28",null,null,null,null,null,null,this.div00.form);_a.set_taborder("0");_a.set_text("btn00");this.div00.addChild(_a.name,_a);_a=new Button("btn01","359","45","100","28",null,null,null,null,null,null,this.div00.form);_a.set_taborder("1");_a.set_text("btn00");this.div00.addChild(_a.name,_a);_a=new Button("btn02","358","78","100","28",null,null,null,null,null,null,this.div00.form);_a.set_taborder("2");_a.set_text("btn00");this.div00.addChild(_a.name,_a);_a=new Grid("grd01","10","10","341","162",null,null,null,null,null,null,this.div00.form);_a.set_taborder("3");_a.set_binddataset("Dataset00");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Category\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/></Band></Format></Formats>");this.div00.addChild(_a.name,_a);_a=new Grid("grd02","501","528",null,"212","7",null,null,null,null,null,this);_a.set_taborder("7");_a.set_binddataset("Dataset00");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Category\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"Units\"/><Cell col=\"5\" text=\"UnitCost\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/><Cell col=\"4\" text=\"bind:Units\"/><Cell col=\"5\" text=\"bind:UnitCost\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd03","10","750","307","211",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_binddataset("Dataset00");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Category1\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"Units\"/><Cell col=\"5\" text=\"UnitCost\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/><Cell col=\"4\" text=\"bind:Units\"/><Cell col=\"5\" text=\"bind:UnitCost\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Splitter("Splitter02","322","750","10","211",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_cssclass("spl_WF_H");_a.set_min("15");_a.set_max("1000");_a.set_background("#dddddd");this.addChild(_a.name,_a);_a=new Grid("grd04","337","750","374","211",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_binddataset("Dataset00");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Category2\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"Units\"/><Cell col=\"5\" text=\"UnitCost\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/><Cell col=\"4\" text=\"bind:Units\"/><Cell col=\"5\" text=\"bind:UnitCost\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Splitter("Splitter03","716","750","10","211",null,null,null,null,null,null,this);_a.set_taborder("11");_a.set_max("1000");_a.set_cssclass("spl_WF_H");_a.set_min("-1");_a.set_background("#dddddd");this.addChild(_a.name,_a);_a=new Grid("grd05",null,"750","299","211","8",null,null,null,null,null,this);_a.set_taborder("12");_a.set_binddataset("Dataset00");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Category3\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"Units\"/><Cell col=\"5\" text=\"UnitCost\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/><Cell col=\"4\" text=\"bind:Units\"/><Cell col=\"5\" text=\"bind:UnitCost\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Splitter("spl00","47","197","953","9",null,null,null,null,null,null,this);_a.set_taborder("13");_a.set_text("");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.Splitter00.form,function(_b){});this.Splitter00.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.Splitter01.form,function(_b){});this.Splitter01.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div00.form,function(_b){});this.div00.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.Splitter02.form,function(_b){});this.Splitter02.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.Splitter03.form,function(_b){});this.Splitter03.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.spl00.form,function(_b){});this.spl00.form.addLayout(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("SampleSplitter.xfdl",function(){this.form_onload=function(_a,_b){this.gfnFormOnLoad(this);this.Splitter00.addItem([{componentid:"grd00",offset:5,position:"top"},{componentid:"grd01",offset:5,position:"bottom"}]);this.Splitter01.addItem([{componentid:"div00",offset:5,position:"left"},{componentid:"grd02",offset:5,position:"right"}]);this.Splitter00.addSplitter(this.stc,this.Splitter01,null,null);this.Splitter02.addItem([{componentid:"grd03",offset:5,position:"left"},{componentid:"grd04",offset:5,position:"right"}]);this.Splitter03.addItem([{componentid:"grd04",offset:5,position:"left"},{componentid:"grd05",offset:5,position:"right"}]);this.Splitter02.addSplitter(null,null,null,this.Splitter03);this.Splitter03.addSplitter(null,null,this.Splitter02,null);};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);};this.loadIncludeScript("SampleSplitter.xfdl");this.loadPreloadList();_a=null;};})();