import { apiClient } from '../../../config/axios'

export const getPost = async (id) => {
    return apiClient.get(`/posts/${id}`);
}
export const updatePost = async (id, data) => {
    return apiClient.put(`/posts/${id}`, data);
}