package com.ntels.syjeon.subway.controller;

import com.ntels.syjeon.subway.model.RealtimeArrivalList;
import com.ntels.syjeon.subway.service.SubwayServiceImpl;
import com.ntels.syjeon.subway.model.Hoseon;
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
    private SubwayServiceImpl subwayService;

    @GetMapping(value = "/")
    public String  index(){
        return "dashboard";
    }

    @GetMapping(value = "/names.ajax")
    @ResponseBody
    public Map<String, String> hoseon(){
        return new Hoseon().getHoseonMap();
    }

    @GetMapping(value = "/stnNames.ajax")
    @ResponseBody
    public String[] getStations(String subwayId){
        return subwayService.getStnNames(subwayId);
    }

    @GetMapping(value = "/data.ajax")
    @ResponseBody
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
