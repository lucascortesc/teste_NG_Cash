import { Navigation } from "./Routes";
import { GlobalStyle } from "./Styles";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <Toaster />
    </div>
  );
}

export default App;
