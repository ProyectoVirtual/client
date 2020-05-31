import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks"
import axios from "axios"

import { gql } from "apollo-boost"
const UPLOAD_FILE_M = `
  mutation uploadFile($file: Json) {
    uploadFile(file: $file)
  }
`

const Index = () => {
  const [file, setFile] = useState("")
  return (
    <div className="m-10 relative">
      <form
        encType={"multipart/form-data"}
        className="border p-8"
        onSubmit={async e => {
          e.preventDefault()
          const formData = new FormData()
          formData.append("title", "File")
          formData.append("file", file)
          try {
            const response = await axios.post("http://localhost:3000/graphql", {
              query: UPLOAD_FILE_M,
              body: {
                file:
                  "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas",
              },
            })
          } catch (err) {
            console.log("Error aquí =>", err)
          }
        }}
      >
        <input
          type="file"
          name="file"
          id="file"
          multiple={false}
          onChange={e => {
            const files = e.target.files[0]
            setFile(file)
          }}
        />
        <input
          className="btn btn-outline-blue cursor-pointer"
          type="submit"
          value="Enviar archivo"
        />
      </form>
    </div>
  )
}

export default Index
