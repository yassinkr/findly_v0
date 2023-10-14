import React from 'react';

const SwipeableContainer = () => {
  const handleSwipe = (event, deltaX, deltaY) => {
    console.log('Swiped!', deltaX, deltaY);
    // Perform actions based on the swipe direction and distance.
  };

  return (
    <Swipeable onSwiped={handleSwipe}>
      <div style={{ width: '100%', height: '200px', background: 'lightgray' }}>
        Swipe me!
      </div>
    </Swipeable>
  );
};

export default SwipeableContainer;
