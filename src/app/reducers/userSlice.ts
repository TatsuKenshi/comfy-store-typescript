import { createSlice } from "@reduxjs/toolkit";
import { RootStateType } from "../store";
// import { useAuth0 } from "@auth0/auth0-react";
// import { RedirectLoginOptions, LogoutOptions, User } from "@auth0/auth0-react";

type InitialState = {
  myUser: {} | null;
};

// type InitialState = {
//   myUser: User | undefined | null;
// };

// type AuthTypes = {
//   loginWithRedirect: (
//     options?: RedirectLoginOptions | undefined
//   ) => Promise<void>;
//   logout: (options?: LogoutOptions | undefined) => void;
//   user: User | undefined;
// };

const initialState: InitialState = {
  myUser: null,
};

const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
