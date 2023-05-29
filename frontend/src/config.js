import { calculateMean, calculateMedian, calculateMode } from "./toolFunctions";

const app_config = {
  apiUrl: 'http://localhost:5000',
  title: 'DataSavvy',
  themeColor: '#00a2b7',
  status: {
    login: {
      success: 200,
      fail: 401
    }
  },

  toolpack: {
    DescriptiveStatistics: {
      name: 'Descriptive Statistics',
      description: 'Descriptive Statistics',
      icon: 'descriptiveStatistics',
      type: 'statistical',
      inputs: [
        {
          name: 'values',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        }
      ],
      calc: (arr1) => {
        let mean =  calculateMean(arr1);
        let median = calculateMedian(arr1);
        let mode = calculateMode(arr1);
        return [mean, median, mode];
      },
      outputFormat: [
        {
          name : 'Mean'
        },
        {
          name : 'Median'
        },
        {
          name : 'Mode'
        }
      ]
    },
    mean: {
      name: 'Mean',
      description: 'mean',
      icon: 'mean',
      type: 'statistical',
      inputs: [
        {
          name: 'values',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        }
      ],
      calc: (arr1) => {
        let sum = 0;
        arr1.forEach((num) => (sum += num));
        return sum / arr1.length;
      }
    },



    median: {
      name: 'median',
      description: 'median',
      icon: 'median',
      type: 'statistical',
      inputs: [
        {
          name: 'values',
          type: 'array',
          description: 'this is median',
          placeholder: 'Enter Range Here',
          required: true
        }
      ],
      calc: (array) => {
        
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
    },

    mode: {
      name: 'mode',
      description: 'mode',
      icon: 'mode',
      type: 'statistical',
      inputs: [
        {
          name: 'values', 
          type: 'array',
          description: 'this is mode',
          placeholder: 'Enter Range Here',
          required: true
        }
      ],
      calc: (array) => {
        // Count the frequency of each value in the array
        const frequencyMap = new Map();
        let maxFrequency = 0;
      
        array.forEach((value) => {
          const frequency = (frequencyMap.get(value) || 0) + 1;
          frequencyMap.set(value, frequency);
      
          if (frequency > maxFrequency) {
            maxFrequency = frequency;
          }
        });
      
        // Find the values with the maximum frequency (the mode(s))
        const modeValues = [];
        frequencyMap.forEach((frequency, value) => {
          if (frequency === maxFrequency) {
            modeValues.push(value);
          }
        });
      
        return modeValues;
      }
      
    },
// regression
    regression: {
      name: 'Regression',
      description: 'regression analysis',
      icon: 'regression',
      type: 'forecasting',
      inputs: [
        {
          name: 'X-Range',
          section: 'Input',
          type: 'array',
          description: 'independent variable',
          placeholder: 'Enter X-Range Here',
          required: true
        },
        {
          name: 'Y-Range',
          section: 'Input',
          type: 'array',
          description: 'independent variable',
          placeholder: 'Enter Y-Range Here',
          required: true
        }
      ],
      calc: (x,y) => {
         {
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
          return {
            slope,
            intercept
          };
        }
      }
    },

    // correlation
    correlation: {
      name: 'correlation',
      description: 'correlation analysis',
      icon: 'correlation',
      type: 'statistical',
      inputs: [
        {
          name: 'input range',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Group by',
          type: 'radio',
          description: 'values',
          options: [
            { label: 'Columns', value: 'option1' },
            { label: 'Rows', value: 'option2' },
         
          ],
          required: true
        },
        {
          name: 'Labels in the first row',


          type: 'checkbox',
          description: 'this is checkbox',
          required: true
        }
      ],
      calc: (array1, array2) => {
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
    },

    // covariance
    covariance: {
      name: 'covariance',
      description: 'covariance analysis',
      icon: 'covariance',
      type: 'statistical',
      inputs: [
        {
          name: 'input range',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Group by',
          type: 'radio',
          description: 'values',
          options: [
            { label: 'Columns', value: 'option1' },
            { label: 'Rows', value: 'option2' },
          ],
          required: true
        },
        {
          name: 'Labels in the first row',
          type: 'checkbox',
          description: 'this is checkbox',
          required: true
        }
      ],
      calc: (arr1, arr2) => {
        
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
      },

        





    // exponential smoothing
    exponentialsmoothing: {

      name: 'Exponential Smoothing',
      description: 'exponential smoothing',
      icon: 'exponentialsmoothing',
      type: 'forecasting',
      inputs: [
        {
          name: 'input range',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Damping Factor',
          type: 'number',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Labels',
          type: 'checkbox',
          description: 'this is checkbox',
          required: true
        }
      ],
      calc: (data, alpha) => {
       
          const result = [data[0]];
          for (let i = 1; i < data.length; i++) {
            result.push(alpha * data[i] + (1 - alpha) * result[i - 1]);
          }
          return result;
        }
      },

      // moving average
      movingaverage: {
        name: 'Moving Average',
        description: 'moving average',
        icon: 'movingaverage',
        type: 'forecasting',
        inputs: [
          {
            name: 'input range',
            type: 'array',
            description: 'values',
            placeholder: 'Enter Range Here',
            required: true
          },
          {
            name: 'Labels in the first row',
            type: 'checkbox',
            description: 'this is checkbox',
            required: true

          
          },
           {
            name: 'Interval',
            type: 'number',
            description: 'this is number',
            placeholder: 'Enter Range Here',
            required: true
          
           }
          ],
        calc: (data, interval) => {
          const result = [];
          for (let i = 0; i < data.length - interval + 1; i++) {
            let sum = 0;
            for (let j = 0; j < interval; j++) {
              sum += data[i + j];
            }
            result.push(sum / interval);
          }
          return result;
        }
      },


// f-test two-sample for variances
ftesttwosampleforvariances: {
  name: 'f-Test Two-Sample for Variances',
  description: 'f-test two-sample for variances',
  icon: 'ftesttwosampleforvariances',
  type: 'statistical',
  inputs: [
    {
      name: 'Variable 1 range',
      type: 'array',
      description: 'values',
      placeholder: 'Enter Range Here',
      required: true
    },
    {
      name: 'Variable 2 range',
      type: 'array',
      description: 'values',
      placeholder: 'Enter Range Here',
      required: true
    },
    {
      name: 'Labels ',
      type: 'checkbox',
      description: 'this is checkbox',
      required: true
    },
    {
      name: 'Alpha',
      type: 'number',
      description: 'this is number',
      placeholder: 'Enter Range Here',
      required: true

    }
  ],
  calc: (sample1,sample2) => {
    function fTestForTwoSampleVariance(sample1, sample2) {
      // Calculate the sample variances
      const variance1 = calculateVariance(sample1);
      const variance2 = calculateVariance(sample2);
      
      // Calculate the F-statistic
      const fStatistic = variance1 / variance2;
      
      // Calculate the degrees of freedom
      const df1 = sample1.length - 1;
      const df2 = sample2.length - 1;
      
      // Calculate the p-value
      const pValue = 2 * (1 - cumulativeDistributionFunction(fStatistic, df1, df2));
      
      // Return the results
      return {
        fStatistic: fStatistic,
        degreesOfFreedom: { numerator: df1, denominator: df2 },
        pValue: pValue
      };
    }
    
    // Helper function to calculate the variance of a sample
    function calculateVariance(sample) {
      const mean = sample.reduce((sum, value) => sum + value, 0) / sample.length;
      const squaredDeviations = sample.map(value => Math.pow(value - mean, 2));
      const variance = squaredDeviations.reduce((sum, value) => sum + value, 0) / (sample.length - 1);
      return variance;
    }
    
    // Helper function to calculate the cumulative distribution function (CDF) for the F-distribution
    function cumulativeDistributionFunction(x, df1, df2) {
      const numerator = Math.pow(df1 * x, df1) * Math.pow(df2, df2);
      const denominator = Math.pow(df1 * x + df2, df1 + df2);
      const quotient = numerator / denominator;
      
      // Approximation using continued fraction expansion
      let cf = 1.0;
      let term = 1.0;
      let i = df2 % 2 === 0 ? 2 : 1;
      while (i <= df2 - 2) {
        term *= df1 + i - 2;
        term *= x;
        cf += term;
        i += 2;
      }
      
      return 1 - quotient * cf;
    }
  }},

  // histogram
  histogram: {
    name: 'Histogram',
    description: 'histogram',
    icon: 'histogram',
    type: 'statistical',
    inputs: [
      {
        name: 'input range',
        type: 'array',
        description: 'values',
        placeholder: 'Enter Range Here',
        required: true
      },
      {
        name: 'Bin Range',
        type: 'number',
        description: 'values',
        placeholder: 'Enter Range Here',
        required: true
      },
      {
        name: 'Labels',
        type: 'checkbox',
        description: 'this is checkbox',
        required: true
      }
    ],
    calc: (array, bins) =>{
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
  },

  // moving average
  movingaverage: {
    name: 'Moving Average',
    description: 'moving average',
    icon: 'movingaverage',
    type: 'forecasting',
    inputs: [
      {
        name: 'input range',
        type: 'array',
        description: 'values',
        placeholder: 'Enter Range Here',
        required: true
      },
      {
        name: 'Labels in the first row',
        type: 'checkbox',
        description: 'this is checkbox',
        required: true
      },
      {
        name: 'Interval',
        type: 'number',
        description: 'this is number',
        placeholder: 'Enter Range Here',
        required: true

      }
    ],
    calc: (array,windowSize) => {
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
  },

  // fourier Analysis
  Fourieranalysis: {
    name: 'Fourier Analysis',
    description: 'Fourier Analysis',
    icon: 'Fourieranalysis',
    type: 'forecasting',
    inputs: [
      {
        name: 'input range',
        type: 'array',
        description: 'values',
        placeholder: 'Enter Range Here',
        required: true
      },
      {
        name: 'Labels in the first row',
        type: 'checkbox',
        description: 'this is checkbox',
        required: true
      },
    ],
    calc: (array) => {
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
  },

  // Random Number Generation
  RandomNumberGeneration: {
    name: 'Random Number Generation',
    description: 'Random Number Generation',
    icon: 'RandomNumberGeneration',
    type: 'statistical',
    inputs: [
      {
        name: 'Number of variables',
        type: 'array',
        description: 'values',
        placeholder: 'Enter Range Here',
      },
      {
        name: 'Numbers of random numbers',
        type: 'number',
        description: 'values',
        placeholder: 'Enter Range Here',


      },
      {
        name: 'Distribution',
        type: 'dropdown',
        description: 'this is dropdown',
        required: true,
        options: [
          { key: 'Normal', value: 'Normal' },
          { key: 'Uniform', value: 'Uniform' },
          { key: 'Bernoulli', value: 'Exponential' },
          { key: 'Binomial', value: 'Gamma' },
          { key: 'Poisson', value: 'poisson' },
          { key: 'Patterned', value: 'patterned' },
          { key: 'Discrete', value: 'discrete' }
          
        ]

      }

    ],
    calc: (min,max) =>{
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }},

    // rank and percentile
    // RankandPercentile: {
    //   name: 'Rank and Percentile',
    //   description: 'Rank and Percentile',
    //   icon: 'RankandPercentile',
    //   type: 'statistical',
    //   inputs: [
    //     {
    //       name: 'input range',

    //       type: 'array',
    //       description: 'values',

    //       placeholder: 'Enter Range Here',
    //       required: true
    //     },
    //     {
    //       name: 'Grouped by',
    //       type: 'radio',
    //       description: 'this is radio',
    //       required: true,
    //       options: [

    //         { key: 'Rank', value: 'Rank' },
    //         { key: 'Percentile', value: 'Percentile' },

    //       ]
    //     },





    




      







    









    
      
      
      
    
    





            
        

        







        
        






          
    
          
         
          
        


    



  



















    }
  };


  

export default app_config;
