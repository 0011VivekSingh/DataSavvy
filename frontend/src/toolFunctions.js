function correlation(x, y) {
    // Calculate the means of x and y
    const xMean = x.reduce((acc, val) => acc + val, 0) / x.length;
    const yMean = y.reduce((acc, val) => acc + val, 0) / y.length;
  
    // Calculate the standard deviations of x and y
    const xStdDev = Math.sqrt(
      x.reduce((acc, val) => acc + Math.pow(val - xMean, 2), 0) / (x.length - 1)
    );
    const yStdDev = Math.sqrt(
      y.reduce((acc, val) => acc + Math.pow(val - yMean, 2), 0) / (y.length - 1)
    );
  
    // Calculate the correlation coefficient
    const sumOfProducts = x.reduce((acc, val, i) => acc + ((val - xMean) * (y[i] - yMean)), 0);
    const correlationCoefficient = sumOfProducts / ((x.length - 1) * xStdDev * yStdDev);
  
    return correlationCoefficient;
  }


//   anova two factor with replication






function twoWayANOVA(data, factor1, factor2, replication) {
  // Calculate the mean for each factor combination
  const means = {};
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const f1Value = row[factor1];
    const f2Value = row[factor2];
    if (!means[f1Value]) means[f1Value] = {};
    if (!means[f1Value][f2Value]) means[f1Value][f2Value] = [];
    means[f1Value][f2Value].push(row[replication]);
  }
  for (let f1Value in means) {
    for (let f2Value in means[f1Value]) {
      means[f1Value][f2Value] = mean(means[f1Value][f2Value]);
    }
  }

  // Calculate the total mean
  const totalMean = mean(data.map(row => row[replication]));

  // Calculate the sums of squares for each factor and interaction
  let ssFactor1 = 0;
  let ssFactor2 = 0;
  let ssInteraction = 0;
  let ssError = 0;
  for (let f1Value in means) {
    for (let f2Value in means[f1Value]) {
      const n = means[f1Value][f2Value].length;
      const f1Mean = mean(means[f1Value][f2Value]);
      ssFactor1 += n * Math.pow(f1Mean - totalMean, 2);
      const f2Mean = mean(data.filter(row => row[factor2] === f2Value).map(row => row[replication]));
      ssFactor2 += n * Math.pow(f2Mean - totalMean, 2);
      ssInteraction += n * Math.pow(f1Mean - f2Mean, 2);
      ssError += sum(means[f1Value][f2Value].map(x => Math.pow(x - f1Mean, 2)));
    }
  }

  // Calculate the degrees of freedom for each factor and interaction
  const dfFactor1 = Object.keys(means).length - 1;
  const dfFactor2 = Object.keys(means[Object.keys(means)[0]]).length - 1;
  const dfInteraction = dfFactor1 * dfFactor2;
  const dfError = data.length - 1 - dfFactor1 - dfFactor2 - dfInteraction;

  // Calculate the mean squares for each factor and interaction
  const msFactor1 = ssFactor1 / dfFactor1;
  const msFactor2 = ssFactor2 / dfFactor2;
  const msInteraction = ssInteraction / dfInteraction;
  const msError = ssError / dfError;

  // Calculate the F-statistics for each factor and interaction
  const fFactor1 = msFactor1 / msError;
  const fFactor2 = msFactor2 / msError;
  const fInteraction = msInteraction / msError;

  // Calculate the p-values for each F-statistic
  const pFactor1 = 1 - jStat.centralF.cdf(fFactor1, dfFactor1, dfError);
  const pFactor2 = 1 - jStat.centralF.cdf(fFactor2, dfFactor2, dfError);
  const pInteraction = 1 - jStat.centralF.cdf(fInteraction, dfInteraction, dfError);

  // Return the results
  return {
    ssFactor1,
    dfFactor1,
    msFactor1,
    fFactor1,
  };
}

// anova two factor without replication
function anovaTwoFactorWithoutReplication(data) {
  const k = data.length; // number of levels of factor A
  const n = data[0].length; // number of observations per level of factor A
  const sums = [0, 0, 0, 0]; // sum of observations, sum of observations squared, sum of observations by column, sum of observations by row
  let grandTotal = 0;

  // calculate the sums and grand total
  for (let i = 0; i < k; i++) {
    const row = data[i];
    let rowSum = 0;

    for (let j = 0; j < n; j++) {
      const observation = row[j];
      sums[0] += observation;
      sums[1] += Math.pow(observation, 2);
      sums[2 + j] += observation;
      rowSum += observation;
      grandTotal += observation;
    }

    sums[2 + n + i] = rowSum;
  }

  // calculate the sums of squares
  const ssA = Math.pow(sums[2 + n] / k, 2) * n;
  const ssB = Math.pow(sums[2] / n, 2) * k;

  let ssTotal = 0;
  let ssRows = 0;
  let ssCols = 0;

  for (let i = 0; i < k; i++) {
    const rowSum = sums[2 + n + i];
    ssRows += Math.pow(rowSum, 2) / n;
    for (let j = 0; j < n; j++) {
      const observation = data[i][j];
      const colSum = sums[2 + j];
      const expectedValue = (rowSum + colSum) / (2 * n);
      ssCols += Math.pow(observation - expectedValue, 2);
      ssTotal += Math.pow(observation - grandTotal / (k * n), 2);
    }
  }

  // calculate degrees of freedom
  const dfA = k - 1;
  const dfB = n - 1;
  const dfRows = k - 1;
  const dfCols = n - 1;
  const dfTotal = k * n - 1;

  // calculate mean squares
  const msA = ssA / dfA;
  const msB = ssB / dfB;
  const msRows = ssRows / dfRows;
  const msCols = ssCols / dfCols;
  const msError = ssTotal / dfTotal;

  // calculate F-statistics
  const fA = msA / msError;
  const fB = msB / msError;

  // calculate p-values
  const pA = 1 - jStat.centralF.cdf(fA, dfA, dfTotal);
  const pB = 1 - jStat.centralF.cdf(fB, dfB, dfTotal);

  return {
    "dfA": dfA,
    "dfB": dfB,
    "dfRows": dfRows,
    "dfCols": dfCols,
    "dfTotal": dfTotal,
    "ssA": ssA,
    "ssB": ssB,
    "ssRows": ssRows,
    "ssCols": ssCols,
    "ssError": ssTotal - ssA - ssB - ssRows - ssCols,
    "msA": msA,
    "msB": msB,
    "msRows": msRows
  };}

  // Covariance
  function covariance(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      throw new Error('Arrays must have the same length');
    }
   const n = arr1.length;
    const mean1 = arr1.reduce((acc, val) => acc + val, 0) / n;
    const mean2 = arr2.reduce((acc, val) => acc + val, 0) / n;
   let cov = 0;
    for (let i = 0; i < n; i++) {
      cov += (arr1[i] - mean1) * (arr2[i] - mean2);
    }
  
    return cov / (n - 1);
  }






  // Correlation
  function calculateCorrelation(arr1, arr2) {
    // Check if arrays have the same length
    if (arr1.length !== arr2.length) {
      throw new Error('Input arrays must have the same length');
    }
    
    const n = arr1.length;
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumX2 = 0;
    let sumY2 = 0;
  
    for (let i = 0; i < n; i++) {
      const x = arr1[i];
      const y = arr2[i];
  
      sumX += x;
      sumY += y;
      sumXY += x * y;
      sumX2 += x ** 2;
      sumY2 += y ** 2;
    }
  
    const numerator = n * sumXY - sumX * sumY;
    const denominator = Math.sqrt((n * sumX2 - sumX ** 2) * (n * sumY2 - sumY ** 2));
    
    if (denominator === 0) {
      return 0; // If denominator is zero, return zero to avoid division by zero error
    }
  
    return numerator / denominator;
  }
  
  // Example usage:
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [5, 4, 3, 2, 1];
  const correlation = calculateCorrelation(arr1, arr2);
  console.log(correlation);


  // median
  
    function calculateMedian(numbers) {
      // Sort the array in ascending order
      const sortedNumbers = numbers.sort((a, b) => a - b);
      
      const length = sortedNumbers.length;
      const middleIndex = Math.floor(length / 2);
    
      if (length % 2 === 0) {
        // If the array length is even, calculate the average of the two middle values
        return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
      } else {
        // If the array length is odd, return the middle value
        return sortedNumbers[middleIndex];
      }
    }


    exponentialSmoothing = (data, alpha) => {
      const result = [data[0]];
      for (let i = 1; i < data.length; i++) {
        result.push(alpha * data[i] + (1 - alpha) * result[i - 1]);
      }
      return result;
    }
    


  
  
  
