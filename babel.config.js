module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				corejs: 2,
				useBuiltIns: "entry",
				targets: {
					node: 'current'
				}
			},
		]
	],
	sourceMaps: "inline",
	retainLines: true
};
