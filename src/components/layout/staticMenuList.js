export const staticMenuList = [
  {
    icon: "Odometer",
    index: "/dashboard",
    title: "仪表盘",
    id: 9901,
    subs: [
      {
        index: "/workplace",
        title: "工作台",
        parentId: 9901,
        id: 990101
      },
      {
        index: "/analysis",
        title: "分析页",
        parentId: 9901,
        id: 990102
      }
    ]
  },
  {
    icon: "Odometer",
    index: "/about",
    title: "关于",
    id: 9902
  }
]

export const dynamicMenuList = [
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
        title: "权限管理",
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
