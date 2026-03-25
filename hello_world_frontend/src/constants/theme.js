/**
 * StreamVibe Design Tokens
 * Extracted from Figma design - Community Files (node 2001:83)
 * Dark theme OTT application with red accent colors
 */

// Color palette
export const COLORS = {
  // Backgrounds
  bg: {
    primary: '#141414',   // Black/08
    secondary: '#0F0F0F', // Black/06
    tertiary: '#1A1A1A',  // Black/10
    card: '#1F1F1F',      // Black/12
    border: '#262626',    // Black/15
    navBorder: '#1F1F1F', // Black/12
  },
  // Accent
  accent: {
    red: '#E50000',       // Red/45
    redHover: '#CC0000',
  },
  // Text
  text: {
    white: '#FFFFFF',     // Absolute/White
    grey60: '#999999',    // Grey/60
    grey75: '#BFBFBF',    // Grey/75
  },
};

// Typography
export const TYPOGRAPHY = {
  fontFamily: "'Manrope', sans-serif",
  weights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  sizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
  },
};

// Spacing
export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '40px',
  '4xl': '60px',
  '5xl': '80px',
};

// Border radius
export const BORDER_RADIUS = {
  sm: '6px',
  md: '8px',
  lg: '10px',
  xl: '12px',
};

// Navigation items
export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Movies & Shows', path: '/movies-shows' },
  { label: 'Support', path: '/support' },
  { label: 'Subscriptions', path: '/subscriptions' },
];

// FAQ data
export const FAQ_DATA = [
  {
    id: 1,
    question: 'What is StreamVibe?',
    answer:
      'StreamVibe is a streaming service that allows you to watch movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more.',
  },
  {
    id: 2,
    question: 'How much does StreamVibe cost?',
    answer:
      'StreamVibe offers several subscription plans to fit your budget. Our Basic plan starts at $9.99/month, the Standard plan is $14.99/month, and our Premium plan is $19.99/month. Each plan offers different features and streaming quality.',
  },
  {
    id: 3,
    question: 'What content is available on StreamVibe?',
    answer:
      'StreamVibe offers a wide range of content including the latest movies, classic films, popular TV shows, documentaries, anime, and much more. New content is added regularly to keep our library fresh and exciting.',
  },
  {
    id: 4,
    question: 'How do I sign up for StreamVibe?',
    answer:
      'Signing up for StreamVibe is easy! Just click the "Start Watching Now" button, create your account with your email address, choose your subscription plan, and start watching immediately.',
  },
  {
    id: 5,
    question: 'What is the StreamVibe free trial?',
    answer:
      'New subscribers can enjoy a 30-day free trial of StreamVibe. During the trial, you have full access to all features of your chosen plan. Cancel anytime before the trial ends and you won\'t be charged.',
  },
  {
    id: 6,
    question: 'How do I contact StreamVibe customer support?',
    answer:
      'You can reach our customer support team 24/7 through our Help Center, live chat, or by emailing support@streamvibe.com. We\'re always here to help you enjoy the best streaming experience.',
  },
  {
    id: 7,
    question: 'How can I watch StreamVibe?',
    answer:
      'StreamVibe is available on a wide range of devices including smart TVs, smartphones, tablets, laptops, and desktop computers. Simply download the StreamVibe app or visit our website to start watching.',
  },
  {
    id: 8,
    question: 'What are the StreamVibe payment methods?',
    answer:
      'StreamVibe accepts all major credit and debit cards (Visa, MasterCard, American Express), PayPal, and various regional payment methods. All transactions are secured with industry-standard encryption.',
  },
];

// Movie/Show card data for hero section
export const HERO_MOVIES = [
  '/assets/movie-1.png',
  '/assets/movie-2.png',
  '/assets/movie-3.png',
  '/assets/movie-4.png',
  '/assets/movie-5.png',
  '/assets/movie-6.png',
  '/assets/movie-7.png',
  '/assets/movie-8.png',
  '/assets/movie-9.png',
  '/assets/movie-10.png',
  '/assets/movie-11.png',
  '/assets/movie-12.png',
  '/assets/movie-13.png',
  '/assets/movie-14.png',
  '/assets/movie-15.png',
  '/assets/movie-16.png',
  '/assets/movie-17.png',
];

// Sample content data
export const CONTENT_DATA = {
  trending: [
    { id: 1, title: 'Avengers: Endgame', genre: 'Action', rating: 8.4, year: 2019, img: '/assets/movie-1.png' },
    { id: 2, title: 'Spider-Man: No Way Home', genre: 'Action', rating: 8.2, year: 2021, img: '/assets/movie-2.png' },
    { id: 3, title: 'The Dark Knight', genre: 'Action', rating: 9.0, year: 2008, img: '/assets/movie-3.png' },
    { id: 4, title: 'Inception', genre: 'Sci-Fi', rating: 8.8, year: 2010, img: '/assets/movie-4.png' },
    { id: 5, title: 'Interstellar', genre: 'Sci-Fi', rating: 8.7, year: 2014, img: '/assets/movie-5.png' },
    { id: 6, title: 'The Matrix', genre: 'Sci-Fi', rating: 8.7, year: 1999, img: '/assets/movie-6.png' },
    { id: 7, title: 'Parasite', genre: 'Thriller', rating: 8.6, year: 2019, img: '/assets/movie-7.png' },
    { id: 8, title: 'Joker', genre: 'Drama', rating: 8.4, year: 2019, img: '/assets/movie-8.png' },
  ],
  newReleases: [
    { id: 9, title: 'Dune: Part Two', genre: 'Sci-Fi', rating: 8.5, year: 2024, img: '/assets/movie-9.png' },
    { id: 10, title: 'Oppenheimer', genre: 'Drama', rating: 8.9, year: 2023, img: '/assets/movie-10.png' },
    { id: 11, title: 'Poor Things', genre: 'Fantasy', rating: 8.0, year: 2023, img: '/assets/movie-11.png' },
    { id: 12, title: 'The Zone of Interest', genre: 'Drama', rating: 7.3, year: 2023, img: '/assets/movie-12.png' },
    { id: 13, title: 'Past Lives', genre: 'Romance', rating: 7.9, year: 2023, img: '/assets/movie-13.png' },
    { id: 14, title: 'Killers of the Flower Moon', genre: 'Drama', rating: 7.7, year: 2023, img: '/assets/movie-14.png' },
    { id: 15, title: 'Barbie', genre: 'Comedy', rating: 6.9, year: 2023, img: '/assets/movie-15.png' },
    { id: 16, title: 'Mission: Impossible', genre: 'Action', rating: 7.7, year: 2023, img: '/assets/movie-16.png' },
  ],
  mustWatch: [
    { id: 17, title: 'The Shawshank Redemption', genre: 'Drama', rating: 9.3, year: 1994, img: '/assets/movie-17.png' },
    { id: 1, title: 'Avengers: Endgame', genre: 'Action', rating: 8.4, year: 2019, img: '/assets/movie-1.png' },
    { id: 3, title: 'The Dark Knight', genre: 'Action', rating: 9.0, year: 2008, img: '/assets/movie-3.png' },
    { id: 4, title: 'Inception', genre: 'Sci-Fi', rating: 8.8, year: 2010, img: '/assets/movie-4.png' },
    { id: 5, title: 'Interstellar', genre: 'Sci-Fi', rating: 8.7, year: 2014, img: '/assets/movie-5.png' },
    { id: 6, title: 'The Matrix', genre: 'Sci-Fi', rating: 8.7, year: 1999, img: '/assets/movie-6.png' },
    { id: 7, title: 'Parasite', genre: 'Thriller', rating: 8.6, year: 2019, img: '/assets/movie-7.png' },
    { id: 8, title: 'Joker', genre: 'Drama', rating: 8.4, year: 2019, img: '/assets/movie-8.png' },
  ],
  topRated: [
    { id: 10, title: 'Oppenheimer', genre: 'Drama', rating: 8.9, year: 2023, img: '/assets/movie-10.png' },
    { id: 9, title: 'Dune: Part Two', genre: 'Sci-Fi', rating: 8.5, year: 2024, img: '/assets/movie-9.png' },
    { id: 11, title: 'Poor Things', genre: 'Fantasy', rating: 8.0, year: 2023, img: '/assets/movie-11.png' },
    { id: 12, title: 'The Zone of Interest', genre: 'Drama', rating: 7.3, year: 2023, img: '/assets/movie-12.png' },
    { id: 2, title: 'Spider-Man: No Way Home', genre: 'Action', rating: 8.2, year: 2021, img: '/assets/movie-2.png' },
    { id: 13, title: 'Past Lives', genre: 'Romance', rating: 7.9, year: 2023, img: '/assets/movie-13.png' },
    { id: 14, title: 'Killers of the Flower Moon', genre: 'Drama', rating: 7.7, year: 2023, img: '/assets/movie-14.png' },
    { id: 15, title: 'Barbie', genre: 'Comedy', rating: 6.9, year: 2023, img: '/assets/movie-15.png' },
  ],
};

// Shows detail data (for Shows Open Page)
export const SHOW_DETAIL = {
  id: 1,
  title: 'Stranger Things',
  year: 2016,
  seasons: 4,
  episodes: 34,
  rating: 8.7,
  genre: ['Sci-Fi', 'Horror', 'Drama'],
  description:
    'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one very strange little girl.',
  heroImg: '/assets/hero-shows.png',
  cast: [
    { name: 'Millie Bobby Brown', role: 'Eleven', img: '/assets/movie-1.png' },
    { name: 'Finn Wolfhard', role: 'Mike Wheeler', img: '/assets/movie-2.png' },
    { name: 'Winona Ryder', role: 'Joyce Byers', img: '/assets/movie-3.png' },
    { name: 'David Harbour', role: 'Jim Hopper', img: '/assets/movie-4.png' },
    { name: 'Gaten Matarazzo', role: 'Dustin Henderson', img: '/assets/movie-5.png' },
  ],
  episodes_list: [
    { id: 1, title: 'Chapter One: The Vanishing of Will Byers', duration: '48 min', season: 1, ep: 1, img: '/assets/movie-6.png' },
    { id: 2, title: 'Chapter Two: The Weirdo on Maple Street', duration: '56 min', season: 1, ep: 2, img: '/assets/movie-7.png' },
    { id: 3, title: 'Chapter Three: Holly, Jolly', duration: '51 min', season: 1, ep: 3, img: '/assets/movie-8.png' },
    { id: 4, title: 'Chapter Four: The Body', duration: '51 min', season: 1, ep: 4, img: '/assets/movie-9.png' },
    { id: 5, title: 'Chapter Five: The Flea and the Acrobat', duration: '53 min', season: 1, ep: 5, img: '/assets/movie-10.png' },
    { id: 6, title: 'Chapter Six: The Monster', duration: '52 min', season: 1, ep: 6, img: '/assets/movie-11.png' },
  ],
  moreLikeThis: [
    { id: 9, title: 'Dark', genre: 'Sci-Fi', rating: 8.8, year: 2017, img: '/assets/movie-9.png' },
    { id: 10, title: 'The OA', genre: 'Mystery', rating: 7.9, year: 2016, img: '/assets/movie-10.png' },
    { id: 11, title: 'Mindhunter', genre: 'Crime', rating: 8.6, year: 2017, img: '/assets/movie-11.png' },
    { id: 12, title: 'Black Mirror', genre: 'Sci-Fi', rating: 8.3, year: 2011, img: '/assets/movie-12.png' },
    { id: 13, title: 'Haunting of Hill House', genre: 'Horror', rating: 8.6, year: 2018, img: '/assets/movie-13.png' },
    { id: 14, title: 'Ozark', genre: 'Crime', rating: 8.4, year: 2017, img: '/assets/movie-14.png' },
  ],
};
