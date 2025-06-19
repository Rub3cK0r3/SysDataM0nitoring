import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

export default function MetricsChart({ data }) {
    const chartData = {
        labels: data.map((_, i) => i),
        datasets: [
            {
                label: 'CPU (%)',
                data,
                borderColor: 'blue',
                backgroundColor: 'lightblue',
            },
        ],
    }

    return <Line data={chartData} />
}