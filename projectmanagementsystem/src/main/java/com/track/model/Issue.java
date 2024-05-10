package com.track.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.persistence.Entity;
import lombok.Data;
import org.hibernate.annotations.Comments;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Issue {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private  String title;
    private String description;
    private String status;
    private long projectID;
    private String priority;
    private LocalDate dueDate;
    private List<String> tags=new ArrayList<>();




    @ManyToOne
    private User  assignee;
    @JsonIgnore
    @ManyToOne
    private Project project;

    @JsonIgnore
    @OneToMany(mappedBy = "issue",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Comment>comments=new ArrayList<>();



}
