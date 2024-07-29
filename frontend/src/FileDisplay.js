import React, { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import mammoth from "mammoth";
import {
  TextareaAutosize,
  Button,
  IconButton,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DownloadIcon from "@mui/icons-material/Download";
import ClearIcon from "@mui/icons-material/Clear";

const FileDisplay = () => {
  const [fileType, setFileType] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [base64String, setBase64String] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileConversion = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:4000/v1/convert", {
        base64String,
      });

      const { fileType: type, fileDataUrl: dataUrl } = response.data;

      setFileType(type);

      if (type === "pdf") {
        handlePDFFile(dataUrl);
      } else if (type === "xlsx") {
        handleXLSXFile(dataUrl);
      } else if (type === "doc") {
        handleDOCFile(dataUrl);
      } else {
        setFileContent(dataUrl);
      }

      setDownloadUrl(dataUrl);
    } catch (error) {
      console.error("Error fetching the file:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePDFFile = (base64Data) => {
    const binaryString = window.atob(base64Data.split(",")[1]);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    setFileContent(url);
  };

  const handleXLSXFile = (base64Data) => {
    const binaryString = window.atob(base64Data.split(",")[1]);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const workbook = XLSX.read(bytes, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    let html = XLSX.utils.sheet_to_html(worksheet);

    html = html.replace(
      /<table/g,
      '<table style="width: 100%; border-collapse: collapse;"'
    );
    html = html.replace(
      /<th/g,
      '<th style="background-color: #007bff; color: #ffffff; text-align: center; padding: 8px; border: 1px solid #0e0d0d;"'
    );
    html = html.replace(
      /<td/g,
      '<td style="text-align: center; padding: 8px; border: 1px solid #0e0d0d;"'
    );

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #111111; padding: 8px; }
            th { background-color: #007bff; color: #ffffff; text-align: center; }
            td { text-align: center; }
          </style>
        </head>
        <body>
          ${html}
        </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    setFileContent(url);
  };

  const handleDOCFile = async (base64Data) => {
    const binaryString = window.atob(base64Data.split(",")[1]);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const arrayBuffer = bytes.buffer;
    try {
      const result = await mammoth.convertToHtml({ arrayBuffer });
      setFileContent(result.value);
    } catch (error) {
      console.error("Error converting DOC file:", error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(base64String);
    setSnackbarMessage("Base64 Sting Copied to Clipboard!!!");
    setSnackbarOpen(true);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([base64String], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "base64.txt";
    document.body.appendChild(element);
    element.click();
    setFileName(element.download);
    setSnackbarMessage(`File downloaded: ${element.download}`);
    setSnackbarOpen(true);
    document.body.removeChild(element);
  };

  const handleClear = () => {
    setBase64String("");
  };

  const renderFile = () => {
    if (!fileContent) return null;

    switch (fileType) {
      case "pdf":
        return (
          <>
            <iframe
              src={fileContent}
              title="PDF Preview"
              className="file-preview"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                handleSpecificDownload("application/pdf", "preview.pdf")
              }
              style={{ marginTop: "20px" }}
            >
              Download PDF
            </Button>
          </>
        );
      case "jpeg":
      case "png":
        return (
          <>
            <img src={fileContent} alt="Preview" className="file-preview" />
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                handleSpecificDownload("image/jpeg", "preview.jpg")
              }
              style={{ marginTop: "20px" }}
            >
              Download Image
            </Button>
          </>
        );
      case "xlsx":
        return (
          <>
            <iframe
              src={fileContent}
              title="XLSX Preview"
              className="file-preview-xlxs"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                handleSpecificDownload(
                  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                  "preview.xlsx"
                )
              }
              style={{ marginTop: "20px" }}
            >
              Download Excel
            </Button>
          </>
        );
      case "doc":
        return (
          <>
            <div
              dangerouslySetInnerHTML={{ __html: fileContent }}
              className="file-preview"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                handleSpecificDownload("application/msword", "preview.doc")
              }
              style={{ marginTop: "20px" }}
            >
              Download DOC
            </Button>
          </>
        );
      default:
        return <p>Unsupported file type.</p>;
    }
  };

  const handleSpecificDownload = (mimeType, fileName) => {
    const binaryString = window.atob(downloadUrl.split(",")[1]);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    setFileName(fileName);
    setSnackbarMessage(`File downloaded: ${fileName}`);
    setSnackbarOpen(true);
    document.body.removeChild(link);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="background-container">
      <div className="file-display-container">
        <div
          className="input-area-div"
          style={{
            border: "2px dashed #0C0A09",
            borderRadius: "8px",
            padding: "10px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <TextareaAutosize
            value={base64String}
            onChange={(e) => setBase64String(e.target.value)}
            minRows={10}
            maxRows={10}
            placeholder="Paste your Base64 string here..."
            style={{ width: "750px", margin: "20px" }}
          />
          <div className="top-bar" >
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <IconButton color="primary" onClick={handleCopy}>
                <FileCopyIcon />
              </IconButton>
              <IconButton color="primary" onClick={handleDownload}>
                <DownloadIcon />
              </IconButton>
              <IconButton color="primary" onClick={handleClear}>
                <ClearIcon />
              </IconButton>
            </div>
          </div>
        </div>
        {/* <Button
          variant="contained"
          color="primary"
          onClick={handleFileConversion}
          disabled={loading}
          style={{ marginBottom: "20px"}}
        >
          {loading ? (
            <CircularProgress size={24} />
          ) : (
            "Convert"
          )}
        </Button> */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleFileConversion}
          disabled={loading || !base64String}
          style={{ marginBottom: "20px" }}
        >
          {loading ? <CircularProgress size={24} /> : "Convert to File"}
        </Button>
        {renderFile()}
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        ContentProps={{
          style: {
            backgroundColor:
              snackbarMessage === "Base64 Sting Copied to Clipboard!!!"
                ? "#6cbf6c"
                : undefined,
          },
        }}
      />
    </div>
  );
};

export default FileDisplay;
