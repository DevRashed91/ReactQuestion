import React from 'react'

const SinglePost = ({ post }) => {
    return (
        <div className="col-lg-4 mb-2">
            <div className="single-post card">
                <div className="card-body">
                    <h4>{post.title}</h4>
                    <p className="body">{post.body}</p>
                </div>
            </div>
        </div>
    )
}

export default SinglePost;