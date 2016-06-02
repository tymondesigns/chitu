import babel from 'rollup-plugin-babel';

export default {
    plugins: [
        babel({
            sourceMap: true,
            exclude: 'node_modules/**',
            babelrc: false,
            presets: ['es2015-rollup', 'stage-2']
        })
    ]
};
