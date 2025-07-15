export const whimsicalQuotes = [
  {
    quote: "Coffee doesn't ask silly questions. Coffee understands. Be like coffee.",
    author: "Anonymous Caffeine Philosopher"
  },
  {
    quote: "I'm not procrastinating, I'm doing side quests in the game of life.",
    author: "The Productive Gamer"
  },
  {
    quote: "Life is like a spreadsheet - sometimes you need to pivot, but the formulas still work.",
    author: "Excel Enthusiast"
  },
  {
    quote: "Be yourself, unless you can be a unicorn. Then definitely be a unicorn.",
    author: "Mythical Career Advisor"
  },
  {
    quote: "Success is like WiFi - it's invisible, but you know when you don't have it.",
    author: "Digital Zen Master"
  },
  {
    quote: "If at first you don't succeed, redefine success and try again.",
    author: "The Optimistic Realist"
  },
  {
    quote: "I don't need Google. My team knows everything. Well, almost everything.",
    author: "Confident Team Leader"
  },
  {
    quote: "Teamwork makes the dream work, but coffee makes the team work.",
    author: "Caffeinated Collaborator"
  },
  {
    quote: "I'm not weird, I'm limited edition. And so is my approach to problem-solving.",
    author: "The Creative Maverick"
  },
  {
    quote: "Today's mood: Optimistically confused but ready to conquer the world.",
    author: "Professional Mood Tracker"
  }
];

// Function to get a random quote
export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * whimsicalQuotes.length);
  return whimsicalQuotes[randomIndex];
};

// Function to get all quotes
export const getAllQuotes = () => {
  return [...whimsicalQuotes];
};

// Function to update a quote (for future extensibility)
export const updateQuote = (index, newQuote) => {
  if (index >= 0 && index < whimsicalQuotes.length) {
    whimsicalQuotes[index] = { ...newQuote };
    return true;
  }
  return false;
};

// Function to add a new quote
export const addQuote = (newQuote) => {
  whimsicalQuotes.push({ ...newQuote });
  return whimsicalQuotes.length - 1;
};