import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
// import reduxThunk from "redux-thunk"
import rootReducer from "./root-reducer"
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./usersaga";

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export default store