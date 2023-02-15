
import { useState,useEffect } from 'react';
import './app.css'
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SingleRecipe from './components/SingleRecipe/SingleRecipe';
import { createContext } from 'react';
export const AppContext=createContext();


function App() {

    const [allRecipes,setAllRecipes]=useState([])    
    const [categories,setCategories]=useState([])
    const [menuOpen,setMenuOpen]=useState(false)   
    const [url,setUrl]=useState(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)


    useEffect(() => { fetch(url)
                        .then((res)=>res.json())
                        .then(data=>setAllRecipes(data.meals))
                        }, [url]);   
                        
    const filterCategory=(category)=>
    { 
       setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
       setMenuOpen(false)
                               
    }
              
  return (
    <BrowserRouter>
     
        <div className="App">
        <AppContext.Provider value={{setUrl,allRecipes,setAllRecipes,categories,setCategories,menuOpen,setMenuOpen,filterCategory}}>
          <Header/>  
        
          <Routes>          
             <Route path='/'  element={<Main/>}   />  
          
            <Route path='/:id' element={<SingleRecipe />}  />
          </Routes>

       </AppContext.Provider>

        </div>
    
    </BrowserRouter>
    
  );
}

export default App;
