// export by default OR export async default

exports.connectToDatabase = async (database) => {
  // logic
  console.log("Connecting to database " + database);
};

exports.disconnectDatabase = async () => {
  // logic
  console.log("Disconnecting");
};
