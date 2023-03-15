import {tax_calculator} from "../tax_calculator.js";

test("amount 225000 to be no tax",()=>{
    expect(tax_calculator(225000)).toBe("no tax");
});

test("amount 450000 to be 405000",()=>{
    expect(tax_calculator(450000)).toBe(405000);
});

test("amount 750000 to be 600000",()=>{
    expect(tax_calculator(750000)).toBe(600000);
});

test("amount 225000 to be 1050000",()=>{
    expect(tax_calculator(1500000)).toBe(1050000);
});