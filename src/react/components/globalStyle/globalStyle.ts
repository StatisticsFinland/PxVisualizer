import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
    /* @font-face {
        font-family: 'Barlow Semi Condensed';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(./fonts/BarlowSemiCondensed-Medium.ttf) format('truetype');
    }

    @font-face {
        font-family: 'Barlow Semi Condensed';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(./fonts/BarlowSemiCondensed-Regular.ttf) format('truetype');
    } */

    .highcharts-root {
        font-family: "Barlow Semi Condensed", Verdana, sans-serif;
    }

    .highcharts-tooltip-container {
        z-index: 999 !important;
    }

    .tableChart {
        font-family: "Barlow Semi Condensed", Verdana, sans-serif;
        overflow-x: auto;
        padding-left: 20px;
        padding-right: 20px;
    }

    .tableChart:has(.title) {
        padding-top: 14px;
    }

    .tableChart table,
    .tableChart th,
    .tableChart td {
        border: 1px solid black;
    }

    .tableChart .title {
        margin-top: 0;
        font-size: 1.25rem;
        font-weight: 500;
        margin-bottom: 0rem;
        width: 90%;
        display: block;
    }

    .tableChart .subtitle {
        font-size: 1.25rem;
        font-weight: 400;
        margin-bottom: 2rem;
        margin-top: 6px;
        width: 90%;
        display: block;
    }

    .tableChart .caption {
        width: 90%;
        display: block;
        caption-side: top;
    }

    .tableChart-title {
        font-size: 1.25rem;
        font-weight: 500;
        color: #333;
        margin-bottom: 2rem;
        text-align: left;
    }
`;