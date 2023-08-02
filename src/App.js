import './App.css';
import {Container} from '@mui/material';
import LoginPage from './components/Login';

function App() {
  return (
    <Container component="main" maxWidth="sm">
      <LoginPage/>
    </Container>
  );
}

export default App;
