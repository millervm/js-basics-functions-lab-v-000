// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return Math.abs(42 - blocks);
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs(block1 - block2) * 264;
}