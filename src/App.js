import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Fluent from "./Fluent";
import React from "react";
import Fabric from "./Fabric";
import Home from "./Home";
import { FluentProvider } from "@fluentui/react-components";
import { fabricLightTheme } from "@fabric-msft/theme";
import {
  Text,
  Button
} from "@fabric-msft/fluent-react";
function App() {
  return (
    <FluentProvider theme={fabricLightTheme}>
      <Router>
        <div className="container">
          <nav
            style={{ display: "flex", justifyContent: "space-between", padding: "24px" }}
          >
            <Text size="500" weight="bold" as="h1"><h1>@fabric-msft/ react packages</h1></Text>
            <div
             style={{ display: "flex", justifyContent: "center", gap: "12px"}}
            >
            <Link to="/">
              <Button appearance="secondary">Home</Button>
            </Link>
            <Link to="/fluent">
              <Button appearance="primary">Fluent</Button>
            </Link>
            <Link to="/fabric">
              <Button appearance="primary">Fabric</Button>
            </Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fluent" element={<Fluent />} />
            <Route path="/fabric" element={<Fabric />} />
          </Routes>
        </div>
      </Router>
    </FluentProvider>
  );
}

export default App;
