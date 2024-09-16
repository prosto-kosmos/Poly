import { ReportDepartment } from '../interfaces/report-department.interface';

export const REPORT_DEPARTMENTS_MOCK: ReportDepartment[] = [
  {
    id: 1,
    label: 'Головной офис',
    children: [
      {
        id: 11,
        label: 'Управление №1',
        children: [
          {
            id: 111,
            label: 'Отдел №1',
            children: [
              {
                id: 1111,
                label: 'Группа №1',
              },
              {
                id: 1112,
                label: 'Группа №2',
              },
              {
                id: 1113,
                label: 'Группа №3',
              },
              {
                id: 1114,
                label: 'Группа №4',
              },
              {
                id: 1115,
                label: 'Группа №5',
              },
            ],
          },
          {
            id: 112,
            label: 'Отдел №2',
            children: [
              {
                id: 1121,
                label: 'Группа №1',
              },
              {
                id: 1122,
                label: 'Группа №2',
              },
              {
                id: 1123,
                label: 'Группа №3',
              },
            ],
          },
          {
            id: 113,
            label: 'Отдел №3',
            children: [
              {
                id: 1131,
                label: 'Группа №1',
              },
              {
                id: 1132,
                label: 'Группа №2',
              },
              {
                id: 1133,
                label: 'Группа №3',
              },
              {
                id: 1134,
                label: 'Группа №4',
              },
            ],
          },
        ],
      },
      {
        id: 12,
        label: 'Управление №2',
        children: [
          {
            id: 121,
            label: 'Отдел №1',
            children: [
              {
                id: 1211,
                label: 'Группа №1',
              },
              {
                id: 1212,
                label: 'Группа №2',
              },
              {
                id: 1213,
                label: 'Группа №3',
              },
              {
                id: 1214,
                label: 'Группа №4',
              },
            ],
          },
          {
            id: 122,
            label: 'Отдел №2',
            children: [
              {
                id: 1221,
                label: 'Группа №1',
              },
              {
                id: 1222,
                label: 'Группа №2',
              },
            ],
          },
          {
            id: 123,
            label: 'Отдел №3',
          },
        ],
      },
      {
        id: 13,
        label: 'Управление №3',
        children: [
          {
            id: 131,
            label: 'Отдел №1',
          },
        ],
      },
      {
        id: 14,
        label: 'Управление №4',
      },
      {
        id: 15,
        label: 'Управление №5',
      },
      {
        id: 16,
        label: 'Управление №6',
      },
    ],
  },
];
