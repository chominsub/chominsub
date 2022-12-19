if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_themeid("theme::edupack_nexacro");
        this.set_key("edupack_nexacro");
        this.set_httpretry("0");
        this.set_filesecurelevel("all");
        this.set_networksecurelevel("all");
        this.set_tracemode("append");
        this.set_usecontextmenu("none");
        this.set_usehttpkeepalive("true");
        this.set_initvaluefileid("initvalue::initComp.xiv");
        this.set_checkversion("true");
        this.set_scrollbarsize("10");
        this.set_version("2020.07.06");
    };
    env.on_initEvent = function ()
    {
        // add event handler
        this.addEventHandler("onerror",this.Environment_onerror,this);
    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "2020.02.22.01", "0");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "2020.02.22.01", "0");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "2020.02.22.01", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "2020.02.22.01", "0");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "2020.02.22.01", "");
        nexacro._addService("Frame", "form", "./Frame/", "dynamic", null, "", "0", "0");
        nexacro._addService("Cmm", "form", "./Cmm/", "dynamic", null, "", "0", "0");
        nexacro._addService("EduBasic", "form", "./EduBasic/", "dynamic", null, "", "0", "0");
        nexacro._addService("Sample", "form", "./Sample/", "dynamic", null, "", "0", "0");
        nexacro._addService("EduUrl", "JSP", "http://demo.nexacro.com/edu/edupack_jsp/", "none", null, "", "0", "0");
        nexacro._addService("SvcUrl", "JSP", "http://localhost:8088/edupack_egov/", "none", null, "", "0", "0");
        nexacro._addService("Lib", "js", "./Lib/", "dynamic", null, "", "0", "0");
        nexacro._addService("ExtJs", "js", "./nexacrolib/component/ExtJs/", "dynamic", null, "", "0", "0");
        nexacro._addService("Dll", "file", "./Dll/", "none", null, "", "0", "0");
        nexacro._addService("Model", "model", "./Model/", "dynamic", null, "", "0", "0");
        nexacro._addService("ModelSvc", "model", "http://demo.nexacro.com/edu/nexacroN/", "none", null, "", "0", "0");
        nexacro._addService("ModelTable", "model", "http://demo.nexacro.com/edu/nexacroN/", "none", null, "", "0", "0");
        nexacro._addService("ViewTemp", "file", "./ViewTemp/", "dynamic", null, "", "0", "0");
        nexacro._addService("SvsBS", "bs", "http://demo.nexacro.com/edu/nexacroN/", "none", null, "", "0", "0");
        nexacro._addService("SvcMETA", "metadata", "http://demo.nexacro.com/edu/nexacroN/", "none", null, "", "0", "0");
        nexacro._addService("XPushUrl", "file", "./XPushUrl/", "session", null, "", "0", "0");
        nexacro._addService("SvcXpushURL", "JSP", "http://localhost:8088/edupack_egov/edupack_nexacro/EduBasic/XPush/jspSample/", "session", null, "", "0", "0");
        nexacro._addService("Template", "form", "./Template/", "dynamic", null, "", "0", "0");
        nexacro._addService("SvcUrl2", "JSP", "http://localhost:8088/edupack_egov/", "session", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacrolib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"Sketch", "classname":"nexacro.Sketch", "type":"JavaScript"},
        		{"id":"Camera", "classname":"nexacro.Camera", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"Splitter", "classname":"nexacro.Splitter", "type":""},
        		{"id":"UbiReport", "classname":"nexacro.UbiViewer", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"DataObject", "classname":"nexacro.DataObject", "type":"JavaScript"},
        		{"id":"ExcelExportObject", "classname":"nexacro.ExcelExportObject", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"View", "classname":"nexacro.View", "type":"JavaScript"},
        		{"id":"TranAction", "classname":"nexacro.TranAction", "type":"JavaScript"},
        		{"id":"MessageAction", "classname":"nexacro.MessageAction", "type":"JavaScript"},
        		{"id":"PopupAction", "classname":"nexacro.PopupAction", "type":"JavaScript"},
        		{"id":"XPush", "classname":"nexacro.XPush", "type":"JavaScript"},
        		{"id":"WebView", "classname":"nexacro.WebView", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables
        nexacro.setEnvironmentVariable("evRunMode", "S");
        nexacro.setEnvironmentVariable("evUserId", "admin");
        nexacro.setEnvironmentVariable("evUserNm", "관리자");
        nexacro.setEnvironmentVariable("evTraceMode", "true");
        nexacro.setEnvironmentVariable("evMessagePopup", "true");
        nexacro.setEnvironmentVariable("evLanguage", "KO");
        nexacro.setEnvironmentVariable("evLanguageChange", "KO");
        nexacro.setEnvironmentVariable("evQuikView", "Y");
        nexacro.setEnvironmentVariable("evVariable1", "Env Variable Value1");
        // Cookies
        nexacro.setCookieVariable("evCookie1", "Env Cookie Value1", "false");
        // HTTP Header
        nexacro.setHTTPHeaderVariable("evHttpHeader1", "Env HTTP Header Value1");
    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
    // User Script
    env.registerScript("environment.xml", function() {
    this.envScript = function()
    {
    	return "Environment Script Call";
    }


    /**
     * @description 통신오류 알림
    */
    this.Environment_onerror = function(obj,e)
    {
    	trace("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Environment_onerror!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    	trace("e.statuscode : " + e.statuscode);
    	trace("e.errormsg : " + e.errormsg);

    	// 사용자가 ESC키를 눌렀을 경우 ESC통신 중단 방지처리
    	if (e.statuscode == 10401) {
    		trace("사용자가 ESC키를 눌렀을 경우 ESC통신 중단 방지처리!!!!!");
    		return true;
    	}
    };

    });
					
    env = null;
}
