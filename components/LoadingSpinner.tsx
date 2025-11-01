import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div role="status" className="flex justify-center items-center p-8">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
      <span className="sr-only">Loading story...</span>
    </div>
  );
};

export default LoadingSpinner;