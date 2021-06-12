import React from 'react';

const Loading = () => {
  return (
    <div className="text-center col">
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
};

export default Loading;