import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Games from "./components/Games";
import Game from "./components/Game";
import Find from "./components/Find";
import Help from "./components/Help";
import Add from "./components/Add";
import Footer from "./components/Footer";
import Questions from "./components/Questions";
import { FavoritesProvider } from "./context/FavoritesContext";
import { SignProvider } from "./context/SignProvider";
import FavoriteGames from "./components/FavoriteGames";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <main className="App">
      <SignProvider>
        <FavoritesProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="about" element={<About />} />
                <Route path="find" element={<Find />} />
                <Route path="favorite" element={<FavoriteGames />} />

                

                <Route path="add" element={<Add />} />
                <Route path="games" element={<Games />} />
                <Route path=":id" element={<Game />} />
              </Route>

              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
             
               <Route path="help" element={<Help />}>
                  <Route path="questions" element={<Questions />} />
                </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </FavoritesProvider>
      </SignProvider>
    </main>
  );
}

export default App;
