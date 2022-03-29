import "./App.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmojiProvider } from "react-apple-emojis";
import emojiData from "react-apple-emojis/lib/data.json";

function App() {
  return (
    <BrowserRouter>
      <EmojiProvider data={emojiData}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </EmojiProvider>
    </BrowserRouter>
  );
}

export default App;
