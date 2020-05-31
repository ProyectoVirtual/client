import { AUMENTAR_CONTADOR, DISMINUIR_CONTADOR } from "../actions/actions"

const initialState = {
  contador: 10,
}

export default (state = initialState, actions) => {
  switch (actions.type) {
    case DISMINUIR_CONTADOR:
      return {
        ...state,
        contador: actions.payload,
      }
    case AUMENTAR_CONTADOR:
      return {
        ...state,
        contador: actions.payload,
      }
    default:
      return state
  }
}
