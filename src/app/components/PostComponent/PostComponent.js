import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PostCard from "./helpers/PostCard";
import Pagination from "./helpers/Pagination";
import PostForm from "./PostForm";

import { getPosts } from "../../services/postServices";

const Post = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [disablePrevious, setDisablePrevious] = useState(false);
  const [disableNext, setDisableNext] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fatchData = async () => {
      const { data } = await getPosts(currentPage);
      setPosts(data);
    };

    fatchData();
  }, [currentPage]);

  const handlePagination = (value) => {
    var curPage = currentPage;

    if (value === "previous") {
      curPage = currentPage + 1;
    }
    if (value === "next") {
      curPage = currentPage - 1;
    }

    curPage === 1 ? setDisableNext(true) : setDisableNext(false);
    curPage === 25 ? setDisablePrevious(true) : setDisablePrevious(false);

    setCurrentPage(curPage);
  };

  return (
    <div className="container">
      <ol className="breadcrumb" style={{ marginTop: "10px" }}>
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Posts</li>
      </ol>
      <PostForm />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      <Pagination
        handlePagination={handlePagination}
        currentPage={currentPage}
        disablePrevious={disablePrevious}
        disableNext={disableNext}
      />
    </div>
  );
};

export default Post;
