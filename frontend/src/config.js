import { zTest } from './toolFunctions';
import { tTestEqualVariance } from './toolFunctions';
import { rank } from './toolFunctions';
import { anovaSingleFactor } from './toolFunctions';
import { exponentialSmoothing } from './toolFunctions';
import { anovaTwoFactorReplication } from './toolFunctions';
import { fourierAnalysis } from './toolFunctions';
import { anovaTwoFactorWithoutReplication } from './toolFunctions';
import { tTest } from './toolFunctions';
import { tTestUnequalVariance } from './toolFunctions';
import { fTest } from './toolFunctions';
import { calculateCovariance, calculateKurtosis, calculateMean, calculateMedian, calculateMode, calculateSkewness, calculateVariance, movingAverage } from './toolFunctions';

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
          name: 'Input Range',
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Grouped By',
          category: 'Input',
          type: 'radio',
          options: ['Columns', 'Rows'],
          default: 'Columns',
          description: 'values',
          required: true
        },
        {
          name: 'Labels in First Row',
          category: 'Input',
          type: 'checkbox',
          description: 'values',
          required: false
        },
        {
          name: 'Summary Statistics',
          category: 'Output',
          type: 'checkbox',
          description: 'values',
          required: false
        },
        {
          name: 'Confidence level for Mean',
          category: 'Output',
          type: 'checkbox',
          description: 'values',
          required: false,
          requireInputbox: {
            type: 'text',
            defaultValue: '0.95'
          }
        },
        {
          name: 'Kth Largest',
          category: 'Output',
          type: 'checkbox',
          description: 'values',
          required: false,
          requireInputbox: {
            type: 'text',
            defaultValue: '1'
          }
        },
        {
          name: 'Kth Smallest',
          category: 'Output',
          type: 'checkbox',
          description: 'values',
          required: false,
          requireInputbox: {
            type: 'text',
            defaultValue: '1'
          }
        }
      ],
      calc: (arr1) => {
        let mean = calculateMean(arr1);
        let median = calculateMedian(arr1);
        let mode = calculateMode(arr1);
        let variance = calculateVariance(arr1);
        let stError = Math.sqrt(variance / arr1.length);
        let standardDeviation = Math.sqrt(variance);
        let kurtosis = calculateKurtosis(arr1);
        let skewness = calculateSkewness(arr1);
        let min = Math.min(...arr1);
        let max = Math.max(...arr1);
        let range = max - min;
        let sum = arr1.reduce((a, b) => a + b, 0);
        let count = arr1.length;
        return [mean, stError, median, mode, standardDeviation, variance, kurtosis, skewness, range, min, max, sum, count];
      },
      outputFormat: [
        {
          name: 'Mean'
        },
        {
          name: 'Median'
        },
        {
          name: 'Mode'
        },
        {
          name: 'Variance'
        },
        {
          name: 'Standard Error'
        },
        {
          name: 'Standard Deviation'
        },
        {
          name: 'Kurtosis'
        },
        {
          name: 'Skewness'
        },
        {
          name: 'Range'
        },
        {
          name: 'Min'
        },
        {
          name: 'Max'
        },
        {
          name: 'Sum'
        },
        {
          name: 'Count'
        }
      ]
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
      calc: (x, y) => {
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
            { label: 'Rows', value: 'option2' }
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

    // covariance done
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
            { label: 'Rows', value: 'option2' }
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
        let Covariance = calculateCovariance(array1, array2);
        return [Covariance];
      },

      outputFormat: [
        {
          name: 'Covariance'
        }
      ]
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
        let exponentialSmooth = exponentialSmoothing(data, alpha);
        return [exponentialSmooth];
      },
      outputFormat: [
        {
          name: 'Exponential Smoothing'
        }
      ]
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
      calc: (array, windowSize) => {
        let movingAvg = movingAverage(array, windowSize);
        return [movingAvg];
      },
      outputFormat: [
        {
          name: 'Moving Average'
        }
      ]
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
      calc: (sample1, sample2) => {
        let fTest = fTest(sample1, sample2);
        return [fTest];
      },
      outputFormat: [
        {
          name: 'f-Test Two-Sample for Variances'
        }
      ]
    },

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
      calc: (array, bins) => {
        let histogram = histogram(array, bins);
        return [histogram];
      },
      outputFormat: [
        {
          name: 'Histogram'
        }
      ]
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
      calc: (array, windowSize) => {
        let movingAvg = movingAverage(array, windowSize);
        return [movingAvg];
      },
      outputFormat: [
        {
          name: 'Moving Average'
        }
      ]
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
        }
      ],
      calc: (array) => {
        let fourier = fourierAnalysis(array);
        return [fourier];
      },
      outputFormat: [
        {
          name: 'Fourier Analysis'
        }
      ]
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
          placeholder: 'Enter Range Here'
        },
        {
          name: 'Numbers of random numbers',
          type: 'number',
          description: 'values',
          placeholder: 'Enter Range Here'
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
      calc: (min, max) => {
        let random = random(min, max);
        return [random];
      },
      outputFormat: [
        {
          name: 'Random Number Generation'
        }
      ]
    },

    // ANOVA single factor
    Anovasinglefactor: {
      name: 'Anova single factor',
      description: 'Anova single factor',
      icon: 'Anovasinglefactor',
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
          name: 'Grouped by',
          type: 'radio',
          description: 'this is radio',
          required: true,
          options: [
            { key: 'Columns', value: 'columns' },
            { key: 'Rows', value: 'rows' }
          ]
        },
        {
          name: 'Labels in the first row',
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
      calc: (data) => {
        let anova = anovaSingleFactor(data);
        return [anova];
      },
      outputFormat: [
        {
          name: 'Anova single factor'
        }
      ]
    },
    // ANOVA two factor with replication
    Anovatwofactorwithreplication: {
      name: 'Input Range',
      description: 'Input Range',
      icon: 'InputRange',
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
          name: 'Rows per sample',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
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
      calc: (data) => {
        let anova2 = anovaTwoFactorReplication(data);
        return [anova2];
      },

      outputFormat: [
        {
          name: 'Anova two factor with replication'
        }
      ]
    },

    // ANOVA two factor without replication
    Anovatwofactorwithoutreplication: {
      name: 'Anova two factor without replication',
      description: 'Anova two factor without replication',
      icon: 'Anovatwofactorwithoutreplication',
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
          name: 'Rows per sample',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
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
      calc: (data) => {
        let anova3 = anovaTwoFactorWithoutReplication(data);
        return [anova3];
      },
      outputFormat: [
        {
          name: 'Anova two factor without replication'
        }
      ]
    },

    // rank and percentile

    Rankandpercentile: {
      name: 'Rank and percentile',
      description: 'Rank and percentile',
      icon: 'Rankandpercentile',
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
          name: 'Groups',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
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
      calc: (array, p) => {
        let rank = rank(array, p);
        return [rank];
      },
      outputFormat: [
        {
          name: 'Rank and percentile'
        }
      ]
    },

    // sampling
    sample: {
      name: 'Sampling',
      description: 'Sampling',
      icon: 'Sampling',
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
          name: 'labels',
          type: 'checkbox',
          description: 'this is checkbox',
          required: true
        },
        {
          name: 'Sampling Method',
          category: 'input',
          type: 'radio',
          description: 'this is radio',
          required: true,
          options: ['periodic', 'random']
        }
      ],
      calc: (data) => {
        let sample = sample(data);
        return [sample];
      },
      outputFormat: [
        {
          name: 'Sampling'
        }
      ]
    },

    // t test
    ttest: {
      name: 'T test',
      description: 'T test',
      icon: 'Ttest',
      type: 'statistical',
      inputs: [
        {
          name: 'input 1 range',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'input 2 range',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Hypothesized Mean Difference',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Labels',
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
      calc: (data) => {
        let ttest = tTest(data);
        return [ttest];
      }
    },

    //  t-test assuming equal variances
    ttestEqualVariance: {
      name: 'T test assuming equal variances',
      description: 'T test assuming equal variances',
      icon: 'TtestEqualVariance',
      type: 'statistical',
      inputs: [
        {
          name: 'input 1 range',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'input 2 range',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Hypothesized Mean Difference',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Labels',
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
      calc: (data) => {
        let ttest2 = tTestEqualVariance(data);
        return [ttest2];
      }
    },

    // t-test assuming unequal variances
    ttestUnequalVariance: {
      name: 'T test assuming unequal variances',
      description: 'T test assuming unequal variances',
      icon: 'TtestUnequalVariance',
      type: 'statistical',
      inputs: [
        {
          name: 'input 1 range',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'input 2 range',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Hypothesized Mean Difference',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',

          required: true
        },
        {
          name: 'Labels',
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
      calc: (data) => {
        let ttest3 = tTestUnequalVariance(data);
        return [ttest3];
      }
    },

    // z-test
    ztest: {
      name: 'Z test',
      description: 'Z test',
      icon: 'Ztest',
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
          name: 'Hyperthesized mean difference',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Variable 1 Variance (known)',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Variable 2 Variance (known)',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Labels',

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

      calc: (array1, array2) => {
        let ztest = zTest(array1, array2);
        return [ztest];
      }
    }
  }
};

export default app_config;
