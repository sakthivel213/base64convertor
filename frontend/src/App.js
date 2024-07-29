import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FileDisplay from "./FileDisplay";
import FileToBase64 from "./FileToBase64";
import AppBarWithTabs from "./AppBarWithTabs";

const App = () => {
  return (
    <Router>
      <div>
        <AppBarWithTabs />
        <Routes>
          <Route path="/base64-to-file" element={<FileDisplay />} />
          <Route path="/file-to-base64" element={<FileToBase64 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
