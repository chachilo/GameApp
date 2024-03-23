import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const data = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  datasets: [
    {
      data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      strokeWidth: 2
    }
  ]
};

const VideoGameSalesChart = () => {
  return (
    <View style={{ borderRadius: 16, margin: 20 }}>
      <LineChart
        data={data}
        width={300}
        height={220}
        yAxisLabel=""
        yAxisSuffix="k"
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        bezier
        style={{ borderRadius: 16 }}
      />
    </View>
  );
};

export default VideoGameSalesChart;
