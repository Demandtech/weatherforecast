import React from "react"
import { AppContext } from "../context"

export const useGlobalContext = () => {
  return React.useContext(AppContext)
}


