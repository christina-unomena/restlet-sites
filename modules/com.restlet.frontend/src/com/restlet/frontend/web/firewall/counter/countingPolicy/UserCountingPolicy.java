package com.restlet.frontend.web.firewall.counter.countingPolicy;

import org.restlet.Request;

public class UserCountingPolicy implements CountingPolicy {

    @Override
    public String determineCounterValue(Request request) {

        if (request.getClientInfo().getUser() != null) {
            return request.getClientInfo().getUser().getIdentifier();
        }

        return null;
    }

}