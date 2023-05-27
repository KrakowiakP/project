import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./App.scss";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { Home } from "./Components/Home";
import { PostListPage } from "./Components/PostsList";

const app = initializeApp(firebaseConfig);

export type PostType = {
	id?: number;
	title: string;
	body: string;
	userId: number;
	tags: string[];
	reactions?: number;
};

function App() {
	return  (
  
      <div>
        <BrowserRouter>
          <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/posts" element={<PostListPage {list}/>} /> */}
      </Routes>
      </BrowserRouter>
      </div>
   
  );
}

export default App;
