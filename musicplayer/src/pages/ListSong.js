import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ListSong.scss";

const ListSong = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2a04525410msh7085c505d566449p1d921bjsnc9c684bf4407",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };

    setLoading(true);
    fetch(
      "https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setSongs(response.tracks);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ width: "100%", marginTop: "2rem" }}>
      {loading ? (
        <div className="center">
          <CircularProgress color="primary" />
        </div>
      ) : (
        <div className="music-grid">
          {songs.map((song, index) => (
            <div key={index} className="music-poster">
              <img src={song.images.background} alt="" />
              <div className="music-des">
                <h3 className="music-name">{song.title}</h3>
                <h4 className="music-artist">{song.subtitle}</h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListSong;
