package com.ntels.syjeon.subway.model;

import java.util.HashMap;
import java.util.Map;

/**
 * @author syjeon@ntels.com
 */
public class Hoseon {
    private Map<String,String> hoseonMap = new HashMap<>();
    public Hoseon(){
        hoseonMap.put("1001","1호선");
        hoseonMap.put("1002","2호선");
        hoseonMap.put("1003","3호선");
        hoseonMap.put("1004","4호선");
        hoseonMap.put("1005","5호선");
        hoseonMap.put("1006","6호선");
        hoseonMap.put("1007","7호선");
        hoseonMap.put("1008","8호선");
        hoseonMap.put("1009","9호선");
        hoseonMap.put("1075","분당선");
        hoseonMap.put("1077","신분당선");
        hoseonMap.put("1067","경춘선");
        hoseonMap.put("1063","경의중앙선");
        hoseonMap.put("1065","공항철도");
    }
    public Map<String, String> getHoseonMap() {
        return hoseonMap;
    }
}
