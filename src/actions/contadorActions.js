import { AUMENTAR_CONTADOR, DISMINUIR_CONTADOR } from "./actions"

export const disminuir = cuenta => async dispatch => {
  let nuevoValor = 0
  if (cuenta > 0) nuevoValor = cuenta - 1
  10 > 0 == true // 10 - 1 = 9

  dispatch({
    type: DISMINUIR_CONTADOR,
    payload: nuevoValor,
  })
}
export const aumentar = cuenta => async dispatch => {
  const nuevoValor = cuenta + 1
  console.log(nuevoValor)

  dispatch({
    type: AUMENTAR_CONTADOR,
    payload: nuevoValor,
  })
}
