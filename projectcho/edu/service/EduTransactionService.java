package com.edupack.edu.service;

import java.util.List;
import java.util.Map;


/**
 * 
 * <pre>
 * @title   Education Servlce Intreface
 *  -       
 * @package com.edupack.edu.service
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

public interface EduTransactionService {

	List<Map<String,Object>> selectTransaction(Map<String,String> searchMap);

	List<Map<String,Object>> selectDeptList();
	
	
	List<Map<String,Object>> updateData(List<Map<String,Object>> saveList);

	List<Map<String,Object>> selectPagingSample(Map<String,String> searchMap);
	List<Map<String,Object>> selectPagingSampleTotalcnt(Map<String,String> searchMap);
	
	//VO 데이터 처리(단순 참조용)
//	List<SampleVO> selectSampleVoList(SampleVO searchVO);
}
