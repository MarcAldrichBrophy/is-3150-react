import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Page from './pages/product';
import HomePage from './pages/home';
import PostPage from './pages/post';
import PostErrorPage from './pages/postError';

import productCount from './variables';

function App() {
  const desiredProducts = productCount;
  let pages = [];
  

  for (let productNum = 1; productNum <= desiredProducts; productNum++) {

    let productString = "p";
    let numLen = 4 - String(productNum).length;
    for(let i = 0; i < numLen; i++) {
        productString += "0"
    }
    productString += String(productNum);
    
    pages.push({
      id: productNum,
      productId: productString,
      title: "Product: " + productString,
      content: "Product content."
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        {pages.map((page) => (
          <Route path={`/${page.productId}`} key={page.id} element={<Page title={page.title} content={page.content} />} />
        ))}
        <Route path="/" element={<HomePage/>}/>
        {/* <Route path="/home" element={<HomePage/>}/> */}
        <Route path="/post" element={<PostPage/>}/>
        <Route path="/postError" element={<PostErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
