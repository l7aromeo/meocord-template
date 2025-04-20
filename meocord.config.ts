import { MeoCordConfig } from 'meocord/interface'

export default {
  appName: 'MeoCord',
  discordToken: '<your-token-here>',
  webpack: config => {
    config.module.rules?.push({
      test: /\.(md|html)$/i,
      type: 'asset/source',
    })
    config.module.rules?.push({
      test: /\.(gif|jpg|jpeg|png|svg|woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      exclude: /node_modules/,
      generator: {
        filename: 'assets/[name][ext]',
      }
    })

    return config
  },
} satisfies MeoCordConfig
