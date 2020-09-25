/**@jsx jsx */
import "./App.css";
import ThemeProvider from "./components/ThemeProvider";
import { jsx } from "theme-ui";
import { Flex } from "@theme-ui/components";
import { Router } from "@reach/router";

import SideNav from "./components/SideNav/component";
import Home from "./pages/Home/index";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MainScreenContainer from "./components/MainScreenContainer/component";

function App() {
  return (
    <ThemeProvider>
      <Flex>
        <SideNav />
        <MainScreenContainer>
          <Router>
            <Home path="/" />
          </Router>
        </MainScreenContainer>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
