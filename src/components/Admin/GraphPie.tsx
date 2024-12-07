import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { ChartData } from '../../utils/Types'

ChartJS.register(ArcElement, Tooltip, Legend);

const GraphPie = () => {
    const [chartData, setChartData] = useState<ChartData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/Career Search Agency/admin.php?action=get_approve_reject');
                const data = await response.json();
                if (data.success) {
                    const labels = Object.keys(data.counts);
                    const values = Object.values(data.counts) as number[];

                    setChartData({
                        labels: labels,
                        datasets: [
                            {
                                label: 'Post Status Percentages',
                                data: values,
                                backgroundColor: ['#28a745', '#dc3545'],
                                borderColor: ['#218838', '#c82333'],
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
        <div className="pie-graph">
            {chartData ? (
                <Pie data={chartData} />
            ) : (
                <p>Loading chart data...</p>
            )}
        </div>
    );
};

export default GraphPie;
