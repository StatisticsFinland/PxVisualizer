export const CSV_FIXTURES_COMPLEX_VIEW_ROW_AND_COL_VARS: { [key: string]: string } = {
    'fi':
        '"Neliövuokra (eur/m2) 2015Q1-2015Q3 muuttujina Alue, Huoneluku, Rahoitusmuoto";;;;;\n' +
        ';;"Yksiöt";"Yksiöt";"Kaksiot";"Kaksiot"\n' +
        ';;"Vapaarahoitteinen";"ARA";"Vapaarahoitteinen";"ARA"\n' +
        ';;"Neliövuokra (eur/m2)";"Neliövuokra (eur/m2)";"Neliövuokra (eur/m2)";"Neliövuokra (eur/m2)"\n' +
        '"2015Q1";"Helsinki";22,68;13,80;15,77;12,09\n' +
        '"2015Q1";"Turku";15,15;12,70;10,50;10,95\n' +
        '"2015Q2";"Helsinki";22,87;13,95;15,95;12,23\n' +
        '"2015Q2";"Turku";15,18;12,84;10,57;11,04\n' +
        '"2015Q3";"Helsinki";23,10;14,00;16,12;12,31\n' +
        '"2015Q3";"Turku";15,32;12,93;10,65;11,10\n' +
        '"Yksikkö: eur / m2";;;;;\n' +
        '"Lähde: PxVisualizer-fi";;;;;',
    'sv':
        '"Kvadratmeterspris (eur/m2) 2015Q1-2015Q3 efter Område, Antal rum, Finansieringssätt";;;;;\n' +
        ';;"Enrumslägenhet";"Enrumslägenhet";"Tvårumslägenhet";"Tvårumslägenhet"\n' +
        ';;"Fri finansierad";"ARA";"Fri finansierad";"ARA"\n' +
        ';;"Kvadratmeterspris (eur/m2)";"Kvadratmeterspris (eur/m2)";"Kvadratmeterspris (eur/m2)";"Kvadratmeterspris (eur/m2)"\n' +
        '"2015Q1";"Helsingfors";22,68;13,80;15,77;12,09\n' +
        '"2015Q1";"Åbo";15,15;12,70;10,50;10,95\n' +
        '"2015Q2";"Helsingfors";22,87;13,95;15,95;12,23\n' +
        '"2015Q2";"Åbo";15,18;12,84;10,57;11,04\n' +
        '"2015Q3";"Helsingfors";23,10;14,00;16,12;12,31\n' +
        '"2015Q3";"Åbo";15,32;12,93;10,65;11,10\n' +
        '"Enhet: eur / m2";;;;;\n' +
        '"Källa: PxVisualizer-sv";;;;;',
    'en':
        '"Rents per square meter (eur/m2) 2015Q1-2015Q3 by Region, Number of rooms, Type of funding",,,,,\n' +
        ',,"One-room flat","One-room flat","Two-room flat","Two-room flat"\n' +
        ',,"Non subsidised","Government subsidised","Non subsidised","Government subsidised"\n' +
        ',,"Rents per square meter (eur/m2)","Rents per square meter (eur/m2)","Rents per square meter (eur/m2)","Rents per square meter (eur/m2)"\n' +
        '"2015Q1","Helsinki",22.68,13.80,15.77,12.09\n' +
        '"2015Q1","Turku",15.15,12.70,10.50,10.95\n' +
        '"2015Q2","Helsinki",22.87,13.95,15.95,12.23\n' +
        '"2015Q2","Turku",15.18,12.84,10.57,11.04\n' +
        '"2015Q3","Helsinki",23.10,14.00,16.12,12.31\n' +
        '"2015Q3","Turku",15.32,12.93,10.65,11.10\n' +
        '"Unit: eur / m2",,,,,\n' +
        '"Source: PxVisualizer-en",,,,,'
};

export const CSV_FIXTURES_COL_VARS: { [key: string]: string } = {
    'fi':
        '"Adoptiot 1987-1989 muuttujina Syntymävaltio, Ikä";;;;;;;;;;;;;;;;;\n' +
        '"1987";"1987";"1987";"1987";"1987";"1987";"1988";"1988";"1988";"1988";"1988";"1988";"1989";"1989";"1989";"1989";"1989";"1989"\n' +
        '"Suomi";"Suomi";"Espanja";"Espanja";"Italia";"Italia";"Suomi";"Suomi";"Espanja";"Espanja";"Italia";"Italia";"Suomi";"Suomi";"Espanja";"Espanja";"Italia";"Italia"\n' +
        '"0 - 17";"18 -";"0 - 17";"18 -";"0 - 17";"18 -";"0 - 17";"18 -";"0 - 17";"18 -";"0 - 17";"18 -";"0 - 17";"18 -";"0 - 17";"18 -";"0 - 17";"18 -"\n' +
        '242;62;0;0;0;0;240;85;0;0;0;0;216;91;0;0;0;0\n' +
        '"Yksikkö: lukumäärä";;;;;;;;;;;;;;;;;\n' +
        '"Lähde: PxVisualizer-fi";;;;;;;;;;;;;;;;;',
    'sv':
        '"Adoptioner 1987-1989 efter Födelseland, Ålder";;;;;;;;;;;;;;;;;\n' +
        '"1987";"1987";"1987";"1987";"1987";"1987";"1988";"1988";"1988";"1988";"1988";"1988";"1989";"1989";"1989";"1989";"1989";"1989"\n' +
        '"Finland";"Finland";"Spanien";"Spanien";"Italien";"Italien";"Finland";"Finland";"Spanien";"Spanien";"Italien";"Italien";"Finland";"Finland";"Spanien";"Spanien";"Italien";"Italien"\n' +
        '"0 - 17";"18 -";"0 - 17";"18 -";"0 - 17";"18 -";"0 - 17";"18 -";"0 - 17";"18 -";"0 - 17";"18 -";"0 - 17";"18 -";"0 - 17";"18 -";"0 - 17";"18 -"\n' +
        '242;62;0;0;0;0;240;85;0;0;0;0;216;91;0;0;0;0\n' +
        '"Enhet: antal";;;;;;;;;;;;;;;;;\n' +
        '"Källa: PxVisualizer-sv";;;;;;;;;;;;;;;;;',
    'en':
        '"Adoptions 1987-1989 by Country of birth, Age",,,,,,,,,,,,,,,,,\n' +
        '"1987","1987","1987","1987","1987","1987","1988","1988","1988","1988","1988","1988","1989","1989","1989","1989","1989","1989"\n' +
        '"Finland","Finland","Spain","Spain","Italy","Italy","Finland","Finland","Spain","Spain","Italy","Italy","Finland","Finland","Spain","Spain","Italy","Italy"\n' +
        '"0 - 17","18 -","0 - 17","18 -","0 - 17","18 -","0 - 17","18 -","0 - 17","18 -","0 - 17","18 -","0 - 17","18 -","0 - 17","18 -","0 - 17","18 -"\n' +
        '242,62,0,0,0,0,240,85,0,0,0,0,216,91,0,0,0,0\n' +
        '"Unit: number",,,,,,,,,,,,,,,,,\n' +
        '"Source: PxVisualizer-en",,,,,,,,,,,,,,,,,'
};

export const CSV_FIXTURES_ROW_VARS: { [key: string]: string } = {
    'fi':
        '"Lukumäärä 2022Q1-2022Q4 muuttujina Alue, Huoneluku, Rahoitusmuoto";;;;\n' +
        '"Vantaa";"2022Q1";"Vapaarahoitteinen";"Yksiöt";3043\n' +
        '"Vantaa";"2022Q1";"Vapaarahoitteinen";"Kaksiot";5261\n' +
        '"Vantaa";"2022Q1";"ARA";"Yksiöt";941\n' +
        '"Vantaa";"2022Q1";"ARA";"Kaksiot";2083\n' +
        '"Vantaa";"2022Q2";"Vapaarahoitteinen";"Yksiöt";2679\n' +
        '"Vantaa";"2022Q2";"Vapaarahoitteinen";"Kaksiot";5017\n' +
        '"Vantaa";"2022Q2";"ARA";"Yksiöt";846\n' +
        '"Vantaa";"2022Q2";"ARA";"Kaksiot";1902\n' +
        '"Vantaa";"2022Q3";"Vapaarahoitteinen";"Yksiöt";2533\n' +
        '"Vantaa";"2022Q3";"Vapaarahoitteinen";"Kaksiot";4925\n' +
        '"Vantaa";"2022Q3";"ARA";"Yksiöt";763\n' +
        '"Vantaa";"2022Q3";"ARA";"Kaksiot";1778\n' +
        '"Vantaa";"2022Q4";"Vapaarahoitteinen";"Yksiöt";2548\n' +
        '"Vantaa";"2022Q4";"Vapaarahoitteinen";"Kaksiot";4882\n' +
        '"Vantaa";"2022Q4";"ARA";"Yksiöt";767\n' +
        '"Vantaa";"2022Q4";"ARA";"Kaksiot";1744\n' +
        '"Turku";"2022Q1";"Vapaarahoitteinen";"Yksiöt";5534\n' +
        '"Turku";"2022Q1";"Vapaarahoitteinen";"Kaksiot";4267\n' +
        '"Turku";"2022Q1";"ARA";"Yksiöt";1292\n' +
        '"Turku";"2022Q1";"ARA";"Kaksiot";1782\n' +
        '"Turku";"2022Q2";"Vapaarahoitteinen";"Yksiöt";4437\n' +
        '"Turku";"2022Q2";"Vapaarahoitteinen";"Kaksiot";3666\n' +
        '"Turku";"2022Q2";"ARA";"Yksiöt";1149\n' +
        '"Turku";"2022Q2";"ARA";"Kaksiot";1642\n' +
        '"Turku";"2022Q3";"Vapaarahoitteinen";"Yksiöt";4014\n' +
        '"Turku";"2022Q3";"Vapaarahoitteinen";"Kaksiot";3329\n' +
        '"Turku";"2022Q3";"ARA";"Yksiöt";1107\n' +
        '"Turku";"2022Q3";"ARA";"Kaksiot";1554\n' +
        '"Turku";"2022Q4";"Vapaarahoitteinen";"Yksiöt";4195\n' +
        '"Turku";"2022Q4";"Vapaarahoitteinen";"Kaksiot";3414\n' +
        '"Turku";"2022Q4";"ARA";"Yksiöt";1161\n' +
        '"Turku";"2022Q4";"ARA";"Kaksiot";1557\n' +
        '"Yksikkö: lukumäärä";;;;\n' +
        '"Lähde: PxVisualizer-fi";;;;',
    'sv':
        '"Antal 2022Q1-2022Q4 efter Område, Antal rum, Finansieringssätt";;;;\n' +
        '"Vanda";"2022Q1";"Fri finansierad";"Enrumslägenhet";3043\n' +
        '"Vanda";"2022Q1";"Fri finansierad";"Tvårumslägenhet";5261\n' +
        '"Vanda";"2022Q1";"ARA";"Enrumslägenhet";941\n' +
        '"Vanda";"2022Q1";"ARA";"Tvårumslägenhet";2083\n' +
        '"Vanda";"2022Q2";"Fri finansierad";"Enrumslägenhet";2679\n' +
        '"Vanda";"2022Q2";"Fri finansierad";"Tvårumslägenhet";5017\n' +
        '"Vanda";"2022Q2";"ARA";"Enrumslägenhet";846\n' +
        '"Vanda";"2022Q2";"ARA";"Tvårumslägenhet";1902\n' +
        '"Vanda";"2022Q3";"Fri finansierad";"Enrumslägenhet";2533\n' +
        '"Vanda";"2022Q3";"Fri finansierad";"Tvårumslägenhet";4925\n' +
        '"Vanda";"2022Q3";"ARA";"Enrumslägenhet";763\n' +
        '"Vanda";"2022Q3";"ARA";"Tvårumslägenhet";1778\n' +
        '"Vanda";"2022Q4";"Fri finansierad";"Enrumslägenhet";2548\n' +
        '"Vanda";"2022Q4";"Fri finansierad";"Tvårumslägenhet";4882\n' +
        '"Vanda";"2022Q4";"ARA";"Enrumslägenhet";767\n' +
        '"Vanda";"2022Q4";"ARA";"Tvårumslägenhet";1744\n' +
        '"Åbo";"2022Q1";"Fri finansierad";"Enrumslägenhet";5534\n' +
        '"Åbo";"2022Q1";"Fri finansierad";"Tvårumslägenhet";4267\n' +
        '"Åbo";"2022Q1";"ARA";"Enrumslägenhet";1292\n' +
        '"Åbo";"2022Q1";"ARA";"Tvårumslägenhet";1782\n' +
        '"Åbo";"2022Q2";"Fri finansierad";"Enrumslägenhet";4437\n' +
        '"Åbo";"2022Q2";"Fri finansierad";"Tvårumslägenhet";3666\n' +
        '"Åbo";"2022Q2";"ARA";"Enrumslägenhet";1149\n' +
        '"Åbo";"2022Q2";"ARA";"Tvårumslägenhet";1642\n' +
        '"Åbo";"2022Q3";"Fri finansierad";"Enrumslägenhet";4014\n' +
        '"Åbo";"2022Q3";"Fri finansierad";"Tvårumslägenhet";3329\n' +
        '"Åbo";"2022Q3";"ARA";"Enrumslägenhet";1107\n' +
        '"Åbo";"2022Q3";"ARA";"Tvårumslägenhet";1554\n' +
        '"Åbo";"2022Q4";"Fri finansierad";"Enrumslägenhet";4195\n' +
        '"Åbo";"2022Q4";"Fri finansierad";"Tvårumslägenhet";3414\n' +
        '"Åbo";"2022Q4";"ARA";"Enrumslägenhet";1161\n' +
        '"Åbo";"2022Q4";"ARA";"Tvårumslägenhet";1557\n' +
        '"Enhet: antal";;;;\n' +
        '"Källa: PxVisualizer-sv";;;;',
    'en':
        '"Number 2022Q1-2022Q4 by Region, Number of rooms, Type of funding",,,,\n' +
        '"Vantaa","2022Q1","Non subsidised","One-room flat",3043\n' +
        '"Vantaa","2022Q1","Non subsidised","Two-room flat",5261\n' +
        '"Vantaa","2022Q1","Government subsidised","One-room flat",941\n' +
        '"Vantaa","2022Q1","Government subsidised","Two-room flat",2083\n' +
        '"Vantaa","2022Q2","Non subsidised","One-room flat",2679\n' +
        '"Vantaa","2022Q2","Non subsidised","Two-room flat",5017\n' +
        '"Vantaa","2022Q2","Government subsidised","One-room flat",846\n' +
        '"Vantaa","2022Q2","Government subsidised","Two-room flat",1902\n' +
        '"Vantaa","2022Q3","Non subsidised","One-room flat",2533\n' +
        '"Vantaa","2022Q3","Non subsidised","Two-room flat",4925\n' +
        '"Vantaa","2022Q3","Government subsidised","One-room flat",763\n' +
        '"Vantaa","2022Q3","Government subsidised","Two-room flat",1778\n' +
        '"Vantaa","2022Q4","Non subsidised","One-room flat",2548\n' +
        '"Vantaa","2022Q4","Non subsidised","Two-room flat",4882\n' +
        '"Vantaa","2022Q4","Government subsidised","One-room flat",767\n' +
        '"Vantaa","2022Q4","Government subsidised","Two-room flat",1744\n' +
        '"Turku","2022Q1","Non subsidised","One-room flat",5534\n' +
        '"Turku","2022Q1","Non subsidised","Two-room flat",4267\n' +
        '"Turku","2022Q1","Government subsidised","One-room flat",1292\n' +
        '"Turku","2022Q1","Government subsidised","Two-room flat",1782\n' +
        '"Turku","2022Q2","Non subsidised","One-room flat",4437\n' +
        '"Turku","2022Q2","Non subsidised","Two-room flat",3666\n' +
        '"Turku","2022Q2","Government subsidised","One-room flat",1149\n' +
        '"Turku","2022Q2","Government subsidised","Two-room flat",1642\n' +
        '"Turku","2022Q3","Non subsidised","One-room flat",4014\n' +
        '"Turku","2022Q3","Non subsidised","Two-room flat",3329\n' +
        '"Turku","2022Q3","Government subsidised","One-room flat",1107\n' +
        '"Turku","2022Q3","Government subsidised","Two-room flat",1554\n' +
        '"Turku","2022Q4","Non subsidised","One-room flat",4195\n' +
        '"Turku","2022Q4","Non subsidised","Two-room flat",3414\n' +
        '"Turku","2022Q4","Government subsidised","One-room flat",1161\n' +
        '"Turku","2022Q4","Government subsidised","Two-room flat",1557\n' +
        '"Unit: number",,,,\n' +
        '"Source: PxVisualizer-en",,,,'
};

export const CSV_FIXTURES_ROW_AND_COL_VARS: { [key: string]: string } = {
    'fi':
        '"Tiedot 2022Q1-2022Q4 muuttujina Tiedot, Alue, Huoneluku, Rahoitusmuoto";;;;;;\n' +
        ';;;"Yksiöt";"Yksiöt";"Kaksiot";"Kaksiot"\n' +
        ';;;"Lukumäärä";"Neliövuokra (eur/m2)";"Lukumäärä";"Neliövuokra (eur/m2)"\n' +
        '"Helsinki";"2022Q1";"Vapaarahoitteinen";13021;26,64;10080;20,22\n' +
        '"Helsinki";"2022Q1";"ARA";3810;15,90;6176;13,74\n' +
        '"Helsinki";"2022Q2";"Vapaarahoitteinen";11231;26,82;9326;20,45\n' +
        '"Helsinki";"2022Q2";"ARA";3552;15,97;5749;13,78\n' +
        '"Helsinki";"2022Q3";"Vapaarahoitteinen";10269;26,93;8907;20,59\n' +
        '"Helsinki";"2022Q3";"ARA";3249;15,99;5280;13,79\n' +
        '"Helsinki";"2022Q4";"Vapaarahoitteinen";10272;26,93;8805;20,66\n' +
        '"Helsinki";"2022Q4";"ARA";3323;16,08;5265;13,80\n' +
        '"Vantaa";"2022Q1";"Vapaarahoitteinen";3043;23,48;5261;17,62\n' +
        '"Vantaa";"2022Q1";"ARA";941;16,13;2083;13,96\n' +
        '"Vantaa";"2022Q2";"Vapaarahoitteinen";2679;23,64;5017;17,79\n' +
        '"Vantaa";"2022Q2";"ARA";846;16,05;1902;13,91\n' +
        '"Vantaa";"2022Q3";"Vapaarahoitteinen";2533;23,68;4925;17,85\n' +
        '"Vantaa";"2022Q3";"ARA";763;15,97;1778;13,90\n' +
        '"Vantaa";"2022Q4";"Vapaarahoitteinen";2548;23,77;4882;17,99\n' +
        '"Vantaa";"2022Q4";"ARA";767;15,98;1744;13,97\n' +
        '"Turku";"2022Q1";"Vapaarahoitteinen";5534;18,16;4267;14,07\n' +
        '"Turku";"2022Q1";"ARA";1292;13,91;1782;11,81\n' +
        '"Turku";"2022Q2";"Vapaarahoitteinen";4437;18,32;3666;14,27\n' +
        '"Turku";"2022Q2";"ARA";1149;14,02;1642;11,87\n' +
        '"Turku";"2022Q3";"Vapaarahoitteinen";4014;18,44;3329;14,37\n' +
        '"Turku";"2022Q3";"ARA";1107;14,06;1554;11,86\n' +
        '"Turku";"2022Q4";"Vapaarahoitteinen";4195;18,53;3414;14,48\n' +
        '"Turku";"2022Q4";"ARA";1161;14,11;1557;11,96\n' +
        '"Yksikkö: Lukumäärä: lukumäärä, Neliövuokra (eur/m2): eur / m2";;;;;;\n' +
        '"Lähde: PxVisualizer-fi";;;;;;',
    'sv':
        '"Uppgifter 2022Q1-2022Q4 efter Uppgifter, Område, Antal rum, Finansieringssätt";;;;;;\n' +
        ';;;"Enrumslägenhet";"Enrumslägenhet";"Tvårumslägenhet";"Tvårumslägenhet"\n' +
        ';;;"Antal";"Kvadratmeterspris (eur/m2)";"Antal";"Kvadratmeterspris (eur/m2)"\n' +
        '"Helsingfors";"2022Q1";"Fri finansierad";13021;26,64;10080;20,22\n' +
        '"Helsingfors";"2022Q1";"ARA";3810;15,90;6176;13,74\n' +
        '"Helsingfors";"2022Q2";"Fri finansierad";11231;26,82;9326;20,45\n' +
        '"Helsingfors";"2022Q2";"ARA";3552;15,97;5749;13,78\n' +
        '"Helsingfors";"2022Q3";"Fri finansierad";10269;26,93;8907;20,59\n' +
        '"Helsingfors";"2022Q3";"ARA";3249;15,99;5280;13,79\n' +
        '"Helsingfors";"2022Q4";"Fri finansierad";10272;26,93;8805;20,66\n' +
        '"Helsingfors";"2022Q4";"ARA";3323;16,08;5265;13,80\n' +
        '"Vanda";"2022Q1";"Fri finansierad";3043;23,48;5261;17,62\n' +
        '"Vanda";"2022Q1";"ARA";941;16,13;2083;13,96\n' +
        '"Vanda";"2022Q2";"Fri finansierad";2679;23,64;5017;17,79\n' +
        '"Vanda";"2022Q2";"ARA";846;16,05;1902;13,91\n' +
        '"Vanda";"2022Q3";"Fri finansierad";2533;23,68;4925;17,85\n' +
        '"Vanda";"2022Q3";"ARA";763;15,97;1778;13,90\n' +
        '"Vanda";"2022Q4";"Fri finansierad";2548;23,77;4882;17,99\n' +
        '"Vanda";"2022Q4";"ARA";767;15,98;1744;13,97\n' +
        '"Åbo";"2022Q1";"Fri finansierad";5534;18,16;4267;14,07\n' +
        '"Åbo";"2022Q1";"ARA";1292;13,91;1782;11,81\n' +
        '"Åbo";"2022Q2";"Fri finansierad";4437;18,32;3666;14,27\n' +
        '"Åbo";"2022Q2";"ARA";1149;14,02;1642;11,87\n' +
        '"Åbo";"2022Q3";"Fri finansierad";4014;18,44;3329;14,37\n' +
        '"Åbo";"2022Q3";"ARA";1107;14,06;1554;11,86\n' +
        '"Åbo";"2022Q4";"Fri finansierad";4195;18,53;3414;14,48\n' +
        '"Åbo";"2022Q4";"ARA";1161;14,11;1557;11,96\n' +
        '"Enhet: Antal: antal, Kvadratmeterspris (eur/m2): eur / m2";;;;;;\n' +
        '"Källa: PxVisualizer-sv";;;;;;',
    'en':
        '"Information 2022Q1-2022Q4 by Information, Region, Number of rooms, Type of funding",,,,,,\n' +
        ',,,"One-room flat","One-room flat","Two-room flat","Two-room flat"\n' +
        ',,,"Number","Rents per square meter (eur/m2)","Number","Rents per square meter (eur/m2)"\n' +
        '"Helsinki","2022Q1","Non subsidised",13021,26.64,10080,20.22\n' +
        '"Helsinki","2022Q1","Government subsidised",3810,15.90,6176,13.74\n' +
        '"Helsinki","2022Q2","Non subsidised",11231,26.82,9326,20.45\n' +
        '"Helsinki","2022Q2","Government subsidised",3552,15.97,5749,13.78\n' +
        '"Helsinki","2022Q3","Non subsidised",10269,26.93,8907,20.59\n' +
        '"Helsinki","2022Q3","Government subsidised",3249,15.99,5280,13.79\n' +
        '"Helsinki","2022Q4","Non subsidised",10272,26.93,8805,20.66\n' +
        '"Helsinki","2022Q4","Government subsidised",3323,16.08,5265,13.80\n' +
        '"Vantaa","2022Q1","Non subsidised",3043,23.48,5261,17.62\n' +
        '"Vantaa","2022Q1","Government subsidised",941,16.13,2083,13.96\n' +
        '"Vantaa","2022Q2","Non subsidised",2679,23.64,5017,17.79\n' +
        '"Vantaa","2022Q2","Government subsidised",846,16.05,1902,13.91\n' +
        '"Vantaa","2022Q3","Non subsidised",2533,23.68,4925,17.85\n' +
        '"Vantaa","2022Q3","Government subsidised",763,15.97,1778,13.90\n' +
        '"Vantaa","2022Q4","Non subsidised",2548,23.77,4882,17.99\n' +
        '"Vantaa","2022Q4","Government subsidised",767,15.98,1744,13.97\n' +
        '"Turku","2022Q1","Non subsidised",5534,18.16,4267,14.07\n' +
        '"Turku","2022Q1","Government subsidised",1292,13.91,1782,11.81\n' +
        '"Turku","2022Q2","Non subsidised",4437,18.32,3666,14.27\n' +
        '"Turku","2022Q2","Government subsidised",1149,14.02,1642,11.87\n' +
        '"Turku","2022Q3","Non subsidised",4014,18.44,3329,14.37\n' +
        '"Turku","2022Q3","Government subsidised",1107,14.06,1554,11.86\n' +
        '"Turku","2022Q4","Non subsidised",4195,18.53,3414,14.48\n' +
        '"Turku","2022Q4","Government subsidised",1161,14.11,1557,11.96\n' +
        '"Unit: Number: number, Rents per square meter (eur/m2): eur / m2",,,,,,\n' +
        '"Source: PxVisualizer-en",,,,,,'
};

export const CSV_FIXTURES_ONE_CELL: { [key: string]: string } = {
    'fi':
        '"Lukumäärä, Vantaa, Yksiöt, Vapaarahoitteinen 2022Q4"\n' +
        '2548\n' +
        '"Yksikkö: lukumäärä"\n' +
        '"Lähde: PxVisualizer-fi"',
    'sv':
        '"Antal, Vanda, Enrumslägenhet, Fri finansierad 2022Q4"\n' +
        '2548\n' +
        '"Enhet: antal"\n' +
        '"Källa: PxVisualizer-sv"',
    'en':
        '"Number, Vantaa, One-room flat, Non subsidised 2022Q4"\n' +
        '2548\n' +
        '"Unit: number"\n' +
        '"Source: PxVisualizer-en"'
};