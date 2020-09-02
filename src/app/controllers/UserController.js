import User from '../models/User';

class UserController {
	async store(req, res) {
		const alreadyExists = await User.findOne({
			where: { email: req.body.email },
		});

		if(alreadyExists)
			return res.status(400).json({ error: "There's already an user with the provided e-mail" });

		const { name, email } = await User.create(req.body);

		return res.json({ name, email });
	}

	async update(req, res) {
		const { email, oldPassword } = req.body;

		const user = await User.findByPk(req.userId);

		if(email != user.email) {
			const emailExists = User.findOne({
				where: { email }
			});

			if(emailExists)
				return res.status(401).json({ error: "The provided e-mail has already been taken"});
		}

		if(oldPassword && !(await user.checkPassword(oldPassword))) 
			return res.status(401).json({ error: "Old password doesn't match "});

		const { id, name } = await user.update(req.body);

		return res.json({
			id, name, email
		});
	}
}

export default new UserController();