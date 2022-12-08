import logo from './logo.svg';
import './App.css';
import RestAPI from "./pages/RestAPI.js";
import Post from "./pages/Post.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <header />
          <Routes>
              <Route path="/" element={<RestAPI />}></Route>
              <Route path="/Post/*" element={<Post />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
