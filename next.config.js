module.exports = {
  reactStrictMode: true,

  rewrites: async () => {
    return [
      {
        source: "/pages/projects",
        destination: "google.com",
      }
    ]
  }
}


