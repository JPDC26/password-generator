const generateButton = document.getElementById("generate-button");
const result = document.getElementById("result");

function randomSentence() {
  const firstWord = ['a',' b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const subject  = ['A',' B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',' U', 'V','W', 'X', 'Y', 'Z'];
 const adj  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
 const action = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']',':',';','|','?','.' ];
const adverbs = ['w',5,'$','p','l','&','0','K','±','§','L'];


  const newFirstWord = firstWord[Math.floor(Math.random() * firstWord.length)];
  const newFirstWord1 = firstWord[Math.floor(Math.random() * firstWord.length)];
  const newFirstWord2 = firstWord[Math.floor(Math.random() * firstWord.length)];
  const newAdj = adj[Math.floor(Math.random() * adj.length)];
  const newAdj1 = adj[Math.floor(Math.random() * adj.length)];
  const newAdj2 = adj[Math.floor(Math.random() * adj.length)];
  const newSubject = subject[Math.floor(Math.random() * subject.length)];
  const newSubject1 = subject[Math.floor(Math.random() * subject.length)];
  const newSubject2 = subject[Math.floor(Math.random() * subject.length)];
  const newAction = action[Math.floor(Math.random() * action.length)];
  const newAction2 = action[Math.floor(Math.random() * action.length)];
  const newAction1 = action[Math.floor(Math.random() * action.length)];
  const newAdverb = adverbs[Math.floor(Math.random() * adverbs.length)];
   const newAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)];
  const newAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)];
 

return `${newFirstWord}${newAdj}${newSubject}${newAction}${newAdverb}.
${newFirstWord1}${newAdj1}${newSubject1}${newAction1}${newAdverb1}.
${newFirstWord2}${newAdj2}${newSubject2}${newAction2}${newAdverb2}.`; 
}

generateButton.addEventListener("click", function() {
  result.style.display = "block";
  result.innerHTML = randomSentence();
});

