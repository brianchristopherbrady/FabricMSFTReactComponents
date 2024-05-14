import {
    Text,
  } from "@fabric-msft/fluent-react";
  import { FluentProvider } from "@fluentui/react-components";
  import { fabricLightTheme } from "@fabric-msft/theme";
  import React from "react";
  
  function Home() {
    return (
      <div className="container">
        <FluentProvider theme={fabricLightTheme}>
          <Text size="500" weight="semibold">
            <span>Fabric UX React App</span>
          </Text>
        </FluentProvider>
      </div>
    );
  }
  
  export default Home;
  