import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/auth";

class AuthService {
    register(user) {
        return axios.post(`${API_BASE_URL}/register`, user);
    }

    login(credentials) {
        return axios.post(`${API_BASE_URL}/login`, credentials);
    }
}

// Tạo một instance của AuthService
const authServiceInstance = new AuthService();

// Xuất instance
export default authServiceInstance;