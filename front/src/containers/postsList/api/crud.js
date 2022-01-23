import { apiClient } from '../../../config/axios'

export const getPostsList = async () => {
    return apiClient.get('/posts');
}