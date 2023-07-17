import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

export default function MainRouter() {
  const {loading} = useSelector(state => state.expenseReducer) 
  return (
    <Router>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}
