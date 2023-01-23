import { mockApi } from "@services/api";

const userService = {
    getAll: (page = 1, limit = 10) => mockApi.get(`/users?page=${page}&limit=${limit}`),
    get: (id) => mockApi.get(`/users/${id}`),
}

export default userService;