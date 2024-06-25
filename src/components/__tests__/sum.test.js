

import { sum } from "../sum"

test("sum functio shoukd find sum 0f 2 arguments", ()=>{
      
    const result= sum(3,4);


    //assertion
    expect(result).toBe(5);
})

