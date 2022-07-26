import { createContext, useEffect, useState } from "react"
import axios from "axios"

const GamersContext = createContext()

const GamersProvider = ({ children }) => {
  const [state, setState] = useState(0)
  const [gamerone, setGamerone] = useState([])
  const [cartasj1, setCartasj1] = useState([])
  const [cartasj2, setCartasj2] = useState([])
  const cartaswinner1 = []
  const cartaswinner2 = []
  var ganador, prioridad = ''
  var prij1 = 0, prij2 = 0

  const handleChangeState = () => {
    setState(state + 1)
  }

  const arrayCartasj1 = () => {
    for (var i = 0; i < cartasj1.length; i++) {
      for (var j = 0; j < cartasj1.length; j++) {
        if (cartasj1[i].value === cartasj1[j].value && i !== j) {
          cartaswinner1[0] = cartasj1[i]
          cartaswinner1[1] = cartasj1[j]
          return true
        }
      }
    }
  }

  const arrayCartasj2 = () => {
    for (var i = 0; i < cartasj2.length; i++) {
      for (var j = 0; j < cartasj2.length; j++) {
        if (cartasj2[i].value === cartasj2[j].value && i !== j) {
          cartaswinner2[0] = cartasj2[i]
          cartaswinner2[1] = cartasj2[j]
          return true
        }
      }
    }
  }

  if (arrayCartasj1() === true) {
    ganador = 'Gano el Jugador N°: 1!'
  } else if (arrayCartasj2() === true) {
    ganador = 'Gano el Jugador N°: 2!'
  }

  if ((arrayCartasj1()) === true && (arrayCartasj2()) === true) {
    ganador = 'Empate!, Se define por prioridad'
    if ((cartaswinner1[0].suit) === "HEARTS") {
      prij1 = prij1 + 4
    } else if ((cartaswinner1[0].suit) === "SPADES") {
      prij1 = prij1 + 3
    }
    else if ((cartaswinner1[0].suit) === "DIAMONDS") {
      prij1 = prij1 + 2
    }
    else if ((cartaswinner1[0].suit) === "CLUBS") {
      prij1 = prij1 + 1
    }

    if ((cartaswinner1[1].suit) === "HEARTS") {
      prij1 = prij1 + 4
    } else if ((cartaswinner1[1].suit) === "SPADES") {
      prij1 = prij1 + 3
    }
    else if ((cartaswinner1[1].suit) === "DIAMONDS") {
      prij1 = prij1 + 2
    }
    else if ((cartaswinner1[1].suit) === "CLUBS") {
      prij1 = prij1 + 1
    }

    if ((cartaswinner2[0].suit) === "HEARTS") {
      prij2 = prij2 + 4
    } else if ((cartaswinner2[0].suit) === "SPADES") {
      prij2 = prij2 + 3
    }
    else if ((cartaswinner2[0].suit) === "DIAMONDS") {
      prij2 = prij2 + 2
    }
    else if ((cartaswinner2[0].suit) === "CLUBS") {
      prij2 = prij2 + 1
    }
    if ((cartaswinner2[1].suit) === "HEARTS") {
      prij2 = prij2 + 4
    } else if ((cartaswinner2[1].suit) === "SPADES") {
      prij2 = prij2 + 3
    }
    else if ((cartaswinner2[1].suit) === "DIAMONDS") {
      prij2 = prij2 + 2
    }
    else if ((cartaswinner2[1].suit) === "CLUBS") {
      prij2 = prij2 + 1
    }

    if (prij1 > prij2) {
      prioridad = 'Según la prioridad, gano el Jugador N°: 1!'
    } else {
      prioridad = 'Según la prioridad, gano el Jugador N°: 2!'
    }
  }
  useEffect(() => {
    const consultarAPIGamerone = async () => {
      //URL EMPATE const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AH,AS,AD,AC`
      const url = `https://deckofcardsapi.com/api/deck/new/shuffle/`
      const { data } = await axios(url)
      setGamerone(data.deck_id)
    };
    consultarAPIGamerone()
  }, [])

  useEffect(() => {

    const consultarAPI = async () => {
      const url = `http://deckofcardsapi.com/api/deck/${gamerone}/draw/?count=2`
      const { data } = await axios(url)
      setCartasj1([...cartasj1, data.cards[0]])
      setCartasj2([...cartasj2, data.cards[1]])
    }
    consultarAPI()
  }, [state])

  return (
    <GamersContext.Provider value={{ cartasj1, cartasj2, handleChangeState, state, cartaswinner1, cartaswinner2, ganador, prioridad }}>
      {children}
    </GamersContext.Provider>
  );
};

export { GamersProvider }
export default GamersContext