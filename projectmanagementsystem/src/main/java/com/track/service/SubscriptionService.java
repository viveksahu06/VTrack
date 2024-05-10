package com.track.service;

import com.track.model.PlanType;
import com.track.model.Subscription;
import com.track.model.User;

public interface SubscriptionService {
    Subscription createSubscription(User user);

    Subscription getUsersSubscription(Long userId) throws Exception;

    Subscription upgradeSubscription(Long userId, PlanType planType);

    boolean isValid(Subscription subscription);

}
