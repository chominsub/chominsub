package com.edupack.edu.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.edupack.edu.service.EduCommService;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

/**
 * 
 * <pre>
 * @title   Education Controller
 *  -       
 * @package com.edupack.edu.web
 * <pre>
 * @author  Education
 * @since   2022. 04. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022. 04. 20.		Education	최초작성
 */

@Controller
public class EduCommController {

	private Logger log = LoggerFactory.getLogger(EduCommController.class);
	
	@Resource(name = "eduCommService")	
	private EduCommService eduCommService;

	/*
	 * 
	 * Education 공통코드 조회 Map
	 * 
	 */
	@RequestMapping(value = "selectCommCode.do")
	public NexacroResult selectCommCode(Map<String,Object> searchMap, @ParamVariable(name="codeGroup") String codeGroup){

		String[] arrGroup = codeGroup.split(",");
		searchMap.put("codeGroup", arrGroup);

    	log.debug(" >>> client param codeGroup : " + codeGroup);
		
    	List<Map<String,Object>> resultList = eduCommService.selectCommCode(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_commonCode", resultList);
		
		return result;
	}
	

    
}
