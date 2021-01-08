import axios from 'axios'

const KEY = 'AIzaSyDc0NcwDN_DlLl_8IQqG615z_OLLyKPY8A';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    
    }
})

