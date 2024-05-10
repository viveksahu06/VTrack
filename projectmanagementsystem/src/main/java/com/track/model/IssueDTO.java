package com.track.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class IssueDTO {
    private Long id;
    private  String title;
    private String description;
    private String status;
    private long projectID;
    private String priority;
    private LocalDate dueDate;
    private List<String> tags=new ArrayList<>();
    private Project project;

    private User assignee;

}
