package com.ntels.syjeon.subway.service;

import com.google.gson.Gson;
import com.ntels.syjeon.subway.dao.SubwayMapper;
import com.ntels.syjeon.subway.model.Hoseon;
import com.ntels.syjeon.subway.model.api.RealtimeArrivalList;
import com.ntels.syjeon.subway.model.api.Subway;
import com.ntels.syjeon.subway.util.HttpUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public Map<String, String> getHoseons() {
        return new Hoseon().getHoseonMap();
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
                        && (r.getUpdnLine().equals("상행") || r.getUpdnLine().equals("외선"))
                ).collect(Collectors.toList());

        List<RealtimeArrivalList> dnList = apiResult.stream()
                .filter(r -> r.getSubwayId().equals(subwayId)
                && (r.getUpdnLine().equals("하행") || r.getUpdnLine().equals("내선"))
                ).collect(Collectors.toList());

        retrunMap.put("up",upList);
        retrunMap.put("dn",dnList);

        return retrunMap;
    }

}
