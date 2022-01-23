import { apiClient } from '../../../config/axios'

export const getUserProfile = async (id) => {
    return apiClient.get(`/users/${id}`);
}