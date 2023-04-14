import { API } from "@services/api";

const courseService = {
    getAll: () => API.get("/course"),
    get: (id) => API.get(`/course/${id}`),
    create: (instructorId) => API.post(`/course/${instructorId}`),
    update: (id) => API.put(`/course/${id}`),
    delete: (id) => API.delete(`/course/${id}`),
};

export default courseService;
