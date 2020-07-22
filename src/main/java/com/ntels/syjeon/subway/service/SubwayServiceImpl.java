package com.ntels.syjeon.subway.service;

import com.google.gson.Gson;
import com.ntels.syjeon.subway.dao.SubwayMapper;
import com.ntels.syjeon.subway.model.Hoseon;
import com.ntels.syjeon.subway.model.RealtimeArrivalList;
import com.ntels.syjeon.subway.model.Subway;
import com.ntels.syjeon.subway.util.HttpUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public List<RealtimeArrivalList> upSubwayInfo(String stnName, String subwayId) {
        Gson gson = new Gson();
        String json = httpUtil.apiCall(stnName);
        Map<String, String> hoseon = new Hoseon().getHoseonMap();
        List<RealtimeArrivalList> list = gson.fromJson(json, Subway.class).getRealtimeArrivalList();
        list = list.stream().filter(r -> r.getSubwayId().equals(subwayId)).collect(Collectors.toList());
        list = list.stream().filter(r -> r.getUpdnLine().equals("상행") || r.getUpdnLine().equals("외선"))
                .collect(Collectors.toList());

        list.forEach(r -> {
            r.setStatnTid(subwayMapper.getFnTstaTn(r.getStatnTid()));
            r.setStatnFid(subwayMapper.getFnTstaTn(r.getStatnFid()));
            r.setSubwayId(hoseon.get(r.getSubwayId()));
        });

        return list;
    }

    public List<RealtimeArrivalList> dnSubwayInfo(String stnName, String subwayId) {
        Gson gson = new Gson();
        String json = httpUtil.apiCall(stnName);
        Map<String, String> hoseon = new Hoseon().getHoseonMap();
        List<RealtimeArrivalList> list = gson.fromJson(json, Subway.class).getRealtimeArrivalList();
        list = list.stream().filter(r -> r.getSubwayId().equals(subwayId)).collect(Collectors.toList());
        list = list.stream().filter(r -> r.getUpdnLine().equals("하행") || r.getUpdnLine().equals("내선"))
                .collect(Collectors.toList());

        list.forEach(r -> {
            String temp = r.getStatnTid();
            r.setStatnTid(subwayMapper.getFnTstaTn(r.getStatnFid()));
            r.setStatnFid(subwayMapper.getFnTstaTn(temp));
            r.setSubwayId(hoseon.get(r.getSubwayId()));
        });

        return list;
    }
}
