import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  clearError,
  signinUser,
} from "../../store/slices/authSlice";
import {
  loginPopUpOpen,
  loginPopUpClose,
  signinPopUpOpen,
  signinPopUpClose,
} from "../../store/slices/popUpSlice";
import eventLogo from "../../media/conference.png";
import chatLogo from "../..//media/conversation.png";
import forums from "../../media/froum.png";
import Error from "../../components/Error";
import Success from "../../components/Success";
import { useNavigate } from "react-router-dom";
import "./nav.css";

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
  const [showPopup, setShowPopup] = useState(false);
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);

  const addSkill = () => {
    if (skillInput.trim()) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const nevigate = useNavigate();

  const dispatch = useDispatch();
  const { isLoading, error, success, rsuccess } = useSelector(
    (state) => state.auth
  );
  const { loginPopUp, signinPopUp } = useSelector((state) => state.popUp);
  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

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
      signinUser({
        FullName: name,
        email,
        password: rpassword,
        userType,
        rollNo,
      })
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
          <div className="icons flex mt-2">
            {/* <img
              src={eventLogo}
              alt="Events"
              srcset=""
              className="size-8 mr-5"
            /> */}
          </div>
          <div className="loginAndSingup flex items-center">
            <div
              className="navbar-menu-item border-2 border-teal-600 me-2 text-teal-600 px-4 py-2 rounded-full hover:bg-teal-600 hover:text-white transition"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Success Stories
              {showPopup && (
                <div
                  className="popup-container"
                  onMouseEnter={handleMouseEnter}
                >
                  <div className="popup-body">
                    <div className="popup-header">Success Stories</div>
                    {/* <p>Read how schools leverage Aludent in their communities.</p> */}
                    {/* <a href="#" className="see-all-link">
                      See All Stories →
                    </a> */}
                    <div className="popup-cards-container">
                      <div className="popup-card">
                        <img
                          src="ravi.jpg"
                          alt="University of Kansas"
                          className="popup-card-image"
                        />
                        <div>
                          <h3>Ravi Kumar</h3>
                          <p>
                            Ravi Kumar sir graduated with a degree in Mechanical
                            Engineering from Rajasthan Technical University
                            (RTU), Kota. He used Aludent’s platform to connect
                            with alumni in the automotive industry. By attending
                            career events and webinars, he secured an internship
                            at a leading automobile manufacturer, which later
                            turned into a full-time job. Ravi is now a senior
                            mechanical engineer, and his contributions to
                            eco-friendly vehicle design have earned him
                            recognition in the industry.
                          </p>
                        </div>
                      </div>
                      <div className="popup-card">
                        <img
                          src="priya.jpg"
                          alt="Michigan State University"
                          className="popup-card-image"
                        />
                        <div>
                          <h3>Priya Mehta</h3>
                          <p>
                            Priya Mehta mam , a graduate in Political Science
                            from the University of Rajasthan, Jaipur, was unsure
                            about her career path after college. After joining
                            the Aludent platform, Priya participated in several
                            alumni-led mentorship programs, which guided her
                            toward a career in public policy. Today, she works
                            as a policy analyst for a well-known NGO and is an
                            active speaker at forums, focusing on sustainable
                            development policies. She often returns to the
                            University to guide students about career options in
                            the public sector.
                          </p>
                        </div>
                      </div>
                      <div className="popup-card">
                        <img
                          src="vikram.jpg"
                          alt="University of Miami"
                          className="popup-card-image"
                        />
                        <div>
                          <h3>Vikram Singh</h3>
                          <p>
                            Vikram Singh sir completed his graduation in
                            Commerce from Maharaja College, Jaipur. After
                            exploring various job opportunities, he turned to
                            Aludent for networking and job placement support.
                            Through the alumni network, he found a mentor who
                            helped him land a position at a leading financial
                            firm. Vikram is now a financial analyst and
                            frequently advises students at Maharaja College
                            about pursuing careers in finance and investment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={handleLoginClick}
              class="border-2 border-teal-600 me-2 text-teal-600 px-4 py-2 rounded-full hover:bg-teal-600 hover:text-white transition"
            >
              Log In
            </button>

            <button
              onClick={handelSigninClick}
              class="bg-gray-900 text-white px-4 drop-shadow-xl py-2 rounded-full hover:bg-gray-700 transition"
            >
              Sign up
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

            <form className="pt-4"> 
              <div className="mb-3 ">
                <input
                  onChange={(e) => setRollNo(e.target.value)}
                  type="text"
                  id="enrollment"
                  className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your enrollment no."
                />
              </div>
              <div className="mb-3 ">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="Full Name"
                  className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your Full Name"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="Email"
                  className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your Email."
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={(e) => setUserType(e.target.value)}
                  type="text"
                  id="user"
                  className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Student or Alumni"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={(e) => setRpassword(e.target.value)}
                  type="password"
                  id="Password"
                  className={`${
                    passDNM ? "bg-red-400 border-red-600" : ""
                  } w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500`}
                  placeholder="Enter your Password"
                />
              </div>
              <div className="mb-3">
                <div className="relative">
                  <input
                    onChange={(e) => setCnfpassword(e.target.value)}
                    type="password"
                    id="cnfpassword"
                    className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="document"
                  className="block font-medium text-gray-700"
                >
                  Upload Document
                </label>
                <input
                  type="file"
                  id="document"
                  name="document"
                  className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
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
