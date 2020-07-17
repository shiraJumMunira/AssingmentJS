/*
 Q1.
First Qns Ans Start...
feetToMile
Ans:
 */
function feetToMile(feet){
        var mile = feet / 5280;
        return mile;
}
//  output
    var result =feetToMile(5280);
    console.log(result);
// First Qns Ans End....

/*
Q2.
Second Qns Ans start.....
woodCalculator
Ans:
*/
function woodCalculator(chair, table, bed){
        var chairNumber = chair * 1;
        var tableNumber = table * 3;
        var bedNumber   = bed   * 5;
        
        var totalWood   =chairNumber + tableNumber + bedNumber;
        
        return totalWood;
}
// outPut
    var result = woodCalculator( 3 , 4, 5 );
    console.log(result); 
// second Qns Ans End


/*
Q3.
Third Qns Ans Start..
brickCalculator
Ans:
*/
function brickCalculator(n){
    if(n>10 && n<=20){
        var brick = 10*15*1000+(n-10)*12*1000;
    }
    else if(n>20){
        var brick = 10*15*1000+10*12*1000+(n-20)*10*1000;
    }
    else{
        var brick = n*15*1000;
    }
    return brick;
}
//Output
    var result = brickCalculator(10);
    console.log(result);
//Third Qns Ans End 


/*
Q4.
Fourth Qns Ans Start...
tinyFriend
Ans
*/
function tinyFriend(friends){
        var tiny = friends[0];
        
        for(var i = 0; i < friends.length; i++){
            var friendNumber = friends[i];
            if(friendNumber.length < tiny.length){
                 tiny = friendNumber;
        }
    }
        return tiny;
}
// Output
    var shortFriend = tinyFriend(["Zakia", "Moon", "Sabrina", "Munira", "Didar", "Dev","Bobi"]);
    console.log(shortFriend);
// Fourth Qns Ans End

