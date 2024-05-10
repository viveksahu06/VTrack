package com.track.service;

import com.track.model.Issue;
import com.track.model.User;
import com.track.request.IssueRequest;
import jdk.jshell.spi.ExecutionControl;

import java.util.List;
import java.util.Optional;

public interface IssueService {
    Issue getIssueById(Long issueId) throws Exception;
    List<Issue> getIssueByProjectId(Long projectId ) throws Exception;
    Issue createIssue(IssueRequest issue, User user) throws Exception;

   // Optional<Issue>updateIssue(Long issueId,IssueRequest updatedIssue,Long userId) throws UserException, IssueException;
    void deleteIssue(Long issueId,Long userid) throws Exception;
    //List<Issue>getIssueByAssigneeid(Long assigneeId) throws IssueException;
  //  List<Issue>searchIssues(String title,String status,String priority,Long assigneeId) throws IssueException;
    Issue addUserToIssue(Long issueId,Long userId) throws Exception;
    Issue updateStatus(Long issueId,String status) throws Exception;

}
