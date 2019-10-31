import http from 'http'
import { portion, flow, popEvent, popSeep } from '@barajs/core'

import WebhooksApi from '@octokit/webhooks'
import { App } from '@octokit/app'

import { GithubMold, GithubContext } from './types'
import * as flows from './flow'

const Github = portion<any, GithubContext, GithubMold>({
  name: 'bara-github',
  mold: {
    port: 7000,
    enableWebhook: true,
  },
  init: mold => {
    const { secret, appId, privateKey, enableWebhook } = mold
    let webhook = null
    let app = new App({ id: appId, privateKey })
    if (enableWebhook) {
      webhook = new WebhooksApi({ secret })
    }
    return { webhook, app }
  },
  whenInitialized: flow<any, GithubContext, GithubMold>({
    bootstrap: ({ context, mold, next }) => {
      const { app, webhook } = context
      const { port } = mold
      const jwt = app.getSignedJsonWebToken()
      http.createServer(webhook.middleware).listen(port, () => {
        next({ port, jwt })
      })
    },
  }),
  ...flows,
})

const {
  whenInitialized: whenWebhookListening,
  whenAnyHook,
  whenInstallation,
  whenPush,
  whenPullRequest,
  whenPullRequestReview,
  whenPullRequestReviewComment,
  whenBranchCreate,
  whenBranchDelete,
  whenIssueComment,
  whenIssues,
  whenLabel,
  whenProject,
  whenRepository,
} = popEvent(Github)

const { installationSenderLoginIs, installationReposIncludes } = popSeep(
  whenInstallation,
)

export {
  Github,
  whenWebhookListening,
  whenAnyHook,
  whenInstallation,
  whenPush,
  whenPullRequest,
  whenPullRequestReview,
  whenPullRequestReviewComment,
  whenBranchCreate,
  whenBranchDelete,
  whenIssueComment,
  whenIssues,
  whenLabel,
  whenProject,
  whenRepository,
  installationSenderLoginIs,
  installationReposIncludes,
}
export * from './types'
// export * from './formula'
export default Github
