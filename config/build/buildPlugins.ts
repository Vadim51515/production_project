import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import {
    IBuildOptions,
} from './types/config';

export function buildPlugins({
    paths,
    isDev,
}: IBuildOptions): webpack.WebpackPluginInstance[] {

    let progressPlugins = [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev,
        }),

    ];

    if (isDev) {
        progressPlugins.push(new ReactRefreshPlugin());
        progressPlugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return progressPlugins;
};