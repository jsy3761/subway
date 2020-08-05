package com.ntels.syjeon.subway.dao;

import org.apache.ibatis.annotations.Mapper;

/**
 * MyBatis Mapper
 * @author syjeon@ntels.com
 */
@Mapper
public interface SubwayMapper {

    /**
     * 호선 코드에 해당 하는 모든 역을 Select
     * @param subwayId
     * @return
     */
    String[] getStationName(String subwayId);

}
