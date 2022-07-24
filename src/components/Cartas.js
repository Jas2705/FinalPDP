import { useNavigate } from 'react-router-dom'
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import useJuegos from "../hooks/useJuegos"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import Typography from "@mui/material/Typography"
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Cartaj1 from "./Cartaj1"
import Cartaj2 from "./Cartaj2"
import CadsWinners1 from "./CadsWinners1"
import CadsWinners2 from "./CadsWinners2"
import '../App.css'

const Cartas = () => {

  const { handleChangeState } = useJuegos()
  const { cartasj1, cartasj2, cartaswinner1, cartaswinner2, ganador, prioridad } = useJuegos()
  const { user1, user2 } = useContext(UserContext)
  const navigate = useNavigate()

  const handleChangeRestart = () => {
    navigate("/")
  }

  return (
    <>
      <div className="cartas-wrapper">
        <Button id="bt" variant="contained" color="error" onClick={handleChangeRestart}>
          <RestartAltIcon />
        </Button>
        <Grid container>
          <Grid item xs>
            <div className="header">
              Jugador # 1: {user1?.name}
            </div>
          </Grid>
          <Divider orientation="vertical" flexItem>
            <Button id="bt" variant="contained" color="success" onClick={handleChangeState}>
              <PlayCircleOutlineIcon />
            </Button>
          </Divider>
          <Grid item xs>
            <div className="header">
              Jugador # 2: {user2?.name}
            </div>
          </Grid>
        </Grid>
        <Typography align="center" marginY={5} component="h5" variant="h5">
          {ganador}
        </Typography>
        <Typography align="center" marginY={5} component="h5" variant="h5">
          {prioridad}
        </Typography>
        <Grid container columns={{ xs: 4 }}>
          <Grid item xs>
            Cartas Opcionadas
            {cartaswinner1.map((cartawinner1) => (
              <CadsWinners1 cartawinner1={cartawinner1} key={cartawinner1.code} />
            ))}
          </Grid>
          <Typography align="center" marginY={5} component="h5" variant="h5">
          </Typography>
          <Grid item xs>
            Cartas Opcionadas
            {cartaswinner2.map((cartawinner2) => (
              <CadsWinners2 cartawinner2={cartawinner2} key={cartawinner2.code} />
            ))}
          </Grid>

        </Grid>

        <Grid container columns={{ xs: 4 }}>
          <Grid item xs>
            Cartas Obtenidas
            {cartasj1.map((cartaj1) => (
              <Cartaj1 cartaj1={cartaj1} key={cartaj1.code} />
            ))}
          </Grid>
          <Divider orientation="vertical" flexItem>
          </Divider>
          <Grid item xs>
            Cartas Obtenidas
            {cartasj2.map((cartaj2) => (
              <Cartaj2 cartaj2={cartaj2} key={cartaj2.code} />
            ))}
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Cartas