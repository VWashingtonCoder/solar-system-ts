// SPACE DATA EXERCISE 8
// Return a Planet by a given moon name
//  must have destructured parameters
import { Planet } from "../data/data";

type PropsType = {
    planets: Planet[];
    moonName: string;
};

export function findPlanetByMoon({ planets, moonName }: PropsType) {
    const searchMoonName = moonName.charAt(0).toUpperCase() + moonName.slice(1);
    return planets.find((planet) => planet.moons?.includes(searchMoonName));
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
