import axios from "axios";

export async function signUpApi(data){
    return await axios.post("https://thejajetha.pythonanywhere.com/api/register/",data)
}

export async function getTokenApi(data){
    return await axios.post("https://thejajetha.pythonanywhere.com/api/token/",data)

}

export async function createAppointmentApi(data){
    let token=localStorage.getItem("token")
    console.log(token);
    
    let headers={Authorization:token}
    return await axios.post("https://thejajetha.pythonanywhere.com/api/appointments/",data,{headers})
}

export async function getAvailableSlotApi(date){
    return await axios.get(`https://thejajetha.pythonanywhere.com/api/appointments/slots/?date=${date}`)
}

export async function appointmentListApi(){
    let token=localStorage.getItem("token")
    let headers={Authorization:token}
    return await axios.get("https://thejajetha.pythonanywhere.com/api/appointments/",{headers})
}