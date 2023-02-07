
import { useState,useEffect } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SingleRecipe from './components/SingleRecipe';
import { createContext } from 'react';
export const AppContext=createContext();


function App() {

    const [allRecipes,setAllRecipes]=useState([])       
    const [url,setUrl]=useState(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)


    useEffect(() => { fetch(url)
                        .then((res)=>res.json())
                        .then(data=>setAllRecipes(data.meals))
                        }, [url]);      
              
  return (
    <BrowserRouter>
     
        <div className="App">
        <AppContext.Provider value={{setUrl,allRecipes,setAllRecipes}}>
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
