import User from '../models/User';

describe('UserController', () => {
	it('should be able to create a new user', async () => {
		const user = await User.create({
			name: 'John Doe',
			email: 'jd@gmail.com',
			password: 'jasoijeoiasj'
		});

		expect(user).toHaveProperty('id');
	});

	// it('should be able to uptade an user', async () => {
		
	// });
})

