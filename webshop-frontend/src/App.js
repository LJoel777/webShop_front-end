import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/products/Main";
import SliderContainer from "./components/main/slider/SliderContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailCard from "./components/main/products/DetailCard";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <SliderContainer /> */}
        <Route exact path="/:id" component={DetailCard} />
        <Route exact path="/" component={Main} />
      </Router>
    </div>
  );
}
export default App;
