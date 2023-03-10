import {
 BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Games from "./components/Games";
import Game from "./components/Game";
import Find from "./components/Find";
import Help from "./components/Help";
import Add from "./components/Add";
import Questions from "./components/Questions";
import { FavoritesProvider } from "./context/FavoritesContext";
import { SignProvider } from "./context/SignContext";
import FavoriteGames from "./components/FavoriteGames";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";


function App() {
  return (
    <div className="App">
      <SignProvider>
      <FavoritesProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route element={<ProtectedRoutes />}>
      <Route path="about" element={<About />}/>
      <Route path="find" element={<Find />}/>
      <Route path="favorite" element={<FavoriteGames />}/>
      

      <Route path="help" element={<Help />}>
      <Route path="questions" element={<Questions/>}/>
      </Route>

      <Route path="add" element={<Add />}/>
      <Route path="games" element={<Games />}/>
      <Route path=":id" element={<Game />} />
      </Route>
      <Route path="login" element={<Login />}/>
      </Routes>
      </BrowserRouter>
      </FavoritesProvider>
      </SignProvider> 
    </div>
  );
}

export default App;
