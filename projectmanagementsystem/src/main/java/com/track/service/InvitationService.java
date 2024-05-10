package com.track.service;

import com.track.model.Invitation;
import jakarta.mail.MessagingException;
import org.hibernate.tool.schema.internal.IndividuallySchemaValidatorImpl;

public interface InvitationService {
    public void sendInvitation(String email,Long projectId) throws MessagingException;
    public Invitation acceptInvitation(String token, Long userId) throws Exception;

    public String getTokenByUserMail(String userEmail);

    void deleteToken(String token);

}
