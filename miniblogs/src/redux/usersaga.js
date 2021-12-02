import { all, call, delay, fork, put, takeEvery, takeLatest } from "redux-saga/effects"
import {  loadNewsSuccess, loadNewsError, getNewSuccess, getNewError, getSearchNewSuccess ,getSearchNewError } from "./actions"
import * as types from "./actionType"
import { loadNewsApi, getNewApi, getsearchNewApi } from "./api"

// function load new

function* onLoadNewsStartAsync () {
  try {
    const response = yield call(loadNewsApi)
    if(response.status === 200) {
      yield put(loadNewsSuccess(response.data))
    }
  } 
  catch(error) {
    yield put(loadNewsError(error.response.data))
  }
}

function* onLoadNews () {
  yield takeLatest(types.LOAD_NEWS_START,onLoadNewsStartAsync)
}


// function get new

function* onGetNewStartAsync (id) {
  try {
    const response = yield call(getNewApi,id.payload)
    if(response.status === 200) {
      yield put(getNewSuccess(response.data))
    }
  } 
  catch(error) {
    yield put(getNewError(error.response.data))
  }
}

function* onGetNew () {
  yield takeEvery(types.GET_NEW_START,onGetNewStartAsync)
}


// function load search new

function* onLoadSearchNewsStartAsync (title) {
    try {
      const response = yield call(getsearchNewApi,title)
      if(response.status === 200) {
        yield put(getSearchNewSuccess(response.data))
      }
    } 
    catch(error) {
      yield put(getSearchNewError(error.response.data))
    }
  }
  
  function* onLoadSearchNews () {
    yield takeEvery(types.GET_SEARCH_NEWS_START,onLoadSearchNewsStartAsync)
  }

  const userSagas = [fork(onLoadNews), fork(onGetNew), fork(onLoadSearchNews)]

export default function* rootSaga() {
  yield all([...userSagas])
}


