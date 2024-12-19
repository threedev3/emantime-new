import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 py-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-200">
          <h1 className="text-9xl font-extrabold text-gradThree mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            Oops! The page you're looking for seems to have wandered off.
            It might have been moved, deleted, or never existed in the first place.
          </p>
          
          <div className="flex flex-col space-y-4">
            <a 
              href="/" 
              className="w-full bg-gradient-to-r from-gradOne via-gradTwo to-gradThree text-white font-bold py-3 px-4 rounded-lg "
            >
              Go to Homepage
            </a>
            
            <button 
              onClick={() => window.history.back()}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Go Back
            </button>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default NotFoundPage;