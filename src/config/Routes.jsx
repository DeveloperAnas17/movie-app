import React from "react";

import { Route, Routes as Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/" exact element={<Home />} />
    </Switch>
    // <Switch>
    //   <Route path="/:category/search/:keyword" component={Catalog} />
    //   <Route path="/:category/:id" component={Detail} />
    //   <Route path="/:category" component={Catalog} />
    //   <Route path="/" exact component={Home} />
    // </Switch>
  );
};

export default Routes;
