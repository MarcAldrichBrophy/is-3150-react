import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './pages/product';
import HomePage from './pages/home';
import productCount from './variables';

function App() {
  const desiredProducts = productCount;
  let pages = [];

  for (let productNum = 1; productNum <= desiredProducts; productNum++) {
    pages.push({
      id: productNum,
      title: "Product " + productNum,
      content: "Product content."
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        {pages.map((page) => (
          <Route path={`/${page.id}`} key={page.id} element={<Page title={page.title} content={page.content} />} />
        ))}
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
