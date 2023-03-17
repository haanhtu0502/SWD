import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "./MusicList.scss";

const MusicList = () => {
  const music = useSelector((state) => state.music.list);
  const error = useSelector((state) => state.music.error);
  const loading = useSelector((state) => state.music.loading);
  return (
    <div className="list">
      {loading ? (
        <div className="center">
          <CircularProgress color="primary" />
        </div>
      ) : (
        <>
          {music.matches ? (
            <h1 className="music-title">
              {music.matches.length === 0
                ? "Can't find your song"
                : "Your song found !"}
            </h1>
          ) : (
            <h1 className="music-title">
              {error === "" ? "Let's find your song" : `${error}`}
            </h1>
          )}

          {music.track ? (
            <div className="music-list-grid">
              <div className="music-poster">
                <img src={music.track.images.background} alt="" />
                <div className="music-des">
                  <h3 className="music-name">{music.track.title}</h3>
                  <h4 className="music-artist">{music.track.subtitle}</h4>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default MusicList;
