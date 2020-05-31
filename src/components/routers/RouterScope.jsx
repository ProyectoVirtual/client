import React from "react"
import { navigate } from "gatsby"

// Variable que mostrará si un usuario ha iniciado sección o no
const sectionStarted = false /* localStorage.getItem("seccion-iniciada") == "true" */
console.log(sectionStarted)

export const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!sectionStarted) {
    navigate("/app/login-iniciar-seccion")
    return null
  }

  return <Component {...rest} />
}

export const PublicRoute = ({ component: Component, ...rest }) => {
  if (sectionStarted) {
    navigate("/app")
    return null
  }

  return <Component {...rest} />
}
