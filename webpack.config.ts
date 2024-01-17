module.exports = {
  // other configurations...

  module: {
    rules: [
      // other rules...

      {
        test: /\.mp3$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,  // This option specifies the maximum file size (in bytes) to be inlined as a data URL. If the file size is greater than this value, it will be handled by file-loader.
            fallback: 'file-loader',
          },
        },
      },
    ],
  },
};
