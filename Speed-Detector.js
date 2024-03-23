// function declaration for the function that calculates he demerit points
function speedPointsCalculator(speed){
    const spdLimit = 70
    const kmPerPoint = 5
    
    if(speed <= spdLimit ){
        console.log('okay')
    }else if (speed > 70 && speed <= 130 ){
        const overspeed = speed - spdLimit
        const demeritPoints = Math.floor(overspeed / kmPerPoint)
        console.log(`You have ${demeritPoints}`)
    } //here, the points are calculated as long as the speed is between 70 and 130. we calculate the overspeed then divide by the km per point. we use the math.floor in order to round down to nearest interger

    else if (speed > 130) {
        console.log('License suspended')
    }
} // any speed beyond 130 sends this as a message.

speedPointsCalculator(130)