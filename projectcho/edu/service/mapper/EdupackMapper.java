package com.edupack.edu.service.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("edupackMapper")
public interface EdupackMapper {
	public List<Map<String,Object>> selectEmpListAll();
	
	public List<Map<String,Object>> selectEmpListParam1(String pDept);

	public List<Map<String, Object>> selectEmpListParam2(Map<String,String> searchMap);

	public List<Map<String, Object>> selectEmpListDs(Map<String, String> searchMap);
	
	public List<Map<String,Object>> selectPos();
	public List<Map<String,Object>> selectDept();
	public List<Map<String, Object>> selectEmpListSm(Map<String,Object> codeMap);
	public	void saveEmpAll(List<Map<String,Object>> saveList);

	public void insertEmpData(Map<String, Object> rowData);

	public void updatepData(Map<String, Object> rowData);

	public void deleteData(Map<String, Object> rowData);


	public int selectCheckId(String pId);


	
	
	
	
	

	public List<Map<String,Object>> selectPagingSample(Map<String,String> searchMap);
	public List<Map<String,Object>> selectPagingSampleTotalcnt(Map<String,String> searchMap);
	
	public List<Map<String,Object>> selectTransaction(Map<String,String> searchMap);

	public List<Map<String,Object>> selectDeptList();
	
	public int updateSampleTransacation(Map<String,Object> saveList);;
	public int insertSampleTransacation(Map<String,Object> saveList);
	public int deleteSampleTransacation(Map<String,Object> saveList);
	

}

