import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";
import "react-confirm-alert/src/react-confirm-alert.css";
import axiosInstance from "../../Network/index";
import DataTable from "../../Components/Table/DataTable";
import Button from "../../Components/Button/Button";
//AXIOS
//USE EFFECT TO CALL LIST
//IMPORT TABLE

interface Post {
  id: number;
  title: string;
  description: String;
}
const columns = [
  { key: "id", header: "ID" },
  { key: "title", header: "Title" },
  { key: "description", header: "Description" },
];

const DataList: React.FC = () => {
  const [posts, setPostData] = useState<Post[]>([]);
  const fetchPostData = async () => {
    try {
      const response = await axiosInstance.get("/posts");
      setPostData(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchPostData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      // Make DELETE request to JSON Server
      await axiosInstance.delete(`/posts/${id}`);
      console.log(`Post with ID ${id} deleted successfully!`);

      // Update the list by refetching the data
      fetchPostData();

      // Show success toast
      toast.success("Post deleted successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error(`Error deleting post with ID ${id}:`, error);
    }
  };
  return (
    <div>
      <div className="m-4 flex justify-end">
        <Button
          btnClass="rounded-2xl	w-full text-center md:w-auto py-2 px-6 rounded-3xl	 
          text-white bg-slate-600 hover:bg-slate-900 transition-all ease-in-out"
          title="Add Item"
          to="/add-post"
        />
      </div>

      <DataTable data={posts || []} columns={columns} onDelete={handleDelete} />
    </div>
  );
};

export default DataList;
