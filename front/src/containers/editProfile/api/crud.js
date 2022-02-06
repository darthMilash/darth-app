import { apiClient } from '../../../config/axios'

export const getProfile = async (id) => {
    return apiClient.get(`/users/${id}`);
}

export const editProfile = async (id, data) => {
    return apiClient.put(`/users/${id}`, data);
}