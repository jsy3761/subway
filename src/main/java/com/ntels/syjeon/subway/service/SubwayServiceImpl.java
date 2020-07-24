package com.ntels.syjeon.subway.service;

import com.google.gson.Gson;
import com.ntels.syjeon.subway.dao.SubwayMapper;
import com.ntels.syjeon.subway.model.Hoseon;
import com.ntels.syjeon.subway.model.RealtimeArrivalList;
import com.ntels.syjeon.subway.model.Subway;
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
public class SubwayServiceImpl {

    @Autowired
    private HttpUtil httpUtil;

    @Autowired
    private SubwayMapper subwayMapper;

    public String[] getStationList(String subwayId) {
        return subwayMapper.getStationName(subwayId);
    }

    public String[] getFnTStation(String subwayId,String stnName) {
        String[] list = subwayMapper.getStationName(subwayId);
        String[] result = new String[3];
        for (int i = 0; i < list.length; i++) {
            if(list[i].equals(stnName)){
                result[0] = list[i-1];
                result[1] = list[i];
                result[2] = list[i+1];
            }
        }
        return result;
    }


    public Map<String ,List<RealtimeArrivalList>> SubwayInfo(String stnName, String subwayId) {
        Gson gson = new Gson();
        Map<String, List<RealtimeArrivalList>> retrunMap = new HashMap<>();

        List<RealtimeArrivalList> apiResult =
                gson.fromJson(httpUtil.apiCall(stnName), Subway.class).getRealtimeArrivalList();

        List<RealtimeArrivalList> upList = apiResult.stream()
                .filter(r -> r.getSubwayId().equals(subwayId))
                .filter(r -> r.getUpdnLine().equals("상행") || r.getUpdnLine().equals("외선"))
                .collect(Collectors.toList());

        List<RealtimeArrivalList> dnList = apiResult.stream()
                .filter(r -> r.getSubwayId().equals(subwayId))
                .filter(r -> r.getUpdnLine().equals("하행") || r.getUpdnLine().equals("내선"))
                .collect(Collectors.toList());

        retrunMap.put("up",upList);
        retrunMap.put("dn",dnList);

        return retrunMap;
    }

}
