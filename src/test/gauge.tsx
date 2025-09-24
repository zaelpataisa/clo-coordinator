import React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { styled } from '@mui/material/styles';

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
      {value.toFixed(2)}$
    </StyledText>
  );
}

export function CustomGaugeChart() {
  const value = 12112211.65;
  const valueMax = 15022000;

  return (
    <div style={{ width: '100', margin: 'auto' }}>
      <Gauge
        value={value}
        valueMax={valueMax}
        startAngle={-90}
        endAngle={90}
        width={300}
        height={200}
        
        gauge-slots={{
          valueText: GaugeValueText,
        }}
        sx={{
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: '1.25rem',
            // fontWeight: 'bold',
            transform: 'translate(0px, -2.5rem)',
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: 'var(--colors-03)',
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: 'var(--colors-04)',
          },
        }}
        text={
          ({ value, valueMax }) => 
          `${value} \n ${valueMax}`
        }
      />
    </div>
  );
}