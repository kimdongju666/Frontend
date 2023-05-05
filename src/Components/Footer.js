import React from 'react'
import '../CSS/Footer.css';

function Footer() {
  const thisyear = () => {
    const year = new Date().getFullYear();
    return year
  }
  return (
    <footer>
      <div class="inner">
        <p class="copyright">
          &copy; <span> {thisyear()}</span> Kwon Jong Seok BABO. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;