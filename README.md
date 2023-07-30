## Bugs

1. Certain font names that include numbers (Press Start 2P) do not work for some reason while others (VT323) do.

2. The data step of the navbar will show as incomplete when the user selects a no data layout

3. The 5 icon / data layout is bugged, for some reason the website only displays the first four datas that are picked but not the 5th one

## Notes

-   .env.production should be copied to .env.local when developing.

-   Some component-specific data is stored with the "settings" store. This is because this app uses dynamic imports. Due to some limitations with Vue.js, asynchronously loaded dynamic components may re-render when their data changes. To preserve the data, a store is used instead.

-   Visible flickers are also due to asynchronously loaded dynamic components re-rendering from data changes.

## Attribution for Icons

1. The distance.svg icon was sourced from : https://freeicons.io/line-hero-essentials/essentials-pin-map-location-icon-20482'
2. The floors.svg icon was sourced from : https://freeicons.io/common-style-icons-13/stairs-icon-14510
