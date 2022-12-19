
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
package com.edupack.edu.service;

import java.util.List;
import java.util.Map;

public interface ChoTransactionService {

	List<Map<String, Object>> selectCHOLogin(Map<String, String> searchMap);

	
	void updateSaveId(Map<String, String> saveId);

	
	List<Map<String, Object>> CompareID(String comId);
	
	void updateId(Map<String, String> upId);

	List<Map<String, Object>> selectfindId(Map<String, String> searchMap);


	List<Map<String, Object>> selectfindPw(Map<String, String> searchMap);


	void dnInsertWork(List<Map<String, Object>> inWork);


	List<Map<String, Object>> selectWorkAll(Map<String, String> searchMap);


	void updateWork(List<Map<String,Object>> upWork);


	List<Map<String, Object>> findWorkAll(Map<String, String> searchMap);


	List<Map<String, Object>> findWorkDetail(Map<String, String> searchMap);


	void selectNoticeSave(Map<String, String> upNt);


	


	






}
