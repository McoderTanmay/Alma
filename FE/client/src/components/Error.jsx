import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {clearError} from "../store/slices/authSlice"
import { loginPopUpOpen } from "../store/slices/popUpSlice";

function Error( ) {
  const dispatch = useDispatch();
  const { error} = useSelector((state) => state.auth);

  const handelRetry=()=>{
    dispatch(clearError());
    dispatch(loginPopUpOpen());
  }

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <div className="bg-white rounded-lg shadow-xl p-6 w-80 text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
              <svg
                fill="#e33b3b"
                height="200px"
                width="200px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
                stroke="#e33b3b"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M437.016,74.984c-99.979-99.979-262.075-99.979-362.033,0.002c-99.978,99.978-99.978,262.073,0.004,362.031 c99.954,99.978,262.05,99.978,362.029-0.002C536.995,337.059,536.995,174.964,437.016,74.984z M406.848,406.844 c-83.318,83.318-218.396,83.318-301.691,0.004c-83.318-83.299-83.318-218.377-0.002-301.693 c83.297-83.317,218.375-83.317,301.691,0S490.162,323.549,406.848,406.844z"></path>{" "}
                        <path d="M361.592,150.408c-8.331-8.331-21.839-8.331-30.17,0l-75.425,75.425l-75.425-75.425c-8.331-8.331-21.839-8.331-30.17,0 s-8.331,21.839,0,30.17l75.425,75.425L150.43,331.4c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0 l75.397-75.397l75.419,75.419c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17l-75.419-75.419l75.425-75.425 C369.923,172.247,369.923,158.74,361.592,150.408z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-6">{error}</p>
          <button onClick={handelRetry} className="bg-teal-500 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-1">
            Retry
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;
