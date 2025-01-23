import { faker } from "@faker-js/faker";

export class MockStateManager {
  private currentSeed?: number;

  setSeed(seed: number): void {
    this.currentSeed = seed;
    faker.seed(seed);
  }

  reset(): void {
    if (this.currentSeed !== undefined) {
      faker.seed(this.currentSeed);
    }
  }

  resetState(): void {
    faker.seed(); // Resets to random seed
    this.currentSeed = undefined;
  }
}

export const mockState = new MockStateManager();
