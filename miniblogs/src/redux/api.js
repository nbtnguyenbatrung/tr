import axios from "axios";


export const loadNewsApi = async () => 
  await axios.get("http://localhost:8080/api/new", {
    headers: {
        apikey: '691c5597-e7d2-4c06-af49-f9369b367783',
    }
})

export const getNewApi = async (id) => 
  await axios.get("http://localhost:8080/api/new/"+id, {
    headers: {
        apikey: '691c5597-e7d2-4c06-af49-f9369b367783',
    }
})

export const getsearchNewApi = async (title) => 
  await axios.get("http://localhost:8080/api/news", {
    headers: {
        apikey: "691c5597-e7d2-4c06-af49-f9369b367783",
    },
    params: {
       SearchNew : title
    }
})
