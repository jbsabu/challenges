// Write a function that takes a number of adults, a number of children, and 
// the number of beds in a vacation home and returns true if there are enough
// beds for everyone and false if not. Assume that adults will sleep 2 to a bed

// Divide the number of adults by 2 

// Add that to the number of kiddos

// Is that results <= number of beds 

function enoughBeds(numAdults,numKids,numBeds){
// Divide the number of adults by 2 
if (numAdults % 2 === 1 && numAdults > 0) {
    numAdults = (numAdults - 1) / 2
    numAdults ++
    console.log(numAdults)
} else {
    numAdults /= 2
}
const adultBeds = numAdults
// Add that to the number of kiddos
const totalBedsNeeded = adultBeds + numKids
// Is that result <= number of beds
return (totalBedsNeeded <= numBeds)
}

const canWeFit = enoughBeds(5,2,5)
console.log("Can we fit?", canWeFit)