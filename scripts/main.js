let score = 2550;
let clickGain = 1;
let costupd = 150;
let cost = 2500;
let pig = 3;



const buttons = Array.from(document.getElementById('shop__main').querySelectorAll('button'));
const name = ["---","Yellow","Purple","Pig","Green","Pink","Red","Cyan","Rainbow","Orange","Blue"];
let purch = [
  false,false,true,
  false,false,false,
  false,false,false,
  false,false
];

let demo = false;

// Yell Purp Pig Green Pink Red Cyan Rain Oran Blue
buttons.filter(btn => btn.textContent.includes('upgrade'));

var myHeading = document.querySelector("h1");
myHeading.textContent = score;


document.querySelector("button").onclick = function () {
  score+= clickGain;
  myHeading.textContent = score;
  const input = document.getElementById(`button__promocodes`);
  const inputValue = input.value;
  
  if (inputValue == "HackClub") {
    document.getElementById("hackclub__logo").style.transform= `scale(0.75)`;
  }
  if (inputValue == "Demo" && demo==false) {
    score+=10000;
    myHeading.textContent = score;
    demo=true;
  }
    
};
document.getElementById("button__upd").onclick = function (){
  if(score>=costupd){
    score-=costupd;
    costupd*=2.5;
    clickGain*=1.5;
    document.getElementById("button__upd").textContent = `Buy upgrade \n${costupd}`;
    
    myHeading.textContent = score;
  }
}

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if(cost <= score )
    {
      buttons[pig].textContent = `Skin: ${name[pig]}\n Apply`;
      
      pig = index;
      document.getElementById("spr__pig").src = `icon/pigs/${name[pig]}.png`;
      score-=cost;
      myHeading.textContent = score;
      purch[pig-1] = true;
      buttons[pig].textContent = `Skin: ${name[pig]}\n Applied`;
      
    }
    if(purch[index-1] == true)
    {
      buttons[pig].textContent = `Skin: ${name[pig]}\n Apply`;
      
      pig = index;
      document.getElementById("spr__pig").src = `icon/pigs/${name[pig]}.png`;
      
      myHeading.textContent = score;
      
      buttons[pig].textContent = `Skin: ${name[pig]}\n Applied`;
    }
    console.log(index,name[index],purch[index-1]);
  });
});

