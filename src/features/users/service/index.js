import { API, mockApi } from "@services/api";

const userService = {
    getAll: () => API.get("/users/all"),
    get: (id) => API.get(`/users/${id}`),
    ban: (id) => API.put(`/users/ban/${id}`),
    unban: (id) => API.put(`/users/unban/${id}`),
};

export default userService;
