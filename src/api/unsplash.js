import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID QSpQ5X9Q87eHIcDQsAE8sbpIZd0CKIonmD3bTKuwZkI'
    }
});