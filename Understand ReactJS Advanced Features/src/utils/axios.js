import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_NEWS_URL
})

instance.defaults.headers.common['X-Api-Key'] = import.meta.env.VITE_REACT_APP_NEWS_API_KEY

export default instance