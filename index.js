// Code your solution in this file!
let locBlock = 34
function distanceFromHqInBlocks(locBlock) {
    return Math.abs(42-locBlock);
}
distanceFromHqInBlocks(locBlock);

function distanceFromHqInFeet(locBlock) {
   return distanceFromHqInBlocks(locBlock)*264;
}
distanceFromHqInFeet(locBlock);

function distanceTravelledInFeet(start, destination) {
    let distanceBlocks = Math.abs(start-destination);
    return distanceBlocks*264;
}
distanceTravelledInFeet(34,28);
distanceTravelledInFeet(50,60);

function calculatesFarePrice(start, destination) {
    let distance = Math.abs(start-destination);
    distance = distance * 264
    
    if (distance <= 400) {
        return(0)
        
    }
   else if (distance > 400 && distance <= 2000) {
    return((distance-400) * 0.02)
     
    } 
    else if (distance > 2000 && distance < 2500){
      return(25)
    }
    else if (distance >= 2500) {
      return('cannot travel that far');
    }
    }
    calculatesFarePrice(43,44);
    console.log(calculatesFarePrice(34,32));
    calculatesFarePrice(50,58);
    calculatesFarePrice(34,24);
