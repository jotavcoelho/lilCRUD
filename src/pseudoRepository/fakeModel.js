import { uuid } from 'uuidv4';

class FakeModel {
	static users = [];

	static async create(userData) {
		let user = {};

		Object.assign(user, { id: uuid() }, userData);

		this.users.push(user);

		return user;
	}

	static async update(userData) {
		const foundIndex = this.users.findIndex(findUser => findUser.id === userData.id);

		Object.assign(this.users[foundIndex], {
			...this.users[foundIndex], 
			userData
		});

		return this.users[foundIndex];
	}

	static async findOne(options) {
		const foundUser = this.users.find(user => user.email === options.where.email);

		return foundUser;
	}

	static async findByPk(pk) {
		const foundUser = this.users.find(user => user.id === pk);

		return foundUser;
	}
}

export default FakeModel;
