import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import {
    type IBuildOptions
} from './types/config'

export function buildPlugins ({
    paths,
    isDev,
    apiUrl
}: IBuildOptions): webpack.WebpackPluginInstance[] {
    const progressPlugins = [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev,
            __API__: JSON.stringify(apiUrl)
        })
    ]

    // progressPlugins.push(new BundleAnalyzerPlugin({
    //     openAnalyzer: false
    // }))

    if (isDev) {
        progressPlugins.push(new ReactRefreshPlugin({
            overlay: false // Отключение overlay
        }))
        progressPlugins.push(new webpack.HotModuleReplacementPlugin())
    }

    return progressPlugins
};
