module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: process.env.NODE_ENV === 'production' ? {
                    "ie": "11",
                    chrome: "67",
                } : {
                    node: 'current',
                },
                useBuiltIns: "usage",
            },
        ],
    ],
};
