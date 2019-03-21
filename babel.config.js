module.exports = function (api) {
    api.cache(false);

    return {
        env: {
            production: {
                presets: [
                    ["@babel/preset-env", {
                        modules: "commonjs",
                        targets: {
                            node: "current",
                        },
                    }],
                ],
            },
        },
    };
};
