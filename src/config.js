const config = {
    API_URL: process.env.NODE_ENV === 'production' 
        ? 'https://shinobi-ux.onrender.com/api'
        : 'http://localhost:5001/api'
};

export default config; 