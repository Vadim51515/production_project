import path from 'path'
import type webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import {
    type IBuildEnv,
    type IBuildPaths
} from './config/build/types/config'

export default (env: IBuildEnv) => {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const port = env.port || 3000

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port
    })

    return config
}
