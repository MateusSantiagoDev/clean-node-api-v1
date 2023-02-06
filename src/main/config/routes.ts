import type { Express } from 'express'
import { Router } from 'express'
import fg from 'fast-glob'

export function setupRoutes (app: Express): void {
  const router = Router()
  app.use('/api', router)
  fg.sync('**/src/main/routes/**routes.ts').map(async file => {
    (await import(`../../../${file}`)).default(router)
  })
}
