function create(email, firstName, lastName, password) {
  return { id, email, firstName, lastName };
}

function updateData(id, email, firstName, lastName) {
  return { id, email, firstName, lastName };
}

function updatePassword(id, password) {}

function deleteById(id) {}

export {
  all,
  create,
  deleteById,
  getbyEmail,
  getById,
  updateData,
  updatePassword,
};
