import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import SeatSelection from "./pages/seatSelection";
import Payment from "./pages/payment";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="seatSelection" element={<SeatSelection />}></Route>
        <Route path="payment" element={<Payment />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
