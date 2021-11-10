const CracoAlias = require('craco-alias')

module.exports = {
  babel: {
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          fileName: false,
        },
      ],
    ],
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        baseUrl: './src',
      },
    },
  ],
}
