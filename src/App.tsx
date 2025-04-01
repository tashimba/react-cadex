import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import { Contact, Home } from "./pages";

function App() {
  return (
    <Theme
      appearance="light"
      accentColor="blue"
      grayColor="gray"
      radius="medium"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
