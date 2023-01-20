function testFunc() {
    document.getElementById("quotes").innerHTML = generateQuote()[0];
    document.getElementById("authors").innerHTML = generateQuote()[1];
    setBg();
}

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}

const generateQuote = () => {
    // Generate random number between 0 and lenght of quotes array
    return [quotes[Math.floor(Math.random()*quotes.length)].Quote, quotes[Math.floor(Math.random()*4)].Author];
}

const quotes = [
    {
        Quote: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
        Author: "Oprah Winfrey"
    },
    {
        Quote: "The question isn’t who is going to let me; it’s who is going to stop me.",
        Author: "Ayn Rand"
    },
    {
        Quote: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
        Author: "Aristotle"
    },
    {
        Quote: "Dreaming, after all, is a form of planning.",
        Author: "Gloria Steinem"
    },
    {
        Quote: "Your time is limited, so don’t waste it living someone else’s life.",
        Author: " Steve Jobs"
    },
    {
        Quote: "Nothing is impossible, the word itself says, I’m possible!",
        Author: "Audrey Hepburn"
    },
    {
        Quote: "Remember no one can make you feel inferior without your consent.",
        Author: "Eleanor Roosevelt"
    }

]