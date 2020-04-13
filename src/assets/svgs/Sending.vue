<template>
	<svg viewBox="0 0 24 24" width="24" height="25" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<filter x="-100%" y="-104.8%" width="300%" height="314.3%" filterUnits="objectBoundingBox" id="a">
				<feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
				<feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
				<feColorMatrix
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
					in="shadowBlurOuter1"
					result="shadowMatrixOuter1"
				/>
				<feMerge>
					<feMergeNode in="shadowMatrixOuter1" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>
		</defs>
		<g fill="none" fill-rule="evenodd">
			<circle fill="#829AB0" cx="12" cy="12" r="12" />
			<g filter="url(#a)" transform="rotate(41 2.8134 17.5884)" fill-rule="nonzero">
				<path
					d="M6 10.4182L1.309 11.4a.5455.5455 0 01-.709-.7418L5.509.84a.5455.5455 0 01.982 0l4.909 9.8182a.5455.5455 0 01-.709.7418L6 10.4182z"
					fill="#6C0DB5"
				/>
				<path
					d="M6 .5455c.1964 0 .3873.0981.491.3l4.909 9.8181a.5455.5455 0 01-.709.7419L6 10.4182V.5455z"
					fill="#FFF"
				/>
			</g>
		</g>
	</svg>
</template>
