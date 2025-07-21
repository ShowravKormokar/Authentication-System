import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
    },
});

// ---- For Signup ----
export const signup = async (userName: string, email: string, password: string, cPassword: string, role: string = 'user') => {
    console.log(userName, email, password, cPassword, role);
    const res = await api.post('/api/auth/register', { userName, email, password, cPassword, role });
    console.log(res);
    return res.data
};

export default api;