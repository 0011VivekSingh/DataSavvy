const app_config = {
  apiUrl: "http://localhost:5000",
  title: "DataSavvy",
  themeColor: "#00a2b7",
  status: {
    login: {
      success: 200,
      fail: 401,
    },
  },

  toolpack: {
    mean: {
      name: "Mean",
      description: "mean",
      icon: "mean",
      type: "statistical",
      inputs: [
        {
          name: "values",
          type: "array",
          description: "values",
          placeholder: "Enter Range Here",
          required: true,
        },
      ],
      calc: (values) => {
        console.log(values);
      },
    },
    median: {
      name: "median",
      description: "median",
      icon: "median",
      type: "statistical",
      inputs: [
        {
          name: "values",
          type: "array",
          description: "values",
          placeholder: "Enter Range Here",
          required: true,
        },
      ],
      calc: (values) => {
        console.log(values);
      },

      regression: {
        name: "Regression",
        description: "regression analysis",
        icon: "",
        type: "forecasting",
        inputs: [
          {
            name: "X-Range",
            section: "Input",
            type: "array",
            description: "independent variable",
            placeholder: "Enter X-Range Here",
            required: true,
          },
          {
            name: "Y-Range",
            section: "Input",
            type: "array",
            description: "independent variable",
            placeholder: "Enter Y-Range Here",
            required: true,
          },
        ],
        calc: (values) => {
          console.log(values);
        },
      },
      correlation: {
        name: "correlation",
        description: "correlation analysis",
        icon: "correlation",
        type: "statistical",
        inputs: [
          {
            name: "input range",
            type: "array",
            description: "values",
            placeholder: "Enter Range Here",
            required: true,
          },
          {
            name: "Group by",
            type: "radio",
            description: "values",
            placeholder: "Enter Range Here",
            required: true,
          },
        ],

        calc: (values) => {
          console.log(values);
        },
      },
    },
  },
};

export default app_config;
