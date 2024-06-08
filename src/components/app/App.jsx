import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // optional if you need carousel functionality
import './app.css'; // import your custom css

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await fetch('https://strangerthings-quotes.vercel.app/api/quotes/50');
      const data = await response.json();
      setQuotes(data);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-10">
          <div className="wrapper"> {/* Add wrapper with orange background */}
            <div className="carousel-container">
              <div className="card-body text-center">
                <h1 className="mb-4">Motyvuojančios citatos</h1>
                {quotes.length > 0 && (
                  <div id="motivationalQuotesCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      {quotes.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          data-bs-target="#motivationalQuotesCarousel"
                          data-bs-slide-to={index}
                          className={index === 0 ? 'active' : ''}
                          aria-current={index === 0 ? 'true' : 'false'}
                          aria-label={`Slide ${index + 1}`}
                        ></button>
                      ))}
                    </div>
                    <div className="carousel-inner">
                      {quotes.map((quote, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                          <p className="lead">{quote.quote}</p>
                          <p className="font-italic">- {quote.author}</p>
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#motivationalQuotesCarousel"
                      data-bs-slide="prev"
                    >
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#motivationalQuotesCarousel"
                      data-bs-slide="next"
                    >
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div> {/* Close wrapper */}
        </div>
      </div>
    </div>
  );
}

export default App;
