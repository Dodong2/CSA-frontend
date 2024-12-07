import { useState, useEffect } from "react";
import { Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from "chart.js";
import { Bar } from "react-chartjs-2";
import { CollarData, ChartData } from '../../utils/Types'

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graphs = () => {
    const [chartData, setChartData] = useState<ChartData | null>(null);

    //Hooks
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost/Career Search Agency/admin.php?action=get_approve_collar');
            const data = await response.json();
            if (data.success) {
              const labels = data.collars.map((item: CollarData) => item.collar);
              const values = data.collars.map((item: CollarData) => item.count);
    
              setChartData({
                labels: labels,
                datasets: [
                  {
                    label: 'Number of Job Posts by Collar',
                    data: values,
                    backgroundColor: ['#2e86c1', '#2ecc71', '#666666', '#FF6384', '#FFFBF7'],
                    borderColor: ['#1B4F72', '#27AE60', '#4D4D4D', '#C70039', '#F1C40F'],
                    borderWidth: 1,
                  },
                ],
              });
            }
          } catch (error) {
            console.error('Error fetching chart data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <>
     <div className="bar-graph">
      {chartData ? (
        <Bar data={chartData}  />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
    </>
  );
};

export default Graphs;
