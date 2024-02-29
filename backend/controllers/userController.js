const User = require("../models/UserModel");

const userController = async (req, res) => {
    try {
        const { name, managerName } = req.body;
        console.log(name, managerName);
        // Validate
        if (!name) {
            return res
                .status(400)
                .send({ success: false, message: "please provide name" });
        }
        if (!managerName) {
            return res
                .status(400)
                .send({ success: false, message: "please provide managerName" });
        }

        const user = await User.create({ name, managerName });
        const data = user.save();
        if (!data) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).send({
            success: true,
            message: "User retrieved successfully",
            data: {
                name: data.name,
                managerName: data.managerName,
            },
        });
    } catch (err) {
        res.status(400).send({
            message: "Error in userController",
            success: false,
            error: err,
        });
    }
};

module.exports = {
    userController
};
