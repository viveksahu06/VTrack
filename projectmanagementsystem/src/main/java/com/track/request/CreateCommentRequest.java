package com.track.request;

import lombok.Data;

@Data
public class CreateCommentRequest {
    private Long issueId;
    private String content;


}
