var random_no_1 = 0;
var random_no_2 = 0

function roll_both() {
    random_no_1 = Math.floor((Math.random() * 6) + 1 );
    console.log(random_no_1);
    random_no_2 = Math.floor((Math.random() * 6) + 1 );
    console.log(random_no_2);

    total_of_dice = random_no_1 + random_no_2;
    console.log(total_of_dice);

    if(random_no_1 == 1) {
        document.getElementById("first_dice").src = "one.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;        
    } else if(random_no_1 == 2) {
        document.getElementById("first_dice").src = "two.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    } else if(random_no_1 == 3) {
        document.getElementById("first_dice").src = "three.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    } else if(random_no_1 == 4) {
        document.getElementById("first_dice").src = "four.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    } else if(random_no_1 == 5) {
        document.getElementById("first_dice").src = "five.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    } else if(random_no_1 == 6) {
        document.getElementById("first_dice").src = "six.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    }

    if(random_no_2 == 1) {
        document.getElementById("second_dice").src = "one.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    } else if(random_no_2 == 2) {
        document.getElementById("second_dice").src = "two.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    } else if(random_no_2 == 3) {
        document.getElementById("second_dice").src = "three.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    } else if(random_no_2 == 4) {
        document.getElementById("second_dice").src = "four.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    } else if(random_no_2 == 5) {
        document.getElementById("second_dice").src = "five.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    } else if(random_no_2 == 6) {
        document.getElementById("second_dice").src = "six.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    }
}

function roll_1() {
    random_no_1 = Math.floor((Math.random() * 6) + 1 );
    console.log(random_no_1);
    //random_no_2 = Math.floor((Math.random() * 6) + 1 );
    //console.log(random_no_2);

    total_of_dice = random_no_1 + random_no_2;
    console.log(total_of_dice);

    if(random_no_1 == 1) {
        document.getElementById("first_dice").src = "one.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;        
    } else if(random_no_1 == 2) {
        document.getElementById("first_dice").src = "two.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    } else if(random_no_1 == 3) {
        document.getElementById("first_dice").src = "three.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    } else if(random_no_1 == 4) {
        document.getElementById("first_dice").src = "four.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    } else if(random_no_1 == 5) {
        document.getElementById("first_dice").src = "five.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    } else if(random_no_1 == 6) {
        document.getElementById("first_dice").src = "six.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    }
}

function roll_2() {
    random_no_2 = Math.floor((Math.random() * 6) + 1 );
    console.log(random_no_2);
    //random_no_1 = Math.floor((Math.random() * 6) + 1 );
    //console.log(random_no_1);

    total_of_dice = random_no_1 + random_no_2;
    console.log(total_of_dice);

    if(random_no_2 == 1) {
        document.getElementById("second_dice").src = "one.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    } else if(random_no_2 == 2) {
        document.getElementById("second_dice").src = "two.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    } else if(random_no_2 == 3) {
        document.getElementById("second_dice").src = "three.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    } else if(random_no_2 == 4) {
        document.getElementById("second_dice").src = "four.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    } else if(random_no_2 == 5) {
        document.getElementById("second_dice").src = "five.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    } else if(random_no_2 == 6) {
        document.getElementById("second_dice").src = "six.png";
        document.getElementById("result").innerHTML = "Total of Both Dice : " + total_of_dice;     
    }
}