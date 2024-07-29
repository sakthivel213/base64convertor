const fs = require("fs");
const path = require("path");

function detectFileType(base64Data) {
  const fileSignature = base64Data.slice(0, 20);

  const fileTypeMap = {
    JVBERi0xLj: "pdf",
    "/9j/": "jpeg",
    iVBORw0KGgo: "png",
    UEsDB: "xlsx",
    "0M8R4KGxGuE": "doc",
  };

  for (const [signature, ext] of Object.entries(fileTypeMap)) {
    if (fileSignature.startsWith(signature)) {
      return ext;
    }
  }

  throw new Error("Unknown file type");
}

function base64ToFile(req, res) {
  const { base64String } = req.body;
  try {
    const base64Data = base64String.replace(/^data:[a-zA-Z0-9/+\s=]+;base64,/, '');

    const fileType = detectFileType(base64Data);
    const mimeType = fileType === 'pdf' ? 'application/pdf' : fileType === 'jpeg' ? 'image/jpeg' : fileType === 'png' ? 'image/png' : 'application/octet-stream';
    const fileDataUrl = `data:${mimeType};base64,${base64Data}`;

    res.send({
      fileType,
      fileDataUrl
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  base64ToFile,
};

// // Example usage:
// const base64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'; // Replace with your base64 string
// const base64PDF = 'data:application/pdf;base64,JVBERi0xLjQKJcfsj6IKNSAwIG9iago8PAovVGl0bGUgKP...'; // Replace with your base64 string
// const base64Excel = 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,UEsFBgAAAAAAAAAAAAAAAAAAAAAAAA=='; // Replace with your base64 string
// const base64Doc = 'data:application/msword;base64,0M8R4KGxGuEAAAAAAAAAAAAAAAAAAAAAPgADAP7/CQAGAAAAAAAAAAAAAAABAAAA...'; // Replace with your base64 string
