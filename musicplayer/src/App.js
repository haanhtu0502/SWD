import { Route, Routes } from "react-router";
import "./App.scss";
import Header from "./components/Header/Header";
import FindSong from "./pages/FindSong";
import ListSong from "./pages/ListSong";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-wrapper">
        <Routes>
          <Route exact path="/" element={<ListSong />} />
          <Route path="/song" element={<FindSong />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
