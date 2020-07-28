package com.ntels.syjeon.subway.model.api;

import com.ntels.syjeon.subway.model.Line;

import java.util.List;

/**
 * @author syjeon@ntels.com
 */
public class SubwayLines {
    private List<Line> lines;

    public SubwayLines(List<Line> lines){
        this.lines = lines;
    }
}
