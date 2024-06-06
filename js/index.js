// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)


// function myLogger(){
//     console.log('42');
// }
// myLogger();

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function myLap(){
//     let totalLapTime = lap1 + lap2 + lap3;
//     console.log(totalLapTime)
// }
// myLap();


// let lapsCompleted = 0;

// function myFunction(){
//     lapsCompleted = lapsCompleted + 1;
//     console.log(lapsCompleted);
// }

// myFunction();
// myFunction();
// myFunction();


// let count = 0;
// let clickEl = document.getElementById('count-el');
// function increaseCount(){
//     count = count + 1;
//     console.log(count);
//     clickEl.innerText = count;
// }


// let myName = 'John'
// let greeting = 'Hi, I am ';
// let myGreeting = greeting + myName;

// console.log(myGreeting)



// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0

function increaseCount() {
    count += 1
    countEl.textContent = count
}

let saveEl = document.getElementById('save-el');

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let countSep = count + " -";
    
    saveEl.textContent += countSep;
    countEl.textContent = 0;
    count = 0;
    console.log(count)
}



