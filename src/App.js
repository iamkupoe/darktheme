import React, {useState} from "react";
import './App.css';
import useLocalStorage from 'use-local-storage';
import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    
    <div className="App" data-theme={theme}>
    {/*<DarkModeToggle
    onChange={setIsDarkMode}
    checked={isDarkMode}
    size={80}
    />*/}
      <button onClick={switchTheme} style={{width: 50, height: 50, borderRadius: "50%"}}>
         {theme === 'light' ? 'Dark' : 'light'} 
      </button>
    </div>
   
  );
}

export default App;
