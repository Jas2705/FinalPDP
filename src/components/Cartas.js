import { useNavigate } from 'react-router-dom'
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import useJuegos from "../hooks/useJuegos"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import MoodIcon from '@mui/icons-material/Mood';
import MoodBadIcon from '@mui/icons-material/MoodBad';
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
              <h2> Jugador # 1 {user1?.name} </h2>   
            </div>
          </Grid>
          <Divider orientation="vertical" flexItem>
            <Button id="bt" disabled={ganador} variant="contained" color="success" onClick={handleChangeState}>
              <PlayCircleOutlineIcon />
            </Button>
          </Divider>
          <Grid item xs>
            <div className="header">
              <h2>Jugador # 2 {user2?.name}</h2>
            </div>
          </Grid>
        </Grid>
        <Typography align="center" marginY={5} component="h5" variant="h5">
          {ganador} 
        </Typography>
        <Typography align="center" marginY={5} component="h5" variant="h5">
          {prioridad}
        </Typography>

        <Grid container columns={{ lg: 4 }}>          
          <Grid item lg>
            <h2>Cartas Opcionadas</h2>
          </Grid>
          <Divider orientation="vertical" flexItem>
          </Divider>
          <Grid item lg>
            <h2>Cartas Opcionadas</h2>
          </Grid>
        </Grid>
        

        <Grid container columns={{ xs: 4 }}>          
          {cartaswinner1.map((cartawinner1) => (
            <Grid item xs>
              <CadsWinners1 cartawinner1={cartawinner1} key={cartawinner1.code} />
            </Grid>
          ))}         
          <Divider orientation="vertical" flexItem>
          </Divider>
          {cartaswinner2.map((cartawinner2) => (
            <Grid item xs>
              <CadsWinners2 cartawinner2={cartawinner2} key={cartawinner2.code} />
            </Grid>
          ))}
        </Grid>

        <Grid container columns={{ lg: 4 }}>          
          <Grid item lg>
            <h2>Cartas Obtenidas</h2>
          </Grid>
          <Divider orientation="vertical" flexItem>
          </Divider>
          <Grid item lg>
            <h2>Cartas Obtenidas</h2>
          </Grid>
        </Grid>

        <Grid container columns={{ lg: 4 }}>          
          <Grid item lg>
              <Grid container columns={{ xs: 4 }}>
              {cartasj1.map((cartaj1) => (
                <Grid item xs>
                  <Cartaj1 cartaj1={cartaj1} key={cartaj1.code} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Divider orientation="vertical" flexItem>
          </Divider>
          <Grid item lg>
            <Grid container columns={{ sm: 4 }}>          
              {cartasj2.map((cartaj2) => (                  
                <Grid item xs>
                  <Cartaj2 cartaj2={cartaj2} key={cartaj2.code} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>



        
        

      </div>
    </>
  )
}

export default Cartas