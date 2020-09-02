import { Model } from 'sequelize';
import FakeModel from './fakeModel';

const ActualModel = process.env.NODE_ENV === 'test' ? FakeModel : Model;

export default ActualModel;
