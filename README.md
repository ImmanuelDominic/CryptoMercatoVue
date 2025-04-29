# CryptoMercatoVue

CryptoMercatoVue is a Vue.js-based web application that provides real-time cryptocurrency data, including market statistics, coin details, and global news. It leverages the CoinLore API for cryptocurrency data and the Mediastack API for news.

## Features

- **Global Market Data**: Displays total market cap, active markets, and total volume.
- **Popular Cryptos**: Highlights popular cryptocurrencies like Bitcoin, Ethereum, and more.
- **All Coins**: Lists the first 100 cryptocurrencies with detailed information.
- **Coin Details**: Provides in-depth data for individual coins, including price, market cap, and supply.
- **News Section**: Fetches the latest global news related to Business.
- **Social Stats**: Displays social media statistics for selected coins.

## Tech Stack

- **Frontend**: Vue.js 3, Vue Router
- **Styling**: Bootstrap, Font Awesome, Custom CSS
- **APIs**: CoinLore API, Mediastack API
- **HTTP Client**: Axios

## Project Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ImmanuelDominic/CryptoMercatoVue.git
   cd CryptoMercatoVue/cryptomercato-vue
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

To start the development server:
```bash
npm run serve
```
The app will be available at `http://localhost:8080`.

### Build for Production

To build the project for production:
```bash
npm run build
```
The production-ready files will be in the `dist` folder.

### Linting

To lint and fix files:
```bash
npm run lint
```

## API Usage

### CoinLore API
- **Global Data**: `https://api.coinlore.net/api/global/`
- **All Coins**: `https://api.coinlore.net/api/tickers/?start=0&limit=100`
- **Coin Details**: `https://api.coinlore.net/api/ticker/?id={coin_id}`

### Mediastack API
- **News**: `https://api.mediastack.com/v1/news?access_key={your_access_key}&countries=us,gb&sources=business&limit=5`

## Folder Structure

```
cryptomercato-vue/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable Vue components
│   ├── views/           # Page-level components
│   ├── router/          # Vue Router configuration
│   ├── App.vue          # Root component
│   └── main.js          # Entry point
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

**Immanuel Dominic**  
[GitHub Profile](https://github.com/ImmanuelDominic)  
[LinkedIn Profile](https://www.linkedin.com/in/immanuel-dominic/)
