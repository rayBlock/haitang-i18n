/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "hoiTangStack",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Astro("hoiTangStack",{
      transform: {
          assets: {

          },
          // imageOptimization: {
            // architecture: 'arm64',

            // nodejs: {
            //   install: ["sharp"]
            // },
          // },
          server: {
            architecture: 'arm64',
            // nodejs:{
            //   install: ["sharp"]
            // }
          }
      }
    });
  },
});
