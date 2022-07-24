import Container from "@mui/material/Container"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cartas from "./components/Cartas"
import Users from "./components/Users"
import { GamersProvider } from "./context/GamersProvider"
import UserProvider from "./context/UserProvider"

function App() {
  return (
    <UserProvider>
      <GamersProvider>
        <Container>
          <header>
          </header>
          <BrowserRouter>
            <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/cartas" element={<Cartas />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </GamersProvider>
    </UserProvider>

  );
}

export default App;
