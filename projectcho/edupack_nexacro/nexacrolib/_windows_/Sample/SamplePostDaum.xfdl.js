(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("SamplePost");this.set_titletext("우편번호 검색 (Daum 연동)");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Static("sta11","10","282","113","28",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("우편번호");_a.set_cssclass("sta_WF_DeatilLabel");this.addChild(_a.name,_a);_a=new Edit("edtBasAddr","265","282","448","28",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_readonly("true");_a.set_maxlength("200");_a.set_cssclass("readonly");this.addChild(_a.name,_a);_a=new Edit("edt_detl_addr","718","282",null,"28","10",null,null,null,null,null,this);_a.set_taborder("2");_a.set_maxlength("200");this.addChild(_a.name,_a);_a=new Edit("edtSculZip","133","282","92","28",null,null,null,null,null,null,this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Button("btnSearchPost","230","282","30","28",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_cssclass("btn_WF_SearchSmall");this.addChild(_a.name,_a);_a=new WebBrowser("webPost","226","312","284","258",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Static("sta00","10","0","221","30",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("우편번호 검색 (Daum 연동)");_a.set_cssclass("sta_WF_FrmTitle");this.addChild(_a.name,_a);_a=new Static("sta01","10","50",null,"210","10",null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("1.화면에 Daum의 우편번호 페이지를 호출 할 수 있도록 WebBrowser 컴포넌트를 생성한다.\r\n2.찾기 버튼 클릭시 공통함수를 호출한다. this.gfnPostSearch(this.webPost);\r\n3.WebBrowser의 onusernotify함수에서 e.userdata로 넘어온 값을 \":::\"구분자로 잘라서 값을 넣어준다.\r\n   array[1]=>구우편번호 앞 3자리\r\n   array[2]=>구우편번호 뒷 3자리\r\n   array[3]=>신규우편번호\r\n   array[4]=>도로명주소\r\n   array[5]=>지번주소\r\n   array[6]=>조합형 주소여부에 따른 주소");_a.set_cssclass("sta_WF_Description");this.addChild(_a.name,_a);_a=new Layout("default","",this._adjust_width,this._adjust_height,this,function(_b){});this.addLayout(_a.name,_a);_a=new BindItem("item17","edt_detl_addr","value","ds_list","DETL_ADDR");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("SamplePostDaum.xfdl",function(){this.form_onload=function(_a,_b){this.gfnFormOnLoad(this);};this.btn_searchPost_onclick=function(_a,_b){this.gfnPostSearchDaum(this.webPost);};this.webPost_onusernotify=function(_a,_b){var _c=_b.userdata;trace("strPost ==> "+_c);if(_c.indexOf("OK!!!:::")==0){var _d=_c.split(":::");trace("onusernotify -------------------------------------------");trace("array[1]=>구우편번호 앞 3자리          ==> "+_d[1]);trace("array[2]=>구우편번호 뒷 3자리          ==> "+_d[2]);trace("array[3]=>신규우편번호                  ==> "+_d[3]);trace("array[4]=>도로명주소                    ==> "+_d[4]);trace("array[5]=>지번주소                      ==> "+_d[5]);trace("array[6]=>조합형 주소여부에 따른 주소	==> "+_d[6]);trace("-------------------------------------------------------");this.edtSculZip.set_value(_d[3]);this.edtBasAddr.set_value(_d[6]);}};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);this.btnSearchPost.addEventHandler("onclick",this.btn_searchPost_onclick,this);this.webPost.addEventHandler("onusernotify",this.webPost_onusernotify,this);};this.loadIncludeScript("SamplePostDaum.xfdl");this.loadPreloadList();_a=null;};})();