import { createSlice } from '@reduxjs/toolkit';

const saved = localStorage.getItem('lf_user');
const savedToken = localStorage.getItem('lf_token');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: saved ? JSON.parse(saved) : null,
    token: savedToken || null,
    loading: false,
    error: null,
  },
  reducers: {
    loginRequest: (state) => { state.loading = true; state.error = null; },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('lf_user', JSON.stringify(action.payload.user));
      localStorage.setItem('lf_token', action.payload.token);
    },
    loginFailure: (state, action) => { state.loading = false; state.error = action.payload; },
    registerRequest: (state) => { state.loading = true; state.error = null; },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('lf_user', JSON.stringify(action.payload.user));
      localStorage.setItem('lf_token', action.payload.token);
    },
    registerFailure: (state, action) => { state.loading = false; state.error = action.payload; },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('lf_user');
      localStorage.removeItem('lf_token');
    },
    clearError: (state) => { state.error = null; },
  },
});

export const { loginRequest, loginSuccess, loginFailure, registerRequest, registerSuccess, registerFailure, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
