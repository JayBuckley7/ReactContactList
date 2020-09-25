/**@jsx jsx */
//import { Link } from '@reach/router'
import { jsx } from "theme-ui";
import { Flex } from "@theme-ui/components";

import ThemeProvider from "../ThemeProvider";
import Nav from "./Nav";

const SideNav = () => {
  return (
    <ThemeProvider>
      <Flex
        bg="#1f262d"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: ["0px", "180px", "220px"],
          height: "100vh",
        }}
      >
        
        <Nav />
      </Flex>
    </ThemeProvider>
  );
};

export default SideNav;
