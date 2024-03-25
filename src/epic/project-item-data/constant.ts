export const MODULE_NAME = 'PROJECT_ITEM_DATA_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};
import { i18n } from '../../lib/lang';

export const API = {
  GET: {
    TYPE: 'GET',
    URL: (id: string) => `/project/${id}`,
  },
};

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  statusCode: string;
}

export const timezonearr = [
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Abidjan'),
    value: 'Africa/Abidjan',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Accra'),
    value: 'Africa/Accra',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Addis_Ababa'),
    value: 'Africa/Addis_Ababa',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Algiers'),
    value: 'Africa/Algiers',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Asmara'),
    value: 'Africa/Asmara',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Asmera'),
    value: 'Africa/Asmera',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Bamako'),
    value: 'Africa/Bamako',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Bangui'),
    value: 'Africa/Bangui',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Banjul'),
    value: 'Africa/Banjul',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Bissau'),
    value: 'Africa/Bissau',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Blantyre'),
    value: 'Africa/Blantyre',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Brazzaville'),
    value: 'Africa/Brazzaville',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Bujumbura'),
    value: 'Africa/Bujumbura',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Cairo'),
    value: 'Africa/Cairo',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Casablanca'),
    value: 'Africa/Casablanca',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Ceuta'),
    value: 'Africa/Ceuta',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Conakry'),
    value: 'Africa/Conakry',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Dakar'),
    value: 'Africa/Dakar',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Dar_es_Salaam'),
    value: 'Africa/Dar_es_Salaam',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Djibouti'),
    value: 'Africa/Djibouti',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Douala'),
    value: 'Africa/Douala',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/El_Aaiun'),
    value: 'Africa/El_Aaiun',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Freetown'),
    value: 'Africa/Freetown',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Gaborone'),
    value: 'Africa/Gaborone',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Harare'),
    value: 'Africa/Harare',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Johannesburg'),
    value: 'Africa/Johannesburg',
  },
  { label: i18n.t('LANG.TIMEZONE.Africa/Juba'), value: 'Africa/Juba' },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Kampala'),
    value: 'Africa/Kampala',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Khartoum'),
    value: 'Africa/Khartoum',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Kigali'),
    value: 'Africa/Kigali',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Kinshasa'),
    value: 'Africa/Kinshasa',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Lagos'),
    value: 'Africa/Lagos',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Libreville'),
    value: 'Africa/Libreville',
  },
  { label: i18n.t('LANG.TIMEZONE.Africa/Lome'), value: 'Africa/Lome' },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Luanda'),
    value: 'Africa/Luanda',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Lubumbashi'),
    value: 'Africa/Lubumbashi',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Lusaka'),
    value: 'Africa/Lusaka',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Malabo'),
    value: 'Africa/Malabo',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Maputo'),
    value: 'Africa/Maputo',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Maseru'),
    value: 'Africa/Maseru',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Mbabane'),
    value: 'Africa/Mbabane',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Mogadishu'),
    value: 'Africa/Mogadishu',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Monrovia'),
    value: 'Africa/Monrovia',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Nairobi'),
    value: 'Africa/Nairobi',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Ndjamena'),
    value: 'Africa/Ndjamena',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Niamey'),
    value: 'Africa/Niamey',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Nouakchott'),
    value: 'Africa/Nouakchott',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Ouagadougou'),
    value: 'Africa/Ouagadougou',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Porto-Novo'),
    value: 'Africa/Porto-Novo',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Sao_Tome'),
    value: 'Africa/Sao_Tome',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Timbuktu'),
    value: 'Africa/Timbuktu',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Tripoli'),
    value: 'Africa/Tripoli',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Tunis'),
    value: 'Africa/Tunis',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Africa/Windhoek'),
    value: 'Africa/Windhoek',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Adak'),
    value: 'America/Adak',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Anchorage'),
    value: 'America/Anchorage',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Anguilla'),
    value: 'America/Anguilla',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Antigua'),
    value: 'America/Antigua',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Araguaina'),
    value: 'America/Araguaina',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Argentina/Buenos_Aires'),
    value: 'America/Argentina/Buenos_Aires',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Argentina/Catamarca'),
    value: 'America/Argentina/Catamarca',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Argentina/ComodRivadavia'),
    value: 'America/Argentina/ComodRivadavia',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Argentina/Cordoba'),
    value: 'America/Argentina/Cordoba',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Argentina/Jujuy'),
    value: 'America/Argentina/Jujuy',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Argentina/La_Rioja'),
    value: 'America/Argentina/La_Rioja',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Argentina/Mendoza'),
    value: 'America/Argentina/Mendoza',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Argentina/Rio_Gallegos'),
    value: 'America/Argentina/Rio_Gallegos',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Argentina/Salta'),
    value: 'America/Argentina/Salta',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Argentina/San_Juan'),
    value: 'America/Argentina/San_Juan',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Argentina/San_Luis'),
    value: 'America/Argentina/San_Luis',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Argentina/Tucuman'),
    value: 'America/Argentina/Tucuman',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Argentina/Ushuaia'),
    value: 'America/Argentina/Ushuaia',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Aruba'),
    value: 'America/Aruba',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Asuncion'),
    value: 'America/Asuncion',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Atikokan'),
    value: 'America/Atikokan',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Atka'),
    value: 'America/Atka',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Bahia'),
    value: 'America/Bahia',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Bahia_Banderas'),
    value: 'America/Bahia_Banderas',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Barbados'),
    value: 'America/Barbados',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Belem'),
    value: 'America/Belem',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Belize'),
    value: 'America/Belize',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Blanc-Sablon'),
    value: 'America/Blanc-Sablon',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Boa_Vista'),
    value: 'America/Boa_Vista',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Bogota'),
    value: 'America/Bogota',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Boise'),
    value: 'America/Boise',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Buenos_Aires'),
    value: 'America/Buenos_Aires',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Cambridge_Bay'),
    value: 'America/Cambridge_Bay',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Campo_Grande'),
    value: 'America/Campo_Grande',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Cancun'),
    value: 'America/Cancun',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Caracas'),
    value: 'America/Caracas',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Catamarca'),
    value: 'America/Catamarca',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Cayenne'),
    value: 'America/Cayenne',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Cayman'),
    value: 'America/Cayman',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Chicago'),
    value: 'America/Chicago',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Chihuahua'),
    value: 'America/Chihuahua',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Coral_Harbour'),
    value: 'America/Coral_Harbour',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Cordoba'),
    value: 'America/Cordoba',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Costa_Rica'),
    value: 'America/Costa_Rica',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Creston'),
    value: 'America/Creston',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Cuiaba'),
    value: 'America/Cuiaba',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Curacao'),
    value: 'America/Curacao',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Danmarkshavn'),
    value: 'America/Danmarkshavn',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Dawson'),
    value: 'America/Dawson',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Dawson_Creek'),
    value: 'America/Dawson_Creek',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Denver'),
    value: 'America/Denver',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Detroit'),
    value: 'America/Detroit',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Dominica'),
    value: 'America/Dominica',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Edmonton'),
    value: 'America/Edmonton',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Eirunepe'),
    value: 'America/Eirunepe',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/El_Salvador'),
    value: 'America/El_Salvador',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Ensenada'),
    value: 'America/Ensenada',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Fort_Nelson'),
    value: 'America/Fort_Nelson',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Fort_Wayne'),
    value: 'America/Fort_Wayne',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Fortaleza'),
    value: 'America/Fortaleza',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Glace_Bay'),
    value: 'America/Glace_Bay',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Godthab'),
    value: 'America/Godthab',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Goose_Bay'),
    value: 'America/Goose_Bay',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Grand_Turk'),
    value: 'America/Grand_Turk',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Grenada'),
    value: 'America/Grenada',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Guadeloupe'),
    value: 'America/Guadeloupe',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Guatemala'),
    value: 'America/Guatemala',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Guayaquil'),
    value: 'America/Guayaquil',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Guyana'),
    value: 'America/Guyana',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Halifax'),
    value: 'America/Halifax',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Havana'),
    value: 'America/Havana',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Hermosillo'),
    value: 'America/Hermosillo',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Indiana/Indianapolis'),
    value: 'America/Indiana/Indianapolis',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Indiana/Knox'),
    value: 'America/Indiana/Knox',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Indiana/Marengo'),
    value: 'America/Indiana/Marengo',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Indiana/Petersburg'),
    value: 'America/Indiana/Petersburg',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Indiana/Tell_City'),
    value: 'America/Indiana/Tell_City',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Indiana/Vevay'),
    value: 'America/Indiana/Vevay',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Indiana/Vincennes'),
    value: 'America/Indiana/Vincennes',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Indiana/Winamac'),
    value: 'America/Indiana/Winamac',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Indianapolis'),
    value: 'America/Indianapolis',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Inuvik'),
    value: 'America/Inuvik',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Iqaluit'),
    value: 'America/Iqaluit',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Jamaica'),
    value: 'America/Jamaica',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Jujuy'),
    value: 'America/Jujuy',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Juneau'),
    value: 'America/Juneau',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Kentucky/Louisville'),
    value: 'America/Kentucky/Louisville',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Kentucky/Monticello'),
    value: 'America/Kentucky/Monticello',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Knox_IN'),
    value: 'America/Knox_IN',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Kralendijk'),
    value: 'America/Kralendijk',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/La_Paz'),
    value: 'America/La_Paz',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Lima'),
    value: 'America/Lima',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Los_Angeles'),
    value: 'America/Los_Angeles',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Louisville'),
    value: 'America/Louisville',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Lower_Princes'),
    value: 'America/Lower_Princes',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Maceio'),
    value: 'America/Maceio',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Managua'),
    value: 'America/Managua',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Manaus'),
    value: 'America/Manaus',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Marigot'),
    value: 'America/Marigot',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Martinique'),
    value: 'America/Martinique',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Matamoros'),
    value: 'America/Matamoros',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Mazatlan'),
    value: 'America/Mazatlan',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Mendoza'),
    value: 'America/Mendoza',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Menominee'),
    value: 'America/Menominee',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Merida'),
    value: 'America/Merida',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Metlakatla'),
    value: 'America/Metlakatla',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Mexico_City'),
    value: 'America/Mexico_City',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Miquelon'),
    value: 'America/Miquelon',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Moncton'),
    value: 'America/Moncton',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Monterrey'),
    value: 'America/Monterrey',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Montevideo'),
    value: 'America/Montevideo',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Montreal'),
    value: 'America/Montreal',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Montserrat'),
    value: 'America/Montserrat',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Nassau'),
    value: 'America/Nassau',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/New_York'),
    value: 'America/New_York',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Nipigon'),
    value: 'America/Nipigon',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Nome'),
    value: 'America/Nome',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Noronha'),
    value: 'America/Noronha',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/North_Dakota/Beulah'),
    value: 'America/North_Dakota/Beulah',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/North_Dakota/Center'),
    value: 'America/North_Dakota/Center',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/North_Dakota/New_Salem'),
    value: 'America/North_Dakota/New_Salem',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Nuuk'),
    value: 'America/Nuuk',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Ojinaga'),
    value: 'America/Ojinaga',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Panama'),
    value: 'America/Panama',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Pangnirtung'),
    value: 'America/Pangnirtung',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Paramaribo'),
    value: 'America/Paramaribo',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Phoenix'),
    value: 'America/Phoenix',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Port_of_Spain'),
    value: 'America/Port_of_Spain',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Port-au-Prince'),
    value: 'America/Port-au-Prince',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Porto_Acre'),
    value: 'America/Porto_Acre',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Porto_Velho'),
    value: 'America/Porto_Velho',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Puerto_Rico'),
    value: 'America/Puerto_Rico',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Punta_Arenas'),
    value: 'America/Punta_Arenas',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Rainy_River'),
    value: 'America/Rainy_River',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Rankin_Inlet'),
    value: 'America/Rankin_Inlet',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Recife'),
    value: 'America/Recife',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Regina'),
    value: 'America/Regina',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Resolute'),
    value: 'America/Resolute',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Rio_Branco'),
    value: 'America/Rio_Branco',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Rosario'),
    value: 'America/Rosario',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Santa_Isabel'),
    value: 'America/Santa_Isabel',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Santarem'),
    value: 'America/Santarem',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Santiago'),
    value: 'America/Santiago',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Santo_Domingo'),
    value: 'America/Santo_Domingo',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Sao_Paulo'),
    value: 'America/Sao_Paulo',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Scoresbysund'),
    value: 'America/Scoresbysund',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Shiprock'),
    value: 'America/Shiprock',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Sitka'),
    value: 'America/Sitka',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/St_Barthelemy'),
    value: 'America/St_Barthelemy',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/St_Johns'),
    value: 'America/St_Johns',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/St_Kitts'),
    value: 'America/St_Kitts',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/St_Lucia'),
    value: 'America/St_Lucia',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/St_Thomas'),
    value: 'America/St_Thomas',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/St_Vincent'),
    value: 'America/St_Vincent',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Swift_Current'),
    value: 'America/Swift_Current',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Tegucigalpa'),
    value: 'America/Tegucigalpa',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Thule'),
    value: 'America/Thule',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Thunder_Bay'),
    value: 'America/Thunder_Bay',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Tijuana'),
    value: 'America/Tijuana',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Toronto'),
    value: 'America/Toronto',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Tortola'),
    value: 'America/Tortola',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Vancouver'),
    value: 'America/Vancouver',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Virgin'),
    value: 'America/Virgin',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Whitehorse'),
    value: 'America/Whitehorse',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Winnipeg'),
    value: 'America/Winnipeg',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Yakutat'),
    value: 'America/Yakutat',
  },
  {
    label: i18n.t('LANG.TIMEZONE.America/Yellowknife'),
    value: 'America/Yellowknife',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Antarctica/Casey'),
    value: 'Antarctica/Casey',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Antarctica/Davis'),
    value: 'Antarctica/Davis',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Antarctica/DumontDUrville'),
    value: 'Antarctica/DumontDUrville',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Antarctica/Macquarie'),
    value: 'Antarctica/Macquarie',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Antarctica/Mawson'),
    value: 'Antarctica/Mawson',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Antarctica/McMurdo'),
    value: 'Antarctica/McMurdo',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Antarctica/Palmer'),
    value: 'Antarctica/Palmer',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Antarctica/Rothera'),
    value: 'Antarctica/Rothera',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Antarctica/South_Pole'),
    value: 'Antarctica/South_Pole',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Antarctica/Syowa'),
    value: 'Antarctica/Syowa',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Antarctica/Troll'),
    value: 'Antarctica/Troll',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Antarctica/Vostok'),
    value: 'Antarctica/Vostok',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Arctic/Longyearbyen'),
    value: 'Arctic/Longyearbyen',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Aden'), value: 'Asia/Aden' },
  { label: i18n.t('LANG.TIMEZONE.Asia/Almaty'), value: 'Asia/Almaty' },
  { label: i18n.t('LANG.TIMEZONE.Asia/Amman'), value: 'Asia/Amman' },
  { label: i18n.t('LANG.TIMEZONE.Asia/Anadyr'), value: 'Asia/Anadyr' },
  { label: i18n.t('LANG.TIMEZONE.Asia/Aqtau'), value: 'Asia/Aqtau' },
  { label: i18n.t('LANG.TIMEZONE.Asia/Aqtobe'), value: 'Asia/Aqtobe' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Ashgabat'),
    value: 'Asia/Ashgabat',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Ashkhabad'),
    value: 'Asia/Ashkhabad',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Atyrau'), value: 'Asia/Atyrau' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Baghdad'),
    value: 'Asia/Baghdad',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Bahrain'),
    value: 'Asia/Bahrain',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Baku'), value: 'Asia/Baku' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Bangkok'),
    value: 'Asia/Bangkok',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Barnaul'),
    value: 'Asia/Barnaul',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Beirut'), value: 'Asia/Beirut' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Bishkek'),
    value: 'Asia/Bishkek',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Brunei'), value: 'Asia/Brunei' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Calcutta'),
    value: 'Asia/Calcutta',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Chita'), value: 'Asia/Chita' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Choibalsan'),
    value: 'Asia/Choibalsan',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Chongqing'),
    value: 'Asia/Chongqing',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Chungking'),
    value: 'Asia/Chungking',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Colombo'),
    value: 'Asia/Colombo',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Dacca'), value: 'Asia/Dacca' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Damascus'),
    value: 'Asia/Damascus',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Dhaka'), value: 'Asia/Dhaka' },
  { label: i18n.t('LANG.TIMEZONE.Asia/Dili'), value: 'Asia/Dili' },
  { label: i18n.t('LANG.TIMEZONE.Asia/Dubai'), value: 'Asia/Dubai' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Dushanbe'),
    value: 'Asia/Dushanbe',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Famagusta'),
    value: 'Asia/Famagusta',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Gaza'), value: 'Asia/Gaza' },
  { label: i18n.t('LANG.TIMEZONE.Asia/Harbin'), value: 'Asia/Harbin' },
  { label: i18n.t('LANG.TIMEZONE.Asia/Hebron'), value: 'Asia/Hebron' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Ho_Chi_Minh'),
    value: 'Asia/Ho_Chi_Minh',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Hong_Kong'),
    value: 'Asia/Hong_Kong',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Hovd'), value: 'Asia/Hovd' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Irkutsk'),
    value: 'Asia/Irkutsk',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Istanbul'),
    value: 'Asia/Istanbul',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Jakarta'),
    value: 'Asia/Jakarta',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Jayapura'),
    value: 'Asia/Jayapura',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Jerusalem'),
    value: 'Asia/Jerusalem',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Kabul'), value: 'Asia/Kabul' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Kamchatka'),
    value: 'Asia/Kamchatka',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Karachi'),
    value: 'Asia/Karachi',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Kashgar'),
    value: 'Asia/Kashgar',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Kathmandu'),
    value: 'Asia/Kathmandu',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Katmandu'),
    value: 'Asia/Katmandu',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Khandyga'),
    value: 'Asia/Khandyga',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Kolkata'),
    value: 'Asia/Kolkata',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Krasnoyarsk'),
    value: 'Asia/Krasnoyarsk',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Kuala_Lumpur'),
    value: 'Asia/Kuala_Lumpur',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Kuching'),
    value: 'Asia/Kuching',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Kuwait'), value: 'Asia/Kuwait' },
  { label: i18n.t('LANG.TIMEZONE.Asia/Macao'), value: 'Asia/Macao' },
  { label: i18n.t('LANG.TIMEZONE.Asia/Macau'), value: 'Asia/Macau' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Magadan'),
    value: 'Asia/Magadan',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Makassar'),
    value: 'Asia/Makassar',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Manila'), value: 'Asia/Manila' },
  { label: i18n.t('LANG.TIMEZONE.Asia/Muscat'), value: 'Asia/Muscat' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Nicosia'),
    value: 'Asia/Nicosia',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Novokuznetsk'),
    value: 'Asia/Novokuznetsk',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Novosibirsk'),
    value: 'Asia/Novosibirsk',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Omsk'), value: 'Asia/Omsk' },
  { label: i18n.t('LANG.TIMEZONE.Asia/Oral'), value: 'Asia/Oral' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Phnom_Penh'),
    value: 'Asia/Phnom_Penh',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Pontianak'),
    value: 'Asia/Pontianak',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Pyongyang'),
    value: 'Asia/Pyongyang',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Qatar'), value: 'Asia/Qatar' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Qostanay'),
    value: 'Asia/Qostanay',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Qyzylorda'),
    value: 'Asia/Qyzylorda',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Rangoon'),
    value: 'Asia/Rangoon',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Riyadh'), value: 'Asia/Riyadh' },
  { label: i18n.t('LANG.TIMEZONE.Asia/Saigon'), value: 'Asia/Saigon' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Sakhalin'),
    value: 'Asia/Sakhalin',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Samarkand'),
    value: 'Asia/Samarkand',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Seoul'), value: 'Asia/Seoul' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Shanghai'),
    value: 'Asia/Shanghai',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Singapore'),
    value: 'Asia/Singapore',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Srednekolymsk'),
    value: 'Asia/Srednekolymsk',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Taipei'), value: 'Asia/Taipei' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Tashkent'),
    value: 'Asia/Tashkent',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Tbilisi'),
    value: 'Asia/Tbilisi',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Tehran'), value: 'Asia/Tehran' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Tel_Aviv'),
    value: 'Asia/Tel_Aviv',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Thimbu'), value: 'Asia/Thimbu' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Thimphu'),
    value: 'Asia/Thimphu',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Tokyo'), value: 'Asia/Tokyo' },
  { label: i18n.t('LANG.TIMEZONE.Asia/Tomsk'), value: 'Asia/Tomsk' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Ujung_Pandang'),
    value: 'Asia/Ujung_Pandang',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Ulaanbaatar'),
    value: 'Asia/Ulaanbaatar',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Ulan_Bator'),
    value: 'Asia/Ulan_Bator',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Urumqi'), value: 'Asia/Urumqi' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Ust-Nera'),
    value: 'Asia/Ust-Nera',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Vientiane'),
    value: 'Asia/Vientiane',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Vladivostok'),
    value: 'Asia/Vladivostok',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Yakutsk'),
    value: 'Asia/Yakutsk',
  },
  { label: i18n.t('LANG.TIMEZONE.Asia/Yangon'), value: 'Asia/Yangon' },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Yekaterinburg'),
    value: 'Asia/Yekaterinburg',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Asia/Yerevan'),
    value: 'Asia/Yerevan',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Atlantic/Azores'),
    value: 'Atlantic/Azores',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Atlantic/Bermuda'),
    value: 'Atlantic/Bermuda',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Atlantic/Canary'),
    value: 'Atlantic/Canary',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Atlantic/Cape_Verde'),
    value: 'Atlantic/Cape_Verde',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Atlantic/Faeroe'),
    value: 'Atlantic/Faeroe',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Atlantic/Faroe'),
    value: 'Atlantic/Faroe',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Atlantic/Jan_Mayen'),
    value: 'Atlantic/Jan_Mayen',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Atlantic/Madeira'),
    value: 'Atlantic/Madeira',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Atlantic/Reykjavik'),
    value: 'Atlantic/Reykjavik',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Atlantic/South_Georgia'),
    value: 'Atlantic/South_Georgia',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Atlantic/St_Helena'),
    value: 'Atlantic/St_Helena',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Atlantic/Stanley'),
    value: 'Atlantic/Stanley',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/ACT'),
    value: 'Australia/ACT',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/Adelaide'),
    value: 'Australia/Adelaide',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/Brisbane'),
    value: 'Australia/Brisbane',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/Broken_Hill'),
    value: 'Australia/Broken_Hill',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/Canberra'),
    value: 'Australia/Canberra',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/Currie'),
    value: 'Australia/Currie',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/Darwin'),
    value: 'Australia/Darwin',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/Eucla'),
    value: 'Australia/Eucla',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/Hobart'),
    value: 'Australia/Hobart',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/LHI'),
    value: 'Australia/LHI',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/Lindeman'),
    value: 'Australia/Lindeman',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/Lord_Howe'),
    value: 'Australia/Lord_Howe',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/Melbourne'),
    value: 'Australia/Melbourne',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/North'),
    value: 'Australia/North',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/NSW'),
    value: 'Australia/NSW',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/Perth'),
    value: 'Australia/Perth',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/Queensland'),
    value: 'Australia/Queensland',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/South'),
    value: 'Australia/South',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/Sydney'),
    value: 'Australia/Sydney',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/Tasmania'),
    value: 'Australia/Tasmania',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/Victoria'),
    value: 'Australia/Victoria',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/West'),
    value: 'Australia/West',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Australia/Yancowinna'),
    value: 'Australia/Yancowinna',
  },
  { label: i18n.t('LANG.TIMEZONE.Brazil/Acre'), value: 'Brazil/Acre' },
  {
    label: i18n.t('LANG.TIMEZONE.Brazil/DeNoronha'),
    value: 'Brazil/DeNoronha',
  },
  { label: i18n.t('LANG.TIMEZONE.Brazil/East'), value: 'Brazil/East' },
  { label: i18n.t('LANG.TIMEZONE.Brazil/West'), value: 'Brazil/West' },
  {
    label: i18n.t('LANG.TIMEZONE.Canada/Atlantic'),
    value: 'Canada/Atlantic',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Canada/Central'),
    value: 'Canada/Central',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Canada/Eastern'),
    value: 'Canada/Eastern',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Canada/Mountain'),
    value: 'Canada/Mountain',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Canada/Newfoundland'),
    value: 'Canada/Newfoundland',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Canada/Pacific'),
    value: 'Canada/Pacific',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Canada/Saskatchewan'),
    value: 'Canada/Saskatchewan',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Canada/Yukon'),
    value: 'Canada/Yukon',
  },
  { label: i18n.t('LANG.TIMEZONE.CET'), value: 'CET' },
  {
    label: i18n.t('LANG.TIMEZONE.Chile/Continental'),
    value: 'Chile/Continental',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Chile/EasterIsland'),
    value: 'Chile/EasterIsland',
  },
  { label: i18n.t('LANG.TIMEZONE.CST6CDT'), value: 'CST6CDT' },
  { label: i18n.t('LANG.TIMEZONE.Cuba'), value: 'Cuba' },
  { label: i18n.t('LANG.TIMEZONE.EET'), value: 'EET' },
  { label: i18n.t('LANG.TIMEZONE.Egypt'), value: 'Egypt' },
  { label: i18n.t('LANG.TIMEZONE.Eire'), value: 'Eire' },
  { label: i18n.t('LANG.TIMEZONE.EST'), value: 'EST' },
  { label: i18n.t('LANG.TIMEZONE.EST5EDT'), value: 'EST5EDT' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT'), value: 'Etc/GMT' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT-0'), value: 'Etc/GMT-0' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT-1'), value: 'Etc/GMT-1' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT-10'), value: 'Etc/GMT-10' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT-11'), value: 'Etc/GMT-11' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT-12'), value: 'Etc/GMT-12' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT-13'), value: 'Etc/GMT-13' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT-14'), value: 'Etc/GMT-14' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT-2'), value: 'Etc/GMT-2' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT-3'), value: 'Etc/GMT-3' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT-4'), value: 'Etc/GMT-4' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT-5'), value: 'Etc/GMT-5' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT-6'), value: 'Etc/GMT-6' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT-7'), value: 'Etc/GMT-7' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT-8'), value: 'Etc/GMT-8' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT-9'), value: 'Etc/GMT-9' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT+0'), value: 'Etc/GMT+0' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT+1'), value: 'Etc/GMT+1' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT+10'), value: 'Etc/GMT+10' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT+11'), value: 'Etc/GMT+11' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT+12'), value: 'Etc/GMT+12' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT+2'), value: 'Etc/GMT+2' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT+3'), value: 'Etc/GMT+3' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT+4'), value: 'Etc/GMT+4' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT+5'), value: 'Etc/GMT+5' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT+6'), value: 'Etc/GMT+6' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT+7'), value: 'Etc/GMT+7' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT+8'), value: 'Etc/GMT+8' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT+9'), value: 'Etc/GMT+9' },
  { label: i18n.t('LANG.TIMEZONE.Etc/GMT0'), value: 'Etc/GMT0' },
  {
    label: i18n.t('LANG.TIMEZONE.Etc/Greenwich'),
    value: 'Etc/Greenwich',
  },
  { label: i18n.t('LANG.TIMEZONE.Etc/UCT'), value: 'Etc/UCT' },
  {
    label: i18n.t('LANG.TIMEZONE.Etc/Universal'),
    value: 'Etc/Universal',
  },
  { label: i18n.t('LANG.TIMEZONE.Etc/UTC'), value: 'Etc/UTC' },
  { label: i18n.t('LANG.TIMEZONE.Etc/Zulu'), value: 'Etc/Zulu' },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Amsterdam'),
    value: 'Europe/Amsterdam',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Andorra'),
    value: 'Europe/Andorra',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Astrakhan'),
    value: 'Europe/Astrakhan',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Athens'),
    value: 'Europe/Athens',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Belfast'),
    value: 'Europe/Belfast',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Belgrade'),
    value: 'Europe/Belgrade',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Berlin'),
    value: 'Europe/Berlin',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Bratislava'),
    value: 'Europe/Bratislava',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Brussels'),
    value: 'Europe/Brussels',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Bucharest'),
    value: 'Europe/Bucharest',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Budapest'),
    value: 'Europe/Budapest',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Busingen'),
    value: 'Europe/Busingen',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Chisinau'),
    value: 'Europe/Chisinau',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Copenhagen'),
    value: 'Europe/Copenhagen',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Dublin'),
    value: 'Europe/Dublin',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Gibraltar'),
    value: 'Europe/Gibraltar',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Guernsey'),
    value: 'Europe/Guernsey',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Helsinki'),
    value: 'Europe/Helsinki',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Isle_of_Man'),
    value: 'Europe/Isle_of_Man',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Istanbul'),
    value: 'Europe/Istanbul',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Jersey'),
    value: 'Europe/Jersey',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Kaliningrad'),
    value: 'Europe/Kaliningrad',
  },
  { label: i18n.t('LANG.TIMEZONE.Europe/Kiev'), value: 'Europe/Kiev' },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Kirov'),
    value: 'Europe/Kirov',
  },
  { label: i18n.t('LANG.TIMEZONE.Europe/Kyiv'), value: 'Europe/Kyiv' },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Lisbon'),
    value: 'Europe/Lisbon',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Ljubljana'),
    value: 'Europe/Ljubljana',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/London'),
    value: 'Europe/London',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Luxembourg'),
    value: 'Europe/Luxembourg',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Madrid'),
    value: 'Europe/Madrid',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Malta'),
    value: 'Europe/Malta',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Mariehamn'),
    value: 'Europe/Mariehamn',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Minsk'),
    value: 'Europe/Minsk',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Monaco'),
    value: 'Europe/Monaco',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Moscow'),
    value: 'Europe/Moscow',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Nicosia'),
    value: 'Europe/Nicosia',
  },
  { label: i18n.t('LANG.TIMEZONE.Europe/Oslo'), value: 'Europe/Oslo' },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Paris'),
    value: 'Europe/Paris',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Podgorica'),
    value: 'Europe/Podgorica',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Prague'),
    value: 'Europe/Prague',
  },
  { label: i18n.t('LANG.TIMEZONE.Europe/Riga'), value: 'Europe/Riga' },
  { label: i18n.t('LANG.TIMEZONE.Europe/Rome'), value: 'Europe/Rome' },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Samara'),
    value: 'Europe/Samara',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/San_Marino'),
    value: 'Europe/San_Marino',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Sarajevo'),
    value: 'Europe/Sarajevo',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Saratov'),
    value: 'Europe/Saratov',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Simferopol'),
    value: 'Europe/Simferopol',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Skopje'),
    value: 'Europe/Skopje',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Sofia'),
    value: 'Europe/Sofia',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Stockholm'),
    value: 'Europe/Stockholm',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Tallinn'),
    value: 'Europe/Tallinn',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Tirane'),
    value: 'Europe/Tirane',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Tiraspol'),
    value: 'Europe/Tiraspol',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Ulyanovsk'),
    value: 'Europe/Ulyanovsk',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Uzhgorod'),
    value: 'Europe/Uzhgorod',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Vaduz'),
    value: 'Europe/Vaduz',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Vatican'),
    value: 'Europe/Vatican',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Vienna'),
    value: 'Europe/Vienna',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Vilnius'),
    value: 'Europe/Vilnius',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Volgograd'),
    value: 'Europe/Volgograd',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Warsaw'),
    value: 'Europe/Warsaw',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Zagreb'),
    value: 'Europe/Zagreb',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Zaporozhye'),
    value: 'Europe/Zaporozhye',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Europe/Zurich'),
    value: 'Europe/Zurich',
  },
  { label: i18n.t('LANG.TIMEZONE.GB'), value: 'GB' },
  { label: i18n.t('LANG.TIMEZONE.GB-Eire'), value: 'GB-Eire' },
  { label: i18n.t('LANG.TIMEZONE.GMT'), value: 'GMT' },
  { label: i18n.t('LANG.TIMEZONE.GMT-0'), value: 'GMT-0' },
  { label: i18n.t('LANG.TIMEZONE.GMT+0'), value: 'GMT+0' },
  { label: i18n.t('LANG.TIMEZONE.GMT0'), value: 'GMT0' },
  { label: i18n.t('LANG.TIMEZONE.Greenwich'), value: 'Greenwich' },
  { label: i18n.t('LANG.TIMEZONE.Hongkong'), value: 'Hongkong' },
  { label: i18n.t('LANG.TIMEZONE.HST'), value: 'HST' },
  { label: i18n.t('LANG.TIMEZONE.Iceland'), value: 'Iceland' },
  {
    label: i18n.t('LANG.TIMEZONE.Indian/Antananarivo'),
    value: 'Indian/Antananarivo',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Indian/Chagos'),
    value: 'Indian/Chagos',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Indian/Christmas'),
    value: 'Indian/Christmas',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Indian/Cocos'),
    value: 'Indian/Cocos',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Indian/Comoro'),
    value: 'Indian/Comoro',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Indian/Kerguelen'),
    value: 'Indian/Kerguelen',
  },
  { label: i18n.t('LANG.TIMEZONE.Indian/Mahe'), value: 'Indian/Mahe' },
  {
    label: i18n.t('LANG.TIMEZONE.Indian/Maldives'),
    value: 'Indian/Maldives',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Indian/Mauritius'),
    value: 'Indian/Mauritius',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Indian/Mayotte'),
    value: 'Indian/Mayotte',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Indian/Reunion'),
    value: 'Indian/Reunion',
  },
  { label: i18n.t('LANG.TIMEZONE.Iran'), value: 'Iran' },
  { label: i18n.t('LANG.TIMEZONE.Israel'), value: 'Israel' },
  { label: i18n.t('LANG.TIMEZONE.Jamaica'), value: 'Jamaica' },
  { label: i18n.t('LANG.TIMEZONE.Japan'), value: 'Japan' },
  { label: i18n.t('LANG.TIMEZONE.Kwajalein'), value: 'Kwajalein' },
  { label: i18n.t('LANG.TIMEZONE.Libya'), value: 'Libya' },
  { label: i18n.t('LANG.TIMEZONE.MET'), value: 'MET' },
  {
    label: i18n.t('LANG.TIMEZONE.Mexico/BajaNorte'),
    value: 'Mexico/BajaNorte',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Mexico/BajaSur'),
    value: 'Mexico/BajaSur',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Mexico/General'),
    value: 'Mexico/General',
  },
  { label: i18n.t('LANG.TIMEZONE.MST'), value: 'MST' },
  { label: i18n.t('LANG.TIMEZONE.MST7MDT'), value: 'MST7MDT' },
  { label: i18n.t('LANG.TIMEZONE.Navajo'), value: 'Navajo' },
  { label: i18n.t('LANG.TIMEZONE.NZ'), value: 'NZ' },
  { label: i18n.t('LANG.TIMEZONE.NZ-CHAT'), value: 'NZ-CHAT' },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Apia'),
    value: 'Pacific/Apia',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Auckland'),
    value: 'Pacific/Auckland',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Bougainville'),
    value: 'Pacific/Bougainville',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Chatham'),
    value: 'Pacific/Chatham',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Chuuk'),
    value: 'Pacific/Chuuk',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Easter'),
    value: 'Pacific/Easter',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Efate'),
    value: 'Pacific/Efate',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Enderbury'),
    value: 'Pacific/Enderbury',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Fakaofo'),
    value: 'Pacific/Fakaofo',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Fiji'),
    value: 'Pacific/Fiji',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Funafuti'),
    value: 'Pacific/Funafuti',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Galapagos'),
    value: 'Pacific/Galapagos',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Gambier'),
    value: 'Pacific/Gambier',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Guadalcanal'),
    value: 'Pacific/Guadalcanal',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Guam'),
    value: 'Pacific/Guam',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Honolulu'),
    value: 'Pacific/Honolulu',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Johnston'),
    value: 'Pacific/Johnston',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Kanton'),
    value: 'Pacific/Kanton',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Kiritimati'),
    value: 'Pacific/Kiritimati',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Kosrae'),
    value: 'Pacific/Kosrae',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Kwajalein'),
    value: 'Pacific/Kwajalein',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Majuro'),
    value: 'Pacific/Majuro',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Marquesas'),
    value: 'Pacific/Marquesas',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Midway'),
    value: 'Pacific/Midway',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Nauru'),
    value: 'Pacific/Nauru',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Niue'),
    value: 'Pacific/Niue',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Norfolk'),
    value: 'Pacific/Norfolk',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Noumea'),
    value: 'Pacific/Noumea',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Pago_Pago'),
    value: 'Pacific/Pago_Pago',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Palau'),
    value: 'Pacific/Palau',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Pitcairn'),
    value: 'Pacific/Pitcairn',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Pohnpei'),
    value: 'Pacific/Pohnpei',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Ponape'),
    value: 'Pacific/Ponape',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Port_Moresby'),
    value: 'Pacific/Port_Moresby',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Rarotonga'),
    value: 'Pacific/Rarotonga',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Saipan'),
    value: 'Pacific/Saipan',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Samoa'),
    value: 'Pacific/Samoa',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Tahiti'),
    value: 'Pacific/Tahiti',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Tarawa'),
    value: 'Pacific/Tarawa',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Tongatapu'),
    value: 'Pacific/Tongatapu',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Truk'),
    value: 'Pacific/Truk',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Wake'),
    value: 'Pacific/Wake',
  },
  {
    label: i18n.t('LANG.TIMEZONE.Pacific/Wallis'),
    value: 'Pacific/Wallis',
  },
  { label: i18n.t('LANG.TIMEZONE.Pacific/Yap'), value: 'Pacific/Yap' },
  { label: i18n.t('LANG.TIMEZONE.Poland'), value: 'Poland' },
  { label: i18n.t('LANG.TIMEZONE.Portugal'), value: 'Portugal' },
  { label: i18n.t('LANG.TIMEZONE.PRC'), value: 'PRC' },
  { label: i18n.t('LANG.TIMEZONE.PST8PDT'), value: 'PST8PDT' },
  { label: i18n.t('LANG.TIMEZONE.ROC'), value: 'ROC' },
  { label: i18n.t('LANG.TIMEZONE.ROK'), value: 'ROK' },
  { label: i18n.t('LANG.TIMEZONE.Singapore'), value: 'Singapore' },
  { label: i18n.t('LANG.TIMEZONE.Turkey'), value: 'Turkey' },
  { label: i18n.t('LANG.TIMEZONE.UCT'), value: 'UCT' },
  { label: i18n.t('LANG.TIMEZONE.Universal'), value: 'Universal' },
  { label: i18n.t('LANG.TIMEZONE.US/Alaska'), value: 'US/Alaska' },
  { label: i18n.t('LANG.TIMEZONE.US/Aleutian'), value: 'US/Aleutian' },
  { label: i18n.t('LANG.TIMEZONE.US/Arizona'), value: 'US/Arizona' },
  { label: i18n.t('LANG.TIMEZONE.US/Central'), value: 'US/Central' },
  {
    label: i18n.t('LANG.TIMEZONE.US/East-Indiana'),
    value: 'US/East-Indiana',
  },
  { label: i18n.t('LANG.TIMEZONE.US/Eastern'), value: 'US/Eastern' },
  { label: i18n.t('LANG.TIMEZONE.US/Hawaii'), value: 'US/Hawaii' },
  {
    label: i18n.t('LANG.TIMEZONE.US/Indiana-Starke'),
    value: 'US/Indiana-Starke',
  },
  { label: i18n.t('LANG.TIMEZONE.US/Michigan'), value: 'US/Michigan' },
  { label: i18n.t('LANG.TIMEZONE.US/Mountain'), value: 'US/Mountain' },
  { label: i18n.t('LANG.TIMEZONE.US/Pacific'), value: 'US/Pacific' },
  { label: i18n.t('LANG.TIMEZONE.US/Samoa'), value: 'US/Samoa' },
  { label: i18n.t('LANG.TIMEZONE.UTC'), value: 'UTC' },
  { label: i18n.t('LANG.TIMEZONE.W-SU'), value: 'W-SU' },
  { label: i18n.t('LANG.TIMEZONE.WET'), value: 'WET' },
  { label: i18n.t('LANG.TIMEZONE.Zulu'), value: 'Zulu' },
];
