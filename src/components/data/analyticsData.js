const generateDailyData = (min, max) => {
  const data = [];
  for (let i = 0; i < 365; i++) {
    const value = parseFloat((Math.random() * (max - min) + min).toFixed(2));
    data.push(value);
  }
  return data;
};

const analyticsData = {
  "Click Through Rate": {
    unit: "%",
    daily: generateDailyData(2.5, 5.0)
  },
  "Total Visitors": {
    unit: "",
    daily: generateDailyData(1000, 5000)
  },
  "Bounce Rate": {
    unit: "%",
    daily: generateDailyData(30, 60)
  },
  "Scroll Depth": {
    unit: "%",
    daily: generateDailyData(40, 80)
  },
  "Conversion Rate": {
    unit: "%",
    daily: generateDailyData(1.0, 3.0)
  },
  "Avg Session Duration": {
    unit: "s",
    daily: generateDailyData(100, 300)
  },
  "Unique Visitors": {
    unit: "",
    daily: generateDailyData(800, 3500)
  },
  "Avg Pages / Session": {
    unit: "",
    daily: generateDailyData(1.5, 3.5)
  }
};

export default analyticsData;
