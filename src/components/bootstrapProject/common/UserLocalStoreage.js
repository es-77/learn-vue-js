export function setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

export function getUser() {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
}

export function clearUser() {
    localStorage.removeItem('user');
}
