import React from "react";
import Nav from "./Nav";
import girl from "../../media/girl.png";
import wave from "../../media/Intersect.png";
import join from "../..//media/join.png"

function MainLanding() {
  return (
    <>
      <Nav></Nav>
      <div className="min-h-screen bg-white flex flex-col items-center">
        {/* Main Content */}
        <main className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl leading-tight font-semibold">
              Welcome to the Student- <br /> Alumni Interaction System
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              by Department of Technical Education, Rajasthan
            </p>

            <button className="mt-8 border-2 w-[440px] border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
              Sign in with Email
            </button>

            <p className="text-sm text-center text-gray-500 mt-4">
              By joining in you agree to Aludent's{" "}
              <a href="#" className="text-blue-600 hover:underline">
                User Agreement
              </a>
              <br />,{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Cookie Policy
              </a>
              .
            </p>
            <p className="text-sm text-center text-gray-700 mt-4">
              New to Aludent?{" "}
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Join Now
              </a>
            </p>
          </div>

          {/* Right Content */}
          <div className="flex-1 mt-12 lg:mt-0 relative left-[200px]">
            {/* Image */}
            <img
              src={girl} // Replace with the actual image URL
              alt="Graduate"
              className="relative z-10 size-96"
            />
          </div>
          <div className="absolute inset-x-0 bottom-[118px] z-0 overflow-hidden">
            <img src={wave} alt="" className="w-full object-cover" />
          </div>
        </main>
        {/* <div className="m-[-32px] wave z-0 relative bottom-[316px]"><img src={wave} alt="" srcset="" /></div> */}
      </div>
      <div className="space-y-10">
        {/* Collaborative Articles Section */}
        <section className="bg-gray-100 py-10">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-semibold">
              Explore collaborative articles
            </h2>
            <p className="text-gray-600">
              We're unlocking community knowledge in a new way. Experts add
              insights directly into each article, started with the help of AI.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white border rounded-full text-gray-700">
                Marketing
              </span>
              <span className="px-4 py-2 bg-white border rounded-full text-gray-700">
                Public Administration
              </span>
              <span className="px-4 py-2 bg-white border rounded-full text-gray-700">
                Engineering
              </span>
              <span className="px-4 py-2 bg-white border rounded-full text-gray-700">
                IT Services
              </span>
              <span className="px-4 py-2 bg-white border rounded-full text-gray-700">
                Sustainability
              </span>
              <span className="px-4 py-2 bg-white border rounded-full text-gray-700">
                Business Administration
              </span>
              <span className="px-4 py-2 bg-white border rounded-full text-gray-700">
                Telecommunications
              </span>
              <span className="px-4 py-2 bg-white border rounded-full text-gray-700">
                HR Management
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-600 border border-blue-600 rounded-full">
                See All
              </span>
            </div>
          </div>
        </section>

        {/* Job or Internship Section */}
        <section className="py-10">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-semibold">
              Find the right job or internship for you
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white border rounded-full text-gray-700">
                Finance
              </span>
              <span className="px-4 py-2 bg-white border rounded-full text-gray-700">
                Administrative Assistance
              </span>
              <span className="px-4 py-2 bg-white border rounded-full text-gray-700">
                Operations
              </span>
            </div>
          </div>
        </section>
        <div>
          <h1 className="text-4xl leading-tight font-semibold">Join your classmates and Alumni on Aludent</h1>
          <div><img src={join} alt="" srcset="" /></div>
        </div>
        
      </div>
      <footer className="bg-gray-200 py-8">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Aludent Logo */}
        <div>
          <h1 className="text-lg font-semibold text-gray-800">Aludent</h1>
        </div>
        
        {/* General Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">General</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-gray-600 hover:underline">Sign Up</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Help Center</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">About</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Press</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Blog</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Careers</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Developers</a></li>
          </ul>
        </div>

        {/* Browse Aludent Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Browse Aludent</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-gray-600 hover:underline">Learning</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Jobs</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Salary</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Mobile</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Products</a></li>
          </ul>
        </div>

        {/* Directories Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Directories</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-gray-600 hover:underline">Members</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Jobs</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Companies</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Featured</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Posts</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Articles</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">News</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Products</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Advice</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-8 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
          <span>2024 ©</span>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Accessibility</a>
            <a href="#" className="hover:underline">User Agreement</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
            <a href="#" className="hover:underline">Copyright Policy</a>
            <a href="#" className="hover:underline">Brand Policy</a>
            <a href="#" className="hover:underline">Guest Controls</a>
            <a href="#" className="hover:underline">Community Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default MainLanding;
