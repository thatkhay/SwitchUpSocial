
import './App.css';
import MyPage from './pages/MyPage';
import { createContext, useState } from 'react';

export const Theme = createContext(null)

function App() {

  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme((currenTheme) => (
    currenTheme ==='light' ? 'dark' : 'light'
    ))}

  return (
<Theme.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
      <MyPage />
    </div>
    </Theme.Provider>
  );
}

export default App;
