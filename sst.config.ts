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
          server: {
            architecture: 'arm64'
          }
      }
    });
  },
});
