import { WebhookEvent, WebhookPayloadInstallation } from '@octokit/webhooks'

export const installationSenderLoginIs = (login: string) => (
  event: WebhookEvent<WebhookPayloadInstallation>,
) => event.payload.sender.login === login

export const installationReposIncludes = (repo: string) => (
  event: WebhookEvent<WebhookPayloadInstallation>,
) => repo === repo
