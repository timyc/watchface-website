<script lang="ts">
export default {
    name: 'StatisticItem',
    props: {
        name: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        x1: {
            type: String,
            required: true,
        },
        x2: {
            type: String,
            required: true,
        },
        y1: {
            type: String,
            required: true,
        },
        y2: {
            type: String,
            required: true,
        },
    },
}
</script>

<template>
    <circle :cx="x1" :cy="y1" r="0.1" fill="red" />
    <text :x="x2" :y="y2" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="0.15px">{{ name }}</text>
</template>