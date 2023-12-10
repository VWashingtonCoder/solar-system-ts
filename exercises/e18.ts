// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy
import { Asteroid } from "../data/data";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  const years = new Map<number, number>();
  for (let asteroid of asteroids) {
    const year = asteroid.discoveryYear;
    if (years.has(year)) {
      years.set(year, years.get(year)! + 1);
    } else {
      years.set(year, 1);
    }
  }
  let maxYear = 0;
  let maxYearCount = 0;
  for (let [year, count] of years) {
    if (count > maxYearCount) {
      maxYear = year;
      maxYearCount = count;
    }
  }
  return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
