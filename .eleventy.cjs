const EleventyVitePlugin = require('@11ty/eleventy-plugin-vite')

module.exports = function (eleventyConfig) {
    eleventyConfig.setServerOptions({
        port: '3000',
    })

    eleventyConfig.addPlugin(EleventyVitePlugin, {
        tempFolderName: '.11ty-vite',
        viteOptions: {
            publicDir: 'public',
            root: 'src',
        },
    })

    //folders that will not be changed by 11ty
    eleventyConfig.addPassthroughCopy('public')
    eleventyConfig.addPassthroughCopy('src/app')
    eleventyConfig.addPassthroughCopy('src/fonts')
    eleventyConfig.addPassthroughCopy('src/styles')
    eleventyConfig.setServerPassthroughCopyBehavior('copy')

    return {
        dir: {
            input: 'src/views',
            output: 'site',
        },
        passthroughFileCopy: true,
        // htmlTemplateEngine: 'pug',
    }
}
