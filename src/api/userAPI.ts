import {api} from './instance'

export const userAPI = {
    getUsers() {
        return api.get('users')
    },
    getUserByID(userId) {
        return api.get(`users/${userId}`)
    },
    getUserPostsByID(userId) {
        return api.get(`users/${userId}/posts`)
    }
}
