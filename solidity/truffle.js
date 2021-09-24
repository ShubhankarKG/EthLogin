module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*", // Match any network id
      from: '0x8d54AD060b643ED6E7883cb5c779667a8debFEe5'
    }
  },
  compilers: {
    solc: {
      version: "^0.4.0",
    }
  }
};
