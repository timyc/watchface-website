# Current Tasks

1. Replace all current icons with standard fitbit Icons / similar Icons ☐
2. Ensure each stat has a distinct icon. For example, steps and floor count have the same icon ☐
3. Change 'Floor Count' stat to 'Floors' ✅
4. Change the popout nav bar to an anchored nav bar that stays at the top of the page and echos the position in the customization process the user is located in ☐

# Bugs

Certain font names that include numbers (Press Start 2P) do not work for some reason while others (VT323) do.

# Notes

-   .env.production should be copied to .env.local when developing.

-   Some component-specific data is stored with the "settings" store. This is because this app uses dynamic imports. Due to some limitations with Vue.js, asynchronously loaded dynamic components may re-render when their data changes. To preserve the data, a store is used instead.

-   Visible flickers are also due to asynchronously loaded dynamic components re-rendering from data changes.

# Attribution for Icons

1. The distance.svg icon was sourced from : https://freeicons.io/line-hero-essentials/essentials-pin-map-location-icon-20482
