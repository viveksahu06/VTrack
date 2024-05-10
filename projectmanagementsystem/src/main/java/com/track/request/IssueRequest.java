package com.track.request;

import lombok.Data;

import java.time.LocalDate;
@Data
public class IssueRequest {
    private  String title;
    private String description;
    private String status;
    private long projectId;
    private String priority;
    private LocalDate dueDate;
}
