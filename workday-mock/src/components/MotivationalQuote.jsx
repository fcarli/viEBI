import React, { useState, useEffect } from 'react';
import { RefreshCw, Quote, List } from 'lucide-react';
import { generateMotivationalQuote, getAllMotivationalQuotes } from '../services/geminiService';

const MotivationalQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAllQuotes, setShowAllQuotes] = useState(false);
  const [allQuotes, setAllQuotes] = useState([]);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await generateMotivationalQuote();
      setQuote(result.quote);
      setAuthor(result.author);
      
      if (!result.success) {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to load motivational quote');
      setQuote("The only way to do great work is to love what you do.");
      setAuthor("Steve Jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
    setAllQuotes(getAllMotivationalQuotes());
  }, []);

  const handleRefresh = () => {
    fetchQuote();
  };

  const handleSelectQuote = (selectedQuote) => {
    setQuote(selectedQuote.quote);
    setAuthor(selectedQuote.author);
    setShowAllQuotes(false);
  };

  const toggleShowAllQuotes = () => {
    setShowAllQuotes(!showAllQuotes);
  };

  return (
    <div className="card motivational-quote">
      <div className="card-header">
        <h2>Daily Motivation</h2>
        <div className="quote-actions">
          <button 
            className="refresh-button" 
            onClick={toggleShowAllQuotes}
            title="View all quotes"
          >
            <List size={18} />
          </button>
          <button 
            className="refresh-button" 
            onClick={handleRefresh}
            disabled={loading}
            title="Get new random quote"
          >
            <RefreshCw size={18} className={loading ? 'spinning' : ''} />
          </button>
        </div>
      </div>
      
      <div className="quote-content">
        {showAllQuotes ? (
          <div className="all-quotes-list">
            <h3>All Whimsical Quotes</h3>
            <div className="quotes-grid">
              {allQuotes.map((q, index) => (
                <div 
                  key={index} 
                  className="quote-item" 
                  onClick={() => handleSelectQuote(q)}
                >
                  <blockquote className="quote-item-text">"{q.quote}"</blockquote>
                  <cite className="quote-item-author">— {q.author}</cite>
                </div>
              ))}
            </div>
          </div>
        ) : loading ? (
          <div className="quote-loading">
            <RefreshCw size={24} className="spinning" />
            <p>Generating inspiration...</p>
          </div>
        ) : (
          <>
            <div className="quote-icon">
              <Quote size={32} />
            </div>
            <blockquote className="quote-text">
              "{quote}"
            </blockquote>
            <cite className="quote-author">— {author}</cite>
            {error && (
              <div className="quote-error">
                <small>Using fallback quote • {error}</small>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MotivationalQuote;