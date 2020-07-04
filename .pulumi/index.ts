import * as pulumi from "@pulumi/pulumi";
import * as docker from '@pulumi/docker';
import * as k8s from "@pulumi/kubernetes";
import { provider } from './provider'

const config = new pulumi.Config();

const password = config.requireSecret("dockerPassword");
const token = config.requireSecret("telegramToken");

const image = new docker.Image('telegram-dumfan', {
  build: '../',
  imageName: 'dumfan/telegram',
  registry: {
    username: 'benjick',
    password,
    server: 'docker.io'
  }
})

const appLabels = { app: 'app-nginx' };
const app = new k8s.apps.v1.Deployment(
  'telegram',
  {
    spec: {
      selector: { matchLabels: appLabels },
      replicas: 1,
      template: {
        metadata: { labels: appLabels },
        spec: {
          containers: [
            {
              name: 'telegram2',
              image: image.id,
              env: [{
                name: 'TELEGRAM_TOKEN',
                value: token,
              }]
            },
          ],
        },
      },
    },
  },
  { provider },
);
