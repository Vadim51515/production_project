import path from 'path'
import { type RuleSetRule } from 'webpack'
import type webpack from 'webpack'
import { DefinePlugin } from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { type IBuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: IBuildPaths = {
        src: path.resolve(__dirname, '..', '..', 'src'),
        html: '',
        build: '',
        entry: '',
        buildLocales: '',
        locales: ''
    }

    config?.resolve?.modules?.push(paths.src)
    config?.resolve?.extensions?.push('.ts', '.tsx')
    if (config.resolve) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': paths.src
        }
    }

    if (config.module?.rules) {
        config.module.rules = config.module?.rules
            ?.map((rule: RuleSetRule | null | undefined | false | 0 | '' | '...') => {
                // TODO Если убрать игнор, авто еслинт меняет строку, и код перестает работать
                // eslint-disable-next-line
                if (rule && rule !== "..." && /svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i }
                }

                return rule
            })
    }

    config?.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })

    config?.module?.rules?.push(buildCssLoader(true))

    config?.plugins?.push(new DefinePlugin({
        __IS_DEV__: true,
        __API__: JSON.stringify('https://testapi.com'),
        __PROJECT__: JSON.stringify('storybook')
    }))

    return config
}
