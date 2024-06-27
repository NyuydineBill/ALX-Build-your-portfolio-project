// src/components/MusicUpload.js
import React, { useState } from "react";
import styles from "./MusicUpload.module.css"; // Import the module

const MusicUpload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    // Implement upload functionality
    console.log("Uploaded file:", file);
  };

  return (
    <div className={styles.uploadContainer}>
      <h2>Upload Music</h2>
      <form onSubmit={handleUpload} className={styles.uploadForm}>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className={styles.uploadInput}
        />
        <button type="submit" className={styles.uploadButton}>
          Upload
        </button>
      </form>
    </div>
  );
};

export default MusicUpload;
