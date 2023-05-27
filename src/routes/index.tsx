import { Route, Routes } from "react-router-dom";
import { PublicLayout } from "../layout/PublicLayout";

import { CheckoutPage } from "../pages/Checkout";
import { HomePage } from "../pages/Home";
import { SuccessPage } from "../pages/Success";

export function MainRouter() {
  return (
    <Routes>
      <Route path="" element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Route>
    </Routes>
  );
}
