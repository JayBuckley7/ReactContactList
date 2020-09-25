import "../../App.css";
import React, { Component } from "react";
import { Grid } from "@theme-ui/components";
import { Tbl } from "../../components/Table/tbl";

class App extends Component {
  state = {
    hasError: null,
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: error });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div>
          <h1>some error in child componet {hasError.toString()}</h1>
        </div>
      );
    }

    return (
      <div>
        <Grid
          sx={{
            width: "100%",
            height: "100%",
            bg: "#FFFFFF",
            padding: "20px",
          }}
        >
          {/* <Header /> */}
          <Tbl></Tbl>
        </Grid>
      </div>
    );
  }
}

export default App;
