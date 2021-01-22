/*
***** Convert kilometer to meter
*/

function kilometerToMeter(count){

    var factor = 1000;
    var metre = count * factor;
    
    if(count > 0){
        return metre ;
    }
    else{
        return "Error" //Error Message
        
    }
    
}
 kilometerToMeter();



/*
***** Budget Calculator
*/
function budgetCalculator (watch,mobile,laptop){
    
    if (watch < 0){
        return "Error";
    }
    if (mobile < 0){
        return "Error"
    }
    if (laptop < 0){
        return "Error"
    }
    var mobilePrice = 100;
    var watchPrice = 50;
    var laptopPrice = 500;
    var totalPrice = (watch*watchPrice)+(mobile*mobilePrice)+(laptop*laptopPrice);
  
    return totalPrice;
}
budgetCalculator();

/*
***** Hotel Cost 
*/
function hotelCost(days){
    var totalCost = 0 ;
    if (days<0){
        return "Error";
    }

    if (days <= 10){
        hotelCost = days * 100;
    }
    else if (days <= 20){
        var first10DaysCost = 10 * 100;
        var remaining = days - 10;
        var second10DaysCost = remaining * 80;
        hotelCost =  first10DaysCost + second10DaysCost;
    }
    else {
        var first10DaysCost = 10 * 100;
        var second10DaysCost = 10 * 80;
        var remaining = days - 20;
        var extraDays = remaining * 50 ;
        hotelCost = first10DaysCost + second10DaysCost + extraDays;
    }
    return hotelCost;
}
 hotelCost();


 /*
***** Mega Friend
*/
function megaFriend (arr){
    var initialValue = [];
    for (var i = 0; i < arr.length;i++){
        var currentItem = arr[i];
        if (currentItem.length > initialValue.length){
            initialValue = arr[i];
        } 
    }
    if (initialValue == 0){
        return "Error";
    }
    else{
        return initialValue;
    }
} 
megaFriend();

         ///// THE End /////



