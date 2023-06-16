import { calculateCorrelation, linearRegression, zTest } from './toolFunctions';
import { tTestEqualVariance } from './toolFunctions';
import { rank } from './toolFunctions';
import { anovaSingleFactor } from './toolFunctions';
import { exponentialSmoothing } from './toolFunctions';
import { anovaTwoFactorReplication } from './toolFunctions';
import { fourierAnalysis } from './toolFunctions';
import { anovaTwoFactorWithoutReplication } from './toolFunctions';
import { tTest } from './toolFunctions';
import { histogram } from './toolFunctions';
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
      calc: (inputsArray) => {
        let arr1 = inputsArray[0].value;

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
          type: 'array',
          category: 'Input',
          description: 'independent variable',
          placeholder: 'Enter X-Range Here',
          required: true
        },
        {
          name: 'Y-Range',
          category: 'Input',
          type: 'array',
          description: 'independent variable',
          placeholder: 'Enter Y-Range Here',
          required: true
        }
      ],
      calc: (inputRange) => {
        const x = inputRange[0].value;
        const y = inputRange[1].value;
        console.log(inputRange);
        const [slope, intercept] = linearRegression(x, y);
        console.log(slope, intercept);
        // Return the coefficients as an object
        return [slope, intercept];
      },
      outputFormat: [
        {
          name: 'Slope'
        },
        {
          name: 'Intercept'
        }
      ]
    },

    // correlation
    correlation: {
      name: 'correlation',
      description: 'correlation analysis',
      icon: 'correlation',
      type: 'statistical',
      inputs: [
        {
          name: 'input range A',
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'input range B',
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Group by',
          category: 'Input',
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
          category: 'Input',
          type: 'checkbox',
          description: 'this is checkbox',
          required: true
        }
      ],
      calc: (inputRange) => {
        let array1 = inputRange[0].value;
        let array2 = inputRange[1].value;
        let correlation = calculateCorrelation(array1, array2);
        return [correlation];
      },
      outputFormat: [
        {
          name: 'Correlation'
        }
      ]
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
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Group by',
          type: 'radio',
          category: 'Input',
          description: 'values',
          options: [
            { label: 'Columns', value: 'option1' },
            { label: 'Rows', value: 'option2' }
          ],
          required: true
        },
        {
          name: 'Labels in the first row',
          category: 'Input',
          type: 'checkbox',
          description: 'this is checkbox',
          required: true
        }
      ],

      calc: (inputRange) => {
        let array1 = inputRange[0].value;
        let array2 = inputRange[1].value;
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
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Damping Factor',
          category: 'Input',
          type: 'number',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Labels',
          category: 'Input',
          type: 'checkbox',
          description: 'this is checkbox',
          required: true
        }
      ],
      calc: (inputRange) => {
        let data = inputRange[0].value;
        let alpha = inputRange[1].value;
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
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Labels in the first row',
          category: 'Input',
          type: 'checkbox',
          description: 'this is checkbox',
          required: true
        },
        {
          name: 'Interval',
          category: 'Input',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        }
      ],
      calc: (inputRange) => {
        let array = inputRange[0].value;
        let windowSize = inputRange[1].value;
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
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Variable 2 range',
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Labels ',
          category: 'Input',

          type: 'checkbox',
          description: 'this is checkbox',
          required: true
        },
        {
          name: 'Alpha',
          category: 'Input',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        }
      ],
      calc: (inputRange) => {
        let sample1 = inputRange[0].value;
        let sample2 = inputRange[1].value;
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
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Bin Range',
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Labels',
          category: 'Input',
          type: 'checkbox',
          description: 'this is checkbox',
          required: true
        }
      ],
      calc: (inputRange) => {
        let array = inputRange[0].value;
        let bins = inputRange[1].value;
        let histogram = histogram(array, bins);
        return [histogram];
      },
      outputFormat: [
        {
          name: 'Histogram'
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
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Labels in the first row',
          category: 'Input',
          type: 'checkbox',
          description: 'this is checkbox',
          required: true
        }
      ],
      calc: (inputRange) => {
        let array = inputRange[0].value;
        let fourier = fourierAnalysis(array);
        return [fourier];
      },
      outputFormat: [
        {
          name: 'Fourier Analysis'
        }
      ]
    },

    ////// Random Number Generation
    RandomNumberGeneration: {
      name: 'Random Number Generation',
      description: 'Random Number Generation',
      icon: 'RandomNumberGeneration',
      type: 'statistical',
      inputs: [
        {
          name: 'Number of variables',
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here'
        },
        {
          name: 'Numbers of random numbers',
          category: 'Input',
          type: 'number',
          description: 'values',
          placeholder: 'Enter Range Here'
        },
        {
          name: 'Distribution',
          category: 'Input',

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
      calc: (InputRange) => {
        let min = InputRange[0].value;
        let max = InputRange[1].value;
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
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Grouped by',
          category: 'Input',
          type: 'radio',
          description: 'this is radio',
          required: true,
          options: ['Columns', 'rows']
        },
        {
          name: 'Labels in the first row',
          category: 'Input',
          type: 'checkbox',
          description: 'this is checkbox',
          required: true
        },
        {
          name: 'Alpha',
          category: 'Input',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        }
      ],
      calc: (inputRange) => {
        let data = inputRange[0].value;

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
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Rows per sample',
          category: 'Input',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Alpha',
          category: 'Input',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        }
      ],
      calc: (inputRange) => {
        let data = inputRange[0].value;
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
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Rows per sample',
          category: 'Input',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Alpha',
          category: 'Input',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        }
      ],
      calc: (inputRange) => {
        let data = inputRange[0].value;

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
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Groups',
          category: 'Input',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Alpha',
          category: 'Input',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        }
      ],
      calc: (inputRange) => {
        let array = inputRange[0].value;
        let p = inputRange[1].value;
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
          category: 'Input',

          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'labels',
          category: 'Input',
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
      calc: (inputRange) => {
        let data = inputRange[0].value;
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
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'input 2 range',
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Hypothesized Mean Difference',
          category: 'Input',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Labels',
          category: 'Input',
          type: 'checkbox',
          description: 'this is checkbox',
          required: true
        },
        {
          name: 'Alpha',
          category: 'Input',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        }
      ],
      calc: (inputRange) => {
        let data = inputRange[0].value;
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
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'input 2 range',
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Hypothesized Mean Difference',
          category: 'Input',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Labels',
          category: 'Input',
          type: 'checkbox',
          description: 'this is checkbox',
          required: true
        },
        {
          name: 'Alpha',
          category: 'Input',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        }
      ],
      calc: (inputRange) => {
        let data = inputRange[0].value;
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
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'input 2 range',
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Hypothesized Mean Difference',
          category: 'Input',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',

          required: true
        },
        {
          name: 'Labels',
          category: 'Input',
          type: 'checkbox',
          description: 'this is checkbox',
          required: true
        },
        {
          name: 'Alpha',
          category: 'Input',
          type: 'number',

          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        }
      ],
      calc: (inputRange) => {
        let data = inputRange[0].value;
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
          category: 'Input',
          type: 'array',
          description: 'values',
          placeholder: 'Enter Range Here',
          required: true
        },

        {
          name: 'Hyperthesized mean difference',
          category: 'Input',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Variable 1 Variance (known)',
          category: 'Input',

          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Variable 2 Variance (known)',
          category: 'Input',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        },
        {
          name: 'Labels',
          category: 'Input',

          type: 'checkbox',
          description: 'this is checkbox',
          required: true
        },
        {
          name: 'Alpha',
          category: 'Input',
          type: 'number',
          description: 'this is number',
          placeholder: 'Enter Range Here',
          required: true
        }
      ],

      calc: (inputRange) => {
        let array1 = inputRange[0].value;
        let array2 = inputRange[1].value;
        let ztest = zTest(array1, array2);
        return [ztest];
      }
    }
  }
}; // end of app_config

export default app_config;
