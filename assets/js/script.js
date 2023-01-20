const totalMangoCount = document.getElementById("total-count0");
const totalWatermelonCount = document.getElementById("total-count1");
const totalOrangeCount = document.getElementById("total-count2");
const firework1 = document.getElementById("fire1");
const firework2 = document.getElementById("fire2");
const firework3 = document.getElementById("fire3");
const blast = document.getElementById("blast");
const blast1 = document.getElementById("blast1");
const blast2 = document.getElementById("blast2");
const blast3 = document.getElementById("blast3");
const wheel = document.querySelector(".wheel");
const buttons = document.getElementsByTagName("button");
const total_user_balance = document.getElementById("user-balance");

const pr = [1, 1, 1, 1, 1, 1];
const temp_pr =[0,0,0,0,0,0];
let p_count = 0;
let win = 1;
let btn1 = 0, btn2 = 0, btn3 = 0, btn4 = 0;
let rollMsg = 0;
// let user_id = '<%-game_user_id%>'
let sum = [0,0,0];
let random = [0,0,0]; // rand 1
let rand1 = 0, rand2 = 0, rand3 = 0, rand4 = 0; // rand 2
let time_left = 25;
let deg = 0, actualDeg = 0;
let target = 0, value = 0;
let user_data = [1000, 10000, 3000000];
let tb = user_data;   // copy userdata in tb array
let userBalance = 2000;
document.getElementById("user-balance").innerHTML = userBalance;
let stop = 0, stop1 = 0;
const animation_top = document.querySelector(".animation_top");
let rotationCompleted = 0;
let new_time = 0;
let random_guess = 0;

setInterval(function () {
  total_user_balance.value = userBalance;
  var preloader = document.getElementById('loader');
  preloader.style.display = 'none';
  if(stop1 == 0){
    // change_device();
    prev_result();
    stop1++;
  }
  if(time_left <= 10) {
    if(time_left == 10){
      // console.log("Calculating 10 - Block Button - User 5");
      button_block();
      for (const button of buttons) {
        button.disabled = true;
      }
    }
    else if(time_left == 9){
      // console.log("Calculating 9 - Sum User Data  - User 4");
      button_block();
      tb = sum;
      displayName.apply(this, tb);

    }
    else if(time_left == 8){
      // console.log("Calculating 8 - Game Starts in 3 - User 3");
      rotation_degree();

    }
    else if(time_left == 7){
      // console.log("Calculating 7 - Game Starts in 2 - User 2");

    }
    else if(time_left == 6){
      // console.log("Calculating 6 - Game Starts in 1 - User 1");
      mypopMsg1();
    }
    else if(time_left == 5){
      // console.log("Calculating 5 - Rotate Spinner For 2 sec");
      animation_top.style.display = "none";
      mypopMsg1();
      rotateSpinner();

    }
    else if(time_left == 4){
      // console.log("Calculating 4 - spinning - don't post any data");
    }
    else if(time_left == 3){
      // console.log("Calculating 3 - Winner Animation");
      blast.style.display = 'block';
      if(value == 1){
        firework1.style.display = 'block';
        blast1.style.display = 'block';
        userBalance = userBalance + (sum[0] * 3);
        win = 1;
      }
      else if(value == 2){
        firework2.style.display = 'block';
        blast2.style.display = 'block';
        userBalance = userBalance + (sum[1] * 3);
        win = 2;
      }
      else if(value == 3){
        firework3.style.display = 'block';
        blast3.style.display = 'block';
        userBalance = userBalance + (sum[2] * 3);
        win = 3;
      }
      else{
        // Error
      }

    }
    else if(time_left == 2){
      // console.log("Calculating 2");
    }
    else if(time_left == 1){
      // console.log("Calculating 1 - Post Data");
    }
    else if(time_left == 0){
      preloader.style.display = 'block';
      reset_values();
    }
    else{
      // console.log("Game Crash");
    }
  }

  
  if(time_left <= 5){
    document.getElementById("demo").innerHTML = null;
  }
  else{
    document.getElementById("demo").innerHTML = time_left - 5;
    animation_top.style.animation="spin2 0.5s infinite alternate";
    if(time_left < 20){
      random_pot();
    }
  }
  time_left--;
}, 1000);

function prev_result(){
  // ! pr = [1,2,3,4,5,6]
  if(p_count == 0){
    // ?
  }
  else{
      for(let y =0; y < 6; y++){
          if(y == 5){
              pr[y] = win;
          }
          else{
              pr[y] = pr[y+1];   
          }
      }
  }
  let result = "result";
  for(let i = 0; i < 6; i++){
    let num = i.toString();
    result = result.concat(num);
    if(pr[i] == 1){
      document.getElementById(result).src = "assets/images/Mango.png";
    }
    else if(pr[i] == 2){
      document.getElementById(result).src = "assets/images/Watermelon.png";
    }
    else if(pr[i] == 3){
      document.getElementById(result).src = "assets/images/Orange.png";
    }
    result = "result";
  }
}

function reset_values(){
  time_left = 25;
  p_count++;
  random = [0,0,0];                                              // rand 8
  sum = [0,0,0];                    // user bid restart after spin complete
  document.getElementById("rand-pot0").innerHTML = random[0];   // rand 9
  document.getElementById("rand-pot1").innerHTML = random[1];   // rand 10
  document.getElementById("rand-pot2").innerHTML = random[2];   // rand 11
  totalMangoCount.innerHTML = sum[0];
  totalWatermelonCount.innerHTML = sum[1];
  totalOrangeCount.innerHTML = sum[2];
  firework1.style.display = 'none';
  firework2.style.display = 'none';
  firework3.style.display = 'none';
  blast1.style.display = 'none';
  blast2.style.display = 'none';
  blast3.style.display = 'none';
  blast.style.display = 'none';
  document.getElementById("c1").checked = false;
  document.getElementById("c2").checked = false;
  document.getElementById("c3").checked = false;
  document.getElementById("c4").checked = false;
  animation_top.style.display = "block";
  for (const button of buttons) {
    button.disabled = false;
  }
  stop = 0;
  stop1 = 0;
  value = 0;
}

function rotateSpinner() {
  // console.log(user_data);
  wheel.style.transition = "all 2s cubic-bezier(0.7, 1.0, 1.0, 1.0)";
  // Rotate the wheel
  wheel.style.transform = `rotate(${deg}deg)`;
  // Apply the blur
  // wheel.classList.add("blur");

  wheel.addEventListener("transitionend", () => {
    // Remove blur
    //wheel.classList.remove('blur');
    // Need to set transition to none as we want to rotate instantly
    
    if(wheel.style.transition = "none"){
      rotationCompleted = 1;
    }
    actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
}

function rotation_degree(){
  random_rotation = Math.floor(Math.random() * 2) + 1;
  target = value;
  // console.log(value);
  if(target == 1){
    if(random_rotation == 1){
      deg = Math.floor(750 + 0.1 * 300);
    }
    else{
      deg = Math.floor(750 + 0.7 * 300);
    }
  }
  else if(target == 2){
    if(random_rotation == 1){
      deg = Math.floor(750 + 1.1 * 300);
    }
    else{
      deg = Math.floor(750 + 0.5 * 300);
    }
  }
  else if(target == 3){
    if(random_rotation == 1){
      deg = Math.floor(750 + 0.9 * 300);
    }
    else{
      deg = Math.floor(750 + 0.3 * 300);
    }
  }
}

                                                                    // Button Start

function btn1Fun(){
    btn1 = 1;
    btn2 = 0;
    btn3 = 0;
    btn4 = 0;
}

function btn2Fun(){
    btn1 = 0;
    btn2 = 1;
    btn3 = 0;
    btn4 = 0;
}

function btn3Fun(){
    btn1 = 0;
    btn2 = 0;
    btn3 = 1;
    btn4 = 0;
}

function btn4Fun(){
    btn1 = 0;
    btn2 = 0;
    btn3 = 0;
    btn4 = 1;
}

function myFruit1(){ //mango
    if(btn1 == 1 && btn2 == 0 && btn3 == 0 && btn4 == 0 && userBalance >= 100 ){
        sum[0] = sum[0] + 100;
        userBalance = userBalance - 100;
        // api, mango, 100
    }
    else if(btn1 == 0 && btn2 == 1 && btn3 == 0 && btn4 == 0 && 1000 <= userBalance){
        sum[0] = sum[0] + 1000;
        userBalance = userBalance - 1000;
        // api, mango, 1000
    }
    else if(btn1 == 0 && btn2 == 0 && btn3 == 1 && btn4 == 0 && 10000 <= userBalance){
        sum[0] = sum[0] + 10000;
        userBalance = userBalance - 10000;
        // api, mango, 10000
    }
    else if(btn1 == 0 && btn2 == 0 && btn3 == 0 && btn4 == 1 && 100000 <= userBalance){
        sum[0] = sum[0] + 100000;
        userBalance = userBalance - 100000;
        // api, mango, 100000
    }
    else{
      lowBalance();
    }

    total_user_balance.value = userBalance;
    if(sum[0] >=  1000){
      totalMangoCount.innerHTML = (sum[0]/1000)+"k";
      }
      else{
        totalMangoCount.innerHTML = sum[0];
    }
}

function myFruit2(){
    if(btn1 == 1 && btn2 == 0 && btn3 == 0 && btn4 == 0 && 100 <= userBalance){
        sum[1] = sum[1] + 100;
        userBalance = userBalance - 100;
        // api, watermelon, 100
    }
    else if(btn1 == 0 && btn2 == 1 && btn3 == 0 && btn4 == 0 && 1000 <= userBalance){
        sum[1] = sum[1] + 1000;
        userBalance = userBalance - 1000;
        // api, watermelon, 1000
    }
    else if(btn1 == 0 && btn2 == 0 && btn3 == 1 && btn4 == 0 && 10000 <= userBalance){
        sum[1] = sum[1] + 10000;
        userBalance = userBalance - 10000;
        // api, watermelon, 10000
    }
    else if(btn1 == 0 && btn2 == 0 && btn3 == 0 && btn4 == 1 && 100000 <= userBalance){
        sum[1] = sum[1] + 100000;
        userBalance = userBalance - 100000;
        // api, watermelon, 100000
    }
    else{
      lowBalance();
    }

    total_user_balance.value = userBalance;
    if(sum[1] >=  1000){
      totalWatermelonCount.innerHTML = (sum[1]/1000)+"k";
      }
      else{
        totalWatermelonCount.innerHTML = sum[1];
    }
}

function myFruit3(){
    if(btn1 == 1 && btn2 == 0 && btn3 == 0 && btn4 == 0 && 100 <= userBalance){
        sum[2] = sum[2] + 100;
        userBalance = userBalance - 100;
        // api, orange, 100
    }
    else if(btn1 == 0 && btn2 == 1 && btn3 == 0 && btn4 == 0 && 1000 <= userBalance){
        sum[2] = sum[2] + 1000;
        userBalance = userBalance - 1000;
        // api, orange, 1000
    }
    else if(btn1 == 0 && btn2 == 0 && btn3 == 1 && btn4 == 0 && 10000 <= userBalance){
        sum[2] = sum[2] + 10000;
        userBalance = userBalance - 10000;
        // api, orange, 10000
    }
    else if(btn1 == 0 && btn2 == 0 && btn3 == 0 && btn4 == 1 && 100000 <= userBalance){
        sum[2] = sum[2] + 100000;
        userBalance = userBalance - 100000;
        // api, orange, 100000
    }
    else{
      lowBalance();
    }

    total_user_balance.value = userBalance;
    if(sum[2] >=  1000){
      totalOrangeCount.innerHTML = (sum[2]/1000)+"k";
      }
      else{
        totalOrangeCount.innerHTML = sum[2];
    }
}

                                                                    // Button End

                                                                    // Check Random Start
function chking_random(){
  if(random[0] <= user_data[0]){
    random[0] = random[0] + (user_data[0] * 2);
    if(random[0] >=  1000){
      document.getElementById("rand-pot0").innerHTML = (random[0]/1000)+"k";
    }
    else{
      document.getElementById("rand-pot0").innerHTML = random[0];
    }
  }
  if(random[1] <= user_data[1]){
    random[1] = random[1] + (user_data[1] * 2);
    if(random[1] >=  1000){
      document.getElementById("rand-pot1").innerHTML = (random[1]/1000)+"k";
    }
    else{
      document.getElementById("rand-pot1").innerHTML = random[1];
    }
  }
  if(random[2] <= user_data[2]){
    random[2] = random[2] + (user_data[2] * 2);
    if(random[2] >=  1000){
      document.getElementById("rand-pot2").innerHTML = (random[2]/1000)+"k";
    }
    else{
      document.getElementById("rand-pot2").innerHTML = random[2];
    }
  }
}
                                                                    // Check Random End

                                                                    // Random Start
function random_pot(){
    rand1 = Math.floor(Math.random() * 4) + 0; // rand 3
    rand2 = Math.floor(Math.random() * 4) + 0; // rand 4
    rand3 = Math.floor(Math.random() * 4) + 0; // rand 5
// { rand 6
    randuser = Math.floor(Math.random() * 10) + 1;          
    if(rand1 == 1){
      random[0] = (100 * randuser) + random[0];
    }
    else if(rand1 == 2){
      random[0] = (1000 * randuser) + random[0];
    }
    else if(rand1 == 3){
      random[0] = (10000 * randuser) + random[0];
    }
    else if(rand1 == 4){
      random[0] = (100000 * randuser) + random[0];
    }
  
    if(rand2 == 1){
      random[1] = (100 * randuser) + random[1];
    }
    else if(rand2 == 2){
      random[1] = (1000 * randuser) + random[1];
    }
    else if(rand2 == 3){
      random[1] = (10000 * randuser) + random[1];
    }
    else if(rand2 == 4){
      random[1] = (100000 * randuser) + random[1];
    }
  
    if(rand3 == 1){
      random[2] = (100 * randuser) + random[2];
    }
    else if(rand3 == 2){
      random[2] = (1000 * randuser) + random[2];
    }
    else if(rand3 == 3){
      random[2] = (10000 * randuser) + random[2];
    }
    else if(rand3 == 4){
      random[2] = (10000 * randuser) + random[2];
    }
  
    if(random[0] >=  1000){
      document.getElementById("rand-pot0").innerHTML = (random[0]/1000)+"k";
    }
    else{
      document.getElementById("rand-pot0").innerHTML = random[0];
    }
    if(random[1] >=  1000){
      document.getElementById("rand-pot1").innerHTML = (random[1]/1000)+"k";
    }
    else{
      document.getElementById("rand-pot1").innerHTML = random[1];
    }
    if(random[2] >=  1000){
      document.getElementById("rand-pot2").innerHTML = (random[2]/1000)+"k";
    }
    else{
      document.getElementById("rand-pot2").innerHTML = random[2];
    }
  // rand 7 }
}

                                                                    // Random End

                                                                    // POP UP Start

function mypopMsg1() {
  let popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  popup.classList.toggle("hide");
}


function button_block() {
  let popup = document.getElementById("myPopup0");
  popup.classList.toggle("show");
}

// function change_device() {
//   let popup = document.getElementById("firstMsg");
//   popup.classList.toggle("show");
//   popup.classList.toggle("hide");
// }

function lowBalance() {
  let popup1 = document.getElementById("myPopup1");
  popup1.classList.toggle("show");
}

//modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
                                                                    // POP UP End

                                                                    // Low Selection Start
function displayName(){
    if(tb[0] == 0 && tb[1] == 0 && tb[2] == 0){
      let ran_guess = Math.floor(Math.random() * 3) + 1;
      if(ran_guess == 1){
        value = 1;
      }
      else if(ran_guess == 2){
        value = 2;
      }
      else if(ran_guess == 3){
        value = 3;
      }
    }
    else{
      let abc  = random_target.apply(this, tb);
    }
}

// random_low
function random_target(){
        // return low.apply(this, tb);

        // random target
        random_guess = Math.floor(Math.random() * 100) + 1;
        if(random_guess <= 50){
          return low.apply(this, tb);
        }
        else if(random_guess <=90){
          return mid.apply(this, tb);
        }
        else if(random_guess <= 100){
          return high.apply(this, tb);
        }
        random_guess = 0;
}

//lowest value finder
function low(){
  if (tb[0] <= tb[1] && tb[0] <= tb[2]){
    value = 1;
    return tb[0];
  }
  else if (tb[1] <= tb[0] && tb[1] <= tb[2]){
    value = 2;
    return tb[1];
  }
  else{
    value = 3;
    return tb[2];
  }
}
                                                                    // Low Selection End

//middle value finder
function mid(){
  if ((tb[0] < tb[1] && tb[1] < tb[2]) || (tb[2] < tb[1] && tb[1] < tb[0])){
    value = 2;
    return tb[1];
  }
  else if ((tb[1] < tb[0] && tb[0] < tb[2]) || (tb[2] < tb[0] && tb[0] < tb[2])){
    value = 1;
    return tb[0];
  }
  else{
    value = 3;
    return tb[2];
  }
}

//highest value finder
function high(){
  if(tb[0] >= tb[1] && tb[0] >= tb[2]) {
      value = 1;
      return tb[0];
  }
  else if (tb[1] >= tb[0] && tb[1] >= tb[2]) {
      value = 2;
      return tb[1];
  }
  else {
      value = 3;
      return tb[2]
  }
}
