export const baseURL = "https://api.jsonbin.io/v3/b/";
export const X_MASTER_KEY = "$2b$10$r6LNY8lMtQvXzRP/ZfPasuJg9AW.ThYLsXWivowsi5kpi2NF4T2Ka";

export const X_ACCESS_KEY = "$2b$10$.N5NTNbEHsXaUAILlE99Q./3FLOOq2izzW1IFpsKLb0LaX8BtD3oO"

export const POST_CONFIG = {
  headers: {
    "Content-Type": "application/json",
    "X-Master-Key":X_MASTER_KEY,
    "X-Access-Key":X_ACCESS_KEY,
  },
};

export const BIN_ID = "6496c4129d312622a374cf7b";

export const GET_CONFIG = {
    headers: {
      "X-Master-Key": X_MASTER_KEY,
      "X-Access-Key": X_ACCESS_KEY,
    },
  };