import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoute, privateRoute } from "~/routes-index";
import { DefaultLayout } from "~/components/Layout";
import React, { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((route, indes) => {
            const Layout =
              route.layout === null ? Fragment : route.layout || DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={indes}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
