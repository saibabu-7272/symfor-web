import './index.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { FaInstagram, FaFacebook  } from "react-icons/fa";
import { FaXTwitter, FaLinkedin, FaCircleXmark   } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";


// Import images
import productPackage from '../../images/product-package.png'
import concernImage1 from '../../images/concern-image-1.png'
import concernImage2 from '../../images/concern-image-2.png'
import solutionImage from '../../images/solution-image.png'
import brainImage from "../../images/brain-icon.png"
import stomachImage from '../../images/stomach-icon.png'

import dummyPerson from '../../images/dummy-person.jpg'

// Import feature icons
import glutenFreeIcon from '../../images/gluten-free-icon.png'
import veganIcon from '../../images/vegan-icon.png'
import organicIcon from '../../images/organic-icon.png'
import zeroSyntheticIcon from '../../images/zero-synthetic-icon.png'

// Import benefit icons
import energyIcon from '../../images/energy-icon.png'
import gutIcon from '../../images/gut-icon.png'
import immunityIcon from '../../images/immunity-icon.png'
import detoxIcon from '../../images/detox-icon.png'
import nourishmentIcon from '../../images/nourishment-icon.png'


const settings = {
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  controles: true
}

const LandingPage = () => {
  // Features data
  const features = [
    { id: 1, icon: glutenFreeIcon, text: 'Gluten-Free' },
    { id: 2, icon: veganIcon, text: '100% Vegan' },
    { id: 3, icon: organicIcon, text: 'Organic' },
    { id: 4, icon: zeroSyntheticIcon, text: 'Zero Synthetic Nutrients' }
  ];

  // Benefits data
  const benefits = [
    { id: 1, icon: energyIcon, text: 'Increased Energy Levels' },
    { id: 2, icon: gutIcon, text: 'Improved Gut Health' },
    { id: 3, icon: immunityIcon, text: 'Boosted Immunity' },
    { id: 4, icon: detoxIcon, text: 'Natural Detox' },
    { id: 5, icon: nourishmentIcon, text: 'Daily Nourishment' }
  ];

  // Health concerns data
  const healthConcerns = [
    { 
      id: 1, 
      icon: brainImage, 
      title: 'Feel Foggy or Unfocused?', 
      description: 'Designed to support mental clarity with B12 and adaptogens.'
    },
    { 
      id: 2, 
      icon: stomachImage, 
      title: 'Bloating or Indigestion?', 
      description: 'Aids digestion with probiotics and digestive enzymes.'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Kathi Koushal',
      image: dummyPerson,
      quote: '"Finally, mental clarity that sticks with just one scoop!"',
      description: 'Between work and workouts, I never used to feel foggy or irritated. Now I never miss my morning scoop, and I\'m sharp, calm, and focused even on the toughest days.'
    },
    {
      id: 2,
      name: 'Mithun Roy',
      image: dummyPerson,
      quote: '"No more bloating, only a lighter, happier gut!"',
      description: 'I\'ve tried everything for digestion, but nothing helped like NeoGreens. The probiotics and enzymes are gentle but mighty - my stomach feels balanced, refreshed, and energized!'
    },
    {
      id: 3,
      name: 'Jennifer',
      image: dummyPerson,
      quote: '"Reset my routine inside and out!"',
      description: 'Ditching my multitabs for NeoGreens simplified my morning. Just one scoop gives me all I need to feel energized and ready to tackle the day.'
    },
    {
      id: 4,
      name: 'Harrison',
      image: dummyPerson,
      quote: '"From sluggish to unstoppable!"',
      description: 'I was dragged down by sluggish mornings, lack of energy, poor focus, and digestive issues. NeoGreens turned that around. One daily scoop and I\'m more alert, active, and vibrant!'
    },
    {
      id: 5,
      name: 'Emma',
      image: dummyPerson,
      quote: '"One scoop that travels with me!"',
      description: 'As a busy professional, I need nutrition that fits my on-the-go lifestyle. NeoGreens delivers more energy, better focus, and more resilience to life.'
    }
  ];

  return (
    <div className="landing-page-container">
      {/* Hero Section */}
      <section className='hero-section'>
        <div className='hero-content'>
          <h1 className="hero-heading">Here's to the New You</h1>
          <p className="hero-description">One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday support you can feel.</p>
          <button type="button" className="hero-buy-button">Buy Now</button>
        </div>

        <div className="hero-image-container">
          <img src={productPackage} alt="NeoGreens Product Package" className="hero-image"/>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        {features.map(feature => (
          <div key={feature.id} className="feature-item">
            <div className="feature-icon-container">
              <img src={feature.icon} alt={feature.text} className="feature-icon"/>
            </div>
            <p className="feature-text">{feature.text}</p>
          </div>
        ))}
      </section>

      {/* Backed by Nature Section */}
      <section className="nature-section">
        <div className="nature-content">
          <h2 className="nature-heading">Backed by Nature.<br/>Built for Your Routine.</h2>
          <p className="nature-description">NeoGreens goes where you go - from home to the office to the gym. One scoop a day will help you overcome all your wellness roadblocks with ease.</p>
          <button type="button" className="nature-buy-button">Buy Now</button>
          <br />
          <img className='nature-product' src={productPackage} alt="product" />
        </div>

        <div className="health-concerns">
          {healthConcerns.map(concern => (
            <div key={concern.id} className="health-concern-card">
              <div className="concern-header">
                <div className="concern-icon-container">
                  <img src={concern.icon} alt={concern.title} className="concern-icon"/>
                </div>
                <h3 className="concern-title">{concern.title}</h3>
              </div>
              <p className="concern-description">{concern.description}</p>
              <div className="concern-image-container">
                <img src={concern.id === 1 ? concernImage1 : concernImage2} alt={concern.title} className="concern-image"/>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        {benefits.map(benefit => (
          <div key={benefit.id} className="benefit-item">
            <img src={benefit.icon} alt={benefit.text} className="benefit-icon"/>
            <p className="benefit-text">{benefit.text}</p>
          </div>
        ))}
      </section>

      {/* One Scoop Section */}
      <section className="one-scoop-section">
        <h2 className="one-scoop-heading">One Scoop. 60+ Nutrients. It's That Easy.</h2>
        <p className="one-scoop-description">NeoGreens is built to take the confusion out of wellness: you get the essentials – no synthetic ingredients, harsh formulas, or hidden additives, just smart, science-backed nutrition that respects your time and your trust.</p>
        <button type="button" className="one-scoop-buy-button">Buy Now</button>
      </section>

      {/* Comparison Table Section */}
      <section className="comparison-section">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="info-header">Information</th>
              <th className="product-header neogreens">neogreens</th>
              <th className="product-header">AG1</th>
              <th className="product-header">Bloom</th>
              <th className="product-header">LivitUp</th>
              <th className="product-header">supply</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Probiotic Content</td>
              <td className="check"><IoCheckmarkCircle className='check-icon' /></td>
              <td className="check"><IoCheckmarkCircle /></td>
              <td className="check"><IoCheckmarkCircle /></td>
              <td className="cross"><FaCircleXmark /></td>
              <td className="check"><IoCheckmarkCircle /></td>
            </tr>
            <tr>
              <td>Organic Nutrients</td>
              <td className="check"><IoCheckmarkCircle /></td>
              <td className="partial">Partially</td>
              <td className="not-specified">Not specified</td>
              <td className="not-specified">Not specified</td>
              <td className="not-specified">Not specified</td>
            </tr>
            <tr>
              <td>Scientific Backing Transparency</td>
              <td className="check"><IoCheckmarkCircle /></td>
              <td className="check"><IoCheckmarkCircle /></td>
              <td className="cross"><FaCircleXmark /></td>
              <td className="cross"><FaCircleXmark /></td>
              <td className="cross"><FaCircleXmark /></td>
            </tr>
            <tr>
              <td>Taste Profile</td>
              <td className="taste">Mild naturally sweetened</td>
              <td className="taste">Balanced</td>
              <td className="taste">Overly sweet</td>
              <td className="taste">Balanced</td>
              <td className="taste">Mild naturally sweetened</td>
            </tr>
            <tr>
              <td>Ingredient Sourcing Transparency</td>
              <td className="check"><IoCheckmarkCircle /><br/><span>Traceable, hydroponic</span></td>
              <td className="check"><IoCheckmarkCircle /></td>
              <td className="check"><IoCheckmarkCircle /></td>
              <td className="cross"><FaCircleXmark /></td>
              <td className="check"><IoCheckmarkCircle /><br/><span>Traceable, plant-based</span></td>
            </tr>
            <tr>
              <td>Cognitive-Enhancing Ingredients (Eg. Lion's Mane)</td>
              <td className="check"><IoCheckmarkCircle /></td>
              <td className="not-specified">Not specified</td>
              <td className="not-specified">Not specified</td>
              <td className="cross"><FaCircleXmark /></td>
              <td className="cross"><FaCircleXmark /></td>
            </tr>
            <tr>
              <td>Gut-Brain Axis Support</td>
              <td className="check"><IoCheckmarkCircle /><br/><span>With adaptogens + pre+probiotics</span></td>
              <td className="cross"><FaCircleXmark /></td>
              <td className="cross"><FaCircleXmark /></td>
              <td className="cross"><FaCircleXmark /></td>
              <td className="cross"><FaCircleXmark /></td>
            </tr>
            <tr>
              <td>Avoids Questionable Fillers (Eg. Gums, Stevia)</td>
              <td className="check"><IoCheckmarkCircle /></td>
              <td className="not-specified">Not specified</td>
              <td className="cross"><FaCircleXmark /><br/><span>Contains stevia</span></td>
              <td className="check"><IoCheckmarkCircle /></td>
              <td className="check"><IoCheckmarkCircle /></td>
            </tr>
            <tr>
              <td>Pricing</td>
              <td className="price">Reasonably priced</td>
              <td className="price">Overpriced</td>
              <td className="price">Reasonably priced</td>
              <td className="price">Reasonably priced</td>
              <td className="price">Reasonably priced</td>
            </tr>
            <tr>
              <td>Ease of Use</td>
              <td className="check"><IoCheckmarkCircle /><br/><span>Simple routine</span></td>
              <td className="cross"><FaCircleXmark /></td>
              <td className="cross"><FaCircleXmark /></td>
              <td className="check"><IoCheckmarkCircle /><br/><span>Simple routine</span></td>
              <td className="check"><IoCheckmarkCircle /><br/><span>Simple routine</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Simple Solution Section */}
      <section className="solution-section">
        <div className="solution-content">
          <h2 className="solution-heading">The Simple Solution to Modern Lifestyle Health Issues</h2>
          <p className="solution-description">From long hours to missed meals, we understand how wellness gets pushed aside. NeoGreens is our answer to that. Backed by science, grounded in nature, and made to meet you where you are.</p>
          <button type="button" className="solution-button">Our Story</button>
        </div>
        <div className="solution-image-container">
          <img src={solutionImage} alt="Woman drinking NeoGreens" className="solution-image"/>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="slider-container slider">
          <Slider {...settings}>
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-quote">{testimonial.quote}</div>
                  <p className="testimonial-description">{testimonial.description}</p>
                  <div className="testimonial-author">
                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-author-image"/>
                    <p className="testimonial-author-name">{testimonial.name}</p>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </section>



      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-heading">When You're Ready,<br/>NeoGreens is Here.</h2>
          <p className="cta-description">One clean, simple habit to help you feel better every day.</p>
          <button type="button" className="cta-buy-button">Buy Now</button>
        </div>
        <div className="cta-image-container">
          <img src={productPackage} alt="NeoGreens Product" className="cta-image"/>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">neogreens</div>
          <div className="footer-social">
            <a href="#" className="social-link"><FaInstagram /></a>
            <a href="#" className="social-link"><FaFacebook /></a>
            <a href="#" className="social-link"><FaXTwitter /></a>
            <a href="#" className="social-link"><FaLinkedin /></a>
          </div>
        </div>
        <div className="footer-links">
          <a href="#about" className="footer-link">About Us</a>
          <a href="#contact" className="footer-link">Contact Us</a>
        </div>
        <div className="footer-bottom">
          <p className="copyright">Copyright 2025 © NeoGreen All rights Reserved</p>
          <div className="legal-links">
            <a href="#privacy" className="legal-link">Privacy Policy</a>
            <a href="#terms" className="legal-link">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage