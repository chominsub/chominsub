//==============================================================================
//
//  Copyright 2021 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.com/legal/license/tobesoft/ko/NexacroN-public-license-readme-1.1.html
//
//==============================================================================
//==============================================================================
//
//  Copyright 2021 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.com/legal/license/tobesoft/ko/NexacroN-public-license-readme-1.1.html
//
//==============================================================================
//==============================================================================
//
//  Copyright 2021 NEXAWEB All Rights Reserved.
//
//
//  NOTICE: NEXAWEB permits you to use, modify, and distribute this file
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.com/legal//license/nexaweb/ja/NexacroN-public-license-readme-1.1.html
//
//==============================================================================
//==============================================================================
//
//  Copyright 2021 NEXAWEB All Rights Reserved.
//
//
//  NOTICE: NEXAWEB permits you to use, modify, and distribute this file
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.com/legal//license/nexaweb/ja/NexacroN-public-license-readme-1.1.html
//
//==============================================================================
//==============================================================================
//
//  Copyright 2021 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.com/legal/license/tobesoft/ko/NexacroN-public-license-readme-1.1.html
//
//==============================================================================
//==============================================================================
//
//  Copyright 2021 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.com/legal/license/tobesoft/ko/NexacroN-public-license-readme-1.1.html
//
//==============================================================================
//==============================================================================
//  © 2014 TOBESOFT CO., LTD. All rights reserved. 
//  www.tobesoft.com/copyright.txt
//==============================================================================

if (!nexacro.DesignForm)
{
    //==============================================================================	
    // nexacro.DesignForm_Style 	
    //==============================================================================	
    nexacro.isDesignMode = true;
    nexacro._rtl = false;
    //==============================================================================	
    // overriding	
    //==============================================================================	
    var traceD = function ()
    {
        var msgs = [];
        var cnt = arguments.length;
        for (var i = 0; i < cnt; i++)
        {
            msgs.push(arguments[i]);
        }
        var msg = msgs.join(' ');

        nexacro.__onNexacroStudioError(msg);
    };

    nexacro._getImageLocation = function (str, baseurl)
    {    	
        var url = str;        
    	return nexacro._getImageServiceLocation(url, baseurl);
    };

    nexacro._getImageServiceLocation = function (url, baseurl, typedefinition_url)
    {    	
        if (url.indexOf("::") < 0)
        {
            if (!typedefinition_url)
                typedefinition_url = nexacro._typedefinition_url;

            if (!baseurl)
            {                
                baseurl = nexacro._project_url;                
            }
            
            //traceD("ret : " + nexacro._transurl(baseurl, typedefinition_url, url) + "\r\n");

            return nexacro._transurl(baseurl, typedefinition_url, url);            
        }
        else
        {            
            // Prefix 경로는 Design Time에서 xadl 기준으로..
            return nexacro.__getServiceLocation(url);
        }
    };

    nexacro._getImageSize = function (src, callbackFn, pThis, base_url, org_src)
    {
        if (!src) return null;
        if (src.substring(0, 4).toLowerCase() == "url(")
            src = src.substring(5, src.length - 2);

		var imgurl, retval;
		var format = nexacro._transImageBase64StringFormat(src,false,true);
		if (format)
		{
			imgurl = format.alldata;
		}
		else
		{
			imgurl = nexacro._getImageLocation(src, base_url);
		}
       

        if (imgurl)
        {
            if (org_src)
            {
                org_src = org_src.toString();
                org_src = nexacro._getURIValue(org_src);
            }
            var servicecachelevel;
            var serviceversion;

            var service = nexacro._getServiceObject(org_src ? org_src : src);

            if (pThis._isPreviewMode())
            {
                // CSS Preview는 사용자가 image를 편집하거나 CSS를 편집 시 MAPData를 새로 갱신하는 작업을 수행중입니다.
                // Iamge자체도 Theme 경로는 cachelevel == "session" 을 사용하여 Map에서 얻도록 되어 있지만 Theme를 편집하여
                // 결과를 바로 확인하는 CSSView에서는 "session" type이 의미 없음 - preview에 보이는 Component 대상의 imgurl을 
                // 직접 CacheList에 포함시키는 방향이 맞아보임

                service.cachelevel = "none";
            }
            if (service.cachelevel == "static" || service.cachelevel == "session")
            {
                retval = nexacro._ImgInfoCacheList[imgurl];
                if (retval)
                {
                    return retval;
                }
            }

            var loadItem = nexacro._CommunicationManager[imgurl];
            if (loadItem)
            {
                loadItem.appendCallback(pThis, callbackFn);
            }
            else
            {
                loadItem = new nexacro._CommunicationItem(imgurl, "image", false);
                nexacro._CommunicationManager[imgurl] = loadItem;
                loadItem.appendCallback(pThis, callbackFn);
                if (service)
                {
                    if (service.cachelevel == "session")
                        servicecachelevel = "dynamic";
                    else
                        servicecachelevel = service.cachelevel;

                    serviceversion = service.version;
                }
                else
                {
                    servicecachelevel = "none";
                    serviceversion = 0;
                }
                // designform은 sync 처리. async인 경우 getFitSize에서 size 계산을 할 수가 없음                
                loadItem.handle = nexacro.__getImageSize(imgurl, nexacro.__bindLoadImageHandler(loadItem), servicecachelevel, serviceversion, false);
                retval = nexacro._ImgInfoCacheList[imgurl];
                if (retval) return retval;
            }
            return null;
        }
    };

    if (nexacro.FormBase)
    {
        var _pFormBase = nexacro.FormBase.prototype;
        _pFormBase.loadForm = function (formurl, async, reload, baseurl)
        {            
            if (this._load_manager)
            {
                var url = nexacro._getFDLLocation(formurl, baseurl);
                
                var parent = this.parent;
                while (parent && !parent._is_frame)
                {
                    if (parent._is_form)
                    {
                        var _p_url = parent._url;
                        if (url == _p_url)
                        {
                            trace("[ERROR] can not use same url with parent form");
                            return;
                            //throw nexacro.MakeURIError(this, "native_load_parent", formurl);
                        }
                    }
                    parent = parent.parent;
                }

                this._url = url;
                this._base_url = nexacro._getBaseUrl(url);

                if (this._load_manager)
                    this._load_manager.clearAllLoad();

                this._clearUserFunctions();

                this._is_loading = true;
                if (this.parent._is_frame && this.parent.form == this)
                {
                    // ChildFrame > Form   
                    _application._registerLoadforms(this);
                }

                var service = nexacro._getServiceObject(formurl);
                service.cachelevel = "none"; //lym 16.06.15 : designform에선 form을 load할 시 cache를 사용하지 않음
                async = false; //lym 16.06.15 : designform에선 form을 sync로만 동작
                this._load_manager.loadMainModule(url, undefined, async, reload, service);
            }
        };
         
        _pFormBase._getFormBaseUrl = function ()
        {                        
            return this._base_url;            
        };
        
        _pFormBase.registerScript = nexacro._emptyFn;
        delete _pFormBase;
    }

    if (nexacro.Form)
    {
        var _pForm = nexacro.Form.prototype;
        _pForm.set_titletext = function (v)
        {

            this._setAccessibilityLabel(v);

            //if (this.parent && this.parent._is_frame)
            {
                if (this.titletext != v)
                {
                    this.titletext = v;
                    //this.parent._applyTitleText();
                }
            }
        };

        _pForm.on_update_position = function (resize_flag, move_flag)
        {
            var control_elem = this._control_element;
            if (control_elem)
            {
                control_elem.setElementPosition(this._adjust_left, this._adjust_top);

                if (resize_flag && this instanceof nexacro._InnerForm)
                {
                    var val = this._calcScrollMaxSize();
                    control_elem.container_maxwidth = val.w;
                    control_elem.container_maxheight = val.h;
                }

                control_elem.setElementSize(this._adjust_width, this._adjust_height); // <-스크롤 갱신			

                if (move_flag)
                {
                    this.on_fire_onmove(this._adjust_left, this._adjust_top);
                }
                if (resize_flag)
                {
                    this.on_fire_onsize(this._adjust_width, this._adjust_height);
                }
            }
        };

        delete _pForm;
    }

    if (nexacro.InputElement)
    {
        var _pInputElement = nexacro.InputElement.prototype;

        _pInputElement.setElementFocus = function ()
        {
        };
        delete _pInputElement;
    }

    if (nexacro._LoadManager)
    {
        var __pLoadManager = nexacro._LoadManager.prototype;
        if (__pLoadManager)
        {
            __pLoadManager.on_load_main = function (url, errstatus, module, fireerrorcode, returncode, requesturi, locationuri, extramsg)
            {
                if (url == this.main_url)
                {
                    this.status = 2;
                    this._main_handle = null;
                    this._is_mainloaded = false;
                    var obj, win, frame, designform, extra_info;
                    if (errstatus == 0 && module && typeof (module) == "function")
                    {
                        module.call(this.context);

                        // div url load success
                        obj = this.context;
                        if (obj instanceof nexacro._InnerForm)
                        {
                            win = obj._getWindow();
                            frame = obj.getOwnerFrame();
                            if (frame.form instanceof nexacro.DesignForm)
                            {
                                designform = frame.form;
                                extra_info = designform._getScopeName(obj);

                                nexacro.__notifyToDesignWindow(win.handle, nexacro._design_notify_div_urlload, designform.id, extra_info);
                            }
                        }
                    }
                    else
                    {
                        // adl 
                        if (this.context == _application)
                        {
                            nexacro._onHttpSystemError(this.context, true, this.context, "0x80010006", url, returncode, requesturi, locationuri, extramsg);
                            return;
                        }
                        else
                        {
                            if (this.context)
                                this.context._onHttpSystemError(this.context, true, this.context, fireerrorcode, url, returncode, requesturi, locationuri, extramsg);

                            nexacro._onHttpSystemError(this.context, true, this.context, fireerrorcode, url, returncode, requesturi, locationuri, extramsg);

                            // div url load fail
                            obj = this.context;
                            if (obj instanceof nexacro._InnerForm)
                            {
                                win = obj._getWindow();
                                frame = obj.getOwnerFrame();
                                if (frame.form instanceof nexacro.DesignForm)
                                {
                                    designform = frame.form;

                                    var parent = obj.parent;
                                    extra_info = designform._getScopeName(parent);

                                    nexacro.__notifyToDesignWindow(win.handle, nexacro._design_notify_div_httperror, designform.id, extra_info);
                                }
                            }
                        }
                    }
                    this._is_mainloaded = true;
                    this._check_fire_oninit();
                }
            };
        }
        delete __pLoadManager;
    }

    if (nexacro._LayoutManager)
    {
        var __pLayoutManager = nexacro._LayoutManager.prototype;

        //overide
        __pLayoutManager._makeContentsInfo = function (objComponent, dimension)
        {
            // 디자인에서는 팝업류도 무조건 visible하게 표현해야 한다.
            // 디자인에서 팝업류는 grow, shrink 0을 유지한다.
            var ret = {
                visible: true,
                order: (objComponent.layoutorder > 0 ? objComponent.layoutorder : 0),

                size: [objComponent.width, objComponent.height],
                min_size: [objComponent.minwidth ? +objComponent.minwidth : null, objComponent.minheight ? +objComponent.minheight : null],
                max_size: [objComponent.maxwidth ? +objComponent.maxwidth : null, objComponent.maxheight ? +objComponent.maxheight : null],

                _is_fitcontent: false,
                _is_popup: objComponent._is_popup_control,

                _adjust_pos: [0, 0, 0, 0],
                _target: objComponent,
            };

            // fluid 타입별 추가 info
            switch (dimension)
            {
                case 1:
                    if (!ret._is_popup)
                    {
                        ret["grow"] = objComponent.flexgrow !== undefined ? objComponent.flexgrow : 0;
                        ret["shrink"] = objComponent.flexshrink !== undefined ? objComponent.flexshrink : 1;
                        ret["_is_flex"] = ret["grow"] > 0 || ret["shrink"] > 0;
                    }
                    else
                    {
                        ret["grow"] = 0;
                        ret["shrink"] = 0;
                        ret["_is_flex"] = false;
                    }
                    break;
                case 2:
                    ret["coordinate"] = objComponent._getCurrentLayoutTablecellarea();
                    break;
            }

            return ret;
        };

        // designonly
        __pLayoutManager.removeLayoutForDesign = function (objContainer, strLayoutName)
        {
            // Design 기능 옮김. 공용으로 사용시 로직 다시고민
            if (strLayoutName == "default")
            {
                return false;
            }

            var container_info = this._findContainerInfo(objContainer)
            if (container_info)
            {
                var layouts = container_info.layout_list;

                if (strLayoutName)
                {
                    if (container_info.current_layout_name == strLayoutName)
                    {
                        container_info.current_layout_name = "";
                    }
                    layouts[strLayoutName].destroy();
                    layouts.delete_item(strLayoutName);
                }
                else
                {
                    container_info.current_layout_name = "default";

                    for (var i = layouts.length - 1; i >= 0; i--)
                    {
                        var layout = layouts.get_id(i);
                        if (layout != "default")
                        {
                            layout.destroy();
                            layouts.delete_item(layout);
                        }
                    }
                }
            }
            return true;
        };

    }
    nexacro.__refreshDirtyWindow = function (_win_handle)
    {
    	var win_handle = _win_handle;
    	if (!win_handle)
    	{
    		win_handle = nexacro._getMainWindowHandle();
    	}
    	nexacro.__refreshDirtyRectWithCallBack(win_handle);
    };
    
	//designmode 에서도 pluginmode = true 로 동작함 
	//
    nexacro._appliedTitleBarHeight = function (frame, h)
    {
    	return h;
    };

    nexacro._appliedStatusBarHeight = function (frame, h)
    {    
    	return h;
    };

    nexacro._setImageItemCache = function (url, width, height)
    {    	
        var imageurl = nexacro._getImageLocation(url);
    	var imgcache = nexacro._getImageCacheMaps();
    	if (imageurl && imgcache)
    		imgcache[imageurl] = { "width": width, "height": height };
    };

    nexacro._clearImageItemCache = function (url)
    {
        var imageurl = nexacro._getImageLocation(url);        
    	var imgcache = nexacro._getImageCacheMaps();
    	if (imageurl && imgcache && imgcache[imageurl])
    	{
    		imgcache[imageurl] = null;
    		delete imgcache[imageurl];
    	}
    };

    nexacro._clearImageCache = function ()
    {
    	nexacro._ImgInfoCacheList = {};
    };

	//var mapdata = 'nexacro._setCSSMaps ({MainFrame: {self:{enabled :{border1 : nexacro.BorderObject("3px solid #666666"),color : nexacro.ColorObject("#444444")},deactivate :{border : nexacro.BorderObject("2px solid #235798")}}}})';
    //eval(mapdata);
    nexacro._CSSMapStringtoJson = function (mapdata)
    {
        eval(mapdata);
    };

    //nexacro._updateCSSMapItem("MainFrame1, self1, enable", "border", 'nexacro.BorderObject("4px solid #666666")');
    nexacro._updateCSSMapItem = function (parent, prop, value)
    {
    	var valueobject = eval(value);
    	var cssmap = nexacro._dimension_maps;

    	var parents = parent.split(",");
    	var parentlen = parents.length;
    	var item = parents[0];
    	var childitem, i;

    	//add 
    	if (!cssmap[item])
    	{
    		for (i = 0; i < parentlen; i++)
    		{
    			item = parents[i];
    			childitem = parents[i + 1];
    			if (childitem)
    			{
    				cssmap[item] = {};
    				cssmap[item][childitem] = {};
    				cssmap = cssmap[item];
    			}
    			else
    			{
    				cssmap[item][prop] = valueobject;
    			}
    		}
    	}
    	else  //update
    	{
    		for (i = 0; i < parentlen; i++)
    		{
    			item = parents[i];
    			childitem = parents[i + 1];
    			if (cssmap[item])
    			{
    				if (cssmap[item][childitem])
    					cssmap = cssmap[item];
    				else
    				{
    					if (childitem)
    					{
    						cssmap[item][childitem] = {};
    						cssmap = cssmap[item];
    					}
    					else
    					{
    						cssmap[item][prop] = valueobject;
    					}
    				}
    			}
    			else
    			{
    				cssmap[item][prop] = valueobject;
    			}
    		}
    	}
    };

	//prop 이 없으면 parentnode 를 delete 
	//prop이 있으면  leaf node의 prop만 delete 
    nexacro._deleteCSSMapItem = function (parent, prop)
    {
    	var cssmap = nexacro._dimension_maps;

    	var parents = parent.split(",");
    	var parentlen = parents.length;
    	var item = parents[0];
    	item = item.trim();
    	//add 
    	if (!cssmap[item])
    		return;

    	for (var i = 0; i < parentlen; i++)
    	{
    		item = parents[i];
    		item = item.trim();
    		if (cssmap[item])
    		{
                if (i == parentlen - 1)
				{
					if (prop)
					{
						cssmap[item][prop] = null;
						delete cssmap[item][prop];
					}
					else 
					{
						cssmap[item] = null;
						delete cssmap[item];
					}
				}

    			cssmap = cssmap[item];    			
    		}
    	}    	
    };


    // notify types
    nexacro._design_notify_layoutchange = 1;
    nexacro._design_notify_div_urlload = 2;
    nexacro._design_notify_div_httperror = 3;
    nexacro._design_notify_refresh_properties = 4;

    // styles
    nexacro._design_sublayout_overlaycolor = nexacro.BackgroundObject("rgba(0,0,0,0.4)", this);

    // theme caching
    nexacro._design_css_cache = new nexacro.Collection();
    nexacro._design_themeid_map = new nexacro.Collection();

    //=====================================================================================
    // Design Utility API
    //=====================================================================================

    //--------------------------------------------
    // for Design Multi Theme
    //--------------------------------------------

    // 이미 로딩된 css_context를 얻음. 
    nexacro._getDesignCssContext = function (url)
    {        
        if (!_application._css_context_cache)
            return null;

        var ar = _application._css_context_cache;
        var css_context = ar.get_item(url);

        return css_context;
    };

    // 새로 로딩된 css_context를 cache함.
    nexacro._addDesignCssContext = function (context)
    {
        if (!_application._css_context_cache)
            _application._css_context_cache = new nexacro.Collection();

        // 이미 있으면?

        var ar = _application._css_context_cache;
        ar.add_item(context._url, context);
    };

    // 로딩됐던 css_context를 cache에서 삭제함.
    nexacro._removeDesignCssContext = function (url)
    {
        if (!_application._css_context_cache)
            return;

        _application._css_context_cache.delete_item(url);
    };

    // 특정 css 파일이 갱신된 경우 호출됨.
    // context cache에서 제거하고 다시 로드
    nexacro._updateDesignCssContext = function (cssurl)
    {
        nexacro._removeDesignCssContext(cssurl);

        // check LoadManager의 캐쉬는 사용하지 않음.
        _application._load_manager.localList = [];
        _application._load_manager.localCnt = 0;

        var css_context = new nexacro.DesignCssContext(cssurl);

        if (cssurl.indexOf(".xtheme") >= 0)
            nexacro._loadTheme2(cssurl, css_context);
        else
        {
            // lym
            //nexacro._loadCss2(cssurl, css_context);
        }

        nexacro._addDesignCssContext(css_context);
        return css_context;
    };

    // cs 파일을 로딩한다. _application loadManager를 사용.
    /* // lym 
    nexacro._loadCss2 = function (url, context)
    {
        var cssurl = _application._getServiceLocation(url) + ".js";
        var service = _application._getServiceObject(url);
        var _load_manager = _application._load_manager;

        //this._load_manager.loadCssModule(cssurl.join(""), null, null, service);

        // 일단 LoadManager는 캐쉬 하지 않도록함.
        //var load_item = _load_manager.getLocalItem(url);
        var load_item;
        if (!load_item)
        {
            load_item = new nexacro.LoadItem(cssurl, "css", context);
            load_item._context = context;

            _load_manager.localList.push(load_item);
            _load_manager.localCnt++;

            var cur_cachelevel = service.cachelevel;
            service.cachelevel = "none";
            load_item._handle = nexacro._loadJSModule(cssurl, _load_manager, nexacro._on_load_cssmodule2, false, service, false);
            service.cachelevel = cur_cachelevel;
        }
    };
	*/

    // 로드된 css파일을 context에 반영 (DesignCssContext 일것임)
    nexacro._on_load_cssmodule2 = function (url, errstatus, module, fireerrorcode, returncode, requesturi, locationuri)
    {
        var _load_manager = this;
        var load_Item = _load_manager.getLocalItem(url);
        var extramsg = "";
        if (load_Item)
        {
            load_Item._handle = null;
            if (errstatus == 0 && module && typeof (module) == "function")
            {
                if (load_Item.type != "include")
                {
                    var context = load_Item._context;
                    if (!context)
                        context = _load_manager.context;
                    module.call(context);
                }
            }
            else
            {
                load_Item.errcode = errstatus;
                nexacro._onHttpSystemError(_load_manager.context, true, _load_manager.context, fireerrorcode, url, returncode, requesturi, locationuri, extramsg);
            }

            return;
        }
    };

    // 테마 파일을 로딩한다.
    nexacro._loadTheme2 = function (themeid, context)
    {    	
        // reset _application CSS
        context._css_selectors = { _is_selector: true, _has_items: false, _has_attr_items: false };

        // loadTheme
        var curthemeid = themeid;
        var themename;
        var idx = curthemeid.indexOf(".xtheme");
        if (idx < 0)
            themename = curthemeid;
        else if (idx > 0)
            themename = curthemeid.substring(0, idx);
        
        //var cssurl, base_url;
        if (themename)
        {
            // _application._clearLocalThemeCache();

            // TODO _theme_uri 를 참조하는 부분은 DesignCssContext에서 읽을수 있도록 해야함.
            idx = themename.indexOf("::");
            if (idx > 0)
            {                
                themename = themename.substring(idx + 2);				            	
                nexacro._theme_uri = "./_theme_/" + themename;
            }
            else
            {            	
            	nexacro._theme_uri = "./_theme_/" + themename;
            }
        }
    };

    // 로딩된 테마를 Context에 반영한다. (DesignCssContext)
    nexacro._on_load_thememodule2 = function (url, errstatus, module, fireerrorcode, returncode, requesturi, locationuri)
    {
        var _load_manager = this;
        var load_Item = _load_manager.getLocalItem(url);
        var extramsg = "";
        if (load_Item)
        {
            load_Item._handle = null;
            if (errstatus == 0 && module && typeof (module) == "function")
            {
                if (load_Item.type != "include")
                {
                    var context = load_Item._context;
                    if (!context)
                        context = _load_manager.context;
                    module.call(context);
                }
            }
            else
            {
                load_Item.errcode = errstatus;
                nexacro._onHttpSystemError(_load_manager.context, true, _load_manager.context, fireerrorcode, url, returncode, requesturi, locationuri, extramsg);
            }

            return;
        }
    };

    //--------------------------------------------
    // Get/Set Property Utility
    //--------------------------------------------
    nexacro._setInitValueID = function (obj, value)
    {
        if (obj)
        {
            obj.set_initvalueid(value);
            
            var fn = obj._type_name + value;

            if (nexacro_init[fn])
            {
                nexacro_init[fn].call(obj, obj);
            }
        }
    };

    nexacro._setProperty = function (obj, propid, propval, pseudo)
    {
        // trace(obj + "[" + propid + "] : " + propval);
        if (!obj)
            return;

        var form;
        
    	// design 용으로 property를 따로 관리하는 케이스가 있다.
        if (propval === null)
            propval = undefined;

        if (obj["design_set_" + propid])
        {	
            obj["design_set_" + propid](propval);
        }
        else if (obj["set_" + propid])
        {
        	if (propval === undefined)
            {
        	    if (propid == "left" || propid == "top" || propid == "width" || propid == "height" || propid == "right" || propid == "bottom")
        	    {
        	        //obj["set_" + propid](propval);
                    // undefined와 null의 동작이 다르다.. 버그같음.
        	        obj["set_" + propid](null);
                    form = obj._getForm();
                    if (form && form.resetScroll) form.resetScroll();
                }
                else
                	obj["set_" + propid](propval);
            }
            else
            {
        	    if (propid == "left" || propid == "top" || propid == "width" || propid == "height" || propid == "right" || propid == "bottom")
        	    {
        	        obj["set_" + propid](propval);
                    form = obj._getForm();
        	        if (form && form.resetScroll) form.resetScroll();
        	    }
                else
        	    {
        	        obj["set_" + propid](propval);
                }
            }
        }
        else
        {
        	// user property의 경우 setter가 없을 수 있다..        	
            obj.getSetter(propid).set(propval);
        }

        return true;
    };

    // Computed Style Test
    
    nexacro._getStyleProperty = function (obj, propid)
    {
        if (!obj)
            return "";

        /* note
        * obj : 대상 오브젝트
        * propid : css property
        *          ex> -nexa-icon, background, -nexa-padding 등
        *           child property는 요청하지 않음
        */

        var str, control_elem;
        
        if (propid == "-nexa-text-align" || propid == "-nexa-vertical-align" || propid == "-nexa-text-decoration" || propid == "-nexa-word-wrap" || propid == "-nexa-icon" || propid == "-nexa-icon-position" || propid == "-nexa-text-padding")
        {
            control_elem = obj.getElement();
            if (control_elem && control_elem.handle)
            {
                var child_elem;
                if (control_elem.linkedcontrol && (control_elem.linkedcontrol instanceof nexacro.Edit || control_elem.linkedcontrol instanceof nexacro.MaskEdit || control_elem.linkedcontrol instanceof nexacro.TextArea)) 
                {
                    child_elem = control_elem.linkedcontrol._input_element;
                }
                else
                {
                    child_elem = nexacro.__findElement(control_elem.handle, "nexacontentsbox");
                }

                if (child_elem)
                {
                    str = child_elem._getComputedStyleValue(propid);
                    return str;
                }
            }
        }

        control_elem = obj.getElement();
        if (control_elem)
            str = control_elem._getComputedStyleValue(propid);

        return str;
    };

    nexacro._getComputedStylePropertiesWithCallback = function (obj, propid, ret_handle)
    {
        if (!obj)
            return "";

        var control_elem = obj.getElement();

        return nexacro._getComputedStyleProperties(control_elem, propid, ret_handle);
    };

    nexacro._getComputedStyleProperties = function (control_elem, propid, ret_handle, convert_prop)
    {
        if (!control_elem || !control_elem.handle)
        {
            return "";
        }

        /* note
        * obj : 대상 오브젝트
        * propid : css property
        *          ex> -nexa-icon, background, -nexa-padding 등
        *           child property는 요청하지 않음
        */

        var propids = nexacro._isArray(propid) ? [].concat(propid) : propid.split(",");
        var property_length = propids.length;
        var contents_elem_prop = "";
        var control_elem_prop = "";

        propids.forEach(function (val, idx, arr)
        {
            switch(val)
            {
                case "wordSpacing":     arr[idx] = "word-spacing"; break;
                case "letterSpacing":   arr[idx] = "letter-spacing"; break;
                case "textDecoration":  arr[idx] = "-nexa-text-decoration"; break;
                case "wordWrap":        arr[idx] = "-nexa-word-wrap"; break;
                case "borderRadius":    arr[idx] = "border-radius"; break;
                case "border":          arr[idx] = "-nexa-border"; break;
                case "edge":            arr[idx] = "-nexa-edge"; break;
                case "boxShadow":       arr[idx] = "box-shadow"; break;
                case "padding":         arr[idx] = "-nexa-padding"; break;
                case "textAlign":       arr[idx] = "-nexa-text-align"; break;
                case "verticalAlign":   arr[idx] = "-nexa-vertical-align"; break;
                case "icon":            arr[idx] = "-nexa-icon"; break;
                case "iconPosition":    arr[idx] = "-nexa-icon-position"; break;
            }
        });

        for (var i = 0 ; i < property_length ; i++)
        {
            if (propids[i] == "-nexa-text-align" || propids[i] == "-nexa-vertical-align" || propids[i] == "-nexa-text-decoration" || propids[i] == "-nexa-word-wrap" || propids[i] == "-nexa-icon" || propids[i] == "-nexa-icon-position")
            {
                contents_elem_prop += propids[i];
                contents_elem_prop += ",";
            }
            else
            {
                control_elem_prop += propids[i];
                control_elem_prop += ",";
            }
        }
        
        if (contents_elem_prop.length > 0)
        {
            var child_elem = nexacro.__findElement(control_elem.handle, "nexacontentsbox");
            if (child_elem)
            {
                contents_elem_prop = child_elem._getComputedStyleWithCallback(contents_elem_prop, ret_handle);
            }
            else
            {
                control_elem_prop = contents_elem_prop + control_elem_prop;
                contents_elem_prop = "";
            }
        }

        if (control_elem_prop.length > 0)
        {
            control_elem_prop = control_elem._getComputedStyleWithCallback(control_elem_prop, ret_handle);
        }        

        var ret = "";
        if (contents_elem_prop.length > 0 && control_elem_prop.length > 0)
        {
            ret += contents_elem_prop;
            ret += ",";
            ret += control_elem_prop;
        }
        else
        {
            ret = contents_elem_prop + control_elem_prop;
        }
        var tmp = {};
        if (convert_prop)
        {
            eval("tmp = {" + ret + "};");
            for (var stylename in tmp)
            {
                switch (stylename)
                {
                    case "word-spacing":            tmp.wordSpacing = tmp[stylename]; delete tmp[stylename]; break;
                    case "letter-spacing":          tmp.letterSpacing = tmp[stylename]; delete tmp[stylename]; break;
                    case "-nexa-text-decoration":   tmp.textDecoration = tmp[stylename]; delete tmp[stylename]; break;
                    case "-nexa-word-wrap":         tmp.wordWrap = tmp[stylename]; delete tmp[stylename]; break;
                    case "border-radius":           tmp.borderRadius = tmp[stylename]; delete tmp[stylename]; break;
                    case "-nexa-border":            tmp.border = tmp[stylename]; delete tmp[stylename]; break;
                    case "-nexa-edge":              tmp.edge = tmp[stylename]; delete tmp[stylename]; break;
                    case "box-shadow":              tmp.boxShadow = tmp[stylename]; delete tmp[stylename]; break;
                    case "-nexa-text-align":        tmp.textAlign = tmp[stylename]; delete tmp[stylename]; break;
                    case "-nexa-vertical-align":    tmp.verticalAlign = tmp[stylename]; delete tmp[stylename]; break;
                    case "-nexa-icon":              tmp.icon = tmp[stylename]; delete tmp[stylename]; break;
                    case "-nexa-icon-position":     tmp.iconPosition = tmp[stylename]; delete tmp[stylename]; break;
                    case "-nexa-padding":
                        tmp.padding = control_elem._padding_info ? control_elem._padding_info.value : "";
                        delete tmp[stylename]; break;
                }
            }

            return JSON.stringify(tmp);
        }
        else
        {
            return "{" + ret + "}";
        }
    };
    
    nexacro._getProperty = function (obj, propid, pseudo)
    {
        if (!obj)
            return "";

        // design 용으로 property를 따로 관리하는 케이스가 있다.
        var ret = "";
        if (obj["design_get_" + propid])
        {
            ret = obj["design_get_" + propid].call(obj);
        }
        else
        {
            ret = obj[propid];
        }
		
        return ret;
    };

    nexacro._getInlineStyleValue = function (comp)
    {
        if (!comp)
            return "";

        // inline style 값 전체 리턴
        var str = "";

        // normal style
        var _style = comp.style;
        var prop;
        if (_style)
        {
            var _pStyle = nexacro.Style.prototype;
            for (prop in _style)
            {
                if (prop[0] == "_")
                    continue;
                if (typeof (_style[prop]) == "function")
                    continue;
                if (_style[prop] == null)
                    continue;
                if (_pStyle[prop] == _style[prop]) // rtlimagemirroring 때문에 임시
                    continue;
                str += prop + ": " + _style[prop]._value + "; ";
            }
        }

        // Pseudo style value
        var pseudo_styles = comp._styles;
        if (pseudo_styles)
        {
            for (var pseudo_style in pseudo_styles)
            {
                if (pseudo_style[0] == "_")
                    continue;
                if (pseudo_style == "normal") // tabpage 버그 임시
                    continue;
                _style = pseudo_styles[pseudo_style];
                str += ":" + pseudo_style + " { ";
                for (prop in _style)
                {
                    if (prop[0] == "_")
                        continue;
                    if (typeof (_style[prop]) == "function")
                        continue;
                    if (_style[prop] == null)
                        continue;
                    str += prop + ": " + _style[prop]._value + "; ";
                }
                str += " }; ";
            }
        }

        return str;
    };

    nexacro._getInlineStyleProperty = function (obj, propid, pseudo)
    {
        if (!obj)
            return "";

        // style.xxx
        var curobj = null;
        if (!pseudo)
        {
            curobj = obj.style;
        }
        else if (obj._styles[pseudo])
        {
            curobj = obj._styles[pseudo];

            // 없으면?
        }

        if (curobj == null)
            return "";

        // propid = style.align.halign
        var propids = propid.split(".");
        var property_length = propids.length;

        for (var i = 1; i < property_length; i++)
        {
            curobj = curobj[propids[i]];
            
            if (curobj == null)
                return "";
        }          

        return curobj._value ? curobj._value : curobj;
    };

    nexacro._getCurrentStyleValue = function (obj, propid, pseudo)
    {
        if (!obj)
            return "";

        var propids = propid.split(".");
        var property_length = propids.length;
        var curobj;
        if (property_length == 1 && propid == "style")
        {
            if (!pseudo)
                pseudo = "normal";

            var cur_pseudo = obj._pseudo;
            obj.setCurrentPseudo(pseudo);

            curobj = obj.currentstyle;

            obj.setCurrentPseudo(cur_pseudo);

            if (curobj)
                return curobj._value ? curobj._value : curobj;
        }
        else if (property_length > 1 && propids[0] == "style")
        {
            // style.xxx
            curobj = null;
            if (!pseudo)
                curobj = obj.style;
            else if (obj._styles[pseudo])
                curobj = obj._styles[pseudo]; // 없으면?

            var fn = obj["on_find_CurrentStyle_" + propids[1]];
            if (fn)
                curobj = fn.call(obj, pseudo);

            if (curobj == null)
                return "";
            else
            {
                for (var i = 2; i < property_length; i++)
                {
                    curobj = curobj[propids[i]];
                    if (curobj == null)
                        return "";
                }
            }

            return curobj._value ? curobj._value : curobj;
        }

        return "";
    };

    nexacro._getBorderWidth = function (obj)
    {
        if (nexacro._isNull(obj))
            return [0, 0, 0, 0];

        if (obj._getBorderWidth)
            return obj._getBorderWidth();

        return [0, 0, 0, 0];
    };

    nexacro._isCompositeCompElement = function (elem) // [RP:91904] 2021/04/13 이인영 : Xmoudle을 설치를 한후 nexacro studio design에 생성후 propertye에서 옵션값을 변경하면 처음에는 design에서 반영되지만 두번째부터는 반영이되지 않지만 실행하면 정상적으로 반영되는 문제
    {        
        if (!elem)
            return false;

        var parent = elem.parent;
        while (parent)
        {
            if (parent instanceof nexacro._CompositeForm)
                return true;

            parent = parent.parent;
        }

        return false;
    };

    //========================================================================
    // DesignForm_Style
    //========================================================================
    /*
    nexacro.DesignForm_Style = function (target)
    {
        nexacro.Form_Style.call(this, target);
    };

    var _pDesignFormStyle = nexacro._createPrototype(nexacro.Style, nexacro.DesignForm_Style);
    nexacro.DesignForm_Style.prototype = _pDesignFormStyle;

    eval(nexacro._createAlignAttributeEvalStr("_pDesignFormStyle", "stepalign"));
    eval(nexacro._createValueAttributeEvalStr("_pDesignFormStyle", "stepshowtype"));

    // custom Part
    _pDesignFormStyle.__custom_emptyObject = function ()
    {
        this.stepalign = null;
        this.stepshowtype = null;
    };
    _pDesignFormStyle.__get_custom_style_value = function ()
    {
        var val = "";
        if (this.stepalign && !this.stepalign._is_empty) val += "stepalign:" + this.stepalign._value + "; ";
        if (this.stepshowtype && !this.stepshowtype._is_empty) val += "stepshowtype:" + this.stepshowtype._value + "; ";
        return val;
    };

    //---------------------------------------------------------------
    nexacro.DesignForm_CurrentStyle = function ()
    {
        nexacro.CurrentStyle.call(this);
        this.stepalign = null;
        this.stepshowtype = null;
    };

    var _pDesignFormCurrentStyle = nexacro._createPrototype(nexacro.CurrentStyle, nexacro.DesignForm_CurrentStyle);
    nexacro.DesignForm_CurrentStyle.prototype = _pDesignFormCurrentStyle;

    _pDesignFormCurrentStyle.__custom_emptyObject = _pDesignFormStyle.__custom_emptyObject;
    _pDesignFormCurrentStyle.__get_custom_style_value = _pDesignFormStyle.__get_custom_style_value;

    delete _pDesignFormStyle;
    delete _pDesignFormCurrentStyle;
	*/

    //==============================================================================
    // nexacro.DesignForm
    //==============================================================================

    nexacro.DesignForm = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        this._inner_form = null;
        this._root_left = 20;
        this._root_top = 20;
        this._scroll_horz = 0;
        this._scroll_vert = 0;

        this.inner_width = 0;
        this.inner_height = 0;


        this._dot_size_x = 0;
        this._dot_size_y = 0;

        this._sublayoutmode_stack = [];
        this._active_editing_form = null;
        this._active_editing_sublayout = null;

        // 임시
        this._outer_background_value = "#262626";
        this._inner_background_value = "#ffffff";

        nexacro.Form.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);

        // scrollbar 처리
        this._onResetScrollBar = nexacro._emptyFn;

        this.set_border("0px none");

        // eclipse 버젼에서 재정의하여 사용
        this.init();

        this._is_preview_mode = false;
        this._is_subeditor_mode = false;

        // grid contents editor
        this._filterGrid = null;
        this._loaded = false;
    };

    var _pDesignForm = nexacro._createPrototype(nexacro.Form, nexacro.DesignForm);
    nexacro.DesignForm.prototype = _pDesignForm;

    // overide nexacro.Object
    _pDesignForm._type_name = "Form";

    //eval(nexacro._createAlignAttributeEvalStr("_pDesignForm", "stepalign"));
    //eval(nexacro._createValueAttributeEvalStr("_pDesignForm", "stepshowtype"));

    _pDesignForm.init = function ()
    {
        // clearStyles 삭제 
        //this._clearStyles();
    };

    _pDesignForm.get_root_obj = function ()
    {
        var _stack = this._sublayoutmode_stack;
        if (_stack && _stack.length > 0)
        {
            return _stack[_stack.length - 1].comp;
        }
        return this._inner_form;
    };

    _pDesignForm.get_step_count = function (rootobj)
    {
        if (!rootobj)
        {
            rootobj = this.get_root_obj();
        }

        var stepcount = 0;

        // form일 경우에만..
        if (rootobj instanceof nexacro.Form)
        {
            // fixed component를 위한 layout 정보 추출
            var manager = nexacro._getLayoutManager();
            if (manager)
            {
                var layout = manager.getCurrentLayout(rootobj);
                if (layout)
                {
                    stepcount = layout.stepcount ? layout.stepcount : 0;
                }
            }
        }
        return stepcount;
    };

    _pDesignForm.get_step_width = function (bScale)
    {
        var stepwidth = 0;
        var rootobj = this.get_root_obj();

        if (rootobj)
        {
            stepwidth = rootobj._adjust_width;
            if (bScale)
            {
                var scale = this._getZoom() / 100;
                stepwidth *= scale;
                stepwidth = parseInt(stepwidth);
            }
        }

        return stepwidth;
    };

    _pDesignForm.get_owner_step_index = function (obj)
    {
        var positionstep = 0;
        var rootobj = this.get_root_obj();

        if (rootobj)
        {
            while (obj && rootobj != obj.parent)
            {
                obj = obj.parent;
            }
        }

        if (obj)
        {
            positionstep = obj.positionstep ? obj.positionstep : 0;
        }
        return positionstep;
    };


    //===============================================================
    // nexacro.DesignForm : DesignWindow draw support
    //===============================================================
    _pDesignForm.drawWindow = function ()
    {
        var win = this._getWindow();
        if (win && win.handle)
        {
            nexacro.__refreshDirtyRectWithCallBack(win.handle);
        }
    };

    //===============================================================
    // nexacro.DesignForm : DesignWindow support 2
    //===============================================================
    _pDesignForm.getScale = function ()
    {
        var scale = this._getZoom() / 100;

        return scale;
    };

    _pDesignForm._get_real_dot_size = function (measure, size, v)
    {
        if (measure == 0)
        {
            return size;
        }

        // percent에 대한 계산을 해야한다.
        var form = this._inner_form;
        var formsize = eval("form._adjust_" + v);

        size = parseInt(formsize * size / 100);

        return size;
    };

 
    //===============================================================
    // nexacro.DesignForm : Create & Destroy & Update
    //===============================================================
    _pDesignForm.on_create_contents = function ()
    {
        nexacro.Form.prototype.on_create_contents.call(this);
    };

    _pDesignForm.on_destroy_contents = function ()
    {
        // _application에서 제거는 직접하지 않고 상위에서 제거
        //if (_application.accessport)
        //    _application.accessport.removeFormAccessPort(this._url);

        this.accessport = null;
        nexacro.Form.prototype.on_destroy_contents.call(this);
    };

    _pDesignForm.destroy = function ()
    {
        if (this._inner_form)
        {
            this._inner_form.destroy();
            this._inner_form = null;
        }

        var design_frame = this.parent;
        if (design_frame)
        {
            if (design_frame._window)        
                design_frame._window.destroy();
            design_frame.destroy();
        }

        nexacro.Form.prototype.destroy.call(this);
    };

    //===============================================================
    // nexacro.DesignForm : Override
    //===============================================================
    _pDesignForm._init = function ()
    {
        if (_application.accessport)
        {
            this._setEventHandler("oninit", this.on_notify_init, this);
        }

        this._initLayoutManager();
        //nexacro.__setDesignMode(nexacro.isDesignMode);  //hykim 추후 적용 고려
    };

    _pDesignForm._get_css_typename = function ()
    {
        return "Form";
    };

    //===============================================================
    // nexacro.DesignForm : Properties
    //===============================================================


    //===============================================================
    // nexacro.DesignForm : Methods
    //===============================================================	
    _pDesignForm.reloadForm = function ()
    {
        // 모든 Sublayout 모드 종료

        this._loaded = false;

        // 모든 Step Container 제거
        var active_form = this._active_editing_form;
        if (active_form)
        {
            var elem = active_form._control_element;
            if (elem)
            {
                if (elem._step_containers)
                {
                    var list = elem._step_containers;
                    var list_len = list.length;
                    for (var i = 0; i < list_len; i++)
                    {
                        var step_container_elem = list[i];
                        step_container_elem.destroy();
                    }
                }
            }
        }

        // destroy
        var inner_form = this._inner_form;
        if (inner_form)
        {
            inner_form.destroy();
        } 

        this.inner_width = this.inner_height = 0;
        this._inner_form = null;
        this._createInnerForm();

        this.setOverflowClip(this._overflowclip);
    };

    _pDesignForm.loadedForm = function ()
    {
        
    };

    _pDesignForm.setExtraInfo = function (info)
    {
        if (!info)
            return;
		
        var flag;
        var arrinfo = info.split(",");
        for (var i in arrinfo)
        {
			flag = arrinfo[i].split(":");

            switch (flag[0])
            {
                case "opentype":
                    if (flag[1] == "subeditor")
                    {
                        this.setSubEditorMode(true);
                    }
                    break;
                case "openerid":
                    // SubEditor open의 경우 open명령을 보낸 대상이 필요할 수 있음.
                    //if (parent)
                    {
                        this.openerid = flag[1];
                    }
                    break;
                case "computedcomp":
                    // ComputedStyle용 TempComponent 생성
                    if (flag[1] == "nexacro.ListView")
                    {
                        // Make Component : ListView
                        var obj = new nexacro._ComputedListView("ComputedListView", "0", "0", "0", "0", null, null, null, null, null, null, this);
                        this.addChild("ComputedListView", obj);
                        obj.createComponent();
                    }
                    break;
            }
        }
    };

    // framework내부 메소드와 이름이 중복되어 이름변경 (+byrect)
    // classname : comp classname
    // parentid : parent fullname
    // left, top, width, height  
    // compid : 생성될 id
    // props = propert1, property2
    // values = value1, value2
    // show = component show여부


    //컴포넌트랑 같은 룰로 
    //control로만 사용되는 경우 ex) FileUploadItemControl   componentclassname , controlclassname, issubcontrol (true/false)  
    //FileUploadItemControl, FileUploadItemControl, false : for component (없음)
    //undefined, FileUploadItemControl, true : for control -->FileUploadItemControl

    //component와 동일한 classid 로 control를 만드는 경우 ex) Button  componentclassname , controlclassname, issubcontrol (true/false)  
    //Button, undefined, false : for component  -->Button
    //Button, undefined, true : for control  --> ButtonControl

    _pDesignForm.createComponentCSSPreview = function (classname, controlclassname, issubcontrol, parentid, left, top, width, height, compid, props, values, new_create, show)
    {
        try 
        {
            var parent;
            if (parentid)
                parent = this._getChild(parentid);

            if (!parent)
                parent = this._inner_form;

            var compclassname = classname;
            if (!classname && controlclassname)
                compclassname = controlclassname;

            if (!compid || compid.length == 0)
                compid = this._getNextChildID(parent, compclassname);

            //
            // CSS Preview Mode인 경우 CSS TypeName에 따라 다른 이름이 들어오기도 하므로
            // 변환해줄수 있는 인터페이스가 필요함. 또는 툴에서 바꿔서 들어와야함.
            //
            var classnameobj;
            if (compclassname == "nexacro.Tabpage")
            {
                classnameobj = eval("nexacro.Div");
            }
            else if (compclassname == "nexacro.DatePickerControl")
            {
                classnameobj = eval("nexacro.Calendar");
            }
            else if (compclassname == "nexacro.Step")
            {
                classnameobj = eval("nexacro.StepControl");
            }
            else
            {
                classnameobj = eval(compclassname);
            }

            if (classnameobj)
            {
                var obj = new classnameobj(compid, left, top, width, height, null, null, null, null, null, null, parent);

                if (issubcontrol == true && classname)
                    obj._setControl();

                parent.addChild(compid, obj);

                if (compclassname == "nexacro.DatePickerControl")
                {
                    obj.set_type("monthonly");
                }

                if (props && values)
                {
                    var properties = props.split(".");
                    var setvalues = values.split(".");
                    var cnt = properties.length;
                    for (var i = 0; i < cnt; i++)
                    {
                        if (obj["set_" + properties[i]])
                            obj["set_" + properties[i]](setvalues[i]);
                    }
                }

				//show인자의 의미는 visibility를 의미함 
                if (!show && obj.set_visible)
                {
                	obj.set_visible(false);
                }

                obj.show();

                if (new_create && obj._createChild)
                {
                    obj._createChild();
                }

                // Preview Mode인 경우 Css Design Contents 생성 및 보여주기
                if (this._is_preview_mode)
                {
                    obj.createCssDesignContents();

                    // show는 툴에서 컴포넌트 위치 설정등이 완료된 후에 처리한다.
                    //if (obj.showCssDesignContents)
                    //    obj.showCssDesignContents();
                }
                else if (new_create)
                {
                    if (obj._initDesignDefaultProperty)
                    {
                        obj._initDesignDefaultProperty();
                    }
                }

                if (parent._is_form && parent._is_scrollable)
                {
                    parent._onRecalcScrollSize();
                    parent._onResetScrollBar();
                }

                return obj.name;
            }

            return "";
        }
        catch (e) 
        {
            if (e.obj)
            {
                nexacro.__onNexacroStudioError(e.message);
            }
            else
            {
                var msg = nexacro._getExceptionMessage(e);
				msg = "target::classname=" + classname +"," + "compid=" + compid+"\n" + msg;				
                nexacro.__onNexacroStudioError(msg);
            }
        }
    };

    _pDesignForm._getTriggerType = function ()
    {
        return nexacro._trigger_type_table;
    };

    // compid : show상태를 변경할 component id
    // show : show/hide여부
    _pDesignForm.showComponentCSSPreview = function (compid, show)
    {
        var obj = this._getObject(compid);

        if (obj)
        {
            if (show)
            {
                obj.set_visible(true);

                //if (this._is_preview_mode)
                //{
                //    obj.createCssDesignContents();
                //}
            }
            else
                obj.set_visible(false);
        }
    };

    // framework내부 메소드와 이름이 중복되어 이름변경 (+byrect)
    // classname : comp classname
    // parentid : parent fullname
    // left, top, width, height  
    // compid : 생성될 id
    _pDesignForm.createComponentByRect = function (classname, parentid, left, top, width, height, compid, new_create)
    {
        try
        {
            var parent;
            if (parentid)
                parent = this._getChild(parentid);

            if (!parent)
                parent = this._inner_form;

            if (!compid || compid.length == 0)
                compid = this._getNextChildID(parent, classname);
            
            //
            // CSS Preview Mode인 경우 CSS TypeName에 따라 다른 이름이 들어오기도 하므로
            // 변환해줄수 있는 인터페이스가 필요함. 또는 툴에서 바꿔서 들어와야함.
            //
            var classnameobj;
            if (classname == "nexacro.Tabpage")
            {
                classnameobj = eval("nexacro.Div");
            }
            else if (classname == "nexacro.DatePickerControl")
            {
                classnameobj = eval("nexacro.Calendar");
            }
            else if (classname == "nexacro.Step")
            {
                classnameobj = eval("nexacro.StepControl");
            }
            else
            {
                classnameobj = eval(classname);
            }

            if (classnameobj)
            {
                var parentform = parent;
                if (parent instanceof nexacro.Div)
                {
                    parentform = parent.form;
                }

                var obj = new classnameobj(compid, left, top, width, height, null, null, null, null, null, null, parentform);

                parent.addChild(compid, obj);

                if (classname == "nexacro.DatePickerControl")
                {
                    obj.set_type("monthonly");
                }

                obj.show();

                if (new_create && obj._createChild)
                {
                    obj._createChild();
                }

                // Preview Mode인 경우 Css Design Contents 생성 및 보여주기
                if (this._is_preview_mode)
                {
                    if (obj.createCssDesignContents)
                    {
                    obj.createCssDesignContents();
                    }
                    // show는 툴에서 컴포넌트 위치 설정등이 완료된 후에 처리한다.
                    //if (obj.showCssDesignContents)
                    //    obj.showCssDesignContents();
                }
                else if (new_create)
                {
                    if (obj._initDesignDefaultProperty)
                    {
                        obj._initDesignDefaultProperty();
                    }
                }

                if (parent._is_form && parent._is_scrollable)
                {
                    parent._onRecalcScrollSize();
                    parent._onResetScrollBar();
                }

                return obj.name;
            }

            return "";
        }
        catch (e)
        {            
            if (e.obj)
            {
                nexacro.__onNexacroStudioError(e.message);
            }
            else
            {
            	var msg = nexacro._getExceptionMessage(e);
				msg = "target::classname=" + classname +"," + "compid=" + compid+"\n" + msg;	
            	nexacro.__onNexacroStudioError(msg);
            }            
        }
    };

    _pDesignForm.createFrame = function (classname, parentid, frameid)
    {
        var parent = null;
        if (parentid)
        {
            parent = this._getObject(parentid);
        }

        if (!parent)
        {
            parent = this;
        }

        if (!frameid || frameid.length == 0)
        {
            frameid = this._getNextChildID(parent, classname);
        }

        var classnameobj = eval(classname);
        if (classnameobj)
        {
            var obj = null;
                        
            if (classname == "nexacro.ChildFrame")
            {
                // childframe는 formurl 이 들어간다.
                obj = new classnameobj(frameid, null, null, null, null, null, null, "", parent);
            }
            else
            {
                // 그 외 frame들
                obj = new classnameobj(frameid, null, null, null, null, null, null, parent);
            }

            parent.addChild(frameid, obj);
            
            return frameid;
        }
    };

    _pDesignForm.createTabpage = function (classname, parentid, compid)
    {
        var parent;
        if (parentid)
            parent = this._getChild(parentid);

        if (!parent)
            return;

        if (!compid || compid.length == 0)
            compid = this._getNextChildID(parent, classname);

        if (parent instanceof nexacro.Tab)
        {
            parent.insertTabpage(compid, parent.getTabpageCount(), "", compid);
            return compid;
        }

        return;
    };

    _pDesignForm.createInvisibleObject = function (classname, objid, parentid)
    {
        try
        {
            var parent;
            if (parentid)
                parent = this._getChild(parentid);

            if (!parent)
                parent = this._inner_form;

            if (!objid || objid.length == 0)
                objid = this._getNextChildID(parent, classname);

            var classnameobj = eval(classname);
            if (classnameobj)
            {
                var obj = new classnameobj(objid, parent);								
                parent.addChild(objid, obj);              
                obj.on_created();
                return obj.name;
            }
        }        
        catch (e)
        {            
            if (e.obj)
            {
				
                nexacro.__onNexacroStudioError(e.message);
            }
            else
            {
                var msg = nexacro._getExceptionMessage(e);
				msg = "target::classname=" + classname +"," + "objid=" + objid+"\n" + msg;				
                nexacro.__onNexacroStudioError(msg);
            }            
        }
    };

    _pDesignForm.getChildList = function (parentid)
    {
        var parent = this._getChild(parentid);
        if (!parent)
            return "";

        var chils_list = [];
        var childs = this._getChilds(parent);
        var child_len = childs ? childs.length : 0;
        for (var i = 0; i < child_len ; i++)
        {
            var child = childs[i];
            if (!child)
                continue;

            chils_list.push(child.name);
        }
        return chils_list.join(",");
    };

    // objid : comp fullname    
    _pDesignForm.deleteObject = function (objid)
    {
        var obj = this._getChild(objid);
        if (!obj)
        {
            trace("> Not found objid: " + objid);
            return;
        }
        var parent = obj.parent;
        if (parent)
        {
            if (this._is_preview_mode)
            {
                // 함께 생성된 Dataset등이 있는 경우 파괴한다.
                obj.destroyCssDesignContents();
            }

            if (obj.positionstep == -1)
            {
                var div_elem = obj._control_element;
                nexacro.__setElementHandleFixedStepNode(div_elem.handle, false);
            }

            parent.removeChild(obj.id);

            if (obj._is_component)
            {
                if (obj.destroy)
                    obj._destroy();
            }
            else
            {
                if (obj.destroy)
                    obj.destroy();
            }

            var manager = nexacro._getLayoutManager();
            if (!manager)
                return;

            var is_fluid = manager.isFluidLayoutType(parent);
            if (is_fluid)
            {
                // obj가 지워지면 부모 컨테이너를 알수없기때문에 전체갱신됨. 
                // Design에서는 sublayout을 다시 잡아줘야함
                this._recalcDesignLayout();
            }

            if (parent._is_form && parent._is_scrollable)
            {
                parent._onRecalcScrollSize();
                parent._onResetScrollBar();
            }

            delete obj;
        }
    };

    // compid : comp fullname
    // propid : property id 
    // propval: propert value 
    // pseudo : pseudo 값    
    _pDesignForm.setProperty = function (compid, propid, propval, pseudo)
    {
        //trace("_pDesignForm.setProperty(\"" + compid + "\")" + " propid=" + propid + ", propval=" + propval);

        var obj = this._getObject(compid);
        if (obj)
        {
            if (propid == "id")
                propid = "name";

            // object의 id 변경. Dataset 등 object 의 set name.
            if (propid == "name" && !(obj._is_component) && !(obj instanceof nexacro.BindItem))
            {                
                var parent_obj = obj.parent;
                var old_id = obj.name;
                var new_id = propval;

                if (parent_obj === null) return;                

                // objects collection update
                var idx = parent_obj.objects.indexOf(old_id);
                if (idx < 0) return;
                parent_obj.objects.update_id(idx, new_id);

                parent_obj[old_id] = null;
                parent_obj[new_id] = obj;

                // object update
                obj.set_id(new_id);
                obj.name = new_id;
               
                // all collection update
                idx = parent_obj.all.indexOf(old_id);
                if (idx < 0) return;
                parent_obj.all.update_id(idx, new_id);                

                return obj[propid];
            }

            var ret = nexacro._setProperty(obj, propid, propval, pseudo);            
            if (ret === true)
            {
                if (obj["design_get_" + propid])
                {
                    return obj["design_get_" + propid]();
                }
                else
                {
                    this._on_update_property(obj, propid);
                    return obj[propid];
                }
                
            }
            else if (ret === null)
            {
                this._on_update_property(obj, propid);
                return;
            }
        }
        return "";
    };


    // 140523 박현진 Layout의 Style 적용
    _pDesignForm.appendInlineStyleValue = function (base_value, append_value)
    {
    	//trace("_pDesignForm.appendInlineStyleValue(\"" + base_value + "\")" + " append_value:" + append_value);
        var style_value = null;
        if (append_value == null)
        {
            // append 값이 없을 경우
            style_value = base_value;
        }
        else if (base_value == null)
        {
            // base 값이 없을 경우
            style_value = append_value;
        }
        else
        {
            // 둘다 있을 경우
            style_value = this._appendInlineStyleValue(base_value, append_value);
        }
        return style_value;
    };

    _pDesignForm.setLayoutStyle = function (compid, base_value, layout_value, sublayout_value)
    {
        var style_value = this.appendInlineStyleValue(base_value, layout_value);
        style_value = this.appendInlineStyleValue(style_value, sublayout_value);
        //trace(">>> " + compid + " : " + base_value + " + " + layout_value + " + " + sublayout_value + "\n>>> " + style_value);
        this.setProperty(compid, "style", style_value);
    };

    // compid : comp fullname
    // propid : property id 
    // pseudo : pseudo 값
    _pDesignForm.getProperty = function (compid, propid, pseudo)
    {
    //	trace("_pDesignForm.getProperty(\"" + compid + "\")" + " propid:" + propid);

        var obj = this._getObject(compid);
        if (obj)
        {
            return nexacro._getProperty(obj, propid, pseudo);
        }
        return "";
    };

    _pDesignForm.getProperties = function (compids, propids)
    {
        var obj = null;
        var comp_id_list = compids.split(",");
        var comp_len = comp_id_list.length;
        var comps = [];
        var i;
        for (i = 0 ; i < comp_len ; i++)
        {
            obj = this._getObject(comp_id_list[i]);
            if (obj)
            {
                comps.push(obj);
            }
        }

        comp_len = comps.length;

        var property_list = propids.split(",");
        var property_len = property_list.length;

        var ret = [];
        var value, value2;
        for (i = 0 ; i < property_len ; i++)
        {
            value = "";

            var propid = property_list[i];
            for (var j = 0 ; j < comp_len ; j++)
            {
                obj = comps[j];
                if (!obj)
                    continue;

                if (j == 0)
                {
                    value = nexacro._getProperty(obj, propid);
                }
                else
                {
                    value2 = nexacro._getProperty(obj, propid);

                    if (value != value2)
                    {
                        //nexacro.__onNexacroStudioError(propid + ":" + value + ", " + value2);
                        value = "";
                        break;
                    }
                }
            }

            if (nexacro._isNull(value))
            {
                value = "";
            }

            //nexacro.__onNexacroStudioError(propid + ":" + value);
            ret.push(propid + ":" + value);
        }

        return ret;
    };

    _pDesignForm.getStyleProperty = function (compid, propid, childelement)
    {
    //	trace("_pDesignForm.getStyleProperty(\"" + compid + "\")" + " propid:" + propid);

    	var obj = this._getObject(compid);
        if (obj) 
        {
            return nexacro._getStyleProperty(obj, propid);
        }
        return "";
    };

    _pDesignForm.getStyleProperties = function (compids, propids)
    {
        var obj = null;
        var comp_id_list = compids.split(",");
        var comp_len = comp_id_list.length;
        var comps = [];
        var i;
        for (i = 0 ; i < comp_len ; i++)
        {
            obj = this._getObject(comp_id_list[i]);
            if (obj)
            {
                comps.push(obj);
            }
        }

        comp_len = comps.length;

        var property_list = propids.split(",");
        var property_len = property_list.length;

        var ret = [];
        var value, value2;
        for (i = 0 ; i < property_len ; i++)
        {
            value = "";

            var propid = property_list[i];
            for (var j = 0 ; j < comp_len ; j++)
            {
                obj = comps[j];
                if (!obj)
                    continue;

                if (j == 0)
                {
                    value = nexacro._getStyleProperty(obj, propid);
                }
                else
                {
                    value2 = nexacro._getStyleProperty(obj, propid);

                    if (value != value2)
                    {
                        value = "";
                        break;
                    }
                }
            }

            if (nexacro._isNull(value))
            {
                value = "";
            }

            //nexacro.__onNexacroStudioError(propid + ":" + value);
            ret.push(propid + ":" + value);
        }

        return ret;
    };
    
    _pDesignForm.getComputedStylePropertiesWithCallback = function (compid, propids, ret_handle)
    {
        var obj = this._getObject(compid);
        if (obj)
        {
            return nexacro._getComputedStylePropertiesWithCallback(obj, propids, ret_handle);
        }

        return "";
    };

    _pDesignForm.getComputedStyles = function (compid, args)
    {
        try
        {
            var obj = this._getObject(compid);
            if (obj && obj.getComputedStyles)
            {
                return obj.getComputedStyles(args);
            }
        }
        catch (e)
        {
            if (e.obj)
            {
                nexacro.__onNexacroStudioError(e.message);
            }
            else
            {
                var msg = nexacro._getExceptionMessage(e);
                nexacro.__onNexacroStudioError(msg);
            }
        }

        return "";
    };

    _pDesignForm.getInlineStyleProperty = function (compid, propid, pseudo)
    {
    //	trace("_pDesignForm.getInlineStyleProperty(\"" + compid + "\")" + " propid:" + propid);

    	var obj = this._getChild(compid);
        if (!obj)
            return "";

        return nexacro._getInlineStyleProperty(obj, propid, pseudo);
    };

    // 최종 상속된 style값 얻기
    _pDesignForm.getCurrentStyleValue = function (compid, propid, pseudo)
    {
   // 	trace("_pDesignForm.getCurrentStyleValue(\"" + compid + "\")" + " propid:" + propid);
    	var obj = this._getObject(compid);
        if (obj)
        {
            return nexacro._getCurrentStyleValue(obj, propid, pseudo);
        }

        return "";
    };

    // 140429 박현진 : Rect 으로 이동하는 함수 분리..
    // compid : comp fullname
    // left, top, width, height
    _pDesignForm.moveComponentByRect = function (compid, left, top, width, height, resize)
    {
    	// trace("_pDesignForm.moveComponentByRect(\"" + compid + "\")" + " left:" + left);
        var obj = this._getChild(compid);
        return this._moveComponentByRect(obj, left, top, width, height, resize);
    };

    _pDesignForm._moveComponentByRect = function (obj, left, top, width, height, resize)
    {        
        if (obj)
        {           
            var form = obj._getForm();

            var parent = obj.parent;                   
            
            obj._rePositioning(left, top, width, height, null, null);
            if (parent && parent._is_form && parent._is_scrollable)
            {
                parent._onRecalcScrollSize();
                parent._onResetScrollBar();
            }
            if (form && form.resetScroll) form.resetScroll();
        }
    };

    _pDesignForm.moveComponentByIndex = function (compid, moveidx)
    {
        var obj = this._getChild(compid);

        if (!obj)
            return;

        return this._moveComponentByIndex(obj, moveidx);
    };

    _pDesignForm._moveComponentByIndex = function (obj, moveidx)
    {
        // form.components 및 form.all의 순서를 바꾸는 역할
        // moveidx는 xml상의 옮길 위치의 인덱스
        // Fluid Layout일때 변화를 기대할수 있음

        if (!obj)
            return;

        var form = obj._getForm();
        var parent = obj.parent;

        var manager = nexacro._getLayoutManager();
        if (!manager)
            return false;

        var is_fluid = manager.isFluidLayoutType(form);

        var collection_all = this.all;
        var collection_comps = this.components;

        if (moveidx == collection_comps.length)
        {
            // 마지막으로 옮긴 행동. 지우고 add
            collection_comps.delete_item(obj.id);
            collection_comps.add_item(obj.id, obj);

            collection_all.delete_item(obj.id);
            collection_all.add_item(obj.id, obj);

            if (is_fluid)
            {
                manager.calcFluidLayoutContents(form);

                if (parent && parent._is_form && parent._is_scrollable)
                {
                    parent._onRecalcScrollSize();
                    parent._onResetScrollBar();
                }
                if (form && form.resetScroll) form.resetScroll();
            }
            return;
        }

        var obj_idx_comps = collection_comps.indexOf(obj.id);
        var target_idx_all = collection_all.indexOf(collection_comps.get_id(moveidx));

        if (obj_idx_comps < moveidx)
        {
            // 컴포넌트를 뒤로 옮긴동작
            if (obj_idx_comps + 1 == moveidx)
            {
                // 내 뒤로 옮긴거. 동작할게 없음
                return;
            }
            else
            {
                // 지우고 insert. 지워졌을때 인덱스가 하나씩 땡겨지는걸 고려함
                collection_comps.delete_item(obj.id);
                collection_comps.insert_item(moveidx - 1, obj.id, obj);

                collection_all.delete_item(obj.id);
                collection_all.insert_item(target_idx_all - 1, obj.id, obj);

                if (is_fluid)
                {
                    manager.calcFluidLayoutContents(form);

                    if (parent && parent._is_form && parent._is_scrollable)
                    {
                        parent._onRecalcScrollSize();
                        parent._onResetScrollBar();
                    }
                    if (form && form.resetScroll) form.resetScroll();
                }
                return;
            }
        }
        else if (obj_idx_comps > moveidx)
        {
            // 내앞의 어딘가의 위치. 내가 지워져도 인덱싱 변화가 없음
            collection_comps.delete_item(obj.id);
            collection_comps.insert_item(moveidx, obj.id, obj);

            collection_all.delete_item(obj.id);
            collection_all.insert_item(target_idx_all, obj.id, obj);

            if (is_fluid)
            {
                manager.calcFluidLayoutContents(form);

                if (parent && parent._is_form && parent._is_scrollable)
                {
                    parent._onRecalcScrollSize();
                    parent._onResetScrollBar();
                }
                if (form && form.resetScroll) form.resetScroll();
            }
            return;
        }
        else
        {
            // 인덱싱이 같으면 바로 앞으로 옮긴거. 동작할게 없음
            return;
        }
    };

    _pDesignForm.swapPositionUnit = function (compid, pos, unit)
    {
        var obj = this._getObject(compid);
        if (obj)
        {
            if (unit == "auto")
            {
                eval("obj.set_" + pos + "(\"auto\");");
                this.drawWindow();
            }
            else
            {
                this._swapPositionUnit(obj, pos, unit);
            }
        }
    };

    _pDesignForm.preChangePositionBase = function (compid, propid, targetcompid)
    {
        var obj = this._getObject(compid);
        if (obj && obj.parent)
        {
            // 현재 위치에서 base 변경시 적용된 position 정보 리턴
            // ex> 현재 left가 200이고 Button00기준으로 left가 변경될 경우 Button00:20이 된다면 20을 리턴.

            // z-order 변경 전 미리 계산하므로 실제 positionbase 연결방식에 적합하지 않아도 계산해주어야 한다.
            // 나보다 늦게 생성된 항목에 대해서도 계산
            // var target = obj._findComponentForArrange(targetcompid);
            var target = obj.parent[targetcompid];
            var step_logical_offset = nexacro.DesignForm.prototype._getCompStepLogicalOffset(obj);
            var calc_pos, distance;
            if (propid == "left")
            {
                if (target)
                    calc_pos = target._adjust_left + target._adjust_width;
                else
                    calc_pos = step_logical_offset;
                distance = obj._adjust_left - calc_pos;
                if (typeof obj.left == "string" && obj.left.indexOf("%") >= 0)
                {
                    distance = obj._convToRate(distance, target ? target._adjust_width : (obj.parent ? obj.parent._adjust_width : 0));                    
                    //distance += "%";
                    distance = distance.toFixed(2) + "%";
                }
                return distance;
            }
            else if (propid == "top")
            {
                if (target)
                    calc_pos = target._adjust_top + target._adjust_height;
                else
                    calc_pos = 0;
                distance = obj._adjust_top - calc_pos;
                if (typeof obj.top == "string" && obj.top.indexOf("%") >= 0)
                {
                    distance = obj._convToRate(distance, target ? target._adjust_height : (obj.parent ? obj.parent._adjust_height : 0));
                    //distance += "%";
                    distance = distance.toFixed(2) + "%";
                }
                return distance;
            }
            else if (propid == "right")
            {
                if (target)
                    calc_pos = target._adjust_left;
                else
                    calc_pos = obj.parent ? obj.parent._adjust_width + step_logical_offset: step_logical_offset;
                distance = calc_pos - (obj._adjust_left + obj._adjust_width);
                if (typeof obj.right == "string" && obj.right.indexOf("%") >= 0)
                {
                    distance = obj._convToRate(distance, target ? target._adjust_width : (obj.parent ? obj.parent._adjust_width : 0));
                    //distance += "%";
                    distance = distance.toFixed(2) + "%";
                }
                return distance;
            }
            else if (propid == "bottom")
            {
                if (target)
                    calc_pos = target._adjust_top;
                else
                    calc_pos = obj.parent ? obj.parent._adjust_height : 0;
                distance = calc_pos - (obj._adjust_top + obj._adjust_height);
                if (typeof obj.bottom == "string" && obj.bottom.indexOf("%") >= 0)
                {
                    distance = obj._convToRate(distance, target ? target._adjust_height : (obj.parent ? obj.parent._adjust_height : 0));
                    //distance += "%";
                    distance = distance.toFixed(2) + "%";
                }
                return distance;
            }
            else if (propid == "width")
            {
                // size 관련 항목은 %가 아니면 base가 의미가 없음.
                // 무조건 %로 변환해서 보정해준다.
                distance = obj._convToRate(obj._adjust_width, target ? target._adjust_width : (obj.parent ? obj.parent._adjust_width : 0));
                //distance += "%";
                distance = distance.toFixed(2) + "%";

                /*
                if (typeof obj.width == "string" && obj.width.indexOf("%") >= 0)
                {
                    distance = obj._convToRate(obj._adjust_width, target ? target._adjust_width : (obj.parent ? obj.parent._adjust_width : 0));
                    //distance += "%";
                    distance = distance.toFixed(2) + "%";
                }
                else
                {
                    if (nexacro._isNull(obj.width))
                    {
                        return obj.width;
                    }

                    distance = obj.width + "";

                    // base 영역 빼고
                    var temp = distance.split(":");
                    if (temp.length == 2)
                    {
                        distance = temp[1];
                    }
                    else
                    {
                        distance = temp[0];
                    }
                }
                */
                return distance;
            }
            else if (propid == "height")
            {
                // size 관련 항목은 %가 아니면 base가 의미가 없음.
                // 무조건 %로 변환해서 보정해준다.
                distance = obj._convToRate(obj._adjust_height, target ? target._adjust_height : (obj.parent ? obj.parent._adjust_height : 0));
                //distance += "%";
                distance = distance.toFixed(2) + "%";
                /*
                if (typeof obj.height == "string" && obj.height.indexOf("%") >= 0)
                {
                    distance = obj._convToRate(obj._adjust_height, target ? target._adjust_height : (obj.parent ? obj.parent._adjust_height : 0));
                    //distance += "%";
                    distance = distance.toFixed(2) + "%";
                }
                else
                {
                    if (nexacro._isNull(obj.height))
                    {
                        return obj.height;
                    }

                    distance = obj.height + "";

                    // base 영역 빼고
                    var temp = distance.split(":");
                    if (temp.length == 2)
                    {
                        distance = temp[1];
                    }
                    else
                    {
                        distance = temp[0];
                    }
                }
                */
                return distance;
            }
        }
        return "";
    };
    
    _pDesignForm.refreshPosition = function (compid)
    {
        var obj = this._getObject(compid);
        if (obj)
        {
            var _restorePositionBase = function (obj, pos)
            {
                eval("var temp = obj." + pos + "base;\n" + "obj." + pos + "base = \"\";\n" + "obj.set_" + pos + "base(temp);\n");
            };

            // 기존 position 정보 백업
            var _left = obj.left;
            var _top = obj.top;
            var _width = obj.width;
            var _height = obj.height;
            var _right = obj.right;
            var _bottom = obj.bottom;
            
            // positionbase 재설정
            _restorePositionBase(obj, "left");
            _restorePositionBase(obj, "top");
            _restorePositionBase(obj, "width");
            _restorePositionBase(obj, "height");
            _restorePositionBase(obj, "right");
            _restorePositionBase(obj, "bottom");
                        
            // position 재설정
            obj.move(_left, _top, _width, _height, _right, _bottom);

            var parent = obj.parent;
            if (parent && parent._is_form && parent._is_scrollable)
            {
                parent._onRecalcScrollSize();
                parent._onResetScrollBar();
            }
        }        
    };

    _pDesignForm.fitToContents = function (compid, type)
    {
        var obj = this._getObject(compid);
        if (obj)
        {
            // fittocontents, minwidth, maxwidth, minheight, maxheight 를 적용한 position 정보로 갱신
            // 변경된 내용이 있다면 [left, top, width, height, right, bottom] 형식으로 리턴
            // 변경되지 않았다면 null 리턴

            var old_left = obj.left;
            var old_top = obj.top;
            var old_width = obj.width;
            var old_height = obj.height;
            var old_right = obj.right;
            var old_bottom = obj.bottom;
            var old_type;
            var target, targetObject;
            var calc_pos, distance;

            var fittocontents = (type.length == 0) ? obj.fittocontents : type;
            //var fittocontents = obj.fittocontents;
            var adjustWidth, adjustHeight, adjustRight, adjustBottom;

            old_type = obj.fittocontents;
            obj.fittocontents = fittocontents;
            var size = obj._on_getFitSize();
            obj.fittocontents = old_type;
            
            if (fittocontents == "width" || fittocontents == "both")
                adjustWidth = size[0];
            else
                adjustWidth = obj._adjust_width;
            if (fittocontents == "height" || fittocontents == "both")
                adjustHeight = size[1];
            else
                adjustHeight = obj._adjust_height;

            adjustRight = obj.right;
            adjustBottom = obj.bottom;

            if (obj._minwidth != null)
            {
                if (adjustWidth < obj._minwidth) adjustWidth = obj._minwidth;
            }
            if (obj._maxwidth != null)
            {
                if (adjustWidth > obj._maxwidth) adjustWidth = obj._maxwidth;
            }
            if (obj._minheight != null)
            {
                if (adjustHeight < obj._minheight) adjustHeight = obj._minheight;
            }
            if (obj._maxheight != null)
            {
                if (adjustHeight > obj._maxheight) adjustHeight = obj._maxheight;
            }
            if (obj._adjustWidth == adjustWidth && obj._adjust_height == adjustHeight) return null;

            if (obj._adjustWidth != adjustWidth)
            {                
                if (obj.width)
                {
                    target = obj._arrange_info ? obj._arrange_info.width : null;
                    targetObject = target ? obj._findComponentForArrange(target.compid) : null;
                    if (typeof obj.width == "string" && obj.width.indexOf("%") >= 0)
                    {                        
                    	adjustWidth = obj._convToRate(adjustWidth, targetObject ? targetObject._adjust_width : (obj.parent ? obj.parent._adjust_width : 0));
                        adjustWidth = adjustWidth.toFixed(2) + "%";                
                    }
                    if (target && target.compid) { adjustWidth = target.compid + ":" + adjustWidth; }
                }
                else
                {
                    // obj.right != null
                    target = obj._arrange_info ? obj._arrange_info.right : null;
                    targetObject = target ? obj._findComponentForArrange(target.compid) : null;
                    if (targetObject)
                        calc_pos = targetObject._adjust_left;
                    else
                        calc_pos = (obj.parent ? obj.parent._adjust_width : 0);
                    distance = calc_pos - (obj._adjust_left + adjustWidth);
                    if (typeof obj.right == "string" && obj.right.indexOf("%") >= 0)
                    {
                        distance = obj._convToRate(distance, targetObject ? targetObject._adjust_width : (obj.parent ? obj.parent._adjust_width : 0));
                        distance = distance.toFixed(2) + "%";
                    }
                    if (target && target.compid) { adjustRight = target.compid; adjustRight += ":"; adjustRight += distance; }
                    else { adjustRight = distance; }
                }
            }
            if (obj._adjust_height != adjustHeight)
            {
                if (obj.height)
                {
                    target = obj._arrange_info ? obj._arrange_info.height : null;
                    targetObject = target ? obj._findComponentForArrange(target.compid) : null;                    
                    if (typeof obj.height == "string" && obj.height.indexOf("%") >= 0)
                    {                        
                        adjustHeight = obj._convToRate(adjustHeight, targetObject ? targetObject._adjust_height : (obj.parent ? obj.parent._adjust_height : 0));
                        adjustHeight = adjustHeight.toFixed(2) + "%";                
                    }
                    if (target && target.compid) { adjustHeight = target.compid + ":" + adjustHeight; }
                }
                else
                {
                    // obj.bottom != null
                    //calc_pos, distance;
                    target = obj._arrange_info ? obj._arrange_info.bottom : null;
                    targetObject = target ? obj._findComponentForArrange(target.compid) : null;                                        
                    if (targetObject)
                        calc_pos = targetObject._adjust_top;
                    else
                        calc_pos = (obj.parent ? obj.parent._adjust_height : 0);
                    distance = calc_pos - (obj._adjust_top + adjustHeight);
                    if (typeof obj.bottom == "string" && obj.bottom.indexOf("%") >= 0)
                    {
                        distance = obj._convToRate(distance, targetObject ? targetObject._adjust_height : (obj.parent ? obj.parent._adjust_height : 0));
                        distance = distance.toFixed(2) + "%";
                    }
                    if (target && target.compid) { adjustBottom = target.compid; adjustBottom += ":"; adjustBottom += distance; }
                    else { adjustBottom = distance; }
                }
            }

            if (old_left != obj.left || old_top != obj.top || old_width != adjustWidth || old_height != adjustHeight || old_right != adjustRight || old_bottom != adjustBottom)
            {
                // 실제 component 이동
                this._moveComponent(obj,                
                    obj.left,
                    obj.top,
                    adjustWidth,
                    adjustHeight,
                    adjustRight,
                    adjustBottom);
                         
                // 변경된 값 리턴
                return [
                    obj.left,
                    obj.top,
                    adjustWidth,
                    adjustHeight,
                    adjustRight,
                    adjustBottom];
            }
        }

        return null;
    };
    

    // compid : comp fullname
    // left, top, width, height, right, bottom
    _pDesignForm.moveComponent = function (compid, left, top, width, height, right, bottom)
    {
        var obj = this._getChild(compid);        
        if (obj)
        {
            this._moveComponent(obj, left, top, width, height, right, bottom);
        }
    };

    _pDesignForm._moveComponent = function (obj, left, top, width, height, right, bottom)
    {
        // 2015.07.31 박현진
        // xml 기준의 정보를 갖고 초기화 할때 호출되는 함수이다.
        // xml에 저장된 정보는 모두 base 기준으로 재계산 된 값이므로 그냥 적용하면 됨

        // lym, tabpage는 제외
        if (obj instanceof nexacro.Tabpage)
        {
            return;
        }

        obj.move(left, top, width, height, right, bottom);

        var parent = obj.parent;
        if (parent && parent._is_form && parent._is_scrollable)
        {
            parent._onRecalcScrollSize();
            parent._onResetScrollBar();
        }
        var form = obj._getForm();
        if (form && form.resetScroll) form.resetScroll();
    };

    // compid : comp fullname
    // width, height : width, height 값 
    _pDesignForm.resizeComponent = function (compid, width, height)
    {
        var obj = this._getObject(compid);
        if (obj)
        {
            obj.resize(width, height);
        }
    };

    // x, y : screen좌표 
    // rootcomp : hittest를 하고자 하는 부모 component
    _pDesignForm.hitTestByPoint = function (x, y, rootcompid, recursive)
    {
    //	trace("_pDesignForm.hitTestByPoint(\"" + rootcompid + "\")" + " x:" + x);

        var rootobj = this._getObject(rootcompid);
        if (rootobj)
        {
            // fixed component를 위한 layout 정보 추출
            var stepcount = this.get_step_count(rootobj);
            var stepwidth = this.get_step_width(true);

            var comps = this._getChildList(rootobj);
            var comp_len = comps ? comps.length : 0;

            for (var i = comp_len - 1; i >= 0 ; i--)
            {
                var comp = comps[i];
                if (!comp)
                    continue;

                var _x = x;
                var _y = y;
                var hit = this._hitTestByPoint(comp, _x, _y);
                if (hit == false)
                {
                    // fixed component인지 확인
                    var positionstep = comp.positionstep ? comp.positionstep : 0;
                    if (positionstep < 0)
                    {
                        // 모든 step 영역에 대하여 hittest
                        for (var j = 1 ; j < stepcount ; j++)
                        {
                            _x -= stepwidth;
                            hit = this._hitTestByPoint(comp, _x, _y);
                            if (hit)
                                break;
                        }
                    }
                }

                if (hit)
                {

                    // 하위 탐색 옵션 적용
                    if (!recursive)
                    {
                        return this._getScopeName(comp);
                    }
                    
                    //var url = comp.url;
                    if (this.hitTestException(comp))
                    {
                        return this._getScopeName(comp);
                    }

                    var childs = this._getChildList(comp);
                    var child_len = childs ? childs.length : 0;
                    if (child_len > 0)
                    {
                        var hitchild = this.hitTestByPoint(_x, _y, this._getChildName(comp), true);
                        if (hitchild === "")
                        {
                            hitchild = this._getScopeName(comp);
                        }

                        return hitchild;
                    }
                    else
                    {
                        return this._getScopeName(comp);
                    }
                }
            }
        }

        return this._getScopeName(rootobj);
    };

    // left, top, width, height : client 기준 좌표
    // rootcomp : hittest를 하고자 하는 부모 component
    _pDesignForm.hitTestByRect = function (left, top, width, height, rootcompid, type)
    {
        var hitcomplist = "";
        var rootobj = this._getObject(rootcompid);
        if (rootobj)
        {
            // fixed component를 위한 layout 정보 추출
            var stepcount = this.get_step_count(rootobj);
            var stepwidth = this.get_step_width(true);

            var comps = this._getChildList(rootobj);
            var comp_len = comps.length;
            for (var i = comp_len - 1; i >= 0 ; i--)
            {
                var comp = comps[i];
                if (!comp)
                    continue;

                var _left = left;
                var _top = top;
                var _width = width;
                var _height = height;

                var j;
                // fixed component인지 확인
                var positionstep = comp.positionstep ? comp.positionstep : 0;

                var hit = this._hitTestByRect(comp, _left, _top, _left + _width, _top + _height, type);
                if (hit == false)
                {
                    if (positionstep < 0)
                    {
                        // 모든 step 영역에 대하여 hittest
                        for (j = 1 ; j < stepcount ; j++)
                        {
                            _left -= stepwidth;
                            hit = this._hitTestByRect(comp, _left, _top, _left + _width, _top + _height, type);
                            if (hit)
                                break;
                        }
                    }
                }

                if (hit)
                {
                    if (hitcomplist.length > 0)
                    {
                        hitcomplist += ",";
                    }
                    hitcomplist += this._getScopeName(comp);
                }

                if (this.hitTestException(comp))
                {
                    continue;
                }

                var childs = this._getChildList(comp);
                var child_len = childs ? childs.length : 0;
                if (child_len > 0)
                {
                    var childlist = this.hitTestByRect(left, top, width, height, this._getChildName(comp), type);
                    if (childlist && childlist.length > 0)
                    {
                        if (hitcomplist.length > 0)
                        {
                            hitcomplist += ",";
                        }
                        hitcomplist += childlist;
                    }
                    if (positionstep < 0)
                    {
                        // 모든 step 영역에 대하여 hittest
                        _left = left;
                        for (j = 1 ; j < stepcount ; j++)
                        {
                            _left -= stepwidth;
                            childlist = this.hitTestByRect(_left, top, width, height, this._getChildName(comp), type);
                            if (childlist && childlist.length > 0)
                            {
                                if (hitcomplist.length > 0)
                                {
                                    hitcomplist += ",";
                                }
                                hitcomplist += childlist;
                            }
                        }
                    }
                }
            }
        }

        return hitcomplist;
    };

    // layout type에 따라 마우스 위치영역에 생성될 영역 계산 반환
    _pDesignForm.hitTestCreateRectByPoint = function (x, y, rootcompid, recursive)
    {
        var rootobj = this._getObject(rootcompid);
        
        if (rootobj == null)
            return null;

        var manager = nexacro._getLayoutManager();
        if (!manager)
            return null;        

        if (rootobj instanceof nexacro.Div || rootobj instanceof nexacro.Tab) {
            rootcompid = this._getScopeName(rootobj);
            rootobj = rootobj.form;            
        }

        var layout = manager.getCurrentLayout(rootobj);
        var container_info = manager._findContainerInfo(rootobj);
        if (container_info)
        {
            var container_type = manager._fluidlayoutmanager.getLayoutContainerType(layout);
            if (container_type === 1) // horizontal layout
            {
                return this._getHorizontalCreateRectByPoint(x, y, rootcompid, recursive);
            }
            else if (container_type === 2) // vertical layout
            {
                return this._getVerticalCreateRectByPoint(x, y, rootcompid, recursive);
            }
            else if (container_type === 3) // table layout
            {
                return this._getTableCreateRectByPoint(x, y, rootcompid, recursive);
            }
        }

        return null;
    };

    // layout type에 따라 마우스 위치영역에 생성될 영역 계산 반환
    _pDesignForm.hitTestCellInfoByPoint = function (x, y, rootcompid, recursive) {
        var rootobj = this._getObject(rootcompid);

        if (rootobj == null)
            return null;

        var manager = nexacro._getLayoutManager();
        if (!manager)
            return null;

        if (rootobj instanceof nexacro.Div || rootobj instanceof nexacro.Tab) {
            rootcompid = this._getScopeName(rootobj);
            rootobj = rootobj.form;
        }

        var layout = manager.getCurrentLayout(rootobj);
        var container_info = manager._findContainerInfo(rootobj);
        if (container_info) {
            var container_type = manager._fluidlayoutmanager.getLayoutContainerType(layout);
            if (container_type === 3) // table layout
            {
                return this._getTableCellInfoByPoint(x, y, rootcompid, recursive);
            }
        }

        return null;
    };

    _pDesignForm._getHorizontalCreateRectByPoint = function (x, y, rootcompid, recursive)
    {
        var width = 4;
        var hit = this.hitTestByPoint(x, y, rootcompid, true);

        if (hit === null)
            return null;

        var rootobj = this._getObject(rootcompid);

        if (rootobj == null)
            return null;
        
        if (hit === rootcompid)
        {            
            var comps = this._getChildList(rootobj);
            var comp_len = comps ? comps.length : 0;

            var in_comp_list = [];

            for (var i = comp_len - 1; i >= 0; i--)
            {
                var comp = comps[i];
                if (!comp)
                    continue;

                var rect = this._getClientRect(comp);
                
                var comp_top = rect[1];
                var comp_bottom = rect[1] + rect[3];

                if (comp_top <= y && comp_bottom >= y) // 같은 row에 잇는 component
                {                                                             
                    in_comp_list.push(comp);
                }                
            }
            
            var left_comp = null;
            var right_comp = null;

            var gap_left = -1;
            var gap_right = -1;
            
            var comp_target_len = in_comp_list.length;
            
            for (var i = 0; i < comp_target_len; i++)
            {
                var comp = in_comp_list[i];
                if (!comp)
                    continue;

                var rect = this._getClientRect(comp);
                var comp_right = rect[0] + rect[2];

                var temp = x - comp_right;
                if (temp > 0 && (temp < gap_left || gap_left < 0)) {
                    gap_left = temp;
                    left_comp = comp;
                }

                temp = rect[0] - x;
                if (temp > 0 && (temp < gap_right || gap_right < 0)) {
                    gap_right = temp;
                    right_comp = comp;
                }
            }
            
            if (comp_len == 0)
            {
                var rect = this._getClientRect(rootobj);
                return [rect[0], rect[1], width, rect[3]]; // left
            }
            else if (comp_len > 0 && comp_target_len == 0) // 가장 마지막 component의 오른쪽좌표
            {
                var rect = this._getClientRect(comps[comp_len - 1]);
                return [rect[0] + rect[2], rect[1], width, rect[3]]; // right
            }            
            else
            {                
                if (gap_left > 0 && gap_right > 0) {
                    if (gap_left > gap_right) {
                        var this_idx = comp._getForm().components.indexOf(this._getScopeName(right_comp));
                        var pre_comp = comp._getForm().components[this_idx - 1];
                        if (pre_comp) {
                            var rect = this._getClientRect(pre_comp);
                            return [rect[0] + rect[2], rect[1], width, rect[3]]; // right
                        }
                        else
                        {
                            var rect = this._getClientRect(right_comp);
                            return [rect[0], rect[1], width, rect[3]]; // left
                        }                        
                    }
                    else if (gap_left < gap_right) {                        
                        var rect = this._getClientRect(left_comp);
                        return [rect[0] + rect[2], rect[1], width, rect[3]]; // right
                    }
                }
                else if (gap_left < 0)
                {
                    var this_idx = comp._getForm().components.indexOf(this._getScopeName(right_comp));
                    var pre_comp = comp._getForm().components[this_idx - 1];
                    if (pre_comp)
                    {
                        var rect = this._getClientRect(pre_comp);
                        return [rect[0] + rect[2], rect[1], width, rect[3]]; // right
                    }
                    else
                    {
                        var rect = this._getClientRect(right_comp);
                        return [rect[0], rect[1], width, rect[3]]; // left
                    }                    
                }
                else if (gap_right < 0)
                {
                    var rect = this._getClientRect(left_comp);                    
                    return [rect[0] + rect[2], rect[1], width, rect[3]]; // right
                }
            }
        }
        else
        {
            var comp = this._getObject(hit);
            
            if (comp == null)
                return null;
            
            var parent = comp.parent;

            if (parent && parent != this._inner_form && recursive)
            {
                //comp.comp.url
                parent = parent.parent;
                if (parent == null)
                    return null;
                
                return this.hitTestCreateRectByPoint(x, y, this._getScopeName(parent), false);
            }

            if (this._checkFormBase(comp)&& !comp.url && recursive)
            {
                return this.hitTestCreateRectByPoint(x, y, this._getScopeName(comp), false);
            }
            
            if (!recursive && parent && parent.form == rootobj.form)
            {
                if (!this._checkFormBase(comp))
                    comp = parent.parent;
            }
            
            var rect = this._getClientRect(comp);
            // 마우스 커서가 컴포넌트 좌/우중 어디에 가까운가에 따라 생성 위치 결정됨.                    
            var ret = [];
            if (x - rect[0] < rect[0] + rect[2] - x) {
                var this_idx = comp._getForm().components.indexOf(this._getScopeName(comp));
                var pre_comp = comp._getForm().components[this_idx - 1];
                if (pre_comp) {
                    rect = this._getClientRect(pre_comp);
                    ret = [rect[0] + rect[2], rect[1], width, rect[3]]; // right
                }
                else
                    ret = [rect[0], rect[1], width, rect[3]]; // left
            }                
            else
                ret = [rect[0] + rect[2], rect[1], width, rect[3]]; // right
            
            return ret;
        }

        return null;
    };

    _pDesignForm._getVerticalCreateRectByPoint = function (x, y, rootcompid, recursive)
    {
        var width = 4;
        var hit = this.hitTestByPoint(x, y, rootcompid, true);

        if (hit === null)
            return null;

        var rootobj = this._getObject(rootcompid);

        if (rootobj == null)
            return null;

        if (hit === rootcompid) // 빈공간에 마우스 커서가 위치
        {            
            var comps = this._getChildList(rootobj);
            var comp_len = comps ? comps.length : 0;

            var in_comp_list = [];

            for (var i = comp_len - 1; i >= 0; i--)
            {
                var comp = comps[i];
                if (!comp)
                    continue;

                var rect = this._getClientRect(comp);

                var comp_left = rect[0];
                var comp_right = rect[0] + rect[2];                

                if (comp_left <= x && comp_right >= x) // 같은 column에 잇는 component
                {
                    in_comp_list.push(comp);
                }
            }

            var top_comp = null;
            var bottom_comp = null;

            var gap_top = -1;
            var gap_bottom = -1;

            var comp_target_len = in_comp_list.length;

            for (var i = 0; i < comp_target_len; i++)
            {
                var comp = in_comp_list[i];
                if (!comp)
                    continue;

                var rect = this._getClientRect(comp);
                var comp_bottom = rect[1] + rect[3];

                var temp = y - comp_bottom;
                if (temp > 0 && (temp < gap_top || gap_top < 0))
                {
                    gap_top = temp;
                    top_comp = comp;
                }

                temp = rect[1] - y;
                if (temp > 0 && (temp < gap_bottom || gap_bottom < 0))
                {
                    gap_bottom = temp;
                    bottom_comp = comp;
                }
            }

            if (comp_len == 0) // 화면에 컴포넌트가 없다.
            {                
                var rect = this._getClientRect(rootobj);
                return [rect[0], rect[1], rect[2], width]; // top
            }

            else if (comp_len > 0 && comp_target_len == 0) // 가장 마지막 component의 bottom 좌표
            {
                var rect = this._getClientRect(comps[comp_len - 1]);
                return [rect[0], rect[1] + rect[3], rect[2], width]; // bottom
            }
            else
            {                
                if (gap_top > 0 && gap_bottom > 0)
                {
                    if (gap_top > gap_bottom) {
                        var this_idx = comp._getForm().components.indexOf(this._getScopeName(bottom_comp));
                        var pre_comp = comp._getForm().components[this_idx - 1];
                        if (pre_comp) {
                            var rect = this._getClientRect(pre_comp);
                            return [rect[0], rect[1] + rect[3], rect[2], width];
                        }
                        else {
                            var rect = this._getClientRect(bottom_comp);
                            return [rect[0], rect[1], rect[2], width];
                        }                        
                    }
                    else if (gap_top < gap_bottom) {                        
                        var rect = this._getClientRect(top_comp);
                        return [rect[0], rect[1] + rect[3], rect[2], width];
                    }
                }
                else if (gap_bottom < 0)
                {
                    var rect = this._getClientRect(top_comp);                    
                    return [rect[0], rect[1] + rect[3], rect[2], width];                    
                }
                else if (gap_top < 0)
                {
                    var this_idx = comp._getForm().components.indexOf(this._getScopeName(comp));
                    var pre_comp = comp._getForm().components[this_idx - 1];
                    if (pre_comp) {
                        rect = this._getClientRect(pre_comp);
                        return [rect[0], rect[1] + rect[3], rect[2], width];
                    }
                    else {                        
                        var rect = this._getClientRect(bottom_comp);
                        return [rect[0], rect[1], rect[2], width];
                    }                    
                }
            }
        }
        else
        {
            var comp = this._getObject(hit);

            if (comp == null)
                return null;
            
            var parent = comp.parent;

            if (parent && parent != this._inner_form && recursive)
            {                
                parent = parent.parent;
                if (parent == null)
                    return null;
                
                return this.hitTestCreateRectByPoint(x, y, this._getScopeName(parent), false);
            }

            if (this._checkFormBase(comp) && !comp.url && recursive)
            {                
                return this.hitTestCreateRectByPoint(x, y, this._getScopeName(comp), false);
            }

            if (!recursive && parent && parent.form == rootobj.form) {
                if (!this._checkFormBase(comp))
                    comp = parent.parent;
            }
            
            var rect = this._getClientRect(comp);
            // 마우스 커서가 컴포넌트 좌/우중 어디에 가까운가에 따라 생성 위치 결정됨.                    
            var ret = [];
            if (y - rect[1] < rect[1] + rect[3] - y) {
                var this_idx = comp._getForm().components.indexOf(this._getScopeName(comp));
                var pre_comp = comp._getForm().components[this_idx - 1];
                if (pre_comp) {
                    rect = this._getClientRect(pre_comp);
                    ret = [rect[0], rect[1] + rect[3], rect[2], width]; // top                    
                }
                else
                    ret = [rect[0], rect[1], rect[2], width]; // bottom
            }                
            else
            {
                ret = [rect[0], rect[1] + rect[3], rect[2], width]; // top
            }
                
            
            return ret;
        }

        return null;
    };

    _pDesignForm._getTableCreateRectByPoint = function (x, y, rootcompid, recursive)
    {
        var rclist = this.getTableTemplateRect(rootcompid);

        if (rclist == null)
            return null;

        var rootobj = this._getObject(rootcompid);
        if (rootobj == null)
            return null;

        if (rclist == null)
            return null;
        
        
        for (var i = 0; i < rclist.length; i++)
        {
            var rcRow = rclist[i];

            for (var j = 0; j < rcRow.length; j++)
            {
                // tempalate rect
                var rect = [rcRow[j][0], rcRow[j][1], rcRow[j][2], rcRow[j][3]];
                
                var _left = rect[0];
                var _right = rect[0] + rect[2];
                var _top = rect[1];
                var _bottom = rect[1] + rect[3];

                if (_left <= x && x <= _right &&
                    _top <= y && y <= _bottom)
                    return rect;
            }
        }

        return null;
    };

    _pDesignForm._getTableCellInfoByPoint = function (x, y, rootcompid, recursive) {
        var rclist = this.getTableTemplateRect(rootcompid);

        if (rclist == null)
            return null;

        var rootobj = this._getObject(rootcompid);
        if (rootobj == null)
            return null;

        if (rclist == null)
            return null;


        for (var i = 0; i < rclist.length; i++) {
            var rcRow = rclist[i];

            for (var j = 0; j < rcRow.length; j++) {
                // tempalate rect
                var rect = [rcRow[j][0], rcRow[j][1], rcRow[j][2], rcRow[j][3]];

                var _left = rect[0];
                var _right = rect[0] + rect[2];
                var _top = rect[1];
                var _bottom = rect[1] + rect[3];

                if (_left <= x && x <= _right &&
                    _top <= y && y <= _bottom)
                {
                    var cellInfo = [i, j];
                    return cellInfo;
                }
                    
            }
        }

        return null;
    };

    _pDesignForm.hitTestCreateRectByRect = function (left, top, width, height, rootcompid)
    {
        var rootobj = this._getObject(rootcompid);

        if (rootobj == null)
            return null;

        var manager = nexacro._getLayoutManager();
        if (!manager)
            return null;

        if (rootobj instanceof nexacro.Div || rootobj instanceof nexacro.Tab) {
            rootcompid = this._getScopeName(rootobj);
            rootobj = rootobj.form;
        }

        var layout = manager.getCurrentLayout(rootobj);
        var container_info = manager._findContainerInfo(rootobj);
        if (container_info) {
            var container_type = manager._fluidlayoutmanager.getLayoutContainerType(layout);
            if (container_type === 1) // horizontal layout
            {
                // rect에 포함된 컴포넌트의 영역을 기준으로 계산하는 방식 보류.
                return null;
            }
            else if (container_type === 2) // vertical layout
            {
                // rect에 포함된 컴포넌트의 영역을 기준으로 계산하는 방식 보류.
                return null;
            }
            else if (container_type === 3) // table layout
            {
                var rclist = this.getTableTemplateRect(rootcompid);

                if (rclist == null)
                    return null;

                var rootobj = this._getObject(rootcompid);
                if (rootobj == null)
                    return null;

                var ret = [];
                for (var i = 0; i < rclist.length; i++) {
                    var rcRow = rclist[i];

                    for (var j = 0; j < rcRow.length; j++) {
                        // tempalate rect
                        var rect = [rcRow[j][0], rcRow[j][1], rcRow[j][2], rcRow[j][3]];

                        var _left = rect[0];
                        var _right = rect[0] + rect[2];
                        var _top = rect[1];
                        var _bottom = rect[1] + rect[3];

                        if (left + 1 > _right)
                            continue;

                        if (top + 1 > _bottom)
                            continue;

                        if (left + width < _left)
                            continue;

                        if (top + height < _top)
                            continue;

                        ret.push(rect);
                    }
                }

                return ret;
            }
        }
    };
    
    _pDesignForm.hitTestTemplateAreaByRect = function (left, top, width, height, rootcompid)
    {                
        var rclist = this.getTableTemplateRect(rootcompid);
        if (rclist == null)
            return null;

        var ret = "";
        var start_row = -1;
        var end_row = -1;
        var start_col = -1;
        var end_col = -1;

        var right = left + width;
        var bottom = top + height;

        for (var i = 0; i < rclist.length; i++) {
            var rcRow = rclist[i];

            for (var j = 0; j < rcRow.length; j++) {
                // tempalate rect
                var rect = [rcRow[j][0], rcRow[j][1], rcRow[j][2], rcRow[j][3]];

                var _left = rect[0];
                var _right = rect[0] + rect[2];
                var _top = rect[1];
                var _bottom = rect[1] + rect[3];
                if (left + 1 > _right)
                    continue;

                if (top + 1 > _bottom)
                    continue;

                if (right <= _left)
                    continue;

                if (bottom <= _top)
                    continue;

                if (start_row < 0) {
                    start_row = i;
                    end_row = i;
                }

                if (start_col < 0) {
                    start_col = j;
                    end_col = j;
                }

                if (i > end_row)
                    end_row = i;

                if (j > end_col)
                    end_col = j;
            }
        }

        trace(start_row + " " + end_row + " " + start_col + " " + end_col);
        var merge = (start_row != end_row || start_col != end_col);
        if (start_row >= 0 && start_col >= 0)
        {
            ret += start_row;
            if (merge)
            {
                ret += " ";
                ret += end_row;
            }

            ret += "/";

            ret += start_col;
            if (merge)
            {
                ret += " ";
                ret += end_col;
            }
        }        

        return ret;
    };

    _pDesignForm.hitTestTemplateAreaNameByPoint = function (x, y, rootcompid)
    {
        var rclist = this.getTableTemplateRect(rootcompid);

        var manager = nexacro._getLayoutManager();
        if (!manager)
            return null;

        var name_list = manager._fluidlayoutmanager._tabletemplatearea_matrix;

        if (rclist == null)
            return null;
                
        for (var i = 0; i < rclist.length; i++) {
            var rcRow = rclist[i];

            for (var j = 0; j < rcRow.length; j++) {
                // tempalate rect
                var rect = [rcRow[j][0], rcRow[j][1], rcRow[j][2], rcRow[j][3]];

                var _left = rect[0];
                var _right = rect[0] + rect[2];
                var _top = rect[1];
                var _bottom = rect[1] + rect[3];

                if (_left <= x && x <= _right &&
                    _top <= y && y <= _bottom)
                {                    
                    if (name_list.length)
                    {                        
                        if (name_list[i] && name_list[i][j])
                            return name_list[i][j];
                    }
                }
            }
        }        
        return "";
    };

    _pDesignForm._checkFormBase = function (obj)
    {
        if (obj == null)
            return false;

        if (obj instanceof nexacro.Form || obj instanceof nexacro.Div || obj instanceof nexacro.Tab) {
            return true;
        }

        return false;
    };

    // 140617 박현진 : tracker hittest 용   
    _pDesignForm.hitTestTracker = function (x, y, rootcompid, compid, trackersize)
    {
        var obj = this._getObject(compid);
        var rootobj = this._getObject(rootcompid);

        return this._hitTestTracker(x, y, rootobj, obj, trackersize);
    };

    _pDesignForm._hitTestTracker = function (x, y, rootcomp, comp, trackersize)
    {
        if (comp)
        {
            // tracker 영역까지 
            var hit = false;
            var rect = this._getClientRect(comp);
            if (rect[0] - trackersize <= x && x <= rect[0] + rect[2] + trackersize &&
                rect[1] - trackersize <= y && y <= rect[1] + rect[3] + trackersize)
            {
                hit = true;
            }

            if (!hit)
            {
                // fixed component인지 확인 해야한다.
                if (!rootcomp)
                    return;

                // form일 경우에만..
                if (!(rootcomp instanceof nexacro.Form))
                    return;

                // fixed component를 위한 layout 정보 추출
                var manager = nexacro._getLayoutManager();

                var layout = manager.getCurrentLayout(rootcomp);
                if (!layout)
                    return;

                var stepcount = layout.stepcount ? layout.stepcount : 0;
                if (stepcount < 2)
                    return;

                var stepwidth = rootcomp._adjust_width;
                var scale = this._getZoom() / 100;
                stepwidth *= scale;
                stepwidth = parseInt(stepwidth);

                var check_obj = comp;
                while (check_obj && check_obj.parent && rootcomp != check_obj.parent)
                {
                    check_obj = check_obj.parent;
                }


                if (!check_obj)
                    return;

                var positionstep = check_obj.positionstep ? check_obj.positionstep : 0;
                if (positionstep >= 0)
                    return;

                if (positionstep < 0)
                {
                    // 모든 step 영역에 대하여 hittest
                    for (var j = 1 ; j < stepcount ; j++)
                    {
                        rect[0] += stepwidth;
                        if (rect[0] - trackersize <= x && x <= rect[0] + rect[2] + trackersize &&
                            rect[1] - trackersize <= y && y <= rect[1] + rect[3] + trackersize)
                        {
                            hit = true;
                            break;
                        }
                    }
                }

            }

            if (hit)
            {
                return rect;
            }
        }

        return -1;
    };

    // x, y : screen좌표 
    // rootcomp : hittest를 하고자 하는 부모 component
    _pDesignForm.hitTestforFormbase = function (x, y, rootcompid)
    {
        var comp_list = "";
        var rootobj = this._getObject(rootcompid);
        if (rootobj)
        {
            // fixed component를 위한 layout 정보 추출
            var stepcount = this.get_step_count(rootobj);
            var stepwidth = this.get_step_width(true);

            var comps = this._getChildList(rootobj);
            var comp_len = comps ? comps.length : 0;

            for (var i = comp_len - 1; i >= 0 ; i--)
            {
                var comp = comps[i];
                if (!comp)
                    continue;

                var _x = x;
                var _y = y;
                var hit = this._hitTestByPoint(comp, _x, _y);
                if (hit == false)
                {
                    // fixed component인지 확인
                    var positionstep = comp.positionstep ? comp.positionstep : 0;
                    if (positionstep < 0)
                    {
                        // 모든 step 영역에 대하여 hittest
                        for (var j = 1 ; j < stepcount ; j++)
                        {
                            _x -= stepwidth;
                            hit = this._hitTestByPoint(comp, _x, _y);
                            if (hit)
                                break;
                        }
                    }
                }

                if (hit)
                {
                    if (comp instanceof nexacro.Div)
                    {
                        comp_list += this._getScopeName(comp);
                        comp_list += ",";

                    }

                    if (this.hitTestException(comp))
                    {
                        continue;
                    }

                    var childs = this._getChildList(comp);
                    var child_len = childs ? childs.length : 0;
                    if (child_len > 0)
                    {
                        comp_list += this.hitTestforFormbase(_x, _y, this._getChildName(comp));
                    }
                }
            }
        }

        return comp_list;
    };



    // x, y : screen좌표 
    // rootcomp : hittest를 하고자 하는 부모 component
    _pDesignForm.hitTestParentByPoint = function (x, y, rootcompid)
    {
        var rootobj = this._getObject(rootcompid);
        if (rootobj)
        {
            // fixed component를 위한 layout 정보 추출
            var stepcount = this.get_step_count(rootobj);
            var stepwidth = this.get_step_width(true);

            var comps = this._getChildList(rootobj);
            var comp_len = comps ? comps.length : 0;

            for (var i = comp_len - 1; i >= 0 ; i--)
            {
                var comp = comps[i];
                if (!comp)
                    continue;

                // tab, form계열이 아니면 패스
                if (!(comp instanceof nexacro.Div || comp instanceof nexacro.Tab))
                    continue;

                var _x = x;
                var _y = y;
                var hit = this._hitTestByPoint(comp, _x, _y);
                if (hit == false)
                {
                    // fixed component인지 확인
                    var positionstep = comp.positionstep ? comp.positionstep : 0;
                    if (positionstep < 0)
                    {
                        // 모든 step 영역에 대하여 hittest
                        for (var j = 1 ; j < stepcount ; j++)
                        {
                            _x -= stepwidth;
                            hit = this._hitTestByPoint(comp, _x, _y);
                            if (hit)
                                break;
                        }
                    }
                }

                if (hit)
                {
                    if (this.hitTestException(comp))
                    {
                        continue;
                    }

                    var childs = this._getChildList(comp);
                    var child_len = childs ? childs.length : 0;
                    if (child_len > 0)
                    {
                        return this.hitTestParentByPoint(_x, _y, this._getChildName(comp));
                    }
                    else
                    {
                        // tab은 tabpage외에 자식을 갖지 않는다.
                        if (comp instanceof nexacro.Tab)
                            continue;

                        return this._getScopeName(comp);
                    }
                }
            }
        }

        if (rootobj instanceof nexacro.Tab)
        {
            var parent = rootobj.parent;

            if (parent != this.inner_form)            
                parent = parent.parent;            

            return this._getScopeName(parent);
        }

        return this._getScopeName(rootobj);
    };

    // left, top, width, height : client 기준 좌표
    // rootcomp : hittest를 하고자 하는 부모 component
    _pDesignForm.hitTestParentByRect = function (left, top, width, height, rootcompid)
    {
        var rootobj = this._getObject(rootcompid);
        if (rootobj)
        {
            // fixed component를 위한 layout 정보 추출
            var stepcount = this.get_step_count(rootobj);
            var stepwidth = this.get_step_width(true);

            var comps = this._getChildList(rootobj);
            var comp_len = comps.length;
            for (var i = comp_len - 1; i >= 0 ; i--)
            {
                var comp = comps[i];
                if (!comp)
                    continue;

                // tab, form계열이 아니면 패스
                if (!(comp instanceof nexacro.Div || comp instanceof nexacro.Tab))
                    continue;

                var _left = left;
                var _top = top;
                var _width = width;
                var _height = height;

                // fixed component인지 확인
                var positionstep = comp.positionstep ? comp.positionstep : 0;

                var hit = this._hitTestByRect(comp, _left, _top, _left + _width, _top + _height, 2);
                if (hit == false)
                {
                    if (positionstep < 0)
                    {
                        // 모든 step 영역에 대하여 hittest
                        for (var j = 1 ; j < stepcount ; j++)
                        {
                            _left -= stepwidth;
                            hit = this._hitTestByRect(comp, _left, _top, _left + _width, _top + _height, 2);
                            if (hit)
                                break;
                        }
                    }
                }

                if (hit)
                {
                    // url link된 항목은 부모가 될 수 없음
                    var url = comp.url;
                    if (url)
                    {
                        continue;
                    }

                    var childs = this._getChildList(comp);
                    var child_len = childs ? childs.length : 0;
                    if (child_len > 0)
                    {
                        return this.hitTestParentByRect(left, top, width, height, this._getChildName(comp));
                    }
                    else
                    {
                        // tab은 tabpage외에 자식을 갖지 않는다.
                        if (comp instanceof nexacro.Tab)
                            continue;

                        return this._getScopeName(comp);
                    }
                }
            }
        }

        if (rootobj instanceof nexacro.Tab)
        {
            var parent = rootobj.parent;

            if (parent != this.inner_form)
                parent = parent.parent;

            return this._getScopeName(parent);
        }

        return this._getScopeName(rootobj);
    };

    _pDesignForm.hitTestException = function (comp)
    {
        // url link된 항목은 child 검사하지 않음
        var url = comp.url;
        if (url)
        {
            return true;
        }

        if (comp instanceof nexacro._CompositeComponent)
        {
            return true;
        }

        return false;
    };

    // horz :true/false
    // size : scroll pos의 변경 size 
    _pDesignForm.setScroll = function (is_horz, size)
    {
        if (is_horz)
        {
            this._scroll_left = size;
        }
        else
        {
            this._scroll_top = size;
        }

        // Offset inner_form
        this._recalcDesignLayout();

        var window = this._getWindow();
        if (window && window.handle)
        {
            nexacro.__refresh(window.handle);
        }
    };


    // compid :this를 제외한 fullname
    // isroot : true/false
    _pDesignForm.getComponentRect = function (compid, isroot)
    {
        var obj = this._getObject(compid);        

        if (obj)
        {
            return this._getComponentRect(obj, isroot);
        }
    };

    _pDesignForm._getComponentRect = function (obj, isroot)
    {
        // isRoot = true일 경우 Form 기준의 rect 반환        
        var root_obj = this.get_root_obj();
        if (obj == root_obj)
        {
            return [0, 0, obj._adjust_width, obj._adjust_height];
        }
        else if (isroot)
        {
            //var rectbyroot = [obj._adjust_left, obj._adjust_top, obj._adjust_width, obj._adjust_height];
            var _adjust_left = obj._adjust_left;
            var _adjust_top = obj._adjust_top;
            var _adjust_width = obj._adjust_width;
            var _adjust_height = obj._adjust_height;

            var sublayoutmode_info = this._findSubLayoutMode(obj);
            if (sublayoutmode_info)
            {
                _adjust_left = _adjust_left + this._scroll_left - sublayoutmode_info.offset_pos[0];
                _adjust_top = _adjust_top + this._scroll_top - sublayoutmode_info.offset_pos[1];
            }

            var parent = obj.parent;
            while (parent && parent != root_obj)
            {
                _adjust_left += parent._adjust_left;
                _adjust_top += parent._adjust_top;

                // border
                var border = this._getBorderWidth(parent);
                _adjust_left += border[0];
                _adjust_top += border[1];

                // form계열이면
                if (parent instanceof nexacro.Div)
                {
                    sublayoutmode_info = this._findSubLayoutMode(parent);
                    if (sublayoutmode_info)
                    {
                        _adjust_left = _adjust_left + this._scroll_left - sublayoutmode_info.offset_pos[0];
                        _adjust_top = _adjust_top + this._scroll_top - sublayoutmode_info.offset_pos[1];
                    }
                }

                parent = parent.parent;
            }
            return [_adjust_left, _adjust_top, _adjust_width, _adjust_height];
        }
        else
        {
            return [obj._adjust_left, obj._adjust_top, obj._adjust_width, obj._adjust_height];
        }
    };

    _pDesignForm.getClientRect = function (compid)
    {
        var obj = this._getObject(compid);
        if (obj)
        {
            return this._getClientRect(obj);
        }
    };

    _pDesignForm.getComponentMinMax = function (compid)
    {
        var obj = this._getObject(compid);        
        if (obj)
        {            
            return [obj.minwidth, obj.minheight, obj.maxwidth, obj.maxheight];
        }
        return [null, null, null, null];
    };

    _pDesignForm.setDotSize = function (measure, size)
    {
        var x = this._get_real_dot_size(measure, size, "width");
        var y = this._get_real_dot_size(measure, size, "height");

        var control_element = this._active_editing_form._control_element;
        if (control_element && control_element.handle)
            nexacro.__setElementHandleDotSize(control_element.handle, x, y);

        // check step container
        if (control_element && control_element._step_containers && control_element._step_containers.length > 0)
        {
            var step_container_elems = control_element._step_containers;
            for (var i = 0; i < step_container_elems.length; i++)
            {
                var elem = step_container_elems[i];
                if (elem && elem.handle)
                    nexacro.__setElementHandleDotSize(elem.handle, x, y);
            }
        }
        this._dot_size_x = x;
        this._dot_size_y = y;

        this.drawWindow();
    };

    _pDesignForm.setDotStyle = function (dot_style)
    {
        var control_element = this._active_editing_form._control_element;
        if (control_element && control_element.handle)
            nexacro.__setElementHandleDotStyle(control_element.handle, dot_style);

        // check step container
        if (control_element && control_element._step_containers && control_element._step_containers.length > 0)
        {
            var step_container_elems = control_element._step_containers;
            for (var i = 0; i < step_container_elems.length; i++)
            {
                var elem = step_container_elems[i];
                if (elem && elem.handle)
                    nexacro.__setElementHandleDotStyle(elem.handle, dot_style);
            }
        }

        this._dot_style = dot_style;

        this.drawWindow();
    };

    _pDesignForm.setDotVisible = function (visible)
    {
        var control_element = this._active_editing_form._control_element;
        if (control_element && control_element.handle)
            nexacro.__setElementHandleDotVisible(control_element.handle, visible);

        // check step container
        if (control_element && control_element._step_containers && control_element._step_containers.length > 0)
        {
            var step_container_elems = control_element._step_containers;
            for (var i = 0; i < step_container_elems.length; i++)
            {
                var elem = step_container_elems[i];
                if (elem && elem.handle)
                    nexacro.__setElementHandleDotVisible(elem.handle, visible);
            }
        }
        this._dot_visible = visible;

        this.drawWindow();
    };

    _pDesignForm.setPreviewMode = function (is_previewmode)
    {
        this._is_preview_mode = is_previewmode;
    };

    _pDesignForm.setSubEditorMode = function (is_subeditormode)
    {
        this._is_subeditor_mode = is_subeditormode;
    };

    _pDesignForm.showPreviewContents = function (compid)
    {
  //  	trace("DesignForm.showPreviewContents:" + compid);
        var obj = this._getObject(compid);
        if (obj)
            obj.showCssDesignContents();
    };
    _pDesignForm.showCssDesignContents = function (compid, objpath, status, statusvalue, userstatus, userstatusvalue)
    {

        var obj = this._getObject(compid);
        if (obj)
            obj.showCssDesignContents(objpath, status, statusvalue, userstatus, userstatusvalue);
    };
    _pDesignForm.updatePreviewPosition = function (compid)
    {
    //	trace("DesignForm.updatePreviewPosition:" + compid);
        var obj = this._getObject(compid);
        if (obj)
            obj.updatePreviewPosition();
    };

    _pDesignForm.updatePreviewStyle = function (compid)
    {
    	var obj = this._getObject(compid);
    	if (obj)
    	{
    		obj.updatePreviewStyle();
    	}
    };

    _pDesignForm.getFormBitmap = function ()
    {
        var control_element = this._control_element;
        if (control_element && control_element.handle)
            return nexacro.__getWindowBitmap(control_element.handle);
    };

    _pDesignForm.setBitmapSize = function (width, height)
    {
        var cf = this.parent;
        if (!cf)
            return;
        var win = cf._window;
        if (!win || !win.handle)
            return;
        cf.move(0, 0, width, height);
        this._recalcDesignLayout();

    };

    _pDesignForm.setFormSize = function (width, height)
    {
       // 내부 실제 form의 크기 조절
        if (width)
        {
            //this._inner_form_width = width;
            this.inner_width = width;
        }

        if (height)
        {
            //this._inner_form_height = height;
            this.inner_height = height;
        }

        var form = this._inner_form;
        if (form)
        {
            //form.resize(this._inner_form_width, this._inner_form_height);
            form.resize(this.inner_width, this.inner_height);
            //trace(">> Form Size : " + form.width + ", " + form.height);
        }

        // layout size 조절
        this.setLayoutProperty("this", "default", "width", this.inner_width);
        this.setLayoutProperty("this", "default", "height", this.inner_height);
    };

    _pDesignForm.DrawOffset = function (offsetx, offsety)
    {
        var control_element = this._control_element;
        if (control_element && control_element.handle)
            nexacro.__setElementHandleOffset(control_element.handle, offsetx, offsety);
    };

    _pDesignForm.setDesignWindowBackground = function (color, innerform)
    {
        this._outer_background_value = color;
       
        this.set_background(this._outer_background_value);

        if (innerform)
        {
            this._inner_form.set_background(this._outer_background_value);
        }
    };

    _pDesignForm.setRoot = function (left, top)
    {
        this._root_left = left;
        this._root_top = top;

        this._recalcDesignLayout();
    };

    _pDesignForm.setDesignZoom = function (scale)
    {
        var control_elem = this._control_element;
        if (control_elem)
        {
            control_elem.setElementZoom(scale);

            // scale에 따른 root 재조정
            this._recalcDesignLayout(true, false);
        }

        var _stack = this._sublayoutmode_stack;
        if (_stack.length > 0)
        {
            for (var i = 0; i < _stack.length; i++)
            {
                // offset pos 재계산..
                var pt_offset = [0, 0];
                var owner_elem = _stack[i].owner_elem;
                var temp = owner_elem;
                while (temp && temp != this)
                {
                    if (!temp._is_window)
                    {
                        pt_offset[0] += temp.left;
                        pt_offset[1] += temp.top;
                    }
                    temp = temp.owner_elem;
                }
                _stack[i].offset_pos = pt_offset;

                var overlay_elem = _stack[i].overlay_elem;
                var overlay_container_elem = overlay_elem.getContainerElement();
                nexacro.__setElementHandleScale(overlay_container_elem.handle, scale);
            }

            this._recalcDesignLayout(false, true);
        }
    };

    _pDesignForm.getDesignZoom = function ()
    {
        return this._getZoom();
    };


    _pDesignForm.getBorderWidth = function (compid)
    {
        return this._getBorderWidth(this._getObject(compid));
    };

    _pDesignForm._getBorderWidth = function (obj)
    {
        return nexacro._getBorderWidth(obj);
    };

    _pDesignForm.getOverlapComponent = function (compid)
    {
        var pivot = this._getObject(compid);
        if (!pivot)
            return "";

        // [RP:73348] 2017/05/16 박현진 : tab 관련 버그 수정
        if (pivot instanceof nexacro.Tabpage)
        {
            // Tabpage는 Tab으로 대신한다.
            pivot = pivot.parent;
        }
        
        var parent = pivot.parent;
        if (!parent)
            return "";

        var complist = "";

        var _adjust_left = pivot._adjust_left;
        var _adjust_top = pivot._adjust_top;
        var _adjust_rigth = pivot._adjust_left + pivot._adjust_width;
        var _adjust_bottom = pivot._adjust_top + pivot._adjust_height;

        // 약간의 여유를 둔다
        _adjust_left -= 2;
        _adjust_top -= 2;
        _adjust_rigth += 2;
        _adjust_bottom += 2;

        var comps = this._getChildList(parent);
        var comp_len = comps ? comps.length : 0;

        // 내 zorder 하위 항목에 대해서만 처리
        var find_this = false;
        for (var i = comp_len - 1; i >= 0 ; i--)
        {
            var comp = comps[i];
            if (!comp)
                continue;

            if (comp == pivot)
            {
                find_this = true;
                continue;
            }

            if (!find_this)
                continue;

            if (_adjust_left <= comp._adjust_left &&
                _adjust_top <= comp._adjust_top &&
                _adjust_rigth >= (comp._adjust_left + comp._adjust_width) &&
                _adjust_bottom >= (comp._adjust_top + comp._adjust_height))
            {
                complist += this._getScopeName(comp);
                complist += ",";
            }
        }

        return complist;
    };

    _pDesignForm.getBindableList = function ()
    {
        var list = [];

        // step 1. 자신 추가
        list.push("this|Form");

        // step 2. child list
        this._getBindableList(list, this._inner_form, "");             

        return list.join(",");
    };

    _pDesignForm._getBindableList = function (list, parent, parentid)
    {
        var comps = this._getChildList(parent);
        if (!comps)
            return;

        //var registerclass = nexacro._registerclass;

        var comp_len = comps.length;
        for (var i = 0; i < comp_len; i++)
        {
            var comp = comps[i];
            if (!comp)
                continue;
       
            var compid = parentid + comp.name;

            list.push(compid + "|" + this._getClassID(comp));

            if (comp instanceof nexacro.Div || comp instanceof nexacro._CompositeComponent)
            {
                compid += ".form.";
            }
            else
            {
                compid += ".";
            }
            
            this._getBindableList(list, comp, compid);
        }

        /*
        var objects = this._getObjectList(parent);
        var len = objects.length;
        for (var i = 0 ; i < len ; i++)
        {
            var obj = objects[i];

            if (!obj || obj instanceof nexacro.Dataset)
                continue;

            list.push(parentid + obj.name + "|" + this._getClassID(obj));
        }
        */
    };

    _pDesignForm._getClassID = function(obj)
    {
        var registerclass = nexacro._registerclass;

        var len = registerclass.length;
        //for (var i = 0; i < len; i++)
        for (var i = len - 1; i >= 0; i--)
        {
            var item = registerclass[i];

            if (obj instanceof eval(item.classname))
            {
                return item.id;
            }
        }

        return obj._type_name;
    };

    _pDesignForm.setName = function (compid, propval)
    {
        var obj = this._getChild(compid);
        if (obj)
        {
        	obj.set_id(propval);        	
            this._changeChildID(obj.name, propval, obj);
            obj.name = propval;            

            return propval;
        }
    };

    _pDesignForm.setOverflowClip = function (overflowclip)
    {
        if (!this._inner_form)
            return;

        var control_element = this._inner_form._control_element;
        if (control_element && control_element.handle)
            nexacro.__setElementHandleOverflowClip(control_element.handle, overflowclip);

        this._overflowclip = overflowclip;
    };

    _pDesignForm._is_sub_layout_editting = function ()
    {
        var _stack = this._sublayoutmode_stack;

        return (_stack.length > 0);
    };

    _pDesignForm.showSubLayout = function (compid, bShow, positionstep)
    {
        var obj = this._getObject(compid);
        if (!obj)
            return false;

        if (bShow)
        {
            this._setSubLayoutPosition(obj);
        }

        return this._showSubLayout(obj, bShow, positionstep);
    };

    _pDesignForm._setSubLayoutPosition = function (obj)
    {
        // min, max 제한 해제
        if (obj.set_minwidth) obj.set_minwidth(null);
        if (obj.set_maxwidth) obj.set_maxwidth(null);
        if (obj.set_minheight) obj.set_maxheight(null);
        if (obj.set_maxheight) obj.set_maxheight(null);

        // 현재 위치를 left, top, width, height를 px 단위로 사용하는 position property으로 변환        
        if (obj.left === null || obj.left === undefined)
        {
            obj.left = obj._adjust_left;
        }
        if (obj.top === null || obj.top === undefined)
        {
            obj.top = obj._adjust_top;
        }
        if (obj.width === null || obj.width === undefined)
        {
            obj.width = obj._adjust_width;
        }
        if (obj.height === null || obj.height === undefined)
        {
            obj.height = obj._adjust_height;
        }
        obj.right = null;
        obj.bottom = null;
    };

    _pDesignForm._showSubLayout = function (obj, bShow, positionstep)
    {
        if (!(obj instanceof nexacro.Div))
        {
            return false;
        }

        var form = this._inner_form;
        var sublayoutmode_info;
        var overlay_elem;
        var owner_elem;
        var elem_pos;
        var div_elem;
        var next_comp;
        var scrollbarsize;
        var inner_element;

        var manager = nexacro._getLayoutManager();
        if (!manager)
            return false;

        var is_fluid = manager.isFluidLayoutType(form);

        if (bShow)
        {
            // check already shown
            if (this._findSubLayoutMode(obj))
                return false;

            // Show
            overlay_elem = new nexacro.SubLayoutOverlayElement(this._control_element);
            overlay_elem.setLinkedControl(this); // ?
            overlay_elem.create(nexacro._design_sublayout_overlaycolor);

            var overlay_container_elem = overlay_elem.getContainerElement();

            nexacro.__setElementHandleScale(overlay_container_elem.handle, this._getZoom());

            var pt_offset = [0, 0];
            div_elem = obj._control_element;
            owner_elem = div_elem.owner_elem;
            var temp = owner_elem;

            while (temp && temp != this._control_element)
            {
                if (temp.parent && temp.parent._adjust_sublayout_left)
                {
                    pt_offset[0] += temp.parent._adjust_sublayout_left;
                    pt_offset[1] += temp.parent._adjust_sublayout_top;
                }
                else
                {
                    pt_offset[0] += temp.left;
                    pt_offset[1] += temp.top;
                }

                var linkedcontrol = temp.linkedcontrol;
                var border = this._getBorderWidth(linkedcontrol);
                pt_offset[0] += border[0];
                pt_offset[1] += border[1];

                temp = temp.owner_elem;
            }

            var parent_comp = obj.parent;
            next_comp = null;
            if (parent_comp.all)
            {
                var next_comp_idx = parent_comp.all.indexOf(obj.id) + 1;
                next_comp = parent_comp.all[next_comp_idx];
            }            

            // 2015.03.13 neoarc

            // positionstep = -1로 표시되는 div를 sublayout edit 할때, 어떤 step을 더블클릭했는지 여부
            // 그 자리에 그대로 편집화면을 구성하기 위함.

            // 2015.03.13 neoarc
            // innerform과 overlay와의 offset 차이로
            // positionstep=-1인 div를 sublayout edit 하려고 하면,
            // 복제 node의 이미지가 오른쪽 아래로 약간씩 offset되어 그려진다.
            // 현재 해결책이 마땅치 않아 sublayout edit시 복제 node는 그리지 않기로함.
            nexacro.__setElementHandleFixedStepNode(div_elem.handle, false);

            if (obj.form && obj.form.scrollbarsize)
                scrollbarsize = obj.form.scrollbarsize;
            else
                scrollbarsize = obj.form._default_scrollbarsize;

            sublayoutmode_info = {
                comp: obj,
                elem: div_elem,
                owner_elem: owner_elem,
                next_comp: next_comp,
                overlay_elem: overlay_elem,
                elem_pos: [div_elem.left, div_elem.top],
                offset_pos: [pt_offset[0] + this._scroll_left, pt_offset[1] + this._scroll_top], // show하는 순간 designform이 스크롤이 되어있으면 그만큼 offset 되어있음.
                positionstep: positionstep,
                scrollbarsize: scrollbarsize
            };

            obj._sublayoutmode_info = sublayoutmode_info;
            div_elem._removeFromContainer();
            div_elem._appendToContainer(overlay_container_elem);


            if (this._dot_visible && obj.form)
            {
                this._showDotGrid(obj.form, true);
            }

            obj._design_form = this;
            
            // for scroll, .. etc         

            // showSubLayout
            if (is_fluid)
            {
                manager.calcFluidLayoutContents(form);
            }
            else
            {
                obj._adjustPosition();
            }

            obj._recalcSubLayoutPosition();
            obj.on_update_position(false, true);

            // change layer
            if (this._active_editing_form)
                this._showDotGrid(this._active_editing_form, false);

            this._sublayoutmode_stack.push(sublayoutmode_info);
            this._active_editing_sublayout = obj
            this._active_editing_form = obj.form;

            nexacro.__setElementHandleOverflowClip(div_elem.handle, true);            
            if (obj.form && obj.form._control_element)
            {
                inner_element = obj.form._control_element;
                if (inner_element)
                {
                    // Div의 scrollbar가 overflowclip이 풀리면서 나오는 문제가 있으므로 스크롤바를 제거함.          
                    
                    obj.form.set_scrollbarsize(0);
                    if (obj.form.vscrollbar)
                    {                        
                        obj.form.vscrollbar.set_visible(false);
                    }
                    if (obj.form.hscrollbar)
                    {                     
                        obj.form.hscrollbar.set_visible(false);
                    }
                    obj.form._onResetScrollBar = nexacro._emptyFn;
                    nexacro.__setElementHandleOverflowClip(inner_element.handle, true);            
                }
            }
        }
        else
        {
            // Hide
            var _stack = this._sublayoutmode_stack;
            for (var i = 0; i < _stack.length; i++)
            {
                if (_stack[i].comp == obj)
                {
                    sublayoutmode_info = _stack[i];
                    break;
                }
            }

            // TODO multi depth Sublayout Editing mode
            // TODO 찾아낸 인덱스와 그 이하 모두 종료해야함.
            if (sublayoutmode_info)
            {
                overlay_elem = sublayoutmode_info.overlay_elem;
                owner_elem = sublayoutmode_info.owner_elem;
                elem_pos = sublayoutmode_info.elem_pos;
                div_elem = sublayoutmode_info.elem;
                obj = sublayoutmode_info.comp;
                next_comp = sublayoutmode_info.next_comp;
                scrollbarsize = sublayoutmode_info.scrollbarsize;
                div_elem._removeFromContainer();
                if (!next_comp)
                {
                    div_elem._appendToContainer(owner_elem);
                }
                else
                {
                    var next_comp_elem = next_comp._control_element;
                    nexacro.__insertElementHandle(owner_elem.handle, div_elem.handle, next_comp_elem.handle);
                    div_elem.owner_elem = owner_elem;
                }

                if (obj.form && obj.form._control_element)
                {
                    inner_element = obj.form._control_element;
                    if (inner_element)
                    {
                        nexacro.__setElementHandleOverflowClip(inner_element.handle, false);            
                    }
                }

                obj.move(elem_pos[0], elem_pos[1])
                //nexacro.__setElementHandlePosition(div_elem.handle, elem_pos[0], elem_pos[1]);
                nexacro.__setElementHandleOverflowClip(div_elem.handle, false);

                if (obj.form)
                    this._showDotGrid(obj.form, false);

                overlay_elem._removeFromContainer();
                overlay_elem.destroy();

                _stack.length = _stack.length - 1;

                // change layer
                if (_stack.length > 0)
                {
                    this._active_editing_sublayout = _stack[_stack.length - 1].comp;
                    this._active_editing_form = _stack[_stack.length - 1].comp;
                }
                else
                {
                    this._active_editing_sublayout = obj;
                    this._active_editing_form = form;
                }

                if (this._active_editing_form)
                    this._showDotGrid(this._active_editing_form, this._dot_visible);

                // form
                if (is_fluid)
                {
                    manager.calcFluidLayoutContents(form);
                }
                else
                {
                    obj._left = obj._adjust_left;
                    obj._top = obj._adjust_top;

                    this._on_update_positionstep(obj);
                }
                
                // scrollbar      
                if (obj.form) 
                {
                    obj.form.set_scrollbarsize(scrollbarsize);
                    if (obj.form.vscrollbar)
                    {
                        obj.form.vscrollbar.set_visible(true);
                    }
                    if (obj.form.hscrollbar)
                    {
                        obj.form.hscrollbar.set_visible(true);
                    }
                    obj.form._onResetScrollBar = nexacro.Component.prototype._onResetScrollBar;

                    obj.form._onRecalcScrollSize();
                    obj.form._onResetScrollBar();
                }

                // 재생성 및 재정렬
                //var scrollbars = obj.scrollbars;
                //obj.set_scrollbars("none");
                //obj.set_scrollbars(scrollbars);
            }
        }

        return true;
    };

    
    // 맨 앞으로
    _pDesignForm.moveComponentToFront = function (compid)
    {
        var obj = this._getObject(compid);
        if (obj)
        {
            obj.bringToFront();

            var form = obj._getForm();
            if (form && form.components)
            {
                var comps = form.components;
                this.setZorder(compid, comps.length - 1);
            }
        }
    };

    // 한단계 앞으로
    _pDesignForm.moveComponentToPrev = function (compid)
    {
        var obj = this._getObject(compid);
        if (obj)
        {
            obj.bringToPrev();

            var form = obj._getForm();
            if (form && form.components)
            {
                var comps = form.components;
                var this_idx = comps.indexOf(compid);
                this.setZorder(compid, this_idx + 1);
            }
        }
    };

    // 한단계 뒤로
    _pDesignForm.moveComponentToNext = function (compid)
    {
        var obj = this._getObject(compid);
        if (obj)
        {
            obj.sendToNext();

            var form = obj._getForm();
            if (form && form.components)
            {
                var comps = form.components;
                var this_idx = comps.indexOf(compid);                
                this.setZorder(compid, this_idx - 1);
            }
        }
    };

    // 맨 뒤로
    _pDesignForm.moveComponentToBack = function (compid)
    {
        var obj = this._getObject(compid);
        if (obj)
        {
            obj.sendToBack();
            this.setZorder(compid, 0);
        }
    };

    _pDesignForm.setZorder = function (compid, zorder, moveComponent)
    {
        var obj = this._getObject(compid);
        if (obj)
        {            
            var form = obj._getForm();
            if (form && form.components)
            {
                // this.Div00.form.Button00 -> Button00 으로 변환
                compid = obj.name;

                var comps = form.components;
                var this_idx = comps.indexOf(compid);

                if (this_idx > -1 && zorder > -1 && zorder < comps.length)
                {
                    var comp = comps[this_idx];
                    comps.delete_item(compid);
                    comps.insert_item(zorder, compid, comp);
                    form.components = comps;

                    if (moveComponent === true)
                    {
                        // 아직 실제 component의 zorder가 변경되지 않음
                        // 여기서 변경해주어야 함
                        var i;
                        if (this_idx < zorder)
                        {
                            // bringToPrev
                            for (i = this_idx ; i < zorder ; i++)
                            {
                                comp.bringToPrev();
                            }
                        }
                        else
                        {
                            // sendToNext
                            for (i = this_idx ; i > zorder ; i--)
                            {
                                comp.sendToNext();
                            }
                        }
                    }
                }
            }
        }
    };

    _pDesignForm.getPseudo = function (compid)
    {
        var obj = this._getChild(compid);
        if (obj)
        {
            return obj._status;
        }
    };

    _pDesignForm.setPseudo = function (compid, pseudo)
    {
        var obj = this._getObject(compid);
        if (obj)
        {
            //trace("_pDesignForm.setPseudo(" + obj.name + ", " + pseudo + ")");

            // disabled인 경우 status가 먼저 바뀌어있어야 함.
            //obj._stat_change(pseudo == "disabled" ? "disable" : "enable", pseudo);     
            obj._changeStatus(pseudo, true);

            //obj.setCurrentPseudo(pseudo);                        
            if (obj._status == pseudo)
                return true;
        }

        return false;
    };

    _pDesignForm.addLayout = function (compid, layoutname, width, height, screenid)
    {
        var obj = this._getObject(compid);
        if (!obj)
            return false;

        var manager = nexacro._getLayoutManager();
        if (!manager)
            return false;

        if (obj.form)
            obj = obj.form;
        
        if (!(obj instanceof nexacro.Form))
            return false;

        var default_layout = manager.getLayout(obj);
        if (default_layout == null && layoutname != "default")
        {
            // default layout이 먼저 생성되어야 한다.
            trace("not found default layout in " + obj.name);
            return false;
        }

        // chcek addLayout시 _application의 screen이 있으면 Layout이 필터링됨
        var layout = new nexacro.Layout(layoutname, screenid, width, height, obj, function (p) { });
        obj.addLayout(layout.name, layout);

        manager.selectLayoutForDesign(obj);

        return true;
    };
    
    _pDesignForm.removeLayout = function (compid, layoutname)
    {
        var obj = this._getObject(compid);
        if (!obj)
            return false;

        if (!this._checkFormBase(obj))
        {
            return false;
        }

        var manager = nexacro._getLayoutManager();
        return manager.removeLayoutForDesign(obj, layoutname);
    };

    _pDesignForm.removeAllLayout = function (compid)
    {
        var obj = this._getObject(compid);
        if (!obj)
            return false;

        if (!this._checkFormBase(obj))
        {
            // 에러?
            return false;
        }

        var manager = nexacro._getLayoutManager();
        return manager.removeLayoutForDesign(obj);
    };

    _pDesignForm.setLayoutProperty = function (compid, layoutname, propid, propval)//, currentlayoutname)
    {
        var obj = this._getObject(compid);
        if (!obj)
            return;
        
        if (!this._checkFormBase(obj))
        {            
            return;
        }

        // div, tab 계열 컴포넌트의 경우 innerform을 변경.
        if (obj instanceof nexacro.Div || obj instanceof nexacro.Tab)
            obj = obj.form;

        // default layout 이름 변경 허용?
        if (propid == "name" && layoutname == "default")
            return;

        var manager = nexacro._getLayoutManager();
        if (!manager)
            return;        

        var layout = manager.getLayout(obj, layoutname);
        if (!layout)
        {            
            return;
        }
        
        if (propval === null)
            propval = undefined;

        // value type은 meta info를 통해 정확히 넣어야 함.
        if (layout["set_" + propid])
            layout["set_" + propid](propval);
        
        // after property change
        switch (propid)
        {
            case "stepcount":
                // 현재 편집중인 최상 layer인 경우에만.. (div 모드이면 div)
                this._refreshStepContainer(obj, layout.stepcount);
                break;
            case "name":
                if (layoutname != "default")
                {
                    manager.updateLayoutList(obj, layoutname, propval);
                }
                break;
            case "type":
            case "spacing":
            case "horizontalgap":
            case "vertcalgap":
            case "flexwrap":
            case "flexmainaxisalign":
            case "flexcrossaxisalign":
            case "flexcrossaxiswrapalign":   
            case "tabletemplate":       
            case "tabletemplatearea":
            case "tabledirection":
            case "tablecellalign":
            case "tablecellincompalign":
                obj.on_change_containerRect(obj._adjust_width, obj._adjust_height);
                break;
                /*
            case "tabletemplate":
                    {
                        if (propval)
                        {
                            
                            if (currentlayoutname == "default")
                            {
                                obj._onApplyTabletemplate(currentlayoutname);
                                layout._setDefaultTabletemplate(propval);                        
                            }
                            obj.on_change_containerRect(obj._adjust_width, obj._adjust_height);
                        }
                        break;
                    }*/
        }

        return layout[propid];
    };

    _pDesignForm.getLayoutProperty = function (compid, layoutname, propid)
    {

        var obj = this._getObject(compid);
        if (!obj)
            return;

        // div, tab 계열 컴포넌트의 경우 innerform을 변경.
        if (obj instanceof nexacro.Div || obj instanceof nexacro.Tab)
            obj = obj.form;

        if (!this._checkFormBase(obj))
        {
            // 에러?
            return;
        }

        var manager = nexacro._getLayoutManager();
        if (manager)
        {
            var layout = manager.getLayout(obj, layoutname);
            if (!layout)
            {
                // 에러?
                return;
            }
        }

        return layout[propid];
    };

    // Tool에서 강제로 Layout 변환시 호출
    _pDesignForm.changeLayout = function (compid, layoutname)
    {
        var obj = this._getObject(compid);
        if (!obj)
            return false;

        // div, tab 계열 컴포넌트의 경우 innerform을 변경.
        if (obj instanceof nexacro.Div || obj instanceof nexacro.Tab)
            obj = obj.form;

        if (!this._checkFormBase(obj))
        {
            // 에러?
            return false;
        }

        // changeLayout 인터페이스를 거치지 않고 Property만 세티아고 있기 때문에 현재 어떤 Layout 인지 알수가 없다.
        // 1. Current Layout 정보를 DesignForm이 알수 있게 작업을 하거나
        // 2. LayoutProperty 세팅시 현재 Layout 일것으로 가정하거나
        var manager = nexacro._getLayoutManager();
        if (manager)
        {
            var layout = manager.getLayout(obj, layoutname);
            if (!layout)
            {
                // 에러?
                return false;
            }

            var container_info = manager._findContainerInfo(obj);
            manager._multilayoutmanager.changeLayout(obj, container_info, layout);
        }

        return true;
    };

    _pDesignForm.refreshLayoutContents = function (compid)
    {
        var obj = this._getObject(compid);
        if (!obj)
            return false;

        var manager = nexacro._getLayoutManager();
        if (!manager)
            return false;

        if (obj.form)
            obj = obj.form;

        if (!(obj instanceof nexacro.Form))
            return false;

        manager.calcFluidLayoutContents(obj);

        return true;
    };

    _pDesignForm.refreshLayoutAllContents = function ()
    {
        var manager = nexacro._getLayoutManager();
        if (!manager)
            return false;

        manager.calcFluidLayoutContents();
        return true;
    }

    _pDesignForm.getCurrentLayout = function (compid)
    {
        var obj = this._getObject(compid);
        if (!obj)
            return;

        return this._getCurrentLayout(obj);
    };

    _pDesignForm._getCurrentLayout = function (obj)
    {
        if (!this._checkFormBase(obj))
        {
            // 에러?
            return;
        }

        var manager = nexacro._getLayoutManager()
        {
            var info = manager.getContainerInfo("current_layout_name");
            if (info)
            {
                return info.current_layout_name;
            }
        }
        return "";
    };

    _pDesignForm.rearrangeLayoutContents = function (compid)
    {
        var obj = this._getObject(compid);
        if (!obj)
            return;

        //obj._onApplyTabletemplate("default", default_layout);

        return true;
    }

    // 140617 박현진 : 현재 size에 맞는 layout으로 change
    _pDesignForm.refreshLayout = function (compid)
    {
        var obj = this._getObject(compid);
        if (!obj)
            return;

        var manager = nexacro._getLayoutManager();
        if (manager)
        {
            manager.applyStep(obj);

            var layout = manager.selectLayoutForDesign(obj);
            if (layout)
            {
                var win = this._getWindow();
                var frame = this.getOwnerFrame();
                var designform = frame.form;
                var extra_info = this._getScopeName(obj) + ":" + layout.name;

                nexacro.__notifyToDesignWindow(win.handle, nexacro._design_notify_layoutchange, designform.id, extra_info);
            }
           
            if (obj._is_form && obj._is_scrollable)
            {
                obj._onRecalcScrollSize();
                obj._onResetScrollBar();
            }
        }
    };

    _pDesignForm.recalcLayout = function (compid)
    {
        var obj = this._getObject(compid);
        if (!obj)
            return;

        if (obj._is_form && obj._is_scrollable)
        {
            obj._onRecalcScrollSize();
            obj._onResetScrollBar();
        }
    };

    _pDesignForm.recalcDesignLayout = function () {
        this._recalcDesignLayout();        
    }

    _pDesignForm.getTableTemplateRect = function (compid)
    {
        var obj = this._getObject(compid);
        if (!obj)
            return null;

        if (!this._checkFormBase(obj))
        {
            return null;
        }

        // div, tab 계열 컴포넌트의 경우 innerform을 변경.
        if (obj instanceof nexacro.Div || obj instanceof nexacro.Tab) {
            obj = obj.form;
        }
        var manager = nexacro._getLayoutManager();
        if (!manager)
            return null;

        var layout = manager.getCurrentLayout(obj);
        var container_info = manager._findContainerInfo(obj);

        if (container_info == null)
            return null;

        var container_type = manager._fluidlayoutmanager.getLayoutContainerType(layout);

        if (container_type != 3)
            return null;

        var rclist = manager._getTemplateRectInfo(obj);
        var scale = this.getScale();

        var ret = [];
        for (var i = 0; i < rclist.length; i++)
        {
            var rcRow = rclist[i];
            var rowlist = [];

            for (var j = 0; j < rcRow.length; j++)
            {
                var nLeft = (rcRow[j][0] * scale);
                var nTop = (rcRow[j][1] * scale);
                var nWidth = (rcRow[j][2] * scale);
                var nHeight = (rcRow[j][3] * scale);
                rowlist.push([nLeft, nTop, nWidth, nHeight]);
            }

            ret.push(rowlist);
        }

        return ret;
    };

    _pDesignForm.getTableLayoutTemplateInfo = function (compid)
    {        
        var ret = [];
        var rclist = this.getTableTemplateRect(compid);

        var manager = nexacro._getLayoutManager();
        if (!manager)
            return null;

        var name_list = manager._fluidlayoutmanager._tabletemplatearea_matrix;

        for (var i = 0; i < rclist.length; i++) {
            var rcRow = rclist[i];

            for (var j = 0; j < rcRow.length; j++) {
                // [rowidx, colidx, left, top, width, height]
                // [rowidx, colidx, left, top, width, height, areaname]
                var area_name = null;

                if (name_list.length) {
                    if (name_list[i] && name_list[i][j])
                        area_name = name_list[i][j];
                }

                var info = [i, j, rcRow[j][0], rcRow[j][1], rcRow[j][2], rcRow[j][3], area_name];
                ret.push(info);
            }

        }

        return ret;
    };

    // component가 속한 table의 cell rect를 반환
    _pDesignForm.getTableCellRect = function (compid, rootcompid)
    {
        var obj = this._getObject(compid);        
        var parent = this._getObject(rootcompid);

        return this._getTableCellRect(obj, parent);
    }

    _pDesignForm._getTableCellRect = function (obj, parent)
    {        
        if (!obj)
            return null;

        if (!parent)
            return null;

        if (!this._checkFormBase(parent))
            return null;

        // div, tab 계열 컴포넌트의 경우 innerform을 변경.
        if (parent instanceof nexacro.Div || parent instanceof nexacro.Tab)
            parent = parent.form;

        var manager = nexacro._getLayoutManager();
        if (!manager)
            return null;

        var layout = manager.getCurrentLayout(parent);
        var container_info = manager._findContainerInfo(parent);

        if (container_info == null || layout == null)
            return null;

        var container_type = manager._fluidlayoutmanager.getLayoutContainerType(layout);

        if (container_type != 3)
            return null;

        var comp_row = -1;
        var comp_col = -1;
        var comp_cellarea = obj.tablecellarea;        
        if (comp_cellarea == null || comp_cellarea === "")
        {
            // tablecellarea가 지정되지 않은 경우                                    
            //nexacro.__onNexacroStudioError(obj._adjust_left + " " + obj._adjust_top + " " + obj._adjust_right + " " + obj._adjust_bottom + " " + obj._adjust_width + " " + obj._adjust_height);
            comp_cellarea = this.hitTestTemplateAreaByRect(obj._adjust_left, obj._adjust_top, obj._adjust_width, obj._adjust_height, this._getScopeName(parent));            
        }

        // cellarea가 있다면 좌표인지 areaname인지 판단.
        var index = comp_cellarea.indexOf("/");

        var start_row = -1;
        var end_row = -1;
        var start_col = -1;
        var end_col = -1;

        if (index > 0) {
            var comp_rows = comp_cellarea.substring(0, index);
            comp_rows.trim();
            var comp_cols = comp_cellarea.substring(index + 1);
            comp_cols.trim();

            // row parsing
            index = comp_rows.indexOf(" ");
            if (index > 0) {
                start_row = comp_rows.substring(0, index);
                end_row = comp_rows.substring(index + 1);
            }
            else {
                start_row = end_row = comp_rows;
            }

            // col parsing
            index = comp_cols.indexOf(" ");
            if (index > 0) {
                start_col = comp_cols.substring(0, index);
                end_col = comp_cols.substring(index);
            }
            else {
                start_col = end_col = comp_cols;
            }
        }


        var scale = this.getScale();

        // 유효한 cellarea인지 확인. 유효하지 않을 경우 component rect로 판단.                
        var rclist = manager._getTemplateRectInfo(parent);
        var name_list = manager._fluidlayoutmanager._tabletemplatearea_matrix;

        var rcMerge;
        for (var i = 0; i < rclist.length; i++) {
            var rcRow = rclist[i];

            for (var j = 0; j < rcRow.length; j++) {
                var area_name = null;

                if (name_list.length) {
                    if (name_list[i] && name_list[i][j])
                        area_name = name_list[i][j];
                }

                var area_left = rcRow[j][0] * scale;
                var area_top = rcRow[j][1] * scale;
                var area_right = area_left + (rcRow[j][2] * scale);
                var area_bottom = area_top + (rcRow[j][3] * scale);

                if (comp_cellarea == area_name)
                {
                    if (rcMerge == null) {
                        rcMerge = [area_left, area_top, area_right, area_bottom];
                    }
                    else {
                        if (rcMerge[0] > area_left)
                            rcMerge[0] = area_left;

                        if (rcMerge[1] > area_top)
                            rcMerge[1] = area_top;

                        if (rcMerge[2] < area_right)
                            rcMerge[2] = area_right;

                        if (rcMerge[3] < area_bottom)
                            rcMerge[3] = area_bottom;
                    }
                }
                else // rowstart rowend / colstart colend 계산
                {
                    if (start_row == i && start_col == j) {
                        rcMerge = [area_left, area_top, area_right, area_bottom];
                    }

                    if (end_row == i && end_col == j) {
                        rcMerge[2] = area_right;
                        rcMerge[3] = area_bottom;
                    }
                }
            }
        }

        return rcMerge;
    }

    _pDesignForm.refreshLinkedUrl = function (compid)
    {        
        var obj = this._getObject(compid);
        if (!obj)
            return;

        if (obj.on_apply_url)
        {
            obj.on_apply_url();
        }
    };


    _pDesignForm.getControlElementHandle = function (compid)
    {
        var obj = this._getObject(compid);
        if (obj && obj._control_element && obj._control_element.handle)
        {
            return obj._control_element.handle;
        }
        return null;
    };

    _pDesignForm.getComponentImageeBase64String = function (compid)
    {        
        var obj = this._getObject(compid);
        if (obj)
    	{
    		var control_elem = obj.getElement();
    		if (control_elem)
    		{
                var handle = control_elem.handle;
                if (handle && control_elem.parent_elem)
                {
                    return nexacro.__saveToImageBase64String(handle);
                }
            }
        }        

        return "";
    };


    // 140529 박현진 : contents load
    _pDesignForm.setContents = function (compid, contents)
    {
        //trace("_pDesignForm.setContents(" + compid + ", " + contents + ")");
        var obj = this._getObject(compid);
        if (!obj || !obj._setContents)
            return;
        
        obj._setContents(contents);
    };

    _pDesignForm.makeContentsString = function (compid)
    {
        // <Contents></Contents> 형식의 xml 으로 반환되어야 한다.
        // Contents tag 내의 내용은 각 component 마다 다르게 처리된다.
        var obj = this._getObject(compid);
        if (!obj || !obj.makeContentsString)
            return;

        return obj.makeContentsString();
    };

    // 190227 조아름 : //[RP:83525]LiteDB Statement Parameter 처리 - parameters Setting
    _pDesignForm.setParameters = function (compid, parameters) {
        var obj = this._getObject(compid);
        if (!obj || !obj.set_parameters)
            return;
        
        obj.set_parameters(parameters);
    };
    
    _pDesignForm.setFormats = function (compid, contents)
    {
        var obj = this._getObject(compid);
        if (!obj || !obj.set_formats)
            return;

        obj.set_formats(contents);
    };
    _pDesignForm.makeFormatString = function (compid)
    {
        var obj = this._getObject(compid);
        if (!obj || !obj.makeFormatString)
            return;

        return obj.makeFormatString();
    };

    // 140602 박현진 : innerdataset load
    _pDesignForm.setInnerDataset = function (compid, value, extern, propid)
	{
        try
        {
            var obj = this._getObject(compid);
            if (!obj)
                return;

            if (propid === undefined || propid === null || propid === "")
            {
                // 기본 property 이름 사용
                propid = "innerdataset";
            }

			var innerdataset;
            if (extern)
			{
				// Dataset id
                innerdataset = obj._findDataset(value);
				if (!innerdataset)
                {
					innerdataset = value;
                }
            }
            else
			{
				// Dataset Contents
				innerdataset = new nexacro.NormalDataset("innerdataset", obj);
                innerdataset._setContents(value);
			}

			var setter = obj["design_set_" + propid] || obj["set_" + propid];
			if (setter)
			{
				setter.call(obj, innerdataset);
			}
        }
        catch(e)
        {
            if (e.obj)
        	{
        	    nexacro.__onNexacroStudioError(e.message);
        	}
        	else
        	{
        		var msg = nexacro._getExceptionMessage(e);
        		nexacro.__onNexacroStudioError(msg);
        	}
        }
    };

    _pDesignForm.setInitValueID = function (compid, value)
    {
        var obj = this._getObject(compid);
        if (obj)
        {
            nexacro._setInitValueID(obj, value);
        }
    };

    _pDesignForm.callDesignMethod = function (compid, methodname)
    {
        var obj = this._getObject(compid);
        if (!obj)
            return false;

        return eval("obj." + methodname + "();");
    };

    // TODO check Command형태로 바뀌어야함 하드코딩 메소드는 제거하는게 맞을듯? 2014.06.19 neoarc
    _pDesignForm.setActiveTabpage = function (compid, index)
    {
        var obj = this._getObject(compid);
        if (!obj)
            return;

        if (obj instanceof nexacro.Tab)
        {
            //trace("set_tabindex : " + index);
            obj.set_tabindex(index);
        }
    };

    _pDesignForm.insertTabpage = function (compid, index, tabpageid)
    {
        var obj = this._getObject(compid);
        if (!obj)
            return;

        if (obj instanceof nexacro.Tab)
        {
            obj.insertTabpage(tabpageid, index, "", tabpageid);
        }
    };

    _pDesignForm.deleteTabpage = function (compid, index)
    {
        var obj = this._getObject(compid);
        if (!obj)
            return;

        if (obj instanceof nexacro.Tab)
        {
            obj.deleteTabpage(index);
        }
    };

    // Grid 예외 처리
    _pDesignForm.getGridComputedStyles = function (compid, target, type, properties)
    {
        var obj = this._getObject(compid);
        var css;
        if (!obj)
            return;

        if (type == 4)
        {
            // Grid의 속성을 얻어와야 한다.
            return nexacro._getComputedStyleProperties(obj._control_element, properties);
        }

        if (obj instanceof nexacro.Grid)
        {
            eval("css = " + target + ";");
            return obj._getControlComputedStyle(css, type, properties);
        }
    };

    _pDesignForm.setCssList = function (csslist)
    {
        // 16.03.04 박현진 : 현재 사용 못함..
        return;
    };

    _pDesignForm.setActive = function ()
    {        
        if (!this._css_context_list || this._css_context_list.length <= 0)
            return;

        var _item = this._css_context_list[0];
        if (_item instanceof nexacro.DesignCssContext)
        {
            if (_item._theme_uri !== undefined)
            {
            	// _application._theme_uri = _item._theme_uri;
            	nexacro._theme_uri = _item._theme_uri;
            }
        }
    };

    _pDesignForm.setFormBaseUrl = function (baseurl)
    {
        if (baseurl)
        {
            if (baseurl.indexOf("::") >= 0)                
                baseurl = nexacro.__getServiceLocation(baseurl);            
        }
                
        this._base_url = baseurl;
    };

    _pDesignForm.setThemeUri = function (themename)
    {
        // TODO : themeuri가 변경되고 처리해야 할 일
        // 이전에 적용된 image 들 교체

        // lym. 16.6.10, runtime http 통신을 태우기 위한 문자열 추가
        if (typeof themename == "string")
        {
            if (themename[0] == "\\" || themename[2] == "\\" ||
                themename[0] == "/" || themename[2] == "/")
                    themename = "file://" + themename;
        } 

        // 이후에 참조할 image 경로 교체
        nexacro._theme_uri = themename;

        this.drawWindow();
    };

    _pDesignForm._clearStyles = function (comp)
    {
        if (comp === undefined)
            comp = this;
        else if (comp === null)
            return;

        var len, i;
        if (comp instanceof nexacro.DesignForm)
        {
            this._clearStyles(comp._inner_form);
        }
        else if (comp instanceof nexacro.FormBase)
        {
            len = comp.components.length;
            for (i = 0; i < len; i++)
            {
                this._clearStyles(comp.components[i]);
            }
        }

        var subcontrols = this._getSubControlList(comp);
        len = subcontrols.length;
        for (i = 0; i < len; i++)
        {
            var control = subcontrols[i];
            this._clearStyles(control);
        }
    };

    _pDesignForm._refreshStyles = function (comp)
    {
        if (comp === undefined)
            comp = this;
        else if (comp === null)
            return;
        
        var len, i;
        // 재귀호출
        if (comp instanceof nexacro.DesignForm)
        {
            this._refreshStyles(comp._inner_form);
        }
        else if (comp instanceof nexacro.FormBase)
        {
            len = comp.components.length;
            for (i = 0; i < len; i++)
            {
                this._refreshStyles(comp.components[i]);
            }
        }

        var subcontrols = this._getSubControlList(comp);
        len = subcontrols.length;
        for (i = 0; i < len; i++)
        {
            var control = subcontrols[i];
            this._refreshStyles(control);
        }
    };

    _pDesignForm._notifyChangedStyles = function ()
    {
        // 화면 갱신
        this.drawWindow();

        // style property 정보 갱신        
        var win = this._getWindow();
        if (win && win.handle)
        {
            nexacro.__notifyToDesignWindow(win.handle, nexacro._design_notify_refresh_properties, this.name, null);
        }
    };

    //---------------------------------------------------------------
    // Methods internal
    //---------------------------------------------------------------



    // 속성 적용 후, 디자인을 위한 특수처리
    _pDesignForm._on_update_property = function (obj, propid)
    {
        if (!obj || !propid)
            return;

        var parent;
        switch (propid)
        {
            case "name":
                obj.id = obj.name;
                if (obj != this._inner_form)
                {
                    parent = obj.parent;
                    var comps = this._getChilds(parent);
                    var comp_len = comps.length;
                    for (var i = 0; i < comp_len; i++)
                    {
                        var comp = comps[i];
                        if (comp.name == obj.name)
                        {
                            var old_id = comps.get_id(i);
                            parent[old_id] = null;
                            parent[obj.name] = obj;

                            comps.update_id(i, obj.name);

                            // all collaction 변경 처리 추가.
                            if (obj instanceof nexacro.Tab)
                            {
                                // tab에는 tabpages 말고 따로 처리할 항목이 있나??
                            }
                            else if (parent.all)
                            {
                                var idx = parent.all.indexOf(old_id);                            
                                if (idx >= 0)
                                    parent.all.update_id(idx, obj.name);
                            }
                            

                            break;
                        }
                    }
                }
                break;
            case "positionstep":
                this._on_update_positionstep(obj);
                break;

            case "left":
            case "top":
            case "width":
            case "height":
            case "right":
            case "bottom":
                {
                    parent = obj.parent;
                    if (parent && parent._is_form && parent._is_scrollable)
                    {
                        parent._onRecalcScrollSize();
                        parent._onResetScrollBar();
                    }
                }
                break;
        }

        if (this._loaded && obj.afterSetProperty)
            obj.afterSetProperty(propid);

        // style이면 .... step container 업데이트        
        if (obj._control_element && obj._control_element._step_containers && obj._control_element._step_containers.length > 0)
        {
            switch (propid)
            {
                case "border":
                case "borderRadius":
                    this._updateStepContainerStyle(obj._control_element, 0x01);
                    break;
                case "background":
                    this._updateStepContainerStyle(obj._control_element, 0x02);
                    break;
                case "color":
                    this._updateStepContainerStyle(obj._control_element, 0x04);
                    break;
                case "opacity":
                    this._updateStepContainerStyle(obj._control_element, 0x08);
                    break;
            }
        }
    };

    _pDesignForm.loadedForm = function ()
    {
        this._loaded = true;
    };

    // EasyUI - view generation
    _pDesignForm.getViewTemplateResult = function (filepath, src_script, fieldarray, contents, generationattr)
    {
        //trace(">> getViewTemplateResult");

        var ret;
        try
        {
            // execute script
            (new Function(src_script))();

            if (typeof fn_GetViewGenerationResult === "function")
            {
                ret = fn_GetViewGenerationResult(fieldarray, contents, generationattr);
                fn_GetViewGenerationResult = undefined;
            }
        }
        catch (e)
        {
            if (e.obj) {
                nexacro.__onNexacroStudioError(e.message);
            }
            else {
                var msg = e.toString();
                if (e.stack && e.stack.length > 0) {
                    var frame = e.stack[0];
                    msg += "\r\nin " + decodeURI(filepath);
                }
                nexacro.__onNexacroStudioError(msg);
            }
        }

        // convert object to string
        if (typeof (ret) == "object") {
            ret = JSON.stringify(ret);
        }

        return ret;
    };

    _pDesignForm.getViewTemplateGenerationAttrList = function (filepath, src_script)
    {
        //trace(">> getViewTemplateGenerationAttrList");

        var ret;
        try {
            // execute script
            (new Function(src_script))();

            if (typeof fn_GetViewAttributeList === "function")
            {
                ret = fn_GetViewAttributeList();
                fn_GetViewAttributeList = undefined;
            }
        }
        catch (e) {
            if (e.obj) {
                nexacro.__onNexacroStudioError(e.message);
            }
            else {
                var msg = e.toString();
                if (e.stack && e.stack.length > 0) {
                    var frame = e.stack[0];
                    msg += "\r\nin " + decodeURI(filepath);
                }
                nexacro.__onNexacroStudioError(msg);
            }
        }

        // convert object to string
        if (typeof (ret) == "object") {
            ret = JSON.stringify(ret);
        }

        return ret;
    };

    _pDesignForm.getFieldUserAttrList = function (filepath, src_script)
    {
        //trace(">> getFieldUserAttrList");

        var ret;
        try {
            // execute script
            (new Function(src_script))();

            if (typeof fn_GetFieldUserAttributeList === "function")
            {
                ret = fn_GetFieldUserAttributeList();
                fn_GetFieldUserAttributeList = undefined;
            }
        }
        catch (e) {
            if (e.obj) {
                nexacro.__onNexacroStudioError(e.message);
            }
            else {
                var msg = e.toString();
                if (e.stack && e.stack.length > 0) {
                    var frame = e.stack[0];
                    msg += "\r\nin " + decodeURI(filepath);
                }
                nexacro.__onNexacroStudioError(msg);
            }
        }

        // convert object to string
        if (typeof (ret) == "object") {
            ret = JSON.stringify(ret);
        }

        return ret;
    };

    // EasyUI 

    _pDesignForm._on_update_positionstep = function (obj)
    {
        // trace(this._getScopeName(obj) + "._on_update_positionstep");

        var parent = obj.parent;
        var elem, elem_handle;
        if (parent)
        {
            var parent_elem = parent._control_element;
            if (parent_elem && parent_elem._step_containers && parent_elem._step_containers.length > 0)
            {
                elem = obj._control_element;
                elem_handle = elem ? elem.handle : null;
                
                if (obj.positionstep == -1)
                {                    
                    nexacro.__setElementHandleStepCount(elem_handle, parent_elem._step_containers.length + 1); // count가 먼저 설정되어야 함
                    nexacro.__setElementHandleStepWidth(elem_handle, parent._adjust_width);
                    nexacro.__setElementHandleFixedStepNode(elem_handle, true);
                }
                else
                {
                    nexacro.__setElementHandleFixedStepNode(elem_handle, false);
                }
            }
            else
            {
                elem = obj._control_element;
                elem_handle = elem ? elem.handle : null;

                nexacro.__setElementHandleFixedStepNode(elem_handle, false);
            }

            obj._adjustPosition(obj.left, obj.top, obj.right, obj.bottom, obj.width, obj.height, parent._adjust_width, parent._adjust_height);
            obj.on_update_position(false, true);
        }
    };

    _pDesignForm._hitTestByPoint = function (obj, x, y)
    {
        if (obj)
        {
            var control_elem = obj._control_element;
            if (control_elem)
            {
                var elem = control_elem;
                while (elem)
                {
                    if (elem._design_visible === false)
                        return false;
                    elem = elem.parent_elem;
                }
            }

            var rect = this._getClientRect(obj);
            if (rect[0] <= x && x <= rect[0] + rect[2] &&
                rect[1] <= y && y <= rect[1] + rect[3])
                return true;
        }

        return false;
    };

    // type 0 : select all
    // type 1 : select part
    // type 2 : child check (obj안에 rect가 포함되는가)
    _pDesignForm._hitTestByRect = function (obj, left, top, right, bottom, type)
    {
        if (obj)
        {
            var control_elem = obj._control_element;
            if (control_elem)
            {
                var elem = control_elem;
                while (elem)
                {
                    if (elem._design_visible === false)
                        return false;
                    elem = elem.parent_elem;
                }
            }

            var rect = this._getClientRect(obj);
            var _left = rect[0];
            var _right = rect[0] + rect[2];
            var _top = rect[1];
            var _bottom = rect[1] + rect[3];
            if (type == 0)
            {
                if (left <= _left && _right <= right &&
                    top <= _top && _bottom <= bottom)
                    return true;
            }
            else if (type == 1)
            {
                if (left > _right)
                    return false;

                if (top > _bottom)
                    return false;

                if (right < _left)
                    return false;

                if (bottom < _top)
                    return false;

                return true;
            }
            else if (type == 2)
            {
                if (left >= _left && _right >= right &&
                     top >= _top && _bottom >= bottom)
                    return true;
            }

        }

        return false;
    };

    _pDesignForm._getClientRect = function (obj)
    {
        //var rectbyroot = [obj._adjust_left, obj._adjust_top, obj._adjust_width, obj._adjust_height];
        var _adjust_left = obj._adjust_left;
        var _adjust_top = obj._adjust_top;
        var _adjust_width = obj._adjust_width;
        var _adjust_height = obj._adjust_height;

        var sublayoutmode_info = this._findSubLayoutMode(obj);
        if (sublayoutmode_info)
        {
            _adjust_left = _adjust_left + this._scroll_left - sublayoutmode_info.offset_pos[0];
            _adjust_top = _adjust_top + this._scroll_top - sublayoutmode_info.offset_pos[1];
        }

        var parent = obj.parent;
        while (parent && parent != this)
        {
            _adjust_left += parent._adjust_left;
            _adjust_top += parent._adjust_top;

            // border
            var border = this._getBorderWidth(parent);
            _adjust_left += border[0];
            _adjust_top += border[1];

            if (parent instanceof nexacro.Div)
            {
                sublayoutmode_info = this._findSubLayoutMode(parent);
                if (sublayoutmode_info)
                {
                    _adjust_left = _adjust_left + this._scroll_left - sublayoutmode_info.offset_pos[0];
                    _adjust_top = _adjust_top + this._scroll_top - sublayoutmode_info.offset_pos[1];
                }
            }

            parent = parent.parent;
        }

        // zoom 적용.
        var scale = this._getZoom() / 100;

        _adjust_left *= scale;
        _adjust_top *= scale;
        _adjust_width *= scale;
        _adjust_height *= scale;

        _adjust_left = parseInt(_adjust_left);
        _adjust_top = parseInt(_adjust_top);
        _adjust_width = parseInt(_adjust_width);
        _adjust_height = parseInt(_adjust_height);

        return [_adjust_left, _adjust_top, _adjust_width, _adjust_height];
    };

    _pDesignForm._recalcDesignLayout = function (recalc_innerform, recalc_sublayout)
    {
        var form = this._inner_form;
        if (recalc_innerform != false && form)
        {
            // design요소에 의한 offset은 _adjustPosition에서 처리하고 여기에서는 업데이트만 처리
            form.move(0, 0, form.width, form.height);
            form.on_update_position(false, true);
        }

        var manager = nexacro._getLayoutManager();
        if (!manager)
            return false;

        var _stack = this._sublayoutmode_stack;
        if (recalc_sublayout !== false && _stack.length > 0)
        {
            for (var i = 0; i < _stack.length; i++)
            {
                var comp = _stack[i].comp;
                var parent_form = comp._getForm();
                var is_fluid = manager.isFluidLayoutType(parent_form);
                if (is_fluid)
                {
                    if (comp instanceof nexacro.Tabpage)
                    {
                        comp._adjustPosition();
                    }
                    else
                    {
                        manager.calcFluidLayoutContents(parent_form);
                    }
                }
                else
                {
                    comp._adjustPosition();
                }
                comp._recalcSubLayoutPosition();
                comp.on_update_position(false, true);
            }
        }

        // sublayout edit 상태에서 form 이동시 overlayelement 위치 갱신 안되는 현상 수정
        if (this._active_editing_sublayout && this._is_sub_layout_editting())
        {
            var active_sublayout = this._active_editing_sublayout;
            var positionstep = (active_sublayout._sublayoutmode_info) ? active_sublayout._sublayoutmode_info.positionstep : 0;
            
            this._showSubLayout(active_sublayout, false);
            this._showSubLayout(active_sublayout, true, positionstep);
        }
        // TODO option처리
        this._recalcStepContainer(form);
    };

    _pDesignForm._getNextChildID = function (parent, classname)
    {
        if (!parent || !classname)
        {
            trace("parent or classname is missing");
            return "error";
        }

        var names = classname.split('.');
        if (names[0] == "nexacro")
        {
            names.splice(0, 1);
        }

        var nextnum = 0;
        var nextid;
        while (true)
        {
            nextid = classname + ((nextnum < 10) ? "0" : "") + nextnum;
            if (!parent[nextid])
                break;
            nextnum++;
        }

        return nextid;
    };

    _pDesignForm._changeChildID = function (oldid, newid, obj)
    {
        var idx = this.all.indexOf(oldid);
        if (idx < 0) return;
        this.all.update_id(idx, newid);

        idx = this.components.indexOf(oldid);
        if (idx >= 0)
        {
            this.components.update_id(idx, newid);
        }

        idx = this.objects.indexOf(oldid);
        if (idx >= 0) return;
        {
            this.objects.update_id(idx, newid);
        }

        idx = this.binds.indexOf(oldid);
        if (idx >= 0) return;
        {
            this.binds.update_id(idx, newid);
        }

        delete this[oldid];
        this[newid] = obj;
		      
    };

    // 140618 박현진 : child list 얻어오는 함수
    _pDesignForm._getChilds = function (obj)
    {
        if (!obj)
            return null;

        if (obj instanceof nexacro.Tab)
        {
            return obj.tabpages;
        }
        else if (obj instanceof nexacro.Form)
        {
            return obj.components;
        }
        else if (obj.form)
        {
            return obj.form.components;
        }

        return null;
    };

    _pDesignForm._getChild = function (childname)
    {
        if (childname == "" || childname == undefined || childname == "this")
            return this._inner_form;

        return eval("this._inner_form." + childname);
    };

    _pDesignForm._getChildList = function (obj)
    {
        if (obj instanceof nexacro.Tab)
        {
            return obj.tabpages;
        }
        else if (obj instanceof nexacro.Form)
        {
            return obj._child_list;
        }
        else if (obj.form)
        {
            return obj.form._child_list;
        }

        return null;
    };

    _pDesignForm._getObjectList = function (obj)
    {
        if (obj instanceof nexacro.Tab)
        {
            return null;
        }
        else if (obj instanceof nexacro.Form)
        {
            return obj.objects;
        }
        else if (obj.form)
        {
            return obj.form.objects;
        }

        return null;
    };

    _pDesignForm._getObject = function (name)
    {
    	// 	trace("DesignForm._getObject :" + name);
    
        if (!name || name == "this")
        {
            return this._inner_form;
        }

        if (name.substring(0, 4) == "this.")
        {
    //    	alert("DesignForm._getObject:"+name);
        	name = name.substring(5);
        }
        
        var obj = eval("this._inner_form." + name);
        // 엉뚱한 대상을 넘겨주면 안됨.
        /*
        if (!obj)
        {
            //trace("not found object : this._inner_form." + name);
            obj = this._inner_form;
        }
        */

        return obj;
    };

    _pDesignForm._getInlineStyleValue = function (comp)
    {
        // inline style 값 전체 리턴
        var str = "";

        // normal style
        var _style = comp.style;
        var prop;
        if (_style)
        {
            var _pStyle = nexacro.Style.prototype;
            for (prop in _style)
            {
                if (prop[0] == "_")
                    continue;
                if (typeof (_style[prop]) == "function")
                    continue;
                if (_style[prop] == null)
                    continue;
                if (_pStyle[prop] == _style[prop]) // rtlimagemirroring 때문에 임시
                    continue;
                str += prop + ": " + _style[prop]._value + "; ";
            }
        }

        // Pseudo style value
        var pseudo_styles = comp._styles;
        if (pseudo_styles)
        {
            for (var pseudo_style in pseudo_styles)
            {
                if (pseudo_style[0] == "_")
                    continue;
                if (pseudo_style == "normal") // tabpage 버그 임시
                    continue;
                _style = pseudo_styles[pseudo_style];
                str += ":" + pseudo_style + " { ";
                for (prop in _style)
                {
                    if (prop[0] == "_")
                        continue;
                    if (typeof (_style[prop]) == "function")
                        continue;
                    if (_style[prop] == null)
                        continue;
                    str += prop + ": " + _style[prop]._value + "; ";
                }
                str += " }; ";
            }
        }

        return str;
    };

    //this 를 제외한 Div00.button00 형태 
    _pDesignForm._getScopeName = function (comp)
    {
        if (comp instanceof nexacro.DesignForm)
        {
            return;
        }

        if (comp == this._inner_form)
        {
            return "this";
        }

        var fullname = [];        
        while (comp && comp != this && comp != this._inner_form)
        {
            if (comp instanceof nexacro._InnerForm)
            {
                fullname.push("form");
            }
            else
            {
                fullname.push(comp.id);
            }
            
            comp = comp.parent;
        }

        fullname.reverse();
        return fullname.join(".");
    };

    //this 를 제외한 Div00.form.button00 형태 
    _pDesignForm._getChildName = function (comp)
    {
        if (comp instanceof nexacro.DesignForm)
        {
            return;
        }

        if (comp == this._inner_form)
        {
            return "this";
        }

        var parent = comp.parent;
        var fullname = [];

        fullname.push(comp.id);
        while (parent && parent != this && parent != this._inner_form)
        {
            if (parent instanceof nexacro._InnerForm)
            {
                fullname.push("form");
            }
            else
            {
                fullname.push(parent.id);
            }

            parent = parent.parent;
        }

        fullname.reverse();
        return fullname.join(".");
    };

    // comp가 urlload 된 form의 자손인지 확인후 최상위의 urlload component 리턴
    _pDesignForm._findURlLoadedAncestor = function (comp)
    {
        if (!comp)
            return null;

        var found_comp = null;
        while (comp)
        {
            if (comp == this._inner_form)
                break;

            // TODO check Url load인지 확실하게 알 방법이 없어보이는데.
            if (comp instanceof nexacro.Div && comp._url)
                found_comp = comp;
            comp = comp.parent;
        }

        return found_comp;
    };

    // String으로 Style Property를 Append Merge한다.
    _pDesignForm._appendInlineStyleValue = function (base_value, append_value)
    {
        // Base   = "a:olda; b:oldb; :focused{b:b; } "
        // Append = "a:newa; c:c; :focused{b:bb; d:d } :mouseover{e:e; } "
        // Result = "a:newa; b:oldb; c:c; :focused{ b:bb; d:d; } :mouseover{ e:e; } "
        base_value = nexacro._decodeXml(base_value);
        append_value = nexacro._decodeXml(append_value);

        var base_styles = this._parseInlineStyleValue(base_value);
        var append_styles = this._parseInlineStyleValue(append_value);
        var pseudo;
        // 1) 같이 존재하는 pseudo
        for (pseudo in base_styles)
        {
            if (!append_styles[pseudo])
                continue;

            // a=a, b=b 형태의 array
            var base_tokens = base_styles[pseudo].split(";");
            var append_tokens = append_styles[pseudo].split(";");

            // {a:a, b:b} 형태의 json으로 변환과 동시에 append
            var base_style = this._parseStyleToken(base_tokens);
            var append_style = this._parseStyleToken(append_tokens, base_style);

            // json to string
            var append_str = "";
            for (var prop in append_style)
                append_str += prop + ":" + append_style[prop] + "; ";

            base_styles[pseudo] = append_str;
        }

        // 2) append에만 있는 pseudo
        for (pseudo in append_styles)
        {
            if (base_styles[pseudo])
                continue;

            base_styles[pseudo] = append_styles[pseudo];
        }

        // to string
        var ret = "";
        for (pseudo in base_styles)
        {
            if (pseudo == "normal")
            {
                ret += base_styles[pseudo];
            }
            else
            {
                ret += ":" + pseudo + "{ " + base_styles[pseudo] + "} ";
            }
        }

        return ret;
    };

    // [ a:a, b:b, c:c ]
    // array to json
    _pDesignForm._parseStyleToken = function (v, source_obj)
    {
        var ret = source_obj ? source_obj : {};
        for (var i = 0; i < v.length; i++)
        {
            var name_and_value = v[i].split(":");
            var name = name_and_value[0].trim();

            // check dummy
            if (name == "" && name_and_value.length == 1)
                continue;

            var value = name_and_value[1].trim();
            ret[name] = value;
        }

        return ret;
    };

    _pDesignForm._parseInlineStyleValue = function (v)
    {
        v = nexacro._decodeXml(v);
        var blocks = v.split("}");
        var s = blocks[0].trim();

        var _styles = {};
        blocks.pop();

        var i, len = blocks.length;
        var definition_block, pseudo, normal_style;

        definition_block = s.split("{");
        normal_style = definition_block[0].substring(0, definition_block[0].lastIndexOf(";") + 1).trim();

        if (normal_style.length == 0)
            normal_style = definition_block[0].substring(0, definition_block[0].length).trim();

        _styles.normal = normal_style;
        if (len > 0)
        {
            for (i = 0; i < len; i++)
            {
                definition_block = blocks[i].split("{");
                pseudo = definition_block[0].substring(definition_block[0].lastIndexOf(":") + 1).trim();
                _styles[pseudo] = definition_block[1];
            }
        }
        return _styles;
    };

    // left top width height right bottom 사용가능
    // px <-> % 유닛 스왑
    _pDesignForm._swapPositionUnit = function (obj, pos, unit)
    {
        // trace("_pDesignForm._swapPositionUnit, ", obj, pos, unit);


        // 150805 박현진 : unit이 auto일 경우 이쪽을 타지 않아야 한다.
        // _pDesignForm.swapPositionUnit() 에서 처리되어야 함.
        if (unit == "auto")
            return;

        if (pos != "left" && pos != "top" && pos != "width" && pos != "height" && pos != "right" && pos != "bottom")
            return;

        // 값이 없는 경우 swap할 필요가 없음
        if (obj[pos] === null)
            return;

        var parent = obj.parent;
        if (!parent)
            return;

        var parent_size;

        //var form = obj._getForm();
        //var info = obj._based_info;
        var root_form = obj._getRootForm();
        var owner_positionstep = this.get_owner_step_index(obj);
        var step_width = 0;
        if (owner_positionstep > 0 && obj.parent == root_form)
        {
            step_width = this._inner_form._adjust_width;
        }

        // table layout에서는 component가 배치된 cell의 width/height가 parent_size가 되어야한다.
        var table_cell_rect = this.getTableCellRect(this._getScopeName(obj), this._getScopeName(obj.parent));

        if (pos == "left" || pos == "width" || pos == "right")
            parent_size = table_cell_rect ? table_cell_rect[2] - table_cell_rect[0] : parent._control_element.client_width;
        else
            parent_size = table_cell_rect ? table_cell_rect[3] - table_cell_rect[1] : parent._control_element.client_height;        

        var arrange_info;
        var adjust_pos;
        var baseCompid = null;
        var _left = obj._adjust_left - owner_positionstep * step_width;

        //var base_comp;
        var target;
        if (pos == "left")
        {
            adjust_pos = _left;
            // trace("_pDesignForm._swapPositionUnit, _left=" + _left + ", owner_positionstep="+owner_positionstep);
            arrange_info = obj._arrange_info ? obj._arrange_info.left : null;
            if (arrange_info)
            {                
                target = obj._findComponentForArrange(arrange_info.compid);
                if (target)
                {
                    baseCompid = arrange_info.compid;                    
                    adjust_pos = obj._adjust_left - (target._adjust_left + target._adjust_width);
                    parent_size = target._adjust_width;                    
                }
            }            
        }
        else if (pos == "top")
        {
            adjust_pos = obj._adjust_top;
            arrange_info = obj._arrange_info ? obj._arrange_info.top : null;
            if (arrange_info)
            {                
                target = obj._findComponentForArrange(arrange_info.compid);
                if (target)
                {
                    baseCompid = arrange_info.compid;                    
                    adjust_pos = obj._adjust_top - (target._adjust_top + target._adjust_height);
                    parent_size = target._adjust_height;
                }
            }                      
        }
        else if (pos == "right")
        {
            adjust_pos = parent_size - (obj._adjust_width + _left);
            arrange_info = obj._arrange_info ? obj._arrange_info.right : null;
            if (arrange_info)
            {                
                target = obj._findComponentForArrange(arrange_info.compid);
                if (target)
                {
                    baseCompid = arrange_info.compid;                    
                    adjust_pos = target._adjust_left - (obj._adjust_left + obj._adjust_width);
                    parent_size = target._adjust_width;
                }
            }                      
        }
        else if (pos == "bottom")
        {
            adjust_pos = parent_size - (obj._adjust_top + obj._adjust_height);
            arrange_info = obj._arrange_info ? obj._arrange_info.bottom : null;
            if (arrange_info)
            {                
                target = obj._findComponentForArrange(arrange_info.compid);
                if (target)
                {
                    baseCompid = arrange_info.compid;                    
                    adjust_pos = target._adjust_top - (obj._adjust_top + obj._adjust_height);
                    parent_size = target._adjust_height;
                }
            }   
        }
        else if (pos == "width")
        {
            adjust_pos = obj._adjust_width;
            arrange_info = obj._arrange_info ? obj._arrange_info.width : null;
            if (arrange_info)
            {
                target = obj._findComponentForArrange(arrange_info.compid);
                if (target)
                {
                    baseCompid = arrange_info.compid;                                        
                    parent_size = target._adjust_width;
                }                
            }
        }
        else if (pos == "height")
        {
            adjust_pos = obj._adjust_height;
            arrange_info = obj._arrange_info ? obj._arrange_info.height : null;
            if (arrange_info)
            {
                target = obj._findComponentForArrange(arrange_info.compid);
                if (target)
                {
                    baseCompid = arrange_info.compid;                                        
                    parent_size = target._adjust_height;
                }                
            }
        }
        else
        {
            adjust_pos = eval("obj._adjust_" + pos);
        }

        // 150805 박현진 : 현재 property 설정값을 무시하고 unit에 따라서 값 변경
        var new_prop_val;
        if (unit == "px")
        {
            // ??? --> px
            if (pos == "right")
            {
                //adjust_pos = parent_size - (obj._adjust_width + _left);
                //trace("_pDesignForm._swapPositionUnit, id=" + obj.id + ", parent_size=" + parent_size + ", obj._adjust_width=" + obj._adjust_width + ", _left=" + _left + ", new_prop_val=" + new_prop_val);
            }

            if (baseCompid)
            {
                new_prop_val = baseCompid;
                new_prop_val += ":";
                new_prop_val += adjust_pos;
                eval("obj.set_" + pos + "(" + 'new_prop_val' + ");");
            }
            else
            {
                new_prop_val = adjust_pos;
                eval("obj.set_" + pos + "(" + 'new_prop_val' + ");");
            }
        }
        else
        {
            // ??? --> %
            // var new_prop_val = nexacro.round((adjust_pos * 100) / parent_size, 2);

            if (pos == "right")
            {
                //adjust_pos = parent_size - (obj._adjust_width + _left);
                //trace("_pDesignForm._swapPositionUnit, id=" + obj.id + ", parent_size=" + parent_size + ", obj._adjust_width=" + obj._adjust_width + ", _left=" + _left + ", new_prop_val=" + new_prop_val);
            }
            
            if (baseCompid)
            {
                new_prop_val = baseCompid;
                new_prop_val += ":";
                new_prop_val += nexacro.round((adjust_pos * 100) / parent_size, 2);
                new_prop_val += "%";
                eval("obj.set_" + pos + "(" + 'new_prop_val' + ");");
            }
            else
            {
                new_prop_val = nexacro.round((adjust_pos * 100) / parent_size, 2);
                new_prop_val += "%";
                eval("obj.set_" + pos + "(" + 'new_prop_val' + ");");
            }
        }
    };

    _pDesignForm._findSubLayoutMode = function (obj)
    {
        if (obj instanceof nexacro.Div)
        {
            for (var i = 0; i < this._sublayoutmode_stack.length; i++)
            {
                if (obj == this._sublayoutmode_stack[i].comp)
                {
                    return this._sublayoutmode_stack[i];
                }
            }
        }
    };

    // stepcount에 맞게 container element 생성/파괴
    _pDesignForm._refreshStepContainer = function (obj, stepcount)
    {
        if (!obj)
            return;

        var win = this._getWindow();
        if (!win || !win.handle) return;

        if (this._active_editing_form != obj)
            return;

        var control_elem = obj._control_element;
        if (!control_elem)
            return;

        if (!control_elem._step_containers)
            control_elem._step_containers = [];

        var list = control_elem._step_containers;
        var list_len = list.length;
        var i, elem, parent_elem;
        if (list_len + 1 < stepcount)
        {
            nexacro.__setElementHandleStepCount(control_elem.handle, stepcount);

            // 생성
            parent_elem = control_elem.parent_elem;
            var width = obj._adjust_width;
            var height = obj._adjust_height;
            for (i = list_len; i < stepcount - 1; i++)
            {
                elem = new nexacro.ScrollableControlElement(parent_elem);
                elem.setLinkedControl(this);

                elem.setElementTypeCSSSelector(this.on_get_css_assumedtypename());
                elem.setElementPosition(control_elem.left + ((i + 1) * width), control_elem.top);
                elem.setElementSize(width, height);

                elem.create(win);
                list.push(elem);

                parent_elem.sendToBackElement(elem);

                nexacro.__setElementHandleDotSize(elem.handle, this._dot_size_x, this._dot_size_y);
                nexacro.__setElementHandleDotStyle(elem.handle, this._dot_style);
                nexacro.__setElementHandleDotVisible(elem.handle, this._dot_visible);

                // TODO step관련 element api 호출
                // nexacro.__setElementHandleStepLine(...)
            }
        }
        else if (list_len > stepcount - 1)
        {
            // 삭제
            for (i = list_len - 1; i >= stepcount - 1 && i >= 0; i--)
            {
                elem = list[i];
                elem.destroy();
                list[i] = null;
                delete elem;
            }
            list.length = Math.max(0, stepcount - 1);
        }

        // 컴포넌트 세팅값도 갱신
        var comps = obj.components;
        var comps_len = comps ? comps.length : 0;
        for (i = 0; i < comps_len; i++)
        {
            this._on_update_property(comps[i], "positionstep");
        }

        // Z-order 갱신
        {
            parent_elem = control_elem.parent_elem;
            for (i = 0; i < stepcount - 1; i++)
            {
                elem = list[i];
                parent_elem.sendToBackElement(elem);
            }
        }
        this._updateStepContainerStyle(control_elem, 0xffffffff);
    };

    _pDesignForm._recalcStepContainer = function (obj)
    {
        if (!obj)
            return;

        var control_elem = obj._control_element;

        var list = control_elem ? control_elem._step_containers : null;
        if (!list || list.length < 1)
            return;

        var parent_elem = control_elem.parent_elem;
        var width = obj._adjust_width;
        var height = obj._adjust_height;
        var i, elem;
        for (i = 0; i < list.length; i++)
        {
            elem = list[i];

            elem.setElementPosition(control_elem.left + ((i + 1) * width), control_elem.top);
            elem.setElementSize(width, height);
            parent_elem.sendToBackElement(elem);
        }

        // fixed component에 대한 세팅
        var comps = this._getChilds(obj);
        var comps_len = comps ? comps.length : 0;
        for (i = 0; i < comps_len; i++)
        {
            var comp = comps[i];
            if (comp.positionstep == -1)
            {
                elem = comp._control_element;
                var elem_handle = elem ? elem.handle : null;
                if (elem_handle)
                {
                    //nexacro.__setElementHandleFixedStepNode(elem_handle, true);
                    //nexacro.__setElementHandleStepCount(elem_handle, list.length + 1);
                    nexacro.__setElementHandleStepWidth(elem_handle, width);
                }
            }
        }
    };

    _pDesignForm._showDotGrid = function (obj, is_show)
    {
        if (!obj)
            return;

        var control_elem = obj._control_element;
        if (!control_elem)
            return;

        var step_container_elems, i;
        if (is_show)
        {
            nexacro.__setElementHandleDotSize(control_elem.handle, this._dot_size_x, this._dot_size_y);
            nexacro.__setElementHandleDotStyle(control_elem.handle, this._dot_style);
            nexacro.__setElementHandleDotVisible(control_elem.handle, this._dot_visible);

            step_container_elems = control_elem._step_containers;
            if (step_container_elems && step_container_elems.length > 0)
            {
                for (i = 0; i < step_container_elems.length; i++)
                {
                    control_elem = step_container_elems[i];
                    nexacro.__setElementHandleDotSize(control_elem.handle, this._dot_size_x, this._dot_size_y);
                    nexacro.__setElementHandleDotStyle(control_elem.handle, this._dot_style);
                    nexacro.__setElementHandleDotVisible(control_elem.handle, this._dot_visible);
                }
            }
        }
        else
        {
            nexacro.__setElementHandleDotVisible(control_elem.handle, false);

            step_container_elems = control_elem._step_containers;
            if (step_container_elems && step_container_elems.length > 0)
            {
                for (i = 0; i < step_container_elems.length; i++)
                {
                    control_elem = step_container_elems[i];
                    nexacro.__setElementHandleDotVisible(control_elem.handle, false);
                }
            }
        }
    };

    _pDesignForm._updateStepContainerStyle = function (control_elem, option)
    {
        if (!control_elem)
            return;

        var obj = control_elem.linkedcontrol;
        var list =control_elem._step_containers;
        if (!list)
            return;

        for (var i = 0; i < list.length; i++)
        {
            var elem = list[i];
            if (option & 0x01) // border, borderradius
            {
                if (obj._border)
                {
                    elem.setElementBorder(obj._border);
                }
                else
                {
                    elem.setElementBorder(null);
                }
                if (obj._borderradius)
                {
                    elem.setElementBorderRadius(obj._borderradius);
                }
                else
                {
                    elem.setElementBorderRadius(null);
                }
            }
            if (option & 0x02) // background
            {
                if (obj._background)
                {
                    elem.setElementBackground(obj._background);
                }
                else
                {
                    elem.setElementBackground(null);
                }
            }
            if (option & 0x04) // color
            {
                if (obj._color)
                {
                    elem.setElementColor(obj._color);
                }
                else
                {
                    elem.setElementColor(null);
                }
            }
            if (option & 0x08) // opacity
            {
                if (obj._opacity)
                {
                    elem.setElementOpacity(obj._opacity);
                }
                else
                {
                    elem.setElementOpacity(null);
                }
            }
            if (option & 0x10) // align
            {
                // 공백
            }
            if (option & 0x20) // font
            {
                if (obj._font)
                {
                    elem.setElementFont(obj._font);
                }
                else
                {
                    elem.setElementFont(null);
                }
            }
        }
    };

    _pDesignForm._getCompStepLogicalOffset = function (comp)
    {
        var parent = comp.parent;
        var step_logical_offset = 0;
        if (!nexacro._isNull(parent._design_form))
        {
            // 반드시 Layout 정보가 있어야 함.

            // 2015.06.11 neoarc; 현재 툴에서는 Layout을 변경하지 않고 각 Property를 직접 변경하고 있음.
            // Framework의 Layout 인터페이스 사용 불가
            var manager = nexacro._getLayoutManager();
            if (manager)
            {
                var layout = manager.getCurrentLayout(parent);
                if (layout && layout.stepcount > 1)
                {
                    // TODO 현재 펼쳐보기 상태인지 체크 필요
                    // ...

                    var positionstep = comp.positionstep;
                    if (positionstep === undefined)
                        positionstep = 0;

                    if (positionstep < 0 || positionstep > layout.stepcount - 1)
                        positionstep = 0;

                    step_logical_offset = parent._adjust_width * positionstep;
                }
            }
        }

        return step_logical_offset;
    };

    _pDesignForm._getSubControlList = function (comp)
    {
        var list = [];

        // sub control; 임시코드; control 목록을 알수가 없음 ..
        for (var p in comp)
        {
            if (typeof (comp[p]) == "object" && comp[p] instanceof nexacro.Component)
            {
                var control = comp[p];
                if (comp == control)
                    continue;
                if (control.parent != comp)
                    continue;
                if (control._is_subcontrol)
                    list.push(control);
            }
        }

        return list;
    };

    _pDesignForm._loadCss = function (url, refresh_designform, add_to_cssurls)
    {
        /*
        var form = this._inner_form;

        var cssurl = nexacro._getServiceLocation(url) + ".js";
        var service = _application._getServiceObject(url);

        var _load_manager = form._load_manager;
        if (add_to_cssurls !== false)
        {
            if (!form._cssurls)
                form._cssurls = [];
            form._cssurls.push(url);
        }

        //this._load_manager.loadCssModule(cssurl.join(""), null, null, service);
        var load_item = _load_manager.getLocalItem(url);
        if (!load_item)
        {
            load_item = new nexacro.LoadItem(cssurl, "css", _load_manager.context);
            load_item._refresh_designform = refresh_designform;
            _load_manager.localList.push(load_item);
            //_load_manager.localCnt++;

            var cur_cachelevel = service.cachelevel;
            service.cachelevel = "none";
            load_item._handle = nexacro._loadJSModule(cssurl, _load_manager, this._on_load_cssmodule, false, service, false);
            service.cachelevel = cur_cachelevel;
        }
        */
    };

    _pDesignForm._on_load_cssmodule = function (url, errstatus, module, fireerrorcode, returncode, requesturi, locationuri)
    {
        /*
        var _load_manager = this;
        var load_Item = _load_manager.getLocalItem(url);
        if (load_Item)
        {
            var _handle = load_Item._handle;
            load_Item._handle = null;
            if (errstatus == 0 && module && typeof (module) == "function")
            {
                if (load_Item.type != "include")
                {
                    // AddCSS
                    module.call(_load_manager.context);

                    if (load_Item._refresh_designform)
                    {
                        // Apply to DesignForm
                        var ctx = _load_manager.context;
                        ctx.parent.refreshTheme(false);
                    }
                }
                }
            else
            {
                load_Item.errcode = errstatus;
                _application._onHttpSystemError(_load_manager.context, true, _load_manager.context, fireerrorcode, url, returncode, requesturi, locationuri);
            }

            return;
        }
        */
    };

    //===============================================================
    // nexacro.DesignForm : Event Handlers
    //===============================================================
    _pDesignForm.on_notify_init = function (obj, e)
    {
        if (!_application.accessport)
            return;

        var accessport = _application.accessport.getFormAccessPort(this._url);
        if (accessport)
        {
            this.accessport = accessport;
            accessport._setTarget(this);
        }

        this._initLayoutManager();
        this._createInnerForm();
    };

    _pDesignForm._getVScrollBarType = function ()
    {
        return "none";
    };

    _pDesignForm._getHScrollBarType = function ()
    {
        return "none";
    };

    //===============================================================
    // nexacro.DesignForm : Logical Part
    //===============================================================
    _pDesignForm._createInnerForm = function ()
    {
        try
        {
            var form = new nexacro.Form("_inner_form", this._root_left, this._root_top, this.inner_width, this.inner_height, null, null, null, null, null, null, this);

            this.addChild(form.name, form);
            form.show();
            this._inner_form = form;
            this._active_editing_form = form;

            form._base_url = this._base_url;            

            form.on_create_control_element = function (parent_elem)
            {
                if (!parent_elem) return null;

                var control_elem;
                if (this._is_scrollable)
                    control_elem = this.on_create_scrollable_control_element(parent_elem);
                else
                    control_elem = this.on_create_normal_control_element(parent_elem);

                return control_elem;
            };

            // scrollbars 값은 유지하면서 그리지는 않아야 함.
            // 최초 설정 후 함수 제거
            //var scrollbartype = form.scrollbartype;
            //form.set_scrollbartype("none");            
            form._onRecalcScrollSize = nexacro._emptyFn;
            form._onResetScrollBar = nexacro._emptyFn;


            //form.set_scrollbartype(scrollbartype);

            // step 관련 form 함수 변형

            form._design_form = this;

            // scroll,offset처리
            form._adjustPosition = function (left, top, right, bottom, width, height, parentWidth, parentHeight)
            {
                nexacro.DesignForm.prototype._adjustPosition_assignPart.call(this, left, top, right, bottom, width, height, parentWidth, parentHeight);

                if (this._width != null || (this._right != null && this._left != null))
                    this._adjust_width = this._width != null ? this._width : parentWidth - this._left - this._right;

                if (this._height != null || this._bottom != null)
                    this._adjust_height = this._height != null ? this._height : parentHeight - this._top - this._bottom;

                var design_form = this._design_form;
                var scale = design_form._getZoom();
                var temp;
                if (this._left != null || this._right != null)
                {
                    this._adjust_left_ltr = this._adjust_left = this._left != null ? this._left : parentWidth - this._right - this._adjust_width;

                    //temp = this._adjust_left_ltr;
                    temp = design_form._root_left / (scale / 100) - design_form._scroll_left;
                    this._adjust_left = Math.round(temp);

                }

                if (this.top != null || this._bottom != null)
                {
                    this._adjust_top = this._top != null ? this._top : parentHeight - this._bottom - this._adjust_height;

                    //temp = this._adjust_top;
                    temp = design_form._root_top / (scale / 100) - design_form._scroll_top;
                    this._adjust_top = Math.round(temp);
                }

                if (this.left && this.width && this.right)
                {
                    this._right = 0;
                    this.right = null;
                }

                if (this.top && this.height && this.bottom)
                {
                    this._bottom = 0;
                    this.bottom = null;
                }

                design_form._recalcStepContainer(this);
            };
        }
        catch (e)
        {
        	if (e.obj)
        	{
        	    nexacro.__onNexacroStudioError(e.message);
        	}
        	else
        	{
        		var msg = nexacro._getExceptionMessage(e);
        		nexacro.__onNexacroStudioError(msg);
        	}
        }
    };

    _pDesignForm._adjustPosition_assignPart = function (left, top, right, bottom, width, height, parentWidth, parentHeight)
    {
        // trace("_pDesignForm._adjustPosition_assignPart, ", this.id, left, top, right, bottom, width, height, parentWidth, parentHeight);

        this._parseArrangeInfo(left, top, right, bottom, width, height);
        /*
    	var val;
    	var targetsize = "";

        var form = this._getForm();
        var fitcontents = this.fittocontents;
        //var size = this._on_getFitSize();
        var info = this._based_info;
		
        var _left = left;
        var _right = right

        for (var i = 0; i < 6; i++)
        {
            switch (i)
            {
                case 0:
                	val = _left;
                    if (val != null)
                    {
                        targetsize = form[info.leftbase_comp] ? form[info.leftbase_comp]._adjust_width : parentWidth;
                    	val = this._convToPixel(val, targetsize);
                    }

                    if (val == null || typeof (val) == "number")
                    {
                    	this.left = left;
                    	this._left = val;
                    }
                    break;
                case 1:
                	val = top;
                	if (val != null)
                	{
                        targetsize = form[info.topbase_comp] ? form[info.topbase_comp]._adjust_height : parentHeight;
                		val = this._convToPixel(val, targetsize);
                	}

                	if (val == null || typeof (val) == "number")
                	{
                		this.top = top;
                		this._top = val;
                	}
                    break;
                case 2:
                	val = _right;
                	if (val != null)
                	{
                        targetsize = form[info.rightbase_comp] ? form[info.rightbase_comp]._adjust_width : parentWidth;
                		val = this._convToPixel(val, targetsize);
                	}

                	if (val == null || typeof (val) == "number")
                	{
                		this.right = right;
                		this._right = val;
                	}
                    break;
                case 3:
                	val = bottom;
                	if (val != null)
                	{
                        targetsize = form[info.bottombase_comp] ? form[info.bottombase_comp]._adjust_height : parentHeight;
                		val = this._convToPixel(val, targetsize);
                	}

                	if (val == null || typeof (val) == "number")
                	{
                		this.bottom = bottom;
                		this._bottom = val;
                	}
                    break;
            	case 4:
            		val = width;
            		if (val != null)
            		{
                        targetsize = form[info.widthbase_comp] ? form[info.widthbase_comp]._adjust_width : parentWidth;
            			val = this._convToPixel(val, targetsize);
            		}

            		if (val == null || typeof (val) == "number")
            		{
            			this.width = width;
            			this._width = val;
            		}
                    break;
                case 5:
                	val = height;
                	if (val != null)
                	{
                        targetsize = form[info.heightbase_comp] ? form[info.heightbase_comp]._adjust_height : parentHeight;
                		val = this._convToPixel(val, targetsize);
                	}

                	if (val == null || typeof (val) == "number")
                	{
                		this.height = height;
                		this._height = val;
                	}
                    break;
            }
        }
        */
    };

    _pDesignForm._on_designform_onsize = function ()
    {
        var _stack = this._sublayoutmode_stack;
        if (_stack.length > 0)
        {
            var _win = this._getWindow();
            if (!_win || !_win.handle)
                return;

            for (var i = 0; i < _stack.length; i++)
            {
                // resize overlay
                var overlay_elem = _stack[i].overlay_elem;
                //var parent_elem = overlay_elem.parent_elem;

                //var width = parent_elem.width;
                //var height = parent_elem.height;
                var width = nexacro.__getWindowHandleClientWidth(_win.handle);
                var height = nexacro.__getWindowHandleClientHeight(_win.handle);

                nexacro.__setElementHandleSize(overlay_elem._handle, width, height);
            }
        }
    };

    //method call script engine
    delete _pDesignForm;

    if (nexacro.Environment)
    {
    	var _pEnvironment = nexacro.Environment.prototype;
    	_pEnvironment.set_userfontid = function (v)
    	{	
    		this.userfontid = v;
    	};

        _pEnvironment.set_rtl = function (v)
        {
            this.rtl = v;
    	    nexacro._rtl = false;
        };

        _pEnvironment.set_rtl = function (v)
        {
            this.rtl = v;
            nexacro._rtl = false;
        };
        _pEnvironment.on_loadDeviceAdaptors = nexacro._emptyFn;

        delete _pEnvironment;
    }

    //==============================================================================
    // nexacro.ApplicationAccessPort
    //==============================================================================
    nexacro.ApplicationAccessPort = function (target)
    {
        this.target = target;
        this._formaccessport = [];
        this._block_css_notify = false;
        this._refresh_css = false;
    };

    var _pApplicationAccessPort = nexacro._createPrototype(nexacro.Object, nexacro.ApplicationAccessPort);
    nexacro.ApplicationAccessPort.prototype = _pApplicationAccessPort;
    _pApplicationAccessPort.setInspectorHandle = function (handle)
    {

    };

    _pApplicationAccessPort.getObjectList = function (type)
    {

    };

    _pApplicationAccessPort.getObjectCount = function (type)
    {

    };

    _pApplicationAccessPort.getObjectByID = function (type, objid)
    {

    };

    _pApplicationAccessPort.getObjectByIndex = function (type, index)
    {
    };

    _pApplicationAccessPort.getVariant = function (varid)
    {
    };

    _pApplicationAccessPort.notifySelect = function (command, obj)
    {

    };

    _pApplicationAccessPort.getComponentRect = function (compid, isroot)
    {
    };

    _pApplicationAccessPort.getCurrentStyleValue = function (compid, propid, pseudo)
    {
    };

    _pApplicationAccessPort.InitializeApplicationProperties = function ()
    {
        //property
        //_pApplication.mainframe = null;
        //_pApplication.key = "";
        //_pApplication.xadl = "";

        var app = nexacro.getApplication();
        app.componentpath = "";
        app.commthreadcount = 0;
        app.commthreadwaittime = 0;
        app.cachedir = "";
        app.errorfile = "";
        app.onlyone = false;
        app.version = "";
        app.engineversion = "2.0";
        app.enginesetupkey = "";
        app.licenseurl = "";
        app.mousehovertime = 500;
        app.mousewheeltype = 0;
        app.imepastemode = 0;
        app.locale = 0;
        app.errorlevel = 0;
        app.cookiecachetype = "cache";
        app.loadingimage = "";

        //accessibility Property
        // app.enableaccessibility = false;
        app.accessibilityfirstovermessage = ""; //
        app.accessibilitylastovermessage = "";
        app.accessibilityreplayhotkey = "";
        app.accessibilitybackwardkey = "";
        app.accessibilityforwardkey = "";
        app.accessibilitywholereadhotkey = "";
        app.accessibilityhistorycount = 5;
        app.accessibilitytype = "standard"; //standard/sensereader/jaws
        app.accessibilitydescreadtype = "label"; //multienum - label/action/description
        app.accessibilitywholereadtype = "none"; // none/load/change/loadchange
        //   app.hithemeid = "";
        app.accessibilityheadingnexthotkey = "";
        app.accessibilityheadingprevhotkey = "";
        app.accessibilitycomponentnexthotkey = "";
        app.accessibilitycomponentprevhotkey = "";

    };

    _pApplicationAccessPort.setDotSize = function (measure, size)
    {
        var form_aps = this._formaccessport;
        var len = form_aps.length;
        for (var i = 0; i < len; i++)
        {
            var form_ap = form_aps[i].accessport;
            form_ap.setDotSize(measure, size);
        }
    };

    _pApplicationAccessPort.setDotStyle = function (style)
    {
        var form_aps = this._formaccessport;
        var len = form_aps.length;
        for (var i = 0; i < len; i++)
        {
            var form_ap = form_aps[i].accessport;
            form_ap.setDotStyle(style);
        }
    };

    _pApplicationAccessPort.setDotVisible = function (visible)
    {
        var form_aps = this._formaccessport;
        var len = form_aps.length;
        for (var i = 0; i < len; i++)
        {
            var form_ap = form_aps[i].accessport;
            form_ap.setDotVisible(visible);
        }
    };

    _pApplicationAccessPort.createFormAccessPort = function (url)
    {
        var realurl = nexacro._getFDLLocation(url);
        //	trace("ApplicationAccessPort.createFormAccessPort:" + realurl);
        if (realurl.length > 5 && realurl.substring(realurl.length - 5) == ".xfdl")
            realurl = realurl + ".js";

        var len = this._formaccessport.length;
        for (var i = 0; i < len; i++)
        {
            if (this._formaccessport[i].url == realurl)
                return this._formaccessport[i].accessport;
        }

        this._formaccessport.push({ url: realurl, accessport: new nexacro.FormAccessPort() });
    };

    _pApplicationAccessPort.removeFormAccessPort = function (url)
    {
        var realurl = nexacro._getFDLLocation(url);
        if (realurl.length > 5 && realurl.substring(realurl.length - 5) == ".xfdl")
        {
            realurl = realurl + ".js";
        }

        var form_aps = this._formaccessport;
        var form_aps_len = form_aps ? form_aps.length : 0;
        for (var i = 0; i < form_aps_len; i++)
        {
            var form_ap = form_aps[i];
            if (form_ap.url == realurl)
            {
                form_ap.accessport.destroy(); // ?
                form_ap.accessport = null;

                delete form_ap;
                form_aps[i] = null;

                form_aps.splice(i, 1);
                break;
            }
        }
    };

    _pApplicationAccessPort.getFormAccessPort = function (url)
    {
        var realurl = nexacro._getFDLLocation(url);
        if (realurl.length > 5 && realurl.substring(realurl.length - 5) == ".xfdl")
        {
            realurl = realurl + ".js";
        }

        var len = this._formaccessport.length;
        for (var i = 0; i < len; i++)
        {
            if (this._formaccessport[i].url == realurl)
            {
                return this._formaccessport[i].accessport;
            }
        }

        return null;
    };

    _pApplicationAccessPort.createDesignFrame = function (url, _handle, width, height)
    {
        try
        {
            var obj = new nexacro.ChildFrame("childdesignframe", null, null, width, height, null, null, "", this.target.mainframe);

            obj.set_formurl(url);
            obj.set_autosize("false");
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");

            obj.set_border("0px none");
            //obj.set_border("none"); // lym runtime_css에 none으로 설정

            // showDesign에서 createComponent, on_created가 호출됨
            obj.showDesign(url, this.target.mainframe, null, null, _handle);
        }
        catch (e)
        {
            if (e.obj)
            {
                nexacro.__onNexacroStudioError(e.message);
            }
            else
            {
                var msg = nexacro._getExceptionMessage(e);
                nexacro.__onNexacroStudioError(msg);
            }
        }
    };

    _pApplicationAccessPort.clearGlobalVariables = function ()
    {
        // step 1. clear dataset
        var datasets = _application._datasets;
        var length = datasets ? datasets.length : 0;
        for (var i = length - 1 ; i >= 0 ; i--)
        {
            var dataset = datasets[i];
            if (dataset && dataset.name)
            {
                this.deleteObject(dataset.name);
            }
        }

        // TODO : 그 외 항목들에 대한 처리..
    };

    // 140603 박현진 : Global Dataset Handling
    _pApplicationAccessPort.addConstColumn = function (datasetid, columnid, type, size, value, datapath)
    {
        var ds = this._getObject(datasetid);
        if (ds && ds instanceof nexacro.Dataset)
        {
            // todo : datapath 처리
            ds.addConstColumn(columnid, nexacro._decodeXml(value), type, size, datapath);
        }
    };

    _pApplicationAccessPort.insertConstColumn = function (datasetid, index, columnid, type, size, value, datapath)
    {                
        var ds = this._getObject(datasetid);
        if (ds && ds instanceof nexacro.Dataset)
        {
            if (columnid in ds.colinfos)
            {
                return -1;
            }

            var ntype;
            if (type)
            {
                ntype = nexacro.DataUtils._typeint[nexacro._toString(type).toLowerCase()];
            }
            else
            {
                type = (typeof value);
                if (type == "number")
                    ntype = 2;
                else
                    ntype = nexacro.DataUtils._typecodes[type];
            }

            if (ntype == null)
            {
                type = "variant";
                ntype = 9;
            }

            var prev_var = ds._constVars[columnid];
            if (prev_var)
            {
                if (value != prev_var.value)
                {
                    prev_var.value = nexacro.DataUtils.convert(value, ntype);
                    return ds._constVars.indexOf(columnid);
                }
                else
                {
                    return -1;
                }
            }

            ds.constcount++;
            ds.colcount++;
            // todo : datapath 처리
            if (ds._constVars.insert_item(index, columnid, new nexacro.ConstColumnVariable(columnid, value, type, ntype, size, datapath, index)) >= 0)
			{
				// 뒷 column들의 index를 변경해주어야 한다.
				var len = ds._constVars.length;
				for (var i = index + 1; i < len; i++)
				{
					var colinfo = ds._constVars[i];
					colinfo._index++;
				} 

				if (ds._eventstat)
				{
					ds.on_fire_onrowsetchanged(-1, -1, 34); //nexacro.Dataset.REASON_CHANGELAYOUT
				}
            }

            
        }
    };

    _pApplicationAccessPort.deleteConstColumn = function (datasetid, col)
    {
		var ds = this._getObject(datasetid);
        if (ds && ds instanceof nexacro.Dataset)
        {
            ds.deleteColumn(col + ds.colinfos.length);
        }
    };

    _pApplicationAccessPort.setConstColumnProperty = function (datasetid, col, propid, propval)
    {
        var ds = this._getObject(datasetid);
        if (ds && ds instanceof nexacro.Dataset)
        {
            var constvar = ds._constVars[col];

            if (constvar)
            {
                var idx = ds.getColIndex(constvar.id);

               if (propid == "id")
                {
                    if (ds.getConstColumn(propval))
                    {
                        return false;
                    }      

                    ds.updateColID(idx, propval);
                }
                else if (propid == "type")
                {
                    // type에 따른 api attach
                    ds._updateColType(idx, propval);
                }
                else if (propid == "value")
                {
                    constvar[propid] = propval;

                    ds._clearAllExprs();
                    if (ds._eventstat)
                    {
                        ds.on_fire_onrowsetchanged(-1, -1, 34); //nexacro.Dataset.REASON_CHANGELAYOUT
                        var evt = new nexacro.DSColChangeEventInfo(ds, "onvaluechanged", ds.rowposition, -1, -1, "", undefined, undefined);
                        ds.on_fire_onvaluechanged(evt);
                    }
                }
                else
                {
                    constvar[propid] = propval;
                }
            }
        }
    };

    _pApplicationAccessPort.getConstColumnProperty = function (datasetid, col, propid)
    {
        // TODO
        var ds = this._getObject(datasetid);
        if (ds && ds instanceof nexacro.Dataset)
        {
            var constVar = ds.getConstColumn(col);
            if (constVar)
            {
                // constColumn의 값 외의 속성을 알수가 있나??? 내부적으로 id, value만 저장된다.
                if (constVar[propid])
                    return constVar[propid];
            }
        }
    };

    _pApplicationAccessPort.addColumn = function (datasetid, columnid, type, size, prop, sumtext, datapath)
    {
        var ds = this._getObject(datasetid);
        if (ds && ds instanceof nexacro.Dataset)
        {
            ds._addColumn(columnid, type, size, prop, sumtext, datapath);
        }
    };

    _pApplicationAccessPort.insertColumn = function (datasetid, idx, id, strtype, size, prop, text, datapath)
    {
        var ds = this._getObject(datasetid);
        if (!ds || !(ds instanceof nexacro.Dataset))
            return;

        if ((id in ds.colinfos) || (id in ds._constVars)) return -1;

        var type;
        if (strtype == undefined)
        {
            type = 1;
            strtype = "STRING";
        }
        else
        {
            type = nexacro.DataUtils._typeint[strtype.toLowerCase()];
        }

        if (type == null)
        {
            type = 1;
        }
        var checksize = (+size);
        if (checksize != checksize)
        {
            size = 256;
        }

        var newcolinfo = new nexacro.DSColumnInfo(id, strtype, type, size, prop, text, datapath, idx);
        ds.colcount++;
        
        if (ds.colinfos.insert_item(idx, id, newcolinfo) >= 0)
        {
            // 뒷 column들의 index를 변경해주어야 한다.
            var len = ds.colinfos.length;
            for (var i = idx + 1; i < len; i++)
            {
                var colinfo = ds.colinfos[i];
                colinfo._index++;
            } 

            // row 정보 정리..
            ds._adjustRowinsertColumn(idx);

            return true;
        }
        return false;
    };

    _pApplicationAccessPort.deleteColumn = function (datasetid, col)
    {
        var ds = this._getObject(datasetid);
        if (ds && ds instanceof nexacro.Dataset)
        {
            ds.deleteColumn(col);
        }
    };

    _pApplicationAccessPort.setColumnProperty = function (datasetid, col, propid, propval)
    {
        var ds = this._getObject(datasetid);
        if (ds && ds instanceof nexacro.Dataset)
        {
            // deleteColumn 메소드는 컬럼 index와 컴럼 id 모두 사용 가능.
            var colinfo = ds.getColumnInfo(col);
            if (colinfo)
            {
                var idx = ds.getColIndex(colinfo.id);

                if (propid == "id")
                {
                    if (ds.getColumnInfo(propval))
                    {
                        return false;
                    }      

                    ds.updateColID(idx, propval);
                }
                else if (propid == "type")
                {
                    // type에 따른 api attach
                    ds._updateColType(idx, propval);
                }
                else
                {
                    colinfo[propid] = propval;
                }
            }
        }
    };

    _pApplicationAccessPort.getColumnProperty = function (datasetid, col, propid)
    {
        var ds = this._getObject(datasetid);
        if (ds && ds instanceof nexacro.Dataset)
        {
            // deleteColumn 메소드는 컬럼 index와 컴럼 id 모두 사용 가능.
            var colinfo = ds.getColumnInfo(col);
            if (colinfo)
            {
                if (colinfo[propid])
                    return colinfo[propid];
            }
        }
    };

    _pApplicationAccessPort.addRow = function (datasetid)
    {
        var ds = this._getObject(datasetid);
        if (ds && ds instanceof nexacro.Dataset)
        {
            ds.addRow();
        }
    };

    _pApplicationAccessPort.insertRow = function (datasetid, index)
    {
        var ds = this._getObject(datasetid);
        if (ds && ds instanceof nexacro.Dataset)
        {
            ds.insertRow(index);
        }
    };

    _pApplicationAccessPort.deleteRow = function (datasetid, row)
    {
        var ds = this._getObject(datasetid);
        if (ds && ds instanceof nexacro.Dataset)
        {
            ds.deleteRow(row);
        }
    };

    _pApplicationAccessPort.setColumn = function (datasetid, row, col, value)
    {
        var ds = this._getObject(datasetid);
        if (ds && ds instanceof nexacro.Dataset)
        {
            return ds.setColumn(row, col, value);
        }

        return false;
    };

    _pApplicationAccessPort.getColumn = function (datasetid, row, col)
    {
        var ds = this._getObject(datasetid);
        if (ds && ds instanceof nexacro.Dataset)
        {
            return ds.getColumn(row, col);
        }

        return false;
    };

    _pApplicationAccessPort.GetJsonByDataPath = function (datasetid)
    {
        var ds = this._getObject(datasetid);
        if (ds && ds instanceof nexacro.Dataset)
        {            
            if (ds._binddataobject && ds._binddataobject instanceof nexacro.DataObject)
            {                                
                var pathrootobj = ds._binddataobject.getObjectByPath(ds.dataobjectpath);
                if (pathrootobj)
                {
                    return JSON.stringify(pathrootobj);
                }
            }                
        }

        return "";
    };

    _pApplicationAccessPort.GetJsonByString = function (jsonstr, jsonpath)
    {
        if (jsonstr)
        {
            var jsonobj = JSON.parse(jsonstr);
            if (jsonobj)
            {
                var pathrootobj = nexacro._JSONPath(jsonobj, jsonpath);

                if (pathrootobj)
                {
                    return JSON.stringify(pathrootobj);
                }
            }
        }            

        return "";
    };

    // 14/07/02 박현진 : Frameset 인터페이스 추가
    _pApplicationAccessPort.createFrame = function (classname, parentid, frameid)
    {
        var parent;
        if (parentid)
        {
            parent = this._getObject(parentid);
        }

        if (!parent)
        {
            parent = _application;
        }

        if (!frameid || frameid.length == 0)
        {
            frameid = this._getNextChildID(parent, classname);
        }

        var classnameobj = eval(classname);
        if (classnameobj)
        {
            var obj = null;

            if (classname == "MainFrame")
            {
                // 이미 mainframe이 있는 경우?
                if (_application.mainframe)
                {
                    var mainframe = _application.mainframe;
                    mainframe._on_close();
                    mainframe._destroy();
                    delete _application[frameid];
                    _application.all.delete_item(frameid);
                    _application.mainframe = null;
                }

                obj = _application.createMainFrame(frameid, null, null, null, null, null, null, null, parent);

                //obj.createBodyFrame();
                obj.createComponent();
                obj.on_created();

                // mainframe은  addChild를 하지않음.
                return frameid;
            }
            else if (classname == "ChildFrame")
            {
                // childframe는 formurl 이 들어간다.
                obj = new classnameobj(frameid, null, null, null, null, null, null, "", parent);
            }
            else
            {
                // 그 외 frame들
                obj = new classnameobj(frameid, null, null, null, null, null, null, parent);
            }
            obj.show();
            parent.addChild(frameid, obj);

            return frameid;
        }
    };

    _pApplicationAccessPort.deleteFrame = function (frameid)
    {
        var frame = this._getObject(frameid);
        var parent = frame.parent;
        if (frame && parent)
        {
            if (!parent.removeChild)
            {
                trace("* no method: 'removeChild' / " + parent);
                return;
            }
            parent.removeChild(frame.name);
            return frame.destroyComponent();
        }
    };

    _pApplicationAccessPort.moveFrame = function (frameid, left, top, width, height, right, bottom)
    {
        var frame = this._getObject(frameid);
        if (frame)
        {
            return frame.move(left, top, width, height, right, bottom);
        }
    };

    _pApplicationAccessPort.createInvisibleObject = function (classname, objid, parentid)
    {
        // Dataset
        // Variable
        // Object
        // Image

        if (!objid || objid.length == 0)
        {
            objid = this._getNextChildID(this, classname);
        }

        var classnameobj = eval(classname);
        if (classnameobj)
        {
            var obj = new classnameobj(objid, _application);
            if (obj instanceof nexacro.Dataset)
            {
                obj._setContents("");
                _application._addDataset(obj.name, obj);
            }
                /*
                else if (...)
                {
                    _application._addImage(...);
                }
                */
            else
            {
                _application._addObject(obj.name, obj);
            }

            return obj.name;
        }
    };

    // 150613 박현진 : contents load
    _pApplicationAccessPort.setContents = function (compid, contents, jsonval)
    {
        //trace("_pDesignForm.setContents(" + compid + ", " + contents + ")");
        var obj = this._getObject(compid);
        if (!obj || !obj._setContents)
            return;

        var contents_val = contents;
        if (jsonval === true && !nexacro._isNull(contents) && contents.length > 0)
        {
            eval("contents_val = " + contents);
        }
        
        obj._setContents(contents_val);
    };

    _pApplicationAccessPort.deleteObject = function (objid)
    {
        // datasets = array
        // all = collection
        // images = collection
        if (_application._datasets[objid])
        {
            var idx = _application._datasets.indexOf(objid);
            _application._datasets.splice(idx, 1);

            delete _application[objid];
            _application.all.delete_item(objid);
        }
        else
        {
            delete _application[objid];
            _application.all.delete_item(objid);
        }
    };

    _pApplicationAccessPort.getProperty = function (objid, propid, pseudo)
    {
        var obj = this._getObject(objid);
        if (obj)
        {
            return nexacro._getProperty(obj, propid, pseudo);
        }
        else
        {
            trace("_pApplicationAccessPort.getProperty( " + objid + ", " + propid + ", " + pseudo + " )");
            trace("> obj is null!");
        }
    };
    _pApplicationAccessPort.getStyleProperty = function (objid, propid)
    {
        var obj = this._getObject(objid);
        if (obj)
        {
            return nexacro._getStyleProperty(obj, propid);
        }
        else
        {
            trace("_pApplicationAccessPort.getStyleProperty( " + objid + ", " + propid + " )");
            trace("> obj is null!");
        }
    };

    _pApplicationAccessPort.getComputedStylePropertiesWithCallback = function (objid, propids, ret_handle)
    {
        var obj = this._getObject(objid);
        if (obj)
        {
            return nexacro._getComputedStylePropertiesWithCallback(obj, propids, ret_handle);
        }
        else
        {
            trace("_pApplicationAccessPort.getComputedStylePropertiesWithCallback( " + objid + ", " + propids + ", " + ret_handle + " )");
            trace("> obj is null!");
        }

        return "";
    };

    _pApplicationAccessPort.setProperty = function (objid, propid, propval, pseudo)
    {
        var obj = this._getObject(objid);
        if (obj)
        {
            if (propid == "id")
                propid = "name";

            // frame의 id 변경. _application.frame의 set name 
            if (propid == "name")
            {
                var parent_obj = obj.parent;
                var old_id = obj.name;
                var new_id = propval;

                if (nexacro._isNull(parent_obj)) return;

                // all
                var idx = parent_obj.all.indexOf(old_id);
                if (idx < 0) return;
                parent_obj.all.update_id(idx, new_id);

                if (parent_obj._frames)
                {
                    // _frames
                    idx = parent_obj._frames.indexOf(old_id);
                    if (idx < 0) return;
                    parent_obj._frames.update_id(idx, new_id);
                }

                // [id]
                delete parent_obj[old_id];
                parent_obj[new_id] = obj;

                obj.set_id(new_id);
                obj.name = new_id;

                return obj[propid];
            }

            var ret = nexacro._setProperty(obj, propid, propval, pseudo);
            if (ret === true)
            {
                if (obj["design_get_" + propid])
                {
                    return obj["design_get_" + propid]();
                }
                else
                {
                    return obj[propid];
                }
            }
            else /*if (ret === null)*/
            {
                return;
            }
        }
    };


    _pApplicationAccessPort.setInitValueID = function (objid, value)
    {
        var obj = this._getObject(objid);
        if (obj)
        {
            nexacro._setInitValueID(obj, value);
        }
    };


    _pApplicationAccessPort.getBorderWidth = function (objid)
    {
        var obj = this._getObject(objid);
        return nexacro._getBorderWidth(obj);
    };
    

    _pApplicationAccessPort._getObject = function (objid)
    {
        if (!objid || objid == "this" || objid == "_application")
        {
            return _application;
        }

        if (objid == "env" || objid == "Environment")
        {

            return nexacro.getEnvironment();
        }

        // 140702 박현진 : frame 찾기
        var obj = eval("_application." + objid);
        if (obj)
            return obj;

        return _application.all.get_item(objid);
    };

    _pApplicationAccessPort._getNextChildID = function (parent, classname)
    {
        if (!parent || !classname)
        {
            trace("parent or classname is missing");
            return "error";
        }

        var nextnum = 0;
        var nextid;
        while (true)
        {
            nextid = classname + ((nextnum < 10) ? "0" : "") + nextnum;
            if (!parent[nextid])
                break;
            nextnum++;
        }

        return nextid;
    };

    _pApplicationAccessPort.setCssList = function (csslist)
    {
        // csslist = ["xxx.xtheme", "aaa.css", "bbb.css"]
        //trace("_pApplicationAccessPort.setCssList( " + csslist + " )");

        // DesignForm이하 모든 컴포넌트의 style을 초기화
        this._clearStyles();

        // csslist의 css를 모두 로드

        // ver2; Cache
        _application._css_context_list = [];
        _application._find_csslist = []; // context._css_selectors의 array
        
        _application._load_manager.localList = [];
        _application._load_manager.localCnt = 0;

        for (var i = 0; i < csslist.length; i++)
        {
            var cssurl = csslist[i];
            var css_context = nexacro._getDesignCssContext(cssurl);
            if (!css_context)
            {
                trace("> Not Cached: " + cssurl);
                css_context = new nexacro.DesignCssContext(cssurl);
                if (cssurl.indexOf(".xtheme") >= 0)
                    nexacro._loadTheme2(cssurl, css_context);
                else
                    nexacro._loadCss2(cssurl, css_context);

                nexacro._addDesignCssContext(css_context);
            }
            else
            {
                trace("> Cached: " + cssurl);
            }

            // insert first (find csslist는 parent로 탐색하며 push 함)
            _application._css_context_list.push(css_context);
            _application._find_csslist.unshift(css_context._css_selectors);
        }

        this._refreshStyles();

        nexacro.__notifyToNexacroStudio(nexacro._design_notify_refresh_properties, null);
    };

    _pApplicationAccessPort._clearStyles = function (comp)
    {
        if (comp === undefined)
            comp = _application.mainframe;
        else if (comp === null)
            return;

        if (comp instanceof nexacro.MainFrame)
        {
            _application._find_csslist = null;
            _application._cssfinder_cache = {};

            this._clearStyles(comp.frame);
        }
        else if (comp instanceof nexacro.FrameSet)
        {
            var len = comp.frames.length;
            for (var i = 0; i < len; i++)
            {
                this._clearStyles(comp.frames[i]);
            }
        }
    };

    _pApplicationAccessPort._refreshStyles = function (comp)
    {
        if (comp === undefined)
            comp = _application.mainframe;
        else if (comp === null)
            return;

        // 재귀호출
        if (comp instanceof nexacro.MainFrame)
        {
            this._refreshStyles(comp.frame);
        }
        else if (comp instanceof nexacro.FrameSet)
        {
            var len = comp.frames.length;
            for (var i = 0; i < len; i++)
            {
                this._refreshStyles(comp.frames[i]);
            }
        }

        // TODO : Frame 미리보기 지원시 subcontrol 영역도 css refresh
        /*
        var subcontrols = nexacro.DesignForm.prototype._getSubControlList.call(comp, comp);
        var len = subcontrols.length;
        for (var i = 0; i < len; i++)
        {
            var control = subcontrols[i];
            this._refreshStyles(control);
        }
        */
    };

    // 삭제예정
    _pApplicationAccessPort._loadTheme = nexacro._emptyFn;
    _pApplicationAccessPort._loadCss = nexacro._emptyFn;
    _pApplicationAccessPort._on_load_thememodule = nexacro._emptyFn;
    _pApplicationAccessPort._on_load_cssmodule = nexacro._emptyFn;




    // 특정 css / theme 파일이 갱신된 경우 호출됨.
    // context cache에서 제거하고 다시 로드
    _pApplicationAccessPort.updateCSS = function (url)
    {
        // 신규코드 2015-04-16
        nexacro._updateDesignCssContext(url);
    };


    _pApplicationAccessPort.addService = function (prefixid, type, url, cachelevel, codepage, language, version, communication)
    {
        nexacro._addService(prefixid, type, url, cachelevel, codepage, language, version, communication);

        //var service = new nexacro.ServiceItem(prefixid, type, url, cachelevel, codepage, language, version, communication);
        //_application.services.add(prefixid, service);
        //var env = nexacro.getEnvironment();
        //trace("add Service " + prefixid + " : " + env.services[prefixid]);
    };

    _pApplicationAccessPort.deleteService = function (prefixid)
    {
        nexacro._removeService(prefixid);

        //var service = _application.services[prefixid];
        //if (service)
        //{
        //    trace("delete Service " + prefixid + " : " + _application.services[prefixid]);
        //    _application.services.delete_item(prefixid);
        //    delete service;
        //}
    };

    _pApplicationAccessPort.changeService = function (prefixid, propid, propval)
    {
        var env = nexacro.getEnvironment();

        var service = env.services[prefixid];
        if (service)
        {
            // trace("change Service " + prefixid + "[" + propid + "] : " + service[propid] + " to " + propval);

            if (propid == "prefixid")
            {
                var idx = env.services.indexOf(prefixid);
                if (idx < 0) return;
                env.services.update_id(idx, propval);

                service.prefixid = propval;
            }
            else
            {
                service[propid] = propval;
            }
        }
    };


    _pApplicationAccessPort.getFieldUserAttrList = function (filepath, src_script)
    {
        return nexacro.DesignForm.prototype.getFieldUserAttrList(filepath, src_script);
    };

    _pApplicationAccessPort.getObjectConstructorArguments = function (classname)
    {
        var argument;
        var fnConstructor = nexacro._executeGlobalEvalStr(classname);

        if (fnConstructor)
        {
            var constructor = fnConstructor.toString();
            var strbegin = constructor.indexOf("(") + 1;
            var strend = constructor.indexOf(")");
            argument = constructor.substring(strbegin, strend);
        }

        return argument;
    };

    delete _pApplicationAccessPort;


    //==============================================================================
    // nexacro.FormAccessPort
    //==============================================================================
    nexacro.FormAccessPort = function (target)
    {
        this.target = target;
        this.notify_handle = null;
    };

    var _pFormAccessPort = nexacro._createPrototype(nexacro.Object, nexacro.FormAccessPort);
    nexacro.FormAccessPort.prototype = _pFormAccessPort;

    /////////////////////////////////////////////////////////////////////////////////////////
    _pFormAccessPort.destroy = function ()
    {
        if (this.target)
        {
            this.target.destroy();
            this.target = null;
        }
    };

    _pFormAccessPort.reloadForm = function ()
    {
        return this.target.reloadForm();
    };

    _pFormAccessPort.loadedForm = function ()
    {
        return this.target.loadedForm();
    };

    // EasyUI - view generation
    _pFormAccessPort.getViewTemplateResult = function (filepath, src_script, fieldarray, contents, generationattr) {
        return this.target.getViewTemplateResult(filepath, src_script, fieldarray, contents, generationattr);
    };

    _pFormAccessPort.getViewTemplateGenerationAttrList = function (filepath, src_script) {
        return this.target.getViewTemplateGenerationAttrList(filepath, src_script);
    };

    _pFormAccessPort._getTriggerType = function ()
    {
        return this.target._getTriggerType();
    };
    // EasyUI 

    _pFormAccessPort.setExtraInfo = function (info)
    {
        return this.target.setExtraInfo(info);
    };

    _pFormAccessPort.setInspectorHandle = function (handle)
    {
        this.notify_handle = handle;
    };

    _pFormAccessPort.getObjectList = function (type)
    {
        var form = this.target;
        var len = form.all.length;
        var objlist = [];
        for (var i = 0; i < len; i++)
        {
            var obj = form.all[i];
            if (obj && obj._type_name == type)
                objlist.push(obj);
        }
        return objlist;
    };


    _pFormAccessPort.getObjectCount = function (type)
    {
        var form = this.target;
        var len = form.all.length;
        var cnt = 0;
        for (var i = 0; i < len; i++)
        {
            var obj = form.all[i];
            if (obj && obj._type_name == type)
                cnt++;
        }
        return cnt;
    };

    _pFormAccessPort.getObjectByID = function (type, objid)
    {
        //	trace("FormAccessPort.getObjectByID:" + objid)
        var evalstr = objid;
        var obj = evalstr.replace("this._inner_form", "this._inner_form.target");
        
        if (obj && obj._type_name == type)
            return obj;
    };

    _pFormAccessPort.getObjectByIndex = function (type, index)
    {
        
    };

    _pFormAccessPort.getVariant = function (varid)
    {
        var evalstr = varid;
        evalstr.replace("this._inner_form", "this._inner_form.target");
        return eval(evalstr);
    };

    _pFormAccessPort.notifySelect = function (command, obj)
    {

    };

    _pFormAccessPort._setTarget = function (target)
    {
        this.target = target;
    };

    _pFormAccessPort.getObject = function ()
    {
        return this.target;
    };

    _pFormAccessPort.createComponent = function (classname, parentid, left, top, width, height, compid, new_create)
    {
        return this.target.createComponentByRect(classname, parentid, left, top, width, height, compid, new_create);
    };

    _pFormAccessPort.createComponentCSSPreview = function (classname, controlclassname, issubcontrol, parentid, left, top, width, height, compid, props, values, new_create, show)
    {
        return this.target.createComponentCSSPreview(classname, controlclassname, issubcontrol, parentid, left, top, width, height, compid, props, values, new_create, show);
    };

    _pFormAccessPort.showComponentCSSPreview = function (compid, show)
    {
        return this.target.showComponentCSSPreview(compid, show);
    };

    _pFormAccessPort.createFrame = function (classname, parentid, frameid)
    {
        return this.target.createFrame(classname, parentid, frameid);
    };

    // 14/06/03 Tab 박현진 : Create 인터페이스 추가
    _pFormAccessPort.createTabpage = function (classname, parentid, compid)
    {
        return this.target.createTabpage(classname, parentid, compid);
    };

    // 14/05/28 박현진 : 인터페이스 추가
    _pFormAccessPort.createInvisibleObject = function (classname, objid, parentid)
    {
        return this.target.createInvisibleObject(classname, objid, parentid);
    };

    _pFormAccessPort.getChildList = function (parentid)
    {
        return this.target.getChildList(parentid);
    };

    _pFormAccessPort.deleteObject = function (compid)
    {
        return this.target.deleteObject(compid);
    };

    _pFormAccessPort.setProperty = function (compid, propid, propval, pseudo)
    {
        // tool에서 처리
        // 이쪽으로 빠져나오는 케이스가 있나?
        //         var obj = this.target._getObject(compid);
        //         var sublayoutmode_info = this.target._findSubLayoutMode(obj);
        // 
        //         if (sublayoutmode_info && (propid == "url" || propid == "positionstep"))
        //             return;

        return this.target.setProperty(compid, propid, propval, pseudo);
    };

    // 140523 박현진
    // Layout의 Style 적용
    _pFormAccessPort.appendInlineStyleValue = function (base_value, append_value)
    {
        return this.target.appendInlineStyleValue(base_value, append_value);
    };

    _pFormAccessPort.setLayoutStyle = function (compid, base_value, layout_value, sublayout_value)
    {
        return this.target.setLayoutStyle(compid, base_value, layout_value, sublayout_value);
    };

    _pFormAccessPort.getProperty = function (compid, propid, pseudo)
    {
        return this.target.getProperty(compid, propid, pseudo);
    };

    _pFormAccessPort.getProperties = function (compids, propids)
    {
        return this.target.getProperties(compids, propids);
    };
    
    _pFormAccessPort.getStyleProperty = function (compid, propid)
    {
        return this.target.getStyleProperty(compid, propid);
    };

    _pFormAccessPort.getStyleProperties = function (compids, propids)
    {
        return this.target.getStyleProperties(compids, propids);
    };

    _pFormAccessPort.getComputedStyles = function (compid, args)
    {
        return this.target.getComputedStyles(compid, args);
    };

    _pFormAccessPort.getComputedStylePropertiesWithCallback = function (compid, propids, ret_handle)
    {
        return this.target.getComputedStylePropertiesWithCallback(compid, propids, ret_handle);
    };

    _pFormAccessPort.getInlineStyleProperty = function (compid, propid, pseudo)
    {
        return this.target.getInlineStyleProperty(compid, propid, pseudo);
    };

    _pFormAccessPort.getCurrentStyleValue = function (compid, propid, pseudo)
    {
        return this.target.getCurrentStyleValue(compid, propid, pseudo);
    };

    _pFormAccessPort.moveComponentByRect = function (compid, left, top, width, height, resize)
    {
        this.target.moveComponentByRect(compid, left, top, width, height, resize);
    };

    _pFormAccessPort.moveComponentByIndex = function (compid, moveidx)
    {
        this.target.moveComponentByIndex(compid, moveidx);
    };

    _pFormAccessPort.moveComponent = function (compid, left, top, width, height, right, bottom)
    {
        this.target.moveComponent(compid, left, top, width, height, right, bottom);
    };

    _pFormAccessPort.resizeComponent = function (compid, width, height)
    {
        this.target.resizeComponent(compid, width, height);
    };

    _pFormAccessPort.swapPositionUnit = function (compid, propid, unit)
    {
        this.target.swapPositionUnit(compid, propid, unit);
    };

    _pFormAccessPort.preChangePositionBase = function (compid, propid, targetcompid)
    {
        return this.target.preChangePositionBase(compid, propid, targetcompid);
    };

    _pFormAccessPort.refreshPosition = function (compid)
    {
        this.target.refreshPosition(compid);
    };

    _pFormAccessPort.fitToContents = function (compid, type)
    {
        return this.target.fitToContents(compid, type);
    };    

    _pFormAccessPort.hitTestByPoint = function (x, y, rootcompid, recursive)
    {
        return this.target.hitTestByPoint(x, y, rootcompid, recursive);
    };

    _pFormAccessPort.hitTestByRect = function (left, top, width, height, rootcompid, type)
    {
        return this.target.hitTestByRect(left, top, width, height, rootcompid, type);
    };

    _pFormAccessPort.hitTestCreateRectByPoint = function (x, y, rootcompid, recursive)
    {
        return this.target.hitTestCreateRectByPoint(x, y, rootcompid, recursive);
    };

    _pFormAccessPort.hitTestCreateRectByRect = function (left, top, width, height, rootcompid)
    {
        return this.target.hitTestCreateRectByRect(left, top, width, height, rootcompid);
    };

    _pFormAccessPort.hitTestTemplateAreaByRect = function (left, top, width, height, rootcompid)
    {
        return this.target.hitTestTemplateAreaByRect(left, top, width, height, rootcompid);
    };

    _pFormAccessPort.hitTestTemplateAreaNameByPoint = function (x, y, rootcompid) {
        return this.target.hitTestTemplateAreaNameByPoint(x, y, rootcompid);
    };

    _pFormAccessPort.hitTestCellInfoByPoint = function (x, y, rootcompid, recursive) {
        return this.target.hitTestCellInfoByPoint(x, y, rootcompid, recursive);
    };

    // 140617 박현진 : tracker hittest 용
    _pFormAccessPort.hitTestTracker = function (x, y, rootcompid, compid, trackersize)
    {
        return this.target.hitTestTracker(x, y, rootcompid, compid, trackersize);
    };

    _pFormAccessPort.hitTestforFormbase = function (x, y, rootcompid)
    {
        return this.target.hitTestforFormbase(x, y, rootcompid);
    };

    _pFormAccessPort.hitTestParentByPoint = function (x, y, rootcompid)
    {
        return this.target.hitTestParentByPoint(x, y, rootcompid);
    };

    _pFormAccessPort.hitTestParentByRect = function (left, top, width, height, rootcompid)
    {
        return this.target.hitTestParentByRect(left, top, width, height, rootcompid);
    };

    _pFormAccessPort.setScroll = function (horz, size)
    {
        return this.target.setScroll(horz, size);
    };

    _pFormAccessPort.getComponentRect = function (compid, isroot)
    {
        return this.target.getComponentRect(compid, isroot);
    };

    _pFormAccessPort.getClientRect = function (compid)
    {
        return this.target.getClientRect(compid);
    };

    _pFormAccessPort.drawWindow = function ()
    {
        return this.target.drawWindow();
    };

    _pFormAccessPort.setDotSize = function (measure, size)
    {
        this.target.setDotSize(measure, size);
    };

    _pFormAccessPort.setDotStyle = function (style)
    {
        this.target.setDotStyle(style);
    };

    _pFormAccessPort.setDotVisible = function (visible)
    {
        this.target.setDotVisible(visible);
    };

    _pFormAccessPort.setPreviewMode = function (is_previewmode)
    {
        this.target.setPreviewMode(is_previewmode);
    };

    _pFormAccessPort.showPreviewContents = function (compid)
    {
        this.target.showPreviewContents(compid);
    };

    _pFormAccessPort.updatePreviewPosition = function (compid)
    {
        this.target.updatePreviewPosition(compid);
    };
    _pFormAccessPort.updatePreviewStyle = function (compid)
    {
        this.target.updatePreviewStyle(compid);
    };
    _pFormAccessPort.showCssDesignContents = function (compid, objpath, status, statusvalue, userstatus, userstatusvalue)
    {
        this.target.showCssDesignContents(compid, objpath, status, statusvalue, userstatus, userstatusvalue);
    };
    _pFormAccessPort.getFormBitmap = function ()
    {
        return this.target.getFormBitmap();
    };

    _pFormAccessPort.setBitmapSize = function (width, height)
    {
        return this.target.setBitmapSize(width, height);
    };

    _pFormAccessPort.setFormSize = function (width, height)
    {
        return this.target.setFormSize(width, height);
    };

    _pFormAccessPort.DrawOffset = function (offsetx, offsety)
    {
        return this.target.DrawOffset(offsetx, offsety);
    };

    _pFormAccessPort.setDesignWindowBackground = function (color, innerform)
    {
        return this.target.setDesignWindowBackground(color, innerform);
    };

    _pFormAccessPort.setRoot = function (left, top)
    {
        return this.target.setRoot(left, top);
    };

    _pFormAccessPort.setDesignZoom = function (scale)
    {
        return this.target.setDesignZoom(scale);
    };

    _pFormAccessPort.getDesignZoom = function (scale)
    {
        return this.target.getDesignZoom(scale);
    };

    _pFormAccessPort.getBorderWidth = function (compid)
    {
        return this.target.getBorderWidth(compid);
    };
    
    _pFormAccessPort.getOverlapComponent = function (compid)
    {
        return this.target.getOverlapComponent(compid);
    };

    _pFormAccessPort.getBindableList = function ()
    {
        return this.target.getBindableList();
    };
       
    _pFormAccessPort.setName = function (compid, propval)
    {
        return this.target.setName(compid, propval);
    };

    //hykim
    _pFormAccessPort.attachDesignWindow = function (handle)
    {
        var win = this.target._getWindow();
        if (win && win.handle)
        {
            nexacro.__attachDesignWindowHandle(win.handle, handle);
        }
    };

    _pFormAccessPort.detachDesignWindow = function ()
    {
        var win = this.target._getWindow();
        if (win && win.handle)
            nexacro.__detachDesignWindowHandle(win.handle);
    };

    _pFormAccessPort.setOverflowClip = function (overflowclip)
    {
        this.target.setOverflowClip(overflowclip);
    };

    _pFormAccessPort.showSubLayout = function (compid, bShow, positionstep)
    {
        this.target.showSubLayout(compid, bShow, positionstep);
    };

    _pFormAccessPort.moveComponentToFront = function (compid)
    {
        this.target.moveComponentToFront(compid);
    };

    _pFormAccessPort.moveComponentToPrev = function (compid)
    {
        this.target.moveComponentToPrev(compid);
    };

    _pFormAccessPort.moveComponentToNext = function (compid)
    {
        this.target.moveComponentToNext(compid);
    };

    _pFormAccessPort.moveComponentToBack = function (compid)
    {
        this.target.moveComponentToBack(compid);
    };

    _pFormAccessPort.setZorder = function (compid, zorder)
    {
        this.target.setZorder(compid, zorder, true);
    };
    
    _pFormAccessPort.setPseudo = function (compid, pseudo)
    {
        return this.target.setPseudo(compid, pseudo);
    };

    _pFormAccessPort.getPseudo = function (compid)
    {
        // get current??
        return this.target.getPseudo(compid);
    };

    _pFormAccessPort.addLayout = function (compid, layoutname, width, height, screenid)
    {
        return this.target.addLayout(compid, layoutname, width, height, screenid);
    };

    _pFormAccessPort.removeLayout = function (compid, layoutname)
    {
        return this.target.removeLayout(compid, layoutname);
    };

    _pFormAccessPort.removeAllLayout = function (compid)
    {
        return this.target.removeAllLayout(compid);
    };

    _pFormAccessPort.setLayoutProperty = function (compid, layoutname, propid, propval)
    {
        return this.target.setLayoutProperty(compid, layoutname, propid, propval);
    };

    _pFormAccessPort.getLayoutProperty = function (compid, layoutname, propid)
    {
        return this.target.getLayoutProperty(compid, layoutname, propid);
    };

    _pFormAccessPort.refreshLayoutContents = function (compid)
    {
        return this.target.refreshLayoutContents(compid);
    };

    _pFormAccessPort.refreshLayoutAllContents = function ()
    {
        return this.target.refreshLayoutAllContents();
    };

    _pFormAccessPort.changeLayout = function (compid, layoutname)
    {
        return this.target.changeLayout(compid, layoutname);
    };

    _pFormAccessPort.getCurrentLayout = function (compid)
    {
        return this.target.getCurrentLayout(compid);
    };

    _pFormAccessPort.refreshLayout = function (compid)
    {
        this.target.refreshLayout(compid);
    };

    _pFormAccessPort.recalcLayout = function (compid)
    {
        this.target.recalcLayout(compid);
    };

    _pFormAccessPort.recalcDesignLayout = function () {
        this.target.recalcDesignLayout();
    };

    _pFormAccessPort.getTableLayoutTemplateInfo = function (compid)
    {
        return this.target.getTableLayoutTemplateInfo(compid);
    };

    _pFormAccessPort.refreshLinkedUrl = function (compid)
    {
        this.target.refreshLinkedUrl(compid);
    };

    _pFormAccessPort.getControlElementHandle = function (compid)
    {
        return this.target.getControlElementHandle(compid);
    };

    _pFormAccessPort.getComponentImageeBase64String = function (compid)
    {
        return this.target.getComponentImageeBase64String(compid);
    };

    // 140529 박현진 : contents load
    _pFormAccessPort.setContents = function (compid, contents, jsonval)
    {
        var contents_val = contents;
        if (jsonval === true && !nexacro._isNull(contents) && contents.length > 0)
        {
            eval("contents_val = " + contents);
        }

        this.target.setContents(compid, contents_val);
    };
    _pFormAccessPort.makeContentsString = function (compid)
    {
        return this.target.makeContentsString(compid);
    };

 // 190227 조아름 : //[RP:83525]LiteDB Statement Parameter 처리 - parameters Setting
    _pFormAccessPort.setParameters = function (compid, parameters) {
        var params = [];
        if (!nexacro._isNull(parameters) && parameters.length > 0) {
            var arrParam = [];
            eval("arrParam = " + parameters);

            for (var i = 0; i < arrParam.length; i++) {
                var name = arrParam[i].name;
                var type = "string";
                var value = arrParam[i].value;
                var param = new nexacro.LiteDBParameter(name, type, value);
                if (!nexacro._isNull(param)) {
                    params.push(param);
                }
            }
        }
        this.target.setParameters(compid, params);
    };
    
    _pFormAccessPort.setFormats = function (compid, contents)
    {
        this.target.setFormats(compid, contents);
    };
    _pFormAccessPort.makeFormatString = function (compid)
    {
        return this.target.makeFormatString(compid);
    };

    // 140602 박현진 : innerdataset load
    _pFormAccessPort.setInnerDataset = function (compid, value, extern, propid)
    {
        this.target.setInnerDataset(compid, value, extern, propid);
    };

    _pFormAccessPort.setInitValueID = function (compid, value)
    {
        this.target.setInitValueID(compid, value);
    };

    _pFormAccessPort.callDesignMethod = function (compid, methodname)
    {
        return this.target.callDesignMethod(compid, methodname);
    };

    // 140618 박현진 : Tab 예외처리
    _pFormAccessPort.setActiveTabpage = function (compid, index)
    {
        this.target.setActiveTabpage(compid, index);
    };

    _pFormAccessPort.insertTabpage = function (compid, index, tabpageid)
    {
        this.target.insertTabpage(compid, index, tabpageid);
    };

    _pFormAccessPort.deleteTabpage = function (compid, index)
    {
        this.target.deleteTabpage(compid, index);
    };

    // Grid 예외 처리
    _pFormAccessPort.getGridComputedStyles = function (compid, target, type, properties)
    {
        return this.target.getGridComputedStyles(compid, target, type, properties);
    };

    // 140603 박현진 : Form Dataset Handling
    _pFormAccessPort.addConstColumn = function (datasetid, columnid, type, size, value, datapath)
    {
        nexacro.ApplicationAccessPort.prototype.addConstColumn.call(this.target, datasetid, columnid, type, size, value, datapath);
    };

    _pFormAccessPort.insertConstColumn = function (datasetid, index, columnid, type, size, value, datapath)
    {
        nexacro.ApplicationAccessPort.prototype.insertConstColumn.call(this.target, datasetid, index, columnid, type, size, value, datapath);
    };

    _pFormAccessPort.deleteConstColumn = function (datasetid, col)
    {
        nexacro.ApplicationAccessPort.prototype.deleteConstColumn.call(this.target, datasetid, col);
    };

    _pFormAccessPort.setConstColumnProperty = function (datasetid, col, propid, propval)
    {
        nexacro.ApplicationAccessPort.prototype.setConstColumnProperty.call(this.target, datasetid, col, propid, propval);
    };

    _pFormAccessPort.getConstColumnProperty = function (datasetid, col, propid)
    {
        nexacro.ApplicationAccessPort.prototype.getConstColumnProperty.call(this.target, datasetid, col, propid);
    };

    _pFormAccessPort.addColumn = function (datasetid, columnid, type, size, prop, sumtext, datapath)
    {
        nexacro.ApplicationAccessPort.prototype.addColumn.call(this.target, datasetid, columnid, type, size, prop, sumtext, datapath);
    };

    _pFormAccessPort.insertColumn = function (datasetid, index, columnid, type, size, prop, sumtext, datapath)
    {
        nexacro.ApplicationAccessPort.prototype.insertColumn.call(this.target, datasetid, index, columnid, type, size, prop, sumtext, datapath);
    };

    _pFormAccessPort.deleteColumn = function (datasetid, col)
    {
        nexacro.ApplicationAccessPort.prototype.deleteColumn.call(this.target, datasetid, col);
    };

    _pFormAccessPort.setColumnProperty = function (datasetid, col, propid, propval)
    {
        nexacro.ApplicationAccessPort.prototype.setColumnProperty.call(this.target, datasetid, col, propid, propval);
    };

    _pFormAccessPort.getColumnProperty = function (datasetid, col, propid)
    {
        nexacro.ApplicationAccessPort.prototype.getColumnProperty.call(this.target, datasetid, col, propid);
    };

    _pFormAccessPort.addRow = function (datasetid)
    {
        nexacro.ApplicationAccessPort.prototype.addRow.call(this.target, datasetid);
    };

    _pFormAccessPort.insertRow = function (datasetid, index)
    {
        nexacro.ApplicationAccessPort.prototype.insertRow.call(this.target, datasetid, index);
    };

    _pFormAccessPort.deleteRow = function (datasetid, row)
    {
        nexacro.ApplicationAccessPort.prototype.deleteRow.call(this.target, datasetid, row);
    };

    _pFormAccessPort.setColumn = function (datasetid, row, col, value)
    {
        return nexacro.ApplicationAccessPort.prototype.setColumn.call(this.target, datasetid, row, col, value);
    };

    _pFormAccessPort.getColumn = function (datasetid, row, col)
    {
        nexacro.ApplicationAccessPort.prototype.getColumn.call(this.target, datasetid, row, col);
    };

    _pFormAccessPort.GetJsonByDataPath = function (datasetid)
    {
        return nexacro.ApplicationAccessPort.prototype.GetJsonByDataPath.call(this.target, datasetid);
    };

    _pFormAccessPort.GetJsonByString = function (jsonstr, jsonpath)
    {
        return nexacro.ApplicationAccessPort.prototype.GetJsonByString.call(this.target, jsonstr, jsonpath);
    };

    // designform의 csslist를 새롭게 세팅한다.
    _pFormAccessPort.setCssList = function (csslist)
    {
        return this.target.setCssList(csslist);
    };

    _pFormAccessPort.setActive = function ()
    {
        this.target.setActive();
    };

    _pFormAccessPort.setFormBaseUrl = function (baseurl)
    {
        this.target.setFormBaseUrl(baseurl);
    };

    // css editor에 theme 경로 설정
    _pFormAccessPort.setThemeUri = function (themename)
    {
        this.target.setThemeUri(themename);
    };

    _pFormAccessPort.rearrangeLayoutContents = function (compid, default_layout)
    {
        return this.target.rearrangeLayoutContents(compid, default_layout);
    };


    delete _pFormAccessPort;


    //==============================================================================
    // DesignCssContext = 멀티테마를 위한 css context
    //==============================================================================
    if (!nexacro.DesignCssContext)
    {
        nexacro.DesignCssContext = function (url)
        {
            this._url = url;
            this._css_selectors = { _has_items: false, _has_attr_items: false };
        };

        var _pDesignCssContext = nexacro._createPrototype(nexacro.Object, nexacro.DesignCssContext);
        nexacro.DesignCssContext.prototype = _pDesignCssContext;

        delete _pDesignCssContext;
    }

    //==============================================================================
    // nexacro = global 
    //==============================================================================
    nexacro.createApplicationAccessPort = function ()
    {
        if (!_application.accessport)
            _application.accessport = new nexacro.ApplicationAccessPort(_application);
    };

    nexacro.destroyApplicationAccessPort = function ()
    {
        var app_ap = _application.accessport;
        if (app_ap)
        {
            var form_aps = app_ap._formaccessport;
            var form_aps_len = form_aps ? form_aps.length : 0;
            for (var i = form_aps_len - 1; i >= 0; i--)
            {
                var form_ap = form_aps[i].accessport;
                if (!form_ap)
                    continue;

                form_ap.destroy();
                delete form_ap;
            }

            delete _application.accessport;
            _application.accessport = null;
        }
    };

    nexacro.closeApplication = function ()
    {
        if (_application)
        {
            var mainframe = _application.mainframe;
            if (mainframe)
                mainframe._destroy();

            //_application.exit();
            nexacro._applicationExit(true);
            delete _application;
            //_application = null; // ?
        }
    };

    nexacro.getApplicationAccessPort = function ()
    {
        // [RP:85142] 19/05/29 김채리 : [201905정기][MD] Windows 10에서 module developer 에 테마 import 후 에레메시지 출력됩니다.
        // application null 체크 로직 추가
        if (_application)
        {
            return _application.accessport;
        }

        return null;
    };

    // Childframe modify
    //--------------------------------------------------------
    // -> DesignFrameBase.js 로 이동

    // Form modify
    //------------------------------------------------


    nexacro.Form.prototype.on_fire_onlayoutchanged = function (obj, eventid, curlayoutname, newlayoutname, curlayoutwidth, newlayoutwidth, curlayoutheight, newlayoutheight)
    {
        //trace(obj.name + ".on_fire_onlayoutchanged : " + curlayoutname + "->" + newlayoutname);
        if (this.onlayoutchanged && this.onlayoutchanged._has_handlers)
        {
            var evt = new nexacro.LayoutChangeEventInfo(obj, eventid, curlayoutname, curlayoutname, curlayoutwidth, newlayoutwidth, curlayoutheight, newlayoutheight);
            return this.onlayoutchanged._fireEvent(this, evt);
        }

        if (curlayoutname == null)
            return true;

        // notify to design window
        var win = this._getWindow();
        var frame = this.getOwnerFrame();
        var designform = frame.form;
        if (designform instanceof nexacro.DesignForm)
        {
            //var rootform = designform._inner_form;
            //var app_ap = _application.getApplicationAccessPort();
            //var form_ap = app_ap.getFormAccessPort(designform._url);

            // 140526 박현진 : 어떤 레이아웃으로 바뀌었는지 알아야 함        
            var extra_info = designform._getScopeName(obj) + ":" + newlayoutname;
            nexacro.__notifyToDesignWindow(win.handle, nexacro._design_notify_layoutchange, designform.id, extra_info);
        }

        return true;
    };

    // _application modify
    //----------------------------------------------------
    /*
    nexacro.Application.prototype._onHttpSystemError = function (obj, bfireevent, errorobj, errorcode, url, returncode, requesturi, locationuri)
    {
        var args = Array.prototype.slice.call(arguments, 3);
        var errormsg = this._getMsg.apply(this, args);

        if (bfireevent)
        {
            this.on_fire_onerror(obj, errorcode, errormsg, errorobj, returncode, requesturi, locationuri);
        }

        this._onFireSystemError(obj, false, errorcode, 1, errormsg, true);

        if (obj instanceof nexacro.Div)
        {
            // div http error -> notify
            var win = obj._getWindow();
            var frame = obj.getOwnerFrame();
            var designform = frame.form;
            var extra_info = designform._getScopeName(obj);

            nexacro.__notifyToDesignWindow(win._handle, nexacro._design_notify_div_httperror, designform.id, extra_info);
                    }
    };
	*/

    /*
    nexacro.CommunicationItem.prototype.on_error = function (errstatus, fireerrorcode, returncode, locationuri)
    {
        delete nexacro._CommunicationManager[this.path];

        var callbackList = this.callbackList;
        var n = callbackList.length;
        if (n > 0)
        {
            for (var i = 0; i < n; i++)
            {
                var item = callbackList[i];
                var target = item.target;
                if (target._is_alive != false)
                {
                    // 2015.03.10 neoarc; 잘못된 url 호출시 예전에 로드된 fdl의 on_create가 물려있음.
                    item.target.context.on_create = nexacro._emptyFn;

                    item.callback.call(target, this.path, errstatus, null, fireerrorcode, returncode, this.path, locationuri);
                }
            }
            callbackList.splice(0, n);
        }
        this._handle = null;
    };
	*/
    // Component modify
    //----------------------------------------------------
    
    Form = nexacro.DesignForm;

    // CompBase
    //-------------------------------------------------------------
    // -> DesignCompBase.js로 이동

    // Element Handle API modify
    //-------------------------------------------------------------
    if (nexacro._Browser == "Runtime")
    {
        if (nexacro.Element)
        {
            var _pElement = nexacro.Element.prototype;
            _pElement.setElementVisible = function (visible)
            {
                if (this.visible != visible)
                {
                    this.visible = visible;
                    var design_visible = visible;
                    var _handle = this.handle;
                    if (_handle)
                    {
                        design_visible = true;

                        ///*
                        if (this.linkedcontrol)
                        {
                            // 임시코드 하드코딩
                            if (this.linkedcontrol instanceof nexacro.Tabpage || this.linkedcontrol._is_subcontrol)
                                design_visible = visible;
                                                        
                            // [RP:91904] 2021/04/13 이인영 : Xmoudle을 설치를 한후 nexacro studio design에 생성후 propertye에서 옵션값을 변경하면 처음에는 design에서 반영되지만 두번째부터는 반영이되지 않지만 실행하면 정상적으로 반영되는 문제
                            if (nexacro._isCompositeCompElement(this))
                                design_visible = visible;    
                        }
                        else
                        {                            
                            design_visible = visible;
                        }
                        //*/
                                                
                        nexacro.__setElementHandleVisible(_handle, design_visible);
                    }

                    this._design_visible = design_visible;
                }
            };
        }

        if (nexacro.ControlElement)
        {
            var _pControlElement = nexacro.ControlElement.prototype;
            _pControlElement.setElementDisplay = function (display)
            {                
                if (this.display != display)
                {
                    this.display = display;
                    var design_visible = (display == "none" ? false : true);
                    var handle = this.handle;
                    if (handle)
                    {
                        design_visible = true;
                        if (this.linkedcontrol)
                        {
                            // 임시코드 하드코딩
                            if (this.linkedcontrol instanceof nexacro.Tabpage || this.linkedcontrol._is_subcontrol)
                                design_visible = (display == "none" ? false : true);

                            // [RP:91904] 2021/04/13 이인영 : Xmoudle을 설치를 한후 nexacro studio design에 생성후 propertye에서 옵션값을 변경하면 처음에는 design에서 반영되지만 두번째부터는 반영이되지 않지만 실행하면 정상적으로 반영되는 문제
                            if (nexacro._isCompositeCompElement(this))
                                design_visible = (display == "none" ? false : true);
                        }
                        else
                        {
                            design_visible = (display == "none" ? false : true);
                        }
                                                
                        nexacro.__setElementHandleVisible(handle, design_visible);
                    }

                    this._design_visible = design_visible;
                }
            };
        }
        //_pPluginElement.setElementPluginVisible
        //_pGridCellTextContainerElement.setElementTextVisible
        //..

        // SubLayout Editing Mode Element
        //----------------------------------------------------------------
        nexacro.SubLayoutOverlayElement = function (parent_elem)
        {
            this.parent = parent_elem;
            this.parent_elem = parent_elem;

            var client_element = new nexacro._ContainerElement(this);
            this._client_element = client_element;
        };

        var _pSubLayoutOverlayElement = nexacro._createPrototype(nexacro.ControlElement, nexacro.SubLayoutOverlayElement);
        nexacro.SubLayoutOverlayElement.prototype = _pSubLayoutOverlayElement;
        _pSubLayoutOverlayElement._type_name = "SubLayoutOverlayElement";

        _pSubLayoutOverlayElement.create = function (background)
        {
            var parent_elem = this.parent_elem;
            if (this.parent_elem && !this.handle)
            {
                var _win = this.linkedcontrol._getWindow();
                this._win_handle = _win.handle;

                this.left = 0;
                this.top = 0;
                this.width = parent_elem.width;
                this.height = parent_elem.height;
                                                            
                var _handle = this.handle = this._dest_handle = nexacro.__createControlElementHandle(this, this._win_handle, this.left, this.top, this.width, this.height, this._getElementClassName(), this.name, this._is_control);
                _handle._linked_element = this;

                this.setElementBackground(background);

                this.owner_elem = parent_elem;
                nexacro.__appendElementHandle(parent_elem.handle, _handle);

                this._refreshControl(_handle);

                var client_elem = this._client_element;
                client_elem.left = this.left;
                client_elem.top = this.top;
                client_elem.width = this.width;
                client_elem.height = this.height;

                if (this.handle && !this._client_element.handle)
                    this._client_element.create(_win);
            }
        };

        _pSubLayoutOverlayElement.destroy = function ()
        {
            if (this.handle)
            {
                nexacro.__destroyElementHandle(this.parent_elem.handle, this.handle);
                this.handle = null;

                this._client_element.destroy();
            }
        };

        _pSubLayoutOverlayElement.getContainerElement = function ()
        {
            return this._client_element;
        };

        _pSubLayoutOverlayElement.getRootWindowHandle = function ()
        {
            return this._win_handle;
        };
        delete _pSubLayoutOverlayElement;
    }
}

