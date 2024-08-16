const BASE_PATH = "./docs"
import {serve, file} from 'bun'
import build from './common'

await build()

serve({
    port: 3000,
    async fetch(req: Request) {
      
      let filePath = BASE_PATH + new URL(req.url).pathname
      console.log(filePath)
      if (filePath == BASE_PATH + '/') {
        await build()
        filePath += 'index.html'
      }

      const f = file(filePath)
      return new Response(f)
    },
    error(e) {
      console.log("error")
      console.log(e)
      return new Response(null, { status: 404 })
    },
});

console.log("Server running on http://localhost:3000")