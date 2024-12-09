import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ChartData } from '../../utils/Types';

ChartJS.register(ArcElement, Tooltip, Legend);

const GraphDoughnut = () => {
    const [chartData, setChartData] = useState<ChartData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/Career Search Agency/admin.php?action=get_employment_type');
                const data = await response.json();
                if (data.success) {
                    const labels = Object.keys(data.counts); // Full-time, Part-time
                    const values = Object.values(data.counts) as number[]; // Corresponding counts

                    setChartData({
                        labels: labels,
                        datasets: [
                            {
                                label: 'Employment Types',
                                data: values,
                                backgroundColor: ['#3498db', '#e67e22'], // Colors for Full-time and Part-time
                                borderColor: ['#2980b9', '#d35400'],
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
        <div className="doughnut-graph">
            {chartData ? (
                <Doughnut data={chartData} />
            ) : (
                <p>Loading chart data...</p>
            )}
        </div>
    );
};

export default GraphDoughnut;
