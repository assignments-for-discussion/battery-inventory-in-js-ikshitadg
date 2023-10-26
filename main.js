const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  const ratedCapacity = 120; // Rated capacity of a new battery
  const result = {
    healthy: 0,
    exchange: 0,
    failed: 0
  };
  if (presentCapacities.length) {
    presentCapacities.forEach((v) => {

      let SoHPercent = (v / ratedCapacity) * 100;
      if (SoHPercent > 80 && SoHPercent <= 100) {
        result.healthy++;
      }
      else if (SoHPercent >= 63 && SoHPercent <= 80) {
        result.exchange++;
      }
      else {
        result.failed++;
      }
    })
    return result;
  }
  else {
    throw new Error("No capacities provided");
  }
}

function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
