package com.edupack.edu.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URLDecoder;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.compress.archivers.zip.ZipArchiveEntry;
import org.apache.commons.compress.archivers.zip.ZipArchiveOutputStream;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.edupack.edu.service.ChoServerTransactionService;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.datatype.PlatformDataType;
import com.nexacro.java.xapi.tx.PlatformType;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroFileResult;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class ChoServerTransactionController {

	private Logger log = LoggerFactory.getLogger(ChoServerTransactionController.class);
	@Resource(name = "choServerTransactionService")
	private ChoServerTransactionService choServerTransactionService;

	// 모든 고객의 의뢰를 출력
	@RequestMapping(value = "selectServerWorkAll.do")
	public NexacroResult selectServerWorkAll() {
		List<Map<String, Object>> resultData = choServerTransactionService.selectServerWorkAll();
		NexacroResult result = new NexacroResult();

		result.addDataSet("out_work", resultData);// transaction에서 받을 이름

		return result;
	}

	// 관리자가 고객의 의뢰를 찾아 수정이 가능한 기능
	@RequestMapping(value = "updateworkAll.do")
	public NexacroResult updateworkAll(@ParamDataSet(name = "in_work") List<Map<String, Object>> upallWork) {

		NexacroResult result = new NexacroResult();
		choServerTransactionService.updateworkAll(upallWork);
		log.debug("saveList : " + upallWork);

		return result;
	}

	// 관리자가 검색하는 기능
	@RequestMapping(value = "findServAll.do")
	public NexacroResult findServAll(@ParamVariable(name = "paramCODE") String pCode,
			@ParamVariable(name = "paramNAME") String pName, @ParamVariable(name = "paramID") String pId,
			@ParamVariable(name = "paramBDCHK") String pBdchk, @ParamVariable(name = "paramBWCHK") String pBwchk) {
		Map<String, String> searchMap = new HashMap();
		searchMap.put("FD_CODE", pCode);
		searchMap.put("FD_NAME", pName);
		searchMap.put("FD_ID", pId);
		searchMap.put("FD_BDCHK", pBdchk);
		searchMap.put("FD_BWCHK", pBwchk);
		log.debug("searchMap : " + searchMap);

		List<Map<String, Object>> resultData = choServerTransactionService.findServAll(searchMap);
		NexacroResult result = new NexacroResult();

		result.addDataSet("out_fdwork", resultData);// transaction에서 받을 이름

		return result;
	}

	// 모든 고객의 의뢰를 출력
	@RequestMapping(value = "selectWorkNone.do")
	public NexacroResult selectWorkNone() {
		List<Map<String, Object>> resultData = choServerTransactionService.selectWorkNone();
		NexacroResult result = new NexacroResult();

		result.addDataSet("out_nowork", resultData);// transaction에서 받을 이름

		return result;
	}

	// 관리자가 의뢰를 승인
	@RequestMapping(value = "updateNewWork.do")
	public NexacroResult updateNewWork(@ParamDataSet(name = "in_new") List<Map<String, Object>> upNew) {

		NexacroResult result = new NexacroResult();

		choServerTransactionService.updateNewWork(upNew);

		return result;
	}

	// 관리자가 의뢰를 승인

	@RequestMapping(value = "selectCntType.do")
	public NexacroResult selectCntType() {

		List<Map<String, Object>> resultData = choServerTransactionService.selectCntType();

		NexacroResult result = new NexacroResult();

		result.addDataSet("in_cnt", resultData);// transaction에서 받을 이름

		return result;
	}

	// 배송이 완료되지 않은 제품 출력
	@RequestMapping(value = "selectDeliAll.do")
	public NexacroResult selectDeliAll() {
		List<Map<String, Object>> resultData = choServerTransactionService.selectDeliAll();
		NexacroResult result = new NexacroResult();

		result.addDataSet("out_deli", resultData);// transaction에서 받을 이름

		return result;
	}

	// 관리자가 회원 조회
	@RequestMapping(value = "selectMemberSub.do") // .do 설정 파일에 지정되어 있음.위치 지정으로는http://localhost:8088/edupack_egov/ 프로젝트
													// 위치로 해주면 알아서 간다
	public NexacroResult selectMemberSub(@ParamVariable(name = "paraID") String fId) {
		List<Map<String, Object>> resultData = choServerTransactionService.selectMemberSub(fId);

		NexacroResult result = new NexacroResult();

		result.addDataSet("out_mem", resultData);// transaction에서 받을 이름

		return result;
	}

	// 관리자가 회원 승인 및 거절
	@RequestMapping(value = "updateMemberChk.do") // .do 설정 파일에 지정되어 있음.위치 지정으로는http://localhost:8088/edupack_egov/ 프로젝트
													// 위치로 해주면 알아서 간다
	public NexacroResult updateMemberChk(@ParamDataSet(name = "in_comM") List<Map<String, Object>> upMemChk) {

		NexacroResult result = new NexacroResult();
		choServerTransactionService.updateMemberChk(upMemChk);

		return result;
	}

	// 배송을 시작했을 때 필요한 정보를 저장
	@RequestMapping(value = "insertDeliwork.do")
	public NexacroResult insertDeliwork(@ParamDataSet(name = "in_deli") List<Map<String, Object>> saveDeli) {

		NexacroResult result = new NexacroResult();
		choServerTransactionService.insertDeliwork(saveDeli);

		return result;
	}

	// 배송을 끝냈을때 필요한 정보를 저장
	@RequestMapping(value = "updateDeliend.do")
	public NexacroResult updateDeliend(@ParamDataSet(name = "in_deliud") List<Map<String, Object>> endDeli) {

		NexacroResult result = new NexacroResult();
		choServerTransactionService.updateDeliend(endDeli);

		return result;
	}

	// 배송을 완료 상품만 호출
	@RequestMapping(value = "selectEndDetail.do")
	public NexacroResult selectEndDetail() {

		List<Map<String, Object>> resultData = choServerTransactionService.selectEndDetail();

		NexacroResult result = new NexacroResult();

		result.addDataSet("in_work", resultData);// transaction에서 받을 이름

		return result;
	}

	// 관리자가 모든 회원 조회
	@RequestMapping(value = "selectMemberAll.do") // .do 설정 파일에 지정되어 있음.위치 지정으로는http://localhost:8088/edupack_egov/ 프로젝트
													// 위치로 해주면 알아서 간다
	public NexacroResult selectMemberAll(@ParamVariable(name = "paid") String pid) {
		List<Map<String, Object>> resultData = choServerTransactionService.selectMemberAll(pid);

		NexacroResult result = new NexacroResult();

		result.addDataSet("out_member", resultData);// transaction에서 받을 이름

		return result;
	}

	// 관리자가 고객의 정보를 수정이 가능한 기능
	@RequestMapping(value = "updatememberAll.do")
	public NexacroResult updatememberAll(@ParamDataSet(name = "in_member") List<Map<String, Object>> upMember) {

		NexacroResult result = new NexacroResult();
		choServerTransactionService.updatememberAll(upMember);
		log.debug("saveList : " + upMember);

		return result;
	}

	// 공지사항작성

	@RequestMapping(value = "insertNotice.do")
	public NexacroResult insertNotice(@ParamDataSet(name = "in_notice") Map<String, String> saveNo) {

		NexacroResult result = new NexacroResult();
		choServerTransactionService.insertNotice(saveNo);
		log.debug("saveList : " + saveNo);

		return result;
	}

	// 유저가 모든 게시글 조회
	@RequestMapping(value = "selectNoticeAll.do")
	public NexacroResult selectNoticeAll(@ParamVariable(name = "paracode") String pcd) {
		List<Map<String, Object>> resultData = choServerTransactionService.selectNoticeAll(pcd);

		NexacroResult result = new NexacroResult();

		result.addDataSet("out_notice", resultData);// transaction에서 받을 이름

		return result;
	}

	//////////////////////// 공지사항 페이징
	@RequestMapping(value = "selectPagingCho.do")
	public NexacroResult selectPagingCho(
			@ParamDataSet(name = "dsSearch", required = false) Map<String, String> searchMap) {
		List<Map<String, Object>> resultList = choServerTransactionService.selectPagingSample(searchMap);
		List<Map<String, Object>> resultList2 = choServerTransactionService.selectPagingSampleTotalcnt(searchMap);

		NexacroResult result = new NexacroResult();

		result.addDataSet("dsNotice", resultList);
		result.addDataSet("dsPagingInfo", resultList2);

		return result;
	}

////////////////////////의뢰리스트 페이징
	@RequestMapping(value = "selectPagingList.do")
	public NexacroResult selectPagingList(@ParamVariable(name = "paramCODE") String pCode,
			@ParamVariable(name = "paramNAME") String pName, @ParamVariable(name = "paramID") String pId,
			@ParamVariable(name = "paramBDCHK") String pBdchk, @ParamVariable(name = "paramBWCHK") String pBwchk,
			@ParamDataSet(name = "dsSearch", required = false) Map<String, String> searchMap) {

		searchMap.put("FD_CODE", pCode);
		searchMap.put("FD_NAME", pName);
		searchMap.put("FD_ID", pId);
		searchMap.put("FD_BDCHK", pBdchk);
		searchMap.put("FD_BWCHK", pBwchk);
		log.debug("searchMap : " + searchMap);

		List<Map<String, Object>> resultList = choServerTransactionService.selectPagingListA(searchMap);
		List<Map<String, Object>> resultList2 = choServerTransactionService.selectPagingListATotalcnt(searchMap);

		NexacroResult result = new NexacroResult();

		result.addDataSet("dsNotice", resultList);
		result.addDataSet("dsPagingInfo", resultList2);

		return result;
	}

	// 관리자가 배송완료 제품 검색하는 기능
	@RequestMapping(value = "findEndAll.do")
	public NexacroResult findEndAll(@ParamVariable(name = "paraName") String pNm,
			@ParamVariable(name = "paraDeli") String pDeli, @ParamVariable(name = "paraComp") String pComp) {
		Map<String, String> searchMap = new HashMap();

		searchMap.put("FD_NAME", pNm);
		searchMap.put("FD_DELI", pDeli);
		searchMap.put("FD_COMP", pComp);
		log.debug("searchMap : " + searchMap);

		List<Map<String, Object>> resultData = choServerTransactionService.findEndAll(searchMap);
		NexacroResult result = new NexacroResult();

		result.addDataSet("out_fdend", resultData);// transaction에서 받을 이름

		return result;
	}

////////////////////////미완료 페이징
	@RequestMapping(value = "selectPagingEnd.do")
	public NexacroResult selectPagingEnd(
			@ParamDataSet(name = "dsSearch", required = false) Map<String, String> searchMap) {
		List<Map<String, Object>> resultList = choServerTransactionService.selectPagingEnd(searchMap);
		List<Map<String, Object>> resultList2 = choServerTransactionService.selectPagingEndTotalcnt(searchMap);

		NexacroResult result = new NexacroResult();

		result.addDataSet("dsNotice", resultList);
		result.addDataSet("dsPagingInfo", resultList2);

		return result;
	}

//관리자가 배송완료 제품 검색하는 기능 페이징
	@RequestMapping(value = "selectPagingFindAll.do")
	public NexacroResult selectPagingFindAll(@ParamVariable(name = "paraName") String pNm,
			@ParamVariable(name = "paraDeli") String pDeli, @ParamVariable(name = "paraComp") String pComp,
			@ParamDataSet(name = "dsSearch", required = false) Map<String, String> searchMap) {
		searchMap.put("FD_NAME", pNm);
		searchMap.put("FD_DELI", pDeli);
		searchMap.put("FD_COMP", pComp);
		List<Map<String, Object>> resultList = choServerTransactionService.selectPagingFindEnd(searchMap);
		List<Map<String, Object>> resultList2 = choServerTransactionService.selectPagingFindEndTotalcnt(searchMap);

		log.debug("searchMap : " + searchMap);

		NexacroResult result = new NexacroResult();

		result.addDataSet("dsNotice", resultList);
		result.addDataSet("dsPagingInfo", resultList2);

		return result;
	}

//업체 검색 기능 페이징
	@RequestMapping(value = "selectPagingComp.do")
	public NexacroResult selectPagingComp(@ParamVariable(name = "paid") String pId,
			@ParamDataSet(name = "dsSearch", required = false) Map<String, String> searchMap) {
		searchMap.put("FD_ID", pId);
		List<Map<String, Object>> resultList = choServerTransactionService.selectPagingFindComp(searchMap);
		List<Map<String, Object>> resultList2 = choServerTransactionService.selectPagingFindCompTotalcnt(searchMap);

		log.debug("searchMap : " + searchMap);

		NexacroResult result = new NexacroResult();

		result.addDataSet("dsNotice", resultList);
		result.addDataSet("dsPagingInfo", resultList2);

		return result;
	}

	// 미완료업체 검색 기능 페이징
	@RequestMapping(value = "updatePagingComp.do")
	public NexacroResult updatePagingComp(@ParamVariable(name = "paraID") String pId,
			@ParamDataSet(name = "dsSearch", required = false) Map<String, String> searchMap) {
		searchMap.put("FD_ID", pId);
		List<Map<String, Object>> resultList = choServerTransactionService.updatePagingFindComp(searchMap);
		List<Map<String, Object>> resultList2 = choServerTransactionService.updatePagingFindCompTotalcnt(searchMap);

		log.debug("searchMap : " + searchMap);

		NexacroResult result = new NexacroResult();

		result.addDataSet("dsNotice", resultList);
		result.addDataSet("dsPagingInfo", resultList2);

		return result;
	}

	// 게시물 수정
	@RequestMapping(value = "saveNoticeN.do")
	public NexacroResult saveNoticeN(@ParamDataSet(name = "in_notice") List<Map<String, Object>> upNotice) {

		NexacroResult result = new NexacroResult();
		choServerTransactionService.saveNoticeN(upNotice);
		log.debug("saveList : " + upNotice);

		return result;
	}

	// 게시물 삭제
	@RequestMapping(value = "deleteNoticeN.do") // .do 설정 파일에 지정되어 있음.위치 지정으로는http://localhost:8088/edupack_egov/ 프로젝트
	public NexacroResult deleteNoticeN(@ParamVariable(name = "paracode") String cdNt) {

		NexacroResult result = new NexacroResult();
		choServerTransactionService.deleteNoticeN(cdNt);

		return result;
	}

	/// 파일 업로드 다운로드
	/// 파일 업로드 다운로드
	/// 파일 업로드 다운로드
	/// 파일 업로드 다운로드
	/// 파일 업로드 다운로드

	private static final String SP = File.separator;
	private static final String sFilePath = "upload";
	private static String userPath = "";

	@RequestMapping(value = "fileUpload.do")
	public NexacroResult fileUpload(MultipartHttpServletRequest request) throws IOException {

		if (!(request instanceof MultipartHttpServletRequest)) {
			return new NexacroResult();
		}

		DataSet dsFile = createDataset();

		String sUserDir = request.getParameter("userPass");
		if (sUserDir != null && !sUserDir.equals("")) {
			userPath = sUserDir;
		}

		uploadFile(request, dsFile);

		NexacroResult result = new NexacroResult();
		result.addDataSet(dsFile);// 파일에 대한 정보
		result.setErrorCode(0);
		result.setErrorMsg("FILE Upload success");

		return result;
	}

	private void uploadFile(MultipartHttpServletRequest request, DataSet dsfile) throws IOException {
		String uploadPath = getFilePath();

		File fileDir = new File(uploadPath);
		if (!fileDir.exists()) {
			fileDir.mkdirs();
			fileDir.setWritable(true);
		}

		Iterator<String> fileName = request.getFileNames();
		while (fileName.hasNext()) {
			MultipartFile mFile = request.getFile(fileName.next());

			String sFileName = mFile.getOriginalFilename();
			String sNewFileName = sFileName;

			File upFile = new File(uploadPath + SP + sFileName);
			if (upFile.exists()) {
				// 동일한 파일 이름이 존재
				Date curDate = new Date();

				SimpleDateFormat simpleDate = new SimpleDateFormat("yyyyMMddHHmmssSSS");
				sNewFileName = simpleDate.format(curDate) + "_" + fileName;
				upFile = new File(uploadPath + SP + sNewFileName);
			}
			mFile.transferTo(upFile);

			int row = dsfile.newRow();
			dsfile.set(row, "FILE_ID", sNewFileName);
			dsfile.set(row, "FILE_NAME", sFileName);
			dsfile.set(row, "FILE_SIZE", upFile.length());

		}
	}

	@Autowired
	private WebApplicationContext appContext;

	private String getFilePath() {
		String sRealPath = appContext.getServletContext().getRealPath("/");
		String sFullPath = sRealPath + sFilePath + SP + "edupack" + userPath;
		log.debug("###################");
		log.debug(sFullPath);
		log.debug("###################");
		return sFullPath;
	}

	private DataSet createDataset() {
		DataSet ds = new DataSet("dsFile");
		ds.addColumn("FILE_ID", PlatformDataType.STRING);
		ds.addColumn("FILE_NAME", PlatformDataType.STRING);
		ds.addColumn("FILE_SIZE", PlatformDataType.INT);

		return ds;
	}

	@RequestMapping(value = "getFileList.do")
	public NexacroResult getFileList(@ParamVariable(name = "userPath") String pUserPath) {

		userPath = pUserPath;

		String filepath = getFilePath();

		DataSet resultdDs = createDataset();

		File file = new File(filepath);
		File[] arrfile = file.listFiles();
		if (arrfile != null) {
			for (int i = 0; i < arrfile.length; i++) {
				int row = resultdDs.newRow();
				resultdDs.set(row, "FILE_ID", arrfile[i].getName());
				resultdDs.set(row, "FILE_NAME", arrfile[i].getName());
				resultdDs.set(row, "FILE_SIZE", arrfile[i].length());
			}
		}

		NexacroResult result = new NexacroResult();
		result.addDataSet(resultdDs);
		result.setErrorCode(0);
		result.setErrorMsg("File List Success");
		return result;
	}

	@RequestMapping(value = "deleteUploadFile.do")
	public NexacroResult deleteUploadFile(@ParamVariable(name = "downfileId") String pFileId) {
		String filePath = getFilePath();

		File rmFile = new File(filePath + SP + pFileId);
		rmFile.delete();

		NexacroResult result = new NexacroResult();
		result.setErrorCode(0);
		result.setErrorMsg("File List Success");
		result.addVariable("rmFileId", pFileId);
		return result;

	}

	@RequestMapping(value = "fileDownload.do")
	public NexacroFileResult fileDownload(HttpServletRequest request) throws Exception {

		String filePath = getFilePath();
		String sDownFileId = request.getParameter("downfileId");
		sDownFileId = URLDecoder.decode(sDownFileId, PlatformType.DEFAULT_CHAR_SET);// 특수문자
		log.debug(filePath + "A");
		String sDownFileDs = request.getParameter("downfileDs");
		log.debug(sDownFileId);
		String s = sDownFileId;
		File f = null;
		if (sDownFileId != null && !sDownFileId.equals("")) {
			String arrFile[] = sDownFileId.split(",");
			if (arrFile.length > 1) {

			} else {
				sDownFileId = URLDecoder.decode(sDownFileId, PlatformType.DEFAULT_CHAR_SET);// 특수문자
				String sRealPath = filePath + SP + sDownFileId;

				f = new File(sRealPath);
				log.debug(sRealPath + "B");
			}
		}

		NexacroFileResult result = new NexacroFileResult(f);
		result.setOriginalName(s);
		return result;

	}

	private File getDownZipFile(DataSet objDs, String filePath, String compressName) throws IOException {
		// TODO Auto-generated method stub
		String dumDir = "dummy" + SP;

		String files[] = new String[objDs.getRowCount()];
		for (int i = 0; i < files.length; i++) {
			files[i] = URLDecoder.decode(objDs.getString(i, "FILE_ID"), PlatformType.DEFAULT_CHAR_SET);
		}

		File tempDir = new File(filePath + dumDir);
		if (tempDir.exists() == false) {
			boolean mkdirs = tempDir.mkdirs();
			tempDir.setWritable(true);
		}

		int size = 1024;
		byte[] buf = new byte[size];
		String outZipNm = filePath + dumDir + compressName + ".zip";

		File file = new File(outZipNm);
		FileInputStream fis = null;
		ZipArchiveOutputStream zos = null;
		BufferedInputStream bis = null;

		try {
			zos = new ZipArchiveOutputStream(new BufferedOutputStream(new FileOutputStream(outZipNm)));
			for (int i = 0; i < files.length; i++) {
				zos.setEncoding("UTF-8");

				fis = new FileInputStream(filePath + SP + files[i]);
				bis = new BufferedInputStream(fis, size);

				zos.putArchiveEntry(new ZipArchiveEntry(files[i]));

				int len;
				while ((len = bis.read(buf, 0, size)) != -1) {
					zos.write(buf, 0, len);
				}

				bis.close();
				fis.close();
				zos.closeArchiveEntry();
			}

			zos.close();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		} finally {
			if (zos != null) {
				zos.close();
			}
			if (fis != null) {
				fis.close();
			}
			if (bis != null) {
				bis.close();
			}
		}

		return file;

	}

}