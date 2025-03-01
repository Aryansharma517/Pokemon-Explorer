# Pokemon Explorer

## Overview
Pokemon Explorer is a Next.js application that allows users to browse and search for Pokémon using the PokeAPI. It provides detailed information about each Pokémon, including abilities, types, stats, and moves. The app includes pagination, search functionality, and optimized UI with Tailwind CSS.

## Features
- List all Pokémon with images and names
- Search Pokémon by name
- Click on a Pokémon to view detailed information
- Pagination for navigating through Pokémon list
- Optimized UI using Tailwind CSS
- Uses Next.js dynamic routing for individual Pokémon pages
- Optimized image loading using `next/image`

## Tech Stack
- **Next.js** (React framework)
- **JavaScript**
- **Tailwind CSS** (for styling)
- **PokeAPI** (for fetching Pokémon data)

## Installation and Setup
Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/pokemon-explorer.git
cd pokemon-explorer
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure `next.config.js`
Add the following configuration to `next.config.js` to allow external image fetching:
```js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
};
```

### 4. Start the Development Server
```bash
npm run dev
```
The app will run at `http://localhost:3000`

## Project Structure
```
/pokemon-explorer
├── components/        # Reusable components like PokemonCard, SearchBar, Pagination,Pokemon Grid,Loader
├── pages/
│   ├── index.js       # Homepage listing all Pokémon
│   ├── pokemon/[id].js # Dynamic route for individual Pokémon details
│   ├── _app.js        # Next.js app entry
├── styles/            # Global Tailwind CSS styles
├── next.config.js     # Next.js configuration for remote images
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

## Build and Deploy
To create a production build:
```bash
npm run build
```
To start the production server:
```bash
npm start
```

### Deployment
You can deploy this app easily on platforms like **Vercel** or **Netlify**.
For Vercel:
```bash
vercel
```

## API Usage
This project fetches Pokémon data from **PokeAPI** (`https://pokeapi.co/api/v2/pokemon`).

- Fetch Pokémon list:
  ```js
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
  ```
- Fetch individual Pokémon details:
  ```js
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  ```

## Notes
- Ensure that you have **Node.js** installed before running the project.
- Make sure to configure `next.config.js` to allow external image sources.
- If you experience styling issues, ensure Tailwind CSS is properly installed and configured.

## License
This project is open-source and available for personal or commercial use.

## Author
Developed by **Aryan Sharma**. Contributions are welcome!

## Contact

For any queries, reach out to me at aryan2301s@gmail.com

