package com.ntels.syjeon.subway.dao;

import org.apache.ibatis.annotations.Mapper;

/**
 * @author syjeon@ntels.com
 */
@Mapper
public interface SubwayMapper {

    String[] getStationName(String subwayId);

}
