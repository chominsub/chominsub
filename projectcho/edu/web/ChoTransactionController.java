/**
 * 
 * @title   Education 
 * @package com.edupack.edu.service
 * @author  CHOMINSUB
 * @since   2022. 11. 01.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜					변경자		내용
 * ============================================
 * 2022. 11. 01.	  CHOMINSUB	     최초작성
 */

package com.edupack.edu.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.edupack.edu.service.ChoTransactionService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class ChoTransactionController {
	private Logger log = LoggerFactory.getLogger(ChoTransactionController.class);
	@Resource(name = "choTransactionService")
	private ChoTransactionService choTransactionService;

	//로그인 확인하고 회원정보를 글로벌 dataset에 저장
	@RequestMapping(value = "selectCHOLogin.do") 
	public NexacroResult selectCHOLogin(@ParamVariable(name = "paramId") String cId,
			@ParamVariable(name = "paramPw") String cPw) {
		Map<String, String> searchMap = new HashMap();
		searchMap.put("CH_ID", cId);
		searchMap.put("CH_PW", cPw);
		log.debug("searchMap : " + searchMap);

		List<Map<String, Object>> resultData = choTransactionService.selectCHOLogin(searchMap);
		NexacroResult result = new NexacroResult();

		result.addDataSet("out_emp", resultData);// transaction에서 받을 이름

		return result;
	}

	//회원가입하는 기능
	@RequestMapping(value = "updateSaveId.do")
	public NexacroResult updateSaveId(@ParamDataSet(name = "in_emp") Map<String, String> saveId) {

		NexacroResult result = new NexacroResult();
		choTransactionService.updateSaveId(saveId);
		log.debug("saveList : " + saveId);

		return result;
	}

	//ID중복비교
	@RequestMapping(value = "CompareID.do")
	public NexacroResult CompareID(@ParamVariable(name = "paramId") String comId) {
		
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> resultData = choTransactionService.CompareID(comId);
		
		result.addDataSet("out_CHK", resultData);// transaction에서 받을 이름
		

		return result;
	}
	
	//개인정보 수정
	@RequestMapping(value = "updateId.do")
	public NexacroResult updateId(@ParamDataSet(name = "in_emp") Map<String, String> upId) {

		NexacroResult result = new NexacroResult();
		choTransactionService.updateId(upId);

		return result;
	}
	//ID/PW찾기
	@RequestMapping(value = "selectfindId.do")
	public NexacroResult selectfindId(@ParamVariable(name = "paramName") String fName,
			@ParamVariable(name = "paramEmail") String fEmail) {
		Map<String, String> searchMap = new HashMap();
		searchMap.put("FD_NAME", fName);
		searchMap.put("FD_EMAIL", fEmail);
		log.debug("searchMap : " + searchMap);

		List<Map<String, Object>> resultData = choTransactionService.selectfindId(searchMap);
		NexacroResult result = new NexacroResult();

		result.addDataSet("out_find", resultData);// transaction에서 받을 이름
		
		return result;
	}
	//고객이 의뢰회사코드와 제품이름 으로 검색하는 기능 
	@RequestMapping(value = "selectfindPw.do")
	public NexacroResult selectfindPw(@ParamVariable(name = "paramName") String fName,
			@ParamVariable(name = "paramId") String fId, @ParamVariable(name = "paramEmail") String fEmail) {
		Map<String, String> searchMap = new HashMap();
		searchMap.put("FD_NAME", fName);
		searchMap.put("FD_ID", fId);
		searchMap.put("FD_EMAIL", fEmail);
		log.debug("searchMap : " + searchMap);

		List<Map<String, Object>> resultData = choTransactionService.selectfindPw(searchMap);
		NexacroResult result = new NexacroResult();

		result.addDataSet("out_findPw", resultData);// transaction에서 받을 이름

		return result;
	}
	//고객이 의뢰 추가하기
	@RequestMapping(value = "dnInsertWork.do")
	public NexacroResult dnInsertWork(@ParamDataSet(name = "in_work") List<Map<String, Object>> inWork) {

		NexacroResult result = new NexacroResult();
		choTransactionService.dnInsertWork(inWork);

		return result;
	}
	
	//고객이 운송 상태를 확인하기
		@RequestMapping(value = "findWorkDetail.do")
		public NexacroResult findWorkDetail(@ParamVariable(name = "paraCode") String fwCode) {
			Map<String, String> searchMap = new HashMap();
			searchMap.put("F_CODE", fwCode);
			

			List<Map<String, Object>> resultData = choTransactionService.findWorkDetail(searchMap);
			NexacroResult result = new NexacroResult();

			result.addDataSet("out_workd", resultData);// transaction에서 받을 이름

			return result;
		}
	
	//관리자가 의뢰 조회
	@RequestMapping(value = "selectWorkAll.do") // .do 설정 파일에 지정되어 있음.위치 지정으로는http://localhost:8088/edupack_egov/ 프로젝트
												// 위치로 해주면 알아서 간다
	public NexacroResult selectWorkAll(@ParamVariable(name = "paramId") String comCode) {
		Map<String, String> searchMap = new HashMap();
		searchMap.put("COMP_ID", comCode);

		List<Map<String, Object>> resultData = choTransactionService.selectWorkAll(searchMap);

		NexacroResult result = new NexacroResult();

		result.addDataSet("out_work", resultData);// transaction에서 받을 이름

		return result;
	}

	//관리자가 의뢰 내용을 수정 및 삭제
	@RequestMapping(value = "updateWork.do")
	public NexacroResult updateWork(@ParamDataSet(name = "in_work") List<Map<String, Object>> upWork) {

		NexacroResult result = new NexacroResult();
		choTransactionService.updateWork(upWork);

		return result;
	}

	//관리자가 검색하는 기능
	@RequestMapping(value = "findWorkAll.do")
	public NexacroResult findWorkAll(@ParamVariable(name = "paramCODE") String fCode,
			@ParamVariable(name = "paramNAME") String fName,
			@ParamVariable(name = "paramCompCode") String fCompCode) {
		Map<String, String> searchMap = new HashMap();
		searchMap.put("FD_CODE", fCode);
		searchMap.put("FD_NAME", fName);
		searchMap.put("FD_COMPCODE", fCompCode);
		log.debug("searchMap : " + searchMap);

		List<Map<String, Object>> resultData = choTransactionService.findWorkAll(searchMap);
		NexacroResult result = new NexacroResult();

		result.addDataSet("out_work", resultData);// transaction에서 받을 이름

		return result;
	}

	
	//공지사항 수정
	@RequestMapping(value = "selectNoticeSave.do")
	public NexacroResult selectNoticeSave(@ParamDataSet(name = "in_notice") Map<String, String> upNt) {

		NexacroResult result = new NexacroResult();
		choTransactionService.selectNoticeSave(upNt);

		return result;
	}
	
	

	
}