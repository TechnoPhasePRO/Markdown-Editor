import React, { useState } from 'react';
import MarkdownEditor from './MarkdownEditor';
import LivePreview from './LivePreview';

const App = () => {
  const [html, setHtml] = useState('');

  const handleHtmlChange = (newHtml) => {
    setHtml(newHtml);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <MarkdownEditor onHtmlChange={handleHtmlChange} />
        </div>
        <div style={{ flex: 1 }}>
          <LivePreview html={html} />
        </div>
      </div>
    </div>
  );
};

export default App;
