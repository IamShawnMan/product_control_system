export const customMiddelware = (req, res, next) => {
  try {
    const url = req.url;
    if (url.includes("odam")) {
      res.send("odamlar");
    }
    console.log("2 ", new Date());
    next();
    console.log("2.1 ", new Date());
  } catch (e) {
    next(e);
  }
};

export const newMiddeleware = (req, res, next) => {
  try {
    console.log("1 ", new Date());
    next();
    console.log("1.1 ", new Date());
  } catch (e) {
    next(e);
  }
};
