<template>
    <svg width="250" height="250" viewBox="0 0 3 3" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <radialGradient id="rgrad">
                <stop offset="5%" stop-color="#2CB574" />
                <stop offset="95%" stop-color="black" />
            </radialGradient>
        </defs>
        <rect width="100%" height="100%" rx="1" fill="url('#rgrad')" />
        <slot></slot>
    </svg>
</template>