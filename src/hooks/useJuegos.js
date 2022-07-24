import { useContext } from "react"
import GamersContext from "../context/GamersProvider"

const useJuegos = () => {
  return useContext(GamersContext)
}

export default useJuegos
