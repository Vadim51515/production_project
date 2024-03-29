import { type IBuildOptions } from './types/config'
import { type Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer (options: IBuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: false,
        historyApiFallback: true,
        hot: true,
        client: {
            overlay: false
        }
    }
}
