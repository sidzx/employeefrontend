import { base_url } from "./baseurl";
import { commonRequest } from "./commonApi";

export const addemployee=async(body)=>{
    return await commonRequest('POST',`${base_url}/reg`,body,'')
}
export const viewemployee=async()=>{
    return await commonRequest('GET',`${base_url}/list`,'','')
}
export const deleteemployee=async(id)=>{
    return await commonRequest('DELETE',`${base_url}/del/${id}`,{},'')
}
export const editemployee=async(id,body)=>{
    return await commonRequest('PUT',`${base_url}/edit/${id}`,body,'')
}