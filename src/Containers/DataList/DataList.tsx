import React, { useEffect, useState } from "react";
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
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axiosInstance
      .get("/posts")
      .then((response) => {
        setPosts(response.data);
      })

      .catch((error) => {
        console.error("Component-specific error handling:", error);
      });
  }, []);
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

      <DataTable data={posts || []} columns={columns} />
    </div>
  );
};

export default DataList;
