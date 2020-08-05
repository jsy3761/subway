package com.ntels.syjeon.subway.service;

import com.google.gson.Gson;
import com.ntels.syjeon.subway.dao.SubwayMapper;
import com.ntels.syjeon.subway.model.SubwayLine;
import com.ntels.syjeon.subway.model.SubwayLines;
import com.ntels.syjeon.subway.model.api.RealtimeArrivalList;
import com.ntels.syjeon.subway.model.api.Subway;
import com.ntels.syjeon.subway.util.HttpUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * @author syjeon@ntels.com
 */
@Service
public class SubwayServiceImpl implements SubwayService{

    @Autowired
    private HttpUtil httpUtil;

    @Autowired
    private SubwayMapper subwayMapper;

    @Override
    public SubwayLines getHoseons() {
        List<SubwayLine> subwayLines = new ArrayList<>();
        subwayLines.add(new SubwayLine(1001,"1호선"));
        subwayLines.add(new SubwayLine(1002,"2호선"));
        subwayLines.add(new SubwayLine(1003,"3호선"));
        subwayLines.add(new SubwayLine(1004,"4호선"));
        subwayLines.add(new SubwayLine(1005,"5호선"));
        subwayLines.add(new SubwayLine(1006,"6호선"));
        subwayLines.add(new SubwayLine(1007,"7호선"));
        subwayLines.add(new SubwayLine(1008,"8호선"));
        subwayLines.add(new SubwayLine(1009,"9호선"));
        subwayLines.add(new SubwayLine(1075,"분당선"));
        subwayLines.add(new SubwayLine(1077,"신분당선"));
        subwayLines.add(new SubwayLine(1067,"경춘선"));
        subwayLines.add(new SubwayLine(1063,"경의중앙선"));
        subwayLines.add(new SubwayLine(1065,"공항철도"));

        return new SubwayLines(subwayLines);
    }

    @Override
    public String[] getStationList(String subwayId) {
        return subwayMapper.getStationName(subwayId);
    }

    @Override
    public Map<String ,List<RealtimeArrivalList>> SubwayInfo(String stnName, String subwayId) {
        Gson gson = new Gson();
        Map<String, List<RealtimeArrivalList>> retrunMap = new HashMap<>();

        List<RealtimeArrivalList> apiResult =
                gson.fromJson(httpUtil.apiCall(stnName), Subway.class).getRealtimeArrivalList();

        List<RealtimeArrivalList> upList = apiResult.stream()
                .filter(r -> r.getSubwayId().equals(subwayId)
                        && (r.getUpdnLine().equals("상행") || r.getUpdnLine().equals("외선")))
                .collect(Collectors.toList());

        List<RealtimeArrivalList> dnList = apiResult.stream()
                .filter(r -> r.getSubwayId().equals(subwayId)
                && (r.getUpdnLine().equals("하행") || r.getUpdnLine().equals("내선")))
                .collect(Collectors.toList());

        retrunMap.put("up",upList);
        retrunMap.put("dn",dnList);

        return retrunMap;
    }

}
