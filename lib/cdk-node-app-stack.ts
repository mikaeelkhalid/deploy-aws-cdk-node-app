import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecsPatterns from 'aws-cdk-lib/aws-ecs-patterns';

export class CdkNodeAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create a VPC
    const vpc = new ec2.Vpc(this, 'MyAppVPC', { maxAzs: 2 });

    // Create a ecs cluster
    const cluster = new ecs.Cluster(this, 'MyAppEcsCluster', { vpc: vpc });

    // Create a fargate service
    const fargateService =
      new ecsPatterns.ApplicationLoadBalancedFargateService(
        this,
        'MyAppFargateService',
        {
          cluster: cluster,
          listenerPort: 3000,
          taskImageOptions: {
            image: ecs.ContainerImage.fromAsset(__dirname + './../node-app'),
          },
        }
      );
  }
}
