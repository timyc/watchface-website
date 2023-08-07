export default {
	steps: {
		name: "Steps (# walked)",
		icon: "steps",
		display_methods: {
			current: {
				name: "Steps walked so far today",
				text: "18,381",
			},
			steps_walked_in_hour:{
				name: "Steps in the hour",
				text: "51"
			},
		},
	},
	hrm: {
		name: "Heart Rate",
		icon: "heart",
		display_methods: {
			curr_rate: {
				name: "Current Heart Rate",
				text: "65 bpm",
			},
		},
	},
	calories_burned: {
		name: "Calories Burned (kCal)",
		icon: "fire",
		display_methods: {
			current: {
				name: "Caloried burned today",
				text: "100",
			},
		},
	},
	distance: {
		name: "Distance Travelled (ki/mi)",
		icon: "distance",
		display_methods: {
			dist_travelled_today: {
				name: "Distance travelled today",
				text: "10",
			},
		},
	},
	azm: {
		name: "Active Zone Minutes (minutes)",
		icon: "active_zone_minutes",
		display_methods: {
			active_zone_minutes: {
				name: "Active zone minutes",
				text: "10",
			},
			active_minutes:{
				name: "Active minutes",
				text: "15"
			},
		},
	},
	elevation_gain: {
		name: "Stairs/Elevation Gain (# of stairs)",
		icon: "floors",
		display_methods: {
			current: {
				name: "Floors/Elevation gained today",
				text: "10",
			},
		},
	},
	weather: {
		name: "Weather (°C/°F)",
		icon: "weather",
		display_methods: {
			current: {
				name: "Current temperature",
				text: "12°C",
			},
			conditions: {
				name: "Weather Conditions",
				text: "Cloudy",
			},
		},
	},
	blood_oxygen_saturation: {
		name: "Blood Oxygen Saturation (x%)",
		icon: "blood_oxygen",
		display_methods: {
			current: {
				name: "Current Blood Oxygen Saturation",
				text: "10%",
			},
		},
	},
	blood_glucose_level: {
		name: "Blood Glucose Level (mg/dL)",
		icon: "blood_glucose",
		display_methods: {
			current: {
				name: "Current Blood Glucose Level",
				text: "15",
			},
		},
	},
};
