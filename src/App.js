import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// eslint-disable-next-line
import { Fragment } from "react";
import { DefaultLayout } from "~/Layout";
import { publicRoute } from "~/routes/index";
import PrivateComponent from "./Layout/components/Route/PrivateComponent";

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
                  <PrivateComponent isPrivate={false}>
                    <Layout>
                      <Page />
                    </Layout>
                  </PrivateComponent>
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
