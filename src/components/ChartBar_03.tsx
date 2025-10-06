import { BarChart, type BarLabelProps, type BarProps } from '@mui/x-charts/BarChart';
import { useAnimate, useAnimateBar, useDrawingArea } from '@mui/x-charts/hooks';
import { styled, useTheme } from '@mui/material/styles';
import { interpolateObject } from '@mui/x-charts-vendor/d3-interpolate';
import type { HighlightScope } from '@mui/x-charts/context';
import * as React from 'react';
import Box from '@mui/material/Box';

interface ChartDataItem {
    [key: string]: string | number;
}

interface DataProps {
    dataset: ChartDataItem[]; 
    yDataKey: string;
    xDataKey: string;
    label: string;
    selectedColor: string;
    textSymbol: string;
    yAxisConfig: {
      opacityTickLabel: number;
      disableLine: boolean;
      disableTicks: boolean;
    };
}

const Text = styled('text')(({ theme }) => ({
    ...theme?.typography?.body2,
    stroke: 'none',
    fill: 'var(--colors-06)',
    transition: 'opacity 0.2s ease-in, fill 0.2s ease-in',
    textAnchor: 'start',
    dominantBaseline: 'central',
    pointerEvents: 'none',
    fontWeight: 600,
}));

function BarLabelAtBase(props: BarLabelProps) {
    const {
        xOrigin,
        y,
        height,
        skipAnimation,
        ...otherProps
    } = props;

    const animatedProps = useAnimate(
        { x: xOrigin + 8, y: y + height / 2 },
        {
            initialProps: { x: xOrigin, y: y + height / 2 },
            createInterpolator: interpolateObject,
            transformProps: (p) => p,
            applyProps: (element: SVGTextElement, p) => {
                element.setAttribute('x', p.x.toString());
                element.setAttribute('y', p.y.toString());
            },
            skip: skipAnimation,
        },
    );

    return <Text {...otherProps} {...animatedProps} />;
}

export function BarShadedBackground(props: BarProps) {
    const { ownerState, id, dataIndex, xOrigin, yOrigin, skipAnimation, ...other } = props;
    const theme = useTheme();

    const animatedProps = useAnimateBar(props);
    const { width } = useDrawingArea();

    if (width === undefined) return null;

    return (
        <React.Fragment>
            {/* Rectángulo de fondo sombreado */}
            <rect
                {...other}
                fill={(theme.vars || theme).palette.text.primary}
                opacity={0.1}
                x={other.x} 
                width={width}
            />
            <rect
                {...other}
                filter={ownerState.isHighlighted ? 'brightness(120%)' : undefined}
                opacity={ownerState.isFaded ? 0.3 : 1}
                data-highlighted={ownerState.isHighlighted || undefined}
                data-faded={ownerState.isFaded || undefined}
                {...animatedProps}
            />
        </React.Fragment>
    );
}

const highlightScope: HighlightScope = {
    highlight: 'none',
    fade: 'series',
};

const ChartBar_03 = ({ dataset, yDataKey, xDataKey, label, selectedColor, textSymbol, yAxisConfig }: DataProps) => {

    const xAxisMaxValue = textSymbol === '%' ? 100 : undefined;
    const chartSetting = {
        xAxis: [
            {
                min: 0,
                max: xAxisMaxValue,
                valueFormatter: (value: number) => `${value}${textSymbol}`,
                colorMap: {
                  type: 'piecewise' as const,
                  thresholds: [0],
                  colors: [selectedColor]
                }
            },
        ],
        yAxis: [
            {
                scaleType: 'band' as const, 
                dataKey: yDataKey, 
                width: 200,
                label: label,
                tickLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                    fill: 'var(--colors-06)',
                    opacity: yAxisConfig.opacityTickLabel,
                },
                disableLine: yAxisConfig.disableLine,
                disableTicks: yAxisConfig.disableTicks,
                labelStyle: {
                    fontSize: 14,
                    fontWeight: 'bold',
                    fill: 'var(--colors-06)'
                },
            }
        ],
        borderRadius: 3
    }

    return (
        <Box className="h-full w-full overflow-auto">
            <BarChart
                height={400}
                layout="horizontal"
                dataset={dataset}
                series={[
                    {
                        id: xDataKey,
                        dataKey: xDataKey, 
                        valueFormatter: (value: number | null) => `${value}${textSymbol}`,
                        highlightScope,
                    },
                ]}
                barLabel={(v) => `${v.value}${textSymbol}`} 
                slots={{
                    barLabel: BarLabelAtBase, 
                    bar: BarShadedBackground,
                }}
                skipAnimation={false}
                {...chartSetting}
            />
        </Box>
    );
}

export default ChartBar_03;