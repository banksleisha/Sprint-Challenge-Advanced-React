import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] =useLocalStorage("dark", false);

    useEffect(() =>{
        if (darkMode !== false) {
            document.body.classList.add("darkMode");
        } else {
            document.body.classList.remove("darkMode");
        }

        
}, [darkMode]);


return [darkMode, setDarkMode];
}

export default useDarkMode