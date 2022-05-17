import { Routes, Route } from "react-router-dom";
import StartPage from './routes/Startpage';
import ProductPage from "./routes/Productpage";

const App = () => (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="product/:productId" element={<ProductPage /> } />
    </Routes>
)

export default App;