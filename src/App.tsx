import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./Containers/Layout/Layout";
import DataList from "./Containers/DataList/DataList";

import "./App.css";
import AddPostForm from "./Containers/AddPost/AddPost";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <DataList />
            </Layout>
          }
        />
        <Route
          path="/add-post/:id?"
          element={
            <Layout>
              <AddPostForm />
            </Layout>
          }
        />
        {/* Other routes go here */}
      </Routes>
      <ToastContainer position="top-right" autoClose={5000} />
    </Router>
  );
};

export default App;
