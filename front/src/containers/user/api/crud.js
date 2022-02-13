import { apiClient } from '../../../config/axios'

export const getUserProfile = async (id) => {
    return apiClient.get(`/users/${id}`);
}

export const getUsersList = async () => {
    return apiClient.get('/users');
}

export const editUserProfile = async (id, data) => {
    return apiClient.put(`/users/${id}`, data);
}