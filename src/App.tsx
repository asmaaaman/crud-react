import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
          path="/add-post"
          element={
            <Layout>
              <AddPostForm />
            </Layout>
          }
        />
        {/* Other routes go here */}
      </Routes>
    </Router>
  );
};

export default App;
