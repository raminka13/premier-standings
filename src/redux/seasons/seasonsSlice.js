import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://api-football-standings.azharimm.dev/leagues/eng.1/seasons';

const initialState = [];

export const getSeasons = createAsyncThunk(
  'seasons/getSeasons',
  async () => {
    const response = await fetch(baseURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },

    });
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const seasonsSlice = createSlice({
  name: 'seasons',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getSeasons.fulfilled, (state, action) => action.payload.data.seasons);
  },
});

// Action creators are generated for each case reducer function
export default seasonsSlice.reducer;
