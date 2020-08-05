package com.ntels.syjeon.subway.model;

import com.google.gson.Gson;
import java.util.List;

/**
 * 지하철 호선코드 와 호선이름 리스트 일급 컬렉션 모델
 * @author syjeon@ntels.com
 */
public class SubwayLines {

    /**
     * 호선 리스트
     */
    private List<SubwayLine> subwayLines;

    /**
     * 생성자 주입
     * @param subwayLines
     */
    public SubwayLines(List<SubwayLine> subwayLines){
        this.subwayLines = subwayLines;
    }

    /**
     * Json String 변환
     * @return Json String
     */
    public String jsonString(){
        return new Gson().toJson(this);
    }

}
