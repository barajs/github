import { flow } from '@barajs/core'
import { WebhookEvent, WebhookPayloadInstallation } from '@octokit/webhooks'

import { GithubContext, GithubMold } from '../types'
import { installation } from '../seep'

export const whenAnyHook = flow<WebhookEvent<any>, GithubContext, GithubMold>({
  bootstrap: ({ context, next }) => {
    const { webhook } = context
    webhook.on('*', next)
  },
})

export const whenInstallation = flow<
  WebhookEvent<WebhookPayloadInstallation>,
  GithubContext,
  GithubMold
>({
  bootstrap: ({ context: { webhook }, next }) => {
    webhook.on('installation', next)
  },
  seep: installation,
})

export const whenPush = flow<WebhookEvent<any>, GithubContext, GithubMold>({
  bootstrap: ({ context: { webhook }, next }) => {
    webhook.on('push', next)
  },
})

export const whenPullRequest = flow<
  WebhookEvent<any>,
  GithubContext,
  GithubMold
>({
  bootstrap: ({ context: { webhook }, next }) => {
    webhook.on('pull_request', next)
  },
})

export const whenPullRequestReview = flow<
  WebhookEvent<any>,
  GithubContext,
  GithubMold
>({
  bootstrap: ({ context: { webhook }, next }) => {
    webhook.on('pull_request_review', next)
  },
})

export const whenPullRequestReviewComment = flow<
  WebhookEvent<any>,
  GithubContext,
  GithubMold
>({
  bootstrap: ({ context: { webhook }, next }) => {
    webhook.on('pull_request_review_comment', next)
  },
})

export const whenBranchCreate = flow<
  WebhookEvent<any>,
  GithubContext,
  GithubMold
>({
  bootstrap: ({ context: { webhook }, next }) => {
    webhook.on('create', next)
  },
})

export const whenBranchDelete = flow<
  WebhookEvent<any>,
  GithubContext,
  GithubMold
>({
  bootstrap: ({ context: { webhook }, next }) => {
    webhook.on('delete', next)
  },
})

export const whenIssueComment = flow<
  WebhookEvent<any>,
  GithubContext,
  GithubMold
>({
  bootstrap: ({ context: { webhook }, next }) => {
    webhook.on('issue_comment', next)
  },
})

export const whenIssues = flow<WebhookEvent<any>, GithubContext, GithubMold>({
  bootstrap: ({ context: { webhook }, next }) => {
    webhook.on('issues', next)
  },
})

export const whenLabel = flow<WebhookEvent<any>, GithubContext, GithubMold>({
  bootstrap: ({ context: { webhook }, next }) => {
    webhook.on('label', next)
  },
})

export const whenProject = flow<WebhookEvent<any>, GithubContext, GithubMold>({
  bootstrap: ({ context: { webhook }, next }) => {
    webhook.on('project', next)
  },
})

export const whenRepository = flow<
  WebhookEvent<any>,
  GithubContext,
  GithubMold
>({
  bootstrap: ({ context: { webhook }, next }) => {
    webhook.on('repository', next)
  },
})
