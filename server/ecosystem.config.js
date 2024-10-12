module.exports = {
  apps: [
    {
      name: "optima",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
