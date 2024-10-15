export const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        return user; 
    }
    return null;
};

export const registerUser = (username, email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);
    
    if (!userExists) {
        const newUser = { username, email, password, role: email === 'admin@example.com' ? 'admin' : 'user' };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        return true;
    }
    return false; 
};
