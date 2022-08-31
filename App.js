import { render } from "react-dom";
import { StrictMode, useState } from "react";
import SearchParams from "./SearchParams";
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

//Pondremos el codigo aqui
//Componenente app, creando una instancia, luego creamos una instanica de la app.
//Se crea un div con forma h1 y con el texto Adopt me
//El ({}) es para ponerle el id

const App = () => {
  const theme = useState("darkblue");
    return (
      <StrictMode>
        <ThemeContext.Provider value = {theme}>
        <BrowserRouter>
          <header>
            <Link to= "/">Adopt Me!</Link>
           </header>
          <Routes>
             <Route path="/Details/:id" element={<Details />}/>
             <Route path="/" element={<SearchParams />}/>
          </Routes>
        </BrowserRouter>
        </ThemeContext.Provider>
      </StrictMode>
    );
};
  render(<App/>, document.getElementById("root"));