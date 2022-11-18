function hello() {
    let userName = prompt("Hello Rider, who are you?")
    while (userName == "") {
        userName = prompt("You got one more chance");
    }
    console.log("Rider's name is: " + userName);
    document.write("Rider " + userName);
    return userName;
}
    
hello(

);



let response = prompt("Do you promise to ride safe?");
response=response.toLowerCase(
    
)
if (response == "yes") {
    alert("Good Job");
    document.write(" You promised to be SAFE");
} else if (response == "no") {
    alert("That's TERRIBLE CHOISE");
    document.write(" Very DANGEROUS :)");
} else {
    alert("Try again!!!");
    document.write("Has not decided about");
}


function bikeLover(){
    let rating = prompt("How much do you like biking from 1 to 10");
    for (let i = 0; i < rating; i++){
      document.write("<img class='rating-pic' src='./img/wheel.jpg' alt='Wheeeelee' />");
    }
  }