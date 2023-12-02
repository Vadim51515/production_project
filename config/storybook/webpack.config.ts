import path from 'path';
import webpack, { RuleSetRule }  from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { IBuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {

    const paths: IBuildPaths = {
        src: path.resolve(__dirname, '..', '..', 'src'),
        html: '',
        build: '',
        entry: '',
    };

    config?.resolve?.modules?.push(paths.src);
    config?.resolve?.modules?.push('.ts', '.tsx');

    if (config.module?.rules) {
        config.module.rules = config.module?.rules?.map((rule: RuleSetRule | null | undefined | false | 0 | "" | "...") => {
            if (rule && rule !== "..." && /svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });
    }
    config?.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })

    config?.module?.rules?.push(buildCssLoader(true))

    return config;
}