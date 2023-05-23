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
        name: "mean",
        description: "mean",
        icon: "mean",
        type: "statistical",
        calc: (values) => {
          console.log(values);
        }
      },
      median: {
        name: "median",
        description: "median",
        icon: "median",
        type: "statistical",
        calc: (values) => {
          console.log(values);
        }
      }
    }
  };
  
  export default app_config;
  