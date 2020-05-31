import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducers from "./reducers/reducers"

const state = {}
const middleware = [thunk]

const store = () =>
  createStore(
    rootReducers,
    state,
    compose(
      applyMiddleware(...middleware)
      // window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //   window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

export default store
