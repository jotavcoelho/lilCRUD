import User from '../models/User';

describe('User', () => {
	it('should be able to create a new user', async () => {
		const user = await User.create({
			name: 'John Doe',
			email: 'jd@gmail.com',
			password: 'jasoijeoiasj'
		});

		expect(user).toHaveProperty('id');
	});

	it('should be able to uptade an user', async () => {
		const user = await User.create({
			name: 'John Doe',
			email: 'jd@gmail.com',
			password: 'jasoijeoiasj'
		});

		const updatedUser = await User.update({
			id: user.id,
			name: 'Ahiuahisue',
			email: 'sjiaoe@gmail.com',
			passord: 'ioasjeoij'
		});

		expect(updatedUser.id).toEqual(user.id);
	});
})

