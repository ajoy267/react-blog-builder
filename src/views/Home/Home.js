import React from 'react';
import { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('Title');
  const [subtitle, setSubtitle] = useState('Subtitle');
  const [font, setFont] = useState('font');
  const [align, setAlign] = useState('align');
  const [text, setText] = useState('Text');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title, subtitle, font, align, text }} />
      <Editor
        {...{
          title,
          setTitle,
          subtitle,
          setSubtitle,
          font,
          setFont,
          align,
          setAlign,
          text,
          setText,
        }}
      />
    </main>
  );
}
