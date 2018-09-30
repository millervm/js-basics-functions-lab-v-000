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
  let price;
  if (distanceTravelledInFeet(start, destination) <= 400) {
    price = 0;
  }
  else if (distanceTravelledInFeet(start, destination) >400 && distanceTravelledInFeet(start, destination) <= 2000) {
    price = distanceTravelledInFeet(start, destination) * 0.02;
  }
  else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
    price = 25;
  }
  return price;
}
