import instanceBaseurl from "../../Config/AxiosUrl"



export function loginRegister(data) {
    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/portfolio/login-register`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function otpConfirmation(data) {
    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/portfolio/otp-confirmation`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function getUserData() {
    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/portfolio/get`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function getUserAdminData() {
    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/portfolio/get/admin`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function MailRegister(data) {
    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/portfolio/mail/register`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

// profile Updated
export async function profileUpdated(data) {
    try {
        const response=await instanceBaseurl.post(`/portfolio/update/profile`, data);
        if(response)
            {
                await getUserData();
                return response;
            }
    } catch (error) {
        return error;
    }
    
}