export const XLSX_FIXTURES_COMPLEX_VIEW_ROW_AND_COL_VARS: { [key: string]: (string | number| null)[][] } = {
    'fi':
        [
            [ "Neliövuokra (eur/m2) 2015Q1-2015Q3 muuttujina Alue, Huoneluku, Rahoitusmuoto", null, null, null, null, null ],
            [ null, null, "Yksiöt", "Yksiöt", "Kaksiot", "Kaksiot" ],
            [ null, null, "Vapaarahoitteinen", "ARA", "Vapaarahoitteinen", "ARA" ],
            [ null, null, "Neliövuokra (eur/m2)", "Neliövuokra (eur/m2)", "Neliövuokra (eur/m2)", "Neliövuokra (eur/m2)" ],
            [ "2015Q1", "Helsinki", 22.68, 13.80, 15.77, 12.09 ],
            [ "2015Q1", "Turku", 15.15, 12.70, 10.50, 10.95 ],
            [ "2015Q2", "Helsinki", 22.87, 13.95, 15.95, 12.23 ],
            [ "2015Q2", "Turku", 15.18, 12.84, 10.57, 11.04 ],
            [ "2015Q3", "Helsinki", 23.10, 14.00, 16.12, 12.31 ],
            [ "2015Q3", "Turku", 15.32, 12.93, 10.65, 11.10 ],
            [ "Yksikkö: eur / m2", null, null, null, null, null ],
            ["Lähde: PxVisualizer-fi", null, null, null, null, null]
        ],
    'sv':
        [
            [ "Kvadratmeterspris (eur/m2) 2015Q1-2015Q3 efter Område, Antal rum, Finansieringssätt", null, null, null, null, null ],
            [ null, null, "Enrumslägenhet", "Enrumslägenhet", "Tvårumslägenhet", "Tvårumslägenhet" ],
            [ null, null, "Fri finansierad", "ARA", "Fri finansierad", "ARA" ],
            [ null, null, "Kvadratmeterspris (eur/m2)", "Kvadratmeterspris (eur/m2)", "Kvadratmeterspris (eur/m2)", "Kvadratmeterspris (eur/m2)" ],
            [ "2015Q1", "Helsingfors", 22.68, 13.80, 15.77, 12.09 ],
            [ "2015Q1", "Åbo", 15.15, 12.70, 10.50, 10.95 ],
            [ "2015Q2", "Helsingfors", 22.87, 13.95, 15.95, 12.23 ],
            [ "2015Q2", "Åbo", 15.18, 12.84, 10.57, 11.04 ],
            ["2015Q3", "Helsingfors", 23.10, 14.00, 16.12, 12.31 ],
            [ "2015Q3", "Åbo", 15.32, 12.93, 10.65, 11.10 ],
            [ "Enhet: eur / m2", null, null, null, null, null ],
            ["Källa: PxVisualizer-sv", null, null, null, null, null]
        ],
    'en':
        [
            [ "Rents per square meter (eur/m2) 2015Q1-2015Q3 by Region, Number of rooms, Type of funding", null, null, null, null, null ],
            [ null, null, "One-room flat", "One-room flat", "Two-room flat", "Two-room flat" ],
            [ null, null, "Non subsidised", "Government subsidised", "Non subsidised", "Government subsidised" ],
            [ null, null, "Rents per square meter (eur/m2)", "Rents per square meter (eur/m2)", "Rents per square meter (eur/m2)", "Rents per square meter (eur/m2)" ],
            [ "2015Q1", "Helsinki", 22.68, 13.80, 15.77, 12.09 ],
            [ "2015Q1", "Turku", 15.15, 12.70, 10.50, 10.95 ],
            [ "2015Q2", "Helsinki", 22.87, 13.95, 15.95, 12.23 ],
            [ "2015Q2", "Turku", 15.18, 12.84, 10.57, 11.04 ],
            [ "2015Q3", "Helsinki", 23.10, 14.00, 16.12, 12.31 ],
            [ "2015Q3", "Turku", 15.32, 12.93, 10.65, 11.10 ],
            [ "Unit: eur / m2", null, null, null, null, null ],
            ["Source: PxVisualizer-en", null, null, null, null, null]
        ]
};

export const XLSX_FIXTURES_COL_VARS: { [key: string]: (string | number | null)[][] } = {
    'fi':
        [
            [ "Adoptiot 1987-1989 muuttujina Syntymävaltio, Ikä", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
            [ "1987", "1987", "1987", "1987", "1987", "1987", "1988", "1988", "1988", "1988", "1988", "1988", "1989", "1989", "1989", "1989", "1989", "1989" ],
            [ "Suomi", "Suomi", "Espanja", "Espanja", "Italia", "Italia", "Suomi", "Suomi", "Espanja", "Espanja", "Italia", "Italia", "Suomi", "Suomi", "Espanja", "Espanja", "Italia", "Italia" ],
            [ "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -" ],
            [ 242, 62, 0, 0, 0, 0, 240, 85, 0, 0, 0, 0, 216, 91, 0, 0, 0, 0 ],
            [ "Yksikkö: lukumäärä", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
            ["Lähde: PxVisualizer-fi", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
        ],
    'sv':
        [
            [ "Adoptioner 1987-1989 efter Födelseland, Ålder", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
            [ "1987", "1987", "1987", "1987", "1987", "1987", "1988", "1988", "1988", "1988", "1988", "1988", "1989", "1989", "1989", "1989", "1989", "1989" ],
            [ "Finland", "Finland", "Spanien", "Spanien", "Italien", "Italien", "Finland", "Finland", "Spanien", "Spanien", "Italien", "Italien", "Finland", "Finland", "Spanien", "Spanien", "Italien", "Italien"],
            [ "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -" ],
            [ 242, 62, 0, 0, 0, 0, 240, 85, 0, 0, 0, 0, 216, 91, 0, 0, 0, 0 ],
            [ "Enhet: antal", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
            ["Källa: PxVisualizer-sv", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
        ],
    'en':
        [
            [ "Adoptions 1987-1989 by Country of birth, Age", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
            [ "1987", "1987", "1987", "1987", "1987", "1987", "1988", "1988", "1988", "1988", "1988", "1988", "1989", "1989", "1989", "1989", "1989", "1989" ],
            [ "Finland", "Finland", "Spain", "Spain", "Italy", "Italy", "Finland", "Finland", "Spain", "Spain", "Italy", "Italy", "Finland", "Finland", "Spain", "Spain", "Italy", "Italy" ],
            [ "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -", "0 - 17", "18 -" ],
            [ 242, 62, 0, 0, 0, 0, 240, 85, 0, 0, 0, 0, 216, 91, 0, 0, 0, 0 ],
            [ "Unit: number", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
            ["Source: PxVisualizer-en", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
        ]
};

export const XLSX_FIXTURES_ROW_VARS: { [key: string]: (string | number | null)[][] } = {
    'fi':
        [
            [ "Lukumäärä 2022Q1-2022Q4 muuttujina Alue, Huoneluku, Rahoitusmuoto", null, null, null, null ],
            [ "Vantaa", "2022Q1", "Vapaarahoitteinen", "Yksiöt", 3043 ],
            [ "Vantaa", "2022Q1", "Vapaarahoitteinen", "Kaksiot", 5261 ],
            [ "Vantaa", "2022Q1", "ARA", "Yksiöt", 941 ],
            [ "Vantaa", "2022Q1", "ARA", "Kaksiot", 2083 ],
            [ "Vantaa", "2022Q2", "Vapaarahoitteinen", "Yksiöt", 2679 ],
            [ "Vantaa", "2022Q2", "Vapaarahoitteinen", "Kaksiot", 5017 ],
            [ "Vantaa", "2022Q2", "ARA", "Yksiöt", 846 ],
            [ "Vantaa", "2022Q2", "ARA", "Kaksiot", 1902 ],
            [ "Vantaa", "2022Q3", "Vapaarahoitteinen", "Yksiöt", 2533 ],
            [ "Vantaa", "2022Q3", "Vapaarahoitteinen", "Kaksiot", 4925 ],
            [ "Vantaa", "2022Q3", "ARA", "Yksiöt", 763 ],
            [ "Vantaa", "2022Q3", "ARA", "Kaksiot", 1778 ],
            [ "Vantaa", "2022Q4", "Vapaarahoitteinen", "Yksiöt", 2548 ],
            [ "Vantaa", "2022Q4", "Vapaarahoitteinen", "Kaksiot", 4882 ],
            [ "Vantaa", "2022Q4", "ARA", "Yksiöt", 767 ],
            [ "Vantaa", "2022Q4", "ARA", "Kaksiot", 1744 ],
            [ "Turku", "2022Q1", "Vapaarahoitteinen", "Yksiöt", 5534 ],
            [ "Turku", "2022Q1", "Vapaarahoitteinen", "Kaksiot", 4267 ],
            [ "Turku", "2022Q1", "ARA", "Yksiöt", 1292 ],
            [ "Turku", "2022Q1", "ARA", "Kaksiot", 1782 ],
            [ "Turku", "2022Q2", "Vapaarahoitteinen", "Yksiöt", 4437 ],
            [ "Turku", "2022Q2", "Vapaarahoitteinen", "Kaksiot", 3666 ],
            [ "Turku", "2022Q2", "ARA", "Yksiöt", 1149 ],
            [ "Turku", "2022Q2", "ARA", "Kaksiot", 1642 ],
            [ "Turku", "2022Q3", "Vapaarahoitteinen", "Yksiöt", 4014 ],
            [ "Turku", "2022Q3", "Vapaarahoitteinen", "Kaksiot", 3329 ],
            [ "Turku", "2022Q3", "ARA", "Yksiöt", 1107 ],
            [ "Turku", "2022Q3", "ARA", "Kaksiot", 1554 ],
            [ "Turku", "2022Q4", "Vapaarahoitteinen", "Yksiöt", 4195 ],
            [ "Turku", "2022Q4", "Vapaarahoitteinen", "Kaksiot", 3414 ],
            [ "Turku", "2022Q4", "ARA", "Yksiöt", 1161 ],
            [ "Turku", "2022Q4", "ARA", "Kaksiot", 1557 ],
            [ "Yksikkö: lukumäärä", null, null, null, null ],
            [ "Lähde: PxVisualizer-fi", null, null, null, null ],
        ],
    'sv':
        [
            [ "Antal 2022Q1-2022Q4 efter Område, Antal rum, Finansieringssätt", null, null, null, null ],
            [ "Vanda", "2022Q1", "Fri finansierad", "Enrumslägenhet", 3043 ],
            [ "Vanda", "2022Q1", "Fri finansierad", "Tvårumslägenhet", 5261 ],
            [ "Vanda", "2022Q1", "ARA", "Enrumslägenhet", 941 ],
            [ "Vanda", "2022Q1", "ARA", "Tvårumslägenhet", 2083 ],
            [ "Vanda", "2022Q2", "Fri finansierad", "Enrumslägenhet", 2679 ],
            [ "Vanda", "2022Q2", "Fri finansierad", "Tvårumslägenhet", 5017 ],
            [ "Vanda", "2022Q2", "ARA", "Enrumslägenhet", 846 ],
            [ "Vanda", "2022Q2", "ARA", "Tvårumslägenhet", 1902 ],
            [ "Vanda", "2022Q3", "Fri finansierad", "Enrumslägenhet", 2533 ],
            [ "Vanda", "2022Q3", "Fri finansierad", "Tvårumslägenhet", 4925 ],
            [ "Vanda", "2022Q3", "ARA", "Enrumslägenhet", 763 ],
            [ "Vanda", "2022Q3", "ARA", "Tvårumslägenhet", 1778 ],
            [ "Vanda", "2022Q4", "Fri finansierad", "Enrumslägenhet", 2548 ],
            [ "Vanda", "2022Q4", "Fri finansierad", "Tvårumslägenhet", 4882 ],
            [ "Vanda", "2022Q4", "ARA", "Enrumslägenhet", 767 ],
            [ "Vanda", "2022Q4", "ARA", "Tvårumslägenhet", 1744 ],
            [ "Åbo", "2022Q1", "Fri finansierad", "Enrumslägenhet", 5534 ],
            [ "Åbo", "2022Q1", "Fri finansierad", "Tvårumslägenhet", 4267 ],
            [ "Åbo", "2022Q1", "ARA", "Enrumslägenhet", 1292 ],
            [ "Åbo", "2022Q1", "ARA", "Tvårumslägenhet", 1782 ],
            [ "Åbo", "2022Q2", "Fri finansierad", "Enrumslägenhet", 4437 ],
            [ "Åbo", "2022Q2", "Fri finansierad", "Tvårumslägenhet", 3666 ],
            [ "Åbo", "2022Q2", "ARA", "Enrumslägenhet", 1149 ],
            [ "Åbo", "2022Q2", "ARA", "Tvårumslägenhet", 1642 ],
            [ "Åbo", "2022Q3", "Fri finansierad", "Enrumslägenhet", 4014 ],
            [ "Åbo", "2022Q3", "Fri finansierad", "Tvårumslägenhet", 3329 ],
            [ "Åbo", "2022Q3", "ARA", "Enrumslägenhet", 1107 ],
            [ "Åbo", "2022Q3", "ARA", "Tvårumslägenhet", 1554 ],
            [ "Åbo", "2022Q4", "Fri finansierad", "Enrumslägenhet", 4195 ],
            [ "Åbo", "2022Q4", "Fri finansierad", "Tvårumslägenhet", 3414 ],
            [ "Åbo", "2022Q4", "ARA", "Enrumslägenhet", 1161 ],
            [ "Åbo", "2022Q4", "ARA", "Tvårumslägenhet", 1557 ],
            [ "Enhet: antal", null, null, null, null ],
            [ "Källa: PxVisualizer-sv", null, null, null, null ]
        ],
    'en':
        [
            [ "Number 2022Q1-2022Q4 by Region, Number of rooms, Type of funding", null, null, null, null ],
            [ "Vantaa", "2022Q1", "Non subsidised", "One-room flat", 3043 ],
            [ "Vantaa", "2022Q1", "Non subsidised", "Two-room flat", 5261 ],
            [ "Vantaa", "2022Q1", "Government subsidised", "One-room flat", 941 ],
            [ "Vantaa", "2022Q1", "Government subsidised", "Two-room flat", 2083 ],
            [ "Vantaa", "2022Q2", "Non subsidised", "One-room flat", 2679 ],
            [ "Vantaa", "2022Q2", "Non subsidised", "Two-room flat", 5017 ],
            [ "Vantaa", "2022Q2", "Government subsidised", "One-room flat", 846 ],
            [ "Vantaa", "2022Q2", "Government subsidised", "Two-room flat", 1902 ],
            [ "Vantaa", "2022Q3", "Non subsidised", "One-room flat", 2533 ],
            [ "Vantaa", "2022Q3", "Non subsidised", "Two-room flat", 4925 ],
            [ "Vantaa", "2022Q3", "Government subsidised", "One-room flat", 763 ],
            [ "Vantaa", "2022Q3", "Government subsidised", "Two-room flat", 1778 ],
            [ "Vantaa", "2022Q4", "Non subsidised", "One-room flat", 2548 ],
            [ "Vantaa", "2022Q4", "Non subsidised", "Two-room flat", 4882 ],
            [ "Vantaa", "2022Q4", "Government subsidised", "One-room flat", 767 ],
            [ "Vantaa", "2022Q4", "Government subsidised", "Two-room flat", 1744 ],
            [ "Turku", "2022Q1", "Non subsidised", "One-room flat", 5534 ],
            [ "Turku", "2022Q1", "Non subsidised", "Two-room flat", 4267 ],
            [ "Turku", "2022Q1", "Government subsidised", "One-room flat", 1292 ],
            [ "Turku", "2022Q1", "Government subsidised", "Two-room flat", 1782 ],
            [ "Turku", "2022Q2", "Non subsidised", "One-room flat", 4437 ],
            [ "Turku", "2022Q2", "Non subsidised", "Two-room flat", 3666 ],
            [ "Turku", "2022Q2", "Government subsidised", "One-room flat", 1149 ],
            [ "Turku", "2022Q2", "Government subsidised", "Two-room flat", 1642 ],
            [ "Turku", "2022Q3", "Non subsidised", "One-room flat", 4014 ],
            [ "Turku", "2022Q3", "Non subsidised", "Two-room flat", 3329 ],
            [ "Turku", "2022Q3", "Government subsidised", "One-room flat", 1107 ],
            [ "Turku", "2022Q3", "Government subsidised", "Two-room flat", 1554 ],
            [ "Turku", "2022Q4", "Non subsidised", "One-room flat", 4195 ],
            [ "Turku", "2022Q4", "Non subsidised", "Two-room flat", 3414 ],
            [ "Turku", "2022Q4", "Government subsidised", "One-room flat", 1161 ],
            [ "Turku", "2022Q4", "Government subsidised", "Two-room flat", 1557 ],
            [ "Unit: number", null, null, null, null ],
            [ "Source: PxVisualizer-en", null, null, null, null]
        ]
};

export const XLSX_FIXTURES_ROW_AND_COL_VARS: { [key: string]: (string | number | null)[][] } = {
    'fi':
        [
            [ "Tiedot 2022Q1-2022Q4 muuttujina Tiedot, Alue, Huoneluku, Rahoitusmuoto", null, null, null, null, null, null ],
            [ null, null, null, "Yksiöt", "Yksiöt", "Kaksiot", "Kaksiot" ],
            [ null, null, null, "Lukumäärä", "Neliövuokra (eur/m2)", "Lukumäärä", "Neliövuokra (eur/m2)" ],
            [ "Helsinki", "2022Q1", "Vapaarahoitteinen", 13021, 26.64, 10080, 20.22 ],
            [ "Helsinki", "2022Q1", "ARA", 3810, 15.90, 6176, 13.74 ],
            [ "Helsinki", "2022Q2", "Vapaarahoitteinen", 11231, 26.82, 9326, 20.45 ],
            [ "Helsinki", "2022Q2", "ARA", 3552, 15.97, 5749, 13.78 ],
            [ "Helsinki", "2022Q3", "Vapaarahoitteinen", 10269, 26.93, 8907, 20.59 ],
            [ "Helsinki", "2022Q3", "ARA", 3249, 15.99, 5280, 13.79 ],
            [ "Helsinki", "2022Q4", "Vapaarahoitteinen", 10272, 26.93, 8805, 20.66 ],
            [ "Helsinki", "2022Q4", "ARA", 3323, 16.08, 5265, 13.80 ],
            [ "Vantaa", "2022Q1", "Vapaarahoitteinen", 3043, 23.48, 5261, 17.62 ],
            [ "Vantaa", "2022Q1", "ARA", 941, 16.13, 2083, 13.96 ],
            [ "Vantaa", "2022Q2", "Vapaarahoitteinen", 2679, 23.64, 5017, 17.79 ],
            [ "Vantaa", "2022Q2", "ARA", 846, 16.05, 1902, 13.91 ],
            [ "Vantaa", "2022Q3", "Vapaarahoitteinen", 2533, 23.68, 4925, 17.85 ],
            [ "Vantaa", "2022Q3", "ARA", 763, 15.97, 1778, 13.90 ],
            [ "Vantaa", "2022Q4", "Vapaarahoitteinen", 2548, 23.77, 4882, 17.99 ],
            [ "Vantaa", "2022Q4", "ARA", 767, 15.98, 1744, 13.97 ],
            [ "Turku", "2022Q1", "Vapaarahoitteinen", 5534, 18.16, 4267, 14.07 ],
            [ "Turku", "2022Q1", "ARA", 1292, 13.91, 1782, 11.81 ],
            [ "Turku", "2022Q2", "Vapaarahoitteinen", 4437, 18.32, 3666, 14.27 ],
            [ "Turku", "2022Q2", "ARA", 1149, 14.02, 1642, 11.87 ],
            [ "Turku", "2022Q3", "Vapaarahoitteinen", 4014, 18.44, 3329, 14.37 ],
            [ "Turku", "2022Q3", "ARA", 1107, 14.06, 1554, 11.86 ],
            [ "Turku", "2022Q4", "Vapaarahoitteinen", 4195, 18.53, 3414, 14.48 ],
            [ "Turku", "2022Q4", "ARA", 1161, 14.11, 1557, 11.96 ],
            [ "Yksikkö: Lukumäärä: lukumäärä, Neliövuokra (eur/m2): eur / m2", null, null, null, null, null, null ],
            [ "Lähde: PxVisualizer-fi", null, null, null, null, null, null ]
        ],
    'sv':
        [
            [ "Uppgifter 2022Q1-2022Q4 efter Uppgifter, Område, Antal rum, Finansieringssätt", null, null, null, null, null, null ],
            [ null, null, null, "Enrumslägenhet", "Enrumslägenhet", "Tvårumslägenhet", "Tvårumslägenhet" ],
            [ null, null, null, "Antal", "Kvadratmeterspris (eur/m2)", "Antal", "Kvadratmeterspris (eur/m2)" ],
            [ "Helsingfors", "2022Q1", "Fri finansierad", 13021, 26.64, 10080, 20.22 ],
            [ "Helsingfors", "2022Q1", "ARA", 3810, 15.90, 6176, 13.74 ],
            [ "Helsingfors", "2022Q2", "Fri finansierad", 11231, 26.82, 9326, 20.45 ],
            [ "Helsingfors", "2022Q2", "ARA", 3552, 15.97, 5749, 13.78 ],
            [ "Helsingfors", "2022Q3", "Fri finansierad", 10269, 26.93, 8907, 20.59 ],
            [ "Helsingfors", "2022Q3", "ARA", 3249, 15.99, 5280, 13.79 ],
            [ "Helsingfors", "2022Q4", "Fri finansierad", 10272, 26.93, 8805, 20.66 ],
            [ "Helsingfors", "2022Q4", "ARA", 3323, 16.08, 5265, 13.80 ],
            [ "Vanda", "2022Q1", "Fri finansierad", 3043, 23.48, 5261, 17.62 ],
            [ "Vanda", "2022Q1", "ARA", 941, 16.13, 2083, 13.96 ],
            [ "Vanda", "2022Q2", "Fri finansierad", 2679, 23.64, 5017, 17.79 ],
            [ "Vanda", "2022Q2", "ARA", 846, 16.05, 1902, 13.91 ],
            [ "Vanda", "2022Q3", "Fri finansierad", 2533, 23.68, 4925, 17.85 ],
            [ "Vanda", "2022Q3", "ARA", 763, 15.97, 1778, 13.90 ],
            [ "Vanda", "2022Q4", "Fri finansierad", 2548, 23.77, 4882, 17.99 ],
            [ "Vanda", "2022Q4", "ARA", 767, 15.98, 1744, 13.97 ],
            [ "Åbo", "2022Q1", "Fri finansierad", 5534, 18.16, 4267, 14.07 ],
            [ "Åbo", "2022Q1", "ARA", 1292, 13.91, 1782, 11.81 ],
            [ "Åbo", "2022Q2", "Fri finansierad", 4437, 18.32, 3666, 14.27 ],
            [ "Åbo", "2022Q2", "ARA", 1149, 14.02, 1642, 11.87 ],
            [ "Åbo", "2022Q3", "Fri finansierad", 4014, 18.44, 3329, 14.37 ],
            [ "Åbo", "2022Q3", "ARA", 1107, 14.06, 1554, 11.86 ],
            [ "Åbo", "2022Q4", "Fri finansierad", 4195, 18.53, 3414, 14.48 ],
            [ "Åbo", "2022Q4", "ARA", 1161, 14.11, 1557, 11.96 ],
            [ "Enhet: Antal: antal, Kvadratmeterspris (eur/m2): eur / m2", null, null, null, null, null, null ],
            ["Källa: PxVisualizer-sv", null, null, null, null, null, null]
        ],
    'en':
        [
            [ "Information 2022Q1-2022Q4 by Information, Region, Number of rooms, Type of funding", null, null, null, null, null, null ],
            [ null, null, null, "One-room flat", "One-room flat", "Two-room flat", "Two-room flat"],
            [ null, null, null, "Number", "Rents per square meter (eur/m2)", "Number", "Rents per square meter (eur/m2)" ],
            [ "Helsinki", "2022Q1", "Non subsidised", 13021, 26.64, 10080, 20.22 ],
            [ "Helsinki", "2022Q1", "Government subsidised", 3810, 15.90, 6176, 13.74 ],
            [ "Helsinki", "2022Q2", "Non subsidised", 11231, 26.82, 9326, 20.45 ],
            [ "Helsinki", "2022Q2", "Government subsidised", 3552, 15.97, 5749, 13.78 ],
            [ "Helsinki", "2022Q3", "Non subsidised", 10269, 26.93, 8907, 20.59 ],
            [ "Helsinki", "2022Q3", "Government subsidised", 3249, 15.99, 5280, 13.79 ],
            [ "Helsinki", "2022Q4", "Non subsidised", 10272, 26.93, 8805, 20.66 ],
            [ "Helsinki", "2022Q4", "Government subsidised", 3323, 16.08, 5265, 13.80 ],
            [ "Vantaa", "2022Q1", "Non subsidised", 3043, 23.48, 5261, 17.62 ],
            [ "Vantaa", "2022Q1", "Government subsidised", 941, 16.13, 2083, 13.96 ],
            [ "Vantaa", "2022Q2", "Non subsidised", 2679, 23.64, 5017, 17.79 ],
            [ "Vantaa", "2022Q2", "Government subsidised", 846, 16.05, 1902, 13.91 ],
            [ "Vantaa", "2022Q3", "Non subsidised", 2533, 23.68, 4925, 17.85 ],
            [ "Vantaa", "2022Q3", "Government subsidised", 763, 15.97, 1778, 13.90 ],
            [ "Vantaa", "2022Q4", "Non subsidised", 2548, 23.77, 4882, 17.99 ],
            [ "Vantaa", "2022Q4", "Government subsidised", 767, 15.98, 1744, 13.97 ],
            [ "Turku", "2022Q1", "Non subsidised", 5534, 18.16, 4267, 14.07 ],
            [ "Turku", "2022Q1", "Government subsidised", 1292, 13.91, 1782, 11.81 ],
            [ "Turku", "2022Q2", "Non subsidised", 4437, 18.32, 3666, 14.27 ],
            [ "Turku", "2022Q2", "Government subsidised", 1149, 14.02, 1642, 11.87 ],
            [ "Turku", "2022Q3", "Non subsidised", 4014, 18.44, 3329, 14.37 ],
            [ "Turku", "2022Q3", "Government subsidised", 1107, 14.06, 1554, 11.86 ],
            [ "Turku", "2022Q4", "Non subsidised", 4195, 18.53, 3414, 14.48 ],
            [ "Turku", "2022Q4", "Government subsidised", 1161, 14.11, 1557, 11.96 ],
            [ "Unit: Number: number, Rents per square meter (eur/m2): eur / m2", null, null, null, null, null, null ],
            [ "Source: PxVisualizer-en", null, null, null, null, null, null ]
        ]
};

export const XLSX_FIXTURES_ONE_CELL: { [key: string]: (string | number | null)[][] } = {
    'fi':
        [
            [ "Lukumäärä, Vantaa, Yksiöt, Vapaarahoitteinen 2022Q4" ],
            [ 2548 ],
            [ "Yksikkö: lukumäärä" ],
            [ "Lähde: PxVisualizer-fi" ],
        ],
    'sv':
        [
            [ "Antal, Vanda, Enrumslägenhet, Fri finansierad 2022Q4" ],
            [ 2548 ],
            [ "Enhet: antal" ],
            [ "Källa: PxVisualizer-sv" ],
        ],
    'en':
        [
            [ "Number, Vantaa, One-room flat, Non subsidised 2022Q4" ],
            [ 2548 ],
            [ "Unit: number" ],
            [ "Source: PxVisualizer-en" ]
        ]
};

export const XLSX_FIXTURES_ONE_CELL_ESCAPE_CHARACTERS: { [key: string]: (string | number | null)[][] } = {
    'en':
        [
            ["& < > ' \" Number, Vantaa, One-room flat, Non subsidised 2022Q4"],
            [2548],
            ["Unit: number"],
            ["Source: PxVisualizer-en"]
        ]
};
