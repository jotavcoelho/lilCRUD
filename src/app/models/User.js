import Sequelize from 'sequelize';
import bcrypt from 'bcryptjs';
import Model from '../../pseudoRepository';

class User extends Model {
	static init(sequelize) {
		super.init({
			name: Sequelize.STRING,
			email: Sequelize.STRING,
			password: Sequelize.VIRTUAL,
			password_hash: Sequelize.STRING,
		}, { sequelize });

		this.addHook('beforeSave', async user => {
			if(user.password)
				user.password_hash = await bcrypt.hash(user.password, 8);
		});

		return this;
	}

	async checkPassword(password) {
		return await bcrypt.compare(password, this.password_hash);
	}
}

export default User;