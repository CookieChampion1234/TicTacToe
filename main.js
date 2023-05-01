var player_turn = 1;

function draw1(){
    if (player_turn == 1) {
        document.getElementById("one").textContent = "X";
        player_turn = 2;
    } else if (player_turn == 2) {
        document.getElementById("one").textContent = "O";
        player_turn = 1;
    }
    winning()
}

function draw2(){
    if (player_turn == 1){
        document.getElementById("two").textContent = "X";
        player_turn = 2;
    } else if (player_turn == 2) {
        document.getElementById("two").textContent = "O";
        player_turn = 1;
    }
    winning()
}

function draw3(){
    if (player_turn == 1){
        document.getElementById("three").textContent = "X";
        player_turn = 2;
    } else if (player_turn == 2) {
        document.getElementById("three").textContent = "O";
        player_turn = 1;
    }
    winning()
}

function draw4(){
    if (player_turn == 1){
        document.getElementById("four").textContent = "X";
        player_turn = 2;
    } else if (player_turn == 2) {
        document.getElementById("four").textContent = "O";
        player_turn = 1;
    }
    winning()
}

function draw5(){
    if (player_turn == 1){
        document.getElementById("five").textContent = "X";
        player_turn = 2;
    } else if (player_turn == 2) {
        document.getElementById("five").textContent = "O";
        player_turn = 1;
    }
    winning()
}

function draw6(){
    if (player_turn == 1){
        document.getElementById("six").textContent = "X";
        player_turn = 2;
    } else if (player_turn == 2) {
        document.getElementById("six").textContent = "O";
        player_turn = 1;
    }
    winning()
}

function draw7(){
    if (player_turn == 1){
        document.getElementById("seven").textContent = "X";
        player_turn = 2;
    } else if (player_turn == 2) {
        document.getElementById("seven").textContent = "O";
        player_turn = 1;
    }
    winning()
}

function draw8(){
    if (player_turn == 1){
        document.getElementById("eight").textContent = "X";
        player_turn = 2;
    } else if (player_turn == 2) {
        document.getElementById("eight").textContent = "O";
        player_turn = 1;
    }
    winning()
}

function draw9(){
    if (player_turn == 1){
        document.getElementById("nine").textContent = "X";
        player_turn = 2;
    } else if (player_turn == 2) {
        document.getElementById("nine").textContent = "O";
        player_turn = 1;
    }
    winning()
}

function winning(){
    if (document.getElementById("one").textContent == "O" && document.getElementById("two").textContent == "O" && document.getElementById("three").textContent == "O"){
        document.getElementById("result").textContent = "O Wins"
    }
    if (document.getElementById("one").textContent == "O" && document.getElementById("four").textContent == "O" && document.getElementById("seven").textContent == "O"){
        document.getElementById("result").textContent = "O Wins"
    }
    if (document.getElementById("two").textContent == "O" && document.getElementById("five").textContent == "O" && document.getElementById("eight").textContent == "O"){
        document.getElementById("result").textContent = "O Wins"
    }
    if (document.getElementById("three").textContent == "O" && document.getElementById("six").textContent == "O" && document.getElementById("nine").textContent == "O"){
        document.getElementById("result").textContent = "O Wins"
    }
    if (document.getElementById("four").textContent == "O" && document.getElementById("five").textContent == "O" && document.getElementById("six").textContent == "O"){
        document.getElementById("result").textContent = "O Wins"
    }
    if (document.getElementById("seven").textContent == "O" && document.getElementById("eight").textContent == "O" && document.getElementById("nine").textContent == "O"){
        document.getElementById("result").textContent = "O Wins"
    }
    if (document.getElementById("one").textContent == "O" && document.getElementById("five").textContent == "O" && document.getElementById("nine").textContent == "O"){
        document.getElementById("result").textContent = "O Wins"
    }
    if (document.getElementById("three").textContent == "O" && document.getElementById("five").textContent == "O" && document.getElementById("seven").textContent == "O"){
        document.getElementById("result").textContent = "O Wins"
    }
    if (document.getElementById("one").textContent == "X" && document.getElementById("two").textContent == "X" && document.getElementById("three").textContent == "X"){
        document.getElementById("result").textContent = "X Wins"
    }
    if (document.getElementById("one").textContent == "X" && document.getElementById("four").textContent == "X" && document.getElementById("seven").textContent == "X"){
        document.getElementById("result").textContent = "X Wins"
    }
    if (document.getElementById("two").textContent == "X" && document.getElementById("five").textContent == "X" && document.getElementById("eight").textContent == "X"){
        document.getElementById("result").textContent = "X Wins"
    }
    if (document.getElementById("three").textContent == "X" && document.getElementById("six").textContent == "X" && document.getElementById("nine").textContent == "X"){
        document.getElementById("result").textContent = "X Wins"
    }
    if (document.getElementById("four").textContent == "X" && document.getElementById("five").textContent == "X" && document.getElementById("six").textContent == "X"){
        document.getElementById("result").textContent = "X Wins"
    }
    if (document.getElementById("seven").textContent == "X" && document.getElementById("eight").textContent == "X" && document.getElementById("nine").textContent == "X"){
        document.getElementById("result").textContent = "X Wins"
    }
    if (document.getElementById("one").textContent == "X" && document.getElementById("five").textContent == "X" && document.getElementById("nine").textContent == "X"){
        document.getElementById("result").textContent = "X Wins"
    }
    if (document.getElementById("three").textContent == "X" && document.getElementById("five").textContent == "X" && document.getElementById("seven").textContent == "X"){
        document.getElementById("result").textContent = "X Wins"
    }
}

function restart() {
    document.getElementById("one").textContent = "";
    document.getElementById("two").textContent = "";
    document.getElementById("three").textContent = "";
    document.getElementById("four").textContent = "";
    document.getElementById("five").textContent = "";
    document.getElementById("six").textContent = "";
    document.getElementById("seven").textContent = "";
    document.getElementById("eight").textContent = "";
    document.getElementById("nine").textContent = "";
    document.getElementById("result").textContent = "Tic-Tac-Toe";
}


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMKWHqJgESAfEBxCHQHL3mZGaGVuMFskE",
  authDomain: "tic-tac-toe-ed6dc.firebaseapp.com",
  databaseURL: "https://tic-tac-toe-ed6dc-default-rtdb.firebaseio.com",
  projectId: "tic-tac-toe-ed6dc",
  storageBucket: "tic-tac-toe-ed6dc.appspot.com",
  messagingSenderId: "630219347357",
  appId: "1:630219347357:web:da8ea2f4947e520a2b0b74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

