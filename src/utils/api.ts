export const BASEURL = "https://api.jsonbin.io/v3/b/";

export const POST_CONFIG = {
  headers: {
    "Content-Type": "application/json",
    "X-Master-Key": process.env.REACT_APP_X_MASTER_KEY,
    "X-Access-Key": process.env.REACT_APP_X_ACCESS_KEY,
  },
};

export const GET_CONFIG = {
  headers: {
    "X-Master-Key": process.env.REACT_APP_X_MASTER_KEY,
    "X-Access-Key": process.env.REACT_APP_X_ACCESS_KEY,
  },
};
