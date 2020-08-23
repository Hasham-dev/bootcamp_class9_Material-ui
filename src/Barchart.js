import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','Aug','Sep','Nov','Dec'],
  datasets: [
    {
      label: 'Users',
      backgroundColor: 'lightBlue',
      borderColor: 'blue',
      borderWidth: 1,
      hoverBackgroundColor: 'lightBlue',
      hoverBorderColor: 'blue',
      data: [88, 59, 80, 81, 80, 70, 60,80,88,80,70]
    }
  ]
};

function Barchart() {
    return (
      <div>
        <h2>Users Yearly Statistics</h2>
        <Bar
          data={data}
          width={100}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  
};

export default Barchart;