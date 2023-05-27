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
      calc: (values) => {
        console.log(values);
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
      calc: (values) => {
        console.log(values);
      }
    }
          
         
          
        


    



  



















    }
  };


  

export default app_config;
