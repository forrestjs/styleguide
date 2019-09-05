const path = require('path')

module.exports = {
    title: 'ForrestJS Styleguide',
    styleguideDir: 'docs',
    serverHost: '0.0.0.0',

    /**
     * Include all the pure component examples here:
     */
    components: [
        'src/components/ReactModal/ReactModal.jsx',
        'src/components/ReactStackLayout/ReactStackLayout.jsx',
    ],

    /**
     * Customize the styleguide appearance.
     */
    styles: {
        Section: {
            root: {
                marginBottom: '15vh',
            },
        },
    },

    /**
     * Inject utility components into the Styleguide context
     * this is really useful for providing a component with
     * some sort of state or routing capabilities
     */
    context: {
        Button: path.join(__dirname, 'src/lib/Button'),
    },

    /**
     * Inject the default CSS.
     * You may need to add more of those, but it's likely that you will
     * prefer to go the `styled-components` way.
     */
    require: [
        path.join(__dirname, 'src/index.css'),
    ],

    /**
     * CRA provides a fully functioning webpack config that is good for
     * the `/components` folder but doesn't work in any other context
     * out of the box!
     *
     * The trick is to simply provide this configuration back to Styleguidist.
     */
    webpackConfig: {
        ...require('react-scripts-rewired/config/webpack.config.dev.extend'),
        devServer: { disableHostCheck: true },
    },
}
