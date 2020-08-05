package com.ntels.syjeon.subway.model;

/**
 * 지하철 호선코드 호선이름 모델
 * @author syjeon@ntels.com
 */
public class SubwayLine {
    private int key;
    private String value;

    public SubwayLine(int key, String value){
        this.key = key;
        this.value = value;
    }
}
