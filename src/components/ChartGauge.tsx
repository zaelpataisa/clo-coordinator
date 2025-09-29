import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { styled } from '@mui/material/styles';
import { formatNumber } from 'src/utils/FormatNumbers';

const StyledText = styled('text')(({ theme }) => ({
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 24,
  fontWeight: 600,
  fill: '#ffffff',
}));

function GaugeValueText(props: { value: number | null }) {
  const { value } = props;
  if (value === null) {
    return null;
  }
  return (
    <StyledText>
      {value.toFixed(2)}
    </StyledText>
  );
}

interface DataProps {
  chartData: {
    minValue: number;
    value: number;
    maxValue: number;
    restante: number;
    porcentaje: number;
    porcentajeRestante: number;
    colors: string;
  }
}

const ChartGauge = ({ chartData }: DataProps) => {
  return (
    <>
      <div>
        <Gauge
          value={chartData.value}
          valueMax={chartData.maxValue}
          startAngle={-90}
          endAngle={90}
          width={500}
          height={200}
          
          gauge-slots={{
            valueText: GaugeValueText,
          }}
          sx={{
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: '2rem',
              fontWeight: 'bold',
              transform: 'translate(0px, -3rem)',
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: chartData.colors,
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: 'var(--colors-04)',
            }
          }}
          text={
            ({ value, valueMax }) =>
              value !== null && valueMax
                ? `${formatNumber(chartData.porcentaje)} %`
                : ''
          }
        />
      </div>
    </>
  );
}

export default ChartGauge;
