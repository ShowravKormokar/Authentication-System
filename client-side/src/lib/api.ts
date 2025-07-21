import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
    },
});

// ---- For Signup ----
export const signup = async (name: string, email: string, password: string, cPassword: string) => {
    const res = await api.post('/api/auth/register', { name, email, password, cPassword })
    return res.data
};

export default api;