/*
	This file contains the positioning of all icons and text of the watch faces
*/

export default {
	/* 
		- Each of the objects contained in this file is a "layout" of sorts
		- Each object represents a layout that the user can choose, none for example is the layout with no statistics
	*/
	'three_bottom_top_icon': {
		type: "TopIcon",
		interface: [
			{
				x: "0.55",
				y: "1.8",
			},
			{
				x: "0.7",
				y: "1.05",
			},
		],
		statCount: 3,
		stats: [
			{
				x1: "20%",
				y1: "70%",
				x2: "26%",
				y2: "87%",
			},
			{
				x1: "43%",
				y1: "73%",
				x2: "49%",
				y2: "90%",
			},
			{
				x1: "65%",
				y1: "70%",
				x2: "71%",
				y2: "87%",
			},
			{
				x1: "999%",
				y1: "999%",
				x2: "999%",
				y2: "999%",
			},
		],
	},
	big_time: {
		type: "BigTime",
		interface: [
			{
				x: "0.3",
				y: "1.4",
			},
			{
				x: "1.5",
				y: "2.5",
			},
			{
				x: "1.5",
				y: "2.7",
			},
		],
		statCount: 4,
		stats: [
			{
				x1: "45%",
				y1: "23%",
				x2: "60%",
				y2: "30%",
			},
			{
				x1: "45%",
				y1: "38%",
				x2: "60%",
				y2: "45%",
			},
			{
				x1: "45%",
				y1: "53%",
				x2: "60%",
				y2: "60%",
			},
			{
				x1: "45%",
				y1: "68%",
				x2: "60%",
				y2: "75%",
			},
		],
	},
	bottom: {
		type: "Standard",
		interface: [
			{
				x: "0.8",
				y: "0.8",
			},
			{
				x: "0.3",
				y: "1.25",
			},
			{
				x: "0.3",
				y: "1.55",
			},
		],
		statCount: 4,
		stats: [
			{
				x1: "5%",
				y1: "63%",
				x2: "18%",
				y2: "70%",
			},
			{
				x1: "60%",
				y1: "63%",
				x2: "73%",
				y2: "70%",
			},
			{
				x1: "5%",
				y1: "73%",
				x2: "18%",
				y2: "80%",
			},
			{
				x1: "60%",
				y1: "73%",
				x2: "73%",
				y2: "80%",
			},
		],
	},
	none: {
		type: "No",
		interface: [
			{
				x: "0.8",
				y: "1.3",
			},
			{
				x: "0.3",
				y: "1.75",
			},
			{
				x: "0.3",
				y: "2.05",
			},
		],
		statCount: 0,
		stats: [],
	},
	four_corner: {
		type: "Standard",
		interface: [
			{
				x: "0.8",
				y: "1.3",
			},
			{
				x: "0.3",
				y: "1.65",
			},
			{
				x: "0.3",
				y: "1.95",
			},
		],
		statCount: 4,
		stats: [
			{
				x1: "5%",
				y1: "13%",
				x2: "18%",
				y2: "20%",
			},
			{
				x1: "82%",
				y1: "13%",
				x2: "82%",
				y2: "20%",
			},
			{
				x1: "5%",
				y1: "73%",
				x2: "18%",
				y2: "80%",
			},
			{
				x1: "82%",
				y1: "73%",
				x2: "82%",
				y2: "80%",
			},
		],
	},
	bottom_top_icon: {
		type: "TopIcon",
		interface: [
			{
				x: "0.55",
				y: "1.2",
			},
			{
				x: "0.7",
				y: "1.55",
			},
		],
		statCount: 4,
		stats: [
			{
				x1: "15%",
				y1: "73%",
				x2: "21%",
				y2: "90%",
			},
			{
				x1: "35%",
				y1: "73%",
				x2: "41%",
				y2: "90%",
			},
			{
				x1: "55%",
				y1: "73%",
				x2: "61%",
				y2: "90%",
			},
			{
				x1: "75%",
				y1: "73%",
				x2: "81%",
				y2: "90%",
			},
		],
	},
	big_time_two_icons: {
		type: "BigTimeTwoIcon",
		interface: [
			{
				x: "0.3",
				y: "1.7",
			},
			{
				x: "0.7",
				y: "1.9",
			},
			{
				x: "2.0",
				y: "1.9",
			},
		],
		statCount: 2,
		stats: [
			{
				x1: "5%",
				y1: "70%",
				x2: "18%",
				y2: "76%",
			},
			{
				x1: "60%",
				y1: "70%",
				x2: "73%",
				y2: "76%",
			},
		],
	},
	solo_top: {
		type: "Solo",
		interface: [
			{
				x: "0.3",
				y: "1.9",
			},
			{
				x: "1.2",
				y: "0.7",
			},
			{
				x: "2.52",
				y: "0.7",
			},
		],
		statCount: 1,
		stats: [
			{
				x1: "5%",
				y1: "15%",
				x2: "15%",
				y2: "22%",
			},
		],
	},
	big_time_five_icon: {
		type: "BigTimeFiveIcon",
		interface: [
			{
				x: "1.6",
				y: "1.35",
			},
			{
				x: "1.74",
				y: "0.5",
			},
			{
				x: "1.7",
				y: "0.7",
			},
		],
		statCount: 5,
		stats: [
			// Icon 1
			{
				x1: "6%",
				y1: "10%",
				x2: "22%",
				y2: "17%",
			},
			{
				x1: "6%",
				y1: "23%",
				x2: "22%",
				y2: "30%",
			},
			{
				x1: "6%",
				y1: "38%",
				x2: "22%",
				y2: "45%",
			},
			{
				x1: "6%",
				y1: "53%",
				x2: "22%",
				y2: "60%",
			},
			{
				x1: "6%",
				y1: "68%",
				x2: "22%",
				y2: "75%",
			},
		],
	},
	right_align_list: {
		type: "Standard",
		interface: [
			{
				x: "0.8",
				y: "0.8",
			},
			{
				x: "0.3",
				y: "1.25",
			},
			{
				x: "0.3",
				y: "1.55",
			},
		],
		statCount: 4,
		stats: [
			{
				x1: "82%",
				y1: "53%",
				x2: "81%",
				y2: "60%",
			},
			{
				x1: "82%",
				y1: "63%",
				x2: "81%",
				y2: "70%",
			},
			{
				x1: "82%",
				y1: "73%",
				x2: "81%",
				y2: "80%",
			},
			{
				x1: "82%",
				y1: "83%",
				x2: "81%",
				y2: "90%",
			},
		],
	},
	solo_bottom: {
		type: "Solo",
		interface: [
			{
				x: "0.3",
				y: "1.6",
			},
			{
				x: "0.7",
				y: "1.9",
			},
			{
				x: "2",
				y: "1.9",
			},
		],
		statCount: 1,
		stats: [
			{
				x1: "37.5%",
				y1: "63%",
				x2: "47.5%",
				y2: "70%",
			},
		],
	},
	top_three_stats: {
		type: "TopThreeIcon",
		interface: [
			{
				x: "1.5",
				y: "2.55",
			},
			{
				x: "0.35",
				y: "2.35",
			},
			{
				x: "0.35",
				y: "2.65",
			},
		],
		statCount: 3,
		stats: [
			{
				x1: "5%",
				y1: "6%",
				x2: "15%",
				y2: "13%",
			},
			{
				x1: "35%",
				y1: "6%",
				x2: "45%",
				y2: "13%",
			},
			{
				x1: "55%",
				y1: "6%",
				x2: "65%",
				y2: "13%",
			},
		],
	},
	left_corner_two_icon: {
		type: "LeftCornerTwoIcon",
		interface: [
			{
				x: "1.3",
				y: "1.3",
			},
			{
				x: "0.9",
				y: "1.6",
			},
			{
				x: "2.1",
				y: "1.8",
			},
		],
		statCount: 2,
		stats: [
			{
				x1: "5%",
				y1: "63%",
				x2: "18%",
				y2: "70%",
			},
			{
				x1: "5%",
				y1: "75%",
				x2: "18%",
				y2: "82%",
			},
		],
	},
};
