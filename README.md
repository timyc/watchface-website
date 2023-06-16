# [High Prio] Tasks
1. [ ] Replace all current icons with standard fitbit Icons / similar Icons
    1. [x] distance
    2. [x] floors
    3. [ ] fire
    4. [x] heart
    5. [ ] footprint
    6. [ ] question
    7. [ ] sleep
    8. [ ] weather
2. [x] Ensure each stat has a distinct icon. For example, steps and floor count have the same icon
3. [x] Change 'Floor Count' stat to 'Floors'
4. [ ] Change the popout nav bar to an anchored nav bar that stays at the top of the page and echos the position in the customization process the user is located in
    1. [x] Navbar now is displayed at top of screen
    2. [x] Navbar shows when a step is complete
    3. [ ] Navbar shows the current step

# Archived/Finished Tasks

# Bugs

1. Certain font names that include numbers (Press Start 2P) do not work for some reason while others (VT323) do.

2. The data step of the navbar will show as incomplete when the user selects a no data layout

# Notes

-   .env.production should be copied to .env.local when developing.

-   Some component-specific data is stored with the "settings" store. This is because this app uses dynamic imports. Due to some limitations with Vue.js, asynchronously loaded dynamic components may re-render when their data changes. To preserve the data, a store is used instead.

-   Visible flickers are also due to asynchronously loaded dynamic components re-rendering from data changes.

# Attribution for Icons

1. The distance.svg icon was sourced from : https://freeicons.io/line-hero-essentials/essentials-pin-map-location-icon-20482'
2. The floors.svg icon was sourced from : https://freeicons.io/common-style-icons-13/stairs-icon-14510
