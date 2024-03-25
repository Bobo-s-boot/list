import ReactMarkdown from 'react-markdown';
import React from 'react';

const MARKDOWN_CLASS = 'markdown_theme';

interface MarkdownProps {
  data: string;
}

export const Markdown: React.FC<MarkdownProps> = ({
  data,
}: {
  data: string;
}) => <ReactMarkdown className={MARKDOWN_CLASS} children={data} />;
