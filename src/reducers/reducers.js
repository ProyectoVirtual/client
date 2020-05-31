import { combineReducers } from "redux"
import contadorReducers from "./contadorReducers"

export default combineReducers({
  contador: contadorReducers,
})
