import axios from "axios"

export default class SystemStaffService{
    getSystemStaffs(){
        return axios.get("http://localhost:8080/api/system_Staffs/getall")
    }
}

