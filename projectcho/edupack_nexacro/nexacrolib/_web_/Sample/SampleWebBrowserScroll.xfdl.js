(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("SampleWebBrowserScroll");this.set_titletext("Web Browsser Scroll");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Dataset("ds_document",this);_a.getSetter("firefirstcount").set("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new WebBrowser("webBrowResult","10","158",null,null,"10","9",null,null,null,null,this);_a.set_taborder("0");this.addChild(_a.name,_a);_a=new Button("btn00",null,"125","120","28","15",null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("10개추가");this.addChild(_a.name,_a);_a=new Static("sta00","10","0","331","30",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("Web Browsser Scroll");_a.set_cssclass("sta_WF_FrmTitle");this.addChild(_a.name,_a);_a=new Static("sta01","10","50",null,"70","10",null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("1.WebBrowser에 innerHtml을 추가한다.\r\n2.html body의 height를 구해서 WebBrowser의 Height를 늘려주어 스크롤을 제거한다.");_a.set_cssclass("sta_WF_Description");this.addChild(_a.name,_a);_a=new Layout("default","",this._adjust_width,this._adjust_height,this,function(_b){});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("SampleWebBrowserScroll.xfdl",function(){this.SampleWebBrowserScroll_onload=function(_a,_b){var _c=this.gfnGetServerUrl()+"web/inner.html";this.webBrowResult.set_url(_c);};this.fn_search=function(_b){for(var _g=0;_g<_b;_g++ ){var _c=this.ds_document.addRow();this.ds_document.setColumn(_c,"title",_c+" : 제목");this.ds_document.setColumn(_c,"description","설명입니다. ");}var _d;var _e="<table  width='100%'   border='0' cellpadding='1' cellspacing='1'>";for(var _g=0;_g<this.ds_document.rowcount;_g++ ){var _d;_d=this.ds_document.getColumn(_g,"description");_d=nexacro.replaceAll(_d,String.fromCharCode(20),'@');_d=nexacro.replaceAll(_d,String.fromCharCode(32),"&nbsp;");_d=nexacro.replaceAll(nexacro.replaceAll(_d,String.fromCharCode(9),"&nbsp;&nbsp;&nbsp;&nbsp;"),String.fromCharCode(32),"&nbsp;");if(String(_d)=='undefined'){_d="";}_e+="<tr>";_e+="<td  height='25' align=center bgcolor=#ededed>Title</td>";_e+="<td  height='25' align=center bgcolor=#ededed>Description</td>";_e+="</tr>";_e+="<tr>";_e+="<td  height='31' valign='center' border=0><strong><font size=3>&nbsp;"+this.ds_document.getColumn(_g,"title")+"</font></strong></td>";_e+="<td  height='31' colspan=2 align=left><table width=100% cellpadding='2' cellspacing='1' bkcolor='#f3f3f3'><td><font size='2'>"+nexacro.replaceAll(_d,String.fromCharCode(10),'<br>')+"</font></td></tr></table></td>";_e+="</tr>";}_e+="</table>";this.docBody=this.webBrowResult.getProperty("document").getProperty("body");this.docEle=this.webBrowResult.getProperty("document").getProperty("documentElement");this.docBody.setProperty("innerHTML",_e);var _f;if(system.navigatorname=="nexacro"){_f=this.docBody.getProperty("offsetHeight");trace("nHeight==="+_f);this.webBrowResult.c(_f+40);}else{_f=this.docBody.getProperty("offsetHeight");trace("nHeight==="+_f);this.webBrowResult.setOffsetHeight(_f+20);}this.resetScroll();};this.webBrowResult_onloadcompleted=function(_a,_b){};this.webBrowResult_onusernotify=function(_a,_b){};this.btn00_onclick=function(_a,_b){this.fn_search(10);};});this.on_initEvent=function(){this.addEventHandler("onload",this.SampleWebBrowserScroll_onload,this);this.webBrowResult.addEventHandler("onloadcompleted",this.webBrowResult_onloadcompleted,this);this.webBrowResult.addEventHandler("onusernotify",this.webBrowResult_onusernotify,this);this.btn00.addEventHandler("onclick",this.btn00_onclick,this);};this.loadIncludeScript("SampleWebBrowserScroll.xfdl");this.loadPreloadList();_a=null;};})();