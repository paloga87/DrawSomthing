$(document).ready(function(){
  $('.container').hide().fadeIn(2500);
})

var letters;

//Funcion Anagramas
function capture(){
  letters = document.getElementById("letters").value.split("").sort();  
  // Recorre las palabras del diccionario
  for (var i = 0; i < dictionary.length;  i++){   
    // Recorre las letras de las palabras del diccionario
    for (var j = 0; j < dictionary[i].length;  j++){
      // Quita las tildes
      var noAccent = removeAccent(dictionary[i][j]);
      // Verifica que las letras coincidan
      var idx = letters.indexOf(noAccent);
      // Filtra las que no coinciden
      if (idx !== -1) {
        // Filtra las plabras que cumplen con todas las letras
        if (j == dictionary[i].length - 1) {
          var words = document.getElementById('words');
          // las incluye en el HTML
          var newWord = document.createElement('li');
          newWord.textContent = dictionary[i];
          words.appendChild(newWord);
        }
      }else{
        j = dictionary[i].length + 1;
      }   
    }

  } 
}

//Sustituye "á é í ó ú" 
function removeAccent(str){ 
for (var i=0;i<str.length;i++){ 
if (str.charAt(i)=="á") str = str.replace(/á/,"a"); 
if (str.charAt(i)=="é") str = str.replace(/é/,"e"); 
if (str.charAt(i)=="í") str = str.replace(/í/,"i"); 
if (str.charAt(i)=="ó") str = str.replace(/ó/,"o"); 
if (str.charAt(i)=="ú") str = str.replace(/ú/,"u"); 
} 
return str; 
} 

