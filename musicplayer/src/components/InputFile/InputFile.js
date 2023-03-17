import React, { useEffect, useRef, useState } from "react";
import "./InputFile.scss";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDispatch, useSelector } from "react-redux";
import { getMusic } from "../../feature/musicSlice";
import { CircularProgress } from "@mui/material";

const InputFile = () => {
  const dispatch = useDispatch();
  const [result, setResult] = useState("");

  const onInputChange = (e) => {
    const file = e.target.files[0];

    // Encode the file using the FileReader API
    const reader = new FileReader();
    reader.onloadend = () => {
      // Use a regex to remove data url part
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      setResult(base64String);

      // Logs wL2dvYWwgbW9yZ...
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (result === "") {
      return;
    }
    dispatch(getMusic(result));
  }, [result]);

  return (
    <div className="input_file">
      <input
        onChange={onInputChange}
        type="file"
        id="file"
        accept="audio/raw"
      />
      <label for="file">
        <LibraryMusicIcon /> Choose your song
      </label>
    </div>
  );
};

export default InputFile;
