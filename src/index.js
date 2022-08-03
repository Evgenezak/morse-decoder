const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = [];
        for (let i = 0; i < expr.length / 10; i++) {
          let newstr = expr.substring (i * 10, i * 10 + 10);
    
          if (newstr === "**********"){
            result.push(" ");
          }
          else{
            let clearstr = newstr.replace(/00/gi,"").replace(/10/gi,".").
            replace(/11/gi,"-")
            result.push(MORSE_TABLE[clearstr])
          }
          
          
          
        }
      return result.join("")
        
  
}

module.exports = {
    decode
}