// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return Math.abs(42 - blocks);
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0;
  }
  else if (distanceTravelledInFeet(start, destination) >400 && distanceTravelledInFeet(start, destination) <= 2000) {
    return distanceTravelledInFeet(start, destination) * 0.02;
  }
  else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
    return 25;
  }
  else {
    return "cannot travel that far";
  }
}
