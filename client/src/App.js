import { Routes, Route } from "react-router-dom";
import ItemType from "./components/itemTypes/ItemType";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<ItemType />} />
    </Routes>
  </>
)

export default App;
