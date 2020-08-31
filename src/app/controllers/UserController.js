import User from '../models/User';

class UserController {
	async store(req, res) {
		const alreadyExists = await User.findOne({
			where: { email: req.body.email },
		});

		if(alreadyExists)
			return res.status(400).json({ error: "There's already an user with the provided e-mail" });

		const { name, email } = await User.create(req.body);

		return res.json({ name, email});
	}
}

export default new UserController();