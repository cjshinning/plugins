class CopyrightWebpackPlugin {
    apply(compiler) {
        compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
            console.log('compiler')
        })

        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
            debugger;
            compilation.assets['copyright.txt'] = {
                source: function(){
                    return 'copyright by jenny chan'
                },
                size: function(){
                    return 23;
                }
            };
            cb();
        })
    }
}

module.exports = CopyrightWebpackPlugin;