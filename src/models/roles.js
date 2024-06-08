const roleSchema = {
    name: String
}

const Role = mongoose.model("Role", roleSchema)


roles = [
    {
        _id: "1",
        name: "Bazar"
    },
    {
        _id: "2",
        name: "Marca"
    },
    {
        _id: "1",
        name: "Cliente"
    },
]