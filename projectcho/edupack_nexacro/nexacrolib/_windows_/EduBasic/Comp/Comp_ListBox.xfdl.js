(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Comp_ListBox");this.set_titletext("Component-ListBox");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Dataset("ds_dept",this);_a._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">Finances Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Human Resource Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Marketing Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Sales 1 Team</Col></Row><Row><Col id=\"DEPT_CD\">06</Col><Col id=\"DEPT_NAME\">Sales 2 Team</Col></Row><Row><Col id=\"DEPT_CD\">07</Col><Col id=\"DEPT_NAME\">Sales 3 Team</Col></Row><Row><Col id=\"DEPT_CD\">08</Col><Col id=\"DEPT_NAME\">Sales Management Team</Col></Row><Row><Col id=\"DEPT_CD\">09</Col><Col id=\"DEPT_NAME\">Consulting 1 Team</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">Consulting 2 Team</Col></Row><Row><Col id=\"DEPT_CD\">11</Col><Col id=\"DEPT_NAME\">Consulting 3 Team</Col></Row><Row><Col id=\"DEPT_CD\">12</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">13</Col><Col id=\"DEPT_NAME\">Mobile Team</Col></Row><Row><Col id=\"DEPT_CD\">14</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row><Row><Col id=\"DEPT_CD\">15</Col><Col id=\"DEPT_NAME\">Technical Support 1 Team</Col></Row><Row><Col id=\"DEPT_CD\">16</Col><Col id=\"DEPT_NAME\">Technical Support 2 Team</Col></Row><Row><Col id=\"DEPT_CD\">17</Col><Col id=\"DEPT_NAME\">Technical Support 3 Team</Col></Row><Row><Col id=\"DEPT_CD\">18</Col><Col id=\"DEPT_NAME\">Customer Support 1 Team</Col></Row><Row><Col id=\"DEPT_CD\">19</Col><Col id=\"DEPT_NAME\">Customer Support 2 Team</Col></Row><Row><Col id=\"DEPT_CD\">20</Col><Col id=\"DEPT_NAME\">Customer Support 3 Team</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static04","10","40","290","28",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_text(" Basic Usage - innerdataset");_a.set_cssclass("sta_WF_TypeTitle");this.addChild(_a.name,_a);_a=new ListBox("ListBox00","20","73","210","130",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");var _b=new nexacro.NormalDataset("ListBox00_innerdataset",_a);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SU</Col><Col id=\"datacolumn\">Sunday</Col></Row><Row><Col id=\"codecolumn\">MO</Col><Col id=\"datacolumn\">Monday</Col></Row><Row><Col id=\"codecolumn\">TU</Col><Col id=\"datacolumn\">Tuesday</Col></Row><Row><Col id=\"codecolumn\">WE</Col><Col id=\"datacolumn\">Wednesday</Col></Row><Row><Col id=\"codecolumn\">TH</Col><Col id=\"datacolumn\">Thursday</Col></Row><Row><Col id=\"codecolumn\">FR</Col><Col id=\"datacolumn\">Friday</Col></Row><Row><Col id=\"codecolumn\">SA</Col><Col id=\"datacolumn\">Saturday</Col></Row></Rows>");_a.set_innerdataset(_b);this.addChild(_a.name,_a);_a=new ListBox("ListBox02","20","261","210","160",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_multiselect("true");var _c=new nexacro.NormalDataset("ListBox02_innerdataset",_a);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SU</Col><Col id=\"datacolumn\">Sunday</Col></Row><Row><Col id=\"codecolumn\">MO</Col><Col id=\"datacolumn\">Monday</Col></Row><Row><Col id=\"codecolumn\">TU</Col><Col id=\"datacolumn\">Tuesday</Col></Row><Row><Col id=\"codecolumn\">WE</Col><Col id=\"datacolumn\">Wednesday</Col></Row><Row><Col id=\"codecolumn\">TH</Col><Col id=\"datacolumn\">Thursday</Col></Row><Row><Col id=\"codecolumn\">FR</Col><Col id=\"datacolumn\">Friday</Col></Row><Row><Col id=\"codecolumn\">SA</Col><Col id=\"datacolumn\">Saturday</Col></Row></Rows>");_a.set_innerdataset(_c);this.addChild(_a.name,_a);_a=new Static("Static03","12","228","306","28",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text(" Multi Select (Prop. multiselect)");_a.set_cssclass("sta_WF_TypeTitle");this.addChild(_a.name,_a);_a=new Button("Button00","240","261","146","28",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("Get Selected List");this.addChild(_a.name,_a);_a=new ListBox("ListBox03","240","73","230","130",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_codecolumn("DEPT_CD");_a.set_datacolumn("DEPT_NAME");_a.set_innerdataset("ds_dept");this.addChild(_a.name,_a);_a=new ListBox("ListBox01","20","479","210","120",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_multiselect("true");_a.set_itemheight("22");var _d=new nexacro.NormalDataset("ListBox01_innerdataset",_a);_d._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SU</Col><Col id=\"datacolumn\">Sunday</Col></Row><Row><Col id=\"codecolumn\">MO</Col><Col id=\"datacolumn\">Monday</Col></Row><Row><Col id=\"codecolumn\">TU</Col><Col id=\"datacolumn\">Tuesday</Col></Row><Row><Col id=\"codecolumn\">WE</Col><Col id=\"datacolumn\">Wednesday</Col></Row><Row><Col id=\"codecolumn\">TH</Col><Col id=\"datacolumn\">Thursday</Col></Row><Row><Col id=\"codecolumn\">FR</Col><Col id=\"datacolumn\">Friday</Col></Row><Row><Col id=\"codecolumn\">SA</Col><Col id=\"datacolumn\">Saturday</Col></Row></Rows>");_a.set_innerdataset(_d);this.addChild(_a.name,_a);_a=new Static("Static00","12","446","306","28",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text(" Item Height (Prop. itemheight)");_a.set_cssclass("sta_WF_TypeTitle");this.addChild(_a.name,_a);_a=new TextArea("txt_rtn","240","294","210","128",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_positionstep("0");_a.set_value(" ");this.addChild(_a.name,_a);_a=new Static("Static99","10","0","250","28",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_text("ListBox");_a.set_cssclass("sta_WF_FrmTitle");_a.set_positionstep("-1");this.addChild(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_e){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);_a=new BindItem("item0","Button01","text","gds_dept","DEPT_NM");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("Comp_ListBox.xfdl",function(){this.Button00_onclick=function(_a,_b){this.txt_rtn.set_value("");var _c="Selected Count: "+this.ListBox02.getSelectedCount()+"\n";for(var _d=0;_d<this.ListBox02.getCount();_d++ ){if(this.ListBox02.getSelect(_d)){_c+="row index: "+_d+"\n";}}_c+="\nArray Return: "+this.ListBox02.getSelectedItems();this.txt_rtn.set_value(_c);};});this.on_initEvent=function(){this.Button00.addEventHandler("onclick",this.Button00_onclick,this);};this.loadIncludeScript("Comp_ListBox.xfdl");this.loadPreloadList();_a=null;};})();