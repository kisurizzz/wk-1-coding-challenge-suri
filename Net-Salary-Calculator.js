const PayeRates = [
    { threshold: 24000, rate: 0.1 },
    { threshold: 32333, rate: 0.25 },
    { threshold: 500000, rate: 0.30 },
    { threshold: 800000, rate: 0.325 },
    { threshold: Infinity, rate: 0.35 },
  ]; // these are the rates for PAYE form KRA in form of an Arry. 
  
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
  ] //these are the NHIF deduction table
  
  
  const NSSF = [
    { threshold: 7000, deduction: 420 },
    { threshold: Infinity, deduction: 2140 },
  ]; // these are deductions for NSSF
  
  function calculatePAYE(grossSalary) {
   
    let taxableIncome = grossSalary;
    let totalPAYE = 0;
  
    for (const { threshold, rate } of PayeRates) { //iterates through the array of tax rates
      
      const taxableInBracket = Math.min(taxableIncome, threshold);
      totalPAYE += taxableInBracket * rate; //Multiplies the taxable income within the bracket by the tax rate and adds it to the totalPAYE accumulator, accumulating PAYE for all brackets.
      taxableIncome -= taxableInBracket; //Subtracts the income already taxed in the current bracket from the remaining taxable income, preparing for the next bracket's calculation.
    }
  
    return totalPAYE;
  }
  
  function calculateNHIF(grossSalary) { // Calculates NHIF deductions depending on the gross salary
    for (const tier of NHIF) {
      if (grossSalary <= tier.threshold) {
        return tier.deduction;
      }
    }
    
    return NHIF[NHIF.length - 1].deduction;
  }
  
  
  
  function calculateNSSF(grossSalary) { // Calculates NSSF deductions depending on the gross salary
    for (const tier of NSSF) {
      if (grossSalary <= tier.threshold) {
        return tier.deduction;
      }
    }
    // Handle case where grossSalary exceeds all NSSF thresholds (use highest deduction)
    return NSSF[NSSF.length - 1].deduction;
  }
  
  function calculateNetSalary(grossSalary) {
    const paye = calculatePAYE(grossSalary);
    const nhifDeduction = calculateNHIF(grossSalary);
    const nssfDeduction = calculateNSSF(grossSalary);
    const netSalary = grossSalary - paye - nhifDeduction - nssfDeduction;
    return netSalary;
  }
  
  
  
  const grossSalary = 300000;
  const netSalary = calculateNetSalary(grossSalary);
  console.log(`Net Salary for gross salary of Ksh ${grossSalary}:`);
  console.log(`  - PAYE: Ksh ${calculatePAYE(grossSalary).toFixed(2)}`);
  console.log(`  - NHIF Deduction: Ksh ${calculateNHIF(grossSalary).toFixed(2)}`);
  console.log(`  - NSSF Deduction: Ksh ${calculateNSSF(grossSalary).toFixed(2)}`);
  console.log(`  - Net Salary: Ksh ${netSalary.toFixed(2)}`);
  
  
  