// // // // import React, { useState } from "react";
// // // // import { Button, Snackbar, CircularProgress, TextareaAutosize, IconButton, Chip } from "@mui/material";
// // // // import FileCopyIcon from "@mui/icons-material/FileCopy";
// // // // import ClearIcon from "@mui/icons-material/Clear";

// // // // const FileToBase64 = () => {
// // // //   const [file, setFile] = useState(null);
// // // //   const [base64String, setBase64String] = useState("");
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [snackbarOpen, setSnackbarOpen] = useState(false);
// // // //   const [snackbarMessage, setSnackbarMessage] = useState("");

// // // //   const handleFileChange = (e) => {
// // // //     setFile(e.target.files[0]);
// // // //   };

// // // //   const convertToBase64 = () => {
// // // //     if (!file) return;
// // // //     setLoading(true);
// // // //     const reader = new FileReader();
// // // //     reader.readAsDataURL(file);
// // // //     reader.onloadend = () => {
// // // //       setBase64String(reader.result);
// // // //       setLoading(false);
// // // //     };
// // // //   };

// // // //   const handleCopy = () => {
// // // //     navigator.clipboard.writeText(base64String);
// // // //     setSnackbarMessage("Base64 String Copied to Clipboard!!!");
// // // //     setSnackbarOpen(true);
// // // //   };

// // // //   const handleClear = () => {
// // // //     setFile(null);
// // // //     setBase64String("");
// // // //   };

// // // //   const handleCloseSnackbar = () => {
// // // //     setSnackbarOpen(false);
// // // //   };

// // // //   return (
// // // //     <div className="background-container">
// // // //       <div className="file-display-container">
// // // //         <div className="input-area-div">
// // // //           <div className="top-bar">
// // // //             <Chip label="File to Base64" color="primary" />
// // // //             <div className="button-group">
// // // //               <IconButton color="primary" onClick={handleClear}>
// // // //                 <ClearIcon />
// // // //               </IconButton>
// // // //             </div>
// // // //           </div>
// // // //           <input type="file" onChange={handleFileChange} style={{ marginBottom: "20px" }} />
// // // //         </div>
// // // //         <Button variant="contained" color="primary" onClick={convertToBase64} disabled={loading} style={{ marginBottom: "20px" }}>
// // // //             {loading ? <CircularProgress size={24} /> : "Convert to Base64"}
// // // //           </Button>
// // // //           <TextareaAutosize
// // // //             value={base64String}
// // // //             minRows={10}
// // // //             maxRows={10}
// // // //             placeholder="Base64 string will appear here..."
// // // //             style={{ width: "750px", marginBottom: "20px" }}
// // // //             readOnly
// // // //           />
// // // //       </div>
// // // //       <Snackbar
// // // //         open={snackbarOpen}
// // // //         autoHideDuration={2000}
// // // //         onClose={handleCloseSnackbar}
// // // //         message={snackbarMessage}
// // // //         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
// // // //         ContentProps={{
// // // //           style: {
// // // //             backgroundColor: snackbarMessage === "Base64 String Copied to Clipboard!!!" ? "#6cbf6c" : undefined,
// // // //           },
// // // //         }}
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FileToBase64;
// // // import React, { useState } from "react";
// // // import { Button, Snackbar, CircularProgress, TextareaAutosize, IconButton, Chip } from "@mui/material";
// // // import FileCopyIcon from "@mui/icons-material/FileCopy";
// // // import ClearIcon from "@mui/icons-material/Clear";

// // // const FileToBase64 = () => {
// // //   const [file, setFile] = useState(null);
// // //   const [base64String, setBase64String] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const [snackbarOpen, setSnackbarOpen] = useState(false);
// // //   const [snackbarMessage, setSnackbarMessage] = useState("");

// // //   const handleFileChange = (e) => {
// // //     setFile(e.target.files[0]);
// // //   };

// // //   const convertToBase64 = () => {
// // //     if (!file) return;
// // //     setLoading(true);
// // //     const reader = new FileReader();
// // //     reader.readAsDataURL(file);
// // //     reader.onloadend = () => {
// // //       setBase64String(reader.result);
// // //       setLoading(false);
// // //     };
// // //   };

// // //   const handleCopy = () => {
// // //     navigator.clipboard.writeText(base64String);
// // //     setSnackbarMessage("Base64 String Copied to Clipboard!!!");
// // //     setSnackbarOpen(true);
// // //   };

// // //   const handleClear = () => {
// // //     setFile(null);
// // //     setBase64String("");
// // //   };

// // //   const handleCloseSnackbar = () => {
// // //     setSnackbarOpen(false);
// // //   };

// // //   const handleDragOver = (e) => {
// // //     e.preventDefault();
// // //     e.stopPropagation();
// // //   };

// // //   const handleDrop = (e) => {
// // //     e.preventDefault();
// // //     e.stopPropagation();
// // //     if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
// // //       setFile(e.dataTransfer.files[0]);
// // //     }
// // //   };

// // //   return (
// // //     <div className="background-container">
// // //       <div className="file-display-container">
// // //         <div
// // //           className="input-area-div"
// // //           onDragOver={handleDragOver}
// // //           onDrop={handleDrop}
// // //         >
// // //           <div className="top-bar">
// // //             <Chip label="File to Base64" color="primary" />
// // //             <div className="button-group">
// // //               <IconButton color="primary" onClick={handleClear}>
// // //                 <ClearIcon />
// // //               </IconButton>
// // //             </div>
// // //           </div>
// // //           <Button
// // //             variant="contained"
// // //             component="label"
// // //             style={{ marginBottom: "20px" }}
// // //           >
// // //             Upload File
// // //             <input
// // //               type="file"
// // //               hidden
// // //               onChange={handleFileChange}
// // //             />
// // //           </Button>
// // //           <p>Or drag a file here</p>
// // //           {file && <p>Selected file: {file.name}</p>}
// // //         </div>
// // //         <Button
// // //           variant="contained"
// // //           color="primary"
// // //           onClick={convertToBase64}
// // //           disabled={loading || !file}
// // //           style={{ marginBottom: "20px" }}
// // //         >
// // //           {loading ? <CircularProgress size={24} /> : "Convert to Base64"}
// // //         </Button>
// // //         <TextareaAutosize
// // //           value={base64String}
// // //           minRows={10}
// // //           maxRows={10}
// // //           placeholder="Base64 string will appear here..."
// // //           style={{ width: "750px", marginBottom: "20px" }}
// // //           readOnly
// // //         />
// // //       </div>
// // //       <Snackbar
// // //         open={snackbarOpen}
// // //         autoHideDuration={2000}
// // //         onClose={handleCloseSnackbar}
// // //         message={snackbarMessage}
// // //         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
// // //         ContentProps={{
// // //           style: {
// // //             backgroundColor: snackbarMessage === "Base64 String Copied to Clipboard!!!" ? "#6cbf6c" : undefined,
// // //           },
// // //         }}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default FileToBase64;

// // // import React, { useState } from "react";
// // // import {
// // //   Button,
// // //   Snackbar,
// // //   CircularProgress,
// // //   TextareaAutosize,
// // //   IconButton,
// // //   Switch,
// // //   FormControlLabel,
// // //   Typography,
// // // } from "@mui/material";
// // // import FileCopyIcon from "@mui/icons-material/FileCopy";
// // // import ClearIcon from "@mui/icons-material/Clear";
// // // import DownloadIcon from "@mui/icons-material/Download";

// // // const FileToBase64 = () => {
// // //   const [file, setFile] = useState(null);
// // //   const [base64String, setBase64String] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const [snackbarOpen, setSnackbarOpen] = useState(false);
// // //   const [snackbarMessage, setSnackbarMessage] = useState("");
// // //   const [includePrefix, setIncludePrefix] = useState(true);

// // //   const handleFileChange = (e) => {
// // //     setFile(e.target.files[0]);
// // //   };

// // //   const convertToBase64 = () => {
// // //     if (!file) return;
// // //     setLoading(true);
// // //     const reader = new FileReader();
// // //     reader.readAsDataURL(file);
// // //     reader.onloadend = () => {
// // //       const result = reader.result;
// // //       setBase64String(includePrefix ? result : result.split(",")[1]);
// // //       setLoading(false);
// // //     };
// // //   };

// // //   const handleCopy = () => {
// // //     navigator.clipboard.writeText(base64String);
// // //     setSnackbarMessage("Base64 String Copied to Clipboard!!!");
// // //     setSnackbarOpen(true);
// // //   };

// // //   const handleDownload = () => {
// // //     const link = document.createElement("a");
// // //     link.href = base64String;
// // //     link.download = file ? file.name : "file";
// // //     link.click();
// // //     setSnackbarMessage("Base64 File Downloaded!!!");
// // //     setSnackbarOpen(true);
// // //   };

// // //   const handleClear = () => {
// // //     setFile(null);
// // //     setBase64String("");
// // //   };

// // //   const handleCloseSnackbar = () => {
// // //     setSnackbarOpen(false);
// // //   };

// // //   const handleDragOver = (e) => {
// // //     e.preventDefault();
// // //     e.stopPropagation();
// // //   };

// // //   const handleDrop = (e) => {
// // //     e.preventDefault();
// // //     e.stopPropagation();
// // //     if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
// // //       setFile(e.dataTransfer.files[0]);
// // //     }
// // //   };

// // //   const handleSwitchChange = (e) => {
// // //     setIncludePrefix(e.target.checked);
// // //   };

// // //   return (
// // //     <div className="background-container" style={{ padding: "20px" }}>
// // //       <div
// // //         className="file-display-container"
// // //         style={{ maxWidth: "800px", margin: "0 auto" }}
// // //       >
// // //         <div
// // //           className="input-area-div"
// // //           onDragOver={handleDragOver}
// // //           onDrop={handleDrop}
// // //           style={{
// // //             border: "2px dashed #0C0A09",
// // //             borderRadius: "8px",
// // //             padding: "20px",
// // //             textAlign: "center",
// // //             marginBottom: "20px",
// // //           }}
// // //         >
// // //           <div
// // //             className="top-bar"
// // //             style={{
// // //               display: "flex",
// // //               justifyContent: "space-between",
// // //               marginBottom: "10px",
// // //             }}
// // //           >
// // //             <div className="button-group">
// // //               <IconButton color="primary" onClick={handleClear}>
// // //                 <ClearIcon />
// // //               </IconButton>
// // //             </div>
// // //           </div>
// // //           <Button
// // //             variant="contained"
// // //             component="label"
// // //             style={{ marginBottom: "20px" }}
// // //           >
// // //             Upload File
// // //             <input type="file" hidden onChange={handleFileChange} />
// // //           </Button>
// // //           <Typography variant="body1">Or drag a file here</Typography>
// // //           {file && (
// // //             <Typography variant="body2" style={{ marginTop: "10px" }}>
// // //               Selected file: {file.name}
// // //             </Typography>
// // //           )}
// // //         </div>
// // //         <Button
// // //           variant="contained"
// // //           color="primary"
// // //           onClick={convertToBase64}
// // //           disabled={loading || !file}
// // //           style={{ marginBottom: "20px" }}
// // //         >
// // //           {loading ? <CircularProgress size={24} /> : "Convert to Base64"}
// // //         </Button>
// // //         <div
// // //           style={{
// // //             display: "flex",
// // //             alignItems: "center",
// // //             marginBottom: "20px",
// // //             gap: "10px",
// // //           }}
// // //         >
// // //           <FormControlLabel
// // //             control={
// // //               <Switch
// // //                 checked={includePrefix}
// // //                 onChange={handleSwitchChange}
// // //                 color="primary"
// // //               />
// // //             }
// // //             label="Include 'data:image/jpeg;base64,' prefix"
// // //           />
// // //           <IconButton color="primary" onClick={handleCopy}>
// // //             <FileCopyIcon />
// // //           </IconButton>
// // //           <IconButton color="primary" onClick={handleDownload}>
// // //             <DownloadIcon />
// // //           </IconButton>
// // //         </div>
// // //         <TextareaAutosize
// // //           value={base64String}
// // //           minRows={10}
// // //           maxRows={10}
// // //           placeholder="Base64 string will appear here..."
// // //           style={{
// // //             width: "100%",
// // //             marginBottom: "20px",
// // //             padding: "10px",
// // //             borderRadius: "4px",
// // //             borderColor: "#ccc",
// // //           }}
// // //           readOnly
// // //         />
// // //       </div>
// // //       <Snackbar
// // //         open={snackbarOpen}
// // //         autoHideDuration={2000}
// // //         onClose={handleCloseSnackbar}
// // //         message={snackbarMessage}
// // //         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
// // //         ContentProps={{
// // //           style: {
// // //             backgroundColor: snackbarMessage.includes("Copied")
// // //               ? "#6cbf6c"
// // //               : undefined,
// // //           },
// // //         }}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default FileToBase64;
// // import React, { useState } from "react";
// // import {
// //   Button,
// //   Snackbar,
// //   CircularProgress,
// //   TextareaAutosize,
// //   IconButton,
// //   Switch,
// //   FormControlLabel,
// //   Typography,
// //   Chip,
// // } from "@mui/material";
// // import FileCopyIcon from "@mui/icons-material/FileCopy";
// // import ClearIcon from "@mui/icons-material/Clear";
// // import DownloadIcon from "@mui/icons-material/Download";

// // const FileToBase64 = () => {
// //   const [file, setFile] = useState(null);
// //   const [base64String, setBase64String] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [snackbarOpen, setSnackbarOpen] = useState(false);
// //   const [snackbarMessage, setSnackbarMessage] = useState("");
// //   const [includePrefix, setIncludePrefix] = useState(true);

// //   const handleFileChange = (e) => {
// //     setFile(e.target.files[0]);
// //   };

// //   const convertToBase64 = () => {
// //     if (!file) return;
// //     setLoading(true);
// //     const reader = new FileReader();
// //     reader.readAsDataURL(file);
// //     reader.onloadend = () => {
// //       const result = reader.result;
// //       setBase64String(includePrefix ? result : result.split(",")[1]);
// //       setLoading(false);
// //     };
// //   };

// //   const handleCopy = () => {
// //     navigator.clipboard.writeText(base64String);
// //     setSnackbarMessage("Base64 String Copied to Clipboard!!!");
// //     setSnackbarOpen(true);
// //   };

// //   const handleDownload = () => {
// //     const link = document.createElement("a");
// //     link.href = base64String;
// //     link.download = file ? file.name : "file";
// //     link.click();
// //     setSnackbarMessage("Base64 File Downloaded!!!");
// //     setSnackbarOpen(true);
// //   };

// //   const handleClear = () => {
// //     setFile(null);
// //     setBase64String("");
// //   };

// //   const handleCloseSnackbar = () => {
// //     setSnackbarOpen(false);
// //   };

// //   const handleDragOver = (e) => {
// //     e.preventDefault();
// //     e.stopPropagation();
// //   };

// //   const handleDrop = (e) => {
// //     e.preventDefault();
// //     e.stopPropagation();
// //     if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
// //       setFile(e.dataTransfer.files[0]);
// //     }
// //   };

// //   const handleSwitchChange = (e) => {
// //     setIncludePrefix(e.target.checked);
// //   };

// //   return (
// //     <div className="background-container" style={{ padding: "20px" }}>
// //       <div
// //         className="file-display-container"
// //         style={{ maxWidth: "800px", margin: "0 auto" }}
// //       >
// //         <div
// //           className="input-area-div"
// //           onDragOver={handleDragOver}
// //           onDrop={handleDrop}
// //           style={{
// //             border: "2px dashed #0C0A09",
// //             borderRadius: "8px",
// //             padding: "20px",
// //             textAlign: "center",
// //             marginBottom: "20px",
// //           }}
// //         >
// //           <div
// //             className="top-bar"
// //             style={{
// //               display: "flex",
// //               justifyContent: "space-between",
// //               marginBottom: "10px",
// //             }}
// //           >
// //             {file && (
// //               <IconButton color="primary" onClick={handleClear}>
// //                 <ClearIcon />
// //               </IconButton>
// //             )}
// //           </div>
// //           <Button
// //             variant="contained"
// //             component="label"
// //             style={{ marginBottom: "20px" }}
// //           >
// //             Upload File
// //             <input type="file" hidden onChange={handleFileChange} />
// //           </Button>
// //           <Typography variant="body1">Or drag a file here</Typography>
// //           {file && (
// //             <div style={{ marginTop: "10px" }}>
// //               <Typography variant="body2">Selected file: {file.name}</Typography>
// //               <Typography variant="body2">Size: {(file.size / 1024).toFixed(2)} KB</Typography>
// //               <Typography variant="body2">Type: {file.type}</Typography>
// //             </div>
// //           )}
// //         </div>
// //         <Button
// //           variant="contained"
// //           color="primary"
// //           onClick={convertToBase64}
// //           disabled={loading || !file}
// //           style={{ marginBottom: "20px" }}
// //         >
// //           {loading ? <CircularProgress size={24} /> : "Convert to Base64"}
// //         </Button>
// //         <div
// //           style={{
// //             display: "flex",
// //             alignItems: "center",
// //             marginBottom: "20px",
// //             gap: "10px",
// //           }}
// //         >
// //           <FormControlLabel
// //             control={
// //               <Switch
// //                 checked={includePrefix}
// //                 onChange={handleSwitchChange}
// //                 color="primary"
// //               />
// //             }
// //             label="Include 'data:image/jpeg;base64,' prefix"
// //           />
// //           <IconButton color="primary" onClick={handleCopy}>
// //             <FileCopyIcon />
// //           </IconButton>
// //           <IconButton color="primary" onClick={handleDownload}>
// //             <DownloadIcon />
// //           </IconButton>
// //         </div>
// //         <TextareaAutosize
// //           value={base64String}
// //           minRows={10}
// //           maxRows={10}
// //           placeholder="Base64 string will appear here..."
// //           style={{
// //             width: "100%",
// //             marginBottom: "20px",
// //             padding: "10px",
// //             borderRadius: "4px",
// //             borderColor: "#ccc",
// //           }}
// //           readOnly
// //         />
// //       </div>
// //       <Snackbar
// //         open={snackbarOpen}
// //         autoHideDuration={2000}
// //         onClose={handleCloseSnackbar}
// //         message={snackbarMessage}
// //         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
// //         ContentProps={{
// //           style: {
// //             backgroundColor: snackbarMessage.includes("Copied")
// //               ? "#6cbf6c"
// //               : undefined,
// //           },
// //         }}
// //       />
// //     </div>
// //   );
// // };

// // export default FileToBase64;
// import React, { useState } from "react";
// import {
//   Button,
//   Snackbar,
//   CircularProgress,
//   TextareaAutosize,
//   IconButton,
//   Switch,
//   FormControlLabel,
//   Typography,
//   Chip,
// } from "@mui/material";
// import FileCopyIcon from "@mui/icons-material/FileCopy";
// import ClearIcon from "@mui/icons-material/Clear";
// import DownloadIcon from "@mui/icons-material/Download";

// const FileToBase64 = () => {
//   const [file, setFile] = useState(null);
//   const [base64String, setBase64String] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [includePrefix, setIncludePrefix] = useState(true);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const convertToBase64 = () => {
//     if (!file) return;
//     setLoading(true);
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       const result = reader.result;
//       setBase64String(includePrefix ? result : result.split(",")[1]);
//       setLoading(false);
//     };
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(base64String);
//     setSnackbarMessage("Base64 String Copied to Clipboard!!!");
//     setSnackbarOpen(true);
//   };

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = base64String;
//     link.download = file ? file.name : "file";
//     link.click();
//     setSnackbarMessage("Base64 File Downloaded!!!");
//     setSnackbarOpen(true);
//   };

//   const handleClear = () => {
//     setFile(null);
//     setBase64String("");
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbarOpen(false);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
//       setFile(e.dataTransfer.files[0]);
//     }
//   };

//   const handleSwitchChange = (e) => {
//     setIncludePrefix(e.target.checked);
//   };

//   return (
//     <div className="background-container" style={{ padding: "20px" }}>
//       <div
//         className="file-display-container"
//         style={{ maxWidth: "800px", margin: "0 auto" }}
//       >
//         <div
//           className="input-area-div"
//           onDragOver={handleDragOver}
//           onDrop={handleDrop}
//           style={{
//             border: "2px dashed #0C0A09",
//             borderRadius: "8px",
//             padding: "20px",
//             textAlign: "center",
//             marginBottom: "20px",
//           }}
//         >
//           {!file ? (
//             <>
//               <Button
//                 variant="contained"
//                 component="label"
//                 style={{ marginBottom: "20px" }}
//               >
//                 Upload File
//                 <input type="file" hidden onChange={handleFileChange} />
//               </Button>
//               <Typography variant="body1">Or drag a file here</Typography>
//             </>
//           ) : (
//             <div style={{ textAlign: "left" }}>
//               <Typography variant="body2">File name: {file.name}</Typography>
//               <Typography variant="body2">Size: {(file.size / 1024).toFixed(2)} KB</Typography>
//               <Typography variant="body2">Type: {file.type}</Typography>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 onClick={handleClear}
//                 style={{ marginTop: "10px" }}
//               >
//                 Cancel Upload
//               </Button>
//             </div>
//           )}
//         </div>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={convertToBase64}
//           disabled={loading || !file}
//           style={{ marginBottom: "20px" }}
//         >
//           {loading ? <CircularProgress size={24} /> : "Convert to Base64"}
//         </Button>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             marginBottom: "20px",
//             gap: "10px",
//           }}
//         >
//           <FormControlLabel
//             control={
//               <Switch
//                 checked={includePrefix}
//                 onChange={handleSwitchChange}
//                 color="primary"
//               />
//             }
//             label="Include 'data:image/jpeg;base64,' prefix"
//           />
//           <IconButton color="primary" onClick={handleCopy}>
//             <FileCopyIcon />
//           </IconButton>
//           <IconButton color="primary" onClick={handleDownload}>
//             <DownloadIcon />
//           </IconButton>
//         </div>
//         <TextareaAutosize
//           value={base64String}
//           minRows={10}
//           maxRows={10}
//           placeholder="Base64 string will appear here..."
//           style={{
//             width: "100%",
//             marginBottom: "20px",
//             padding: "10px",
//             borderRadius: "4px",
//             borderColor: "#ccc",
//           }}
//           readOnly
//         />
//       </div>
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={2000}
//         onClose={handleCloseSnackbar}
//         message={snackbarMessage}
//         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//         ContentProps={{
//           style: {
//             backgroundColor: snackbarMessage.includes("Copied")
//               ? "#6cbf6c"
//               : undefined,
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default FileToBase64;
import React, { useState } from "react";
import {
  Button,
  Snackbar,
  CircularProgress,
  TextareaAutosize,
  IconButton,
  Switch,
  FormControlLabel,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ClearIcon from "@mui/icons-material/Clear";
import DownloadIcon from "@mui/icons-material/Download";

const FileToBase64 = () => {
  const [file, setFile] = useState(null);
  const [base64String, setBase64String] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [includePrefix, setIncludePrefix] = useState(true);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const convertToBase64 = () => {
    if (!file) return;
    setLoading(true);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const result = reader.result;
      setBase64String(includePrefix ? result : result.split(",")[1]);
      setLoading(false);
    };
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(base64String);
    setSnackbarMessage("Base64 String Copied to Clipboard!!!");
    setSnackbarOpen(true);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = base64String;
    link.download = file ? file.name : "file";
    link.click();
    setSnackbarMessage("Base64 File Downloaded!!!");
    setSnackbarOpen(true);
  };

  const handleClear = () => {
    setFile(null);
    setBase64String("");
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleSwitchChange = (e) => {
    setIncludePrefix(e.target.checked);
  };

  return (
    <div className="background-container" style={{ padding: "20px" }}>
      <div
        className="file-display-container"
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <div
          className="input-area-div"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          style={{
            border: "2px dashed #0C0A09",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          {!file && (
            <>
            <Button
              variant="contained"
              component="label"
              style={{ marginBottom: "20px" }}
            >
              Upload File
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            <Typography variant="body1">Or drag a file here</Typography>
            </>
          )}
          {file && (
            <TableContainer component={Paper} style={{ marginTop: "10px" }}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>File Name</TableCell>
                    <TableCell>{file.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Size</TableCell>
                    <TableCell>{(file.size / 1024).toFixed(2)} KB</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>{file.type}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {file && (
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<ClearIcon />}
              onClick={handleClear}
              style={{ marginTop: "10px" }}
            >
              Cancel Upload
            </Button>
          )}
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={convertToBase64}
          disabled={loading || !file}
          style={{ marginBottom: "20px" }}
        >
          {loading ? <CircularProgress size={24} /> : "Convert to Base64"}
        </Button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            gap: "10px",
          }}
        >
          <FormControlLabel
            control={
              <Switch
                checked={includePrefix}
                onChange={handleSwitchChange}
                color="primary"
              />
            }
            label="Include 'data:image/jpeg;base64,' prefix"
          />
          <IconButton color="primary" onClick={handleCopy}>
            <FileCopyIcon />
          </IconButton>
          <IconButton color="primary" onClick={handleDownload}>
            <DownloadIcon />
          </IconButton>
        </div>
        <TextareaAutosize
          value={base64String}
          minRows={10}
          maxRows={10}
          placeholder="Base64 string will appear here..."
          style={{
            width: "100%",
            marginBottom: "20px",
            padding: "10px",
            borderRadius: "4px",
            borderColor: "#ccc",
          }}
          readOnly
        />
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        ContentProps={{
          style: {
            backgroundColor: snackbarMessage.includes("Copied")
              ? "#6cbf6c"
              : undefined,
          },
        }}
      />
    </div>
  );
};

export default FileToBase64;
