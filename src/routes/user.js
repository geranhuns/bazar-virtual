import { isAdmin, validateToken } from "@/middlewares/auth";
import { all } from "@/use_cases/user";
//all users
router.get("/", (req, res) => {
  const data = all();
  return res.json(data);
});

//one user
router.get("/:id", req, res, () => {});
//create user
router.post("/", req, res, () => {});
//update user
router.put("/:id", req, res, () => {});
router.patch("/:id", req, res, () => {});
//delete user
router.delete("/:id", req, res, () => {});

module.exports = router;
