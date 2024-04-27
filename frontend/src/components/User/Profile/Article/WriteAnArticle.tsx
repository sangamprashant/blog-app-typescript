import React, { useState } from "react";
import "./ArticleCSS/WriteAnArticle.css";
// icons
import AlignHorizontalCenterIcon from "@mui/icons-material/AlignHorizontalCenter";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import Heading from "./WriteAnArticlesComponents/Heading";
import AlignVerticalTopIcon from "@mui/icons-material/AlignVerticalTop";

const WriteAnArticle = () => {
  const [b, setB] = React.useState<React.ElementType>("div");
  const [I, setI] = React.useState<React.ElementType>("div");
  const [F, setF] = React.useState<string>("start");
  const [A, setA] = React.useState<string>("start");
  const [HC, setHC] = React.useState<string>("#000000");
  const [CC, setCC] = React.useState<string>("#000000");

  const [OPC, setOPC] = React.useState<string>("#000000");
  const [OP, setOP] = React.useState<string>("#000000");

  const [heading, setHeading] = useState("Heading of the contendt");
  const [content, setContent] = useState(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo hic eaque nesciunt, facere odio voluptate officiis! Necessitatibus facilis mollitia illum placeat? Tempora illum exercitationem accusantium placeat inventore facere obcaecati esse."
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
            <div className="d-flex justify-content-between gap-2 p-2 border rounded-2">
              <div className="w-100">
                <label htmlFor="">Heading Color</label>
                <input
                  type="color"
                  className="form-control w-100"
                  value={HC}
                  onChange={(e) => setHC(e.target.value)}
                />
              </div>
              <div className="w-100">
                <label htmlFor="">Content Color</label>{" "}
                <input
                  type="color"
                  className="form-control w-100"
                  value={CC}
                  onChange={(e) => setCC(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-2 d-flex gap-2 p-2 border rounded-2 ">
              <div className="w-100">
                <label htmlFor="">Overlay Color</label>{" "}
                <input type="color" className="form-control" />
              </div>
              <div className="w-100">
                <label htmlFor="opacity">Opacity</label>{" "} <br />
                <input
                  type="range"
                  id="opacity"
                  min="0"
                  max="1"
                  step="0.1"
                  value={""}
                  className="form-control"
                  // onChange={handleOpacityChange}
                />
                {/* <output>{"opacity"}</output> */}
              </div>
            </div>
            <p className="p-0 m-0 mt-2">Text settion</p>
            <div className="d-flex flex-wrap gap-2 mt-2 justify-content-between">
              <div className="p-2 border rounded-2 d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setA("start")}
                >
                  <AlignVerticalTopIcon />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setA("center")}
                >
                  <AlignHorizontalCenterIcon />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setA("end")}
                >
                  <AlignVerticalBottomIcon />
                </button>
              </div>
              <div className="p-2 border rounded-2 d-flex gap-2">
                <button
                  type="button"
                  className={`btn btn-${b === "b" ? "" : "outline-"}secondary`}
                  onClick={ToggleBold}
                >
                  <FormatBoldIcon />
                </button>
                <button
                  type="button"
                  className={`btn btn-${I === "i" ? "" : "outline-"}secondary`}
                  onClick={ToggleItalic}
                >
                  <FormatItalicIcon />
                </button>
              </div>
              <div className="p-2 border rounded-2 d-flex gap-2">
                <button
                  type="button"
                  className={`btn btn-${
                    F === "start" ? "" : "outline-"
                  }secondary`}
                  onClick={() => setF("start")}
                >
                  <FormatAlignLeftIcon />
                </button>
                <button
                  type="button"
                  className={`btn btn-${
                    F === "center" ? "" : "outline-"
                  }secondary`}
                  onClick={() => setF("center")}
                >
                  <FormatAlignCenterIcon />
                </button>
                <button
                  type="button"
                  className={`btn btn-${
                    F === "end" ? "" : "outline-"
                  }secondary`}
                  onClick={() => setF("end")}
                >
                  <FormatAlignRightIcon />
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Post
            </button>
          </div>
          <div className="col-md-6 position-relative p-0 m-0">
            <div className="image-container">
              <img src={imageUrl} alt="" className="img-fluid" width="100%" />
              <div
                className={`article-inputed-preview d-flex flex-column justify-content-${A} text-${F}`}
              >
                <Heading heading={heading} italic={I} as={b} color={HC} />
                <p style={{ color: CC }}>{content}</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
  // function to click and manupulate
  function ToggleBold() {
    setB(b === "b" ? "div" : "b");
  }
  function ToggleItalic() {
    setI(I === "i" ? "div" : "i");
  }
  // function handleOpacityChange  (e: React.ChangeEvent<HTMLInputElement>) {
  //   setOPC(...OPC, ...parseFloat(e.target.value));
  // };
};

export default WriteAnArticle;
