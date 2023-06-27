import { Request, Response } from 'express';
import moment from 'moment';
import { parse } from 'url';

// mock tableListDataSource
const genList = (current: number, pageSize: number) => {
  const tableListDataSource: any[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i;
    const status = Math.floor(Math.random() * 10) % 4;

    tableListDataSource.push({
      id: index,
      files: {
        0: {
          path: '/mockImage/00A64345FFD83CF13C93F319CB568D6887CF768F.jpeg',
          desc: status % 2 === 1 ? 'A. fumigatus' : undefined,
        },
        1: {
          path: '/mockImage/348A9E1618E823B6E45CDF7EB8698C7FD0A1E0CE.jpeg',
          desc: status % 2 === 1 ? 'A. fumigatus' : undefined,
        },
        2: {
          path: '/mockImage/191473259ACE4A53DD55662B4A0679D550615E03.jpeg',
          desc: status % 2 === 1 ? 'A. fumigatus' : undefined,
        },
        3: {
          path: '/mockImage/CB0491E99E79EF5F1A7877761C78BB3551D267B0.jpeg',
          desc: status % 2 === 1 ? 'A. fumigatus' : undefined,
        },
      },
      name: `mock ${index}`,
      owner: '曲丽丽',
      desc: status % 2 === 1 ? 'Aspergillosis fumigates 100% (4/4)' : undefined, //status === 1 or status ===3
      selected: Math.floor(Math.random() * 10) % 2,
      updatedAt: moment().format('YYYY-MM-DD'),
      createdAt: moment().format('YYYY-MM-DD'),
      status,
    });
  }
  tableListDataSource.reverse();
  return tableListDataSource;
};

let tableListDataSource = genList(1, 100);

function getScan(req: Request, res: Response, u: string) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const { current = 1, pageSize = 10 } = req.query;
  const params = parse(realUrl, true).query as unknown as any &
    any & {
      sorter: any;
      filter: any;
    };

  let tempTableList = [...tableListDataSource];
  if (params.name) {
    tempTableList = tempTableList.filter((data) => data?.name?.includes(params.name || ''));
  }
  if (params.desc) {
    tempTableList = tempTableList.filter((data) => data?.desc?.includes(params.desc || ''));
  }
  if (params.status) {
    tempTableList = tempTableList.filter((data) => data?.status === Number(params.status));
  }

  let dataSource = [...tempTableList].slice(
    ((current as number) - 1) * (pageSize as number),
    (current as number) * (pageSize as number),
  );
  if (params.sorter) {
    const sorter = JSON.parse(params.sorter);
    dataSource = dataSource.sort((prev, next) => {
      let sortNumber = 0;
      Object.keys(sorter).forEach((key) => {
        if (sorter[key] === 'descend') {
          if (prev[key] - next[key] > 0) {
            sortNumber += -1;
          } else {
            sortNumber += 1;
          }
          return;
        }
        if (prev[key] - next[key] > 0) {
          sortNumber += 1;
        } else {
          sortNumber += -1;
        }
      });
      return sortNumber;
    });
  }
  if (params.filter) {
    const filter = JSON.parse(params.filter as any) as {
      [key: string]: string[];
    };
    if (Object.keys(filter).length > 0) {
      dataSource = dataSource.filter((item) => {
        return Object.keys(filter).some((key) => {
          if (!filter[key]) {
            return true;
          }
          if (filter[key].includes(`${item[key]}`)) {
            return true;
          }
          return false;
        });
      });
    }
  }

  if (params.name) {
    dataSource = dataSource.filter((data) => data?.name?.includes(params.name || ''));
  }
  const result = {
    data: dataSource,
    total: tempTableList.length,
    success: true,
    pageSize,
    current: parseInt(`${params.current}`, 10) || 1,
  };

  return res.json(result);
}

function postScan(req: Request, res: Response, u: string, b: Request) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const body = (b && b.body) || req.body;
  const { method, name, desc, id } = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'delete':
      tableListDataSource = tableListDataSource.filter((item) => id.indexOf(item.key) === -1);
      break;
    case 'post':
      (() => {
        const i = Math.ceil(Math.random() * 10000);
        const newRule: any = {
          id: tableListDataSource.length,
          href: 'https://ant.design',
          avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
          ][i % 2],
          name,
          owner: '曲丽丽',
          desc,
          callNo: Math.floor(Math.random() * 1000),
          status: Math.floor(Math.random() * 10) % 2,
          updatedAt: moment().format('YYYY-MM-DD'),
          createdAt: moment().format('YYYY-MM-DD'),
          progress: Math.ceil(Math.random() * 100),
        };
        // tableListDataSource.unshift(newRule);
        return res.json(newRule);
      })();
      return;

    case 'update':
      (() => {
        let newRule = {};
        tableListDataSource = tableListDataSource.map((item) => {
          if (item.id === id) {
            newRule = { ...item, desc, name };
            return { ...item, desc, name };
          }
          return item;
        });
        return res.json(newRule);
      })();
      return;
    default:
      break;
  }

  const result = {
    list: tableListDataSource,
    pagination: {
      total: tableListDataSource.length,
    },
  };

  res.json(result);
}

export default {
  'GET /api/scan': getScan,
  'POST /api/scan': postScan,
};
