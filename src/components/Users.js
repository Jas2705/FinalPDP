import { useState } from 'react'
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from 'react-router-dom'
import AccountCircle from '@mui/icons-material/AccountCircle'
import SendIcon from '@mui/icons-material/Send'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import '../App.css'


const Users = () => {

  const [jugador1, setJugador1] = useState('')
  const [jugador2, setJugador2] = useState('')
  const [open, setOpen] = useState(false)
  const { setUser1, setUser2 } = useContext(UserContext)
  const navigate = useNavigate()

  const handlerSetUser = () => {
    setUser1({ name: jugador1 })
    setUser2({ name: jugador2 })
    if((jugador1 || jugador2)===''){
      setOpen(true)
    }else if(jugador1===''){
      setOpen(true)
    }else if(jugador2===''){
      setOpen(true)
    }else{
      navigate("/cartas")
    }
  }
  const handleClose = () => {
    setOpen(false)
  };

  return (
    <>
      <div className="container">
        <div className="app-wrapper">

          <FormControl fullWidth variant="standard" >
            <InputLabel htmlFor="input-with-icon-adornment">
              Jugador # 1
            </InputLabel>

            <Input
              id="input-with-icon-adornment"
              name="namej1"
              required={true}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              onChange={(event) => setJugador1(event.target.value)}
            />
          </FormControl>
          <div><br></br></div>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Jugador # 2
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              name="namej2"
              required={true}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              onChange={(event) => setJugador2(event.target.value)}
            />
          </FormControl>

          <div><br></br></div>
          <Stack direction="row" spacing={2}>
            <Button id="bt" color="success" variant="contained" endIcon={<SendIcon />} onClick={handlerSetUser}>
              Ingresar
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Alerta"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  !Los campos no pueden estar vacíos!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} autoFocus>
                  Cerrar
                </Button>
              </DialogActions>
            </Dialog>
          </Stack>
        </div>
      </div>
    </>
  )
}

export default Users