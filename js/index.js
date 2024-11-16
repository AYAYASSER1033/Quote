var arrOfQuotes = [
    {
        quote:"“Be yourself; everyone else is already taken.”",
        auther:"― Oscar Wilde ",
    },
    {
        quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        auther:"― Marilyn Monroe",
    },
    {
        quote:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        auther:"― Mahatma Gandhi",
    },
    {
        quote:"“We accept the love we think we deserve.”",
        auther:"― Stephen Chbosky, The Perks of Being a Wallflower",
    },
    {
        quote:"“Without music, life would be a mistake.”",
        auther:"― Friedrich Nietzsche, Twilight of the Idols ",
    },
    {
        quote:"“It is better to be hated for what you are than to be loved for what you are not.”",
        auther:"― Andre Gide, Autumn Leaves",
    },
    {
        quote:"“I am so clever that sometimes I don't understand a single word of what I am saying.”",
        auther:"― Oscar Wilde, The Happy Prince and Other Stories",
    },
    {
        quote:"“We accept the love we think we deserve”",
        auther:"― Stephen Chbosky, The Perks of Being a Wallflower",
    },
    {
        quote:"“In three words I can sum up everything I've learned about life: it goes on”",
        auther:"― Robert Frost",
    },

];

var prevRandomNumber; 

function showQuote(){
    var randomNumber = Math.trunc(Math.random() * arrOfQuotes.length)
    
   console.log(
    `prevRandomNumber ${prevRandomNumber} and randomNumber ${randomNumber}`
   );
   if (randomNumber == prevRandomNumber){
    randomNumber = ( randomNumber + 1 ) % arrOfQuotes.length;
   }
   console.log(randomNumber);
   prevRandomNumber = randomNumber;
    document.getElementById('qoute').innerHTML = arrOfQuotes[randomNumber].quote
    document.getElementById('auther').innerHTML=arrOfQuotes[randomNumber].auther
}