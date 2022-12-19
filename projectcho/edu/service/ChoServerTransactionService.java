package com.edupack.edu.service;

import java.util.List;
import java.util.Map;

public interface ChoServerTransactionService {

	List<Map<String, Object>> selectServerWorkAll();

	void updateworkAll(List<Map<String, Object>> upallWork);

	List<Map<String, Object>> findServAll(Map<String, String> searchMap);

	List<Map<String, Object>> selectWorkNone();

	// 관리자가 의뢰를 승인
	void updateNewWork(List<Map<String, Object>> upNew);

	List<Map<String, Object>> selectCntType();

	List<Map<String, Object>> selectDeliAll();

	List<Map<String, Object>> selectMemberSub(String fId);

	void updateMemberChk(List<Map<String, Object>> upMemChk);

	void insertDeliwork(List<Map<String, Object>> saveDeli);

	void updateDeliend(List<Map<String, Object>> endDeli);

	List<Map<String, Object>> selectEndDetail();

	List<Map<String, Object>> selectMemberAll(String pid);

	void updatememberAll(List<Map<String, Object>> upMember);

	void insertNotice(Map<String, String> saveNo);

	List<Map<String, Object>> selectNoticeAll(String pcd);

	//// 공지사항 페이징
	List<Map<String, Object>> selectPagingSample(Map<String, String> searchMap);

	List<Map<String, Object>> selectPagingSampleTotalcnt(Map<String, String> searchMap);

	//// 의뢰리스트 페이징
	List<Map<String, Object>> selectPagingListA(Map<String, String> searchMap);

	List<Map<String, Object>> selectPagingListATotalcnt(Map<String, String> searchMap);

	List<Map<String, Object>> findEndAll(Map<String, String> searchMap);

////미완료 페이징
	List<Map<String, Object>> selectPagingEnd(Map<String, String> searchMap);

	List<Map<String, Object>> selectPagingEndTotalcnt(Map<String, String> searchMap);

	// 관리자가 배송완료 제품 검색하는 기능 페이징
	List<Map<String, Object>> selectPagingFindEnd(Map<String, String> searchMap);

	List<Map<String, Object>> selectPagingFindEndTotalcnt(Map<String, String> searchMap);

	// 업체 검색하는 기능 페이징
	List<Map<String, Object>> selectPagingFindComp(Map<String, String> searchMap);

	List<Map<String, Object>> selectPagingFindCompTotalcnt(Map<String, String> searchMap);

	void deleteNoticeN(String cdNt);

	void saveNoticeN(List<Map<String, Object>> upNotice);

//미승인업체 검색하는 기능 페이징
	List<Map<String, Object>> updatePagingFindComp(Map<String, String> searchMap);

	List<Map<String, Object>> updatePagingFindCompTotalcnt(Map<String, String> searchMap);
}
