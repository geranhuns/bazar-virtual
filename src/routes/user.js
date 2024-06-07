//all users
router.get(req, res, () => {
  return res.json({});
});

//one user
router.get(req, res, () => {});
//create user
router.post(req, res, () => {});
//update user
router.put(req, res, () => {});
router.patch(req, res, () => {});
//delete user
router.delete(req, res, () => {});

module.exports = router;
