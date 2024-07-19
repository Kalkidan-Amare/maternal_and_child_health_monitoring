import axios from "axios";

const client=axios.create({baseURL:'http://127.0.0.1:8000/api/'})

const request=async ({...options})=>{
    client.defaults.headers.common.Authorization=`JWT ${localStorage.getItem('access')}`
    client.defaults.headers.common.Accept='application/json'
    const onSuccess=response=>response
    const onError=error=>{
        console.log(error)
        throw error
    }
    try {
        const response = await client(options);
        return onSuccess(response);
    } catch (error) {
        return onError(error);
    }
}
export default request