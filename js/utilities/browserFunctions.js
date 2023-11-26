'use strict';

export const saveToLocalStorage = (key, value, isJson = false) => isJson ?
    localStorage.setItem(key, JSON.stringify(value)) : 
    localStorage.setItem(key, value);

export const getFromLocalStorage = (key, isJson = false) => 
isJson ? JSON.parse(localStorage.getItem(key)) : localStorage.getItem(key);

export const removeFromLocalStorage = (key) => localStorage.removeItem(key);

export const clearLocalStorage = () => localStorage.clear();

export const isLoggedIn = () => !!getFromLocalStorage('cv_tk');

export const saveToken = (token) => saveToLocalStorage('cv_tk', token);


export const logout = () => {
    removeFromLocalStorage('cv_tk');
    window.location.href = "login.html";
}

export const getToken = () => getFromLocalStorage('cv_tk');

export const redirectIfLoggedIn = () => {
    if (isLoggedIn()) {
        redirectTo("dashboard.html");
    }
}

export const redirectIfNotLoggedIn = () => {
    if (!isLoggedIn()) {
        redirectTo("login.html");
    }
}

export const redirectTo = (url) => window.location.href = url;