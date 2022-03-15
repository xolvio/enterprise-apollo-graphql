export default function () {
  return {
    autoDetect: true,
    env: {
      params: {
        runner: "--experimental-vm-modules",
      },
    },
  };
}
