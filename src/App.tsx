import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AlbumPage, ChartsPage } from "./pages";
import ITunesPage from "./pages/ItunesPage";
import { ROUTES } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} index element={<ITunesPage />} />
        <Route path={ROUTES.ALBUMS} element={<ChartsPage />} />
        <Route path={`${ROUTES.ALBUMS}/:id`} element={<AlbumPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
