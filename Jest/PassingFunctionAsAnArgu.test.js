var func = require('../JavaScript/PassingFunctionAsAnArgu');
func1 = func.func1;
func2 = func.func2;


test("Passing function as an argument",()=>{
    expect(func2(func1)).toBe(80);
})