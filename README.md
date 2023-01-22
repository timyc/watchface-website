# Bugs

Certain font names that include numbers (Press Start 2P) do not work for some reason while others (VT323) do.

# Notes

- Some component-specific data is stored with the "settings" store. This is because this app uses dynamic imports. Due to some limitations with Vue.js, asynchronously loaded dynamic components may re-render when their data changes. To preserve the data, a store is used instead.

- Visible flickers are also due to asynchronously loaded dynamic components re-rendering from data changes.