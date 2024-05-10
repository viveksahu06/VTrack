package com.track.controller;

import com.track.model.Chat;
import com.track.model.Message;
import com.track.model.User;
import com.track.request.CreateMessageRequest;
import com.track.service.MessageService;
import com.track.service.ProjectService;
import com.track.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {
    @Autowired
    private UserService userService;

    @Autowired
    private ProjectService projectService;
    @Autowired
    private MessageService messageService;
    @PostMapping("/send")
    public ResponseEntity<Message> sendMessage(@RequestBody CreateMessageRequest request)
            throws Exception {
        User user = userService.findUserById(request.getSenderId());

        Chat chats = projectService.getProjectById(request.getProjectId()).getChat();
        if (chats ==null) {
            throw new Exception("Chat not found");
        }

       Message sentMessage=messageService.sendMessage(
               request.getSenderId(),
               request.getProjectId(),
               request.getContent());
        return ResponseEntity.ok(sentMessage); // Corrected return statement
    }
    @GetMapping("/chat/{projectId}")
    public ResponseEntity<List<Message>> getMessagesByChatId(@PathVariable Long projectId)
            throws Exception {

        List<Message> messages = messageService.getMessagesByProjectId(projectId);
        return ResponseEntity.ok(messages);
    }

}
