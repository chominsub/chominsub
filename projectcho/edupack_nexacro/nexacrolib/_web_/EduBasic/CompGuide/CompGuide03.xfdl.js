(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Guide");this.set_titletext("Grid");if(Form==this.constructor){this._setFormPosition(1033,816);}_a=new Dataset("ds_corp",this);_a._setContents("<ColumnInfo><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_CEO\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_EMP_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">홍길동</Col><Col id=\"CORP_EMP_NUM\">265</Col><Col id=\"CORP_DEPT_CD\">KR10</Col><Col id=\"COL_CHK\">1</Col></Row><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">홍길동</Col><Col id=\"CORP_EMP_NUM\">265</Col><Col id=\"CORP_DEPT_CD\">KR30</Col><Col id=\"COL_CHK\">1</Col></Row><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">홍길동</Col><Col id=\"CORP_EMP_NUM\">265</Col><Col id=\"CORP_DEPT_CD\">KR20</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col><Col id=\"CORP_CEO\">ひでみ</Col><Col id=\"CORP_EMP_NUM\">25</Col><Col id=\"CORP_DEPT_CD\">JP10</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col><Col id=\"CORP_CEO\">ひでみ</Col><Col id=\"CORP_EMP_NUM\">25</Col><Col id=\"CORP_DEPT_CD\">JP20</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col><Col id=\"CORP_CEO\">ひでみ</Col><Col id=\"CORP_EMP_NUM\">25</Col><Col id=\"CORP_DEPT_CD\">JP30</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col><Col id=\"CORP_CEO\">英美</Col><Col id=\"CORP_EMP_NUM\">600</Col><Col id=\"CORP_DEPT_CD\">CN10</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col><Col id=\"CORP_CEO\">英美</Col><Col id=\"CORP_EMP_NUM\">600</Col><Col id=\"CORP_DEPT_CD\">CN20</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col><Col id=\"CORP_CEO\">英美</Col><Col id=\"CORP_EMP_NUM\">600</Col><Col id=\"CORP_DEPT_CD\">CN30</Col><Col id=\"COL_CHK\">0</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_emp_copy",this);_a._setContents("<ColumnInfo><Column id=\"COL_CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"20\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"BONUS\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"11\"/><Column id=\"E_MAIL\" type=\"STRING\" size=\"50\"/><Column id=\"BIRTH_DAY\" type=\"DATE\" size=\"20\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"WEDD_DAY\" type=\"DATE\" size=\"20\"/><Column id=\"IMG_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp13.png</Col><Col id=\"COL_CHK\">1</Col><Col id=\"E_MAIL\">Melon@nexacro.com</Col><Col id=\"PHONE_NO\">0105339755</Col><Col id=\"BIRTH_DAY\">19890325</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"COL_CHK\">1</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Elsa</Col><Col id=\"EMPL_ID\">KR240</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20110508</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">2000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">Elsa@nexacro.com</Col><Col id=\"PHONE_NO\">0107401829</Col><Col id=\"BIRTH_DAY\">19700122</Col><Col id=\"WEDD_DAY\">20051004</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Kate </Col><Col id=\"EMPL_ID\">KR050</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20131120</Col><Col id=\"SALARY\">8500</Col><Col id=\"BONUS\">4000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Kate@nexacro.com</Col><Col id=\"PHONE_NO\">0106348086</Col><Col id=\"BIRTH_DAY\">19861119</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR140</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20101109</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp18.png</Col><Col id=\"E_MAIL\">Twice@nexacro.com</Col><Col id=\"PHONE_NO\">0101251107</Col><Col id=\"BIRTH_DAY\">19790318</Col><Col id=\"WEDD_DAY\">20050203</Col><Col id=\"SALARY\">7300</Col><Col id=\"BONUS\">3000</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp17.png</Col><Col id=\"E_MAIL\">Kara@nexacro.com</Col><Col id=\"PHONE_NO\">0106851530</Col><Col id=\"BIRTH_DAY\">19641212</Col><Col id=\"WEDD_DAY\">19880623</Col><Col id=\"SALARY\">5000</Col><Col id=\"BONUS\">900</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp20.png</Col><Col id=\"E_MAIL\">Andrew@nexacro.com</Col><Col id=\"PHONE_NO\">0108230482</Col><Col id=\"BIRTH_DAY\">19751109</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("dsListTab4",this);_a._setContents("<ColumnInfo><Column id=\"TASK\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"OS\" type=\"STRING\" size=\"256\"/><Column id=\"DEVELOPER_LANGUAGE\" type=\"STRING\" size=\"256\"/><Column id=\"DBMS\" type=\"STRING\" size=\"256\"/><Column id=\"TOOL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TASK\">마이플랫폼 CS/센터 기술지원</Col><Col id=\"FROM_DT\">20100102</Col><Col id=\"CUSTOMER_NAME\">한국전력</Col><Col id=\"COMPANY\">투비소프트</Col><Col id=\"TO_DT\">20120502</Col><Col id=\"POSITION\">기술지원</Col><Col id=\"OS\">WIndow</Col><Col id=\"DEVELOPER_LANGUAGE\">MiPlatform</Col><Col id=\"DBMS\">ORACLE</Col><Col id=\"TOOL\">PID</Col></Row><Row><Col id=\"TASK\">ABC원가관리</Col><Col id=\"FROM_DT\">20100102</Col><Col id=\"CUSTOMER_NAME\">한국중국업</Col><Col id=\"COMPANY\">투비소프트</Col><Col id=\"TO_DT\">20120502</Col><Col id=\"POSITION\">기술지원</Col><Col id=\"OS\">WIndow</Col><Col id=\"DEVELOPER_LANGUAGE\">MiPlatform</Col><Col id=\"DBMS\">ORACLE</Col><Col id=\"TOOL\">PID</Col></Row><Row><Col id=\"TASK\">신경영정보시스템</Col><Col id=\"FROM_DT\">20100102</Col><Col id=\"CUSTOMER_NAME\">농심(주)</Col><Col id=\"COMPANY\">투비소프트</Col><Col id=\"TO_DT\">20120502</Col><Col id=\"POSITION\">개발</Col><Col id=\"OS\">WIndow</Col><Col id=\"DEVELOPER_LANGUAGE\">XPLATFORM</Col><Col id=\"DBMS\">ORACLE</Col><Col id=\"TOOL\">UxStudio</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static01","109","40","904","30",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("Style");_a.set_cssclass("sta_WF_GTitle");_a.getSetter("leftbase").set("");_a.getSetter("topbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");this.addChild(_a.name,_a);_a=new Static("Static00","10","40","100","30",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("Component");_a.getSetter("leftbase").set("");_a.getSetter("topbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");_a.set_cssclass("sta_WF_GTitle");_a.set_textAlign("");this.addChild(_a.name,_a);_a=new Static("Static02","10","69","100","737",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("Grid");_a.set_cssclass("sta_WF_GLabel");_a.getSetter("leftbase").set("");_a.getSetter("topbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");this.addChild(_a.name,_a);_a=new Static("Static03","109","69","904","737",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("");_a.set_cssclass("sta_WF_GArea");_a.getSetter("leftbase").set("");_a.getSetter("topbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");this.addChild(_a.name,_a);_a=new Grid("grd_list","170","579","700","199",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_binddataset("ds_corp");_a.set_scrolltype("none");_a.set_autofittype("col");_a.set_selecttype("multirow");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"법인코드\"/><Cell col=\"2\" text=\"법인명\"/><Cell col=\"3\" text=\"법인 대표자\"/><Cell col=\"4\" text=\"사원수\"/><Cell col=\"5\" text=\"부서\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CORP_CODE\" textAlign=\"center\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:CORP_NAME\" textAlign=\"center\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:CORP_CEO\" textAlign=\"center\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"4\" text=\"bind:CORP_EMP_NUM\" textAlign=\"center\" suppress=\"4\" suppressalign=\"middle\"/><Cell col=\"5\" text=\"bind:CORP_DEPT_CD\" textAlign=\"center\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta00_01_00_01_00","156","608","9","28",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_cssclass("sta_WF_GLineV");_a.set_text("");this.addChild(_a.name,_a);_a=new Static("sta02_01_00_01","126","615","29","14",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("H 28");_a.set_cssclass("sta_WF_GTxt");this.addChild(_a.name,_a);_a=new Static("sta00_01_00_01_00_00","156","579","9","30",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_cssclass("sta_WF_GLineV");this.addChild(_a.name,_a);_a=new Static("sta02_01_00_01_00","126","588","29","14",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("H 30");_a.set_cssclass("sta_WF_GTxt");this.addChild(_a.name,_a);_a=new Grid("grd_list00","170","120","700","151",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_binddataset("ds_emp_copy");_a.set_scrolltype("none");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"83\"/><Column size=\"120\"/><Column size=\"87\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"법인\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"사원번호\"/><Cell col=\"4\" text=\"입사일자\"/></Band><Band id=\"body\"><Cell text=\"bind:CORP_CODE\" combodataset=\"ds_corp\" combocodecol=\"CORP_CODE\" combodatacol=\"CORP_NAME\" displaytype=\"combotext\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_CODE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:FULL_NAME\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:EMPL_ID\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" calendarpopupsize=\"156 179\"/></Band><Band id=\"summary\"><Cell text=\"Total\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta00_01_00_01_00_01","156","149","9","30",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_cssclass("sta_WF_GLineV");this.addChild(_a.name,_a);_a=new Static("sta02_01_00_01_01","126","161","29","14",null,null,null,null,null,null,this);_a.set_taborder("11");_a.set_text("H 30");_a.set_cssclass("sta_WF_GTxt");this.addChild(_a.name,_a);_a=new Static("sta00_01_00_01_00_00_00","156","120","9","30",null,null,null,null,null,null,this);_a.set_taborder("12");_a.set_cssclass("sta_WF_GLineV");this.addChild(_a.name,_a);_a=new Static("sta02_01_00_01_00_00","126","129","29","14",null,null,null,null,null,null,this);_a.set_taborder("13");_a.set_text("H 30");_a.set_cssclass("sta_WF_GTxt");this.addChild(_a.name,_a);_a=new Static("sta00_01_00_01_00_01_00","156","241","9","30",null,null,null,null,null,null,this);_a.set_taborder("14");_a.set_cssclass("sta_WF_GLineV");this.addChild(_a.name,_a);_a=new Static("sta02_01_00_01_01_00","126","249","29","14",null,null,null,null,null,null,this);_a.set_taborder("15");_a.set_text("H 30");_a.set_cssclass("sta_WF_GTxt");this.addChild(_a.name,_a);_a=new Grid("grd00","170","351","700","149",null,null,null,null,null,null,this);_a.set_taborder("16");_a.set_binddataset("dsListTab4");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"업무명\"/><Cell col=\"1\" colspan=\"2\" text=\"참여기간\"/><Cell col=\"3\" rowspan=\"2\" text=\"고객사\"/><Cell col=\"4\" rowspan=\"2\" text=\"근무회사\"/><Cell col=\"5\" rowspan=\"2\" text=\"역할\"/><Cell row=\"1\" col=\"1\" text=\"FROM_DT\"/><Cell row=\"1\" col=\"2\" text=\"TO_DT\"/></Band><Band id=\"body\"><Cell text=\"bind:TASK\"/><Cell col=\"1\" text=\"bind:FROM_DT\"/><Cell col=\"2\" text=\"bind:TO_DT\"/><Cell col=\"3\" text=\"bind:CUSTOMER_NAME\"/><Cell col=\"4\" text=\"bind:COMPANY\"/><Cell col=\"5\" text=\"bind:POSITION\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta02_01_00_01_00_01","126","420","29","14",null,null,null,null,null,null,this);_a.set_taborder("17");_a.set_text("H 30");_a.set_cssclass("sta_WF_GTxt");this.addChild(_a.name,_a);_a=new Static("sta00_01_00_01_00_00_01","156","411","9","30",null,null,null,null,null,null,this);_a.set_taborder("18");_a.set_cssclass("sta_WF_GLineV");this.addChild(_a.name,_a);_a=new Static("sta02_01_00_01_02","310","389","29","14",null,null,null,null,null,null,this);_a.set_taborder("19");_a.set_text("H 28");_a.set_cssclass("sta_WF_GTxt");this.addChild(_a.name,_a);_a=new Static("sta00_01_00_01_00_02","340","381","9","28",null,null,null,null,null,null,this);_a.set_taborder("20");_a.set_cssclass("sta_WF_GLineV");this.addChild(_a.name,_a);_a=new Static("sta00_01_01","120","80","170","30",null,null,null,null,null,null,this);_a.set_taborder("21");_a.set_text("[기본]");this.addChild(_a.name,_a);_a=new Static("sta00_01_01_00","120","311","190","30",null,null,null,null,null,null,this);_a.set_taborder("22");_a.set_text("[head 가 2줄 이상인 경우]");this.addChild(_a.name,_a);_a=new Static("sta00_01_01_00_00","120","539","270","30",null,null,null,null,null,null,this);_a.set_taborder("23");_a.set_text("[body에 suppress 기능을 사용할 경우]");this.addChild(_a.name,_a);_a=new Static("sta01_01_00_01","10","0","550","30",null,null,null,null,null,null,this);_a.set_taborder("24");_a.set_text("컴포넌트 가이드 03");_a.set_cssclass("sta_WF_FrmTitle");this.addChild(_a.name,_a);_a=new Layout("default","",1033,816,this,function(_b){});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.on_initEvent=function(){this.ds_emp_copy.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);this.ds_emp_copy.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);};this.loadIncludeScript("CompGuide03.xfdl");this.loadPreloadList();_a=null;};})();