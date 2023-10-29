import { ProviderContext } from "./components/Context/Context";
import NavBar from "./components/NavBar/NavBar";
import MyRoutes from "./components/Routes/MyRoutes";

function App() {
  return (
    <ProviderContext>
      <div>
        <NavBar />
        <MyRoutes />
      </div>
    </ProviderContext>
  );
}

export default App;
