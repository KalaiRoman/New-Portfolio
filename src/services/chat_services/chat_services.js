import instanceBaseurl from "../../Config/AxiosUrl"



export function chatUser(data) {
    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/portfolio/chat/portfolio-to-admin`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function chatDeleteUser(data) {
    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/portfolio/chat/message/delete`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


// admin user chat update


export function chatUpdateStatusUser(data) {

    console.log(data,"kalai")
    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/admin/auth/chat/user/status/update`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

