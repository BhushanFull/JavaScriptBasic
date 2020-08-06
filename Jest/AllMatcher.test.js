
test('adds 5 + 5 to equal 10',() =>{
    expect(5 + 5).toBe(10);
    expect(5 + 5).toBeGreaterThan(5);
});

test('zero',()=>{
    const a=0;
    expect(a).toBeDefined();
    expect(a).not.toBeUndefined();
});

test('float equality',()=>{
    const marks=59.6;
    expect(marks).toBeCloseTo(59.6);
})

test('String matcher',()=>{
    name = 'bhushan kumar singh';
    expect(name).toMatch(/singh/);
})