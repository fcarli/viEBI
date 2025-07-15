import { getRandomQuote, getAllQuotes, updateQuote, addQuote } from '../data/quotes.js';

// Simulate async behavior for consistency with previous API-based approach
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const generateMotivationalQuote = async () => {
  // Add a small delay to simulate API call and show loading state
  await delay(800);
  
  try {
    const quote = getRandomQuote();
    return {
      success: true,
      quote: quote.quote,
      author: quote.author
    };
  } catch (error) {
    console.error('Error getting motivational quote:', error);
    return {
      success: false,
      quote: "Coffee doesn't ask silly questions. Coffee understands. Be like coffee.",
      author: "Anonymous Caffeine Philosopher",
      error: error.message
    };
  }
};

// Additional functions for quote management
export const getAllMotivationalQuotes = () => {
  return getAllQuotes();
};

export const updateMotivationalQuote = (index, newQuote) => {
  return updateQuote(index, newQuote);
};

export const addMotivationalQuote = (newQuote) => {
  return addQuote(newQuote);
};