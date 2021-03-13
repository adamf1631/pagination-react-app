import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currPage, setCurrPage] = useState(1);
	const [postsPerPage] = useState(5);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
			setPosts(res.data);
			setLoading(false);
		};
		fetchData();
	}, []);

	//get current post
	const indexOfLastPost = currPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber) => setCurrPage(pageNumber);

	return (
		<div className='container m-4'>
			<h4>My Blog</h4>
			<Posts posts={currentPosts} loading={loading} />
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={posts.length}
				paginate={paginate}
			/>
		</div>
	);
}

export default App;
