package com.ntels.syjeon.subway.controller;

import com.ntels.syjeon.subway.service.SubwayServiceImpl;
import com.ntels.syjeon.subway.dao.SubwayMapper;
import com.ntels.syjeon.subway.model.Hoseon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

/**
 * @author syjeon@ntels.com
 */
@Controller
public class SubwayController {

    @Autowired
    private SubwayMapper subwayMapper;

    @Autowired
    private SubwayServiceImpl subwayService;

    @GetMapping(value = "/")
    public ModelAndView index(){
        ModelAndView mv = new ModelAndView("dashboard");
        return mv;
    }

    @GetMapping(value = "/names.ajax")
    @ResponseBody
    public Map<String, String> hoseon(){
        System.out.println("Ajax 호출");
        return new Hoseon().getHoseonMap();
    }

    @GetMapping(value = "/stnNames.ajax")
    @ResponseBody
    public String[] getStations(String subwayId){
        System.out.println(subwayId);
        return subwayMapper.getStationName(subwayId);
    }


    @GetMapping(value = "/{hoseon}")
    public ModelAndView view(@PathVariable("hoseon") String subwayId){
        ModelAndView mv = new ModelAndView("dashboard");
        mv.addObject("subId", subwayId);
        mv.addObject("hoseon",new Hoseon().getHoseonMap().get(subwayId));
        return mv;
    }

    @GetMapping(value = "/{hoseon}/{stnName}")
    public ModelAndView view(@PathVariable("hoseon") String subwayId,
                             @PathVariable("stnName") String stnName){
        ModelAndView mv = new ModelAndView("dashboard");
        mv.addObject("subId", subwayId);
        mv.addObject("hoseon",new Hoseon().getHoseonMap().get(subwayId));
        mv.addObject("subwayUp",subwayService.upSubwayInfo(stnName));
        mv.addObject("subwayDn",subwayService.dnSubwayInfo(stnName));

        return mv;
    }



}
