import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000",
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true,
});

// ---- For Signup ----
export const signup = async (userName: string, email: string, password: string, cPassword: string, role: string) => {
    try {
        const res = await api.post('/api/auth/register', { userName, email, password, cPassword, role });
        return res.data;
    } catch (error: any) {
        // Properly extract the error data
        const errorData = error.response?.data || { message: "Registration failed" };
        //console.log('Error data to throw:', errorData);
        throw errorData;
    }
};

export default api;