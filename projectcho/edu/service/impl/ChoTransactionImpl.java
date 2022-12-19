
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
package com.edupack.edu.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.edupack.edu.service.ChoTransactionService;
import com.edupack.edu.service.mapper.ChoTransactionMapper;
import com.edupack.edu.web.ChoTransactionController;
import com.nexacro.java.xapi.data.DataSet;

@Service("choTransactionService")
public class ChoTransactionImpl implements ChoTransactionService {

	private Logger log = LoggerFactory.getLogger(ChoTransactionController.class);

	@Resource(name = "choTransactionMapper")
	ChoTransactionMapper choTransactionMapper;

	@Override
	public List<Map<String, Object>> selectCHOLogin(Map<String, String> searchMap) {
		// TODO Auto-generated method stub

		return choTransactionMapper.selectCHOLogin(searchMap);
//		return null;
	}

	@Override
	public void updateSaveId(Map<String, String> saveId) {
		// TODO Auto-generated method stub
			choTransactionMapper.updatepData(saveId);
            
	}

	@Override
	public List<Map<String, Object>> CompareID(String comId) {
		// TODO Auto-generated method stub
		return choTransactionMapper.CompareID(comId);
	}
	
	@Override
	public void updateId(Map<String, String> upId) {
		// TODO Auto-generated method stub
			choTransactionMapper.updateId(upId);
            
	}
	
	
	@Override
	public List<Map<String, Object>> selectfindId(Map<String, String> searchMap) {
		// TODO Auto-generated method stub

		return choTransactionMapper.selectfindId(searchMap);
//		return null;
	}
	
	@Override
	public List<Map<String, Object>> selectfindPw(Map<String, String> searchMap) {
		// TODO Auto-generated method stub

		return choTransactionMapper.selectfindPw(searchMap);
//		return null;
	}

	
	
	@Override
	public void dnInsertWork(List<Map<String,Object>> inWork) {
		// TODO Auto-generated method stub
		int size = inWork.size();
		
		for(int i=0; i<size; i++) {
			
			Map<String, Object> rowData = inWork.get(i);
				choTransactionMapper.dnInsertWork(rowData);
			
		}
	}
	
	
	@Override
	public List<Map<String, Object>> selectWorkAll(Map<String, String> searchMap) {
		// TODO Auto-generated method stub
		
		return choTransactionMapper.selectWorkAll(searchMap);
	}
	
	
	@Override
	public void updateWork(List<Map<String,Object>> upWork) {
		// TODO Auto-generated method stub
			
			int size = upWork.size();
		
		for(int i=0; i<size; i++) {
			
				Map<String, Object> rowData = upWork.get(i);
				if((int)rowData.get("DataSetRowType")== DataSet.ROW_TYPE_DELETED){
					choTransactionMapper.deleteWork(rowData);
				}else if((int)rowData.get("DataSetRowType")== DataSet.ROW_TYPE_UPDATED){
				
				Map orgDataMap = (Map) rowData.get("DataSetSavedData");
				String orgDataWork = (String) orgDataMap.get("WORKS_CODE");
				rowData.put("ORG_WORKS_CODE",orgDataWork);
				choTransactionMapper.updateWork(rowData);
				
				
			}
		} 
	}
	
	@Override
	public List<Map<String, Object>> findWorkAll(Map<String, String> searchMap) {
		// TODO Auto-generated method stub

		return choTransactionMapper.findWorkAll(searchMap);
//		return null;
	}
	
	
	

	
	@Override
	public List<Map<String, Object>> findWorkDetail(Map<String, String> searchMap) {
		// TODO Auto-generated method stub

		return choTransactionMapper.findWorkDetail(searchMap);
//		return null;
	}
	
	@Override
	public void selectNoticeSave(Map<String, String> upNt) {
		// TODO Auto-generated method stub
			choTransactionMapper.selectNoticeSave(upNt);
            
	}
	
	
	
	
}
