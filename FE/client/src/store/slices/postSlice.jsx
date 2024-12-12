import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/post"; // Replace with your API base URL

// Async thunk for fetching posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getAllUserPosts`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    
    return rejectWithValue(error.response.data);
  }
});

// Async thunk for creating a post
export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ formData }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/createPost`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for liking a post
export const likePost = createAsyncThunk("posts/likePost", async (postId, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/like/${postId}`, {}, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return { postId, likes: response.data.likes };
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Async thunk for commenting on a post
export const commentPost = createAsyncThunk(
  "posts/commentPost",
  async ({ postId, comment }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/comment/${postId}`,
        { comment },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return { postId, comments: response.data.comments };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload); // Add the new post to the top
      })
      .addCase(likePost.fulfilled, (state, action) => {
        const { postId, likes } = action.payload;
        const post = state.posts.find((post) => post._id === postId);
        if (post) {
          post.likes = likes;
        }
      })
      .addCase(commentPost.fulfilled, (state, action) => {
        const { postId, comments } = action.payload;
        const post = state.posts.find((post) => post._id === postId);
        if (post) {
          post.comments = comments;
        }
      });
  },
});

export const selectAllPosts = (state) => state.post.posts; // Correct path
export const getPostsStatus = (state) => state.post.status; // Example
export const getPostsError = (state) => state.post.error; // Example

export default postsSlice.reducer;
