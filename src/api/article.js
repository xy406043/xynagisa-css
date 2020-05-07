import axios from "../libs/axios"

export default {
    getArticleList: (data) =>{
        return axios.request({
            url:"blog/article/getArticleList",
            method:"post",
            data
        }).then(resp => {
            return resp.data
        })
    },
    getArchiveList: (data) =>{
        return axios.request({
            url:"blog/article/getArchiveList",
            method:"post",
            data
        }).then(resp => {
            return resp.data
        })
    },
    getTags: () =>{
        return axios.request({
            url:"blog/article/getTags",
            method:"get"
        }).then(resp => {
            return resp.data
        })
    },
    getGroupList: () =>{
        return axios.request({
            url:"blog/article/getGroupList",
            method:"get"
        }).then(resp => {
            return resp.data
        })
    }
}