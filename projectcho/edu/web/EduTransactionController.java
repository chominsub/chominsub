package com.edupack.edu.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.edupack.edu.service.EduTransactionService;


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
public class EduTransactionController {
	
	private Logger log = LoggerFactory.getLogger(EduTransactionController.class);
	
    @Resource(name = "eduTransactionService")
    
    private EduTransactionService eduTransactionService;
    
    /**
     * 
     * <pre>
     * @desc 데이터 조회
     * 
     * @param  
     * @return NexacroResult
     * @throws 
     * </pre>
     */
    @RequestMapping(value = "transactionSelect.do")
    public NexacroResult transactionSelect(@ParamDataSet(name="dsSearch", required=false) Map<String,String> searchMap, @ParamVariable(name="NAME") String NAME) {
    	log.debug(" >>> client param searchMap : " + searchMap);
    	log.debug(" >>> client param name : " + NAME);
    	
    	searchMap.put("NAME", NAME);
    	
    	List<Map<String,Object>> resultList = eduTransactionService.selectTransaction(searchMap) ;
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList",resultList);
		return result;
	}

    @RequestMapping(value = "selectDeptList.do")
    public NexacroResult selectDeptList() {
    	log.debug(" >>> selectDeptList ");
    	    	
    	List<Map<String,Object>> resultList = eduTransactionService.selectDeptList() ;
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList",resultList);
		return result;
	}
    
    
    /**
     * 
     * <pre>
     * @desc 데이터 입력/수정/삭제
     * 
     * @param  
     * @return NexacroResult
     * @throws 
     * </pre>
     */
    @RequestMapping(value = "transactionSave.do")
    public NexacroResult transactionSave(@ParamDataSet(name="dsList", required=false) List<Map<String,Object>> saveList) {

    	NexacroResult result = new NexacroResult();
    	eduTransactionService.updateData(saveList);	
		return result;
	}
    
    /**
     * 
     * <pre>
     * @desc 데이터 조회
     * 
     * @param  
     * @return NexacroResult
     * @throws 
     * </pre>
     */
    @RequestMapping(value = "selectPagingSample.do")
    public NexacroResult selectPagingSample(@ParamDataSet(name="dsSearch", required=false) Map<String,String> searchMap) {
    	List<Map<String,Object>> resultList  = eduTransactionService.selectPagingSample(searchMap) ;
    	List<Map<String,Object>> resultList2 = eduTransactionService.selectPagingSampleTotalcnt(searchMap) ;
    	
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("dsList"      ,resultList);
		result.addDataSet("dsPagingInfo",resultList2);
		
	
		return result;
	}    
    
    /**
     * 
     * <pre>
     * @desc VO 방식 데이터 조회 (단순 참조용)
     * 
     * @param  
     * @return NexacroResult
     * @throws 
     * </pre>
    @RequestMapping(value = "/transactionSelectVoTest.do")
	public NexacroResult selectVo(@ParamDataSet(name = "ds_search", required = false) SampleVO searchVo) {

		List<SampleVO> sampleList = eduTransactionService.selectSampleVoList(searchVo);

		NexacroResult result = new NexacroResult();
		result.addDataSet("output1", sampleList);

		return result;
	}
     */
}
