import { BarChart, type BarLabelProps } from '@mui/x-charts/BarChart';
import { useAnimate } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { interpolateObject } from '@mui/x-charts-vendor/d3-interpolate';
import type { HighlightScope } from '@mui/x-charts/context';

interface DataProps {
    chartData: {
        id: string;
        xAxisData: {
            data: string[];
        }[];
        seriesData: {
            data: number[];
            label?: string;
            color?: string;
            hidden?: boolean;
        }[];
    };
    label: string ;
    yAxisConfig: {
        opacity: number;
        disableLine: boolean;
        disableTicks : boolean;
    };
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

function BarLabel(props: BarLabelProps) {
    const {
        x,
        y,
        width,
        yOrigin,
        skipAnimation,
        ...otherProps
    } = props;

    const animatedProps = useAnimate(
        { x: x + width / 2, y: y - 8 },
        {
            initialProps: { x: x + width / 2, y: yOrigin },
            createInterpolator: interpolateObject,
            transformProps: (p) => p,
            applyProps: (element: SVGTextElement, p) => {
                element.setAttribute('x', p.x.toString());
                element.setAttribute('y', p.y.toString());
            },
            skip: skipAnimation,
        },
    );

    return (
        <Text {...otherProps} textAnchor="middle" {...animatedProps} />
    );
}

const highlightScope: HighlightScope = {
  highlight: 'series',
  fade: 'global',
};

const ChartBar_02 = ({ chartData, label, yAxisConfig }: DataProps) => {

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
                disableTicks: yAxisConfig.disableTicks,
                labelStyle: {
                    fontSize: 14,
                    fontWeight: 'bold',
                    fill: 'var(--colors-06)',
                },
            }
        ],
        borderRadius: 3
    }

    return (
        <div className="h-full w-full overflow-auto">
            <BarChart
                height={350}
                xAxis={[{
                    id: chartData.id,
                    data: chartData.xAxisData[0].data,
                    scaleType: 'band',
                    categoryGapRatio: 0.2,
                    tickLabelStyle: {
                        angle: -90,
                        textAnchor: 'end',
                        fontSize: 10,
                        fontWeight: 'bold',
                        fill: 'var(--colors-06)',
                    },
                    height: 50
                }]}
                series={
                    chartData.seriesData.filter(s => !s.hidden)
                    .map(s => ({ ...s, highlightScope }))
                }
                // barLabel="value"
                slots={{
                    barLabel: BarLabel
                }}
                skipAnimation={false}
                {...chartSetting}
            />

        </div>
    );
}

export default ChartBar_02;
