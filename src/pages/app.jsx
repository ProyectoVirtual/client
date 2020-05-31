import React from "react"
import { Router } from "@reach/router"
import Index from "../components/pages/Index"
import SeccionIniciada from "../components/pages/SeccionIniciada"
import SeccionNoIniciada from "../components/pages/SeccionNoIniciada"
import LoginIniciarSeccion from "../components/pages/LoginIniciarSeccion"
import My404Component from "../components/pages/My404Component"
import { PrivateRoute, PublicRoute } from "../components/routers/RouterScope"

/**
 * Públicas
 * Privadas
 * Globales  ---
 */

const App = () => (
  <Router basepath="/app">
    {/* Rutas privadas */}
    <PrivateRoute path="/" component={Index} />
    <PrivateRoute path="/seccion-iniciada" component={SeccionIniciada} />

    {/* Rutas Publicas */}
    <PublicRoute path="/seccion-no-iniciada" component={SeccionNoIniciada} />
    <PublicRoute
      path="/login-iniciar-seccion"
      component={LoginIniciarSeccion}
    />
    <My404Component default />
  </Router>
)

export default App
