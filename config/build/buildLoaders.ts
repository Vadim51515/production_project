import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { IBuildOptions } from './types/config';

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {

    //Если не используем typescript - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev
                ? 'style-loader'
                : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ?'[path][name]__[local]--[hash:base64:5]'
                            :'[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    const fileLoader =   {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader"
    }

    return [
        typescriptLoader,
        fileLoader,
        cssLoader,
    ];
}