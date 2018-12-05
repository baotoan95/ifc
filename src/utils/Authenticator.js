export const isAuthenticated = () => {
    const userId = localStorage.getItem('userId');
    const access_token = localStorage.getItem('access_token');
    return userId && access_token;
}

export const saveUserInfo = (authInfo) => {
    localStorage.setItem('access_token', authInfo.token);
    localStorage.setItem('userId', authInfo.userId);
}

export const logout = () => {
    localStorage.clear();
}