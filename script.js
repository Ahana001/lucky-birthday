const button = document.querySelector("#luckyButton");
const dob = document.querySelector("#birth-date");
const number = document.querySelector("#lucky-number");
const result = document.querySelector("#output");
let sum = 0;

function calculateSum (){
  let date = dob.value;
  date = date.replaceAll("-","");
  //console.log(typeof date);
  let dateArray = date.split("");
  dateArray.map(( val )=>{
    sum = sum + parseInt(val);
  });
  //console.log(sum,number);
}
function calculateLuckyBirth(){
  //console.log(typeof number);
  if(sum % number.value == 0){
    result.innerText = "Your birthday is lucky 🚀";
  }else{
    result.innerText = "Your birthday is not lucky 🤒";
  }
}
button.addEventListener("click",()=>{
  calculateSum();
  calculateLuckyBirth();
});
