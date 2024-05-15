import { getAxisLabelFormatterFunction } from "../chartOptions/Utility/formatters";
import Translations, { ArrayTranslations } from "../conversion/translations";

export const defaultTheme: (locale: string) => Highcharts.Options = (locale) => ({
    accessibility: {
        keyboardNavigation: {
            seriesNavigation: {
                mode: 'serialize'
            }
        }
    },
    responsive: {
        rules: [
            {
                condition: {
                    maxHeight: 600
                },
                chartOptions: {
                    chart: {
                        height: 600,
                    }
                }
            }
        ]
    },
    exporting: {
        enabled: false,
        fallbackToExportServer: false
    },
    lang: {
        accessibility: {
            thousandsSep: Translations.thousandsSepAccessibility[locale],
            credits: Translations.credits[locale],
            chartTypes: {
                barMultiple: Translations.barMultiple[locale],
                barSingle: Translations.barSingle[locale],
                columnMultiple: Translations.columnMultiple[locale],
                columnSingle: Translations.columnSingle[locale],
                lineSingle: Translations.lineSingle[locale],
                lineMultiple: Translations.lineMultiple[locale],
                pieSingle: Translations.pieSingle[locale],
                scatterSingle: Translations.scatterSingle[locale],
                scatterMultiple: Translations.scatterMultiple[locale],
                defaultSingle: Translations.defaultSingle[locale],
                defaultMultiple: Translations.defaultMultiple[locale]
            },
            defaultChartTitle: Translations.defaultChartTitle[locale],
            exporting: {
                chartMenuLabel: Translations.chartMenuLabel[locale],
                menuButtonLabel: Translations.menuButtonLabel[locale]
            },
            legend: {
                legendItem: Translations.legendItem[locale],
                legendLabel: Translations.legendLabel[locale],
                legendLabelNoTitle: Translations.legendLabelNoTitle[locale]
            },
            axis: {
                rangeCategories: Translations.rangeCategories[locale],
                rangeFromTo: Translations.rangeFromTo[locale],
                timeRangeDays: Translations.timeRangeDays[locale],
                timeRangeHours: Translations.timeRangeHours[locale],
                timeRangeMinutes: Translations.timeRangeMinutes[locale],
                timeRangeSeconds: Translations.timeRangeSeconds[locale],
                xAxisDescriptionPlural: Translations.xAxisDescriptionPlural[locale],
                xAxisDescriptionSingular: Translations.xAxisDescriptionSingular[locale],
                yAxisDescriptionPlural: Translations.yAxisDescriptionPlural[locale],
                yAxisDescriptionSingular: Translations.yAxisDescriptionSingular[locale]
            },
            series: {
                summary: {
                    bar: Translations.seriesSummaryBar[locale],
                    barCombination: Translations.seriesSummaryBarCombination[locale],
                    column: Translations.seriesSummaryColumn[locale],
                    columnCombination: Translations.seriesSummaryColumnCombination[locale],
                    default: Translations.seriesSummaryDefault[locale],
                    defaultCombination: Translations.seriesSummaryDefaultCombination[locale],
                    line: Translations.seriesSummaryLine[locale],
                    lineCombination: Translations.seriesSummaryLineCombination[locale],
                    pie: Translations.seriesSummaryPie[locale],
                    pieCombination: Translations.seriesSummaryPieCombination[locale],
                    scatter: Translations.seriesSummaryScatter[locale],
                    scatterCombination: Translations.seriesSummaryScatterCombination[locale]
                },
                xAxisDescription: Translations.xAxisDescription[locale],
                yAxisDescription: Translations.yAxisDescription[locale]
            },
            screenReaderSection: {
                endOfChartMarker: Translations.endOfChartMarker[locale]
            },
            chartContainerLabel: Translations.chartContainerLabel[locale]
        },
        thousandsSep: Translations.thousandsSep[locale],
        decimalPoint: Translations.decimalPoint[locale],
        contextButtonTitle: Translations.contextButtonTitle[locale],
        downloadCSV: Translations.downloadCSV[locale],
        downloadPNG: Translations.downloadPNG[locale],
        downloadSVG: Translations.downloadSVG[locale],
        months: ArrayTranslations.months[locale],
        shortMonths: ArrayTranslations.shortMonths[locale],
        weekdays: ArrayTranslations.weekdays[locale],
        loading: Translations.loading[locale],
        numericSymbols: null as any // null is not accepted even though it works as disabling the symbols, any as a workaround
    },
    colors: ['#1a56ec', '#f2644c', '#1b3160', '#9c8d87', '#26625d', '#7791e8', '#8c1131', '#878eaf', '#c73268', '#288c72'], // chart series default colors
    chart: {
        style: {
            fontFamily: '"Barlow Semi Condensed", Verdana, sans-serif'
        },
        spacingBottom: 30,
        spacingLeft: 20, // for tilted labels to fit in the x axis with ellipsis overflow
        height: (9 / 16 * 100) + '%'
    },
    tooltip: {
        enabled: true,
        headerFormat: '{point.key}<br/>',
        pointFormat: '{point.y}',
        backgroundColor: '#ffffff',
        outside: true,
        style: {
            color: '#000',
            fontSize: '1rem',
            fontWeight: '400',
        }
    },
    title: {
        style: {
            color: '#000',
            fontSize: '1.25rem',
            fontWeight: '500',
            textAlign: 'left'
        },
        align: 'left',
        margin: 45
    },
    subtitle: {
        style: {
            color: '#000',
            fontSize: '1.25rem',
            fontWeight: '400',
        },
        align: 'left',
    },
    credits: {
        position: {
            align: "left",
            x: 5
        },
        style: {
            color: '#000',
            fontSize: '1rem',
            fontWeight: '400',
            textAlign: 'left',
            cursor: 'default'
        },
        href: ''
    },
    yAxis: {
        title: {
            style: {
                color: '#000',
                fontSize: '1rem',
                fontWeight: '400',
                left: 0,
                textAlign: 'left',
                textOverflow: 'ellipsis'
            },
            align: 'high',
            rotation: 0,
            textAlign: "left",
            offset: 0,
            y: -15,
            x: 55,
            reserveSpace: false
        },
        lineColor: '#000',
        lineWidth: 1,
        gridLineColor: 'hsl(0, 0%, 35%)',
        gridLineWidth: 0.5,
        labels: {
            style: {
                color: '#000',
                fontSize: '1rem',
                fontWeight: '400',
            },
            autoRotation: [0],
            allowOverlap: false,
            formatter: getAxisLabelFormatterFunction(locale)
        },
    },
    xAxis: {
        labels: {
            style: {
                color: '#000',
                fontSize: '1rem',
                fontWeight: '400'
            },
            allowOverlap: false,
            autoRotation: [0]
        },
        title: {
            style: {
                color: '#000',
                fontSize: '1rem',
                fontWeight: '400',
            }
        },
        lineColor: '#000',
        lineWidth: 1,
        crosshair: true
    },
    legend: {
        enabled: false,
        itemStyle: {
            fontSize: '1rem',
            fontWeight: '400',
            color: '#000'
        },
        align: "center"
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                useHTML: true,
                connectorShape: 'crookedLine',
                connectorColor: '#000000',
                style: {
                    fontSize: '1rem',
                    fontWeight: '400',
                    color: '#000',
                    textOverflow: 'crop'
                }
            }
        },
        column: {
            groupPadding: 0.2,
            pointPadding: 0.01
        },
        bar: {
            groupPadding: 0.2,
            pointPadding: 0.01
        },
        series: {
            animation : false
        }
    }
});