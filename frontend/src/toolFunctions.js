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


//   regression
    