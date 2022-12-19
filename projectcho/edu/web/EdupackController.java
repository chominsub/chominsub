package com.edupack.edu.web;

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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.edupack.edu.service.EdupackService;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.datatype.PlatformDataType;
import com.nexacro.java.xapi.tx.PlatformType;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroFileResult;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class EdupackController {

	private Logger log = LoggerFactory.getLogger(EdupackController.class);
	@Resource(name = "edupackService")
	private EdupackService edupackService;

	@RequestMapping(value = "selectEmpListAll.do") // .do 설정 파일에 지정되어 있음.위치 지정으로는http://localhost:8088/edupack_egov/
													// 프로젝트 위치로 해주면 알아서 간다
	public NexacroResult selectEmpListAll() {

		List<Map<String, Object>> resultData = edupackService.selectEmpListAll();

		NexacroResult result = new NexacroResult();

		result.addDataSet("out_emp", resultData);// transaction에서 받을 이름

		return result;
	}

	@RequestMapping(value = "selectEmpListParam1.do")
	public NexacroResult selectEmpListParam1(@ParamVariable(name = "paramDept") String pDept) {

		List<Map<String, Object>> resultData = edupackService.selectEmpListParam1(pDept);
		NexacroResult result = new NexacroResult();

		result.addDataSet("out_emp", resultData);// transaction에서 받을 이름

		return result;
	}

	@RequestMapping(value = "selectEmpListParam2.do")
	public NexacroResult selectEmpListParam2(@ParamVariable(name = "paramDept") String pDept,
			@ParamVariable(name = "paramName") String pName) {

		Map<String, String> searchMap = new HashMap();
		searchMap.put("SCH_DEPT", pDept);
		searchMap.put("SCH_NAME", pName);

		List<Map<String, Object>> resultData = edupackService.selectEmpListParam2(searchMap);
		NexacroResult result = new NexacroResult();

		result.addDataSet("out_emp", resultData);// transaction에서 받을 이름

		return result;
	}

	@RequestMapping(value = "selectEmpListDs.do")
	public NexacroResult selectEmpListDs(@ParamDataSet(name = "dsemp") Map<String, String> searchMap) {

		List<Map<String, Object>> resultData = edupackService.selectEmpListDs(searchMap);
		NexacroResult result = new NexacroResult();

		result.addDataSet("out_emp", resultData);// transaction에서 받을 이름

		return result;
	}

	@RequestMapping(value = "selectEmpListCd.do")
	public NexacroResult selectEmpListCd() {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> resultData = edupackService.selectDept();
		result.addDataSet("out_dept", resultData);// transaction에서 받을 이름
		resultData = edupackService.selectPos();
		result.addDataSet("out_pos", resultData);// transaction에서 받을 이름

		return result;
	}

	@RequestMapping(value = "selectEmpListSm.do")
	public NexacroResult selectEmpListSm(@ParamVariable(name = "paramCode") String pCode) {

		String[] arrCode = pCode.split(",");
		NexacroResult result = new NexacroResult();

		Map<String, Object> codeMap = new HashMap();
		codeMap.put("SCH_CODE", arrCode);
		List<Map<String, Object>> resultData = edupackService.selectEmpListSm(codeMap);
		result.addDataSet("out_code", resultData);// transaction에서 받을 이름

		return result;
	}

	@RequestMapping(value = "saveEmpAll.do")
	public NexacroResult saveEmpAll(@ParamDataSet(name = "in_emp") List<Map<String, Object>> saveList) {

		NexacroResult result = new NexacroResult();
		edupackService.saveEmpAll(saveList);
		return result;
	}

	@RequestMapping(value = "selectCheckId.do")
	public NexacroResult selectCheckId(@ParamVariable(name = "paramID") String pId) {

		int cnt = edupackService.selectCheckId(pId);
		NexacroResult result = new NexacroResult();
		log.debug("22222" + cnt);

		result.addVariable("a_cnt", cnt);
		result.setErrorCode(200);
		result.setErrorMsg("이미 등록된 사원번호");

		return result;
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	
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
		String sFullPath = sRealPath + sFilePath + SP + userPath;
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
	public NexacroResult deleteUploadFile(@ParamVariable(name = "fileid") String pFileId) {
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

		String sDownFileDs = request.getParameter("downfileDs");

		String s = sDownFileId;
		File f = null;
		if (sDownFileId != null && !sDownFileId.equals("")) {
			String arrFile[] = sDownFileId.split(",");
			if (arrFile.length > 1) {

			} else {
				sDownFileId = URLDecoder.decode(sDownFileId, PlatformType.DEFAULT_CHAR_SET);// 특수문자
				String sRealPath = filePath + SP + sDownFileId;
				f = new File(sRealPath);
			}
		}
		if (sDownFileDs != null) {
			DataSet objDs = new DataSet("dsDown");
			sDownFileDs = URLDecoder.decode(sDownFileDs, PlatformType.DEFAULT_CHAR_SET);
			objDs.loadXml(sDownFileDs);

			log.debug("======================");
			log.debug(sDownFileDs);
			log.debug("======================");

			if (objDs.getRowCount() > 1) {
				log.debug("압축 다운로드 구현");

				Random rnd = new Random();
				String rnfSt = String.valueOf(rnd.nextInt(9999999) + rnd.nextInt(9999999));
				f = getDownZipFile(objDs, filePath, "compressZip-" + rnfSt);

			} else {
				log.debug("단건 다운로드 구현");
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

	@RequestMapping(value = "selectPageSample.do")
	public NexacroResult selectPagingSample(
			@ParamDataSet(name = "dsSearch", required = false) Map<String, String> searchMap) {
		List<Map<String, Object>> resultList = edupackService.selectPagingSample(searchMap);
		List<Map<String, Object>> resultList2 = edupackService.selectPagingSampleTotalcnt(searchMap);

		NexacroResult result = new NexacroResult();

		result.addDataSet("dsList", resultList);
		result.addDataSet("dsPagingInfo", resultList2);

		return result;
	}
*/
}
