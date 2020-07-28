package com.ntels.syjeon.subway.model.api;

/**
 * @author syjeon@ntels.com
 */
public class ErrorMessage {
    private int status;

    private String code;

    private String message;

    private String link;

    private String developerMessage;

    private int total;

    public void setStatus(int status){
        this.status = status;
    }
    public int getStatus(){
        return this.status;
    }
    public void setCode(String code){
        this.code = code;
    }
    public String getCode(){
        return this.code;
    }
    public void setMessage(String message){
        this.message = message;
    }
    public String getMessage(){
        return this.message;
    }
    public void setLink(String link){
        this.link = link;
    }
    public String getLink(){
        return this.link;
    }
    public void setDeveloperMessage(String developerMessage){
        this.developerMessage = developerMessage;
    }
    public String getDeveloperMessage(){
        return this.developerMessage;
    }
    public void setTotal(int total){
        this.total = total;
    }
    public int getTotal(){
        return this.total;
    }

    @Override
    public String toString() {
        return "ErrorMessage{" +
                "status=" + status +
                ", code='" + code + '\'' +
                ", message='" + message + '\'' +
                ", link='" + link + '\'' +
                ", developerMessage='" + developerMessage + '\'' +
                ", total=" + total +
                '}';
    }
}
