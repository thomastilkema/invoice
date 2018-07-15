import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { numberToLocaleStringMock } from './mock/format';

global.Number.prototype.toLocaleString = numberToLocaleStringMock;

Enzyme.configure({ adapter: new Adapter() });
