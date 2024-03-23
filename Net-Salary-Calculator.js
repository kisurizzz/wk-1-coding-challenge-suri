function calculateNetPay(basicSalary, housingAllowance, medicalAllowance){
    const PayeRates = [
        {threshold: 24000, rate: 0.1},
        {threshold: 32333, rate: 0.25},
        {threshold: 500000, rate: 0.30},
        {threshold: 800000, rate: 0.325},
        {threshold: Infinity, rate: 0.35}
    ]

    const NHIF = [
        {threshold: 5999, deduction: 150},
        {threshold: 7999, deduction: 300},
        {threshold: 11999, deduction: 400},
        {threshold: 14999, deduction: 500},
        {threshold: 19999, deduction: 600},
        {threshold: 24999, deduction: 750},
        {threshold: 29999, deduction: 850},
        {threshold: 34999, deduction: 900},
        {threshold: 39999, deduction: 950},
        {threshold: 44999, deduction: 1000},
        {threshold: 49999, deduction: 1100},
        {threshold: 59999, deduction: 1200},
        {threshold: 69999, deduction: 1300},
        {threshold: 79999, deduction: 1400},
        {threshold: 89999, deduction: 1500},
        {threshold: 99999, deduction: 1600},
        {threshold: Infinity, deduction: 1700}
    ]

    const NSSF = [
        {threshold: 7000, deduction: 420},
        {threshold: Infinity , deduction: 1740}
    ]

    let grossSalary = basicSalary + housingAllowance + medicalAllowance
    console.log(`gross salary is ${grossSalary}`)

    let taxDeductions = 0
    let NHIFdeductions = 0
    let NSSFdeductions = 0
    let totalDeductions = 0
    let CumulativetaxDeductions = 0

    let remainingGrossSalaryInTax = grossSalary
    // let remainingGrossSalaryInTax2 = grossSalary

    for(const {threshold, rate} of PayeRates){
        if (remainingGrossSalaryInTax > threshold){
            const taxableAmount = Math.min(remainingGrossSalaryInTax - threshold, grossSalary - threshold)
            taxDeductions += taxableAmount * rate
            remainingGrossSalaryInTax -= taxableAmount
        } else {
            break;
        }
    }


//   for(const {threshold, rate} of PayeRates){
//         if (remainingGrossSalaryInTax > threshold){
//             const taxableAmount =  Math.min(remainingGrossSalaryInTax - threshold, grossSalary - threshold)
//             CumulativetaxDeductions += taxableAmount * rate
//             remainingGrossSalaryInTax -= taxableAmount
//         // } else if (remainingGrossSalaryInTax2 < threshold){
//         //     const taxableAmount2 = threshold - remainingGrossSalaryInTax2
//         //     taxDeductions = CumulativetaxDeductions + (taxableAmount2 * rate)
//         }else{
//             break;
//         }
//     }




    // let remainingGrossSalaryInNHIF = grossSalary
    // for(const {threshold, deduction} of NHIF){
    //     if(remainingGrossSalaryInNHIF > threshold){
    //         NHIFdeductions += deduction
    //         remainingGrossSalaryInNHIF = threshold
    //     } else {
    //         break;
    //     }
    // }

    // for(const {threshold, deduction} of NSSF){
    //     if(grossSalary > threshold){
    //         NSSFdeductions += deduction
    //         grossSalary = 0
    //     } else {
    //         break;
    //     }
    // }
    totalDeductions = taxDeductions + NHIFdeductions + NSSFdeductions
    netSalary = grossSalary - totalDeductions
    


    return {
        grossSalary: grossSalary,
        netSalary: netSalary,
        totalDeductions: totalDeductions
    }

}

console.log(calculateNetPay(70000,2000,3000))

