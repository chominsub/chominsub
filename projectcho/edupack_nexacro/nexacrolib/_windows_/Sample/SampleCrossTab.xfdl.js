(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("SampleCrossTab");this.set_titletext("CrossTab 그리드");this.set_stepalign("left top");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Dataset("dsPlusFeeTgtAcru",this);_a._setContents("<ColumnInfo><Column id=\"tkcgOrgNm\" type=\"STRING\" size=\"256\"/><Column id=\"mrktgOrgNm\" type=\"STRING\" size=\"256\"/><Column id=\"orgId\" type=\"STRING\" size=\"256\"/><Column id=\"orgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgnDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYm\" type=\"STRING\" size=\"256\"/><Column id=\"npAcruCascnt\" type=\"INT\" size=\"256\"/><Column id=\"npAcruCascntSum\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"holiStorOpenRate\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"holiStorOpenRateSum\" type=\"BIGDECIMAL\" size=\"256\" prop=\"SUM\"/></ColumnInfo><Rows><Row><Col id=\"tkcgOrgNm\">홍길동</Col><Col id=\"mrktgOrgNm\">AB</Col><Col id=\"orgId\">000012</Col><Col id=\"rgnDivCd\">AA_000012</Col><Col id=\"orgNm\">마케팅팀</Col><Col id=\"aplyYm\">2018년 01월</Col><Col id=\"npAcruCascntSum\">80</Col><Col id=\"holiStorOpenRateSum\">37.5</Col><Col id=\"npAcruCascnt\">50</Col><Col id=\"holiStorOpenRate\">11.50</Col></Row><Row><Col id=\"tkcgOrgNm\">홍길동</Col><Col id=\"mrktgOrgNm\">AB</Col><Col id=\"orgId\">000012</Col><Col id=\"orgNm\">마케팅팀</Col><Col id=\"rgnDivCd\">AA_000012</Col><Col id=\"aplyYm\">2018년 02월</Col><Col id=\"npAcruCascntSum\">80</Col><Col id=\"holiStorOpenRateSum\">37.5</Col><Col id=\"npAcruCascnt\">20</Col><Col id=\"holiStorOpenRate\">12.50</Col></Row><Row><Col id=\"tkcgOrgNm\">홍길동</Col><Col id=\"mrktgOrgNm\">AB</Col><Col id=\"orgId\">000012</Col><Col id=\"orgNm\">마케팅팀</Col><Col id=\"rgnDivCd\">AA_000012</Col><Col id=\"aplyYm\">2018년 03월</Col><Col id=\"npAcruCascntSum\">80</Col><Col id=\"holiStorOpenRateSum\">37.5</Col><Col id=\"npAcruCascnt\">10</Col><Col id=\"holiStorOpenRate\">13.50</Col></Row><Row><Col id=\"tkcgOrgNm\">길동이</Col><Col id=\"mrktgOrgNm\">AA</Col><Col id=\"orgId\">000011</Col><Col id=\"orgNm\">영업팀</Col><Col id=\"rgnDivCd\">AA_000011</Col><Col id=\"aplyYm\">2018년 01월</Col><Col id=\"npAcruCascntSum\">70</Col><Col id=\"holiStorOpenRateSum\">46.5</Col><Col id=\"npAcruCascnt\">15</Col><Col id=\"holiStorOpenRate\">14.50</Col></Row><Row><Col id=\"tkcgOrgNm\">길동이</Col><Col id=\"mrktgOrgNm\">AA</Col><Col id=\"orgId\">000011</Col><Col id=\"orgNm\">영업팀</Col><Col id=\"rgnDivCd\">AA_000011</Col><Col id=\"aplyYm\">2018년 02월</Col><Col id=\"npAcruCascntSum\">70</Col><Col id=\"holiStorOpenRateSum\">46.5</Col><Col id=\"npAcruCascnt\">25</Col><Col id=\"holiStorOpenRate\">15.50</Col></Row><Row><Col id=\"tkcgOrgNm\">길동이</Col><Col id=\"mrktgOrgNm\">AA</Col><Col id=\"orgId\">000011</Col><Col id=\"orgNm\">영업팀</Col><Col id=\"rgnDivCd\">AA_000011</Col><Col id=\"aplyYm\">2018년 03월</Col><Col id=\"npAcruCascntSum\">70</Col><Col id=\"holiStorOpenRateSum\">46.5</Col><Col id=\"npAcruCascnt\">30</Col><Col id=\"holiStorOpenRate\">16.50</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("sta02","10","0","221","30",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("CrossTab 그리드");_a.set_cssclass("sta_WF_FrmTitle");this.addChild(_a.name,_a);_a=new Grid("grdPivot","10","672",null,"202","10",null,null,null,null,null,this);_a.set_taborder("1");_a.set_binddataset("dsPlusFeeTgtAcru");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"30\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"담당명\"/><Cell col=\"2\" rowspan=\"2\" text=\"마케팅팀명\"/><Cell col=\"3\" rowspan=\"2\" text=\"조직코드\"/><Cell col=\"4\" rowspan=\"2\" text=\"조직코드명\"/><Cell col=\"5\" rowspan=\"2\" text=\"지역구분\"/><Cell col=\"6\" colspan=\"2\" text=\"합계\"/><Cell col=\"8\" colspan=\"2\" text=\"bind:aplyYm\"/><Cell row=\"1\" col=\"6\" text=\"MNP건수\"/><Cell row=\"1\" col=\"7\" text=\"휴일오픈율\"/><Cell row=\"1\" col=\"8\" text=\"MNP건수\"/><Cell row=\"1\" col=\"9\" text=\"휴일오픈율\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:tkcgOrgNm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:mrktgOrgNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:orgId\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:orgNm\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:rgnDivCd\" textAlign=\"center\"/><Cell col=\"6\" displaytype=\"mask\" maskeditformat=\"##0\" text=\"bind:npAcruCascntSum\"/><Cell col=\"7\" text=\"bind:holiStorOpenRateSum\" displaytype=\"mask\" maskeditformat=\"#0.#0\"/><Cell col=\"8\" text=\"bind:npAcruCascnt\" suppressalign=\"middle\" displaytype=\"mask\" maskeditformat=\"##0\"/><Cell col=\"9\" text=\"bind:holiStorOpenRate\" displaytype=\"mask\" maskeditformat=\"#0.#0\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" text=\"합계\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;npAcruCascntSum&quot;)\" textAlign=\"right\" maskeditformat=\"##0\" displaytype=\"mask\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;holiStorOpenRateSum&quot;)\" textAlign=\"right\" maskeditformat=\"#0.#0\" displaytype=\"mask\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;npAcruCascnt&quot;)\" textAlign=\"right\" maskeditformat=\"##0\" displaytype=\"mask\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;holiStorOpenRate&quot;)\" textAlign=\"right\" maskeditformat=\"#0.#0\" displaytype=\"mask\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta03","10","50",null,"390","10",null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("1. 정렬 컬럼을 지정\r\n  this.dsPlusFeeTgtAcru.set_keystring(\"S:+tkcgOrgNm+mrktgOrgNm+orgId+orgNm+rgnDivCd\");\r\n\r\n2. Group로 묶을 컬럼 ID를 지정\r\n  this.grdPivot.groupkey = \"tkcgOrgNm,mrktgOrgNm,orgId,orgNm,rgnDivCd\";\r\n  this.grdPivot.summarykey = \"tkcgOrgNm,mrktgOrgNm,orgId,orgNm,rgnDivCd\";\r\n\r\n3. PivotTable을 구성하기 위한 PivotColumn ID를 지정\r\n  this.grdPivot.pivotkey = \"aplyYm\";\r\n\r\n4. Pivot 정렬 Column ID을 지정\r\n  this.grdPivot.pivotsortkey = \"aplyYm\";\r\n\r\n5. Pivot Table 초기화\r\n  this.fnInitGrid(this.grdPivot);\r\n\r\n6. Pivot Table 적용\r\n  this.fnReCalcPivot(this.grdPivot);");_a.set_cssclass("sta_WF_Description");this.addChild(_a.name,_a);_a=new Grid("grdPivot00","10","455",null,"152","10",null,null,null,null,null,this);_a.set_taborder("3");_a.set_binddataset("dsPlusFeeTgtAcru");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"125\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"tkcgOrgNm\"/><Cell col=\"1\" text=\"mrktgOrgNm\"/><Cell col=\"2\" text=\"orgId\"/><Cell col=\"3\" text=\"orgNm\"/><Cell col=\"4\" text=\"rgnDivCd\"/><Cell col=\"5\" text=\"aplyYm\"/><Cell col=\"6\" text=\"npAcruCascnt\"/><Cell col=\"7\" text=\"npAcruCascntSum\"/><Cell col=\"8\" text=\"holiStorOpenRate\"/><Cell col=\"9\" text=\"holiStorOpenRateSum\"/></Band><Band id=\"body\"><Cell text=\"bind:tkcgOrgNm\"/><Cell col=\"1\" text=\"bind:mrktgOrgNm\"/><Cell col=\"2\" text=\"bind:orgId\"/><Cell col=\"3\" text=\"bind:orgNm\"/><Cell col=\"4\" text=\"bind:rgnDivCd\"/><Cell col=\"5\" text=\"bind:aplyYm\"/><Cell col=\"6\" text=\"bind:npAcruCascnt\"/><Cell col=\"7\" text=\"bind:npAcruCascntSum\"/><Cell col=\"8\" text=\"bind:holiStorOpenRate\"/><Cell col=\"9\" text=\"bind:holiStorOpenRateSum\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.addIncludeScript("SampleCrossTab.xfdl","Lib::Lib_CrossTab.xjs");this.registerScript("SampleCrossTab.xfdl",function(){this.executeIncludeScript("Lib::Lib_CrossTab.xjs");this.form_onload=function(_a,_b){this.gfnFormOnLoad(this);var _c="1. 정렬 컬럼을 지정";_c+="\n"+"this.dsPlusFeeTgtAcru.set_keystring(\"S:+tkcgOrgNm+mrktgOrgNm+orgId+orgNm+rgnDivCd\");";_c+="\n\n"+"2. Group로 묶을 컬럼 ID를 지정";_c+="\n"+"this.grdPivot.groupkey	= \"tkcgOrgNm,mrktgOrgNm,orgId,orgNm,rgnDivCd\"\;";_c+="\n"+"this.grdPivot.summarykey	= \"tkcgOrgNm,mrktgOrgNm,orgId,orgNm,rgnDivCd\"\;";_c+="\n\n"+"3. PivotTable을 구성하기 위한 PivotColumn ID를 지정";_c+="\n"+"this.grdPivot.pivotkey		= \"aplyYm\"\;";_c+="\n\n"+"4. Pivot 정렬 Column ID을 지정";_c+="\n"+"this.grdPivot.pivotsortkey 	= \"aplyYm\"\;";_c+="\n\n"+"5. Pivot Table 초기화";_c+="\n"+"this.fnInitGrid(this.grdPivot);";_c+="\n\n"+"6. Pivot Table 적용";_c+="\n"+"this.fnReCalcPivot(this.grdPivot);";this.dsPlusFeeTgtAcru.set_keystring("S:+tkcgOrgNm+mrktgOrgNm+orgId+orgNm+rgnDivCd");this.grdPivot.groupkey="tkcgOrgNm,mrktgOrgNm,orgId,orgNm,rgnDivCd";this.grdPivot.groupsortkey="tkcgOrgNm,mrktgOrgNm,orgId,orgNm,rgnDivCd";this.grdPivot.pivotkey="aplyYm";this.grdPivot.pivotsortkey="aplyYm";this.gfnInitGrid(this.grdPivot);this.gfnReCalcPivot(this.grdPivot);};this.fnCallback=function(_b,_c,_d){if(_c!=0){return;}switch(_b){case "search":break;}};this.fnSearch=function(){};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);};this.loadIncludeScript("SampleCrossTab.xfdl");this.loadPreloadList();_a=null;};})();