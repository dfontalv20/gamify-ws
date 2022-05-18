import Validator from 'validatorjs';
import { User } from '../../models/user.model';

export default () => {
    Validator.registerAsync('username_available', async (username, attribute, req, passes) => {
        const user = await User.findOne({ where: { username } });
        if (user) passes(false, 'Este usuario ya existe.');
        passes();
    }, 'Este usuario ya existe.')
}