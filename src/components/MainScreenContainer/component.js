/**@jsx jsx */
import { jsx } from "theme-ui";
import { Container } from "@theme-ui/components";
const MainScreenContainer = (props) => {
  return (
    <div>
      <div>
        <h2> </h2>
        <h3> </h3>
        <h3> </h3>
        <h3> </h3>
        <h3> </h3>
        <h3> </h3>
      </div>
      <Container bg="#1f262d">{props.children}</Container>
    </div>
  );
};

export default MainScreenContainer;
