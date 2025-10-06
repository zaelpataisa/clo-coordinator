import { LineChart } from '@mui/x-charts';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import type { MarkLabelProps } from '@mui/x-charts';
import { styled } from '@mui/material/styles';
import type { HighlightScope } from '@mui/x-charts/context';


interface DataProps {
    label: string;
    chartData: {
        id: string
        xAxisData: string[]
        seriesData: {
            data: number[];
            label?: string;
            color?: string;
            hidden?: boolean;
        }[];
    };
    yAxisConfig: {
        opacity: number;
        disableLine: boolean;
    };
    lineDesign: {
        area: boolean;
    }
}

const Text = styled('text')(({ theme }) => ({
    ...theme?.typography?.body2,
    stroke: 'none',
    fill: (theme.vars || theme)?.palette?.text?.primary,
    transition: 'opacity 0.2s ease-in, fill 0.2s ease-in',
    textAnchor: 'middle',
    dominantBaseline: 'central',
    pointerEvents: 'none',
}));

function PointLabel(props: MarkLabelProps) {
    const { x, y, value } = props;

    return (
        <Text x={x} y={y - 15}>
            {value}
        </Text>
    );
}

const highlightScope: HighlightScope = {
  highlight: 'series',
  fade: 'series',
};

const ChartLine_01 = ({ label, chartData, yAxisConfig, lineDesign }: DataProps) => {
    const chartSetting = {
        yAxis: [
            {
                label: label,
                width: 60,
                tickLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                    fill: 'var(--colors-06)',
                    opacity: yAxisConfig.opacity,
                },
                disableLine: yAxisConfig.disableLine,
                labelStyle: {
                    fontSize: 14,
                    fontWeight: 'bold',
                    fill: 'var(--colors-06)'
                },
            }
        ]
    }

    return (
        <>
            <LineChart
                height={350}
                xAxis={[{
                    id: chartData.id,
                    data: chartData.xAxisData,
                    scaleType: 'point',
                    tickLabelStyle: {
                        angle: -90,
                        textAnchor: 'end',
                        fontSize: 10,
                        fontWeight: 'bold',
                        fill: 'var(--colors-06)'
                    },
                    height: 50
                }]}
                series={
                    chartData.seriesData.filter(s => !s.hidden)
                    .map(s => ({
                        ...s,
                        highlightScope,
                        area: lineDesign.area,
                        showMark: false,
                        curve: 'natural'
                    }))
                }
                {...chartSetting}
            />
        </>
    );
}

export default ChartLine_01;
