<script setup lang="ts">
import { useSettingsStore } from "@/stores/settings";
import aesthetics from "@/data/aesthetics";
const settingsStore = useSettingsStore();
const defaults = ["darkviolet", "black", "#FFFFFF"];
</script>

<template>
	<svg
		width="250"
		height="250"
		viewBox="0 0 150 150"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<rect width="100%" height="100%" fill="black" />
		<path
			d="M29 128.459L41.6422 121.302L53.4485 113.628C56.9665 111.342 59.9658 108.342 62.2525 104.824L67.1409 97.3034L72.7123 88.0521C75.944 82.6859 80.9702 78.636 86.901 76.6194V76.6194C92.2405 74.804 96.8627 71.3344 100.097 66.7141L105.619 58.8252L115.311 47.8694C116.514 46.5094 117.591 45.043 118.529 43.4883L125.459 31.9997"
			stroke="url(#paint0_radial_0_1)" />
		<path
			d="M38 125.678L49.433 119.73L58.6611 114.094C62.727 111.611 66.1431 108.195 68.6265 104.129L71.9089 98.7542L76.4868 90.566C79.2266 85.6656 83.8041 82.0571 89.2088 80.5374V80.5374C94.0712 79.1702 98.2828 76.1062 101.08 71.9008L105.687 64.9758L113.665 55.8022C115.012 54.2528 116.197 52.5692 117.2 50.7779L122.678 41.0002"
			stroke="url(#paint1_radial_0_1)" />
		<path
			d="M45 124.782L55.7253 119.542L63.3124 115.116C67.7808 112.509 71.4992 108.79 74.1063 104.322L76.4319 100.336L80.4297 92.7812C82.8803 88.1504 87.2002 84.7938 92.2928 83.5633V83.5633C96.8721 82.4569 100.847 79.6251 103.389 75.6587L107.46 69.308L114.409 61.2165C115.857 59.5307 117.113 57.6893 118.154 55.7261L122.782 47.0005"
			stroke="url(#paint2_radial_0_1)" />
		<path
			d="M50 126.782L60.7253 121.542L68.3124 117.116C72.7808 114.509 76.4992 110.79 79.1063 106.322L81.4319 102.336L85.4297 94.7812C87.8803 90.1504 92.2002 86.7938 97.2928 85.5633V85.5633C101.872 84.4569 105.847 81.6251 108.389 77.6587L112.46 71.308L119.409 63.2165C120.857 61.5307 122.113 59.6893 123.154 57.7261L127.782 49.0005"
			stroke="url(#paint3_radial_0_1)" />
		<path
			d="M57 125.711L66.9996 121.197L72.7636 118.02C77.7304 115.283 81.8196 111.193 84.557 106.227L85.892 103.804L89.2974 96.9111C91.4498 92.5543 95.5098 89.4495 100.278 88.5136V88.5136C104.563 87.6726 108.3 85.0738 110.579 81.3491L113.045 77.3193C113.747 76.173 114.535 75.0821 115.403 74.056L119.971 68.6553C121.537 66.8035 122.873 64.7686 123.949 62.595L127.711 55.0003"
			stroke="url(#paint4_radial_0_1)" />
		<path
			d="M64 125.64L73.2739 121.851L77.0232 119.926C82.6032 117.061 87.145 112.52 90.0098 106.94L90.3521 106.273L93.1699 100.055C95.0213 95.9696 98.8262 93.1088 103.265 92.4646V92.4646C107.251 91.8861 110.752 89.514 112.768 86.0269L114.822 82.4714C115.432 81.4168 116.129 80.4156 116.907 79.4784L120.503 75.1466C122.207 73.0945 123.629 70.8243 124.733 68.3962L127.64 62"
			stroke="url(#paint5_radial_0_1)" />
		<path
			d="M71 124.568L79.5482 121.505L82.3717 120.182C87.8449 117.617 92.2466 113.215 94.8121 107.742V107.742L97.0508 102.216C98.5968 98.4003 102.152 95.7736 106.253 95.4166V95.4166C109.933 95.0963 113.204 92.9428 114.952 89.689L116.6 86.6228C117.117 85.6604 117.724 84.7489 118.412 83.9003L121.001 80.7075C122.865 78.4098 124.378 75.8492 125.492 73.1086L127.569 67.9998"
			stroke="url(#paint6_radial_0_1)" />
		<path
			d="M77 123.497L84.8225 121.16L87.3868 120.096C92.3131 118.051 96.2276 114.137 98.2722 109.21V109.21L99.9463 104.398C101.18 100.852 104.49 98.4473 108.244 98.3703V98.3703C111.609 98.3013 114.653 96.3564 116.129 93.3318L117.379 90.7729C117.803 89.9037 118.319 89.082 118.917 88.3218L120.458 86.3626C122.507 83.7584 124.111 80.8328 125.203 77.7045L126.497 73.9996"
			stroke="url(#paint7_radial_0_1)" />
		<path
			d="M83 122.427L90.0968 120.815L92.4019 120.01C96.7712 118.484 100.206 115.049 101.732 110.68V110.68L102.867 106.605C103.778 103.332 106.845 101.136 110.237 101.328V101.328C113.275 101.499 116.095 99.7498 117.291 96.9518L118.158 94.9217C118.489 94.1472 118.913 93.4159 119.421 92.744L120.476 91.3475C122.338 88.8828 123.722 86.0906 124.554 83.1158L125.426 80.0004"
			stroke="url(#paint8_radial_0_1)" />
		<path
			d="M89 122.355L95.3711 121.47L97.417 120.924C101.214 119.911 104.179 116.945 105.192 113.148V113.148L105.829 109.836C106.404 106.851 109.226 104.847 112.234 105.288V105.288C114.927 105.683 117.522 104.112 118.421 101.543L118.939 100.065C119.176 99.3884 119.507 98.7489 119.924 98.1655L120.776 96.9705C122.265 94.8845 123.288 92.5029 123.776 89.9871L124.355 87.0001"
			stroke="url(#paint9_radial_0_1)" />
		<path
			d="M95 121.284L100.645 121.124L102.432 120.837C105.631 120.324 108.139 117.816 108.652 114.617V114.617L108.862 112.088C109.084 109.425 111.644 107.598 114.235 108.255V108.255C116.558 108.844 118.917 107.432 119.495 105.106L119.72 104.199C119.863 103.627 120.1 103.082 120.423 102.589L121.076 101.591C122.193 99.8854 122.867 97.9288 123.039 95.8975L123.284 92.9999"
			stroke="url(#paint10_radial_0_1)" />
		<path
			d="M101 120.213L105.92 120.778L107.447 120.751C110.004 120.705 112.066 118.643 112.112 116.086V116.086L112.007 114.337C111.869 112.071 114.12 110.42 116.241 111.231V111.231C118.152 111.963 120.239 110.689 120.462 108.654L120.499 108.314C120.549 107.859 120.691 107.418 120.916 107.018L121.373 106.21C122.121 104.884 122.471 103.372 122.381 101.853L122.213 98.9997"
			stroke="url(#paint11_radial_0_1)" />
		<path
			d="M107 120.143L111.194 121.434L112.462 121.666C114.301 122.001 115.908 120.394 115.573 118.555V118.555L115.306 117.52C114.863 115.799 116.684 114.376 118.247 115.222L118.379 115.293C119.753 116.037 121.402 114.949 121.258 113.393V113.393C121.229 113.078 121.277 112.761 121.397 112.469L121.659 111.83C122.049 110.881 122.122 109.831 121.868 108.837L121.142 106"
			stroke="url(#paint12_radial_0_1)" />
		<path
			d="M26 124.459L38.6422 117.302L50.4485 109.628C53.9665 107.342 56.9658 104.342 59.2525 100.824L64.1409 93.3034L69.7123 84.0521C72.944 78.6859 77.9702 74.636 83.901 72.6194V72.6194C89.2405 70.804 93.8627 67.3344 97.0969 62.7141L102.619 54.8252L112.311 43.8694C113.514 42.5094 114.591 41.043 115.529 39.4883L122.459 27.9997"
			stroke="url(#paint13_radial_0_1)" />
		<path
			d="M22 120.459L34.6422 113.302L46.4485 105.628C49.9665 103.342 52.9658 100.342 55.2525 96.8242L60.1409 89.3034L65.7123 80.0521C68.944 74.6859 73.9702 70.636 79.901 68.6194V68.6194C85.2405 66.804 89.8627 63.3344 93.0969 58.7141L98.6191 50.8252L108.311 39.8694C109.514 38.5094 110.591 37.043 111.529 35.4883L118.459 23.9997"
			stroke="url(#paint14_radial_0_1)" />
		<path
			d="M19 116.459L31.6422 109.302L43.4485 101.628C46.9665 99.3415 49.9658 96.3423 52.2525 92.8242L57.1409 85.3034L62.7123 76.0521C65.944 70.6859 70.9702 66.636 76.901 64.6194V64.6194C82.2405 62.804 86.8627 59.3344 90.0969 54.7141L95.6191 46.8252L105.311 35.8694C106.514 34.5094 107.591 33.043 108.529 31.4883L115.459 19.9997"
			stroke="url(#paint15_radial_0_1)" />
		<path
			d="M19 103.146L30.3784 97.2524L39.4839 91.7091C43.5785 89.2164 47.0161 85.7788 49.5088 81.6843L52.7179 76.413L57.251 68.2733C59.9685 63.3938 64.526 59.805 69.9068 58.3076V58.3076C74.7474 56.9606 78.9407 53.9147 81.7186 49.7278L86.2841 42.8467L94.183 33.7554C95.5376 32.1963 96.7276 30.5015 97.734 28.6979L103.146 18.9998"
			stroke="url(#paint16_radial_0_1)" />
		<path
			d="M19 95.7822L29.7253 90.5423L37.3124 86.1157C41.7808 83.5086 45.4992 79.7902 48.1063 75.3218L50.4319 71.3357L54.4297 63.7812C56.8803 59.1504 61.2002 55.7938 66.2928 54.5633V54.5633C70.8721 53.4569 74.8474 50.6251 77.3894 46.6587L81.4596 40.308L88.4091 32.2165C89.8569 30.5307 91.113 28.6893 92.1542 26.7261L96.7817 18.0005"
			stroke="url(#paint17_radial_0_1)" />
		<path
			d="M20 88.7109L29.9996 84.1967L35.7636 81.0199C40.7304 78.2825 44.8196 74.1934 47.557 69.2265L48.892 66.8043L52.2974 59.9111C54.4498 55.5543 58.5098 52.4495 63.2783 51.5136V51.5136C67.5634 50.6726 71.2998 48.0739 73.5791 44.3491L76.0452 40.3193C76.7467 39.173 77.5348 38.0821 78.4027 37.056L82.9708 31.6553C84.5371 29.8035 85.8731 27.7686 86.9495 25.5951L90.7107 18.0003"
			stroke="url(#paint18_radial_0_1)" />
		<path
			d="M22 80.6396L31.2739 76.8511L35.0232 74.9262C40.6032 72.0614 45.145 67.5197 48.0098 61.9396L48.3521 61.2729L51.1699 55.055C53.0213 50.9696 56.8262 48.1088 61.265 47.4646V47.4646C65.2509 46.8861 68.7523 44.514 70.7676 41.0269L72.8225 37.4714C73.4319 36.4168 74.1294 35.4156 74.9074 34.4784L78.5035 30.1466C80.2071 28.0945 81.6295 25.8243 82.7329 23.3962L85.6396 17"
			stroke="url(#paint19_radial_0_1)" />
		<path
			d="M23 73.5684L31.5482 70.5055L34.3717 69.1821C39.8449 66.6166 44.2466 62.2149 46.8121 56.7416V56.7416L49.0508 51.2161C50.5968 47.4003 54.1518 44.7736 58.2533 44.4166V44.4166C61.9333 44.0963 65.2039 41.9428 66.9525 38.689L68.6002 35.6228C69.1174 34.6604 69.7241 33.7489 70.4122 32.9003L73.0014 29.7075C74.8647 27.4098 76.3779 24.8492 77.4919 22.1086L79.5685 16.9998"
			stroke="url(#paint20_radial_0_1)" />
		<path
			d="M24 66.4971L31.8225 64.1599L34.3868 63.0956C39.3131 61.0511 43.2276 57.1365 45.2722 52.2102V52.2102L46.9463 47.3979C48.1801 43.8516 51.4898 41.4473 55.2438 41.3703V41.3703C58.6089 41.3013 61.6528 39.3564 63.1294 36.3318L64.3787 33.7729C64.8031 32.9037 65.3187 32.082 65.9168 31.3218L67.4583 29.3626C69.5073 26.7584 71.1107 23.8328 72.2034 20.7045L73.4975 16.9996"
			stroke="url(#paint21_radial_0_1)" />
		<path
			d="M25 59.4268L32.0968 57.8153L34.4019 57.0102C38.7712 55.4842 42.2063 52.0492 43.7323 47.6798V47.6798L44.8668 43.6049C45.7779 40.3322 48.8453 38.1359 52.237 38.3276V38.3276C55.2749 38.4992 58.095 36.7498 59.2906 33.9518L60.1582 31.9217C60.4891 31.1472 60.9131 30.4159 61.4209 29.744L62.4761 28.3475C64.3385 25.8828 65.7218 23.0906 66.5545 20.1158L67.4264 17.0004"
			stroke="url(#paint22_radial_0_1)" />
		<path
			d="M26 52.3555L32.3711 51.4697L34.417 50.9238C38.2138 49.9107 41.1793 46.9452 42.1923 43.1485V43.1485L42.8295 39.8365C43.4038 36.8512 46.226 34.8468 49.2338 35.2879V35.2879C51.9271 35.683 54.5221 34.1124 55.4214 31.5432L55.9388 30.0649C56.1756 29.3884 56.5072 28.7489 56.9236 28.1655L57.7765 26.9705C59.2653 24.8845 60.2883 22.5029 60.7761 19.9871L61.3553 17.0001"
			stroke="url(#paint23_radial_0_1)" />
		<path
			d="M27 45.2842L32.6455 45.1241L34.4322 44.8374C37.6309 44.3241 40.1391 41.8159 40.6524 38.6171V38.6171L40.8624 36.0884C41.0836 33.4247 43.6442 31.5976 46.235 32.2547V32.2547C48.5577 32.8439 50.9166 31.4319 51.4947 29.1063L51.7202 28.199C51.8625 27.6267 52.1001 27.0823 52.4231 26.5889L53.0762 25.591C54.1927 23.8854 54.8672 21.9288 55.0391 19.8975L55.2843 16.9999"
			stroke="url(#paint24_radial_0_1)" />
		<path
			d="M27 38.2129L31.9198 38.7785L33.4473 38.751C36.0045 38.7049 38.0664 36.6429 38.1125 34.0858V34.0858L38.0066 32.3372C37.8694 30.0707 40.1198 28.4198 42.2405 29.2313V29.2313C44.152 29.9627 46.2386 28.6888 46.4616 26.6544L46.4988 26.3145C46.5488 25.8587 46.6908 25.4178 46.9162 25.0185L47.3728 24.2095C48.1208 22.8844 48.4709 21.3718 48.3814 19.8529L48.2132 16.9997"
			stroke="url(#paint25_radial_0_1)" />
		<path
			d="M27 32.1426L31.1941 33.4339L32.4624 33.6655C34.3014 34.0014 35.9084 32.3944 35.5725 30.5554V30.5554L35.3061 29.5203C34.8629 27.7987 36.684 26.3756 38.2474 27.2217L38.3792 27.2931C39.7534 28.0368 41.402 26.9487 41.2582 25.3927V25.3927C41.2291 25.0782 41.2766 24.7614 41.3966 24.4693L41.6592 23.8303C42.0492 22.8808 42.1225 21.8309 41.868 20.8365L41.1421 18.0004"
			stroke="url(#paint26_radial_0_1)" />
		<path
			d="M16 112.459L28.6422 105.302L40.4485 97.6283C43.9665 95.3415 46.9658 92.3423 49.2525 88.8242L54.1409 81.3034L59.7123 72.0521C62.944 66.6859 67.9702 62.636 73.901 60.6194V60.6194C79.2405 58.804 83.8627 55.3344 87.0969 50.7141L92.6191 42.8252L102.311 31.8694C103.514 30.5094 104.591 29.043 105.529 27.4883L112.459 15.9997"
			stroke="url(#paint27_radial_0_1)" />
		<defs>
			<radialGradient
				id="paint0_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(77.2296 80.2293) rotate(-39.5752) scale(48.5081 1072.37)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint1_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(80.3387 83.3389) rotate(-38.8259) scale(42.6399 1070.94)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint2_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(83.8908 85.8913) rotate(-38.2834) scale(39.2094 1069.8)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint3_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(88.8908 87.8913) rotate(-38.2834) scale(39.2094 1069.8)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint4_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(92.3553 90.3555) rotate(-37.6188) scale(35.696 1068.26)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint5_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(95.8197 93.8198) rotate(-36.8092) scale(32.1886 1066.2)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint6_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(99.2842 96.284) rotate(-35.8019) scale(28.6891 1063.34)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint7_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(101.749 98.7483) rotate(-34.5153) scale(25.2009 1059.2)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint8_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(104.213 101.213) rotate(-32.8165) scale(21.7296 1052.93)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint9_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(106.678 104.678) rotate(-30.4747) scale(18.2845 1042.76)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint10_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(109.142 107.142) rotate(-27.0549) scale(14.8842 1024.79)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint11_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(111.607 109.606) rotate(-21.6446) scale(11.5679 988.929)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint12_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(114.071 113.071) rotate(-12.068) scale(8.43549 904.103)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint13_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(74.2296 76.2293) rotate(-39.5752) scale(48.5081 1072.37)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint14_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(70.2296 72.2293) rotate(-39.5752) scale(48.5081 1072.37)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint15_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(67.2296 68.2293) rotate(-39.5752) scale(48.5081 1072.37)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint16_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(61.0728 61.0726) rotate(-38.7872) scale(42.3752 1070.86)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint17_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(57.8908 56.8913) rotate(-38.2834) scale(39.2094 1069.8)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint18_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(55.3553 53.3555) rotate(-37.6188) scale(35.696 1068.26)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint19_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(53.8197 48.8198) rotate(-36.8092) scale(32.1886 1066.2)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint20_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(51.2842 45.284) rotate(-35.8019) scale(28.6891 1063.34)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint21_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(48.7487 41.7483) rotate(-34.5153) scale(25.2009 1059.2)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint22_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(46.2131 38.2135) rotate(-32.8165) scale(21.7296 1052.93)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint23_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(43.6776 34.6777) rotate(-30.4747) scale(18.2845 1042.76)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint24_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(41.1421 31.142) rotate(-27.0549) scale(14.8842 1024.79)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint25_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(37.6065 27.6062) rotate(-21.6446) scale(11.5679 988.929)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint26_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(34.071 25.0714) rotate(-12.068) scale(8.43549 904.103)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
			<radialGradient
				id="paint27_radial_0_1"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(64.2296 64.2293) rotate(-39.5752) scale(48.5081 1072.37)">
				<stop stop-color="white" stop-opacity="0.81" />
				<stop offset="1" />
			</radialGradient>
		</defs>
        <slot></slot>
	</svg>
</template>
