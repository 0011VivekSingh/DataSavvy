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
      calc: (values) => {
        console.log(values);
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
      calc: (values) => {
        console.log(values);
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
          description: 'this is chwckbox',
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
      calc: (array1, array2) => {
        


      }
    },



          
    
          
         
          
        


    



  



















    }
  };


  

export default app_config;
