<script setup lang="ts">
import { useSettingsStore } from "@/stores/settings";
import aesthetics from "@/data/aesthetics";
const settingsStore = useSettingsStore();
const defaults = ["darkviolet", "black", "#FFFFFF"];
</script>

<template>
	<svg width="250" height="250" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clip-path="url(#clip0_1187_2168)">
			<mask id="mask0_1187_2168" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="-45" y="-914" width="3993"
				height="1534">
				<path d="M3948 -914H-45V620H3948V-914Z" fill="white" />
			</mask>
			<g mask="url(#mask0_1187_2168)">
				<path d="M3948 -914H-45V620H3948V-914Z" fill="white" />
				<path
					d="M130 0H22C10.402 0 1 9.40202 1 21V129C1 140.598 10.402 150 22 150H130C141.598 150 151 140.598 151 129V21C151 9.40202 141.598 0 130 0Z"
					fill="black" />
				<path
					d="M30 128.459L42.6422 121.302L54.4485 113.628C57.9665 111.342 60.9658 108.342 63.2525 104.824L68.1409 97.3037L73.7123 88.0524C76.944 82.6862 81.9702 78.6363 87.901 76.6197C93.2405 74.8043 97.8627 71.3347 101.097 66.7144L106.619 58.8255L116.311 47.8697C117.514 46.5097 118.591 45.0433 119.529 43.4886L126.459 32"
					stroke="url(#paint0_radial_1187_2168)" />
				<path
					d="M39 125.678L50.433 119.73L59.6611 114.094C63.727 111.611 67.1431 108.195 69.6265 104.129L72.9089 98.754L77.4868 90.5658C80.2266 85.6654 84.8041 82.0569 90.2088 80.5372C95.0712 79.17 99.2828 76.106 102.08 71.9006L106.687 64.9756L114.665 55.802C116.012 54.2526 117.197 52.569 118.2 50.7777L123.678 41"
					stroke="url(#paint1_radial_1187_2168)" />
				<path
					d="M46 124.781L56.7253 119.542L64.3124 115.115C68.7808 112.508 72.4992 108.789 75.1063 104.321L77.4319 100.335L81.4297 92.7807C83.8803 88.1499 88.2002 84.7933 93.2928 83.5628C97.8721 82.4564 101.847 79.6246 104.389 75.6582L108.46 69.3075L115.409 61.216C116.857 59.5302 118.113 57.6888 119.154 55.7256L123.782 47"
					stroke="url(#paint2_radial_1187_2168)" />
				<path
					d="M51 126.781L61.7253 121.542L69.3124 117.115C73.7808 114.508 77.4992 110.789 80.1063 106.321L82.4319 102.335L86.4297 94.7807C88.8803 90.1499 93.2002 86.7933 98.2928 85.5628C102.872 84.4564 106.847 81.6246 109.389 77.6582L113.46 71.3075L120.409 63.216C121.857 61.5302 123.113 59.6888 124.154 57.7256L128.782 49"
					stroke="url(#paint3_radial_1187_2168)" />
				<path
					d="M58 125.711L67.9996 121.197L73.7636 118.02C78.7304 115.283 82.8196 111.193 85.557 106.227L86.892 103.804L90.2974 96.9108C92.4498 92.554 96.5098 89.4492 101.278 88.5133C105.563 87.6723 109.3 85.0735 111.579 81.3488L114.045 77.319C114.747 76.1727 115.535 75.0818 116.403 74.0557L120.971 68.655C122.537 66.8032 123.873 64.7683 124.949 62.5947L128.711 55"
					stroke="url(#paint4_radial_1187_2168)" />
				<path
					d="M65 125.64L74.2739 121.851L78.0232 119.926C83.6032 117.061 88.145 112.52 91.0098 106.94L91.3521 106.273L94.1699 100.055C96.0213 95.9696 99.8262 93.1088 104.265 92.4646C108.251 91.8861 111.752 89.514 113.768 86.0269L115.822 82.4714C116.432 81.4168 117.129 80.4156 117.907 79.4784L121.503 75.1466C123.207 73.0945 124.629 70.8243 125.733 68.3962L128.64 62"
					stroke="url(#paint5_radial_1187_2168)" />
				<path
					d="M72 124.568L80.5482 121.505L83.3717 120.182C88.8449 117.617 93.2466 113.215 95.8121 107.742L98.0508 102.216C99.5968 98.4005 103.152 95.7738 107.253 95.4168C110.933 95.0965 114.204 92.943 115.952 89.6892L117.6 86.623C118.117 85.6606 118.724 84.7491 119.412 83.9005L122.001 80.7077C123.865 78.41 125.378 75.8494 126.492 73.1088L128.569 68"
					stroke="url(#paint6_radial_1187_2168)" />
				<path
					d="M78 123.497L85.8225 121.16L88.3868 120.096C93.3131 118.051 97.2276 114.137 99.2722 109.21L100.946 104.398C102.18 100.852 105.49 98.4477 109.244 98.3707C112.609 98.3017 115.653 96.3568 117.129 93.3322L118.379 90.7733C118.803 89.9041 119.319 89.0824 119.917 88.3222L121.458 86.363C123.507 83.7588 125.111 80.8332 126.203 77.7049L127.497 74"
					stroke="url(#paint7_radial_1187_2168)" />
				<path
					d="M84 122.427L91.0968 120.815L93.4019 120.01C97.7712 118.484 101.206 115.049 102.732 110.68L103.867 106.605C104.778 103.332 107.845 101.136 111.237 101.328C114.275 101.499 117.095 99.7494 118.291 96.9514L119.158 94.9213C119.489 94.1468 119.913 93.4155 120.421 92.7436L121.476 91.3471C123.338 88.8824 124.722 86.0902 125.554 83.1154L126.426 80"
					stroke="url(#paint8_radial_1187_2168)" />
				<path
					d="M90 122.355L96.3711 121.47L98.417 120.924C102.214 119.911 105.179 116.945 106.192 113.148L106.829 109.836C107.404 106.851 110.226 104.847 113.234 105.288C115.927 105.683 118.522 104.112 119.421 101.543L119.939 100.065C120.176 99.3883 120.507 98.7488 120.924 98.1654L121.776 96.9704C123.265 94.8844 124.288 92.5028 124.776 89.987L125.355 87"
					stroke="url(#paint9_radial_1187_2168)" />
				<path
					d="M96 121.284L101.645 121.124L103.432 120.837C106.631 120.324 109.139 117.816 109.652 114.617L109.862 112.088C110.084 109.425 112.644 107.598 115.235 108.255C117.558 108.844 119.917 107.432 120.495 105.106L120.72 104.199C120.863 103.627 121.1 103.082 121.423 102.589L122.076 101.591C123.193 99.8855 123.867 97.9289 124.039 95.8976L124.284 93"
					stroke="url(#paint10_radial_1187_2168)" />
				<path
					d="M102 120.213L106.92 120.778L108.447 120.751C111.004 120.705 113.066 118.643 113.112 116.086L113.007 114.337C112.869 112.071 115.12 110.42 117.241 111.231C119.152 111.963 121.239 110.689 121.462 108.654L121.499 108.314C121.549 107.859 121.691 107.418 121.916 107.018L122.373 106.21C123.121 104.884 123.471 103.372 123.381 101.853L123.213 99"
					stroke="url(#paint11_radial_1187_2168)" />
				<path
					d="M108 120.143L112.194 121.434L113.462 121.666C115.301 122.001 116.908 120.394 116.573 118.555L116.306 117.52C115.863 115.799 117.684 114.376 119.247 115.222L119.379 115.293C120.753 116.037 122.402 114.949 122.258 113.393C122.229 113.078 122.277 112.761 122.397 112.469L122.659 111.83C123.049 110.881 123.122 109.831 122.868 108.837L122.142 106"
					stroke="url(#paint12_radial_1187_2168)" />
				<path
					d="M27 124.459L39.6422 117.302L51.4485 109.628C54.9665 107.342 57.9658 104.342 60.2525 100.824L65.1409 93.3037L70.7123 84.0524C73.944 78.6862 78.9702 74.6363 84.901 72.6197C90.2405 70.8043 94.8627 67.3347 98.0969 62.7144L103.619 54.8255L113.311 43.8697C114.514 42.5097 115.591 41.0433 116.529 39.4886L123.459 28"
					stroke="url(#paint13_radial_1187_2168)" />
				<path
					d="M23 120.459L35.6422 113.302L47.4485 105.628C50.9665 103.342 53.9658 100.342 56.2525 96.8245L61.1409 89.3037L66.7123 80.0524C69.944 74.6862 74.9702 70.6363 80.901 68.6197C86.2405 66.8043 90.8627 63.3347 94.0969 58.7144L99.6191 50.8255L109.311 39.8697C110.514 38.5097 111.591 37.0433 112.529 35.4886L119.459 24"
					stroke="url(#paint14_radial_1187_2168)" />
				<path
					d="M20 116.459L32.6422 109.302L44.4485 101.628C47.9665 99.3418 50.9658 96.3426 53.2525 92.8245L58.1409 85.3037L63.7123 76.0524C66.944 70.6862 71.9702 66.6363 77.901 64.6197C83.2405 62.8043 87.8627 59.3347 91.0969 54.7144L96.6191 46.8255L106.311 35.8697C107.514 34.5097 108.591 33.0433 109.529 31.4886L116.459 20"
					stroke="url(#paint15_radial_1187_2168)" />
				<path
					d="M20 103.146L31.3784 97.2526L40.4839 91.7093C44.5785 89.2166 48.0161 85.779 50.5088 81.6845L53.7179 76.4132L58.251 68.2735C60.9685 63.394 65.526 59.8052 70.9068 58.3078C75.7474 56.9608 79.9407 53.9149 82.7186 49.728L87.2841 42.8469L95.183 33.7556C96.5376 32.1965 97.7276 30.5017 98.734 28.6981L104.146 19"
					stroke="url(#paint16_radial_1187_2168)" />
				<path
					d="M20 95.7817L30.7253 90.5418L38.3124 86.1152C42.7808 83.5081 46.4992 79.7897 49.1063 75.3213L51.4319 71.3352L55.4297 63.7807C57.8803 59.1499 62.2002 55.7933 67.2928 54.5628C71.8721 53.4564 75.8474 50.6246 78.3894 46.6582L82.4596 40.3075L89.4091 32.216C90.8569 30.5302 92.113 28.6888 93.1542 26.7256L97.7817 18"
					stroke="url(#paint17_radial_1187_2168)" />
				<path
					d="M21 88.7106L30.9996 84.1964L36.7636 81.0196C41.7304 78.2822 45.8196 74.1931 48.557 69.2262L49.892 66.804L53.2974 59.9108C55.4498 55.554 59.5098 52.4492 64.2783 51.5133C68.5634 50.6723 72.2998 48.0736 74.5791 44.3488L77.0452 40.319C77.7467 39.1727 78.5348 38.0818 79.4027 37.0557L83.9708 31.655C85.5371 29.8032 86.8731 27.7683 87.9495 25.5948L91.7107 18"
					stroke="url(#paint18_radial_1187_2168)" />
				<path
					d="M23 80.6396L32.2739 76.8511L36.0232 74.9262C41.6032 72.0614 46.145 67.5197 49.0098 61.9396L49.3521 61.2729L52.1699 55.055C54.0213 50.9696 57.8262 48.1088 62.265 47.4646C66.2509 46.8861 69.7523 44.514 71.7676 41.0269L73.8225 37.4714C74.4319 36.4168 75.1294 35.4156 75.9074 34.4784L79.5035 30.1466C81.2071 28.0945 82.6295 25.8243 83.7329 23.3962L86.6396 17"
					stroke="url(#paint19_radial_1187_2168)" />
				<path
					d="M24 73.5686L32.5482 70.5057L35.3717 69.1823C40.8449 66.6168 45.2466 62.2151 47.8121 56.7418L50.0508 51.2163C51.5968 47.4005 55.1518 44.7738 59.2533 44.4168C62.9333 44.0965 66.2039 41.943 67.9525 38.6892L69.6002 35.623C70.1174 34.6606 70.7241 33.7491 71.4122 32.9005L74.0014 29.7077C75.8647 27.41 77.3779 24.8494 78.4919 22.1088L80.5685 17"
					stroke="url(#paint20_radial_1187_2168)" />
				<path
					d="M25 66.4975L32.8225 64.1603L35.3868 63.096C40.3131 61.0515 44.2276 57.1369 46.2722 52.2106L47.9463 47.3983C49.1801 43.852 52.4898 41.4477 56.2438 41.3707C59.6089 41.3017 62.6528 39.3568 64.1294 36.3322L65.3787 33.7733C65.8031 32.9041 66.3187 32.0824 66.9168 31.3222L68.4583 29.363C70.5073 26.7588 72.1107 23.8332 73.2034 20.7049L74.4975 17"
					stroke="url(#paint21_radial_1187_2168)" />
				<path
					d="M26 59.4264L33.0968 57.8149L35.4019 57.0098C39.7712 55.4838 43.2063 52.0488 44.7323 47.6794L45.8668 43.6045C46.7779 40.3318 49.8453 38.1355 53.237 38.3272C56.2749 38.4988 59.095 36.7494 60.2906 33.9514L61.1582 31.9213C61.4891 31.1468 61.9131 30.4155 62.4209 29.7436L63.4761 28.3471C65.3385 25.8824 66.7218 23.0902 67.5545 20.1154L68.4264 17"
					stroke="url(#paint22_radial_1187_2168)" />
				<path
					d="M27 52.3554L33.3711 51.4696L35.417 50.9237C39.2138 49.9106 42.1793 46.9451 43.1923 43.1484L43.8295 39.8364C44.4038 36.8511 47.226 34.8467 50.2338 35.2878C52.9271 35.6829 55.5221 34.1123 56.4214 31.5431L56.9388 30.0648C57.1756 29.3883 57.5072 28.7488 57.9236 28.1654L58.7765 26.9704C60.2653 24.8844 61.2883 22.5028 61.7761 19.987L62.3553 17"
					stroke="url(#paint23_radial_1187_2168)" />
				<path
					d="M28 45.2843L33.6455 45.1242L35.4322 44.8375C38.6309 44.3242 41.1391 41.816 41.6524 38.6172L41.8624 36.0885C42.0836 33.4248 44.6442 31.5977 47.235 32.2548C49.5577 32.844 51.9166 31.432 52.4947 29.1064L52.7202 28.1991C52.8625 27.6268 53.1001 27.0824 53.4231 26.589L54.0762 25.5911C55.1927 23.8855 55.8672 21.9289 56.0391 19.8976L56.2843 17"
					stroke="url(#paint24_radial_1187_2168)" />
				<path
					d="M28 38.2132L32.9198 38.7788L34.4473 38.7513C37.0045 38.7052 39.0664 36.6432 39.1125 34.0861L39.0066 32.3375C38.8694 30.071 41.1198 28.4201 43.2405 29.2316C45.152 29.963 47.2386 28.6891 47.4616 26.6547L47.4988 26.3148C47.5488 25.859 47.6908 25.4181 47.9162 25.0188L48.3728 24.2098C49.1208 22.8847 49.4709 21.3721 49.3814 19.8532L49.2132 17"
					stroke="url(#paint25_radial_1187_2168)" />
				<path
					d="M28 32.1422L32.1941 33.4335L33.4624 33.6651C35.3014 34.001 36.9084 32.394 36.5725 30.555L36.3061 29.5199C35.8629 27.7983 37.684 26.3752 39.2474 27.2213L39.3792 27.2927C40.7534 28.0364 42.402 26.9483 42.2582 25.3923C42.2291 25.0778 42.2766 24.761 42.3966 24.4689L42.6592 23.8299C43.0492 22.8804 43.1225 21.8305 42.868 20.8361L42.1421 18"
					stroke="url(#paint26_radial_1187_2168)" />
				<path
					d="M17 112.459L29.6422 105.302L41.4485 97.6286C44.9665 95.3418 47.9658 92.3426 50.2525 88.8245L55.1409 81.3037L60.7123 72.0524C63.944 66.6862 68.9702 62.6363 74.901 60.6197C80.2405 58.8043 84.8627 55.3347 88.0969 50.7144L93.6191 42.8255L103.311 31.8697C104.514 30.5097 105.591 29.0433 106.529 27.4886L113.459 16"
					stroke="url(#paint27_radial_1187_2168)" />
			</g>
		</g>
		<defs>
			<radialGradient id="paint0_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(78.2296 80.2296) rotate(-39.5752) scale(48.5081 1072.37)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint1_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(81.3387 83.3387) rotate(-38.8259) scale(42.6399 1070.94)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint2_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(84.8908 85.8908) rotate(-38.2834) scale(39.2094 1069.8)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint3_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(89.8908 87.8908) rotate(-38.2834) scale(39.2094 1069.8)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint4_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(93.3553 90.3552) rotate(-37.6188) scale(35.696 1068.26)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint5_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(96.8197 93.8198) rotate(-36.8092) scale(32.1886 1066.2)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint6_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(100.284 96.2842) rotate(-35.8019) scale(28.6891 1063.34)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint7_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(102.749 98.7487) rotate(-34.5153) scale(25.2009 1059.2)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint8_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(105.213 101.213) rotate(-32.8165) scale(21.7296 1052.93)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint9_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(107.678 104.678) rotate(-30.4747) scale(18.2845 1042.76)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint10_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(110.142 107.142) rotate(-27.0549) scale(14.8842 1024.79)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint11_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(112.607 109.606) rotate(-21.6446) scale(11.5679 988.929)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint12_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(115.071 113.071) rotate(-12.068) scale(8.43549 904.103)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint13_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(75.2296 76.2296) rotate(-39.5752) scale(48.5081 1072.37)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint14_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(71.2296 72.2296) rotate(-39.5752) scale(48.5081 1072.37)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint15_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(68.2296 68.2296) rotate(-39.5752) scale(48.5081 1072.37)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint16_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(62.0728 61.0728) rotate(-38.7872) scale(42.3752 1070.86)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint17_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(58.8908 56.8908) rotate(-38.2834) scale(39.2094 1069.8)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint18_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(56.3553 53.3552) rotate(-37.6188) scale(35.696 1068.26)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint19_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(54.8197 48.8198) rotate(-36.8092) scale(32.1886 1066.2)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint20_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(52.2842 45.2842) rotate(-35.8019) scale(28.6891 1063.34)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint21_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(49.7487 41.7487) rotate(-34.5153) scale(25.2009 1059.2)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint22_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(47.2131 38.2131) rotate(-32.8165) scale(21.7296 1052.93)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint23_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(44.6776 34.6776) rotate(-30.4747) scale(18.2845 1042.76)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint24_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(42.1421 31.1421) rotate(-27.0549) scale(14.8842 1024.79)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint25_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(38.6065 27.6065) rotate(-21.6446) scale(11.5679 988.929)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint26_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(35.071 25.071) rotate(-12.068) scale(8.43549 904.103)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient id="paint27_radial_1187_2168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
				gradientTransform="translate(65.2296 64.2296) rotate(-39.5752) scale(48.5081 1072.37)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<clipPath id="clip0_1187_2168">
				<rect width="150" height="150" rx="21" fill="white" />
			</clipPath>
		</defs>
		<slot></slot>
	</svg>
</template>
