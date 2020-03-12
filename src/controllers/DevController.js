const Dev = require('../models/Dev');

module.exports = {
    async show(req, res) {
        const { user } = req.params;

        const userExists = await Dev.findOne({ user: user });

        if (userExists) {
            return res.json(userExists);
        } else {
            return res.json({ message: "User Not Found" })
        }
    },

    async index(req, res) {
        const users = await Dev.find();

        if (users) {
            return res.json(users);
        } else {
            return res.json({ message: "Users Not Found" })
        }
    },

    async delete(req, res) {
        const { user } = req.params;

        const userExists = await Dev.findOne({ user: user });

        if (userExists) {
            const success = await Dev.deleteOne(userExists);
            if (success) {
                return res.json({ message: "User Deleted" })
            }
        } else {
            return res.json({ message: "User Not Found" })
        }
    },

    async store(req, res) {
        const { name, user, email } = req.body;

        const userExists = await Dev.findOne({ email: email });

        if (userExists) {
            return res.json(userExists);
        }

        const dev = await Dev.create({
            name,
            user,
            email
        });

        return res.json(dev);
    },

    async update(req, res) {
        const { user } = req.params;

        const userExists = await Dev.findOne({ user: user });

        if (userExists) {
            const { name, email } = req.body;

            const userUpdated = await Dev.updateOne(
                userExists,
                {
                    name,
                    email
                }
            );

            if (userUpdated) {
                return res.json({ message: "User Updated" })
            }
        } else {
            return res.json({ message: "User Not Found" })
        }
    }
};