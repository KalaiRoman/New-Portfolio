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
