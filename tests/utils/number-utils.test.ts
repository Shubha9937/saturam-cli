import { clamp } from "../../src/utils/number-utils";

describe("clamp utility", () => {
    it("returns value when within bounds", () => {
        expect(clamp(5, 1, 10)).toBe(5);
    });

    it("clamps to min when below bound", () => {
        expect(clamp(-5, 0, 10)).toBe(0);
    });

    it("clamps to max when above bound", () => {
        expect(clamp(15, 0, 10)).toBe(10);
    });
});
