import { Route, Routes } from "react-router-dom";
import { PublicLayout } from "../layout/PublicLayout";

import { Checkout } from "../pages/Checkout";
import { Home } from "../pages/Home";

export function MainRouter() {
  return (
    <Routes>
      <Route path="" element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
