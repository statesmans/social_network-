import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ff1d55d3-5135-41e4-8d01-a7f064f08b77'
   }
})

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                    .then(response => response.data)
    },
    unfollow (id) {
        return instance.delete(`follow/${id}`)
                    .then(response => response.data)
    },
    follow (id) {
        return instance.post(`follow/${id}`)
                    .then(response => response.data)
    }
}

export const profileAPI = {
    getUserInfo(userId) {
        return instance.get(`profile/${userId}`)
            .then( response => response.data)
    }
}

export const headerAPI = {
    authMe() {
        return instance.get("auth/me")
            .then( response => response.data)
    }
}