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

    tag(){
        return axios.get(USER_API_BASE_URL+'/tag')
    }

    loading(){
        return axios.get(USER_API_BASE_URL+'/imagePath/clover_loading.gif')
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