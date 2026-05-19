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
        instanceBaseurl.post(`/api/contact`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export async function profileUpdated(data) {
    try {
        const response=await instanceBaseurl.post(`/update/profile`, data);
        if(response)
            {
                await getUserData();
                return response;
            }
    } catch (error) {
        return error;
    }
    
}

export async function userDowloadResume(){
    try{
        const response=await instanceBaseurl.post(`/download/resume`);
        if(response)
            return response;
    }
    catch(err){
        return err;
    }
}

export async function getuserDowloadResume(){
    try{
        const response=await instanceBaseurl.get(`/download/resume/count`);
        if(response)
            return response;
    }
    catch(err){
        return err;
    }
}



export async function userVisiter(){
    try{
        const response=await instanceBaseurl.post(`/visiter`);
        if(response)
            return response;
    }
    catch(err){
        return err;
    }
}

export async function getuserVisiterCount(){
    try{
        const response=await instanceBaseurl.get(`/visiter/count`);
        if(response)
            return response;
    }
    catch(err){
        return err;
    }
}