// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// My Array of quote objects
var quotes = [
      { quote: 'To be prepared for war is one of the most effectual means of preserving peace.',
        source: 'George Washington',
        citation: 'Presidential Quotes',
        year: 1790,
        tags: 'Politics'
      },
      { quote: 'Men may die, but the fabrics of our free institutions remain unshaken.',
        source: 'Chester Alan Arthur ',
        citation: 'Presidential Quotes',
        year: 1881,
        tags: 'Politics'
      },
      { quote: "Mama always said life was like a box of chocolates. You never know what you're gonna  get inside.",
        source: 'Tom Hanks ',
        citation: "AFI's 100 Years...100 Movie Quotes",
        year: 1994,
        tags: 'Movies'
      },
      { quote: "If it doesn't fit, you must acquit.",
        source: 'Johnnie Cochran ',
        citation: "USA Today - 25 Most Memorable Quotes",
        year: 1995,
        tags: 'Judiciary'
      },
      { quote: "Until they become conscious, they will never rebel.",
        source: ' George Orwell ',
        citation: "www.goodreads.com",
        year: 1984,
        tags: 'Freedom'
      },
      { quote: "Stability and peace in our land will not come from the barrel of a gun, because peace without justice is an impossibility.",
        source: ' Archbishop Desmond Tutu ',
        citation: "Time Magazine",
        year: 1989,
        tags: 'Freedom'
      },
      { quote: "We are already old, it doesn't matter to us any more.",
        source: ' General Secretary Zhao Ziyang ',
        citation: "Time Magazine",
        year: 1989,
        tags: 'Democracy'
      }
];

 var message = '';
 var automaticRefresh ;


// print function
function print(message) {
  var quoteboxDiv = document.getElementById('quote-box');
  quoteboxDiv.innerHTML = message;
}

//This function selects a random Quote object from the 'quotes' array
function getRandomQuote () {
        var randomNumber = Math.floor ( Math.random() *  quotes.length )  ;
        var quote = quotes[randomNumber];
        return quote;

}

// this function generates a random Color
function randomColor() {
  var red = Math.floor(Math.random() * 256 ) ;
  var green = Math.floor(Math.random() * 256 ) ;
  var blue = Math.floor(Math.random() * 256 ) ;
  var color = 'rgb(' + red + ',' + green + ',' + blue + ')' ;
  return color ;
}

//This function refreshes the quote if inactive after 30 seconds
function autoQuote(){
  automaticRefresh = window.setInterval(printQuote, 30000);
}
//This function calls the getRandomQuote function and stores the return quote object in a variable
function printQuote () {
       var getQuote = getRandomQuote () ;
       message = "<p class = 'quote'>" + getQuote.quote + "</p>";
       message += "<p class = 'source'>" + getQuote.source + "<span class = 'citation'>" + getQuote.citation + "</span>" + "<span class = 'year'>" + getQuote.year + "</span>"
       + "<span class='tags'>" + getQuote.tags + "</span>" + "</p>";

       print(message);
       randomColor();
       document.getElementById('bkgndcolor').style.backgroundColor = randomColor();
   }
autoQuote();
printQuote();
