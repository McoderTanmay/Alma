import React from "react";
import join from "../../media/join.png";


function Post() {
  return (
    <div>
      <div
        className="bg-white shadow-lg rounded-lg mb-6 overflow-hidden"
      >
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Author"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-bold">Paul Wall</h4>
                <p className="text-sm text-gray-500">1h</p>
              </div>
            </div>
            <button className="text-gray-500">...</button>
          </div>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <img src={join} alt="Post" className="w-full" />
        <div className="p-4 flex justify-between text-gray-600 text-sm">
          <span>1268 Likes</span>
          <span>56 Comments</span>
        </div>
        <div className="p-4 flex justify-around text-gray-500 text-sm">
          <button className="hover:text-black">Like</button>
          <button className="hover:text-black">Comment</button>
          <button className="hover:text-black">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
