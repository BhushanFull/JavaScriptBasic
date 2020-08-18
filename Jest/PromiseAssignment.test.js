var func1 = require('../MockFile/PromiseAssignment');
test('Async testing ',()=>{
return func1().then(data => expect(data.active).toEqual(56000));
})

test('works with async/await', async () => {
    expect.assertions(1);
    const res = await func1();
    expect(res.active).toEqual(56000);
  });