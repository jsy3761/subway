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

    public String[] getStnNames(String subwayId) {
        return subwayMapper.getStationName(subwayId);
    }

    public String[] getStnNames(String subwayId,String stnName) {
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
        String json = httpUtil.apiCall(stnName);
        Map<String, String> hoseon = new Hoseon().getHoseonMap();
        Map<String ,List<RealtimeArrivalList>> retrunMap = new HashMap<>();
        List<RealtimeArrivalList> apiResult = gson.fromJson(json, Subway.class).getRealtimeArrivalList();

        List<RealtimeArrivalList> upList = apiResult.stream().filter(r -> r.getSubwayId().equals(subwayId)).collect(Collectors.toList());
        upList = upList.stream().filter(r -> r.getUpdnLine().equals("상행") || r.getUpdnLine().equals("외선"))
                .collect(Collectors.toList());
        upList.forEach(r -> {
            r.setStatnTid(subwayMapper.getFnTstaTn(r.getStatnTid()));
            r.setStatnFid(subwayMapper.getFnTstaTn(r.getStatnFid()));
            r.setSubwayId(hoseon.get(r.getSubwayId()));
        });

        retrunMap.put("up",upList);

        List<RealtimeArrivalList> dnList = apiResult.stream().filter(r -> r.getSubwayId().equals(subwayId)).collect(Collectors.toList());
        dnList = dnList.stream().filter(r -> r.getUpdnLine().equals("하행") || r.getUpdnLine().equals("내선"))
                .collect(Collectors.toList());
        dnList.forEach(r -> {
            r.setStatnTid(subwayMapper.getFnTstaTn(r.getStatnTid()));
            r.setStatnFid(subwayMapper.getFnTstaTn(r.getStatnFid()));
            r.setSubwayId(hoseon.get(r.getSubwayId()));
        });

        retrunMap.put("dn",dnList);

        return retrunMap;
    }

}
