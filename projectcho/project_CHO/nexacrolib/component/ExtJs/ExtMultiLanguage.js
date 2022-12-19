/**
*  Necacro EduPack
*  @FileName 	MultiLanguage.js
*  @Creator 	Education
*  @CreateDate 	2022.05.01
*  @Desction   
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2022.05.01     	Education 	           		최초 생성 
*  2022.08.10     	Education 	               스크립트 정비
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/**
 * @class  해당 form의 하위 콤포넌트 모두 찾아 다국어 처리
 * @param  {Form} objForm - 대상 form
 * @return N/A
 */
pForm.ufnInitLang = function (objForm)
{
	var sNowLang    = nexacro.getEnvironmentVariable("evLanguage");			// 현재 언어
	var sChangeLang = nexacro.getEnvironmentVariable("evLanguageChange");	// 바꿀 언어
	
	// Language 변경 전/후 값 확인
	if (sNowLang == "KO" && sNowLang == sChangeLang) return;

	var arrComp = objForm.components;
	var nLength = arrComp.length;

	for (var i=0; i<nLength; i++)
	{
		if (arrComp[i] instanceof nexacro.Div) 
		{
			// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
			if (this.ufnIsNull(arrComp[i].url)) this.ufnInitLang(arrComp[i].form); //재귀함수			
		}
		else if (arrComp[i] instanceof nexacro.Tab)
		{
			var nPages = arrComp[i].tabpages.length;

			for (var j=0; j<nPages;j++)
			{
				// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
				if (this.ufnIsNull(arrComp[i].tabpages[j].url)) {
					this.ufnChangeLang(arrComp[i].tabpages[j]);
					this.ufnInitLang(arrComp[i].tabpages[j].form); //재귀함수
				}
			}
		}
		else {
			this.ufnChangeLang(arrComp[i]); //다국어설정
		}
	}
	
	// text 사이즈 변경으로 인한 화면 갱신 필요
	objForm.resetScroll();
};


/**
 * @class  해당 Component에 대해 다국어 처리
 * @param  {Object} objComp - 대상 Object
 * @return N/A
 */
pForm.ufnChangeLang = function (objComp)
{
	var sWord = "";		// 용어 code
	var sVal  = "";		// 치환될 값
	
	// Button, Static, CheckBox, Tabpage
	if (objComp instanceof nexacro.Button || objComp instanceof nexacro.Static || objComp instanceof nexacro.CheckBox || objComp instanceof nexacro.Tabpage)
	{
		sWord = objComp.uWord;
		if (this.ufnIsNull(sWord) || this.ufnIsNull(objComp.text)) return;
	
		sVal = this.ufnGetWord(sWord);
		objComp.set_text(sVal);
	}
	// ImageViewer 는 해당 프로젝트의 디자인 파일의 Naming Rule에 맞게 수정 필요
	else if (objComp instanceof nexacro.ImageViewer)
	{		
		sWord = objComp.uWord; 		// image의 경우 용어 code에 true 설정
		if (this.ufnIsNull(sWord) || sWord != "true") return;

		var sImage   = objComp.image;	// image
		// 이미지 확장자
		var buff     = sImage.split(".");
		var fileExt  = buff[buff.length-1].replace("\")", "");
			
		var sNowLang    = nexacro.getEnvironmentVariable("evLanguage");			// 현재 언어
		var sChangeLang = nexacro.getEnvironmentVariable("evLanguageChange");	// 바꿀 언어
		if (sNowLang != "KO" && sChangeLang == "KO")
		{
			sImage = sImage.replace("_"+sNowLang+"."+fileExt,"."+fileExt);
		}
		else {		
			var nPos = this.ufnPosReverse(sImage,"."+fileExt);
			sImage = sImage.substr(0, nPos) + "_" + nexacro.getEnvironmentVariable("evLanguageChange")+"."+fileExt+"\")";
		}
		objComp.set_image(sImage);		
	}
	// Grid
	else if (objComp instanceof nexacro.Grid)
	{
		objComp.set_enableevent(false);
		var nCol = objComp.getCellCount("head");

		for (var j=0; j<nCol; j++)
		{
			// Grid의 경우 용어 code를 Header의 expandchar Property에 기술
			sWord = objComp.getCellProperty("Head", j, "expandchar");	// 용어 code
			if (this.ufnIsNull(sWord)) continue;
		
			sVal = this.ufnGetWord(sWord);
			objComp.setCellProperty("Head", j, "text", String(sVal))
		}
		objComp.set_enableevent(true);
	}	
};

/**
 * @class  다국어 처리를 위한 용어 검색
 * @param  {String} sTargetVal - 검색할 용어
 * @return {String} 변경할 용어
 */
pForm.ufnGetWord = function (sWord)
{
	var objApp 	  = pForm.ufnGetApplication();
	var objLangDs = objApp.gdsWord;
	
	var sChangeLang = nexacro.getEnvironmentVariable("evLanguageChange");	// 바꿀 언어

	var sVal = sWord;
	var nRow = objLangDs.findRow("WORD",sWord);
	if (nRow != -1)
	{
		sVal = objLangDs.getColumn(nRow, sChangeLang);
	}
	return sVal;
};