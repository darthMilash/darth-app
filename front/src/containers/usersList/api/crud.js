import { apiClient } from '../../../config/axios'

export const getUsersList = async () => {
    return apiClient.get('/users');
}