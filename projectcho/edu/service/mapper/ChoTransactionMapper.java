
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
package com.edupack.edu.service.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("choTransactionMapper")
public interface ChoTransactionMapper {


public List<Map<String, Object>> selectCHOLogin(Map<String,String> searchMap);



public void updatepData(Map<String, String> saveId);

public List<Map<String, Object>> CompareID(String comId);


public void updateId(Map<String, String> upId);


public List<Map<String, Object>> selectfindId(Map<String, String> searchMap);

public List<Map<String, Object>> selectfindPw(Map<String, String> searchMap);


public void dnInsertWork(List<Map<String,Object>> inWork);


public void dnInsertWork(Map<String, Object> rowData);


public List<Map<String, Object>> selectWorkAll(Map<String, String> searchMap);


public void deleteWork(Map<String,Object> upWork);


public void updateWork(Map<String,Object> upWork);


public List<Map<String, Object>> findWorkAll(Map<String, String> searchMap);


public List<Map<String, Object>> findWorkDetail(Map<String, String> searchMap);



public void selectNoticeSave(Map<String, String> upNt);



}
