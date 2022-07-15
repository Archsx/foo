// import pinyin from 'pinyin/esm/pinyin-web.js'
import pinyin from 'pinyin/lib/pinyin-web.js'

export const somePlugin = {
  name: 'someplugin',
  configureServer(server) {
    server.middlewares.use('/somepath', (req, res, next) => {
      const foo = pinyin('foo')
      next()
    })
  },
}
