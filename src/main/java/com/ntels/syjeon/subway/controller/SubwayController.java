package com.ntels.syjeon.subway.controller;

import com.ntels.syjeon.subway.model.api.RealtimeArrivalList;
import com.ntels.syjeon.subway.service.SubwayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;


import javax.servlet.http.HttpServlet;
import java.util.List;
import java.util.Map;
/**
 * 지하철 도착정보 컨트롤러
 * @author syjeon@ntels.com
 */
@Controller
public class SubwayController {

    /**
     * Subway Service
     */
    @Autowired
    private SubwayService subwayService;

    /**
     * Index Page 호출 메서드
     * @return dashboard.jsp
     */
    @GetMapping(value = "/")
    public String index(){
        return "dashboard";
    }

    /**
     * Ajax -> 지하철 호선 코드와 이름을 Json으로 반환
     * @return Json String ("1001":"1호선" ....)
     */
    @ResponseBody
    @GetMapping(value = "/names.ajax")
    public String  hoseon(){
        return subwayService.getHoseons().jsonString();
    }

    /**
     * Ajax -> 호선의 ID를 인자로 받아 해당 호선의 모든역을 담은 배열을 반환
     * @param subwayId
     * @return String[]
     */
    @ResponseBody
    @GetMapping(value = "/stnNames.ajax")
    public String[] getStations(String subwayId){
        return subwayService.getStationList(subwayId);
    }

    /**
     * 호선 ID와 역의 이름을 인자로 받아 Api를 호출하여
     * 지하철 도착정보 모델을 Map으로 반환
     * @param subwayId
     * @param stnName
     * @return Map
     */
    @ResponseBody
    @GetMapping(value = "/data.ajax")
    public Map<String, List<RealtimeArrivalList>> data(String subwayId,String stnName){
        return subwayService.SubwayInfo(stnName,subwayId);
    }

    /**
     * 지하철 역을 표출하는 페이지
     * @param subwayId
     * @return dashboard.jsp
     */
    @GetMapping(value = "/{hoseon}")
    public ModelAndView view(@PathVariable("hoseon") String subwayId){
        ModelAndView mv = new ModelAndView("dashboard");
        mv.addObject("subId", subwayId);
        return mv;
    }

    /**
     * 지하철 도착정보 표출 페이지
     * @param subwayId
     * @param stnName
     * @return view.jsp
     */
    @GetMapping(value = "/{hoseon}/{stnName}")
    public ModelAndView viewInfo(@PathVariable("hoseon") String subwayId,
                                 @PathVariable("stnName") String stnName){
        ModelAndView mv = new ModelAndView("view");
        mv.addObject("subId", subwayId);
        mv.addObject("stnName", stnName);
        return mv;
    }

}
