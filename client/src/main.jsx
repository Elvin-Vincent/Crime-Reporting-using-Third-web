import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StateContextProvider } from "./context";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { PolygonAmoyTestnet } from "@thirdweb-dev/chains";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThirdwebProvider
    activeChain={PolygonAmoyTestnet}
    // signer={signer}
    clientId="35f54b0dd60033ae3f80c93e76f45cd6"
  >
    <BrowserRouter>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </BrowserRouter>
  </ThirdwebProvider>
);
