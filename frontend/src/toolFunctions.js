//   anova two factor with replication

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
  // const pA = 1 - jStat.centralF.cdf(fA, dfA, dfTotal);
  // const pB = 1 - jStat.centralF.cdf(fB, dfB, dfTotal);

  return {
    dfA: dfA,
    dfB: dfB,
    dfRows: dfRows,
    dfCols: dfCols,
    dfTotal: dfTotal,
    ssA: ssA,
    ssB: ssB,
    ssRows: ssRows,
    ssCols: ssCols,
    ssError: ssTotal - ssA - ssB - ssRows - ssCols,
    msA: msA,
    msB: msB,
    msRows: msRows
  };
}

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
function calculateCorrelation(array1, array2) {
  if (array1.length !== array2.length) {
    throw new Error('Array lengths must be equal.');
  }
  const n = array1.length;
  // Calculate the means of the two arrays
  const mean1 = array1.reduce((sum, value) => sum + value, 0) / n;
  const mean2 = array2.reduce((sum, value) => sum + value, 0) / n;

  // Calculate the numerator and denominator for correlation
  let numerator = 0;
  let denominator1 = 0;
  let denominator2 = 0;
  for (let i = 0; i < n; i++) {
    const deviation1 = array1[i] - mean1;
    const deviation2 = array2[i] - mean2;

    numerator += deviation1 * deviation2;
    denominator1 += deviation1 ** 2;
    denominator2 += deviation2 ** 2;
  }
  // Calculate the correlation coefficient
  const correlation = numerator / Math.sqrt(denominator1 * denominator2);
  return correlation;
}

// median
function calculateMedian(array) {
  // Sort the array in ascending order
  const sortedArray = array.slice().sort((a, b) => a - b);
  const length = sortedArray.length;
  const middleIndex = Math.floor(length / 2);
  if (length % 2 === 0) {
    // If the array length is even, calculate the average of the middle two elements
    const median = (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
    return median;
  } else {
    // If the array length is odd, return the middle element
    const median = sortedArray[middleIndex];
    return median;
  }
}

// exponential smoothing
const exponentialSmoothing = (data, alpha) => {
  const result = [data[0]];
  for (let i = 1; i < data.length; i++) {
    result.push(alpha * data[i] + (1 - alpha) * result[i - 1]);
  }
  return result;
};

//covariance
function calculateCovariance(array1 , array2) {
  if (array1.length !== array2.length) {
    throw new Error('Arrays must have the same length');
  }

  const n = array1.length;
  const mean1 = calculateMean(array1);
  const mean2 = calculateMean(array2);
  let covariance = 0;

  for (let i = 0; i < n; i++) {
    const deviation1 = array1[i] - mean1;
    const deviation2 = array2[i] - mean2;
    covariance += deviation1 * deviation2;
  }
  covariance /= n;
  return covariance;
}
function calculateMean(array) {
  const sum = array.reduce((acc, val) => acc + val, 0);
  return sum / array.length;
}

// f-test for two samples for variances
function fTest(array1, array2) {
  const variance1 = calculateVariance(array1);
  const variance2 = calculateVariance(array2);
  const f = variance1 / variance2;
  return f;
}

//fourier analysis
function fourierAnalysis(array) {
  const n = array.length;
  const real = new Array(n);
  const imag = new Array(n);
  for (let i = 0; i < n; i++) {
    real[i] = 0;
    imag[i] = 0;
    for (let j = 0; j < n; j++) {
      real[i] += array[j] * Math.cos((2 * Math.PI * i * j) / n);
      imag[i] += -array[j] * Math.sin((2 * Math.PI * i * j) / n);
    }
  }
  return { real, imag };
}

//histogram
function histogram(array, bins) {
  const n = array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const binWidth = (max - min) / bins;
  const result = new Array(bins).fill(0);
  for (let i = 0; i < n; i++) {
    const bin = Math.floor((array[i] - min) / binWidth);
    if (bin < 0) {
      result[0]++;
    } else if (bin >= bins) {
      result[bins - 1]++;
    } else {
      result[bin]++;
    }
  }
  return result;
}

//moving average
function movingAverage(array, windowSize) {
  const result = [];
  const n = array.length;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    let count = 0;
    for (let j = Math.max(0, i - windowSize + 1); j <= i; j++) {
      sum += array[j];
      count++;
    }
    result.push(sum / count);
  }
  return result;
}

//Random number generation
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
function randomNormal(mean, standardDeviation) {
  let u = 0;
  let v = 0;
  while (u === 0) {
    u = Math.random();
  }
  while (v === 0) {
    v = Math.random();
  }
  const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return mean + standardDeviation * z;
}
function randomExponential(lambda) {
  return -Math.log(1.0 - Math.random()) / lambda;
}
function randomPoisson(lambda) {
  const L = Math.exp(-lambda);
  let k = 0;
  let p = 1;
  do {
    k++;
    p *= Math.random();
  } while (p > L);
  return k - 1;
}

function randomBernoulli(p) {
  return Math.random() < p ? 1 : 0;
}
function randomBinomial(n, p) {
  let x = 0;
  for (let i = 0; i < n; i++) {
    x += randomBernoulli(p);
  }
  return x;
}
function randomUniform(min, max) {
  return Math.random() * (max - min) + min;
}

// Rank and Percentile
function rank(array) {
  const sortedArray = array.slice().sort((a, b) => a - b);
  const ranks = array.slice().map((v) => sortedArray.indexOf(v) + 1);
  return ranks;
}

function percentile(array, p) {
  const ranks = rank(array);
  const n = array.length;
  const percentileIndex = (p / 100) * n - 1;
  if (percentileIndex === Math.floor(percentileIndex)) {
    return array[percentileIndex];
  } else {
    const k = Math.floor(percentileIndex);
    const f = percentileIndex - k;
    return array[k] + f * (array[k + 1] - array[k]);
  }
}


//regression
function linearRegression(x, y) {
  const n = x.length;
  // Calculate sum of x, y, x^2, xy
  let sumX = 0;
  let sumY = 0;
  let sumXSquare = 0;
  let sumXY = 0;
  for (let i = 0; i < n; i++) {
    sumX += x[i];
    sumY += y[i];
    sumXSquare += x[i] * x[i];
    sumXY += x[i] * y[i];
  }
  // Calculate coefficients (slope and intercept)
  const slope = (n * sumXY - sumX * sumY) / (n * sumXSquare - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  // Return the coefficients as an object
  return [
    slope,
    intercept
  ];
}

// sampling
function sample(array, size) {
  const n = array.length;
  const result = new Array(size);
  for (let i = 0; i < size; i++) {
    const j = Math.floor(Math.random() * n);
    result[i] = array[j];
  }
  return result;
}

//t-test for two samples for means
function tTest(array1, array2) {
  const mean1 = calculateMean(array1);
  const mean2 = calculateMean(array2);
  const variance1 = calculateVariance(array1);
  const variance2 = calculateVariance(array2);
  const n1 = array1.length;
  const n2 = array2.length;
  const t = Math.abs(mean1 - mean2) / Math.sqrt(variance1 / n1 + variance2 / n2);
  return t;
}
function calculateVariance(array) {
  const mean = calculateMean(array);
  const n = array.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += (array[i] - mean) ** 2;
  }
  const variance = sum / (n - 1);
  return variance;
}

//t-test assuming equal variances
function tTestEqualVariance(array1, array2) {
  const mean1 = calculateMean(array1);
  const mean2 = calculateMean(array2);
  const variance1 = calculateVariance(array1);
  const variance2 = calculateVariance(array2);
  const n1 = array1.length;
  const n2 = array2.length;
  const pooledVariance = ((n1 - 1) * variance1 + (n2 - 1) * variance2) / (n1 + n2 - 2);
  const t = Math.abs(mean1 - mean2) / Math.sqrt(pooledVariance * (1 / n1 + 1 / n2));
  return t;
}

//t-test assuming unequal variances
function tTestUnequalVariance(array1, array2) {
  const mean1 = calculateMean(array1);
  const mean2 = calculateMean(array2);
  const variance1 = calculateVariance(array1);
  const variance2 = calculateVariance(array2);
  const n1 = array1.length;
  const n2 = array2.length;
  const t = Math.abs(mean1 - mean2) / Math.sqrt(variance1 / n1 + variance2 / n2);
  return t;
}

//z-test for two samples for means
function zTest(array1, array2) {
  const mean1 = calculateMean(array1);
  const mean2 = calculateMean(array2);
  const variance1 = calculateVariance(array1);
  const variance2 = calculateVariance(array2);
  const n1 = array1.length;
  const n2 = array2.length;
  const z = Math.abs(mean1 - mean2) / Math.sqrt(variance1 / n1 + variance2 / n2);
  return z;
}

//ANOVA single factor
function anovaSingleFactor(data) {
  const n = data.length;
  const k = data[0].length;
  const mean = [];
  const variance = [];
  for (let i = 0; i < k; i++) {
    mean.push(calculateMean(data[i]));
    variance.push(calculateVariance(data[i]));
  }
  let sumOfSquaresBetween = 0;
  for (let i = 0; i < k; i++) {
    sumOfSquaresBetween += data[i].length * (mean[i] - calculateMean(mean)) ** 2;
  }
  const degreesOfFreedomBetween = k - 1;
  const meanSquareBetween = sumOfSquaresBetween / degreesOfFreedomBetween;
  let sumOfSquaresWithin = 0;
  for (let i = 0; i < k; i++) {
    sumOfSquaresWithin += (data[i].length - 1) * variance[i];
  }
  const degreesOfFreedomWithin = n - k;
  const meanSquareWithin = sumOfSquaresWithin / degreesOfFreedomWithin;
  const f = meanSquareBetween / meanSquareWithin;
  return f;
}

//ANOVA two factor with replication
function anovaTwoFactorReplication(data) {
  const n = data.length;
  const k = data[0].length;
  const mean = [];
  const variance = [];
  for (let i = 0; i < k; i++) {
    mean.push(calculateMean(data[i]));
    variance.push(calculateVariance(data[i]));
  }
  let sumOfSquaresBetween = 0;
  for (let i = 0; i < k; i++) {
    sumOfSquaresBetween += data[i].length * (mean[i] - calculateMean(mean)) ** 2;
  }
  const degreesOfFreedomBetween = k - 1;
  const meanSquareBetween = sumOfSquaresBetween / degreesOfFreedomBetween;
  let sumOfSquaresWithin = 0;
  for (let i = 0; i < k; i++) {
    sumOfSquaresWithin += (data[i].length - 1) * variance[i];
  }
  const degreesOfFreedomWithin = n - k;
  const meanSquareWithin = sumOfSquaresWithin / degreesOfFreedomWithin;
  const f = meanSquareBetween / meanSquareWithin;
  return f;
}

//ANOVA two factor without replication
function anovaTwoFactorWithoutReplication2(data) {
  const n = data.length;
  const k = data[0].length;
  const mean = [];
  const variance = [];
  for (let i = 0; i < k; i++) {
    mean.push(calculateMean(data[i]));
    variance.push(calculateVariance(data[i]));
  }
  let sumOfSquaresBetween = 0;
  for (let i = 0; i < k; i++) {
    sumOfSquaresBetween += data[i].length * (mean[i] - calculateMean(mean)) ** 2;
  }
  const degreesOfFreedomBetween = k - 1;
  const meanSquareBetween = sumOfSquaresBetween / degreesOfFreedomBetween;
  let sumOfSquaresWithin = 0;
  for (let i = 0; i < k; i++) {
    sumOfSquaresWithin += (data[i].length - 1) * variance[i];
  }
  const degreesOfFreedomWithin = n - k;
  const meanSquareWithin = sumOfSquaresWithin / degreesOfFreedomWithin;
  const f = meanSquareBetween / meanSquareWithin;
  return f;
}

function calculateMode(arr1) {
  let frequencyMap = {};
  let maxFrequency = 0;
  let modes = [];

  // Count the frequency of each element
  for (let i = 0; i < arr1.length; i++) {
    let element = arr1[i];
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    if (frequencyMap[element] > maxFrequency) {
      maxFrequency = frequencyMap[element];
    }
  }

  // Find the elements with maximum frequency
  for (let key in frequencyMap) {
    if (frequencyMap[key] === maxFrequency) {
      modes.push(parseFloat(key)); // Convert key to number if needed
    }
  }

  return modes;
}


const calculateKurtosis = (array) => {
  const n = array.length;
  const mean = calculateMean(array);
  const variance = calculateVariance(array);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += (array[i] - mean) ** 4;
  }
  const kurtosis = (sum / n) / (variance ** 2) - 3;
  return kurtosis;
}

const calculateSkewness = (array) => {
  const n = array.length;
  const mean = calculateMean(array);
  const variance = calculateVariance(array);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += (array[i] - mean) ** 3;
  }
  const skewness = sum / (n * variance ** (3 / 2));
  return skewness;
}

const calculateRange = (array) => {
  const min = Math.min(...array);
  const max = Math.max(...array);
  const range = max - min;
  return range;
}

const calculateMinimum = (array) => {
  const min = Math.min(...array);
  return min;
}
  
const calculateMaximum = (array) => {
  const max = Math.max(...array);
  return max;
}

const calculateSum = (array) => {
  const sum = array.reduce((acc, val) => acc + val, 0);
  return sum;
}

// Z-test for one sample for mean








export {
  anovaTwoFactorWithoutReplication,
  anovaTwoFactorReplication,
  anovaSingleFactor,
  
  calculateCorrelation,
  calculateCovariance,
  calculateMean,
  calculateMedian,
  calculateMode,
  calculateVariance,
  covariance,
  exponentialSmoothing,
  fTest,
  fourierAnalysis,
  histogram,
  tTest,
  tTestEqualVariance,
  tTestUnequalVariance,
  zTest,
  
  linearRegression,
  movingAverage,
  randomBernoulli,
  randomBinomial,
  randomExponential,
  randomFloat,
  rank,
  percentile,
  randomInteger,
  randomNormal,
  randomPoisson,
  sample,
  calculateKurtosis,
  calculateSkewness,
  calculateRange,
  calculateMinimum,
  calculateMaximum,
  calculateSum

  
 
  
};
