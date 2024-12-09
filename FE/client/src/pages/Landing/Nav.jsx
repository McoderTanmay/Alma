import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  clearError,
  signinUser,
} from "../../store/slices/authSlice";
import { loginPopUpOpen, loginPopUpClose, signinPopUpOpen, signinPopUpClose } from "../../store/slices/popUpSlice";
import eventLogo from "../../media/conference.png";
import chatLogo from "../..//media/conversation.png";
import forums from "../../media/froum.png";
import Error from "../../components/Error";
import Success from "../../components/Success";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [password, setPassword] = useState("");

  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [cnfpassword, setCnfpassword] = useState("");
  const [passDNM, setPassDNM] = useState(false);

  const nevigate = useNavigate();

  const dispatch = useDispatch();
  const { isLoading, error, success, rsuccess } = useSelector(
    (state) => state.auth
  );
  const { loginPopUp, signinPopUp } = useSelector((state) => state.popUp);

  if (success) {
    nevigate("/home");
  }

  const handelLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(clearError());
    dispatch(loginUser({ rollNo: enrollmentNo, password }));
  };

  const handelSigninClick = () => {
    dispatch(signinPopUpOpen());
  };
  const handleCloseSigninPopup = () => {
    dispatch(signinPopUpClose());
  };

  const handleLoginClick = () => {
    dispatch(loginPopUpOpen());
  };

  const handleClosePopup = () => {
    dispatch(loginPopUpClose());
  };

  const handelSigninBtn = (e) => {
    e.preventDefault();
    if (rpassword != cnfpassword) {
      setPassDNM(true);
      return;
    }
    dispatch(
      signinUser({ FullName: name, email, password:rpassword, userType, rollNo })
    );
  };
  return (
    <>
      <div className="flex justify-between ms-3 me-3 mt-3">
        <div>
          <h1 className="text-[30px] font-bold">
            Alu<span className="text-teal-700 ">dent</span>
          </h1>
        </div>
        <div className="flex">
          <div className="icons flex mr-[150px] mt-2">
            <img
              src={eventLogo}
              alt="Events"
              srcset=""
              className="size-8 mr-5"
            />
            <img src={chatLogo} alt="Chat" srcset="" className="size-8 mr-5" />
            <img src={forums} alt="Forums" srcset="" className="size-8 mr-5" />
          </div>
          <div className="loginAndSingup flex items-center">
            <button
              onClick={handleLoginClick}
              class="border-2 border-teal-600 text-teal-600 px-4 py-2 rounded-full hover:bg-teal-600 hover:text-white transition"
            >
              Log In
            </button>

            <button
              onClick={handelSigninClick}
              class="bg-gray-900 text-white px-4 drop-shadow-xl py-2 rounded-full hover:bg-gray-700 transition"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      {loginPopUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 pt-0 w-96 shadow-lg relative">
            <div className="bg-teal-600 ml-[-24px] mr-[-24px] rounded-t-2xl flex justify-center items-center">
              <h2 className="text-base font-semibold text-white text-center pb-2 pt-1">
                Please enter your credentials
              </h2>
            </div>

            <form>
              <div className="mb-4">
                <input
                  type="text"
                  id="enrollment"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your enrollment no."
                  onChange={(e) => setEnrollmentNo(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
                    👁️ {/* Replace with an eye icon */}
                  </span>
                </div>
              </div>
              <button
                type="submit"
                onClick={handelLoginSubmit}
                className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition"
              >
                Login
              </button>
            </form>
            <button
              onClick={handleClosePopup}
              className="z-10 absolute top-1 right-2 text-white hover:text-gray-800"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      {signinPopUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 pt-0 w-96 shadow-lg relative">
            <div className="bg-teal-600 ml-[-24px] mr-[-24px] rounded-t-2xl flex justify-center items-center">
              <h2 className="text-base font-semibold text-white text-center pb-2 pt-1">
                Register
              </h2>
            </div>

            <form>
              <div className="mb-4">
                <input
                  onChange={(e) => setRollNo(e.target.value)}
                  type="text"
                  id="enrollment"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your enrollment no."
                />
              </div>
              <div className="mb-4">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="Full Name"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your Full Name"
                />
              </div>
              <div className="mb-4">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  id="Email"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your Email."
                />
              </div>
              <div className="mb-4">
                <input
                  onChange={(e) => {
                    setUserType(e.target.value);
                  }}
                  type="user"
                  id="user"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Student or Alumni"
                />
              </div>
              <div className="mb-4">
                <input
                  onChange={(e) => {
                    setRpassword(e.target.value);
                  }}
                  type="password"
                  id="Password"
                  className={`${
                    passDNM ? "bg-red-400 border-red-600" : ""
                  } w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500`}
                  placeholder="Enter your Password"
                />
              </div>
              <div className="mb-4">
                <div className="relative">
                  <input
                    onChange={(e) => {
                      setCnfpassword(e.target.value);
                    }}
                    type="password"
                    id="cnfpassword"
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
              <button
                onClick={handelSigninBtn}
                type="submit"
                className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition"
              >
                SignIn
              </button>
            </form>
            <button
              onClick={handleCloseSigninPopup}
              className="absolute top-2 right-2 text-white hover:text-gray-800"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      {error && <Error />}
      {rsuccess && <Success />}
    </>
  );
}

export default Nav;
