import { valid_sum } from "../testing_js/valid_sum";

test(
    "  valid_sum(a,b)  returns  the computed sum of two input numbers a and b ", 
    () => { 
        const result = valid_sum(3, 4);
        // Assertion of result to be 7
        expect(result).toBe(7);
    }
);
