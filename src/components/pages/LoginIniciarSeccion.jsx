import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { motion } from "framer-motion"
import { EggFill } from "react-bootstrap-icons"

const Button1 = styled.button`
  ${tw`bg-red-500 text-2xl px-5 py-1 rounded text-white`}
`

const LoginIniciarSeccion = () => {
  return (
    <div className="bg-yellow-200 flex justify-center items-center h-screen w-screen">
      <EggFill className="text-red-800 text-2xl" />
    </div>
  )
}

export default LoginIniciarSeccion
