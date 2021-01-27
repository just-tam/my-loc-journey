import React from 'react';
import './App.css';
import './nicepage.css';
import './Page-1.css';
import Header from './Header'
import YellowBackground from './YellowBackground'
import Intro from './Intro'
import ImageCard from'./ImageCard'
import cardList from './CardList'
import Footer from './Footer'

function App() {
  const imageCardComponents = cardList.map(card => <ImageCard key={card.id} imgUrl={card.imgUrl} month={card.month} desc={card.desc} />)

  return (
    <div className="App">
      <section class="u-align-center u-clearfix u-grey-5 u-section-1" id="carousel_b6c6">
        <Header />
        <YellowBackground />
        <Intro />
        <div class="u-list u-repeater u-list-1">
          {imageCardComponents}
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default App;
