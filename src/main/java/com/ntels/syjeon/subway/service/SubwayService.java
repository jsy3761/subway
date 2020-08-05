package com.ntels.syjeon.subway.service;

import com.ntels.syjeon.subway.model.SubwayLines;
import com.ntels.syjeon.subway.model.api.RealtimeArrivalList;
import java.util.List;
import java.util.Map;

/**
 * @author syjeon@ntels.com
 */
public interface SubwayService {

    /**
     * 서울 지하철의 호선코드와 호선정보를 일급컬렉션으로 반환
     * @return SubwayLines
     */
    SubwayLines getHoseons();

    /**
     * 호선코드를 인자로 받아 코드에 해당하는 역을 DB 조회
     * @param subwayId
     * @return String[]
     */
    String[] getStationList(String subwayId);

    /**
     * 코드와 역이름을 인자로 받아 Api콜 하여 상행 2개, 하행 2개 구분 후
     * 상, 하행 리스트를 담는 Map으로 반환
     * @param stnName
     * @param subwayId
     * @return Map
     */
    Map<String, List<RealtimeArrivalList>> SubwayInfo(String stnName, String subwayId);
}
