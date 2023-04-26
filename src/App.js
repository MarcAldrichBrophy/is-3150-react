import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './pages/product';

function App() {
  const pages = [
    // {
    //   id: 1,
    //   title: 'Page 1',
    //   content: 'This is the content for page 1.',
    // },
    // {
    //   id: 2,
    //   title: 'Page 2',
    //   content: 'This is the content for page 2.',
    // },
    // {
    //   id: 3,
    //   title: 'Page 3',
    //   content: 'This is the content for page 3.',
    // },
    // {
    //   id: 4,
    //   title: 'Page 4',
    //   content: 'This is the content for page 4.',
    // },
    // {
    //   id: 5,s
    //   title: 'Page 5',
    //   content: 'This is the content for page 5.',
    // },
  ];

  for (let pageNum = 1; pageNum <= 10; pageNum++) {
    pages.push({
      id: pageNum,
      title: "Page " + pageNum,
      content: "This is content for page " + pageNum
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        {pages.map((page) => (
          <Route path={`/${page.id}`} key={page.id} element={<Page title={page.title} content={page.content} />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
