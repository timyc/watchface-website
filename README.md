## Tasks
- [ ] Fully implement popup for each measurement
- [ ] Add names for layouts & themes

## Finished Tasks

- [x] Ensure each stat has a distinct icon. For example, steps and floor count have the same icon
- [x] Change 'Floor Count' stat to 'Floors'
- [x] Change the popout nav bar to an anchored nav bar that stays at the top of the page and echos the position in the customization process the user is located in

**6/15/2023**

- [x] Change icons to match fitbit standard
    - [x] distance
    - [x] floors
    - [x] fire
    - [x] heart
    - [x] footprint
    - [x] sleep

- [x] Active zone minutes icon is incorrect

- [x] Adjust data types for various measurements
    - [x] Heart Rate
    - [x] Sleep
    - [x] Weather
    - [x] Food
    - [x] Steps
    - [x] Distance Travelled
    - [x] AZM
    - [x] Floors
    - [x] Water Consumed

## Bugs

1. Certain font names that include numbers (Press Start 2P) do not work for some reason while others (VT323) do.

2. The data step of the navbar will show as incomplete when the user selects a no data layout

## Notes

-   .env.production should be copied to .env.local when developing.

-   Some component-specific data is stored with the "settings" store. This is because this app uses dynamic imports. Due to some limitations with Vue.js, asynchronously loaded dynamic components may re-render when their data changes. To preserve the data, a store is used instead.

-   Visible flickers are also due to asynchronously loaded dynamic components re-rendering from data changes.

## Attribution for Icons

1. The distance.svg icon was sourced from : https://freeicons.io/line-hero-essentials/essentials-pin-map-location-icon-20482'
2. The floors.svg icon was sourced from : https://freeicons.io/common-style-icons-13/stairs-icon-14510
