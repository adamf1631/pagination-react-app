import React from "react";

const Posts = ({ posts, loading }) => {
	const loadingComp = () => {
		return <h4 className='primary'>Loading...</h4>;
	};

	const results = posts.map((post) => (
		<div className='container'>
			<h5>{post.id}</h5>
			<article>{post.body}</article>
			<hr />
		</div>
	));

	return <div className='container'>{loading ? loadingComp() : results}</div>;
};

export default Posts;
