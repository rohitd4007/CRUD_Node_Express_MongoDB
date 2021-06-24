const User = require("../Model/UserModel")


////get all users data
exports.getAllUser = async(req, res) => {
    try {
        const user = await User.find();
        res.status(201).json({
            status: 'sucess',
            data: { user },
        });
    } catch (err) {
        req.status(404).json({
            status: 'not found',
            message: err,
        });
    }
}


//get single user data based on "id"
exports.getUser = async(req, res) => {
    try {

        const user = await User.findById(req.params.id);
        res.status(201).json({
            status: 'sucess',
            data: { user },
        });
    } catch (err) {
        req.status(404).json({
            status: 'not found',
            message: err,
        });
    }
}

//post -- create new user
exports.createUser = async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            status: 'sucess',
            data: { user },
        });
    } catch (err) {
        req.status(404).json({
            status: 'not found',
            message: err,
        });
    }
}


//update user
exports.updateUser = async(req, res) => {
    try {
        const new_User = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json({
            data: new_User,
            status: 'sucess'
        })
    } catch (err) {
        res.status(404).json({
            status: "not found",
            message: err
        })
    }
}

//delete the user
exports.deleteUser = async(req, res) => {
    try {
        await User.remove({});
        res.status(200).json({
            status: 'success',
            data: null,
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong while deleting',
        });
    }
};