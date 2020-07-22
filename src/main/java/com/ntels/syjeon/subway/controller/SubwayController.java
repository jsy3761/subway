package com.ntels.syjeon.subway.controller;

import com.ntels.syjeon.subway.service.SubwayServiceImpl;
import com.ntels.syjeon.subway.dao.SubwayMapper;
import com.ntels.syjeon.subway.model.Hoseon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.relational.core.sql.In;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;
import java.util.Random;

/**
 * @author syjeon@ntels.com
 */
@Controller
public class SubwayController {

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
        return new Hoseon().getHoseonMap();
    }

    @GetMapping(value = "/stnNames.ajax")
    @ResponseBody
    public String[] getStations(String subwayId){
        System.out.println("Ajax");
        return subwayService.getStnNames(subwayId);
    }

    @GetMapping(value = "/time.ajax")
    @ResponseBody
    public int getime(){
        return 500;
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
        mv.addObject("subwayUp",subwayService.upSubwayInfo(stnName,subwayId));
        mv.addObject("subwayDn",subwayService.dnSubwayInfo(stnName,subwayId));

        return mv;
    }



}
