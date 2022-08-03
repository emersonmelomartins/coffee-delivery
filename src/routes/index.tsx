import { Route, Routes } from "react-router-dom";
import { PublicLayout } from "../layout/PublicLayout";
import { Home } from "../pages/Home";

export function MainRouter() {
  return (
    <Routes>
      <Route path="" element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
