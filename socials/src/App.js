
import { ThemeProvider } from './context/Theme';
import './App.css';
import MyPage from './pages/MyPage';

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <MyPage />
    </div>
    </ThemeProvider>
  );
}

export default App;
