package com.brauch.brauch.repository.implementation;

import com.brauch.brauch.repository.dao.IUserDao;

public class AdminUser implements IUserDao {
    @Override
    public String getRights() {
        return null;
    }

    @Override
    public String getInfo() {
        return null;
    }

    @Override
    public boolean isActive() {
        return false;
    }
}
