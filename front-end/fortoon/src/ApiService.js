import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8082";

class ApiService {

    genre(){
        return axios.get(USER_API_BASE_URL+'/genre');
    }

    resultToon(){
        return axios.get(USER_API_BASE_URL+'/resultToon');
    }

    drawingStyle(){
        return axios.get(USER_API_BASE_URL+'/drawingStyle')
    }

    // tag(){
    //     return axios.get(USER_API_BASE_URL+'/tag')
    // }

    getTag(tagList){
        return axios.post(USER_API_BASE_URL+'/tag', tagList)
    }

    imageLoad(filename){
        return axios.get(USER_API_BASE_URL+'/imagePath/'+filename)
    }

    modalImageLoad(filename){
        return axios.get(USER_API_BASE_URL+'/modalImagePath/'+filename)
    }

    slideImageLoad(filename){
        return axios.get(USER_API_BASE_URL+'/ImagePath/slides/'+filename)
    }

    synopsis(){
        return axios.get(USER_API_BASE_URL+'/synopsis')
    }

    calcResult(result){
        return axios.post(USER_API_BASE_URL+'/calcResult', result)
    }
    // fetchUsers(){
    //     return axios.get(USER_API_BASE_URL);
    // }

    // fetchUserByID(userID){
    //     return axios.get(USER_API_BASE_URL + '/' + userID);
    // }

    // deleteUser(userID){
    //     return axios.delete(USER_API_BASE_URL + '/' + userID);
    // }

    // addUser(user){
    //     return axios.post(USER_API_BASE_URL, user);
    // }

    // editUser(user){
    //     return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    // }
}

export default new ApiService();