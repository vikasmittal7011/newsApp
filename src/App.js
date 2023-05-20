import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [loading, setLoading] = useState(0);

  const apiKey = process.env.REACT_APP_NEWS_APP_API_KEY;

  const pageSize = 9;

  const setProgress = (progress) => {
    setLoading(progress);
  };
  return (
    <BrowserRouter>
      <LoadingBar color="red" progress={loading} />
      <NavBar />
      <main style={{ marginTop: "5rem" }}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                category="general"
                key="general"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                category="business"
                key="business"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                category="entertainment"
                key="entertainment"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                category="health"
                key="health"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                category="science"
                key="science"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                category="sports"
                key="sports"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                category="technology"
                key="technology"
                country="in"
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
