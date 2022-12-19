package com.edupack.edu.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.edupack.edu.service.EdupackService;
import com.edupack.edu.service.mapper.EdupackMapper;
import com.nexacro.java.xapi.data.DataSet;


@Service("edupackService")
public class EdupackServiceImpl implements EdupackService {
	
	@Resource(name ="edupackMapper")
	private EdupackMapper edupackMapper;
	
	@Override
	public List<Map<String, Object>> selectEmpListAll() {
		// TODO Auto-generated method stub
		
		return edupackMapper.selectEmpListAll();
	}
	
	@Override
	public List<Map<String, Object>> selectEmpListParam1(String pDept) {
		// TODO Auto-generated method stub
		
		return edupackMapper.selectEmpListParam1(pDept);
	}
	@Override
	public List<Map<String, Object>> selectEmpListParam2(Map<String,String> searchMap) {
		// TODO Auto-generated method stub
		
		return edupackMapper.selectEmpListParam2(searchMap);
	}
	public List<Map<String, Object>> selectEmpListDs(Map<String,String> searchMap) {
		// TODO Auto-generated method stub
		
		return edupackMapper.selectEmpListDs(searchMap);
	}
	
	public List<Map<String, Object>> selectPos() {
		// TODO Auto-generated method stub
		
		return edupackMapper.selectPos();
	}

	public List<Map<String, Object>> selectDept() {
		// TODO Auto-generated method stub
		
		return edupackMapper.selectDept();
	}
	
	public List<Map<String, Object>> selectEmpListSm(Map<String,Object> codeMap) {
		// TODO Auto-generated method stub
		
		return edupackMapper.selectEmpListSm(codeMap);
	}

	@Override
	public void saveEmpAll(List<Map<String,Object>> saveList) {
		// TODO Auto-generated method stub
		int size = saveList.size();
		
		for(int i=0; i<size; i++) {
			
			Map<String, Object> rowData = saveList.get(i);
			if((int)rowData.get("DataSetRowType") == DataSet.ROW_TYPE_INSERTED) {
				edupackMapper.insertEmpData(rowData);
			}
			else if((int)rowData.get("DataSetRowType")== DataSet.ROW_TYPE_UPDATED){
				
				Map orgDataMap = (Map) rowData.get("DataSetSavedData");
				String orgDataId = (String) orgDataMap.get("EMPL_ID");
				rowData.put("ORG_EMPL_ID",orgDataId);
				edupackMapper.updatepData(rowData);
				
			}else if((int)rowData.get("DataSetRowType")== DataSet.ROW_TYPE_DELETED){
				edupackMapper.deleteData(rowData);
				
			}
			
		}
	}
	
	@Override
	public int selectCheckId(String pId) {
		// TODO Auto-generated method stub
		
		return edupackMapper.selectCheckId(pId);
	}
	
	@Override
	public List<Map<String,Object>> selectPagingSample(Map<String,String> searchMap) {
		return edupackMapper.selectPagingSample(searchMap);
	}

	@Override
	public List<Map<String,Object>> selectPagingSampleTotalcnt(Map<String,String> searchMap) {
		return edupackMapper.selectPagingSampleTotalcnt(searchMap);
	}

	@Override
	public List<Map<String,Object>> selectTransaction(Map<String,String> searchMap) {
		return edupackMapper.selectTransaction(searchMap);
	}
	
	@Override
	public List<Map<String,Object>> selectDeptList() {
		return edupackMapper.selectDeptList();
	}

	@Override
	public List<Map<String,Object>> updateData(List<Map<String,Object>> saveList) {
		int size = saveList.size();
		List<Map<String,Object>> result = null; 
		
		for (int i=0; i<size; i++) {
            Map<String,Object> sample = saveList.get(i);//DataSetRowType
            
            if((int)sample.get("DataSetRowType") == DataSet.ROW_TYPE_INSERTED){
            	edupackMapper.insertSampleTransacation(sample);
            }
            else if((int)sample.get("DataSetRowType") == DataSet.ROW_TYPE_UPDATED){
            	edupackMapper.updateSampleTransacation(sample);
            }
            else if((int)sample.get("DataSetRowType") == DataSet.ROW_TYPE_DELETED){
            	//eduTransactionMapper.deleteSampleTransacation(sample);
            	
            	
            	
            }
        }
		return result;
	}
}