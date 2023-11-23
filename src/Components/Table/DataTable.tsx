import React from "react";

interface Column {
  key: string;
  header: string;
}

interface DataTableProps {
  data: any[]; // Change the type according to your data structure
  columns: Column[];
}

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
  return (
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
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-no-wrap">
                  {row[column.key]}
                </td>
              ))}
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
  );
};

export default DataTable;
