import React from 'react';
import {marked} from 'marked';
import DOMPurify from 'dompurify';

const MarkdownRenderer = ({ content }) => {
  const parsedContent = marked(content);
  const cleanContent = DOMPurify.sanitize(parsedContent);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: cleanContent }} />
    </div>
  );
};

export default MarkdownRenderer;