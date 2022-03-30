import "./App.css";
import Banner from "./components/Banner";
import Conocenos from "./components/Conocenos";
import Header from "./components/Header";
import Products from "./components/Products";
import Promociones from "./components/Promociones";
import RedesSociales from "./components/RedesSociales";
import SimpleBottomNavigation from "./components/SimpleBottomNavigation";
import Ubicacion from "./components/Ubicacion";

console.log(window.outerWidth);

function App() {
  return (
    <div>
      <Header />
      <Banner imagen={"/images/fondo-pedacito.png"} />
      <Conocenos />
      <Products />
      <Banner imagen={"/images/logosazón.jpg"} />
      <Promociones />
      <Ubicacion />
      <RedesSociales />
      {window.outerWidth < 768 && <SimpleBottomNavigation />}
    </div>
  );
}

export default App;
