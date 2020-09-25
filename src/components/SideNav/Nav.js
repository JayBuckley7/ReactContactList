/**@jsx jsx */
//import { Link } from '@reach/router'
import { jsx } from "theme-ui";
import { Flex, NavLink } from "@theme-ui/components";

import ThemeProvider from "../ThemeProvider";

const Nav = () => {
  const url = document.URL;
  var path = url.substr(url.lastIndexOf("/"), url.length);

  return (
    <ThemeProvider>
      <Flex
        as="nav"
        py={2}
        sx={{ flexDirection: "column", alignItems: "center", color: "text" }}
      >
        <NavLink href="/" variant={path === "/" ? "navActive" : "nav"}>
          Contacts
        </NavLink>
      </Flex>
    </ThemeProvider>
  );
};

export default Nav;
