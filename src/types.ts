import WebhooksApi from '@octokit/webhooks'
import { App } from '@octokit/app'

export interface GithubMold {
  secret?: string
  appId: string
  privateKey: string
  enableWebhook?: boolean
  port?: number
}

export interface GithubContext {
  webhook: WebhooksApi
  app: App
  jwt: string
}
