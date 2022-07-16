import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "35b971ab-cbab-431d-8e1a-6741fea88e6e"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"

})


export const UserAPI = {

    getUsers(currentPage = 1, pageSize = 10) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    followUser(userId) {

        return instance.post(`follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "35b971ab-cbab-431d-8e1a-6741fea88e6e"
            }
        })
    },
    unfollowUser(userId) {

        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "35b971ab-cbab-431d-8e1a-6741fea88e6e"
            }
        })
    }
}

