import axios from "axios";
const baseRoute = "home";
const indexURL = "https://apimanga.mangasocial.online"

const backendAxios = axios.create({
    baseURL: "https://apimanga.mangasocial.online"
});
const id_user = () =>{
    if(sessionStorage.getItem("user_id")==null){
        return 0;
    }
    else
    return sessionStorage.getItem("user_id");
}
const prodApis = {
    index: () => {
        return backendAxios.get()
    },
    show: (id) => {
        return backendAxios.get(baseRoute + "/" + id)
    },
    server: (index)=>{
        return backendAxios.get(indexURL + "/" + index +"/manga/"+id_user()+"/")
    },
    server_novel: (index)=>{
        return backendAxios.get(indexURL + "/" + index +"/novel/"+id_user()+"/")
    }
}
export default prodApis
