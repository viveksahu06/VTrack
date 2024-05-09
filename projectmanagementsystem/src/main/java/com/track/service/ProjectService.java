package com.track.service;

import com.track.model.Chat;
import com.track.model.Project;
import com.track.model.User;

import java.util.List;

public interface ProjectService {
    Project createProject(Project project,User user) throws Exception;
    List<Project> getProjectByTeam(User user, String category, String tag) throws Exception;
  //  List<Project> getProjectByTeam(User user, String category, String tag) throws Exception;
    Project getProjectById(Long projectId)throws Exception;
    //delete project
    void deleteProject(Long projectId,Long userId) throws Exception;

    //update
    Project updateProject(Project updatedProject,Long id) throws Exception;

    //add user
    void addUserToProject(Long projectId,Long userId) throws  Exception;

    //remove user
    void removeUserFromProject(Long projectId,Long userId) throws  Exception;

    // all chat
    Chat getChatByProjectId(Long projectId) throws Exception;

    List<Project>searchProject(String keyword,User user) throws Exception;

}

