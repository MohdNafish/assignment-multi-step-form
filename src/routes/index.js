import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate } from "react-router-dom";
import Layout from '../layout';
import { AppRoutes } from "./AppRoutes";
import { createBrowserHistory } from "history";
import { routes } from "./Router";

const Routing = () => {
    const history = createBrowserHistory();
  return (
    <>
      <Router>
        <React.Suspense fallback={<div>Loading...</div>} >
          <Routes>
              {
                  routes.map(
                      ({layout: Layout, component: Component, ...restProps}) => (
                          <Route
                            {...restProps}
                            element={
                                <Layout>
                                    <Component history={history} />
                                </Layout>
                            }
                           />
                      )
                  )
              }
              <Route path='*' element={<Navigate replace to={AppRoutes.HOME} />} />
          </Routes>
          </React.Suspense>
      </Router>
    </>
  )
}

export default Routing