import { EVariableType, EVisualizationType, IQueryVisualizationResponse } from "../../types";
import { ETimeVariableInterval } from "../../types/queryVisualizationResponse";
import { TVariableSelections } from "../../types/variableSelections";

export const LINE_CHART_WITH_YEAR_SERIES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            898974.0,
            896523.0,
            890290.0,
            838859.0,
            845420.0,
            860425.0,
            878401.0,
            894291.0,
            907534.0,
            921010.0,
            934728.0,
            949208.0,
            963133.0,
            975320.0,
            994419.0,
            1008243.0,
            1019517.0,
            1035165.0,
            1051790.0,
            1069125.0,
            1083562.0,
            1098837.0,
            1119149.0,
            1137722.0,
            1155088.0,
            1171541.0,
            1185400.0,
            1191800.0,
            1197700.0,
            1213300.0,
            1230900.0,
            1246700.0,
            1266200.0,
            1288500.0,
            1300300.0,
            1310600.0,
            1321000.0,
            1325100.0,
            1336000.0,
            1354500.0,
            1362600.0,
            1376300.0,
            1393300.0,
            1417500.0,
            1431700.0,
            1444500.0,
            1463900.0,
            1482200.0,
            1490300.0,
            1507200.0,
            1520600.0,
            1530300.0,
            1540700.0,
            1517000.0,
            1517900.0,
            1533100.0,
            1556900.0,
            1574500.0,
            1588200.0,
            1601500.0,
            1619500.0,
            1635000.0,
            1647000.0,
            1663000.0,
            1674700.0,
            1688800.0,
            1702500.0,
            1715300.0,
            1725200.0,
            1737300.0,
            1751500.0,
            1763100.0,
            1777200.0,
            1793600.0,
            1804800.0,
            1792600.0,
            1785082.0,
            1780031.0,
            1788852.0,
            1780916.0,
            1800729.0,
            1826822.0,
            1852447.0,
            1878711.0,
            1904733.0,
            1926161.0,
            1943081.0,
            1969494.0,
            1993713.0,
            2018695.0,
            2043382.0,
            2067399.0,
            2087631.0,
            2105208.0,
            2124665.0,
            2142263.0,
            2157873.0,
            2174124.0,
            2190753.0,
            2200340.0,
            2207250.0,
            2218601.0,
            2232588.0,
            2239681.0,
            2230217.0,
            2219985.0,
            2234037.0,
            2249051.0,
            2262142.0,
            2273815.0,
            2282115.0,
            2286392.0,
            2295668.0,
            2300790.0,
            2306784.0,
            2314843.0,
            2327473.0,
            2342869.0,
            2357172.0,
            2369228.0,
            2377780.0,
            2385866.0,
            2392868.0,
            2401368.0,
            2412760.0,
            2426204.0,
            2443042.0,
            2457282.0,
            2470196.0,
            2481649.0,
            2491701.0,
            2500596.0,
            2509098.0,
            2516075.0,
            2523026.0,
            2529341.0,
            2537597.0,
            2544916.0,
            2552893.0,
            2562077.0,
            2572350.0,
            2583742.0,
            2596787.0,
            2611653.0,
            2625067.0,
            2638416.0,
            2652534.0,
            2666622.0,
            2680364.0,
            2691863.0,
            2701490.0,
            2712327.0,
            2719131.0,
            2723290.0,
            2728262.0,
            2733808.0,
            2743101.0,
            2753477.0,
            944271.0,
            940983.0,
            933908.0,
            888679.0,
            894140.0,
            908344.0,
            925444.0,
            940320.0,
            952442.0,
            965107.0,
            977919.0,
            993448.0,
            1008298.0,
            1019253.0,
            1038250.0,
            1052539.0,
            1063126.0,
            1078137.0,
            1094605.0,
            1111422.0,
            1124956.0,
            1139735.0,
            1158991.0,
            1176457.0,
            1192614.0,
            1208599.0,
            1222900.0,
            1230700.0,
            1239000.0,
            1252400.0,
            1269000.0,
            1284200.0,
            1301300.0,
            1321800.0,
            1335000.0,
            1345300.0,
            1357500.0,
            1368800.0,
            1381100.0,
            1397400.0,
            1410400.0,
            1427400.0,
            1445400.0,
            1465500.0,
            1483100.0,
            1498900.0,
            1516100.0,
            1533300.0,
            1545500.0,
            1562300.0,
            1575700.0,
            1583900.0,
            1593600.0,
            1598300.0,
            1600100.0,
            1614500.0,
            1636300.0,
            1653300.0,
            1670400.0,
            1684700.0,
            1702600.0,
            1720200.0,
            1733600.0,
            1749100.0,
            1760600.0,
            1773900.0,
            1787100.0,
            1800700.0,
            1811400.0,
            1824300.0,
            1838100.0,
            1849300.0,
            1863000.0,
            1878500.0,
            1894900.0,
            1903017.0,
            1922733.0,
            1928770.0,
            1943680.0,
            1956180.0,
            1978161.0,
            2006250.0,
            2032837.0,
            2059129.0,
            2083263.0,
            2103642.0,
            2121646.0,
            2146734.0,
            2168896.0,
            2192496.0,
            2215189.0,
            2237433.0,
            2255559.0,
            2271106.0,
            2288381.0,
            2303959.0,
            2317914.0,
            2332974.0,
            2348766.0,
            2357227.0,
            2362646.0,
            2373241.0,
            2387057.0,
            2393611.0,
            2384060.0,
            2378351.0,
            2391875.0,
            2404350.0,
            2416619.0,
            2428572.0,
            2438377.0,
            2444444.0,
            2451299.0,
            2457298.0,
            2464508.0,
            2472935.0,
            2484677.0,
            2498846.0,
            2512686.0,
            2524520.0,
            2532884.0,
            2539778.0,
            2545734.0,
            2552991.0,
            2561623.0,
            2572274.0,
            2585960.0,
            2597700.0,
            2607716.0,
            2617105.0,
            2625125.0,
            2631724.0,
            2638251.0,
            2643571.0,
            2648276.0,
            2651774.0,
            2657304.0,
            2661379.0,
            2666839.0,
            2674534.0,
            2683230.0,
            2693213.0,
            2703697.0,
            2714661.0,
            2726360.0,
            2736860.0,
            2748733.0,
            2760052.0,
            2770906.0,
            2779890.0,
            2785818.0,
            2790970.0,
            2793999.0,
            2794629.0,
            2797030.0,
            2799985.0,
            2805140.0,
            2810493.0
        ],
        missingDataInfo: {},
        "dataNotes": {},
        "metaData": [
            {
                "code": "Ikä",
                "name": {
                    "fi": "Ikä",
                    "sv": "Ålder",
                    "en": "Age"
                },
                "note": null,
                "type": EVariableType.Ordinal,
                "values": [
                    {
                        "code": "SSS",
                        "name": {
                            "fi": "Yhteensä",
                            "sv": "Totalt",
                            "en": "Total"
                        },
                        "note": null,
                        "isSum": true,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Tiedot",
                "name": {
                    "fi": "Tiedot",
                    "sv": "Uppgifter",
                    "en": "Information"
                },
                "note": null,
                "type": EVariableType.Content,
                "values": [
                    {
                        "code": "vaesto",
                        "name": {
                            "fi": "Väestö 31.12.",
                            "sv": "Befolkning 31.12.",
                            "en": "Population 31 Dec"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": {
                            "unit": {
                                "fi": "Lukumäärä",
                                "sv": "Antal",
                                "en": "Number"
                            },
                            "source": {
                                "fi": "PxVisualizer-fi",
                                "sv": "PxVisualizer-sv",
                                "en": "PxVisualizer-en"
                            },
                            "numberOfDecimals": 0,
                            "lastUpdated": "2023-03-31T05:00:00Z"
                        }
                    }
                ]
            },
            {
                "code": "Sukupuoli",
                "name": {
                    "fi": "Sukupuoli",
                    "sv": "Kön",
                    "en": "Sex"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "1",
                        "name": {
                            "fi": "Miehet",
                            "sv": "Män",
                            "en": "Males"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2",
                        "name": {
                            "fi": "Naiset",
                            "sv": "Kvinnor",
                            "en": "Females"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Vuosi",
                "name": {
                    "fi": "Vuosi",
                    "sv": "År",
                    "en": "Year"
                },
                "note": null,
                "type": EVariableType.Time,
                "values": [
                    {
                        "code": "1865",
                        "name": {
                            "fi": "1865",
                            "sv": "1865",
                            "en": "1865"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1866",
                        "name": {
                            "fi": "1866",
                            "sv": "1866",
                            "en": "1866"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1867",
                        "name": {
                            "fi": "1867",
                            "sv": "1867",
                            "en": "1867"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1868",
                        "name": {
                            "fi": "1868",
                            "sv": "1868",
                            "en": "1868"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1869",
                        "name": {
                            "fi": "1869",
                            "sv": "1869",
                            "en": "1869"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1870",
                        "name": {
                            "fi": "1870",
                            "sv": "1870",
                            "en": "1870"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1871",
                        "name": {
                            "fi": "1871",
                            "sv": "1871",
                            "en": "1871"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1872",
                        "name": {
                            "fi": "1872",
                            "sv": "1872",
                            "en": "1872"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1873",
                        "name": {
                            "fi": "1873",
                            "sv": "1873",
                            "en": "1873"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1874",
                        "name": {
                            "fi": "1874",
                            "sv": "1874",
                            "en": "1874"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1875",
                        "name": {
                            "fi": "1875",
                            "sv": "1875",
                            "en": "1875"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1876",
                        "name": {
                            "fi": "1876",
                            "sv": "1876",
                            "en": "1876"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1877",
                        "name": {
                            "fi": "1877",
                            "sv": "1877",
                            "en": "1877"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1878",
                        "name": {
                            "fi": "1878",
                            "sv": "1878",
                            "en": "1878"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1879",
                        "name": {
                            "fi": "1879",
                            "sv": "1879",
                            "en": "1879"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1880",
                        "name": {
                            "fi": "1880",
                            "sv": "1880",
                            "en": "1880"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1881",
                        "name": {
                            "fi": "1881",
                            "sv": "1881",
                            "en": "1881"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1882",
                        "name": {
                            "fi": "1882",
                            "sv": "1882",
                            "en": "1882"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1883",
                        "name": {
                            "fi": "1883",
                            "sv": "1883",
                            "en": "1883"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1884",
                        "name": {
                            "fi": "1884",
                            "sv": "1884",
                            "en": "1884"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1885",
                        "name": {
                            "fi": "1885",
                            "sv": "1885",
                            "en": "1885"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1886",
                        "name": {
                            "fi": "1886",
                            "sv": "1886",
                            "en": "1886"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1887",
                        "name": {
                            "fi": "1887",
                            "sv": "1887",
                            "en": "1887"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1888",
                        "name": {
                            "fi": "1888",
                            "sv": "1888",
                            "en": "1888"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1889",
                        "name": {
                            "fi": "1889",
                            "sv": "1889",
                            "en": "1889"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1890",
                        "name": {
                            "fi": "1890",
                            "sv": "1890",
                            "en": "1890"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1891",
                        "name": {
                            "fi": "1891",
                            "sv": "1891",
                            "en": "1891"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1892",
                        "name": {
                            "fi": "1892",
                            "sv": "1892",
                            "en": "1892"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1893",
                        "name": {
                            "fi": "1893",
                            "sv": "1893",
                            "en": "1893"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1894",
                        "name": {
                            "fi": "1894",
                            "sv": "1894",
                            "en": "1894"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1895",
                        "name": {
                            "fi": "1895",
                            "sv": "1895",
                            "en": "1895"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1896",
                        "name": {
                            "fi": "1896",
                            "sv": "1896",
                            "en": "1896"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1897",
                        "name": {
                            "fi": "1897",
                            "sv": "1897",
                            "en": "1897"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1898",
                        "name": {
                            "fi": "1898",
                            "sv": "1898",
                            "en": "1898"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1899",
                        "name": {
                            "fi": "1899",
                            "sv": "1899",
                            "en": "1899"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1900",
                        "name": {
                            "fi": "1900",
                            "sv": "1900",
                            "en": "1900"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1901",
                        "name": {
                            "fi": "1901",
                            "sv": "1901",
                            "en": "1901"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1902",
                        "name": {
                            "fi": "1902",
                            "sv": "1902",
                            "en": "1902"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1903",
                        "name": {
                            "fi": "1903",
                            "sv": "1903",
                            "en": "1903"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1904",
                        "name": {
                            "fi": "1904",
                            "sv": "1904",
                            "en": "1904"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1905",
                        "name": {
                            "fi": "1905",
                            "sv": "1905",
                            "en": "1905"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1906",
                        "name": {
                            "fi": "1906",
                            "sv": "1906",
                            "en": "1906"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1907",
                        "name": {
                            "fi": "1907",
                            "sv": "1907",
                            "en": "1907"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1908",
                        "name": {
                            "fi": "1908",
                            "sv": "1908",
                            "en": "1908"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1909",
                        "name": {
                            "fi": "1909",
                            "sv": "1909",
                            "en": "1909"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1910",
                        "name": {
                            "fi": "1910",
                            "sv": "1910",
                            "en": "1910"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1911",
                        "name": {
                            "fi": "1911",
                            "sv": "1911",
                            "en": "1911"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1912",
                        "name": {
                            "fi": "1912",
                            "sv": "1912",
                            "en": "1912"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1913",
                        "name": {
                            "fi": "1913",
                            "sv": "1913",
                            "en": "1913"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1914",
                        "name": {
                            "fi": "1914",
                            "sv": "1914",
                            "en": "1914"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1915",
                        "name": {
                            "fi": "1915",
                            "sv": "1915",
                            "en": "1915"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1916",
                        "name": {
                            "fi": "1916",
                            "sv": "1916",
                            "en": "1916"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1917",
                        "name": {
                            "fi": "1917",
                            "sv": "1917",
                            "en": "1917"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1918",
                        "name": {
                            "fi": "1918",
                            "sv": "1918",
                            "en": "1918"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1919",
                        "name": {
                            "fi": "1919",
                            "sv": "1919",
                            "en": "1919"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1920",
                        "name": {
                            "fi": "1920",
                            "sv": "1920",
                            "en": "1920"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1921",
                        "name": {
                            "fi": "1921",
                            "sv": "1921",
                            "en": "1921"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1922",
                        "name": {
                            "fi": "1922",
                            "sv": "1922",
                            "en": "1922"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1923",
                        "name": {
                            "fi": "1923",
                            "sv": "1923",
                            "en": "1923"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1924",
                        "name": {
                            "fi": "1924",
                            "sv": "1924",
                            "en": "1924"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1925",
                        "name": {
                            "fi": "1925",
                            "sv": "1925",
                            "en": "1925"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1926",
                        "name": {
                            "fi": "1926",
                            "sv": "1926",
                            "en": "1926"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1927",
                        "name": {
                            "fi": "1927",
                            "sv": "1927",
                            "en": "1927"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1928",
                        "name": {
                            "fi": "1928",
                            "sv": "1928",
                            "en": "1928"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1929",
                        "name": {
                            "fi": "1929",
                            "sv": "1929",
                            "en": "1929"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1930",
                        "name": {
                            "fi": "1930",
                            "sv": "1930",
                            "en": "1930"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1931",
                        "name": {
                            "fi": "1931",
                            "sv": "1931",
                            "en": "1931"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1932",
                        "name": {
                            "fi": "1932",
                            "sv": "1932",
                            "en": "1932"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1933",
                        "name": {
                            "fi": "1933",
                            "sv": "1933",
                            "en": "1933"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1934",
                        "name": {
                            "fi": "1934",
                            "sv": "1934",
                            "en": "1934"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1935",
                        "name": {
                            "fi": "1935",
                            "sv": "1935",
                            "en": "1935"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1936",
                        "name": {
                            "fi": "1936",
                            "sv": "1936",
                            "en": "1936"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1937",
                        "name": {
                            "fi": "1937",
                            "sv": "1937",
                            "en": "1937"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1938",
                        "name": {
                            "fi": "1938",
                            "sv": "1938",
                            "en": "1938"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1939",
                        "name": {
                            "fi": "1939",
                            "sv": "1939",
                            "en": "1939"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1940",
                        "name": {
                            "fi": "1940",
                            "sv": "1940",
                            "en": "1940"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1941",
                        "name": {
                            "fi": "1941",
                            "sv": "1941",
                            "en": "1941"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1942",
                        "name": {
                            "fi": "1942",
                            "sv": "1942",
                            "en": "1942"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1943",
                        "name": {
                            "fi": "1943",
                            "sv": "1943",
                            "en": "1943"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1944",
                        "name": {
                            "fi": "1944",
                            "sv": "1944",
                            "en": "1944"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1945",
                        "name": {
                            "fi": "1945",
                            "sv": "1945",
                            "en": "1945"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1946",
                        "name": {
                            "fi": "1946",
                            "sv": "1946",
                            "en": "1946"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1947",
                        "name": {
                            "fi": "1947",
                            "sv": "1947",
                            "en": "1947"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1948",
                        "name": {
                            "fi": "1948",
                            "sv": "1948",
                            "en": "1948"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1949",
                        "name": {
                            "fi": "1949",
                            "sv": "1949",
                            "en": "1949"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1950",
                        "name": {
                            "fi": "1950",
                            "sv": "1950",
                            "en": "1950"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1951",
                        "name": {
                            "fi": "1951",
                            "sv": "1951",
                            "en": "1951"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1952",
                        "name": {
                            "fi": "1952",
                            "sv": "1952",
                            "en": "1952"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1953",
                        "name": {
                            "fi": "1953",
                            "sv": "1953",
                            "en": "1953"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1954",
                        "name": {
                            "fi": "1954",
                            "sv": "1954",
                            "en": "1954"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1955",
                        "name": {
                            "fi": "1955",
                            "sv": "1955",
                            "en": "1955"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1956",
                        "name": {
                            "fi": "1956",
                            "sv": "1956",
                            "en": "1956"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1957",
                        "name": {
                            "fi": "1957",
                            "sv": "1957",
                            "en": "1957"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1958",
                        "name": {
                            "fi": "1958",
                            "sv": "1958",
                            "en": "1958"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1959",
                        "name": {
                            "fi": "1959",
                            "sv": "1959",
                            "en": "1959"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1960",
                        "name": {
                            "fi": "1960",
                            "sv": "1960",
                            "en": "1960"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1961",
                        "name": {
                            "fi": "1961",
                            "sv": "1961",
                            "en": "1961"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1962",
                        "name": {
                            "fi": "1962",
                            "sv": "1962",
                            "en": "1962"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1963",
                        "name": {
                            "fi": "1963",
                            "sv": "1963",
                            "en": "1963"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1964",
                        "name": {
                            "fi": "1964",
                            "sv": "1964",
                            "en": "1964"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1965",
                        "name": {
                            "fi": "1965",
                            "sv": "1965",
                            "en": "1965"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1966",
                        "name": {
                            "fi": "1966",
                            "sv": "1966",
                            "en": "1966"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1967",
                        "name": {
                            "fi": "1967",
                            "sv": "1967",
                            "en": "1967"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1968",
                        "name": {
                            "fi": "1968",
                            "sv": "1968",
                            "en": "1968"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1969",
                        "name": {
                            "fi": "1969",
                            "sv": "1969",
                            "en": "1969"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1970",
                        "name": {
                            "fi": "1970",
                            "sv": "1970",
                            "en": "1970"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1971",
                        "name": {
                            "fi": "1971",
                            "sv": "1971",
                            "en": "1971"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1972",
                        "name": {
                            "fi": "1972",
                            "sv": "1972",
                            "en": "1972"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1973",
                        "name": {
                            "fi": "1973",
                            "sv": "1973",
                            "en": "1973"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1974",
                        "name": {
                            "fi": "1974",
                            "sv": "1974",
                            "en": "1974"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1975",
                        "name": {
                            "fi": "1975",
                            "sv": "1975",
                            "en": "1975"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1976",
                        "name": {
                            "fi": "1976",
                            "sv": "1976",
                            "en": "1976"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1977",
                        "name": {
                            "fi": "1977",
                            "sv": "1977",
                            "en": "1977"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1978",
                        "name": {
                            "fi": "1978",
                            "sv": "1978",
                            "en": "1978"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1979",
                        "name": {
                            "fi": "1979",
                            "sv": "1979",
                            "en": "1979"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1980",
                        "name": {
                            "fi": "1980",
                            "sv": "1980",
                            "en": "1980"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1981",
                        "name": {
                            "fi": "1981",
                            "sv": "1981",
                            "en": "1981"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1982",
                        "name": {
                            "fi": "1982",
                            "sv": "1982",
                            "en": "1982"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1983",
                        "name": {
                            "fi": "1983",
                            "sv": "1983",
                            "en": "1983"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1984",
                        "name": {
                            "fi": "1984",
                            "sv": "1984",
                            "en": "1984"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1985",
                        "name": {
                            "fi": "1985",
                            "sv": "1985",
                            "en": "1985"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1986",
                        "name": {
                            "fi": "1986",
                            "sv": "1986",
                            "en": "1986"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1987",
                        "name": {
                            "fi": "1987",
                            "sv": "1987",
                            "en": "1987"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1988",
                        "name": {
                            "fi": "1988",
                            "sv": "1988",
                            "en": "1988"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1989",
                        "name": {
                            "fi": "1989",
                            "sv": "1989",
                            "en": "1989"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1990",
                        "name": {
                            "fi": "1990",
                            "sv": "1990",
                            "en": "1990"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1991",
                        "name": {
                            "fi": "1991",
                            "sv": "1991",
                            "en": "1991"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1992",
                        "name": {
                            "fi": "1992",
                            "sv": "1992",
                            "en": "1992"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1993",
                        "name": {
                            "fi": "1993",
                            "sv": "1993",
                            "en": "1993"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1994",
                        "name": {
                            "fi": "1994",
                            "sv": "1994",
                            "en": "1994"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1995",
                        "name": {
                            "fi": "1995",
                            "sv": "1995",
                            "en": "1995"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1996",
                        "name": {
                            "fi": "1996",
                            "sv": "1996",
                            "en": "1996"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1997",
                        "name": {
                            "fi": "1997",
                            "sv": "1997",
                            "en": "1997"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1998",
                        "name": {
                            "fi": "1998",
                            "sv": "1998",
                            "en": "1998"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "1999",
                        "name": {
                            "fi": "1999",
                            "sv": "1999",
                            "en": "1999"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2000",
                        "name": {
                            "fi": "2000",
                            "sv": "2000",
                            "en": "2000"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2001",
                        "name": {
                            "fi": "2001",
                            "sv": "2001",
                            "en": "2001"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2002",
                        "name": {
                            "fi": "2002",
                            "sv": "2002",
                            "en": "2002"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2003",
                        "name": {
                            "fi": "2003",
                            "sv": "2003",
                            "en": "2003"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2004",
                        "name": {
                            "fi": "2004",
                            "sv": "2004",
                            "en": "2004"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2005",
                        "name": {
                            "fi": "2005",
                            "sv": "2005",
                            "en": "2005"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2006",
                        "name": {
                            "fi": "2006",
                            "sv": "2006",
                            "en": "2006"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2007",
                        "name": {
                            "fi": "2007",
                            "sv": "2007",
                            "en": "2007"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2008",
                        "name": {
                            "fi": "2008",
                            "sv": "2008",
                            "en": "2008"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2009",
                        "name": {
                            "fi": "2009",
                            "sv": "2009",
                            "en": "2009"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2010",
                        "name": {
                            "fi": "2010",
                            "sv": "2010",
                            "en": "2010"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2011",
                        "name": {
                            "fi": "2011",
                            "sv": "2011",
                            "en": "2011"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2012",
                        "name": {
                            "fi": "2012",
                            "sv": "2012",
                            "en": "2012"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2013",
                        "name": {
                            "fi": "2013",
                            "sv": "2013",
                            "en": "2013"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2014",
                        "name": {
                            "fi": "2014",
                            "sv": "2014",
                            "en": "2014"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2015",
                        "name": {
                            "fi": "2015",
                            "sv": "2015",
                            "en": "2015"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016",
                        "name": {
                            "fi": "2016",
                            "sv": "2016",
                            "en": "2016"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2017",
                        "name": {
                            "fi": "2017",
                            "sv": "2017",
                            "en": "2017"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2018",
                        "name": {
                            "fi": "2018",
                            "sv": "2018",
                            "en": "2018"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2019",
                        "name": {
                            "fi": "2019",
                            "sv": "2019",
                            "en": "2019"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2020",
                        "name": {
                            "fi": "2020",
                            "sv": "2020",
                            "en": "2020"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2021",
                        "name": {
                            "fi": "2021",
                            "sv": "2021",
                            "en": "2021"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022",
                        "name": {
                            "fi": "2022",
                            "sv": "2022",
                            "en": "2022"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            }
        ],
        "selectableVariableCodes": [],
        "rowVariableCodes": [
            "Sukupuoli"
        ],
        "columnVariableCodes": [
            "Vuosi"
        ],
        "header": {
            "fi": "Väestö 31.12. 1865-2022 muuttujana Sukupuoli",
            "sv": "Befolkning 31.12. 1865-2022 efter Kön",
            "en": "Population 31 Dec 1865-2022 by Sex"
        },
        visualizationSettings: {
            visualizationType: EVisualizationType.LineChart,
            timeVariableIntervals: ETimeVariableInterval.Year,
            timeSeriesStartingPoint: '1865-01-01T00:00:00',
            cutValueAxis: false
        }
    },
    selectedVariableCodes: undefined
};

export const LINE_CHART_WITH_QUARTER_SERIES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            22.68,
            22.87,
            23.1,
            23.23,
            23.5,
            23.68,
            23.78,
            23.89,
            24.07,
            24.08,
            24.45,
            24.55,
            24.54,
            24.65,
            24.72,
            25.13,
            25.09,
            25.22,
            25.44,
            25.87,
            26.15,
            26.27,
            26.36,
            26.51,
            26.59,
            26.68,
            26.72,
            26.75,
            26.64,
            26.82,
            26.93,
            26.93,
            15.15,
            15.18,
            15.32,
            15.41,
            15.56,
            15.58,
            15.72,
            15.8,
            15.96,
            15.93,
            16.11,
            16.24,
            16.18,
            16.25,
            16.4,
            16.68,
            16.62,
            16.71,
            16.83,
            17.2,
            17.45,
            17.48,
            17.57,
            17.64,
            17.76,
            17.88,
            17.95,
            18.01,
            18.16,
            18.32,
            18.44,
            18.53,
            16.34,
            16.38,
            16.49,
            16.54,
            16.32,
            16.7,
            16.92,
            16.98,
            17.48,
            17.58,
            17.67,
            17.71,
            17.48,
            17.62,
            17.71,
            17.91,
            17.9,
            17.97,
            18.11,
            18.33,
            18.59,
            18.61,
            18.7,
            18.78,
            18.93,
            19.14,
            19.2,
            19.21,
            19.39,
            19.6,
            19.73,
            19.87
        ],
        missingDataInfo: {},
        "dataNotes": {},
        "metaData": [
            {
                "code": "Huoneluku",
                "name": {
                    "fi": "Huoneluku",
                    "sv": "Antal rum",
                    "en": "Number of rooms"
                },
                "note": null,
                "type": EVariableType.Ordinal,
                "values": [
                    {
                        "code": "01",
                        "name": {
                            "fi": "Yksiöt",
                            "sv": "Enrumslägenhet",
                            "en": "One-room flat"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Rahoitusmuoto",
                "name": {
                    "fi": "Rahoitusmuoto",
                    "sv": "Finansieringssätt",
                    "en": "Type of funding"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "1",
                        "name": {
                            "fi": "Vapaarahoitteinen",
                            "sv": "Fri finansierad",
                            "en": "Non subsidised"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Tiedot",
                "name": {
                    "fi": "Tiedot",
                    "sv": "Uppgifter",
                    "en": "Information"
                },
                "note": null,
                "type": EVariableType.Content,
                "values": [
                    {
                        "code": "keskivuokra",
                        "name": {
                            "fi": "Neliövuokra (eur/m2)",
                            "sv": "Kvadratmeterspris (eur/m2)",
                            "en": "Rents per square meter (eur/m2)"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": {
                            "unit": {
                                "fi": "eur / m2",
                                "sv": "eur / m2",
                                "en": "eur / m2"
                            },
                            "source": {
                                "fi": "PxVisualizer-fi",
                                "sv": "PxVisualizer-sv",
                                "en": "PxVisualizer-en"
                            },
                            "numberOfDecimals": 2,
                            "lastUpdated": "2023-01-19T06:00:00Z"
                        }
                    }
                ]
            },
            {
                "code": "Alue",
                "name": {
                    "fi": "Alue",
                    "sv": "Område",
                    "en": "Region"
                },
                "note": null,
                "type": EVariableType.Geological,
                "values": [
                    {
                        "code": "091",
                        "name": {
                            "fi": "Helsinki",
                            "sv": "Helsingfors",
                            "en": "Helsinki"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "853",
                        "name": {
                            "fi": "Turku",
                            "sv": "Åbo",
                            "en": "Turku"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "837",
                        "name": {
                            "fi": "Tampere",
                            "sv": "Tammerfors",
                            "en": "Tampere"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Vuosineljännes",
                "name": {
                    "fi": "Vuosineljännes",
                    "sv": "Kvartal",
                    "en": "Quarter"
                },
                "note": null,
                "type": EVariableType.Time,
                "values": [
                    {
                        "code": "2015Q1",
                        "name": {
                            "fi": "2015Q1",
                            "sv": "2015Q1",
                            "en": "2015Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2015Q2",
                        "name": {
                            "fi": "2015Q2",
                            "sv": "2015Q2",
                            "en": "2015Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2015Q3",
                        "name": {
                            "fi": "2015Q3",
                            "sv": "2015Q3",
                            "en": "2015Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2015Q4",
                        "name": {
                            "fi": "2015Q4",
                            "sv": "2015Q4",
                            "en": "2015Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016Q1",
                        "name": {
                            "fi": "2016Q1",
                            "sv": "2016Q1",
                            "en": "2016Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016Q2",
                        "name": {
                            "fi": "2016Q2",
                            "sv": "2016Q2",
                            "en": "2016Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016Q3",
                        "name": {
                            "fi": "2016Q3",
                            "sv": "2016Q3",
                            "en": "2016Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016Q4",
                        "name": {
                            "fi": "2016Q4",
                            "sv": "2016Q4",
                            "en": "2016Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2017Q1",
                        "name": {
                            "fi": "2017Q1",
                            "sv": "2017Q1",
                            "en": "2017Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2017Q2",
                        "name": {
                            "fi": "2017Q2",
                            "sv": "2017Q2",
                            "en": "2017Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2017Q3",
                        "name": {
                            "fi": "2017Q3",
                            "sv": "2017Q3",
                            "en": "2017Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2017Q4",
                        "name": {
                            "fi": "2017Q4",
                            "sv": "2017Q4",
                            "en": "2017Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2018Q1",
                        "name": {
                            "fi": "2018Q1",
                            "sv": "2018Q1",
                            "en": "2018Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2018Q2",
                        "name": {
                            "fi": "2018Q2",
                            "sv": "2018Q2",
                            "en": "2018Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2018Q3",
                        "name": {
                            "fi": "2018Q3",
                            "sv": "2018Q3",
                            "en": "2018Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2018Q4",
                        "name": {
                            "fi": "2018Q4",
                            "sv": "2018Q4",
                            "en": "2018Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2019Q1",
                        "name": {
                            "fi": "2019Q1",
                            "sv": "2019Q1",
                            "en": "2019Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2019Q2",
                        "name": {
                            "fi": "2019Q2",
                            "sv": "2019Q2",
                            "en": "2019Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2019Q3",
                        "name": {
                            "fi": "2019Q3",
                            "sv": "2019Q3",
                            "en": "2019Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2019Q4",
                        "name": {
                            "fi": "2019Q4",
                            "sv": "2019Q4",
                            "en": "2019Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2020Q1",
                        "name": {
                            "fi": "2020Q1",
                            "sv": "2020Q1",
                            "en": "2020Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2020Q2",
                        "name": {
                            "fi": "2020Q2",
                            "sv": "2020Q2",
                            "en": "2020Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2020Q3",
                        "name": {
                            "fi": "2020Q3",
                            "sv": "2020Q3",
                            "en": "2020Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2020Q4",
                        "name": {
                            "fi": "2020Q4",
                            "sv": "2020Q4",
                            "en": "2020Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2021Q1",
                        "name": {
                            "fi": "2021Q1",
                            "sv": "2021Q1",
                            "en": "2021Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2021Q2",
                        "name": {
                            "fi": "2021Q2",
                            "sv": "2021Q2",
                            "en": "2021Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2021Q3",
                        "name": {
                            "fi": "2021Q3",
                            "sv": "2021Q3",
                            "en": "2021Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2021Q4",
                        "name": {
                            "fi": "2021Q4",
                            "sv": "2021Q4",
                            "en": "2021Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q1",
                        "name": {
                            "fi": "2022Q1",
                            "sv": "2022Q1",
                            "en": "2022Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q2",
                        "name": {
                            "fi": "2022Q2",
                            "sv": "2022Q2",
                            "en": "2022Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q3",
                        "name": {
                            "fi": "2022Q3",
                            "sv": "2022Q3",
                            "en": "2022Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q4",
                        "name": {
                            "fi": "2022Q4",
                            "sv": "2022Q4",
                            "en": "2022Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            }
        ],
        "selectableVariableCodes": [],
        "rowVariableCodes": [
            "Alue"
        ],
        "columnVariableCodes": [
            "Vuosineljännes"
        ],
        "header": {
            "fi": "Neliövuokra (eur/m2), Yksiöt, Vapaarahoitteinen 2015Q1-2022Q4 muuttujana Alue",
            "sv": "Kvadratmeterspris (eur/m2), Enrumslägenhet, Fri finansierad 2015Q1-2022Q4 efter Område",
            "en": "Rents per square meter (eur/m2), One-room flat, Non subsidised 2015Q1-2022Q4 by Region"
        },
        visualizationSettings: {
            visualizationType: EVisualizationType.LineChart,
            timeVariableIntervals: ETimeVariableInterval.Quarter,
            timeSeriesStartingPoint: '2015-01-01T00:00:00',
            cutValueAxis: false
        }
    }, selectedVariableCodes: undefined
};

export const LINE_CHART_WITH_MULTISELECTABLE_VARIABLE: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections } = {
    pxGraphData: {
        "tableReference": { name: "table.px", hierarchy: ["foo", "bar"] },
        "data": [
            22.68,
            22.87,
            23.1,
            23.23,
            23.5,
            23.68,
            23.78,
            23.89,
            24.07,
            24.08,
            24.45,
            24.55,
            24.54,
            24.65,
            24.72,
            25.13,
            25.09,
            25.22,
            25.44,
            25.87,
            26.15,
            26.27,
            26.36,
            26.51,
            26.59,
            26.68,
            26.72,
            26.75,
            26.64,
            26.82,
            26.93,
            26.93,
            15.15,
            15.18,
            15.32,
            15.41,
            15.56,
            15.58,
            15.72,
            15.8,
            15.96,
            15.93,
            16.11,
            16.24,
            16.18,
            16.25,
            16.4,
            16.68,
            16.62,
            16.71,
            16.83,
            17.2,
            17.45,
            17.48,
            17.57,
            17.64,
            17.76,
            17.88,
            17.95,
            18.01,
            18.16,
            18.32,
            18.44,
            18.53,
            16.34,
            16.38,
            16.49,
            16.54,
            16.32,
            16.7,
            16.92,
            16.98,
            17.48,
            17.58,
            17.67,
            17.71,
            17.48,
            17.62,
            17.71,
            17.91,
            17.9,
            17.97,
            18.11,
            18.33,
            18.59,
            18.61,
            18.7,
            18.78,
            18.93,
            19.14,
            19.2,
            19.21,
            19.39,
            19.6,
            19.73,
            19.87,
            15.77,
            15.95,
            16.12,
            16.04,
            16.4,
            16.71,
            16.85,
            16.82,
            17.14,
            17.3,
            18.63,
            18.93,
            18.68,
            18.71,
            18.83,
            19.11,
            18.9,
            19.02,
            19.21,
            19.72,
            19.85,
            19.92,
            20.02,
            20.1,
            20.01,
            20.14,
            20.21,
            20.19,
            20.22,
            20.45,
            20.59,
            20.66,
            10.5,
            10.57,
            10.65,
            10.64,
            10.85,
            11.1,
            11.23,
            11.24,
            11.42,
            11.44,
            12.53,
            12.83,
            12.67,
            12.74,
            12.79,
            13.12,
            12.93,
            13.0,
            13.11,
            13.52,
            13.57,
            13.61,
            13.65,
            13.73,
            13.76,
            13.88,
            13.93,
            13.98,
            14.07,
            14.27,
            14.37,
            14.48,
            11.56,
            11.61,
            11.69,
            11.74,
            11.76,
            11.96,
            12.07,
            12.09,
            12.52,
            12.64,
            13.48,
            13.68,
            13.45,
            13.5,
            13.57,
            13.85,
            13.67,
            13.77,
            13.85,
            14.16,
            14.25,
            14.26,
            14.31,
            14.35,
            14.38,
            14.52,
            14.57,
            14.58,
            14.68,
            14.87,
            14.95,
            15.09,
            14.69,
            14.8,
            14.85,
            14.77,
            15.26,
            15.58,
            15.8,
            15.66,
            16.04,
            16.17,
            17.0,
            17.07,
            16.58,
            16.66,
            16.76,
            17.28,
            16.95,
            17.11,
            17.16,
            17.69,
            17.88,
            18.06,
            18.12,
            18.11,
            18.02,
            18.19,
            18.42,
            18.41,
            18.43,
            18.75,
            19.04,
            19.13,
            9.65,
            9.76,
            9.79,
            9.81,
            9.99,
            10.1,
            10.23,
            10.26,
            10.51,
            10.43,
            10.89,
            11.03,
            10.88,
            10.92,
            10.96,
            11.26,
            11.1,
            11.21,
            11.25,
            11.51,
            11.48,
            11.52,
            11.62,
            11.65,
            11.65,
            11.83,
            11.98,
            12.02,
            12.27,
            12.65,
            12.78,
            12.87,
            10.91,
            10.95,
            11.0,
            11.08,
            11.17,
            11.26,
            11.41,
            11.42,
            11.83,
            11.83,
            12.18,
            12.34,
            12.03,
            12.1,
            12.18,
            12.42,
            12.28,
            12.37,
            12.43,
            12.79,
            12.83,
            12.89,
            12.96,
            13.0,
            12.89,
            13.05,
            13.11,
            13.05,
            13.04,
            13.33,
            13.47,
            13.7
        ],
        missingDataInfo: {},
        "dataNotes": {},
        "metaData": [
            {
                "code": "Rahoitusmuoto",
                "name": {
                    "fi": "Rahoitusmuoto",
                    "sv": "Finansieringssätt",
                    "en": "Type of funding"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "1",
                        "name": {
                            "fi": "Vapaarahoitteinen",
                            "sv": "Fri finansierad",
                            "en": "Non subsidised"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Tiedot",
                "name": {
                    "fi": "Tiedot",
                    "sv": "Uppgifter",
                    "en": "Information"
                },
                "note": null,
                "type": EVariableType.Content,
                "values": [
                    {
                        "code": "keskivuokra",
                        "name": {
                            "fi": "Neliövuokra (eur/m2)",
                            "sv": "Kvadratmeterspris (eur/m2)",
                            "en": "Rents per square meter (eur/m2)"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": {
                            "unit": {
                                "fi": "eur / m2",
                                "sv": "eur / m2",
                                "en": "eur / m2"
                            },
                            "source": {
                                "fi": "PxVisualizer-fi",
                                "sv": "PxVisualizer-sv",
                                "en": "PxVisualizer-en"
                            },
                            "numberOfDecimals": 2,
                            "lastUpdated": "2023-01-19T06:00:00Z"
                        }
                    }
                ]
            },
            {
                "code": "Huoneluku",
                "name": {
                    "fi": "Huoneluku",
                    "sv": "Antal rum",
                    "en": "Number of rooms"
                },
                "note": null,
                "type": EVariableType.Ordinal,
                "values": [
                    {
                        "code": "01",
                        "name": {
                            "fi": "Yksiöt",
                            "sv": "Enrumslägenhet",
                            "en": "One-room flat"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "02",
                        "name": {
                            "fi": "Kaksiot",
                            "sv": "Tvårumslägenhet",
                            "en": "Two-room flat"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "03",
                        "name": {
                            "fi": "Kolmiot+",
                            "sv": "Trerumslägenhet+",
                            "en": "Three-room flat+"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Alue",
                "name": {
                    "fi": "Alue",
                    "sv": "Område",
                    "en": "Region"
                },
                "note": null,
                "type": EVariableType.Geological,
                "values": [
                    {
                        "code": "091",
                        "name": {
                            "fi": "Helsinki",
                            "sv": "Helsingfors",
                            "en": "Helsinki"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "853",
                        "name": {
                            "fi": "Turku",
                            "sv": "Åbo",
                            "en": "Turku"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "837",
                        "name": {
                            "fi": "Tampere",
                            "sv": "Tammerfors",
                            "en": "Tampere"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Vuosineljännes",
                "name": {
                    "fi": "Vuosineljännes",
                    "sv": "Kvartal",
                    "en": "Quarter"
                },
                "note": null,
                "type": EVariableType.Time,
                "values": [
                    {
                        "code": "2015Q1",
                        "name": {
                            "fi": "2015Q1",
                            "sv": "2015Q1",
                            "en": "2015Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2015Q2",
                        "name": {
                            "fi": "2015Q2",
                            "sv": "2015Q2",
                            "en": "2015Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2015Q3",
                        "name": {
                            "fi": "2015Q3",
                            "sv": "2015Q3",
                            "en": "2015Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2015Q4",
                        "name": {
                            "fi": "2015Q4",
                            "sv": "2015Q4",
                            "en": "2015Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016Q1",
                        "name": {
                            "fi": "2016Q1",
                            "sv": "2016Q1",
                            "en": "2016Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016Q2",
                        "name": {
                            "fi": "2016Q2",
                            "sv": "2016Q2",
                            "en": "2016Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016Q3",
                        "name": {
                            "fi": "2016Q3",
                            "sv": "2016Q3",
                            "en": "2016Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016Q4",
                        "name": {
                            "fi": "2016Q4",
                            "sv": "2016Q4",
                            "en": "2016Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2017Q1",
                        "name": {
                            "fi": "2017Q1",
                            "sv": "2017Q1",
                            "en": "2017Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2017Q2",
                        "name": {
                            "fi": "2017Q2",
                            "sv": "2017Q2",
                            "en": "2017Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2017Q3",
                        "name": {
                            "fi": "2017Q3",
                            "sv": "2017Q3",
                            "en": "2017Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2017Q4",
                        "name": {
                            "fi": "2017Q4",
                            "sv": "2017Q4",
                            "en": "2017Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2018Q1",
                        "name": {
                            "fi": "2018Q1",
                            "sv": "2018Q1",
                            "en": "2018Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2018Q2",
                        "name": {
                            "fi": "2018Q2",
                            "sv": "2018Q2",
                            "en": "2018Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2018Q3",
                        "name": {
                            "fi": "2018Q3",
                            "sv": "2018Q3",
                            "en": "2018Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2018Q4",
                        "name": {
                            "fi": "2018Q4",
                            "sv": "2018Q4",
                            "en": "2018Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2019Q1",
                        "name": {
                            "fi": "2019Q1",
                            "sv": "2019Q1",
                            "en": "2019Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2019Q2",
                        "name": {
                            "fi": "2019Q2",
                            "sv": "2019Q2",
                            "en": "2019Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2019Q3",
                        "name": {
                            "fi": "2019Q3",
                            "sv": "2019Q3",
                            "en": "2019Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2019Q4",
                        "name": {
                            "fi": "2019Q4",
                            "sv": "2019Q4",
                            "en": "2019Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2020Q1",
                        "name": {
                            "fi": "2020Q1",
                            "sv": "2020Q1",
                            "en": "2020Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2020Q2",
                        "name": {
                            "fi": "2020Q2",
                            "sv": "2020Q2",
                            "en": "2020Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2020Q3",
                        "name": {
                            "fi": "2020Q3",
                            "sv": "2020Q3",
                            "en": "2020Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2020Q4",
                        "name": {
                            "fi": "2020Q4",
                            "sv": "2020Q4",
                            "en": "2020Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2021Q1",
                        "name": {
                            "fi": "2021Q1",
                            "sv": "2021Q1",
                            "en": "2021Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2021Q2",
                        "name": {
                            "fi": "2021Q2",
                            "sv": "2021Q2",
                            "en": "2021Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2021Q3",
                        "name": {
                            "fi": "2021Q3",
                            "sv": "2021Q3",
                            "en": "2021Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2021Q4",
                        "name": {
                            "fi": "2021Q4",
                            "sv": "2021Q4",
                            "en": "2021Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q1",
                        "name": {
                            "fi": "2022Q1",
                            "sv": "2022Q1",
                            "en": "2022Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q2",
                        "name": {
                            "fi": "2022Q2",
                            "sv": "2022Q2",
                            "en": "2022Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q3",
                        "name": {
                            "fi": "2022Q3",
                            "sv": "2022Q3",
                            "en": "2022Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q4",
                        "name": {
                            "fi": "2022Q4",
                            "sv": "2022Q4",
                            "en": "2022Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            }
        ],
        "selectableVariableCodes": [
            "Huoneluku"
        ],
        "rowVariableCodes": [
            "Alue"
        ],
        "columnVariableCodes": [
            "Vuosineljännes"
        ],
        "header": {
            "fi": "Neliövuokra (eur/m2), Vapaarahoitteinen 2015Q1-2022Q4 muuttujina Alue, Huoneluku",
            "sv": "Kvadratmeterspris (eur/m2), Fri finansierad 2015Q1-2022Q4 efter Område, Antal rum",
            "en": "Rents per square meter (eur/m2), Non subsidised 2015Q1-2022Q4 by Region, Number of rooms"
        },
        "visualizationSettings": {
            "visualizationType": EVisualizationType.LineChart,
            "multiselectableVariableCode": "Huoneluku",
            "timeVariableIntervals": ETimeVariableInterval.Quarter,
            "timeSeriesStartingPoint": '2015-01-01T00:00:00',
            "cutValueAxis": false
        }
    },
    selectedVariableCodes: { "Huoneluku": ["01", "02"] }
};

export const LINE_CHART_WITH_COMBINATION_SERIES: { pxGraphData: IQueryVisualizationResponse, selectedVariableCodes: TVariableSelections | undefined } = {
    pxGraphData: {
        tableReference: { name: "table.px", hierarchy: ["foo", "bar"] },
        data: [
            22.68,
            22.87,
            23.1,
            23.23,
            23.5,
            23.68,
            23.78,
            23.89,
            24.07,
            24.08,
            24.45,
            24.55,
            24.54,
            24.65,
            24.72,
            25.13,
            25.09,
            25.22,
            25.44,
            25.87,
            26.15,
            26.27,
            26.36,
            26.51,
            26.59,
            26.68,
            26.72,
            26.75,
            26.64,
            26.82,
            26.93,
            26.93,
            15.77,
            15.95,
            16.12,
            16.04,
            16.4,
            16.71,
            16.85,
            16.82,
            17.14,
            17.3,
            18.63,
            18.93,
            18.68,
            18.71,
            18.83,
            19.11,
            18.9,
            19.02,
            19.21,
            19.72,
            19.85,
            19.92,
            20.02,
            20.1,
            20.01,
            20.14,
            20.21,
            20.19,
            20.22,
            20.45,
            20.59,
            20.66,
            14.69,
            14.8,
            14.85,
            14.77,
            15.26,
            15.58,
            15.8,
            15.66,
            16.04,
            16.17,
            17.0,
            17.07,
            16.58,
            16.66,
            16.76,
            17.28,
            16.95,
            17.11,
            17.16,
            17.69,
            17.88,
            18.06,
            18.12,
            18.11,
            18.02,
            18.19,
            18.42,
            18.41,
            18.43,
            18.75,
            19.04,
            19.13,
            15.15,
            15.18,
            15.32,
            15.41,
            15.56,
            15.58,
            15.72,
            15.8,
            15.96,
            15.93,
            16.11,
            16.24,
            16.18,
            16.25,
            16.4,
            16.68,
            16.62,
            16.71,
            16.83,
            17.2,
            17.45,
            17.48,
            17.57,
            17.64,
            17.76,
            17.88,
            17.95,
            18.01,
            18.16,
            18.32,
            18.44,
            18.53,
            10.5,
            10.57,
            10.65,
            10.64,
            10.85,
            11.1,
            11.23,
            11.24,
            11.42,
            11.44,
            12.53,
            12.83,
            12.67,
            12.74,
            12.79,
            13.12,
            12.93,
            13.0,
            13.11,
            13.52,
            13.57,
            13.61,
            13.65,
            13.73,
            13.76,
            13.88,
            13.93,
            13.98,
            14.07,
            14.27,
            14.37,
            14.48,
            9.65,
            9.76,
            9.79,
            9.81,
            9.99,
            10.1,
            10.23,
            10.26,
            10.51,
            10.43,
            10.89,
            11.03,
            10.88,
            10.92,
            10.96,
            11.26,
            11.1,
            11.21,
            11.25,
            11.51,
            11.48,
            11.52,
            11.62,
            11.65,
            11.65,
            11.83,
            11.98,
            12.02,
            12.27,
            12.65,
            12.78,
            12.87,
            16.34,
            16.38,
            16.49,
            16.54,
            16.32,
            16.7,
            16.92,
            16.98,
            17.48,
            17.58,
            17.67,
            17.71,
            17.48,
            17.62,
            17.71,
            17.91,
            17.9,
            17.97,
            18.11,
            18.33,
            18.59,
            18.61,
            18.7,
            18.78,
            18.93,
            19.14,
            19.2,
            19.21,
            19.39,
            19.6,
            19.73,
            19.87,
            11.56,
            11.61,
            11.69,
            11.74,
            11.76,
            11.96,
            12.07,
            12.09,
            12.52,
            12.64,
            13.48,
            13.68,
            13.45,
            13.5,
            13.57,
            13.85,
            13.67,
            13.77,
            13.85,
            14.16,
            14.25,
            14.26,
            14.31,
            14.35,
            14.38,
            14.52,
            14.57,
            14.58,
            14.68,
            14.87,
            14.95,
            15.09,
            10.91,
            10.95,
            11.0,
            11.08,
            11.17,
            11.26,
            11.41,
            11.42,
            11.83,
            11.83,
            12.18,
            12.34,
            12.03,
            12.1,
            12.18,
            12.42,
            12.28,
            12.37,
            12.43,
            12.79,
            12.83,
            12.89,
            12.96,
            13.0,
            12.89,
            13.05,
            13.11,
            13.05,
            13.04,
            13.33,
            13.47,
            13.7
        ],
        missingDataInfo: {},
        dataNotes: {},
        metaData: [
            {
                "code": "Rahoitusmuoto",
                "name": {
                    "fi": "Rahoitusmuoto",
                    "sv": "Finansieringssätt",
                    "en": "Type of funding"
                },
                "note": null,
                "type": EVariableType.OtherClassificatory,
                "values": [
                    {
                        "code": "1",
                        "name": {
                            "fi": "Vapaarahoitteinen",
                            "sv": "Fri finansierad",
                            "en": "Non subsidised"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Tiedot",
                "name": {
                    "fi": "Tiedot",
                    "sv": "Uppgifter",
                    "en": "Information"
                },
                "note": null,
                "type": EVariableType.Content,
                "values": [
                    {
                        "code": "keskivuokra",
                        "name": {
                            "fi": "Neliövuokra (eur/m2)",
                            "sv": "Kvadratmeterspris (eur/m2)",
                            "en": "Rents per square meter (eur/m2)"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": {
                            "unit": {
                                "fi": "eur / m2",
                                "sv": "eur / m2",
                                "en": "eur / m2"
                            },
                            "source": {
                                "fi": "PxVisualizer-fi",
                                "sv": "PxVisualizer-sv",
                                "en": "PxVisualizer-en"
                            },
                            "numberOfDecimals": 2,
                            "lastUpdated": "2023-01-19T06:00:00Z"
                        }
                    }
                ]
            },
            {
                "code": "Alue",
                "name": {
                    "fi": "Alue",
                    "sv": "Område",
                    "en": "Region"
                },
                "note": null,
                "type": EVariableType.Geological,
                "values": [
                    {
                        "code": "091",
                        "name": {
                            "fi": "Helsinki",
                            "sv": "Helsingfors",
                            "en": "Helsinki"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "853",
                        "name": {
                            "fi": "Turku",
                            "sv": "Åbo",
                            "en": "Turku"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "837",
                        "name": {
                            "fi": "Tampere",
                            "sv": "Tammerfors",
                            "en": "Tampere"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Huoneluku",
                "name": {
                    "fi": "Huoneluku",
                    "sv": "Antal rum",
                    "en": "Number of rooms"
                },
                "note": null,
                "type": EVariableType.Ordinal,
                "values": [
                    {
                        "code": "01",
                        "name": {
                            "fi": "Yksiöt",
                            "sv": "Enrumslägenhet",
                            "en": "One-room flat"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "02",
                        "name": {
                            "fi": "Kaksiot",
                            "sv": "Tvårumslägenhet",
                            "en": "Two-room flat"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "03",
                        "name": {
                            "fi": "Kolmiot+",
                            "sv": "Trerumslägenhet+",
                            "en": "Three-room flat+"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            },
            {
                "code": "Vuosineljännes",
                "name": {
                    "fi": "Vuosineljännes",
                    "sv": "Kvartal",
                    "en": "Quarter"
                },
                "note": null,
                "type": EVariableType.Time,
                "values": [
                    {
                        "code": "2015Q1",
                        "name": {
                            "fi": "2015Q1",
                            "sv": "2015Q1",
                            "en": "2015Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2015Q2",
                        "name": {
                            "fi": "2015Q2",
                            "sv": "2015Q2",
                            "en": "2015Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2015Q3",
                        "name": {
                            "fi": "2015Q3",
                            "sv": "2015Q3",
                            "en": "2015Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2015Q4",
                        "name": {
                            "fi": "2015Q4",
                            "sv": "2015Q4",
                            "en": "2015Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016Q1",
                        "name": {
                            "fi": "2016Q1",
                            "sv": "2016Q1",
                            "en": "2016Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016Q2",
                        "name": {
                            "fi": "2016Q2",
                            "sv": "2016Q2",
                            "en": "2016Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016Q3",
                        "name": {
                            "fi": "2016Q3",
                            "sv": "2016Q3",
                            "en": "2016Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2016Q4",
                        "name": {
                            "fi": "2016Q4",
                            "sv": "2016Q4",
                            "en": "2016Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2017Q1",
                        "name": {
                            "fi": "2017Q1",
                            "sv": "2017Q1",
                            "en": "2017Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2017Q2",
                        "name": {
                            "fi": "2017Q2",
                            "sv": "2017Q2",
                            "en": "2017Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2017Q3",
                        "name": {
                            "fi": "2017Q3",
                            "sv": "2017Q3",
                            "en": "2017Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2017Q4",
                        "name": {
                            "fi": "2017Q4",
                            "sv": "2017Q4",
                            "en": "2017Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2018Q1",
                        "name": {
                            "fi": "2018Q1",
                            "sv": "2018Q1",
                            "en": "2018Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2018Q2",
                        "name": {
                            "fi": "2018Q2",
                            "sv": "2018Q2",
                            "en": "2018Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2018Q3",
                        "name": {
                            "fi": "2018Q3",
                            "sv": "2018Q3",
                            "en": "2018Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2018Q4",
                        "name": {
                            "fi": "2018Q4",
                            "sv": "2018Q4",
                            "en": "2018Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2019Q1",
                        "name": {
                            "fi": "2019Q1",
                            "sv": "2019Q1",
                            "en": "2019Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2019Q2",
                        "name": {
                            "fi": "2019Q2",
                            "sv": "2019Q2",
                            "en": "2019Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2019Q3",
                        "name": {
                            "fi": "2019Q3",
                            "sv": "2019Q3",
                            "en": "2019Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2019Q4",
                        "name": {
                            "fi": "2019Q4",
                            "sv": "2019Q4",
                            "en": "2019Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2020Q1",
                        "name": {
                            "fi": "2020Q1",
                            "sv": "2020Q1",
                            "en": "2020Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2020Q2",
                        "name": {
                            "fi": "2020Q2",
                            "sv": "2020Q2",
                            "en": "2020Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2020Q3",
                        "name": {
                            "fi": "2020Q3",
                            "sv": "2020Q3",
                            "en": "2020Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2020Q4",
                        "name": {
                            "fi": "2020Q4",
                            "sv": "2020Q4",
                            "en": "2020Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2021Q1",
                        "name": {
                            "fi": "2021Q1",
                            "sv": "2021Q1",
                            "en": "2021Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2021Q2",
                        "name": {
                            "fi": "2021Q2",
                            "sv": "2021Q2",
                            "en": "2021Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2021Q3",
                        "name": {
                            "fi": "2021Q3",
                            "sv": "2021Q3",
                            "en": "2021Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2021Q4",
                        "name": {
                            "fi": "2021Q4",
                            "sv": "2021Q4",
                            "en": "2021Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q1",
                        "name": {
                            "fi": "2022Q1",
                            "sv": "2022Q1",
                            "en": "2022Q1"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q2",
                        "name": {
                            "fi": "2022Q2",
                            "sv": "2022Q2",
                            "en": "2022Q2"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q3",
                        "name": {
                            "fi": "2022Q3",
                            "sv": "2022Q3",
                            "en": "2022Q3"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    },
                    {
                        "code": "2022Q4",
                        "name": {
                            "fi": "2022Q4",
                            "sv": "2022Q4",
                            "en": "2022Q4"
                        },
                        "note": null,
                        "isSum": false,
                        "contentComponent": null
                    }
                ]
            }
        ],
        "selectableVariableCodes": [],
        "rowVariableCodes": [
            "Alue",
            "Huoneluku"
        ],
        "columnVariableCodes": [
            "Vuosineljännes"
        ],
        "header": {
            "fi": "Neliövuokra (eur/m2), Vapaarahoitteinen 2015Q1-2022Q4 muuttujina Alue, Huoneluku",
            "sv": "Kvadratmeterspris (eur/m2), Fri finansierad 2015Q1-2022Q4 efter Område, Antal rum",
            "en": "Rents per square meter (eur/m2), Non subsidised 2015Q1-2022Q4 by Region, Number of rooms"
        },
        "visualizationSettings": {
            "visualizationType": EVisualizationType.LineChart,
            "timeVariableIntervals": ETimeVariableInterval.Quarter,
            "timeSeriesStartingPoint": '2015-01-01T00:00:00',
            "cutValueAxis": false
        }
    },
    selectedVariableCodes: { "Huoneluku": ["01", "02"] }
};