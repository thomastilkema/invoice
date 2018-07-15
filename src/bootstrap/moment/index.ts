import generalConfig from '@app/config/general';
import * as moment from 'moment';

export function setMomentLocale() {
  moment.locale(generalConfig.locale);
}
