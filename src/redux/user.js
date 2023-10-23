import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: "",
    key: "",
    non_field_errors: "",
    isAuthenticated: false,
    detail: "",
    userdata: [],
    updateddata: [],
}


export const getUserProfile = createAsyncThunk('getuserprofile', async (body) => {
    const res = await fetch("https://flat-sun-42336.botics.co/api/v1/users/", {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body)
    })
    return await res.json();
})


export const getProductData = createAsyncThunk('getUserData', async (body) => {
    const res = await fetch("https://flat-sun-42336.botics.co/prescriptions/products/", {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body)
    })
    return await res.json();
})
export const getPreviousPrescription = createAsyncThunk('getPreviousPrescription', async (body) => {
    const res = await fetch("https://flat-sun-42336.botics.co/prescriptions/prescription/current_prescriptions/", {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body)
    })
    return await res.json();
})



export const updateProfile = createAsyncThunk('updateprofile', async (body) => {
    const res = await fetch("https://cold-hat-40370.botics.co/users/update-profile", {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body)
    })
    return await res.json();
})


export const uploadPhoto = createAsyncThunk('uploadPhoto', async (body) => {
    console.log(body, "body")
    const res = await fetch("https://cold-hat-40370.botics.co/api/v1/uploadpicture/", {
        method: "post",
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `token ${localStorage.getItem('token')}`
        },
        body: body
    }).then(res => {
        console.log(res, "response");
    }).catch(error => {
        console.log(error, "error");
    })
})




//https://cold-hat-40370.botics.co/users/update-profile

const authSlice = createSlice({
    name: 'user',
    initialState:{
        getPreviousPrescription:[]  
    },
    reducers: {


        addToken: (state) => {
            state.key = localStorage.getItem('token')
        },
        addUser: (state, action) => {
            state.key = localStorage.getItem('token')
        },
        addAuthenticator: (state,action) => {
            state.isAuthenticated = true;
            state.token = localStorage.getItem('token')
            localStorage.setItem('isAuthenticated',true)
        },
        logout: (state) => {
            state.key = null
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            localStorage.removeItem('role')
            localStorage.removeItem('isAuthenticated')
            state.isAuthenticated = false;

            if (typeof window.FB !== 'undefined') {
            window.FB.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                    console.log(response, 'facebookresponse');
                    const accessToken = response.authResponse.accessToken;


                    window.FB.logout(function (response) {
                        console.log(response, 'response');
                        console.log(accessToken, 'accessToken');
                        console.log("Logged Out!");

                    });
                }
            });
        }

        },

    },
    extraReducers: {


        [getUserProfile.pending]: (state, action) => {
            state.loading = true
        },
        [getUserProfile.fulfilled]: (state, action) => {
            state.loading = false;
            console.log(action.payload, "action.payload");
            state.userdata = action.payload

        },
        [getUserProfile.rejected]: (state, action) => {
            state.loading = true
        },
        [getUserProfile.pending]: (state, action) => {
            state.loading = true
        },
        [getUserProfile.fulfilled]: (state, action) => {
            state.loading = false;
            console.log(action.payload, "action.payload");
            state.userdata = action.payload

        },
        [getUserProfile.rejected]: (state, action) => {
            state.loading = true
        },


        [getPreviousPrescription.pending]: (state, action) => {
            state.loading = true
        },
        [getPreviousPrescription.fulfilled]: (state, action) => {
            state.loading = false;
            state.userdata = action.payload
        },
        [getPreviousPrescription.rejected]: (state, action) => {
            state.loading = true
        },
     
    }
})