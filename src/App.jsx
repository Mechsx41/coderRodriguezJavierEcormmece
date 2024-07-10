import './App.css'
import NavBar from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Container } from '@mui/material';

function App() {
  return (
  <Container>
    <NavBar />
    <ItemListContainer greeting="Ahorra tu tiempo en cada proceso" />
  </Container>
  )
}

export default App
