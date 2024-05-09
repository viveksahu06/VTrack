package com.track.service;

import com.track.config.JwtProvider;
import com.track.model.User;
import com.track.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Override
    public User findUserProfileByJwt(String jwt) throws Exception {
       String email= JwtProvider.getEmailFromToken(jwt);

        return findUserBYEmail(email);
    }

    @Override
    public User findUserBYEmail(String email) throws Exception {
        User user=userRepository.findByEmail(email);
        if(user==null){
            throw new Exception("user not found");
        }
        return user;
    }

    @Override
    public User findUserById(Long userId) throws Exception {

        Optional<User>optionalUser=userRepository.findById(userId);
        if(optionalUser.isEmpty()) {
            throw new Exception("user not found");
        }
        return optionalUser.get();
    }

    @Override
    public User updateUserProjectSize(User user, int number) {
        user.setProjectSize(user.getProjectSize()+number);
//        if(user.getProjectSize()==-1){
//
//        }
        return userRepository.save(user);
    }
}
