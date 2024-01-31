import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchBeats = createAsyncThunk('beats/fetchBeats', async () => {
  try {
    const response = await fetch("http://localhost:8080/beat/getAll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка:", error);
  }
});

const initialState = {
  beats: {
    items: [],
    status: 'loading'
  },
  tags: {
    items: [],
    status: 'loading'
  },
};

const beatSlice = createSlice({
  name: 'beats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBeats.pending, (state) => {
        state.beats.items = [];
        state.beats.status = 'loading';
      })
      .addCase(fetchBeats.fulfilled, (state, action) => {
        state.beats.items = action.payload;
        state.beats.status = 'loaded';
      })
      .addCase(fetchBeats.rejected, (state) => {
        state.beats.items = [];
        state.beats.status = 'error';
      });
  },
});

export const beatsReducer = beatSlice.reducer;