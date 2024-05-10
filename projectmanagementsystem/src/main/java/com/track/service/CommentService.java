package com.track.service;

import com.track.model.Comment;

import java.util.List;

public interface CommentService {
    Comment createComment(Long issueId,Long userId,String content) throws Exception;
    void deleteComment(Long commentId,Long userId) throws Exception;
    List<Comment> findCommentsByIssueId(Long issueId);
}
