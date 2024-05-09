package com.track.repository;

import com.track.model.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository <Chat,Long>{
}
