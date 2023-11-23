import React from "react";
import { useNavigate } from "react-router-dom";

interface Column {
  key: string;
  header: string;
}

interface DataTableProps {
  data: any[];
  columns: Column[];
  onDelete?: (id: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, columns, onDelete }) => {
  const navigate = useNavigate();
  const navigateToUpdateForm = (id: any) => {
    navigate(`/add-post/${id}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}

            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-1 md:px-6 py-4 whitespace-no-wrap sm:w-1/5 md:w-1/4 lg:w-1/3 xl:w-1/4"
                  >
                    {row[column.key]}
                  </td>
                ))}

                <td className="px-1 mx-1 md:px-6 py-4 whitespace-no-wrap">
                  <button
                    className="w-25 bg-teal-600 hover:bg-teal-700 text-white  py-2 px-4 rounded my-2 mx-0 md:mx-1"
                    onClick={() => navigateToUpdateForm(row.id)}
                  >
                    Update
                  </button>

                  <button
                    className="w-25 bg-red-500 hover:bg-red-600 text-white  py-2 px-4 rounded"
                    onClick={() => onDelete && onDelete(row.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="px-6 py-4">
              <td colSpan={columns.length} className="text-center">
                <p className="py-4 font-medium text-gray-500 uppercase">
                  ⛔ No Data To display
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
