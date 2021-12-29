import Navbar from "./Components/Navbar";
import ALlRoutes from "./Routes/AllRoutes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Masai E-Commerce</h1>
      <Navbar />
      <ALlRoutes />
    </div>
  );
}
