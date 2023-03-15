import {time} from "../time.js"

test("milisecond 5200 to be 5 seconds",()=>{
    expect(time(5200)).toBe('5 seconds')
})

test("milisecond 60000 to be 1 minute",()=>{
    expect(time(60000)).toBe('1 minutes')
})

test("milisecond 180000 to be 3 minutes",()=>{
    expect(time(180000)).toBe('3 minutes')
})

test("milisecond 200000 to be 3 minutes 20 seconds",()=>{
    expect(time(200000)).toBe('3 minutes 20 seconds')
})

test("milisecond 5400000 to be 1 hours 30 minutes",()=>{
    expect(time(5400000)).toBe('1 hours 30 minutes')
})

test("milisecond 4545300 to be 1 hours 15 minutes 45 seconds",()=>{
    expect(time(4545300)).toBe('1 hours 15 minutes 45 seconds')
})