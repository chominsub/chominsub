(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("SampleFileUpDownTransfer");this.set_titletext("FileUpDownTransfer");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Dataset("dsUpload",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filetype\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/><Column id=\"tranfilesize\" type=\"INT\" size=\"256\"/><Column id=\"prog\" type=\"INT\" size=\"256\"/><Column id=\"dnimg\" type=\"STRING\" size=\"256\"/><Column id=\"rmimg\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"filekey\" type=\"STRING\" size=\"256\"/><Column id=\"downcnt\" type=\"STRING\" size=\"256\"/><Column id=\"filepath\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("dsTemp",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filetype\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new FileDialog("FileDialog",this);this.addChild(_a.name,_a);_a=new FileUpTransfer("FileUpTransfer",this);this.addChild(_a.name,_a);_a=new FileDownTransfer("FileDownTransfer",this);this.addChild(_a.name,_a);_a=new Button("btn_add","10","125","100","28",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("Add Files");this.addChild(_a.name,_a);_a=new Button("btn_upload","115","125","100","28",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("upload");this.addChild(_a.name,_a);_a=new Grid("grdUpload","10","160","730","340",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_binddataset("dsUpload");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"300\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"34\"/></Rows><Band id=\"body\"><Cell text=\"bind:fileimg\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:filename\"/><Cell col=\"2\" text=\"bind:rmimg\" displaytype=\"imagecontrol\"/><Cell col=\"3\" displaytype=\"imagecontrol\" text=\"bind:dnimg\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_deleteAll","220","125","100","28",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("Delete All");this.addChild(_a.name,_a);_a=new ProgressBar("ProgressBar","180","250","390","20",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_visible("false");_a.set_min("0");_a.set_max("100");this.addChild(_a.name,_a);_a=new Static("sta02","10","0","321","30",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("file up/down transfer");_a.set_cssclass("sta_WF_FrmTitle");this.addChild(_a.name,_a);_a=new Static("sta03","10","50",null,"50","10",null,null,null,null,null,this);_a.set_taborder("6");_a.set_cssclass("sta_WF_Description");_a.set_text("FileUpTransfer, FileDownTransfer 컴포넌트를 활용한 파일 업/다운로드 샘플이다.");this.addChild(_a.name,_a);_a=new Button("btnFileList","325","125","100","28",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("File List");this.addChild(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("SampleFileTransfer.xfdl",function(){this.iconInfo={file_icon_ZIP:["zip","rar","7z"],file_icon_IMG:["jpg","jpeg","gif","png","bmp"],file_icon_TXT:["txt","xml"],file_icon_DOC:["doc","docx"],file_icon_XLS:["xls","xlsx"],file_icon_PPT:["ppt","pptx"],file_icon_PDF:["pdf"],file_icon_ETC:["etc"]};this.extToIcon={};this.fileConfig={};this.tmpObjFileList;this.form_onload=function(_a,_b){this.gfnFormOnLoad(this);this.fileConfig={host:this.gfnGetServerUrl(),uploadUrl:"uploadFile.do",downloadUrl:"downloadFile.do",uploadPath:"edupack_file",downImage:"theme://images/img_file.png",delImage:"theme://images/btn_del.png",allowTypes:["jpg","jpeg","gif","png","bmp","txt","zip","7z","gzip","doc","docx","ppt","pptx","xls","xlsx","pdf"]};this.initExtToIcon();};this.initExtToIcon=function(){var _b=this.extToIcon;var _c=this.iconInfo;for(var _e in _c){var _d=_c[_e].length;for(var _f=0;_f<_d;_f++ ){_b[_c[_e][_f]]=_e;}}};this.getFileIcon=function(_b){if(this.gfnIsNull(_b)){return;}_b=_b.toLowerCase();var _c=(/[.]/.exec(_b))?/[^.]+$/.exec(_b):undefined;var _d=this.extToIcon[_c];if(_d==undefined){_c="etc";}return "theme://images/"+this.extToIcon[_c]+".png";};this.btn_add_onclick=function(_a,_b){var _c="FileLoad";var _d=3;var _e=this.FileDialog.open(_c,_d,"%UserApp%");};this.FileDialog_onclose=function(_a,_b){this.tmpObjFileList=_b.virtualfiles;for(var _i=0;_i<this.tmpObjFileList.length;_i++ ){var _c=this.FileUpTransfer.existFile(this.tmpObjFileList[_i]);if(!_c){var _d=this.tmpObjFileList[_i].filename;var _e=_d.lastIndexOf(".")+1;var _f=_d.substr(_e);var _g=this.getFileIcon(_d);var _h=this.FileUpTransfer.addFile(_d,this.tmpObjFileList[_i]);if(_h!= -1){this.dsUpload.addRow();this.dsUpload.setColumn(_h,"fileimg",_g);this.dsUpload.setColumn(_h,"rmimg",this.fileConfig.delImage);this.dsUpload.setColumn(_h,"fileid",_d);this.dsUpload.setColumn(_h,"filename",_d);this.dsUpload.setColumn(_h,"filetype",_f);this.dsUpload.setColumn(_h,"filepath",this.tmpObjFileList[_i].path);}}}};this.btn_upload_onclick=function(_a,_b){if(system.navigatorname!="nexacro"){var _c=" http://localhost:8088/edupack_egov/"+this.fileConfig.uploadUrl;}else{var _c=this.fileConfig.host+this.fileConfig.uploadUrl;}trace("###########################################");trace("# sUploadUrl "+_c);trace("###########################################");this.FileUpTransfer.setPostData("filepath",this.fileConfig.uploadPath);this.FileUpTransfer.upload(_c);this.ProgressBar.set_visible(true);};this.btn_deleteAll_onclick=function(_a,_b){this.FileUpTransfer.clearFileList();this.FileUpTransfer.clearPostDataList();this.dsUpload.deleteAll();};this.grdUpload_ondrop=function(_a,_b){var _c=_b.filelist;for(var _j=0;_j<_c.length;_j++ ){var _d=this.FileUpTransfer.existFile(_c[_j]);if(!_d){var _e=this.FileUpTransfer.addFile(_c[_j].filename,_c[_j]);var _f=_c[_j].filename;var _g=_f.lastIndexOf(".")+1;var _h=_f.substr(_g);var _i=this.getFileIcon(_f);if(_e!= -1){this.dsUpload.addRow();this.dsUpload.setColumn(_e,"fileimg",_i);this.dsUpload.setColumn(_e,"rmimg",this.fileConfig.delImage);this.dsUpload.setColumn(_e,"fileid",_c[_j].filename);this.dsUpload.setColumn(_e,"filename",_c[_j].filename);this.dsUpload.setColumn(_e,"filetype",_h);this.dsUpload.setColumn(_e,"filepath",_c[_j].path);}}}};this.grdUpload_oncellclick=function(_a,_b){var _c=2;var _d=3;if(_b.row<0){return;}if(_b.col==_c){var _e="";if(this.gfnIsNull(this.dsUpload.getColumn(_b.row,"filesize"))){this.dsUpload.set_enableevent(false);this.dsUpload.deleteRow(_b.row);this.dsUpload.set_enableevent(true);_e=this.dsUpload.getColumn(_b.row,"filename");this.FileUpTransfer.removeFile(_e);}else{if(system.navigatorname!="nexacro"){var _f="http://localhost:8088/edupack_egov/"+this.fileConfig.uploadUrl;}else{var _f=this.fileConfig.host+this.fileConfig.uploadUrl;}_e=this.dsUpload.getColumn(_b.row,"fileid");trace("############################# "+this.fileConfig.uploadPath+" : "+_e);this.fnFileDelete(_e);}}else if(_b.col==_d){var _g=this.dsUpload.getColumn(_b.row,"fileid");_g=this.gfnTrim(_g);if(system.navigatorname!="nexacro"){var _h="http://localhost:8088/edupack_egov/"+this.fileConfig.downloadUrl;}else{var _h=this.fileConfig.host+this.fileConfig.downloadUrl;}trace("sDownLoadUrl : "+_h);this.dsTemp.clearData();this.dsTemp.addRow();this.dsTemp.copyRow(0,this.dsUpload,_b.row);this.dsTemp.setColumn(0,"filename",encodeURI(this.dsTemp.getColumn(0,"filename")));this.dsTemp.setColumn(0,"fileid",encodeURI(this.dsTemp.getColumn(0,"fileid")));this.FileDownTransfer.clearPostDataList();this.FileDownTransfer.setPostData("filepath",this.fileConfig.uploadPath);this.FileDownTransfer.setPostData("downfilename",_g);this.FileDownTransfer.setPostData("fileInfo",_g);this.FileDownTransfer.setPostData("fileInfoDs",this.dsTemp.saveXML());this.FileDownTransfer.set_downloadfilename(_g);this.FileDownTransfer.download(_h);}};this.FileUpTransfer_onerror=function(_a,_b){trace("FileUpTransfer_onerror >> e.statuscode :"+_b.statuscode+" / e.errormsg : "+_b.errormsg+" / e.requesturi : "+_b.requesturi);};this.FileUpTransfer_onsuccess=function(_a,_b){var _c=_b.datasets[0];trace(_c.saveXML());var _d=_a.getPostData("removeFile");if(!this.gfnIsNull(_d)){}else{trace("~~~~~~~ Upload File Info ~~~~~~~");for(var _f=0;_f<_c.rowcount;_f++ ){var _e=this.dsUpload.findRow("filename",_c.getColumn(_f,"filename"));if(_e> -1){this.dsUpload.setColumn(_e,"fileid",_c.getColumn(_f,"fileid"));this.dsUpload.setColumn(_e,"filesize",_c.getColumn(_f,"filesize"));this.dsUpload.setColumn(_e,"filename",_c.getColumn(_f,"filename"));this.dsUpload.setColumn(_e,"dnimg",this.fileConfig.downImage);}}trace(this.dsUpload.saveXML());}if(this.ProgressBar.visible){this.ProgressBar.set_visible(false);}};this.FileUpTransfer_onprogress=function(_a,_b){trace("FileUpTransfer00_onprogress >> e.total : "+_b.total+" / e.loaded : "+_b.loaded);this.ProgressBar.set_max(_b.total);this.ProgressBar.set_pos(_b.loaded);if(_b.total==_b.loaded){this.ProgressBar.set_pos(0);this.ProgressBar.set_visible(false);}};this.FileDownTransfer_onerror=function(_a,_b){trace("FileDownTransfer_onerror >>>> e.errortype : "+_b.errortype);trace("FileDownTransfer_onerror >>>> e.statuscode : "+_b.statuscode);trace("FileDownTransfer_onerror >>>> e.errormsg : "+_b.errormsg);trace("FileDownTransfer_onerror >>>> e.requesturi : "+_b.requesturi);};this.FileDownTransfer_onsuccess=function(_a,_b){trace("FileDownTransfer_onsuccess >>>> e.url : "+_b.url);trace("FileDownTransfer_onsuccess >>>> e.targetfullpath : "+_b.targetfullpath);};this.fnFileDelete=function(_b){var _c="deleteFile";var _d="deleteFile.do";var _e="";var _f="";var _g="uploadpath="+this.fileConfig.uploadPath+" fileid="+nexacro.wrapQuote(_b);var _h="fnCallback";this.gfnTransaction(_c,_d,_e,_f,_g,_h);};this.btnFileList_onclick=function(_a,_b){var _c="selectFile";var _d="selectFiles.do";var _e="";var _f="dsUpload=ds_output";var _g="uploadpath="+this.fileConfig.uploadPath;var _h="fnCallback";var _i=true;this.gfnTransaction(_c,_d,_e,_f,_g,_h);};this.removeFileId="";this.fnCallback=function(_b,_c,_d){if(_b=="deleteFile"){var _e=this.dsUpload.findRow("fileid",this.removeFileId);this.dsUpload.deleteRow(_e);this.alert("파일 삭제 성공"+this.removeFileId);}else if(_b=="selectFile"){for(var _j=0;_j<this.dsUpload.rowcount;_j++ ){var _f=this.dsUpload.getColumn(_j,"filename");var _g=_f.lastIndexOf(".")+1;var _h=_f.substr(_g);var _i=this.getFileIcon(_f);this.dsUpload.setColumn(_j,"fileimg",_i);this.dsUpload.setColumn(_j,"rmimg",this.fileConfig.delImage);this.dsUpload.setColumn(_j,"filename",_f);this.dsUpload.setColumn(_j,"filetype",_h);this.dsUpload.setColumn(_j,"dnimg",this.fileConfig.downImage);}}};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);this.btn_upload.addEventHandler("onclick",this.btn_upload_onclick,this);this.grdUpload.addEventHandler("oncellclick",this.grdUpload_oncellclick,this);this.grdUpload.addEventHandler("ondrop",this.grdUpload_ondrop,this);this.btn_deleteAll.addEventHandler("onclick",this.btn_deleteAll_onclick,this);this.sta03.addEventHandler("onclick",this.sta03_onclick,this);this.btnFileList.addEventHandler("onclick",this.btnFileList_onclick,this);this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);this.FileUpTransfer.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);};this.loadIncludeScript("SampleFileTransfer.xfdl");this.loadPreloadList();_a=null;};})();