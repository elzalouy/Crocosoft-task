import React from "react";
import "./App.css";
import { AppRoutes } from "../config";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {AppRoutes.map((item, index) => {
              return (
                <Route
                  key={index}
                  caseSensitive={false}
                  path={item.path}
                  children={(props: any) => {
                    return <item.component {...props} />;
                  }}
                />
              );
            })}
            <Redirect from="/" to="/Quizes" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
