
import { useState } from 'react';
import './App.css';
import Header from "./MyComponents/header";
import Footer from './MyComponents/footer';
import News from './MyComponents/news';


function App() {
  let [articles, setArticles] = useState([]);

  return (
    <>
    <Header title="News Central" setArticles={setArticles}/>
    <News articles={articles}/>
    <Footer />
    </>
  );
}

export default App;
