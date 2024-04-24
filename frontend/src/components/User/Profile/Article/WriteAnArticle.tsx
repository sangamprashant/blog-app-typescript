import React, { useState } from "react";
import "./ArticleCSS/WriteAnArticle.css";

import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AlignHorizontalCenterIcon from "@mui/icons-material/AlignHorizontalCenter";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';

const WriteAnArticle = () => {
  const [heading, setHeading] = useState("Heading of the contendt");
  const [content, setContent] = useState(
    "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo hic eaque nesciunt, facere odio voluptate officiis! Necessitatibus facilis mollitia illum placeat? Tempora illum exercitationem accusantium placeat inventore facere obcaecati esse."
  );
  const [imageUrl, setImageUrl] = useState(
    "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
  );

  const handleHeadingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeading(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can implement logic to post the blog content
    console.log("Heading:", heading);
    console.log("Content:", content);
    console.log("Image URL:", imageUrl);
    // Reset the form fields
    setHeading("");
    setContent("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="heading" className="form-label">
                Heading
              </label>
              <input
                type="text"
                id="heading"
                className="form-control"
                value={heading}
                onChange={handleHeadingChange}
                placeholder="Enter a heading"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">
                Content
              </label>
              <textarea
                id="content"
                className="form-control"
                value={content}
                onChange={handleContentChange}
                placeholder="Enter your content"
                required
                cols={50} // Adjust the number of columns as needed
              />
            </div>
            <div className="mb-3">
              <label htmlFor="imageUrl" className="form-label">
                Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                className="form-control"
                value={imageUrl}
                onChange={handleImageChange}
                placeholder="Enter image URL"
              />
            </div>
            <div>
              <div>
                <label htmlFor="">Heading Color</label>
                <input type="color" className="form-control" />
              </div>
              <div>
                <label htmlFor="">Content Color</label>{" "}
                <input type="color" className="form-control" />
              </div>
              <div>
                <label htmlFor="">Overlay Color</label>{" "}
                <input type="color" className="form-control" />
              </div>
            </div>
            <div>
              <button type="button" className="btn btn-outline-secondary"><AlignHorizontalLeftIcon/></button>
              <button type="button" className="btn btn-outline-secondary"><AlignHorizontalCenterIcon/></button>
              <button type="button" className="btn btn-outline-secondary"><AlignHorizontalRightIcon/></button>
              <button type="button" className="btn btn-outline-secondary"><AlignVerticalBottomIcon/></button>
              <button type="button" className="btn btn-outline-secondary"><FormatAlignCenterIcon/></button>
              <button type="button" className="btn btn-outline-secondary"><FormatAlignLeftIcon/></button>
              <button type="button" className="btn btn-outline-secondary"><FormatAlignRightIcon/></button>
              <button type="button" className="btn btn-outline-secondary"><FormatBoldIcon/></button>
              <button type="button" className="btn btn-outline-secondary"><FormatItalicIcon/></button>


            </div>
            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </div>
          <div className="col-md-6 position-relative p-0 m-0">
            <div className="image-container">
              <img src={imageUrl} alt="" className="img-fluid" width="100%" />
              <div className="article-inputed-preview d-flex align-items- flex-column justify-content-end">
                <h3 className="text-white">{heading}</h3>
                <p className="text-white">{content}</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WriteAnArticle;
