package com.edupack.edu.vo;

/**
 * 
 * @author Education
 * @since 20220501
 * @version 1.0
 * @see
 */
public class EduEmpVO extends EduDefaultVO {

	private String EMPL_ID;
	private String FULL_NAME;
	private String DEPT_CD;
	private String POS_CD;
	private String HIRE_DATE;
	private int SALARY;
	private String MARRIED;
	private String GENDER;
	private String MEMO;


	public String getEMPL_ID() {
		return EMPL_ID;
	}
	public void setEMPL_ID(String eMPL_ID) {
		EMPL_ID = eMPL_ID;
	}
	public String getFULL_NAME() {
		return FULL_NAME;
	}
	public void setFULL_NAME(String fULL_NAME) {
		FULL_NAME = fULL_NAME;
	}
	public String getDEPT_CD() {
		return DEPT_CD;
	}
	public void setDEPT_CD(String dEPT_CD) {
		DEPT_CD = dEPT_CD;
	}
	public String getPOS_CD() {
		return POS_CD;
	}
	public void setPOS_CD(String pOS_CD) {
		POS_CD = pOS_CD;
	}
	public String getHIRE_DATE() {
		return HIRE_DATE;
	}
	public void setHIRE_DATE(String hIRE_DATE) {
		HIRE_DATE = hIRE_DATE;
	}
	public int getSALARY() {
		return SALARY;
	}
	public void setSALARY(int sALARY) {
		SALARY = sALARY;
	}
	public String getMARRIED() {
		return MARRIED;
	}
	public void setMARRIED(String mARRIED) {
		MARRIED = mARRIED;
	}
	public String getGENDER() {
		return GENDER;
	}
	public void setGENDER(String gENDER) {
		GENDER = gENDER;
	}
	public String getMEMO() {
		return MEMO;
	}
	public void setMEMO(String mEMO) {
		MEMO = mEMO;
	}

}