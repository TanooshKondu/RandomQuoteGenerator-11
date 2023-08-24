const quotes = [
    " ' Success is not final, failure is not fatal: It is the courage to continue that counts.' ~ Winston Churchill",
    " ' If you want to be happy, set a goal that commands your thoughts, liberates your energy, and inspires your hopes. ' ~ Andrew Carnegie",
    " ' Success is walking from failure to failure with no loss of enthusiasm. ' ~ Winston Churchill",
    " ' There is no substitute for hard work. ' ~ Thomas Edison",
    " ' You are never too old to set another goal or to dream a new dream. ' ~ C.S. Lewis",
    " ' The only place where success comes before work is in the dictionary. ' ~ Vidal Sassoon",
    " ' Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. ' ~ Albert Schweitzer",
    " ' The road to success and the road to failure are almost exactly the same. ' ~ Colin R. Davis",
    " ' Hard work beats talent when talent doesn't work hard. ' ~ Tim Notke",
    " ' Success is stumbling from failure to failure with no loss of enthusiasm. ' ~ Winston Churchill",
    " ' A goal without a plan is just a wish. ' ~ Antoine de Saint-Exupéry",
    " ' Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do. ' ~ Pelé",
    " ' Setting goals is the first step in turning the invisible into the visible. ' ~ Tony Robbins",
    " ' Success is not in what you have, but who you are. ' ~ Bo Bennett",
    " ' Goals transform a random walk into a chase. ' ~ Mihaly Csikszentmihalyi",
    " ' Success usually comes to those who are too busy to be looking for it. ' ~ Henry David Thoreau",
    " ' Goals allow you to control the direction of change in your favor. ' ~ Brian Tracy",
    " ' Success is the sum of small efforts, repeated day in and day out. ' ~ Robert Collier",
    " ' The only way to achieve the impossible is to believe it is possible. ' ~ Charles Kingsleigh"
];

const quoteText = document.getElementById("quote-text");
const newQuoteBtn = document.getElementById("new-quote-btn");

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayRandomQuote() {
    const randomQuote = getRandomQuote();
    quoteText.textContent = randomQuote;
}

newQuoteBtn.addEventListener("click", displayRandomQuote);

displayRandomQuote();
