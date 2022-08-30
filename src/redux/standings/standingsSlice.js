import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=';
const endURL = '&sort=asc';
const initialState = [];

export const getStandingsYear = createAsyncThunk(
  'seasons/getStandingsYear',
  async (year) => {
    const response = await fetch(`${baseURL}${year}${endURL}`, {
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

export const standingsSlice = createSlice({
  name: 'standings',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getStandingsYear.fulfilled, (state, action) => action.payload.data.standings);
  },
});

// Action creators are generated for each case reducer function
export default standingsSlice.reducer;
