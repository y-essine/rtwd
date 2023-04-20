import { API, mockApi } from "@services/api";

const userService = {
    getAll: () => API.get("/user/getAllUsers"),
    get: (id) => API.get(`/user/${id}`),
    ban: (id) => API.put(`/user/ban/${id}`),
    unban: (id) => API.put(`/user/unban/${id}`),
};

export default userService;
