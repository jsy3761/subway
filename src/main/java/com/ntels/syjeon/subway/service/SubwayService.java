package com.ntels.syjeon.subway.service;

import com.ntels.syjeon.subway.model.RealtimeArrivalList;
import java.util.List;
import java.util.Map;

/**
 * @author syjeon@ntels.com
 */
public interface SubwayService {

    Map<String, String> getHoseons();

    String[] getStationList(String subwayId);

    Map<String, List<RealtimeArrivalList>> SubwayInfo(String stnName, String subwayId);
}
