import { apiClient } from '../../../config/axios'

export const getPost = async (id) => {
    return apiClient.get(`/posts/${id}`);
}