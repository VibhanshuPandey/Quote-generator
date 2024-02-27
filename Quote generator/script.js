// let apiQuotes = [];

function newQuote() {
    // pick a random quote afrom apiQuotes
    const quote = localQuotes[Math.floor(math.random() * localQuotes.length)];
    console.log(quote);
} 
// // Get quotes from API
// async function getQuotes() {
//     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         // catch error here
//     }     
// }

// // on load
// getQuotes();

newQuote();