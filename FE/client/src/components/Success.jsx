import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginPopUpOpen, signinPopUpClose } from "../store/slices/popUpSlice";
import { clearSuccess } from "../store/slices/authSlice";

const Success = () => {
  const dispatch = useDispatch();
  const onGoToLogin=()=>{
    dispatch(signinPopUpClose());
    dispatch(loginPopUpOpen());
    dispatch(clearSuccess());
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-80 text-center">
        <div className="flex justify-center items-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
            <svg
              className="w-6 h-6 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Great!</h2>
        <p className="text-sm text-gray-600 mb-6">
          You've registered successfully
        </p>
        <button
          onClick={onGoToLogin}
          className="bg-teal-500 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-1"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default Success;
