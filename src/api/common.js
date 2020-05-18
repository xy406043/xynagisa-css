import axios from "../libs/axios"
export  default {
    tell: () => {
        return axios.request({
            url:"blog/common/tell",
            method:"get"
        }).then(resp => {
             return resp.data
        })
    }
}