import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./App.scss";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { Home } from "./Components/Home";
import { PostListPage } from "./Components/PostsList";
import { Post } from "./Components/Post";
import { useApp } from "./hooks/useApp";
import { Registration } from "./Components/Registry";

export type PostType = {
	id?: number;
	title: string;
	body: string;
	userId: number;
	tags: string[];
	reactions?: number;
};

function App() {
	const posts = useApp();
	const app = initializeApp(firebaseConfig);
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/posts/:id" element={<Post />} />
					{/* <Route path="/posts" element={<PostListPage {}/>} /> */}
					{/* <Route path="/register" element={<Registration />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
