import { Translations, ArrayTranslations, GetAllLanguages, TTranslationPackage, AddTranslations } from '../translations'

const mockTranslationPackage: TTranslationPackage = {
    Translations: {
        empty: {
            'foo': '',
        },
        preliminaryData: {
            'foo': 'Foonakko',
        },
        source: {
            'foo': 'Lähde',
        },
        unit: {
            'foo': 'Yksikkö',
        },
        graphCreationError: {
            'foo': 'Kuviota ei voitu muodostaa',
        },
        thousandsSep: {
            'foo': ' ',
        },
        thousandsSepAccessibility: {
            'foo': '',
        },
        decimalPoint: {
            'foo': ',',
        },
        barMultiple: {
            'foo': 'Pystypylväskuvio, jossa {numPoints} {#eq numPoints 1}pylväs{else}pylvästä{/eq}.',
        },
        barSingle: {
            'foo': 'Pystypylväskuvio, jossa {numPoints} {#eq numPoints 1}pylväs{else}pylvästä{/eq}.',
        },
        columnSingle: {
            'foo': 'Vaakapylväskuvio, jossa {numPoints} {#eq numPoints 1}pylväs{else}pylvästä{/eq}.',
        },
        columnMultiple: {
            'foo': 'Vaakapylväskuvio, jossa {numSeries} muuttujaa.',
        },
        lineSingle: {
            'foo': 'Viivakuvio, jossa {numPoints} havainto{#eq numPoints 1}arvo{else}arvoa{/eq}.',
        },
        lineMultiple: {
            'foo': 'Viivakuvio, jossa {numSeries} viivaa.',
        },
        pieSingle: {
            'foo': 'Piirakkakuvio, jossa {numPoints} {#eq numPoints 1}lohko{else}lohkoa{/eq}.',
        },
        pieMultiple: {
            'foo': 'Piirakkakuvio, jossa {numSeries} piirakkaa.',
        },
        scatterSingle: {
            'foo': 'Hajontakuvio, jossa {numPoints} {#eq numPoints 1}piste{else}pistettä{/eq}.',
        },
        scatterMultiple: {
            'foo': 'Hajontakuvio,jossa {numSeries} datasarjaa.',
        },
        defaultSingle: {
            'foo': 'Kuvio, jossa {numPoints} data{#eq numPoints 1}piste{else}pistettä{/eq}.',
        },
        defaultMultiple: {
            'foo': 'Kuvio, jossa {numSeries} datasarjaa.',
        },
        defaultChartTitle: {
            'foo': 'Kuvio',
        },
        chartMenuLabel: {
            'foo': 'Kuvion valikko',
        },
        menuButtonLabel: {
            'foo': 'Katso valikko kuviosta {chartTitle}',
        },
        credits: {
            'foo': '{creditsStr}',
        },
        legendItem: {
            'foo': 'Näytä {itemName}',
        },
        legendLabel: {
            'foo': 'Kuvion selite: {legendTitle}',
        },
        legendLabelNoTitle: {
            'foo': 'Vaihda sarjojen näkyvyyttä, {chartTitle}',
        },
        contextButtonTitle: {
            'foo': 'Kuvion valintamenu',
        },
        downloadPNG: {
            'foo': 'Lataa kuvio (png)',
        },
        downloadSVG: {
            'foo': 'Lataa kuvio (svg)',
        },
        downloadXLSX: {
            'foo': 'Lataa taulukko (xlsx)',
        },
        downloadCSV: {
            'foo': 'Lataa taulukko (csv)',
        },
        rangeCategories: {
            'foo': 'Datan arvoalue: {numCategories} luokkaa.',
        },
        rangeFromTo: {
            'foo': 'Arvot alkavat {rangeFrom} ja päättyvät {rangeTo}.',
        },
        timeRangeDays: {
            'foo': 'Arvoja päiviltä {range}.',
        },
        timeRangeHours: {
            'foo': 'Arvoja tunneilta {range}',
        },
        timeRangeMinutes: {
            'foo': 'Arvoja minuuteilta {range}',
        },
        timeRangeSeconds: {
            'foo': 'Arvoja sekunneilta {range}',
        },
        xAxisDescriptionPlural: {
            'foo': 'Kuviolla on {numAxes} x-akselia muuttujille {#each names}{#unless @first},{/unless}{#if @last} ja{/if} {this}{/each}.',
        },
        xAxisDescriptionSingular: {
            'foo': 'Kuviolla on 1 x-akseli muuttujalle {names[0]}. {ranges[0]}',
        },
        yAxisDescriptionPlural: {
            'foo': 'Kuviolla on {numAxes} y-akselia muuttujille {#each names}{#unless @first},{/unless}{#if @last} ja{/if} {this}{/each}.',
        },
        yAxisDescriptionSingular: {
            'foo': 'Kuviolla on 1 y-akseli muuttujalle {names[0]}. {ranges[0]}',
        },
        seriesSummaryBar: {
            'foo': '{series.name}muuttujan {seriesNumber}/{chart.series.length}: {series.points.length} {#eq series.points.length 1}pylväs{else}pylvästä{/eq}.',
        },
        seriesSummaryBarCombination: {
            'foo': '{series.name}muuttuja  {seriesNumber}/{chart.series.length}. Pylvässarja, jossa {series.points.length} {#eq series.points.length 1}pylväs{else}pylvästä{/eq}.',
        },
        seriesSummaryColumn: {
            'foo': '{series.name}muuttuja, pylvässarja {seriesNumber}/{chart.series.length}, jossa {series.points.length} {#eq series.points.length 1}pylväs{else}pylvästä{/eq}.',
        },
        seriesSummaryColumnCombination: {
            'foo': '{series.name}muuttuja {seriesNumber}/{chart.series.length}. Pylvässarja, jossa {series.points.length} {#eq series.points.length 1}pylväs{else}pylvästä{/eq}.',
        },
        seriesSummaryDefault: {
            'foo': '{series.name}muuttuja {seriesNumber}/{chart.series.length}, jossa {series.points.length} {#eq series.points.length 1}datapiste{else}datapistettä{/eq}.',
        },
        seriesSummaryDefaultCombination: {
            'foo': '{series.name}muuttuja {seriesNumber}/{chart.series.length}, jossa {series.points.length} {#eq series.points.length 1}datapiste{else}datapistettä{/eq}.',
        },
        seriesSummaryLine: {
            'foo': '{series.name}, viiva {seriesNumber}/{chart.series.length}, jossa {series.points.length} {#eq series.points.length 1}datapiste{else}datapistettä{/eq}.',
        },
        seriesSummaryLineCombination: {
            'foo': '{series.name}, aikasarja {seriesNumber}/{chart.series.length}. Viivassa {series.points.length} {#eq series.points.length 1}datapiste{else}datapistettä{/eq}.',
        },
        seriesSummaryPie: {
            'foo': '{series.name}, piirakan {seriesNumber}/{chart.series.length}: {series.points.length} {#eq series.points.length 1} lohko {else}lohkoa{/eq}.',
        },
        seriesSummaryPieCombination: {
            'foo': '{series.name}, sarja {seriesNumber}/{chart.series.length}. Piirakasta, jossa {series.points.length} {#eq series.points.length 1} lohko{else}lohkoa{/eq}.',
        },
        seriesSummaryScatter: {
            'foo': '{series.name}, hajontakuvio {seriesNumber}/{chart.series.length}: {series.points.length} {#eq series.points.length 1}piste{else}pisteet{/eq}.',
        },
        seriesSummaryScatterCombination: {
            'foo': '{series.name}, datasarja {seriesNumber}/{chart.series.length}, hajontakuviosta {series.points.length} {#eq series.points.length 1}piste{else}pisteet{/eq}.',
        },
        xAxisDescription: {
            'foo': 'Toisen X-akselin kuvaus, {name}',
        },
        yAxisDescription: {
            'foo': 'Toisen Y-akselin kuvaus, {name}',
        },
        endOfChartMarker: {
            'foo': 'Kuvion loppu.',
        },
        loading: {
            'foo': 'Ladataan...',
        },
        chartContainerLabel: {
            'foo': '{title}. Highcharts interactive chart.',
        },
        toggleTableModeOnText: {
            'foo': 'Näytä taulukko',
        },
        toggleTableModeOffText: {
            'foo': 'Näytä kuvio',
        },
        externalLink: {
            'foo': 'Ulkoinen linkki',
        },
        quarter: {
            'foo': 'vuosineljännes',
        },
        dataMissing: {
            'foo': 'Tieto puuttuu',
        }
    },
    ArrayTranslations: {
        months: {
            'foo': ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'],
        },
        shortMonths: {
            'foo': ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'],
        },
        numericSymbols: {
            'foo': ['k', 'M', 'G', 'T', 'P', 'E'],
        },
        weekdays: {
            'foo': ['foonuntai', 'foonantai', 'foostai', 'fooskiviikko', 'foorstai', 'foorjantai', 'fooantai'],
        },
        ordinalSuffices: {
            'en': ['st.', 'nd.', 'rd.', 'th.']
        }
    }
}

describe('Assertion tests', () => {
    it('should return an array of all available languages', () => {
        const expected = ["fi", "sv", "en"];
        const result = GetAllLanguages();
        expect(result).toEqual(expected);
    });

    it('should return different values for different languages', () => {
        const expectedTranslations: { [key: string]: string } = {
            'fi': 'Ennakko',
            'sv': 'Preliminär',
            'en': 'Preliminary data'
        };

        const languages = Object.keys(expectedTranslations);
        languages.forEach((language) => {
            expect(Translations.preliminaryData[language]).toBe(expectedTranslations[language]);
        });
    });

    it('should return different array translations for different languages', () => {
        const expectedArrayTranslations: { [key: string]: string[] } = {
            'fi': ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'],
            'sv': ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
            'en': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        };
        const expectedArrayItemTranslations: { [key: string]: string } = {
            'fi': 'maaliskuu',
            'sv': 'mars',
            'en': 'March'
        };

        const languages = Object.keys(expectedArrayTranslations);
        languages.forEach((language) => {
            expect(ArrayTranslations.months[language]).toEqual(expectedArrayTranslations[language]);
            expect(ArrayTranslations.months[language][2]).toBe(expectedArrayItemTranslations[language]);
        });
    });

    it('should add new language item and return translations and array translations for it', () => {
        const expectedFoo = 'Foonakko';
        const expectedFooArray = ['foonuntai', 'foonantai', 'foostai', 'fooskiviikko', 'foorstai', 'foorjantai', 'fooantai'];
        const expectedFooArrayItem = 'foostai';
        AddTranslations(mockTranslationPackage);
        expect(Translations.preliminaryData['foo']).toEqual(expectedFoo);
        expect(ArrayTranslations.weekdays['foo']).toEqual(expectedFooArray);
        expect(ArrayTranslations.weekdays['foo'][2]).toEqual(expectedFooArrayItem);
    });
});