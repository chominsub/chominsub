package com.edupack.edu.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import com.edupack.edu.service.mapper.ChoServerTransactionMapper;
import com.edupack.edu.web.ChoServerTransactionController;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.edupack.edu.service.ChoServerTransactionService;
import com.edupack.edu.service.mapper.ChoServerTransactionMapper;
import com.edupack.edu.web.ChoServerTransactionController;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Service("choServerTransactionService")
public class ChoServerTransactionImpl implements ChoServerTransactionService {
	private Logger log = LoggerFactory.getLogger(ChoServerTransactionController.class);

	@Resource(name = "choServerTransactionMapper")
	ChoServerTransactionMapper choServerTransactionMapper;

	@Override
	public List<Map<String, Object>> selectServerWorkAll() {
		// TODO Auto-generated method stub

		return choServerTransactionMapper.selectServerWorkAll();
//	return null;
	}

	@Override
	public void updateworkAll(List<Map<String, Object>> upallWork) {
		// TODO Auto-generated method stub

		int size = upallWork.size();

		for (int i = 0; i < size; i++) {

			Map<String, Object> rowData = upallWork.get(i);
			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_DELETED) {
				choServerTransactionMapper.deleteWorkDeli(rowData);
				choServerTransactionMapper.deleteWorkWork(rowData);
			}
		}
	}

	@Override
	public List<Map<String, Object>> findServAll(Map<String, String> searchMap) {
		// TODO Auto-generated method stub

		return choServerTransactionMapper.findServAll(searchMap);
//		return null;
	}

	@Override
	public List<Map<String, Object>> selectWorkNone() {
		// TODO Auto-generated method stub

		return choServerTransactionMapper.selectWorkNone();
//	return null;
	}

	// 관리자가 의뢰를 0에서 1바꾸기
	@Override
	public void updateNewWork(List<Map<String, Object>> upNew) {
		// TODO Auto-generated method stub

		int size = upNew.size();
		for (int i = 0; i < size; i++) {
			Map<String, Object> rowData = upNew.get(i);
			String orgDataWork = (String) rowData.get("WORKS_CODE");// map을 get 하는건근 거기에 있는 값을 가져오는 기능이다
			rowData.put("ORG_WORKS_CODE", orgDataWork);
			choServerTransactionMapper.updateNew(rowData);

		}

	}

	@Override
	public List<Map<String, Object>> selectCntType() {
		// TODO Auto-generated method stub

		return choServerTransactionMapper.selectCntType();
	}

	@Override
	public List<Map<String, Object>> selectDeliAll() {
		// TODO Auto-generated method stub

		return choServerTransactionMapper.selectDeliAll();

	}

	@Override
	public List<Map<String, Object>> selectMemberSub(String fId) {
		// TODO Auto-generated method stub
		return choServerTransactionMapper.selectMemberSub(fId);

	}

	@Override
	public void updateMemberChk(List<Map<String, Object>> upMemChk) {
		// TODO Auto-generated method stub

		int size = upMemChk.size();

		for (int i = 0; i < size; i++) {

			Map<String, Object> rowData = upMemChk.get(i);
			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_DELETED) {
				choServerTransactionMapper.deleteMemberC(rowData);
			} else if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_UPDATED) {
				String orgDataWork = (String) rowData.get("COMPANY_CODE");
				rowData.put("GRD_MEM_CHK", orgDataWork);
				choServerTransactionMapper.updateMemberC(rowData);

			}
		}

	}

	@Override
	public void insertDeliwork(List<Map<String, Object>> saveDeli) {
		// TODO Auto-generated method stub
		int size = saveDeli.size();
		for (int i = 0; i < size; i++) {
			Map<String, Object> rowData = saveDeli.get(i);
			int id = choServerTransactionMapper.selectDeli(rowData);
			if (id == 0) {
				choServerTransactionMapper.insertDeli(rowData);
				choServerTransactionMapper.updateDeli(rowData);

			}

		}
	}

	@Override
	public void updateDeliend(List<Map<String, Object>> endDeli) {
		// TODO Auto-generated method stub

		int size = endDeli.size();

		for (int i = 0; i < size; i++) {
			Map<String, Object> rowData = endDeli.get(i);

			choServerTransactionMapper.insertDeliend(rowData);// 배달정보 테이블 변경
			choServerTransactionMapper.updateDeliend(rowData);// 의뢰 정보 테이블 변경

		}
	}

	// 완료된것만 호출
	@Override
	public List<Map<String, Object>> selectEndDetail() {
		// TODO Auto-generated method stub

		return choServerTransactionMapper.selectEndDetail();

	}

	// 관리자가 모든 회원 조회
	@Override
	public List<Map<String, Object>> selectMemberAll(String pid) {
		// TODO Auto-generated method stub

		return choServerTransactionMapper.selectMemberAll(pid);

	}

	@Override
	public void updatememberAll(List<Map<String, Object>> upMember) {
		// TODO Auto-generated method stubj

		int size = upMember.size();

		for (int i = 0; i < size; i++) {

			Map<String, Object> rowData = upMember.get(i);
			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_DELETED) {
				choServerTransactionMapper.deleteMemAllCp(rowData);
				choServerTransactionMapper.deleteMemAllWr(rowData);
				choServerTransactionMapper.deleteMemAllDl(rowData);
			} else if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_UPDATED) {

				Map orgDataMap = (Map) rowData.get("DataSetSavedData");
				String orgComMem = (String) orgDataMap.get("COMPANY_CODE");
				rowData.put("ORG_COMPANY_CODE", orgComMem);
				choServerTransactionMapper.updateMemAll(rowData);

			}
		}
	}

	@Override
	public void insertNotice(Map<String, String> saveNo) {
		// TODO Auto-generated method stub
		choServerTransactionMapper.insertData(saveNo);

	}

	// 관리자가 모든 회원 조회
	@Override
	public List<Map<String, Object>> selectNoticeAll(String pcd) {
		// TODO Auto-generated method stub

		return choServerTransactionMapper.selectNoticeAll(pcd);

	}

	///////////////////////// 공지사항 페이징

	@Override
	public List<Map<String, Object>> selectPagingSample(Map<String, String> searchMap) {
		return choServerTransactionMapper.selectPagingSample(searchMap);
	}

	@Override
	public List<Map<String, Object>> selectPagingSampleTotalcnt(Map<String, String> searchMap) {
		return choServerTransactionMapper.selectPagingSampleTotalcnt(searchMap);
	}

/////////////////////////의뢰리스트 페이징

	@Override
	public List<Map<String, Object>> selectPagingListA(Map<String, String> searchMap) {
		return choServerTransactionMapper.selectPagingListA(searchMap);
	}

	@Override
	public List<Map<String, Object>> selectPagingListATotalcnt(Map<String, String> searchMap) {
		return choServerTransactionMapper.selectPagingListATotalcnt(searchMap);
	}

	@Override
	public List<Map<String, Object>> findEndAll(Map<String, String> searchMap) {
		// TODO Auto-generated method stub

		return choServerTransactionMapper.findEndAll(searchMap);
//			return null;
	}

/////////////////////////미완료 페이징

	@Override
	public List<Map<String, Object>> selectPagingEnd(Map<String, String> searchMap) {
		return choServerTransactionMapper.selectPagingEnd(searchMap);
	}

	@Override
	public List<Map<String, Object>> selectPagingEndTotalcnt(Map<String, String> searchMap) {
		return choServerTransactionMapper.selectPagingEndTotalcnt(searchMap);
	}

//관리자가 배송완료 제품 검색하는 기능 페이징

	@Override
	public List<Map<String, Object>> selectPagingFindEnd(Map<String, String> searchMap) {
		return choServerTransactionMapper.selectPagingFindEnd(searchMap);
	}

	@Override
	public List<Map<String, Object>> selectPagingFindEndTotalcnt(Map<String, String> searchMap) {
		return choServerTransactionMapper.selectPagingFindEndTotalcnt(searchMap);
	}

//업체 검색하는 기능 페이징

	@Override
	public List<Map<String, Object>> selectPagingFindComp(Map<String, String> searchMap) {
		return choServerTransactionMapper.selectPagingFindComp(searchMap);
	}

	@Override
	public List<Map<String, Object>> selectPagingFindCompTotalcnt(Map<String, String> searchMap) {
		return choServerTransactionMapper.selectPagingFindCompTotalcnt(searchMap);
	}
	
	
	@Override
	public void deleteNoticeN(String cdNt) {
		// TODO Auto-generated method stub
		choServerTransactionMapper.deleteNoticeN(cdNt);
	}

	
	//게시물 수정
	@Override
	public void saveNoticeN(List<Map<String, Object>> upNotice) {
		// TODO Auto-generated method stub

				Map<String, Object> rowData = upNotice.get(0);
				choServerTransactionMapper.saveNoticeN(rowData);
		
	}
	
	
	//미승인업체 검색하는 기능 페이징

	@Override
	public List<Map<String, Object>> updatePagingFindComp(Map<String, String> searchMap) {
		return choServerTransactionMapper.updatePagingFindComp(searchMap);
	}

	@Override
	public List<Map<String, Object>> updatePagingFindCompTotalcnt(Map<String, String> searchMap) {
		return choServerTransactionMapper.updatePagingFindCompTotalcnt(searchMap);
	}
}
