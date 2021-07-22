import CartBar from './ChartBar'
import './Chart.css'

function Chart(props) {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => 
            <CartBar 
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={totalMaximum} 
                label={dataPoint.label} 
            />)}
        </div>
    )
}

export default Chart
