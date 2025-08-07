import React, { useState } from 'react';
import './FileUpload.css';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  // This function runs when user selects a file
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus(`Selected: ${file.name}`);
    }
  };

  // This function runs when user clicks upload
  const handleUpload = () => {
    if (!selectedFile) {
      setUploadStatus('Please select a file first!');
      return;
    }

    // For now, just show a message
    // Later, we'll actually upload to a server
    setUploadStatus(`Uploading ${selectedFile.name}...`);
    
    // Simulate upload delay
    setTimeout(() => {
      setUploadStatus(`✓ ${selectedFile.name} uploaded successfully!`);
      setSelectedFile(null);
    }, 2000);
  };

  return (
    <div className="upload-container">
      <div className="upload-box">
        <h2>Upload Document</h2>
        
        <input
          type="file"
          onChange={handleFileSelect}
          accept=".pdf,.doc,.docx,.txt,.jpg,.png"
          id="file-input"
        />
        
        <label htmlFor="file-input" className="file-label">
          Choose File
        </label>

        <button 
          onClick={handleUpload}
          className="upload-button"
          disabled={!selectedFile}
        >
          Upload
        </button>

        {uploadStatus && (
          <p className="status-message">{uploadStatus}</p>
        )}
      </div>
    </div>
  );
}

export default FileUpload;