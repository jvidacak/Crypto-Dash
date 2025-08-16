import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Header from "./components/Header";
import NotFoundPage from "./pages/not-found";
import CoinDetails from "./pages/coin-details";
const API_URL = import.meta.env.VITE_COINS_API_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("market_cap_desc");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false;`
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setCoins(data);
        setLoading(false);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, [limit]);

  return (
    <>
    <Header />
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            coins={coins}
            filter={filter}
            setFilter={setFilter}
            limit={limit}
            setLimit={setLimit}
            sortBy={sortBy}
            setSortBy={setSortBy}
            loading={loading}
            error={error}
          />
        }
      />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/coin/:id" element={<CoinDetails />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    </>
  );
};

export default App;
