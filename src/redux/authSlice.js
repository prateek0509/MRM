import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
// import { BehaviorSubject } from 'rxjs';
// const accountSubject = new BehaviorSubject(null);
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

export const changePassword = createAsyncThunk('changepassword', async (body) => {
    const res = await fetch("https://cold-hat-40370.botics.co/rest-auth/password/change/", {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body)
    })
    return await res.json();
})



export const notificationList = createAsyncThunk('notificationList', async () => {
    const response = await fetch("https://cold-hat-40370.botics.co/notification/", {
      method: "get",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${localStorage.getItem('token')}`
      },
    })
    const data = await response.json();
  
    return data;
  });



  export const togglenotification = createAsyncThunk('togglenotification', async (body) => {
    const res = await fetch("https://cold-hat-40370.botics.co/notification/toggle-email", {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body)
    })
    return await res.json();
})

export const signinuser = createAsyncThunk('signinuser', async (body) => {
    const res = await fetch("https://flat-sun-42336.botics.co/api/v1/login/", {
        method: "post",
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(body)
    })
    return await res.json();
})

export const facebookLogin = createAsyncThunk('facebookLogin', async (body) => {
    const res = await fetch("https://cold-hat-40370.botics.co/modules/social-auth/facebook/login/", {
        method: "post",
        headers: {
            'Content-Type': 'application/json',

        },
        body: body
    })
    return await res.json();
})

export const googleLogin = createAsyncThunk('googleLogin', async (response) => {
    // const res = await fetch("https://cold-hat-40370.botics.co/modules/social-auth/google/login/", {
    //     method: "post",
    //     headers: {
    //         'Content-Type': 'application/json',

    //     },
    //     body: body
    // })
    const res=response;
    return await res.json();
})

export const signUpUser = createAsyncThunk('signupuser', async (body) => {
    const res = await fetch("https://flat-sun-42336.botics.co/api/v1/signup/", {
        method: "post",
        headers: {
            'content-Type': "application/json"
        },
        body: JSON.stringify(body)
    })
    return await res.json()
})
export const forgetPassword = createAsyncThunk('forgetpassword', async (body) => {
    const res = await fetch("https://cold-hat-40370.botics.co/api/v1/sendresetpasswordemail/", {
        method: "post",
        headers: {
            'content-Type': "application/json",
        },
        body: JSON.stringify(body)
    })
    const resData = await res.json()
    return resData
})
export const resetPassword = createAsyncThunk('resetpassword', async (body) => {
    const res = await fetch("https://cold-hat-40370.botics.co/rest-auth/password/reset/confirm/", {
        method: "post",
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(body)
    })
    return await res.json();
})


export const getUserProfile = createAsyncThunk('getuserprofile', async (body) => {
    const res = await fetch("https://cold-hat-40370.botics.co/rest-auth/user/", {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body)
    })
    return await res.json();
})


export const getUserData = createAsyncThunk('getUserData', async (body) => {
    const res = await fetch("https://cold-hat-40370.botics.co/users/", {
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
    // return await res.json();
})




//https://cold-hat-40370.botics.co/users/update-profile

const authSlice = createSlice({
    name: 'user',
    initialState,
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
        [signinuser.pending]: (state, action) => {
            state.loading = true
        },

        [signinuser.fulfilled]: (state, { payload: { error, msg, token, user, key, non_field_errors } }) => {
            state.loading = false;
            if (token) {
                state.isAuthenticated = true;
                state.token = token
                state.user = user

                toast.success('Login Successful!', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    hideProgressBar: true,
                });
                localStorage.setItem('token', token)
                localStorage.setItem('isAuthenticated', state.isAuthenticated)
                localStorage.setItem('user', JSON.stringify(user))
            } else {
                state.error = error
                state.isAuthenticated = false;
                toast.error(non_field_errors[0], {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    hideProgressBar: true,
                });
                
            }
        },

        [signinuser.rejected]: (state, action) => {
            state.loading = true
        },
        [signUpUser.pending]: (state, action) => {
            state.loading = true
        },
        [signUpUser.fulfilled]: (state,action) => {
            state.loading = false;
           
            if(action.payload.email){
                toast.success('Sign-up Successful!', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    hideProgressBar: true,
                });
            } else{
                const error=action?.payload?.password[0]
                toast.error(error, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    hideProgressBar: true,
                });
            }

            

            // if (key) {
            //     state.isAuthenticated = true;
            //     state.msg = msg
            //     state.token = token
            //     state.user = user


            //     localStorage.setItem('msg', msg)
            //     localStorage.setItem('token', key)
            //     localStorage.setItem('isAuthenticated', state.isAuthenticated)
            //     localStorage.setItem('user', JSON.stringify(user))
            // } else {
            //     state.error = error
            //     state.isAuthenticated = false;
            //     toast.error("Error !! Please Enter a valid Details", {
            //         position: toast.POSITION.TOP_RIGHT,
            //         autoClose: 2000,
            //         hideProgressBar: true,
            //     });
            // }
        },
        [signUpUser.rejected]: (state, action) => {
            state.loading = true
        },
        [forgetPassword.pending]: (state, action) => {
            state.loading = true
        },
        [forgetPassword.fulfilled]: (state, { payload: { error, msg } }) => {
            state.loading = false;
            console.log(state,error,msg ,"State")
            if(msg){
                toast.success('Email Sent Sucessfully!', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    hideProgressBar: true,
                });
            }
            if (error) {
                state.error = error
                toast.error(error, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    hideProgressBar: true,
                });
            } else {
                state.msg = msg
               
            }
        },
        [forgetPassword.rejected]: (state, action) => {
            state.loading = true
        },
        [resetPassword.pending]: (state, action) => {
            state.loading = true
        },
        [resetPassword.fulfilled]: (state, { payload: { error, detail } }) => {
            state.loading = false;
                
            if(detail) {
                
                toast.success('Password has been Reset', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    hideProgressBar: true,
                });
            }else{
                toast.error("Invalid Password", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    hideProgressBar: true,
                });
            }
        },
        [resetPassword.rejected]: (state, action) => {
            state.loading = true
        },
        [changePassword.pending]: (state, action) => {
            state.loading = true
        },
        [changePassword.fulfilled]: (state, { payload: { error, detail } }) => {
            state.loading = false;
            if (detail) {
                state.detail = detail
                toast.success(detail, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    hideProgressBar: true,
                });
            }
        },
        [changePassword.rejected]: (state, action) => {
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


        [updateProfile.pending]: (state, action) => {
            state.loading = true
        },
        [updateProfile.fulfilled]: (state, action) => {
            state.loading = false;
            console.log(action.payload, "action.payload");

            state.updateddata = action.payload

            if (action.payload) {
                // alert('Data saved successfully')
                toast.success('Profile updated successfully', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    hideProgressBar: false,
                });
            } else {
                // alert('Error While saving data')
                toast.error("Error While saving data", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    hideProgressBar: true,
                });
            }


        },
        [updateProfile.rejected]: (state, action) => {
            state.loading = true
        },

        [uploadPhoto.pending]: (state, action) => {
            state.loading = true
        },
        [uploadPhoto.fulfilled]: (state, action) => {
            state.loading = false;
            console.log(action.payload, "action.payload");

            state.updateddata = action.payload

            if (action.payload.username) {
                toast.success('Photo uploaded successfully', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    hideProgressBar: false,
                });
            } else {
                toast.error("Error While saving data", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    hideProgressBar: true,
                });
            }


        },
        [uploadPhoto.rejected]: (state, action) => {
            state.loading = true
        },


        [facebookLogin.pending]: (state, action) => {
            state.loading = true
        },

        [facebookLogin.fulfilled]: (state, { payload: { error, msg, token, user, key, non_field_errors } }) => {
            state.loading = false;
            if (key) {
                state.isAuthenticated = true;
                state.msg = msg
                state.token = token
                state.user = user

                toast.success('Login Successful!', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    hideProgressBar: true,
                });

                localStorage.setItem('msg', msg)
                localStorage.setItem('token', key)
                localStorage.setItem('isAuthenticated', state.isAuthenticated)
                localStorage.setItem('user', JSON.stringify(user))
            } else {
                state.error = error
                state.isAuthenticated = false;
                toast.error(non_field_errors[0], {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    hideProgressBar: true,
                });
            }
        },

        [facebookLogin.rejected]: (state, action) => {
            state.loading = true
        },

        [googleLogin.pending]: (state, action) => {
            state.loading = true
        },

        [googleLogin.fulfilled]: (state, { payload: { error, msg, token, user, key, non_field_errors } }) => {
            state.loading = false;
            if (key) {
                state.isAuthenticated = true;
                state.msg = msg
                state.token = token
                state.user = user

                toast.success('Login Successful!', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    hideProgressBar: true,
                });

                localStorage.setItem('msg', msg)
                localStorage.setItem('token', key)
                localStorage.setItem('isAuthenticated', state.isAuthenticated)
                localStorage.setItem('user', JSON.stringify(user))
            } else {
                state.error = error
                state.isAuthenticated = false;
                toast.error(non_field_errors[0], {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    hideProgressBar: true,
                });
            }
        },

        [googleLogin.rejected]: (state, action) => {
            state.loading = true
        },


        [getUserData.pending]: (state, action) => {
            state.loading = true
        },
        [getUserData.fulfilled]: (state, action) => {
            state.loading = false;
            state.userdata = action.payload

        },
        [getUserData.rejected]: (state, action) => {
            state.loading = true
        },


        [notificationList.pending]: (state, action) => {
            state.loading = true
        },
        [notificationList.fulfilled]: (state, action) => {
            

        },
        [notificationList.rejected]: (state, action) => {
            state.loading = true
        },

        
        
    }
})

export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const { addToken, addUser, logout,addAuthenticator } = authSlice.actions
export default authSlice.reducer