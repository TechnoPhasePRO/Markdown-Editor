import React, { useState } from 'react';
import axios from 'axios';

const MarkdownEditor = ({ onHtmlChange }) => {
  const [markdown, setMarkdown] = useState('');
  const [error, setError] = useState(null);

  const handleChange = async (e) => {
    const newMarkdown = e.target.value;
    setMarkdown(newMarkdown);
    
    try {
      const response = await axios.post('/api/convert', { markdown: newMarkdown });
      const { html } = response.data;
      onHtmlChange(html);
      setError(null);
    } catch (error) {
      console.error('Error converting Markdown to HTML:', error);
      setError('Error converting Markdown to HTML');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <textarea
        value={markdown}
        onChange={handleChange}
        placeholder="Type Markdown Text here..."
        style={{ flex: 1, resize: 'none' }}
      />
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default MarkdownEditor;
