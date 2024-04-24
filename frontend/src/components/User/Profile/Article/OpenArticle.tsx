import React from "react";
import "./ArticleCSS/OpenArticle.css";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const OpenArticle = () => {
  const dummyComments = [
    { id: 1, user: "John", text: "Great post!" },
    { id: 2, user: "Alice", text: "I love this!" },
    { id: 3, user: "Bob", text: "Nice w ghj  gh gn  h gy  nnh j lorevdfgmcv fvf fgf rg gv f g b gh adcvsdf f dfg  gfdg  ork!" },
    { id: 3, user: "Bob", text: "Nice work!" },
    { id: 3, user: "Bob", text: "Nice work!" },
    { id: 3, user: "Bob", text: "Nice work!" },
    { id: 3, user: "Bob", text: "Nice work!" },
    { id: 3, user: "Bob", text: "Nice zxv dfgv cv g hb hhwork!" },
    { id: 3, user: "Bob", text: "Nice work!" },
    { id: 3, user: "Bob", text: "Nice work!" },
    { id: 3, user: "Bob", text: "Nice work!" },
    { id: 3, user: "Bob", text: "Nice work!" },
    { id: 3, user: "Bob", text: "Nice work!" },
    { id: 3, user: "Bob", text: "Nice work!" },
    { id: 3, user: "Bob", text: "Nice work!" },
    { id: 3, user: "Bob", text: "Nice work!" },
    // Add more dummy comments...
  ];

  return (
    <section className="container">
      <div className="article-open-header d-flex align-items-center mb-4">
        <img
          src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
          alt=""
          className="rounded-circle me-3"
          width="60"
          height="60"
        />
        <h2 className="m-0">Post Title</h2>
      </div>
      <div className="row flex-1">
        {/* post */}
        <div className="col-md-6 flex-grow-1 border-end">
          <img
            src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
            alt=""
            className="w-100"
          />
        </div>
        {/* comment section  */}
        <div className="col-md-6 d-flex flex-grow-1 flex-column">
        <div className="comment-input my-3">
            <InputGroup>
              <FormControl
                placeholder="Add a comment..."
                aria-label="Add a comment..."
              />
              <Button variant="primary">Post</Button>
            </InputGroup>
          </div>
          <div className="comments-container overflow-auto">
            <div className="comments">
              {dummyComments.map((comment) => (
                <div key={comment.id} className="comment">
                  <img
                    src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
                    alt=""
                    className="rounded-circle me-3"
                    width="30"
                    height="30"
                  />
                  <strong>{comment.user}</strong>

                  <p className="mt-2">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default OpenArticle;
