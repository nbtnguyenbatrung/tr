// import axios from "axios"
// import * as types from "./actionType"


// const getNews = (news) => ({
//     type: types.GET_NEWS,
//     payload: news
// })

// const getnew = (news) => ({
//     type: types.GET_NEW,
//     payload: news
// })

// const getSearchNews = (news) => ({
//     type: types.GET_SEARCH_NEWS,
//     payload: news
// })

// const postNew = () => ({
//     type: types.POST_NEW,
// })

// const getcontact = (contact) => ({
//     type: types.GET_CONTACT,
//     payload: contact
// })

// const postcontact = () => ({
//     type: types.POST_CONTACT,
// })

// const putcontact = () => ({
//     type: types.PUT_CONTACT,
// })

// export const listnews = () => {
//     return function (dispatch) {
//         axios
//             .get("http://localhost:8080/api/new", {
//                 headers: {
//                     apikey: '691c5597-e7d2-4c06-af49-f9369b367783',
//                 }
//             })
//             .then((resp) => {
//                 dispatch(getNews(resp.data))
//             })
//             .catch((error) => console.log(error))
//     }
// }

// export const listnew = (id) => {
//     return function (dispatch) {
//         axios
//             .get(`http://localhost:8080/api/new/${id}`, {
//                 headers: {
//                     apikey: '691c5597-e7d2-4c06-af49-f9369b367783',
//                 }
//             })
//             .then((resp) => {
//                 dispatch(getnew(resp.data))
//             })
//             .catch((error) => console.log(error))
//     }
// }


// export const listsearchnews = (title) => {
//     return function (dispatch) {
//         axios
//             .get("http://localhost:8080/api/news", {
//                 headers: {
//                     apikey: "691c5597-e7d2-4c06-af49-f9369b367783",
//                 },
//                 params: {
//                    'SearchNew': title
//                 }
//             })
//             .then((resp) => {
//                 dispatch(getSearchNews(resp.data))
//             })
//             .catch((error) => console.log(error))
//     }
// }

// export const addnew = (newnew) => {
//     return function (dispatch) {
//         axios
//             .post(`${process.env.REACT_APP_API_NEW}`, newnew, {
//                 headers: {
//                     apikey: "691c5597-e7d2-4c06-af49-f9369b367783",
//                 }
//             })
//             .then((resp) => {
//                 dispatch(postNew())
//             })
//             .catch((error) => console.log(error))
//     }
// }

// export const listcontact = () => {
//     return function (dispatch) {
//         axios
//             .get(`${process.env.REACT_APP_API_CONTACT}`, {
//                 headers: {
//                     apikey: "691c5597-e7d2-4c06-af49-f9369b367783",
//                 }
//             })
//             .then((resp) => {
//                 dispatch(getcontact(resp.data))
//             })
//             .catch((error) => console.log(error))
//     }
// }

// export const addcontact = (contact) => {
//     return function (dispatch) {
//         axios
//             .post(`${process.env.REACT_APP_API_CONTACT}`, contact, {
//                 headers: {
//                     apikey: "691c5597-e7d2-4c06-af49-f9369b367783",
//                 }
//             })
//             .then((resp) => {
//                 dispatch(postcontact())
//             })
//             .catch((error) => console.log(error))
//     }
// }

// export const updatecontact = (contact, id) => {
//     return function (dispatch) {
//         axios
//             .put(`${process.env.REACT_APP_API_CONTACT}/${id}`, contact , {
//                     headers: {
//                         apikey: "691c5597-e7d2-4c06-af49-f9369b367783",
//                     }
//             })
//             .then((resp) => {
//                 dispatch(putcontact())
//             })
//             .catch((error) => console.log(error))
//     }
// }


import * as types from "./actionType"


// load news
export const loadNewsStart = () => ({
  type: types.LOAD_NEWS_START
})

export const loadNewsSuccess = (news) => ({
  type: types.LOAD_NEWS_SUCCESS,
  payload: news
})

export const loadNewsError = (error) => ({
  type: types.LOAD_NEWS_ERROR,
  payload: error
})


// get new
export const getNewStart = (id) => ({
  type: types.GET_NEW_START,
  payload : id
})

export const getNewSuccess = (news) => ({
  type: types.GET_NEW_SUCCESS,
  payload: news
})

export const getNewError = (error) => ({
  type: types.GET_NEW_ERROR,
  payload: error
})


// get search new
export const getSearchNewStart = (title) => ({
  type: types.GET_SEARCH_NEWS_START,
  payload : title
})

export const getSearchNewSuccess = (news) => ({
  type: types.GET_SEARCH_NEWS_SUCCESS,
  payload: news
})

export const getSearchNewError = (error) => ({
  type: types.GET_SEARCH_NEWS_ERROR,
  payload: error
})
