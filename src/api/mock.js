export const AdminUser = {
  userId: 1,
  token: 'admin',
  menuName: ['user-list', 'role-list', 'permission', 'basic-form', 'advance-form', 'basic-list', 'card-list', 'base-table'],
  permissionMenuId: [101, 102, 103, 201, 202, 301, 302, 30301],
  menuList: [
    {
      icon: "SetUp",
      index: "/system",
      title: "系统管理",
      id: 1,
      subs: [
        {
          index: "/user-list",
          title: "用户管理",
          parentId: 1,
          id: 101
        },
        {
          index: "/role-list",
          title: "角色管理",
          parentId: 1,
          id: 102
        },
        {
          index: "/permission",
          title: "权限测试",
          parentId: 1,
          id: 103
        }
      ]
    },
    {
      icon: "Edit",
      index: "/forms",
      title: "表单页",
      id: 2,
      subs: [
        {
          index: "/basic-form",
          title: "基础表单",
          parentId: 2,
          id: 201
        },
        {
          index: "/advance-form",
          title: "进阶表单",
          parentId: 2,
          id: 202
        }
      ]
    },
    {
      icon: "Grid",
      index: "/list",
      title: "列表页",
      id: 3,
      subs: [
        {
          index: "/basic-list",
          title: "树形列表",
          parentId: 3,
          id: 301
        },
        {
          index: "/card-list",
          title: "卡片列表",
          parentId: 3,
          id: 302
        },
        {
          index: "/table",
          title: "表格",
          parentId: 3,
          id: 303,
          subs: [
            {
              index: "/base-table",
              title: "基础表格",
              parentId: 303,
              id: 30301
            }
          ]
        }
      ]
    }
  ]
}

export const vipUser = {
  userId: 2,
  token: 'vipuser',
  menuName: ['basic-form', 'advance-form', 'basic-list', 'card-list', 'base-table'],
  permissionMenuId: [201, 202, 301, 302, 30301],
  menuList: [
    {
      icon: "Edit",
      index: "/forms",
      title: "表单页",
      id: 2,
      subs: [
        {
          index: "/basic-form",
          title: "基础表单",
          parentId: 2,
          id: 201
        },
        {
          index: "/advance-form",
          title: "进阶表单",
          parentId: 2,
          id: 202
        }
      ]
    },
    {
      icon: "Grid",
      index: "/list",
      title: "列表页",
      id: 3,
      subs: [
        {
          index: "/basic-list",
          title: "树形列表",
          parentId: 3,
          id: 301
        },
        {
          index: "/card-list",
          title: "卡片列表",
          parentId: 3,
          id: 302
        },
        {
          index: "/table",
          title: "表格",
          parentId: 3,
          id: 303,
          subs: [
            {
              index: "/base-table",
              title: "基础表格",
              parentId: 303,
              id: 30301
            }
          ]
        }
      ]
    }
  ]
}

export const commonUser = {
  userId: 1,
  token: 'commonuser',
  menuName: ['basic-list', 'card-list', 'base-table'],
  permissionMenuId: [301, 302, 30301],
  menuList: [
    {
      icon: "Grid",
      index: "/list",
      title: "列表页",
      id: 3,
      subs: [
        {
          index: "/basic-list",
          title: "树形列表",
          parentId: 3,
          id: 301
        },
        {
          index: "/card-list",
          title: "卡片列表",
          parentId: 3,
          id: 302
        },
        {
          index: "/table",
          title: "表格",
          parentId: 3,
          id: 303,
          subs: [
            {
              index: "/base-table",
              title: "基础表格",
              parentId: 303,
              id: 30301
            }
          ]
        }
      ]
    }
  ]
}

export const userList = [
  {
    id: 1,
    name: 'King',
    username: 'admin',
    img: 'https://avatars.githubusercontent.com/u/19619322?v=4',
    phone: '13087878688',
    role: 'admin',
    status: '正常',
    date: '2016-05-02'
  },
  {
    id: 2,
    name: 'Jacob',
    username: 'vipuser',
    img: 'https://apic.douyucdn.cn/upload/avanew/face/201709/30/10/fd53f8d5fad766e5c01a84f79be2aeff_big.jpg',
    phone: '13087878688',
    role: 'vipuser',
    status: '正常',
    date: '2016-05-02'
  },
  {
    id: 3,
    name: 'yuxi',
    username: 'vipuser',
    img: 'https://lh3.googleusercontent.com/ogw/ADea4I7kggvYj-iDxu5--uFvIyPzOD-qaZWcYcWT3kWX=s32-c-mo',
    phone: '13087878688',
    role: 'vipuser',
    status: '正常',
    date: '2016-05-02'
  },
  {
    id: 4,
    name: 'lucy',
    username: 'commonuser',
    img: 'https://apic.douyucdn.cn/upload/avanew/face/201803/23/17/faa711e232041d7525a1bd695bf8fa8e_big.jpg',
    phone: '13087878688',
    role: 'commonuser',
    status: '正常',
    date: '2016-05-02'
  },
  {
    id: 5,
    name: 'eric',
    username: 'commonuser',
    img: 'https://static.youku.com/user/img/avatar/310/19.jpg',
    phone: '13087878688',
    role: 'commonuser',
    status: '禁用',
    date: '2016-05-02'
  }
]

export const roleList = [
  {
    id: 1,
    roleName: '管理员',
    status: true,
    date: '2016-05-02',
    remarks: '拥有所有权限',
    permissionMenuId: [101, 102, 103, 201, 202, 301, 302, 30301],
    menuList: []
  },
  {
    id: 2,
    roleName: 'vip用户',
    status: true,
    date: '2016-05-02',
    remarks: '拥有除开系统外的所有权限',
    permissionMenuId: [201, 202, 301, 302, 30301]
  },
  {
    id: 3,
    roleName: '普通用户',
    status: false,
    date: '2016-05-02',
    remarks: '只有普通操作',
    permissionMenuId: [301, 302, 30301]
  }
]

export const analysisData = {
  cycleData: [
    {
      title: '最帅气的英雄',
      tag: '日',
      tagType: '',
      text: 'Nevermore',
      img: 'https://avatars.githubusercontent.com/u/19619322?v=4'
    },
    {
      title: '最性感的英雄',
      tag: '周',
      tagType: 'success',
      text: 'Nevermore',
      img: 'https://avatars.githubusercontent.com/u/19619322?v=4'
    },
    {
      title: '最帅气的英雄',
      tag: '月',
      tagType: 'danger',
      text: 'Nevermore',
      img: 'https://avatars.githubusercontent.com/u/19619322?v=4'
    },
    {
      title: '最帅气的英雄',
      tag: '季',
      tagType: 'warning',
      text: 'Nevermore',
      img: 'https://avatars.githubusercontent.com/u/19619322?v=4'
    }
  ],
  pieChartData: {
    style: 1,
    type: 'pie',
    title: '各个位置胜场',
    data: [
      { value: 80, name: 'Carry' },
      { value: 30, name: 'Mid' },
      { value: 50, name: 'offland' },
      { value: 21, name: 'gank' },
      { value: 6, name: 'support' }
    ]
  },
  pieChartDataSub: {
    style: 2,
    type: 'pie',
    title: '各个位置胜场',
    data: [
      { value: 180, name: 'one' },
      { value: 130, name: 'two' },
      { value: 90, name: 'three' },
      { value: 81, name: 'four' },
    ]
  },
  barChartData: {
    type: 'bar',
    title: '流量',
    category: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: [
      {
        data: [120, 200, 150, 80, 70, 110, 130]
      }
    ]
  },
  lineChartData: {
    type: 'line',
    title: '每周销量',
    category: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: [
      {
        name: 'one',
        data: [10, 100, 100, 40, 100, 100, 10],
      },
      {
        name: 'two',
        data: [12, 102, 102, 42, 102, 102, 12],
      },
      {
        name: 'three',
        data: [20, 110, 110, 50, 110, 110, 20],
      },
      {
        name: 'four',
        data: [28, 118, 118, 58, 118, 118, 28],
      },
      {
        name: 'five',
        data: [30, 120, 120, 60, 120, 120, 30]
      }
    ]
  }
}

export const workPlaceData = {
  actionsList: [
    {
      img: 'https://avatars.githubusercontent.com/u/19619322?v=4',
      desc: '管理员jacob添加了新的角色。',
      time: '2022-4-26 14:35:42'
    },
    {
      img: 'https://lh3.googleusercontent.com/ogw/ADea4I7kggvYj-iDxu5--uFvIyPzOD-qaZWcYcWT3kWX=s32-c-mo',
      desc: 'alsace创建了新的数据表，提交了部分数据。提交了部分数据。提交了部分数据。提交了部分数据。提交了部分数据。提交了部分数据。',
      time: '2022-4-26 14:35:42'
    },
    {
      img: 'https://static.youku.com/user/img/avatar/310/19.jpg',
      desc: '杰克 关闭了问题 如何运行项目',
      time: '2022-4-26 14:35:42'
    },
    {
      img: 'https://avatars.githubusercontent.com/u/19619322?v=4',
      desc: '管理员jacob添加了新的角色。',
      time: '2022-4-26 14:35:42'
    },
    {
      img: 'https://apic.douyucdn.cn/upload/avanew/face/201709/30/10/fd53f8d5fad766e5c01a84f79be2aeff_big.jpg',
      desc: '上班不摸鱼，和咸鱼有什么区别',
      time: '2022-4-26 14:35:42'
    },
    {
      img: 'https://apic.douyucdn.cn/upload/avanew/face/201803/23/17/faa711e232041d7525a1bd695bf8fa8e_big.jpg',
      desc: '刚才把工作台页面随便写了一些，凑合能看了',
      time: '2022-4-26 14:35:42'
    }
  ]
}

export const baseTableData = [
  {
    id: 1,
    name: 'King',
    img: 'https://avatars.githubusercontent.com/u/19619322?v=4',
    status: 'success',
    address: 'No. 189, Grove St, Los Angeles',
    date: '2016-05-02'
  },
  {
    id: 2,
    name: 'Jacob',
    img: 'https://apic.douyucdn.cn/upload/avanew/face/201709/30/10/fd53f8d5fad766e5c01a84f79be2aeff_big.jpg',
    status: 'danger',
    address: 'No. 189, Grove St, Los Angeles',
    date: '2016-05-02'
  },
  {
    id: 3,
    name: 'Tom',
    img: 'https://lh3.googleusercontent.com/ogw/ADea4I7kggvYj-iDxu5--uFvIyPzOD-qaZWcYcWT3kWX=s32-c-mo',
    status: 'warning',
    address: 'No. 189, Grove St, Los Angeles',
    date: '2016-05-02'
  },
  {
    id: 4,
    name: 'jack',
    img: 'https://apic.douyucdn.cn/upload/avanew/face/201803/23/17/faa711e232041d7525a1bd695bf8fa8e_big.jpg',
    status: 'danger',
    address: 'No. 189, Grove St, Los Angeles',
    date: '2016-05-02'
  },
  {
    id: 5,
    name: 'lucy',
    img: 'https://static.youku.com/user/img/avatar/310/19.jpg',
    status: 'success',
    address: 'No. 189, Grove St, Los Angeles',
    date: '2016-05-02'
  }
]
