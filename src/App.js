
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeTemplate } from "./templates";
import ScrollToTop from './ScrollToTop';
import Maintainance from "./pages/Maintainance";
import { publicRoutes } from "./routes";
import { Fragment } from "react";
import { Provider } from "react-redux";
import { store } from "./reudux/configStore";

function App() {
  return (
    <Provider store={store}>
          <BrowserRouter>
      <ScrollToTop />
        <Routes>
            {publicRoutes.map((route, index) => {
                const Page = route.component;
  
                let Layout = HomeTemplate;
  
                if(route.component === Maintainance) {
                  Layout = Fragment;
                } else if (route.status === 404) {
                  Layout = Fragment;
                }
  
                return (
                  <Route 
                    key={index}
                    path={route.path}
                    element={
                        <Layout>
                          <Page />
                        </Layout>
                    }
                  />
                )
              })}
        </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
