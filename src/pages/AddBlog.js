import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CustomInput from "../components/CustomInput";

const AddBlog = () => {
  const [des, setDes] = useState("");
  const handleDescription = (e) => {
    setDes(e);
  };
  console.log(des);
  return (
    <div>
      <h3 className="mb-4">Add Blog</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Enter Blog Title" />
          <select name="" id="" className="form-control py-3">
            <option value="">Select Blog Category</option>
          </select>
          <ReactQuill
            theme="snow"
            value={des}
            onChange={(e) => handleDescription(e)}
          />
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
