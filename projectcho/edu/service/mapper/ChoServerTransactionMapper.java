package com.edupack.edu.service.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("choServerTransactionMapper")
public interface ChoServerTransactionMapper {

	public List<Map<String, Object>> selectServerWorkAll();

	public List<Map<String, Object>> updateworkAll(Map<String, String> searchMap);

	
	public List<Map<String, Object>> findServAll(Map<String, String> searchMap);

	public List<Map<String, Object>> selectWorkNone();

	public void updateNew(Map<String, Object> rowData);

	public List<Map<String, Object>> selectCntType();

	public List<Map<String, Object>> selectDeliAll();

	public List<Map<String, Object>> selectMemberSub(String fId);

	
	public void deleteMemberC(Map<String, Object> rowData);

	public void updateMemberC(Map<String, Object> rowData);
	//////////////////
	public void insertDeli(Map<String, Object> rowData);

	public void updateDeli(Map<String, Object> rowData);

	public int selectDeli(Map<String, Object> rowData);

	//////////////////
	public void insertDeliend(Map<String, Object> endDeli);

	public void updateDeliend(Map<String, Object> endDeli);
	///////////////

	public List<Map<String, Object>> selectEndDetail();

	public List<Map<String, Object>> selectMemberAll(String pid);

/////////////////////////
	public void updateMemAll(Map<String, Object> rowData);

	public void insertData(Map<String, String> saveNo);

	public List<Map<String, Object>> selectNoticeAll(String pcd);

	////////////// 공지사항 페이징

	public List<Map<String, Object>> selectPagingSample(Map<String, String> searchMap);

	public List<Map<String, Object>> selectPagingSampleTotalcnt(Map<String, String> searchMap);

///////////////의뢰리스트페이징

	public List<Map<String, Object>> selectPagingListA(Map<String, String> searchMap);

	public List<Map<String, Object>> selectPagingListATotalcnt(Map<String, String> searchMap);

	public List<Map<String, Object>> findEndAll(Map<String, String> searchMap);

////미완료 페이징
	public List<Map<String, Object>> selectPagingEnd(Map<String, String> searchMap);

	public List<Map<String, Object>> selectPagingEndTotalcnt(Map<String, String> searchMap);

	// 관리자가 배송완료 제품 검색하는 기능 페이징
	public List<Map<String, Object>> selectPagingFindEnd(Map<String, String> searchMap);

	public List<Map<String, Object>> selectPagingFindEndTotalcnt(Map<String, String> searchMap);

	// 업체 검색하는 기능 페이징
	public List<Map<String, Object>> selectPagingFindComp(Map<String, String> searchMap);

	public List<Map<String, Object>> selectPagingFindCompTotalcnt(Map<String, String> searchMap);

	public void deleteNoticeN(String cdNt);

	public void saveNoticeN(Map<String, Object> rowData);


	public List<Map<String, Object>> updatePagingFindComp(Map<String, String> searchMap);

	public List<Map<String, Object>> updatePagingFindCompTotalcnt(Map<String, String> searchMap);

	public void deleteWorkDeli(Map<String, Object> rowData);

	public void deleteWorkWork(Map<String, Object> rowData);

	public void deleteMemAllCp(Map<String, Object> rowData);

	public void deleteMemAllWr(Map<String, Object> rowData);

	public void deleteMemAllDl(Map<String, Object> rowData);

	
}
