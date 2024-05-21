import { ShipOption, ShipLevelOption } from '../types/apollo/filterOptions'

export const shipLevelsOptions: ShipLevelOption[] = [
    { label: 'Все', value: 'all' },
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
    { label: 6, value: 6 },
    { label: 7, value: 7 },
    { label: 8, value: 8 },
    { label: 9, value: 9 },
    { label: 10, value: 10 },
    { label: 11, value: 11 },
  ]

  export const shipNationNamesOptions: ShipOption[] = [
    { label: 'Все', value: 'all'},
    { label: 'Содружество', value: 'commonwealth' },
    { label: 'Европа', value: 'europe' },
    { label: 'Франция', value: 'france' },
    { label: 'Германия', value: 'germany' },
    { label: 'Италия', value: 'italy' },
    { label: 'Япония', value: 'japan' },
    { label: 'Нидерланды', value: 'netherlands' },
    { label: 'Пан-Америка', value: 'pan_america' },
    { label: 'Пан-Азия', value: 'pan_asia' },
    { label: 'Испания', value: 'spain' },
    { label: 'Великобритания', value: 'uk' },
    { label: 'США', value: 'usa' },
    { label: 'СССР', value: 'ussr' }
  ]

  export const shipTypeNamesOptions: ShipOption[] = [
    {label: 'Все', value: "all"},
    {label: 'Авианосец', value: "aircarrier"},
    {label: 'Эсминец', value: "destroyer"},
    {label: 'Линкор', value: "battleship"},
    {label: 'Крейсер', value: "cruiser"},
    {label: 'Подводная лодка', value: "submarine"},
]