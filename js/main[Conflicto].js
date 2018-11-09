

var letters;
var arrayIdx = [];


function capture(){
  letters = document.getElementById("letters").value.split("").sort();
  
  for (var i = 0; i < dictionary.length;  i++){
    //var palabra = dictionary[i].split("").sort();
    
    for (var j = 0; j < dictionary[i].length;  j++){
      var noAccent = removeAccent(dictionary[i][j]);
      var idx = letters.indexOf(noAccent);
      if (idx !== -1) {
        arrayIdx.push(idx);
        var validateArrayIdx = arrayIdx.indexOf(idx);
        console.log(arrayIdx);
        if (j == dictionary[i].length - 1) {
          var words = document.getElementById('words');
          var newWord = document.createElement('li');
          newWord.textContent = dictionary[i];
          words.appendChild(newWord);
          arrayIdx = [];
        }
      }else{
        j = dictionary[i].length + 1;
        arrayIdx = [];
      }   
    }

  } 
}




function removeAccent(str){ 
for (var i=0;i<str.length;i++){ 
//Sustituye "á é í ó ú" 
if (str.charAt(i)=="á") str = str.replace(/á/,"a"); 
if (str.charAt(i)=="é") str = str.replace(/é/,"e"); 
if (str.charAt(i)=="í") str = str.replace(/í/,"i"); 
if (str.charAt(i)=="ó") str = str.replace(/ó/,"o"); 
if (str.charAt(i)=="ú") str = str.replace(/ú/,"u"); 
} 
return str; 
} 

//alert(removeAccent(frase)) 