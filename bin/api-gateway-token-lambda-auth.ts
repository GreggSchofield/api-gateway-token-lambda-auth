#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ApiGatewayTokenLambdaAuthStack } from '../lib/api-gateway-token-lambda-auth-stack';

const app = new cdk.App();
new ApiGatewayTokenLambdaAuthStack(app, 'ApiGatewayTokenLambdaAuthStack', {

    /*
     * Deploy infrastructure defined within this app's stacks in the AWS account/region combination
     * implied by the current CLI configuration.
     */
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION
    }

});