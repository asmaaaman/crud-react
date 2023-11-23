import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import axiosInstance from "../../Network/index";

interface AddPostFormProps {}

const AddPostForm: React.FC<AddPostFormProps> = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/posts", formData);

      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md w-90">
      <div className="input-container">
        <h2 className="text-2xl font-bold mb-4 text-slate-600">Add Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter title"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
            ></textarea>
          </div>

          <Button
            type="submit"
            title="Submit"
            btnClass="bg-slate-600 hover:bg-slate-700 rounded text-white py-2 px-4"
          />
        </form>
      </div>
    </div>
  );
};

export default AddPostForm;
