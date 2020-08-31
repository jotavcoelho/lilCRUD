import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
	const user = await User.create({
		name: "Whatever Jhonson",
		email: "whatever@jhonson.com",
		password_hash: "idkatall",
	});

	return res.json(user);
});

export default routes;
