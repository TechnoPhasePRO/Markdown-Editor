import React from 'react';

const LivePreview = ({ html }) => {
  return (
    <div
      style={{
        flex: 1,
        overflowY: 'auto',
        border: '1px solid #ccc',
        padding: '10px',
        maxHeight: '100%',
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default LivePreview;
