import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getMusic = createAsyncThunk("music/getList", async (data) => {
  const currentMusicList = await fetch(
    "https://shazam.p.rapidapi.com/songs/detect",
    {
      method: "POST",
      headers: {
        "content-type": "text/plain",
        "X-RapidAPI-Key": "2a04525410msh7085c505d566449p1d921bjsnc9c684bf4407",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
      body: data,
    }
  );
  return currentMusicList.json();
});

const initialState = {
  list: {},
  loading: false,
  error: "",
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {},
  extraReducers: {
    [getMusic.pending]: (state) => {
      state.loading = true;
    },
    [getMusic.fulfilled]: (state, action) => {
      state.loading = false;
      state.list = action.payload;
      console.log(state.list);
      state.error = "";
    },
    [getMusic.rejected]: (state) => {
      state.loading = false;
      state.error = "Cannot read your input file";
      state.list = {};
    },
  },
});

// Action creators are generated for each case reducer function

export default musicSlice.reducer;
