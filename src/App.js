import './App.css';
import './App.css';
import Container from './Container';
import { ThemeProvider } from './context/ThemeContext';


function App() {
 

  return (
    <ThemeProvider>
    <div className="App">
      
      <Container></Container>
    </div>
    
    </ThemeProvider>

  );
}

export default App;
