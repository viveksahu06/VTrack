package com.track.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Cascade;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String fullName;
    private String email;
    private String password;

    @JsonIgnore
    @OneToMany(mappedBy = "assignee",cascade= CascadeType.ALL)
    private List<Issue> assignedIssue= new ArrayList<>();
    private int projectSize;



}
