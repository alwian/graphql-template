const serverConfig = {
  port: parseInt(process.env.PORT ?? "8888"),
  host: process.env.HOST ?? "localhost"
};

export default serverConfig;
