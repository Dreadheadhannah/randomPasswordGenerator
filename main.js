const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOne = document.querySelector(".passwordOne")
let passwordTwo = document.querySelector(".passwordTwo")
let passwords = 15

function generatePassword(){
    let randomPasswordOne = ""
    let randomPasswordTwo = ""

    for(let i=0; i<passwords; i+=1){
        randomPasswordOne += characters[Math.floor(Math.random()*characters.length)]
        randomPasswordTwo += characters[Math.floor(Math.random()*characters.length)]

        passwordOne.textContent = randomPasswordOne
        passwordTwo.textContent = randomPasswordTwo
    }
}

generatePassword()

document.addEventListener("DOMContentLoaded", function() {
    const copyButtonOne = document.getElementById("copyBtnOne");
    const contentToCopy = passwordOne.innerText;
  
    copyButtonOne.addEventListener("click", function() {
      navigator.clipboard.writeText(contentToCopy)
        .then(() => {
          // Successfully copied
          copyButtonOne.textContent = "Copied!";
          setTimeout(function() {
            copyButtonOne.textContent = "Copy";
          }, 2000); // Reset button text after 2 seconds
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const copyButtonTwo = document.getElementById("copyBtnTwo");
    const contentToCopyTwo = passwordTwo.innerText;
  
    copyButtonTwo.addEventListener("click", function() {
      navigator.clipboard.writeText(contentToCopyTwo)
        .then(() => {
          // Successfully copied
          copyButtonTwo.textContent = "Copied!";
          setTimeout(function() {
            copyButtonTwo.textContent = "Copy";
          }, 2000); // Reset button text after 2 seconds
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    });
  });

