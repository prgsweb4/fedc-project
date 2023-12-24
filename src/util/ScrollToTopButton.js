import React from 'react';

class ScrollToTopButton extends React.Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling behavior
    });
  }

  render() {
    return (
      <button onClick={this.scrollToTop}>Scroll to Top</button>
    );
  }
}

export default ScrollToTopButton;