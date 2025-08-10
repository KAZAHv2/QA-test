import { config as base } from './wdio.conf.base';
import merge from 'deepmerge';

export const config = merge(base, {
  services: ['chromedriver'],
  capabilities: [{
    browserName: 'chrome',
    maxInstances: 1
  }]
});
