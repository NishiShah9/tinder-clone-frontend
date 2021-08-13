
import './App.css';
import Header from './Component/Header';
import TinderCard from './Component/TinderCards';

import SwipeButtons from './Component/SwipeButton';
function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      
      {/* Tinder Card */}
      <TinderCard />

      {/* Swipe Buttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
