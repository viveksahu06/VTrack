package com.track.controller;

import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.track.model.PlanType;
import com.track.model.User;
import com.track.responce.PaymentLinkResponse;
import com.track.service.UserService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
     @Value("${razorpay.api.key}")
    private String apiKey;
     @Value("${razorpay.api.secret}")
     private String apiSecret;

    @Autowired
    private UserService userService;

    @PostMapping("/{planType}")
    public ResponseEntity<PaymentLinkResponse> createPaymentLink(@PathVariable PlanType planType,
                                                                 @RequestHeader("Authorization") String jwt)throws Exception {
        User user=userService.findUserProfileByJwt(jwt);
        int amount=799*100;
        if (planType.equals(PlanType.ANNUALLY)) {
            amount = amount * 12;
            amount = (int) (amount * 0.7);
        }

            RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);

            JSONObject paymentLinkRequest = new JSONObject();
            paymentLinkRequest.put("amount", amount);
            paymentLinkRequest.put("currency", "INR"); // Fixed typo in "currency" key
            JSONObject customer = new JSONObject();

            customer.put("name", user.getFullName()); // Fixed typo in "getFullName" method
            customer.put("email", user.getEmail()); // Fixed typo in "getEmail" method
            paymentLinkRequest.put("customer", customer);

            JSONObject notify = new JSONObject();
            notify.put("sms", true); // Fixed typo in "true"
            paymentLinkRequest.put("notify", notify);

            paymentLinkRequest.put("callback_url", "https://localhost:5173/upgrade_plan/success?planType" + planType); // Fixed the key and value for callback_url

            PaymentLink payment = razorpay.paymentLink.create(paymentLinkRequest);

            String paymentLinkId = payment.get("id");
            String paymentLinkUrl = payment.get("short_url");

            PaymentLinkResponse res = new PaymentLinkResponse();
            res.setPayment_link_url(paymentLinkUrl);
            res.setPayment_link_id(paymentLinkId);


            return new ResponseEntity<>(res, HttpStatus.CREATED);

    }
}
