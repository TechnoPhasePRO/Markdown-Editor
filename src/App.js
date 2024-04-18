import React, { useState } from 'react';
import MarkdownEditor from './MarkdownEditor';
import LivePreview from './LivePreview';

const App = () => {
  const [html, setHtml] = useState('');

  const handleHtmlChange = (newHtml) => {
    setHtml(newHtml);
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <MarkdownEditor onHtmlChange={handleHtmlChange} />
      </div>
      <div
        style={{
          flex: 1,
          maxHeight: '100%',
          overflowY: 'auto',
        }}
      >
        <LivePreview html={html} />
      </div>
    </div>
  );
};

export default App;
