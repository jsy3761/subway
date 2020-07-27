package com.ntels.syjeon.subway.controller;

import com.ntels.syjeon.subway.model.RealtimeArrivalList;
import com.ntels.syjeon.subway.service.SubwayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;


import java.util.List;
import java.util.Map;
/**
 * @author syjeon@ntels.com
 */
@Controller
public class SubwayController {

    @Autowired
    private SubwayService subwayService;

    @GetMapping(value = "/")
    public String index(){
        return "dashboard";
    }

    @ResponseBody
    @GetMapping(value = "/names.ajax")
    public Map<String, String> hoseon(){
        return subwayService.getHoseons();
    }

    @ResponseBody
    @GetMapping(value = "/stnNames.ajax")
    public String[] getStations(String subwayId){
        return subwayService.getStationList(subwayId);
    }

    @ResponseBody
    @GetMapping(value = "/data.ajax")
    public Map<String, List<RealtimeArrivalList>> data(String subwayId,String stnName){
        return subwayService.SubwayInfo(stnName,subwayId);
    }

    @GetMapping(value = "/{hoseon}")
    public ModelAndView view(@PathVariable("hoseon") String subwayId){
        ModelAndView mv = new ModelAndView("dashboard");
        mv.addObject("subId", subwayId);
        return mv;
    }

    @GetMapping(value = "/{hoseon}/{stnName}")
    public ModelAndView viewInfo(@PathVariable("hoseon") String subwayId,
                                 @PathVariable("stnName") String stnName){
        ModelAndView mv = new ModelAndView("view");
        mv.addObject("subId", subwayId);
        mv.addObject("stnName", stnName);
        return mv;
    }

}
