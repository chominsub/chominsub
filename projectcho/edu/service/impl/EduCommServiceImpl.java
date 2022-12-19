package com.edupack.edu.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.edupack.edu.service.EduCommService;
import com.edupack.edu.service.mapper.EduCommMapper;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * 
 * <pre>
 * @title   Education ServiceImpl Class
 *  -       
 * @package com.edupack.edu.service.impl
 * <pre>
 * <pre>
 * @author  Education
 * @since   2022. 04. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022. 04. 20.		Education	최초작성
 */

@Service("eduCommService")
public class EduCommServiceImpl extends EgovAbstractServiceImpl implements EduCommService {
	@Resource(name ="eduCommMapper")
	EduCommMapper eduCommMapper;
	
	@Override
    public List<Map<String,Object>> selectCommCode(Map<String, Object> searchMap) {
        return eduCommMapper.selectCommCode(searchMap);
    }
}
