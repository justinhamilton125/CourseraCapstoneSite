import React, { useState } from 'react';
import './App.css';
import logo from './icons_assets/Logo.svg';
import ExperienceFragment from './ExperienceFragment';
import restaurantFood from './icons_assets/restauranfood.jpg';
import greekSalad from "./icons_assets/greek salad.jpg";
import lemonDessert from "./icons_assets/lemon dessert.jpg";
import bruchetta from "./icons_assets/bruchetta.svg";
import MarioA from "./icons_assets/Mario and Adrian A.jpg";
import MarioB from "./icons_assets/Mario and Adrian b.jpg";
import BookingForm from './BookingForm'; // Import BookingForm

function App() {
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const [availableTimes, setAvailableTimes] = useState([]); // Placeholder for available times

  const handleReserveClick = () => {
    setShowForm(true); // Show the form when button is clicked
  };

  const updateTimes = (selectedDate) => {
    // Logic to update available times based on the selected date
    // For now, we'll just simulate with static times
    const times = ['12:00 PM', '1:00 PM', '2:00 PM']; // Example available times
    setAvailableTimes(times);
  };

  return (
    <>
      <header>
        <img src={logo} alt="Little Lemon Logo" />
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="section1">
          <div className="container1">
            <h1>Welcome to Little Lemon</h1>
            <h2>Your favorite restaurant</h2>
            <p>Discover delicious dishes made from the freshest ingredients.</p>
            <button onClick={handleReserveClick}>Reserve a Table</button>
          </div>
          <img src={restaurantFood} alt="Delicious dish" />
        </section>

        {/* Conditionally render the BookingForm */}
        {showForm && <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />}

        <section className="section2">
          <div className="container2">
            <h1>This Week's Menu</h1>
            <button>Online Menu</button>
          </div>
          <ExperienceFragment
            headline="Gourmet Dinner Experience"
            subtext="Enjoy a special three-course meal crafted by our chef."
            price={49.99}
            buttonText="Book Now"
            imageSrc={greekSalad}
          />
          <ExperienceFragment
            headline="Gourmet Dinner Experience"
            subtext="Enjoy a special three-course meal crafted by our chef."
            price={49.99}
            buttonText="Book Now"
            imageSrc={bruchetta}
          />
          <ExperienceFragment
            headline="Gourmet Dinner Experience"
            subtext="Enjoy a special three-course meal crafted by our chef."
            price={49.99}
            buttonText="Book Now"
            imageSrc={lemonDessert}
          />
        </section>

        <section>
          <h1>Testimonals</h1>

            <ExperienceFragment
              headline="Gourmet Dinner Experience"
              subtext="Enjoy a special three-course meal crafted by our chef."
              price={49.99}
              buttonText="Book Now"
              imageSrc="path_to_your_image.jpg" // Update with your image path
            />

            <ExperienceFragment
              headline="Gourmet Dinner Experience"
              subtext="Enjoy a special three-course meal crafted by our chef."
              price={49.99}
              buttonText="Book Now"
              imageSrc="path_to_your_image.jpg" // Update with your image path
            />


            <ExperienceFragment
              headline="Gourmet Dinner Experience"
              subtext="Enjoy a special three-course meal crafted by our chef."
              price={49.99}
              buttonText="Book Now"
              imageSrc="path_to_your_image.jpg" // Update with your image path
            />


            <ExperienceFragment
              headline="Gourmet Dinner Experience"
              subtext="Enjoy a special three-course meal crafted by our chef."
              price={49.99}
              buttonText="Book Now"
              imageSrc="path_to_your_image.jpg" // Update with your image path
            />
          </section>

        <section>
          <h1>About</h1>
          <h2>Your favorite restaurant</h2>
          <p>Discover delicious dishes made from the freshest ingredients.</p>
          <button onClick={handleReserveClick}>Reserve a Table</button>
          <div className="image-container">
            <img src={MarioA} alt="Mario and Adrian 1 Image" className="image-overlay" />
            <img src={MarioB} alt="Mario and Adrian 2 Image" className="image-base" />
          </div>
        </section>
      </main>
      <footer>
        <img src={logo} alt="Delicious dish" />
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@littlelemon.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Doormat Navigation</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
