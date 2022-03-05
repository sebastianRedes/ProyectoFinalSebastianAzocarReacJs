import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PokemonList from "./container/PokemonList";
//import PokemonWichList from "./container/PokemonWichList";
import Layaout from "./components/Layaout";
import Loader from "./components/Loader";

const PokemonWichList = lazy(() => import("./container/PokemonWichList"));
const App = () =>
  <BrowserRouter>
    <Layaout>
      <Switch>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemonwichlist" component={PokemonWichList} />
          <Redirect to="/" />
        </Suspense>
      </Switch>
    </Layaout>
  </BrowserRouter>;

export default App;
