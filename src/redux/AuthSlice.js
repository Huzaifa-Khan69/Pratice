import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API} from '../api/Api';
import axios from 'axios';
import Toast from 'react-native-toast-message';

export const login = createAsyncThunk('auth/login', async config => {
  return await axios
    .request(config)
    .then(response => {
      return response.data.data;
    })
    .catch(error => {
      Toast.show({
        type: 'error',
        text1: error.message,
      });
      return error;
    });
});

const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    userloggedIn: false,
    loading: false,
    data: null,
    token: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(
        'jkdshkjaghkgktg==========>   ',
        action.payload.token.trim().length,
      );
      state.loading = false;
      state.userloggedIn =
        action.payload.token.trim().length > 0 ? true : false;
      state.token = action.payload.token;
      state.data = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default AuthSlice.reducer;
