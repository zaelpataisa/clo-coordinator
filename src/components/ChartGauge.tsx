import GaugeComponent from 'react-gauge-component';

interface DataProps {
  chartData: {
    GaugeWidth: string;
    minValue: number;
    value: number;
    maxValue: number;
    colors: string;
  }
}

const ChartGauge = ({ chartData }: DataProps) => {
  return (
    <>
      <div className={chartData.GaugeWidth}>
        <GaugeComponent
          type="semicircle"
          arc={{
            colorArray: [chartData.colors, 'var(--colors-04)'],
            padding: 0.02,
            subArcs:
            [
              { limit: chartData.value },
              { limit: chartData.maxValue }
            ]
          }}
          pointer={{type: "blob", animationDelay: 0 }}
          minValue={ chartData.minValue }
          value={ chartData.value }
          maxValue={ chartData.maxValue }
          labels={{
            valueLabel: {
                formatTextValue: value => value + '$',
                style: {
                    fontSize: "35px",
                    fill: chartData.colors,
                    textShadow: 'none',
                    fontWeight: 'bold'
                }
            }
          }}
        />
      </div>
    </>
  );
}

export default ChartGauge;
