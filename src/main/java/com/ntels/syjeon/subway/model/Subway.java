package com.ntels.syjeon.subway.model;

import java.util.List;

/**
 * @author syjeon@ntels.com
 */
public class Subway {
    private ErrorMessage errorMessage;

    private List<RealtimeArrivalList> realtimeArrivalList;

    public void setErrorMessage(ErrorMessage errorMessage){
        this.errorMessage = errorMessage;
    }
    public ErrorMessage getErrorMessage(){
        return this.errorMessage;
    }
    public void setRealtimeArrivalList(List<RealtimeArrivalList> realtimeArrivalList){
        this.realtimeArrivalList = realtimeArrivalList;
    }
    public List<RealtimeArrivalList> getRealtimeArrivalList(){
        return this.realtimeArrivalList;
    }

    @Override
    public String toString() {
        return "Subway{" +
                "errorMessage=" + errorMessage +
                ", realtimeArrivalList=" + realtimeArrivalList +
                '}';
    }
}
