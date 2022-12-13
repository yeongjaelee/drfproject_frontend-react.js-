import logo from './logo.svg';
import './App.css';
import RestAPI from "./pages/RestAPI.js";
import Post from "./pages/Post.js";
import Post_create from "./pages/Post_create.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post_detail from "./pages/Post_detail";
import Main from "./pages/Main";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <header />
          <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="RestAPI/*" element={<RestAPI />}></Route>
              <Route path="/Post/*" element={<Post />}></Route>
              <Route path="Post/Post_create/*" element={<Post_create />}></Route>
              <Route path="Post/Post_detail/*" element={<Post_detail />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
