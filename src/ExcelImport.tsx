// import { useState, useRef } from "react";
// import { Button, Group, FileInput, Table, Input } from "@mantine/core";
// import * as XLSX from "xlsx";

// const ExcelImport = () => {
//   // On change states
//   const [excelFile, setExcelFile] = useState(null);
//   const [typeError, setTypeError] = useState(null);
//   const [excelData, setExcelData] = useState(null);
//   const [filteredData, setFilteredData] = useState(null);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
//   const [filterQuery, setFilterQuery] = useState("");

//   // File input reference
//   const fileInputRef = useRef();

//   // Handle file change event
//   const handleFile = (file) => {
//     let selectedFile = file;

//     if (selectedFile) {
//       const fileType = ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
//       if (selectedFile && fileType.includes(selectedFile.type)) {
//         setExcelFile(selectedFile);
//         setTypeError(null);
//       } else {
//         setExcelFile(null);
//         setTypeError("Please select only Excel files.");
//       }
//     } else {
//       console.log("Please select your file");
//     }
//   };

//   // Handle form submit event
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (excelFile) {
//       const reader = new FileReader();
//       reader.readAsBinaryString(excelFile);
//       reader.onload = (e) => {
//         const data = e.target.result;
//         const workbook = XLSX.read(data, { type: "binary" });
//         const worksheetName = workbook.SheetNames[0];
//         const worksheet = workbook.Sheets[worksheetName];
//         const jsonData = XLSX.utils.sheet_to_json(worksheet);
//         setExcelData(jsonData);
//         setFilteredData(jsonData);
//         // Clear the file input
//         fileInputRef.current.value = null;
//         setExcelFile(null);
//       };
//       reader.onerror = (error) => {
//         console.error("Error reading file:", error);
//         setTypeError("Error reading file. Please try again.");
//       };
//     } else {
//       setTypeError("Please upload a valid Excel file.");
//     }
//   };

//   // Handle sorting
//   const handleSort = (key) => {
//     let direction = 'ascending';
//     if (sortConfig.key === key && sortConfig.direction === 'ascending') {
//       direction = 'descending';
//     }
//     setSortConfig({ key, direction });

//     const sortedData = [...filteredData].sort((a, b) => {
//       if (a[key] < b[key]) {
//         return direction === 'ascending' ? -1 : 1;
//       }
//       if (a[key] > b[key]) {
//         return direction === 'ascending' ? 1 : -1;
//       }
//       return 0;
//     });
//     setFilteredData(sortedData);
//   };

//   // Handle filtering
//   const handleFilter = (e) => {
//     const query = e.target.value;
//     setFilterQuery(query);
//     if (excelData) {
//       const filtered = excelData.filter((item) => 
//         Object.values(item).some(
//           (val) => val.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1
//         )
//       );
//       setFilteredData(filtered);
//     }
//   };

//   // Render table rows
//   const renderTableRows = () => {
//     return filteredData.map((row, index) => (
//       <tr key={index}>
//         {Object.values(row).map((cell, cellIndex) => (
//           <td key={cellIndex}>{cell}</td>
//         ))}
//       </tr>
//     ));
//   };

//   // Render table headers
//   const renderTableHeaders = () => {
//     if (filteredData && filteredData.length > 0) {
//       return (
//         <tr>
//           {Object.keys(filteredData[0]).map((key, index) => (
//             <th key={index} onClick={() => handleSort(key)}>
//               {key} {sortConfig.key === key ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : null}
//             </th>
//           ))}
//         </tr>
//       );
//     }
//     return null;
//   };

//   return (
//     <div>
//       <div className="mb-3 text-center items-center">
//         <h1 className="text-2xl">Upload Excel Sheets</h1>
//       </div>
//       <div className="flex justify-center">
//         <div className="block border border-gray rounded-md p-3 w-1/2">
//           <form onSubmit={handleSubmit} className="">
//             <FileInput
//               label="Upload files"
//               mt="md"
//               placeholder="Upload Excel files"
//               required
//               onChange={(file) => handleFile(file)}
//               accept=".xlsx"
//               ref={fileInputRef}
//             />
//             {typeError && <div className="text-red-500 mt-2">{typeError}</div>}
//             <Group justify="flex-start" mt="md">
//               <Button type="submit">Upload</Button>
//             </Group>
//           </form>
//         </div>
//       </div>
//       <div className="mt-3 text-center items-center">
//         <div className=" flex justify-center">
// 			<Input
// 			placeholder="Filter data..."
// 			value={filterQuery}
// 			onChange={handleFilter}
// 			mt="md" className=" w-1/2 flex justify-center"
// 			mb="md"
// 			/>
// 		</div>
//         {filteredData ? (
//           <Table className="capitalize w-24">
//             <thead>{renderTableHeaders()}</thead>
//             <tbody>{renderTableRows()}</tbody>
//           </Table>
//         ) : (
//           <div>No file is uploaded yet!</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ExcelImport;


import { useState, useContext } from "react";
import { Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import AlertContext from './AlertContext';

const ExcelImport = () => {
  const [excelFile, setExcelFile] = useState<File | null>(null);
  const [typeError, setTypeError] = useState<string | null>(null);
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('No context provided');
  }

  const { showAlert } = context;
  const navigate = useNavigate();

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const fileType = ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
      if (fileType.includes(file.type)) {
        setExcelFile(file);
        setTypeError(null);
      } else {
        setExcelFile(null);
        setTypeError("Please select only Excel files.");
      }
    } else {
      setTypeError("Please select your file");
    }
  };

  const handleFileProcessing = () => {
    if (excelFile) {
      const reader = new FileReader();
      reader.readAsBinaryString(excelFile);
      reader.onload = (e) => {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setExcelFile(null); // Clear the file input
        console.log(jsonData);
        showAlert("Data successfully added!", "green"); // Set success alert
        setTimeout(() => {
          navigate(-1); // Navigate back to the previous page after 1 second
        }, 500);
      };
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
        setTypeError("Error reading file. Please try again.");
      };
    } else {
      setTypeError("Please upload a valid Excel file ['.xlsx'].");
    }
  };

  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="h-screen">
      <div className="mb-3 text-center items-center">
        <h1 className="text-2xl">Upload Excel Sheets</h1>
      </div>
      <div className="flex justify-center">
        <div className="block border border-gray rounded-md p-3 w-1/2">
          <input type="file" className="mb-5 mt-2" onChange={handleFile} />
          {typeError && <div className="text-red-500">{typeError}</div>}
          <Group mt="md">
            <Button onClick={handleFileProcessing}>Upload</Button>
            <Button variant="outline" onClick={handleCancel}>Cancel</Button>
          </Group>
        </div>
      </div>
    </div>
  );
};

export default ExcelImport;



