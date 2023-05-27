import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./App.scss";
import { Route, Router, Routes } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { Home } from "./Components";

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

  
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
      <Home />
		</div>
	);
}

export default App;
