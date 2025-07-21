import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true,
});

// ---- For Signup ----
export const signup = async (userName: string, email: string, password: string, cPassword: string, role: string = 'user') => {
    // const res = await api.post('/api/auth/register', { userName, email, password, cPassword, role });
    // return res.data;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000"}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, email, password, cPassword, role }),
    });
    return res;
};

export default api;