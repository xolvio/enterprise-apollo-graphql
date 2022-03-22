export default function () {
  return {
    autoDetect: true,
    env: {
      params: {
        runner: "--experimental-vm-modules",
      },
    },
    files: {
      override(filePatterns) {
        filePatterns.push("src/**/*.gql");
        return filePatterns;
      },
    },
  };
}
