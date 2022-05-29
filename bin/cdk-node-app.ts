#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkNodeAppStack } from '../lib/cdk-node-app-stack';

const app = new cdk.App();
new CdkNodeAppStack(app, 'CdkNodeAppStack', {});
