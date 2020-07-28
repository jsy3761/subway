package com.ntels.syjeon.subway.model.api;

/**
 * @author syjeon@ntels.com
 */
public class RealtimeArrivalList {
    private String beginRow;

    private String endRow;

    private String curPage;

    private String pageRow;

    private int totalCount;

    private int rowNum;

    private int selectedCount;

    private String subwayId;

    private String subwayNm;

    private String updnLine;

    private String trainLineNm;

    private String subwayHeading;

    private String statnFid;

    private String statnTid;

    private String statnId;

    private String statnNm;

    private String trainCo;

    private String ordkey;

    private String subwayList;

    private String statnList;

    private String btrainSttus;

    private String barvlDt;

    private String btrainNo;

    private String bstatnId;

    private String bstatnNm;

    private String recptnDt;

    private String arvlMsg2;

    private String arvlMsg3;

    private String arvlCd;

    public void setBeginRow(String beginRow){
        this.beginRow = beginRow;
    }
    public String getBeginRow(){
        return this.beginRow;
    }
    public void setEndRow(String endRow){
        this.endRow = endRow;
    }
    public String getEndRow(){
        return this.endRow;
    }
    public void setCurPage(String curPage){
        this.curPage = curPage;
    }
    public String getCurPage(){
        return this.curPage;
    }
    public void setPageRow(String pageRow){
        this.pageRow = pageRow;
    }
    public String getPageRow(){
        return this.pageRow;
    }
    public void setTotalCount(int totalCount){
        this.totalCount = totalCount;
    }
    public int getTotalCount(){
        return this.totalCount;
    }
    public void setRowNum(int rowNum){
        this.rowNum = rowNum;
    }
    public int getRowNum(){
        return this.rowNum;
    }
    public void setSelectedCount(int selectedCount){
        this.selectedCount = selectedCount;
    }
    public int getSelectedCount(){
        return this.selectedCount;
    }
    public void setSubwayId(String subwayId){
        this.subwayId = subwayId;
    }
    public String getSubwayId(){
        return this.subwayId;
    }
    public void setSubwayNm(String subwayNm){
        this.subwayNm = subwayNm;
    }
    public String getSubwayNm(){
        return this.subwayNm;
    }
    public void setUpdnLine(String updnLine){
        this.updnLine = updnLine;
    }
    public String getUpdnLine(){
        return this.updnLine;
    }
    public void setTrainLineNm(String trainLineNm){
        this.trainLineNm = trainLineNm;
    }
    public String getTrainLineNm(){
        return this.trainLineNm;
    }
    public void setSubwayHeading(String subwayHeading){
        this.subwayHeading = subwayHeading;
    }
    public String getSubwayHeading(){
        return this.subwayHeading;
    }
    public void setStatnFid(String statnFid){
        this.statnFid = statnFid;
    }
    public String getStatnFid(){
        return this.statnFid;
    }
    public void setStatnTid(String statnTid){
        this.statnTid = statnTid;
    }
    public String getStatnTid(){
        return this.statnTid;
    }
    public void setStatnId(String statnId){
        this.statnId = statnId;
    }
    public String getStatnId(){
        return this.statnId;
    }
    public void setStatnNm(String statnNm){
        this.statnNm = statnNm;
    }
    public String getStatnNm(){
        return this.statnNm;
    }
    public void setTrainCo(String trainCo){
        this.trainCo = trainCo;
    }
    public String getTrainCo(){
        return this.trainCo;
    }
    public void setOrdkey(String ordkey){
        this.ordkey = ordkey;
    }
    public String getOrdkey(){
        return this.ordkey;
    }
    public void setSubwayList(String subwayList){
        this.subwayList = subwayList;
    }
    public String getSubwayList(){
        return this.subwayList;
    }
    public void setStatnList(String statnList){
        this.statnList = statnList;
    }
    public String getStatnList(){
        return this.statnList;
    }
    public void setBtrainSttus(String btrainSttus){
        this.btrainSttus = btrainSttus;
    }
    public String getBtrainSttus(){
        return this.btrainSttus;
    }
    public void setBarvlDt(String barvlDt){
        this.barvlDt = barvlDt;
    }
    public String getBarvlDt(){
        return this.barvlDt;
    }
    public void setBtrainNo(String btrainNo){
        this.btrainNo = btrainNo;
    }
    public String getBtrainNo(){
        return this.btrainNo;
    }
    public void setBstatnId(String bstatnId){
        this.bstatnId = bstatnId;
    }
    public String getBstatnId(){
        return this.bstatnId;
    }
    public void setBstatnNm(String bstatnNm){
        this.bstatnNm = bstatnNm;
    }
    public String getBstatnNm(){
        return this.bstatnNm;
    }
    public void setRecptnDt(String recptnDt){
        this.recptnDt = recptnDt;
    }
    public String getRecptnDt(){
        return this.recptnDt;
    }
    public void setArvlMsg2(String arvlMsg2){
        this.arvlMsg2 = arvlMsg2;
    }
    public String getArvlMsg2(){
        return this.arvlMsg2;
    }
    public void setArvlMsg3(String arvlMsg3){
        this.arvlMsg3 = arvlMsg3;
    }
    public String getArvlMsg3(){
        return this.arvlMsg3;
    }
    public void setArvlCd(String arvlCd){
        this.arvlCd = arvlCd;
    }
    public String getArvlCd(){
        return this.arvlCd;
    }

    @Override
    public String toString() {
        return "RealtimeArrivalList{" +
                "beginRow='" + beginRow + '\'' +
                ", endRow='" + endRow + '\'' +
                ", curPage='" + curPage + '\'' +
                ", pageRow='" + pageRow + '\'' +
                ", totalCount=" + totalCount +
                ", rowNum=" + rowNum +
                ", selectedCount=" + selectedCount +
                ", subwayId='" + subwayId + '\'' +
                ", subwayNm='" + subwayNm + '\'' +
                ", updnLine='" + updnLine + '\'' +
                ", trainLineNm='" + trainLineNm + '\'' +
                ", subwayHeading='" + subwayHeading + '\'' +
                ", statnFid='" + statnFid + '\'' +
                ", statnTid='" + statnTid + '\'' +
                ", statnId='" + statnId + '\'' +
                ", statnNm='" + statnNm + '\'' +
                ", trainCo='" + trainCo + '\'' +
                ", ordkey='" + ordkey + '\'' +
                ", subwayList='" + subwayList + '\'' +
                ", statnList='" + statnList + '\'' +
                ", btrainSttus='" + btrainSttus + '\'' +
                ", barvlDt='" + barvlDt + '\'' +
                ", btrainNo='" + btrainNo + '\'' +
                ", bstatnId='" + bstatnId + '\'' +
                ", bstatnNm='" + bstatnNm + '\'' +
                ", recptnDt='" + recptnDt + '\'' +
                ", arvlMsg2='" + arvlMsg2 + '\'' +
                ", arvlMsg3='" + arvlMsg3 + '\'' +
                ", arvlCd='" + arvlCd + '\'' +
                '}';
    }
}
