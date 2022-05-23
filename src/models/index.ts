import { Sequelize } from 'sequelize-typescript'
import { Company } from './company.model';
import { Group } from './group.model';
import { Prize } from './prize.model';
import { Reward } from './reward.model';
import { Student } from './student.model';
import { StudentPrize } from './student_prizes.model';
import { StudentReward } from './student_rewards.model';
import { User } from './user.model';

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: 'mysql',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  models: [User, Student, Reward, Prize, StudentPrize, StudentReward, Group, Company],
  sync: {
      force: true
  },
  logging: false
})

const connect = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ force: false });
        console.log('Tables synchronized');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit();
    }
}


export { connect, sequelize }