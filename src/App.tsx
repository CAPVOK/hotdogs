import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SongPage, ChartsPage } from "./pages";
import ITunesPage from "./pages/ItunesPage";
import { ROUTES } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} index element={<ITunesPage />} />
        <Route path={ROUTES.CHARTS} element={<ChartsPage />} />
        <Route path={`${ROUTES.CHARTS}/:id`} element={<SongPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
