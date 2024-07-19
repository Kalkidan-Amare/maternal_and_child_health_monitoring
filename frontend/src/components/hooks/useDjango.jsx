import { useQuery } from 'react-query'
import request from '../utils/axios-utils'

const getData=(url)=> request({url})
const postData=(url, data)=>request({url,data, method:'post' })
const updateData=(url, data)=>request({url,data, method:'put' })
const deleteData=(url, data={})=>request({url,data, method:'delete' })

const useGet=(key, url, enabled=true)=> useQuery(key,
    ()=>getData(url), {enabled: enabled,})


export {useGet, postData, updateData, deleteData}