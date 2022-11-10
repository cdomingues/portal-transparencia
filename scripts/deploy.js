require("dotenv").config({ path: "./.env" });
const FtpDeploy = require("ftp-deploy");

async function main() {
  try {
    // Replace "/out" with your build directory which contains all generated static files
    const outDir = "/out";

    await new FtpDeploy().deploy({
      user: process.env.FTP_USER,
      password: process.env.FTP_PASS,
      host: process.env.FTP_HOST,
      port: process.env.FTP_PORT,
      localRoot: outDir, // Location of build files in project
      remoteRoot: "/",
      include: ["*", "**/*"],
      exclude: [],
      deleteRemote: false,
      forcePasv: true,
    });

    console.log("Succesfully deployed site");
    return 0;
  } catch (e) {
    console.error("An error occured during deployment:", e);
    return 1;
  }
}

main().then((code) => process.exit(code));
