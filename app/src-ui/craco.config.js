const path = require('path');

module.exports = {
    style: {
        postcss: {
            plugins: [
                require("tailwindcss"),
                require("autoprefixer"),
            ],
        },
    },
    webpack: {
        configure: (webpackConfig, { paths }) => { 
            paths.appBuild = webpackConfig.output.path = path.resolve('../build-ui');
            return webpackConfig
        }
    }
}
