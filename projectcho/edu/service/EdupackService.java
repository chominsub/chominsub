package com.edupack.edu.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter.spring.core.data.NexacroResult;

public interface EdupackService {
	//사원조회
	List<Map<String,Object>> selectEmpListAll();
	//변수 1개 조회'
	List<Map<String,Object>> selectEmpListParam1(String pDept);
	List<Map<String, Object>> selectEmpListParam2(Map<String,String> searchMap);
	List<Map<String, Object>> selectEmpListDs(Map<String, String> searchMap);
	List<Map<String, Object>> selectPos();
	List<Map<String, Object>> selectDept();
	List<Map<String, Object>> selectEmpListSm(Map<String, Object> codeMap);
	void saveEmpAll(List<Map<String,Object>> saveList);
	
	int selectCheckId(String pId);
	
	
	
	
	
	
	
	
	
	
	
	
	List<Map<String,Object>> selectTransaction(Map<String,String> searchMap);

	List<Map<String,Object>> selectDeptList();
	
	
	List<Map<String,Object>> updateData(List<Map<String,Object>> saveList);

	List<Map<String,Object>> selectPagingSample(Map<String,String> searchMap);
	List<Map<String,Object>> selectPagingSampleTotalcnt(Map<String,String> searchMap);
	
	
}
