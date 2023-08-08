import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { InvoicePage } from "./pages/InvoicePage/InvoicePage";
import { OfficesPage } from "./pages/OfficesPage/OfficesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<InvoicePage />} />
        <Route path="/offices" element={<OfficesPage />} />
        <Route path="*" element={<InvoicePage />} />
      </Route>
    </Routes>
  );
}

export default App;
