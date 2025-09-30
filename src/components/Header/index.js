import './index.css'
import { useState, useEffect } from 'react'
import { FaXmark } from 'react-icons/fa6'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if screen width is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    // Initial check
    checkIfMobile()
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile)
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return
    
    const handleClickOutside = (e) => {
      if (!e.target.closest('.mobile-menu') && !e.target.closest('.hamburger-menu')) {
        setIsMobileMenuOpen(false)
      }
    }
    
    document.addEventListener('click', handleClickOutside)
    
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMobileMenuOpen])

  return (
    <div className="header-container">
      <div className="header-logo">neogreens</div>
      
      {isMobile ? (
        <>
          <button 
            className="hamburger-menu" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            &#8801;
          </button>
          
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-content">
                <button 
                  className="mobile-menu-close" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <FaXmark />
                </button>
                <a href="#about" className="mobile-menu-link">About Us</a>
                <a href="#contact" className="mobile-menu-link">Contact Us</a>
                <button type="button" className="mobile-buy-button">Buy Now</button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className='header-links-container'>
          <a href="#about" className="header-link">About Us</a>
          <a href="#contact" className="header-link">Contact Us</a>
          <button type="button" className="header-buy-button">Buy Now</button>
        </div>
      )}
    </div>
  )
}

export default Header