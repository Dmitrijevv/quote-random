# Quote Generator

This is a simple Quote Generator built using the Shadcn UI library and the API provided by [API Ninjas](https://www.api-ninjas.com/). The app fetches random quotes from the API and displays them in an easy-to-use interface.

## Features

- Fetches random quotes using the [API Ninjas Quotes API](https://www.api-ninjas.com/api/quotes).
- Beautiful and responsive UI powered by the Shadcn UI library.
- Simple and clean design for easy quote generation.

## Requirements

- Node.js (LTS version recommended)
- `npm` or `yarn` package manager
- API key from [API Ninjas](https://www.api-ninjas.com/)

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Dmitrijevv/quote-random.git
   cd quote-generator
   
2. **Install dependencies**:

   ````bash
   npm install

3. **Create a *.env* file in the root of your project and add your API key**:

   ```plaintest
   API_KEY=your_api_key_here

 **Replace *your_api_key_here* with the API key you get from API Ninjas.**

 4. **Run the project**:
    
  ```bash
  npm run dev
```
5. **Open your browser and navigate to http://localhost:3000 to see the Quote Generator in action.**:

## How It Works

- When you load the page, the app sends a request to the [API Ninjas Quotes API](https://www.api-ninjas.com/api/quotes) to get a random quote.
- The app receives the quote in JSON format and displays it on the page.
- The Shadcn UI library is used to style and display the quote in a visually appealing and responsive way.
- The UI includes a button to fetch a new quote, allowing users to generate a new random quote every time they click it.
