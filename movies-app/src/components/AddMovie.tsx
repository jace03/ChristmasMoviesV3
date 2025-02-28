import { useState } from "react";
import axios from "axios";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [genre, setGenre] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!title || !releaseYear || !genre || !selectedFile) {
      alert("Please fill all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("title", title);
    formData.append("release_year", releaseYear);
    formData.append("genre", genre);

    try {
      const response = await axios.post("http://localhost/backend/christmasMoviesBackEnd/upload.php", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        alert("Movie added successfully!");
      } else {
        alert("Error: " + response.data.message);
      }
    } catch (error) {
      console.error("Error uploading movie:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Movie Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="number" placeholder="Release Year" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
