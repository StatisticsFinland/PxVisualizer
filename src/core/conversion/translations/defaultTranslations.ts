import { TTranslations, TArrayTranslations } from './translationTypes';

export const DefaultTranslations: TTranslations = {
    empty: {
        'fi': '',
        'sv': '',
        'en': ''
    },
    preliminaryData: {
        'fi': 'Ennakko',
        'sv': 'Preliminär',
        'en': 'Preliminary data'
    },
    source: {
        'fi': 'Lähde',
        'sv': 'Källa',
        'en': 'Source'
    },
    unit: {
        'fi': 'Yksikkö',
        'sv': 'Enhet',
        'en': 'Unit'
    },
    graphCreationError: {
        'fi': 'Kuviota ei voitu muodostaa',
        'sv': 'Diagrammet kunde inte skapas',
        'en': 'The graph could not be created'
    },
    thousandsSep: {
        'fi': ' ',
        'sv': ' ',
        'en': ','
    },
    thousandsSepAccessibility: {
        'fi': '',
        'sv': '',
        'en': ','
    },
    decimalPoint: {
        'fi': ',',
        'sv': ',',
        'en': '.'
    },
    barMultiple: { // sv inconsistent
        'fi': 'Pystypylväskuvio, jossa {numPoints} {#eq numPoints 1}pylväs{else}pylvästä{/eq}.',
        'sv': 'Flerdimensionellt vertikalt stapeldiagram.',
        'en': 'Bar chart with {numSeries} data series.'
    },
    barSingle: { // sv inconsistent
        'fi': 'Pystypylväskuvio, jossa {numPoints} {#eq numPoints 1}pylväs{else}pylvästä{/eq}.',
        'sv': 'Vertikalt stapeldiagram.',
        'en': 'Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.'
    },
    columnSingle: { // sv inconsistent
        'fi': 'Vaakapylväskuvio, jossa {numPoints} {#eq numPoints 1}pylväs{else}pylvästä{/eq}.',
        'sv': 'Horisontellt stapeldiagram.',
        'en': 'Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.'
    },
    columnMultiple: { // sv inconsistent
        'fi': 'Vaakapylväskuvio, jossa {numSeries} muuttujaa.',
        'sv': 'Flerdimensionellt horisontellt stapeldiagram.',
        'en': 'Bar chart with {numSeries} data series.'
    },
    lineSingle: { // sv inconsistent
        'fi': 'Viivakuvio, jossa {numPoints} havainto{#eq numPoints 1}arvo{else}arvoa{/eq}.',
        'sv': 'Linjediagram.',
        'en': 'Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.'
    },
    lineMultiple: { // sv inconsistent
        'fi': 'Viivakuvio, jossa {numSeries} viivaa.',
        'sv': 'Flerdimensionellt linjediagram.',
        'en': 'Line chart with {numSeries} lines.'
    },
    pieSingle: { // sv inconsistent
        'fi': 'Piirakkakuvio, jossa {numPoints} {#eq numPoints 1}lohko{else}lohkoa{/eq}.',
        'sv': 'Cirkeldiagram.',
        'en': 'Pie chart with {numPoints} {#eq numPoints 1}slice{else}slices{/eq}.'
    },
    pieMultiple: { // sv inconsistent
        'fi': 'Piirakkakuvio, jossa {numSeries} piirakkaa.',
        'sv': 'Flerdimensionellt cirkeldiagram.',
        'en': 'Pie chart with {numSeries} pies.'
    },
    scatterSingle: { // sv inconsistent
        'fi': 'Hajontakuvio, jossa {numPoints} {#eq numPoints 1}piste{else}pistettä{/eq}.',
        'sv': 'Spridningsdiagram.',
        'en': 'Scatter chart with {numPoints} {#eq numPoints 1}point{else}points{/eq}.'
    },
    scatterMultiple: { // sv inconsistent
        'fi': 'Hajontakuvio,jossa {numSeries} datasarjaa.',
        'sv': 'Flerdimensionellt spridningsdiagram.',
        'en': 'Scatter chart with {numSeries} data series.'
    },
    defaultSingle: { // sv inconsistent
        'fi': 'Kuvio, jossa {numPoints} data{#eq numPoints 1}piste{else}pistettä{/eq}.',
        'sv': 'Endimensionellt diagram.',
        'en': 'Chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.'
    },
    defaultMultiple: { // sv inconsistent
        'fi': 'Kuvio, jossa {numSeries} datasarjaa.',
        'sv': 'Flerdimensionellt diagram.',
        'en': 'Chart with {numSeries} data series.'
    },
    defaultChartTitle: { // sv inconsistent
        'fi': 'Kuvio',
        'sv': 'Diagrammets rubrik',
        'en': 'Chart'
    },
    chartMenuLabel: {
        'fi': 'Kuvion valikko',
        'sv': 'Diagrammets meny',
        'en': 'Chart menu'
    },
    menuButtonLabel: { // sv inconsistent
        'fi': 'Katso valikko kuviosta {chartTitle}',
        'sv': 'Visa diagrammets meny',
        'en': 'View chart menu, {chartTitle}'
    },
    credits: {
        'fi': '{creditsStr}',
        'sv': '{creditsStr}',
        'en': '{creditsStr}'
    },
    legendItem: { // sv inconsistent
        'fi': 'Näytä {itemName}',
        'sv': 'Variabelvärde',
        'en': 'Show {itemName}'
    },
    legendLabel: { // sv inconsistent
        'fi': 'Kuvion selite: {legendTitle}',
        'sv': 'Bläddra visuellt i variabelvärden',
        'en': 'Chart legend: {legendTitle}'
    },
    legendLabelNoTitle: { // sv inconsistent
        'fi': 'Vaihda sarjojen näkyvyyttä, {chartTitle}',
        'sv': 'Ingen etikett',
        'en': 'Toggle series visibility, {chartTitle}'
    },
    contextButtonTitle: {
        'fi': 'Kuvion valintamenu',
        'sv': 'Diagrammets valmeny',
        'en': 'Chart context menu'
    },
    downloadPNG: {
        'fi': 'Lataa kuvio (png)',
        'sv': 'Ladda ner figuren (png)',
        'en': 'Download figure (png)'
    },
    downloadSVG: {
        'fi': 'Lataa kuvio (svg)',
        'sv': 'Ladda ner figuren (svg)',
        'en': 'Download figure (svg)'
    },
    downloadXLSX: {
        'fi': 'Lataa taulukko (xlsx)',
        'sv': 'Ladda ner tabellen (xlsx)',
        'en': 'Download table (xlsx)'
    },
    downloadCSV: {
        'fi': 'Lataa taulukko (csv)',
        'sv': 'Ladda ner tabellen (csv)',
        'en': 'Download table (csv)'
    },
    rangeCategories: { // sv inconsistent
        'fi': 'Datan arvoalue: {numCategories} luokkaa.',
        'sv': 'Diagrammets värdeområde.',
        'en': 'Data range: {numCategories} categories.'
    },
    rangeFromTo: {
        'fi': 'Arvot alkavat {rangeFrom} ja päättyvät {rangeTo}.',
        'sv': 'Värdena börjar från {rangeFrom} och slutar vid {rangeTo}.',
        'en': 'Data ranges from {rangeFrom} to {rangeTo}.'
    },
    timeRangeDays: {
        'fi': 'Arvoja päiviltä {range}.',
        'sv': 'Värden för dagarna {range}.',
        'en': 'Data range: {range} days.'
    },
    timeRangeHours: {
        'fi': 'Arvoja tunneilta {range}',
        'sv': 'Värden för timmarna {range}',
        'en': 'Data range: {range} hours.'
    },
    timeRangeMinutes: {
        'fi': 'Arvoja minuuteilta {range}',
        'sv': 'Värden för minuterna {range}',
        'en': 'Data range: {range} minutes.'
    },
    timeRangeSeconds: {
        'fi': 'Arvoja sekunneilta {range}',
        'sv': 'Värden för sekunderna {range}',
        'en': 'Data range: {range} seconds.'
    },
    xAxisDescriptionPlural: {
        'fi': 'Kuviolla on {numAxes} x-akselia muuttujille {#each names}{#unless @first},{/unless}{#if @last} ja{/if} {this}{/each}.',
        'sv': 'Figuren har {numAxes} x-axlar för variablerna {#each names}{#unless @first},{/unless}{#if @last} och{/if} {this}{/each}.',
        'en': 'The chart has {numAxes} X axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.'
    },
    xAxisDescriptionSingular: {
        'fi': 'Kuviolla on 1 x-akseli muuttujalle {names[0]}. {ranges[0]}',
        'sv': 'Figuren har en x-axel för variabeln {names[0]}. {ranges[0]}',
        'en': 'The chart has 1 X axis displaying {names[0]}. {ranges[0]}'
    },
    yAxisDescriptionPlural: {
        'fi': 'Kuviolla on {numAxes} y-akselia muuttujille {#each names}{#unless @first},{/unless}{#if @last} ja{/if} {this}{/each}.',
        'sv': 'Figuren har {numAxes} y-axlar för variablerna {#each names}{#unless @first},{/unless}{#if @last} och{/if} {this}{/each}.',
        'en': 'The chart has {numAxes} Y axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.'
    },
    yAxisDescriptionSingular: {
        'fi': 'Kuviolla on 1 y-akseli muuttujalle {names[0]}. {ranges[0]}',
        'sv': 'Figuren har en y-axel för variabeln {names[0]}. {ranges[0]}',
        'en': 'The chart has 1 Y axis displaying {names[0]}. {ranges[0]}'
    },
    seriesSummaryBar: { // sv inconsistent
        'fi': '{series.name}muuttujan {seriesNumber}/{chart.series.length}: {series.points.length} {#eq series.points.length 1}pylväs{else}pylvästä{/eq}.',
        'sv': '..variabelns .. Stapel',
        'en': '{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.'
    },
    seriesSummaryBarCombination: { // sv inconsistent
        'fi': '{series.name}muuttuja  {seriesNumber}/{chart.series.length}. Pylvässarja, jossa {series.points.length} {#eq series.points.length 1}pylväs{else}pylvästä{/eq}.',
        'sv': '..variabelns .. Stapel, ..variabelns .. Stapel',
        'en': '{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.'
    },
    seriesSummaryColumn: { // sv inconsistent
        'fi': '{series.name}muuttuja, pylvässarja {seriesNumber}/{chart.series.length}, jossa {series.points.length} {#eq series.points.length 1}pylväs{else}pylvästä{/eq}.',
        'sv': '..variabelns .. Stapel',
        'en': '{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.'
    },
    seriesSummaryColumnCombination: { // sv inconsistent
        'fi': '{series.name}muuttuja {seriesNumber}/{chart.series.length}. Pylvässarja, jossa {series.points.length} {#eq series.points.length 1}pylväs{else}pylvästä{/eq}.',
        'sv': '..variabelns .. Stapel, ..variabelns .. Stapel',
        'en': '{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.'
    },
    seriesSummaryDefault: { // sv inconsistent
        'fi': '{series.name}muuttuja {seriesNumber}/{chart.series.length}, jossa {series.points.length} {#eq series.points.length 1}datapiste{else}datapistettä{/eq}.',
        'sv': '..variabelns .. Diagram',
        'en': '{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.'
    },
    seriesSummaryDefaultCombination: { // sv inconsistent
        'fi': '{series.name}muuttuja {seriesNumber}/{chart.series.length}, jossa {series.points.length} {#eq series.points.length 1}datapiste{else}datapistettä{/eq}.',
        'sv': '..variabelns .. diagram, ..variabelns .. Diagram',
        'en': '{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.'
    },
    seriesSummaryLine: { // sv inconsistent
        'fi': '{series.name}, viiva {seriesNumber}/{chart.series.length}, jossa {series.points.length} {#eq series.points.length 1}datapiste{else}datapistettä{/eq}.',
        'sv': '..variabelns .. Linje',
        'en': '{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.'
    },
    seriesSummaryLineCombination: { // sv inconsistent
        'fi': '{series.name}, aikasarja {seriesNumber}/{chart.series.length}. Viivassa {series.points.length} {#eq series.points.length 1}datapiste{else}datapistettä{/eq}.',
        'sv': '..variabelns .. linje, ..variabelns .. Linje',
        'en': '{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.'
    },
    seriesSummaryPie: { // sv inconsistent
        'fi': '{series.name}, piirakan {seriesNumber}/{chart.series.length}: {series.points.length} {#eq series.points.length 1} lohko {else}lohkoa{/eq}.',
        'sv': '..variabelns .. Sektor',
        'en': '{series.name}, pie {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.'
    },
    seriesSummaryPieCombination: { // sv inconsistent
        'fi': '{series.name}, sarja {seriesNumber}/{chart.series.length}. Piirakasta, jossa {series.points.length} {#eq series.points.length 1} lohko{else}lohkoa{/eq}.',
        'sv': '..variabelns .. sektor, ..variabelns .. Sektor',
        'en': '{series.name}, series {seriesNumber} of {chart.series.length}. Pie with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.'
    },
    seriesSummaryScatter: { // sv inconsistent
        'fi': '{series.name}, hajontakuvio {seriesNumber}/{chart.series.length}: {series.points.length} {#eq series.points.length 1}piste{else}pisteet{/eq}.',
        'sv': '..variabelns .. Punkt',
        'en': '{series.name}, scatter plot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.'
    },
    seriesSummaryScatterCombination: { // sv inconsistent
        'fi': '{series.name}, datasarja {seriesNumber}/{chart.series.length}, hajontakuviosta {series.points.length} {#eq series.points.length 1}piste{else}pisteet{/eq}.',
        'sv': '..variabelns .. punkt, ..variabelns .. Punkt',
        'en': '{series.name}, series {seriesNumber} of {chart.series.length}, scatter plot with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.'
    },
    xAxisDescription: {
        'fi': 'Toisen X-akselin kuvaus, {name}',
        'sv': 'Beskrivning av andra X-axeln, {name}',
        'en': 'X axis, {name}'
    },
    yAxisDescription: {
        'fi': 'Toisen Y-akselin kuvaus, {name}',
        'sv': 'Beskrivning av andra Y-axeln, {name}',
        'en': 'Y axis, {name}'
    },
    endOfChartMarker: {
        'fi': 'Kuvion loppu.',
        'sv': 'Diagrammets slut.',
        'en': 'End of interactive chart.'
    },
    loading: {
        'fi': 'Ladataan...',
        'sv': 'Laddar...',
        'en': 'Loading...'
    },
    chartContainerLabel: { // no translation
        'fi': '{title}. Highcharts interactive chart.',
        'sv': '{title}. Highcharts interactive chart.',
        'en': '{title}. Highcharts interactive chart.'
    },
    toggleTableModeOnText: {
        'fi': 'Näytä taulukko',
        'sv': 'Visa tabell',
        'en': 'View table'
    },
    toggleTableModeOffText: {
        'fi': 'Näytä kuvio',
        'sv': 'Visa figur',
        'en': 'View chart'
    },
    externalLink: { // sv inconsistent
        'fi': 'Ulkoinen linkki',
        'sv': 'Ulkoinen linkki',
        'en': 'External link'
    },
    quarter: {
        'fi': 'vuosineljännes',
        'sv': 'kvartal',
        'en': 'quarter'
    },
    dataMissing: {
        'fi': 'Tieto puuttuu',
        'sv': 'Data saknas',
        'en': 'Missing data'
    },
    toggleAccessibilityModeOn: {
        'fi': 'Näytä kuviossa symbolit',
        'sv': 'Visa symboler i diagrammet',
        'en': 'Show symbols in the figure'
    },
    toggleAccessibilityModeOff: {
        'fi': 'Poista kuviosta symbolit',
        'sv': 'Ta bort symbolerna från diagrammet',
        'en': 'Remove symbols from the figure'
    }
}

export const DefaultArrayTranslations: TArrayTranslations = {
    months: {
        'fi': ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'],
        'sv': ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
        'en': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    shortMonths: {
        'fi': ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'],
        'sv': ['jan.', 'febr.', 'mars', 'april', 'maj', 'juni', 'juli', 'aug.', 'sept.', 'okt.', 'nov.', 'dec.'],
        'en': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    numericSymbols: {
        'fi': ['k', 'M', 'G', 'T', 'P', 'E'],
        'sv': ['k', 'M', 'G', 'T', 'P', 'E'],
        'en': ['k', 'M', 'G', 'T', 'P', 'E']
    },
    weekdays: {
        'fi': ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai'],
        'sv': ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'],
        'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    ordinalSuffices: {
        'en': ['st.', 'nd.', 'rd.', 'th.']
    }
}