import { Sequelize } from 'sequelize-typescript'
import { Company } from './company.model';
import { Group } from './group.model';
import { Student } from './student.model';
import { User } from './user.model';

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: 'mysql',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  models: [User, Student, Group, Company],
  sync: {
      force: true
  }
})

const connect = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ force: false });
        console.log('Tables synchronized');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


export { connect, sequelize }