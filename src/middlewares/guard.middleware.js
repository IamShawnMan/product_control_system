export const roleGuard = (...roles) => {
  //roles = ["user", "admin", "superadmin"];
  return (req, res, next) => {
    try {
      const userRole = user.role | "user";
      if (!roles.includes(userRole)) {
      }
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
};
