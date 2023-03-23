import { YOUTUBE_API_URL } from "./../../utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getHomePageVideos = createAsyncThunk(
  "youtubeApp/homePageVideos",
  async (isNext: boolean, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFormState, videos },
    } = getState() as RootState;
    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video`
    );
    console.log(items);
  }
);
