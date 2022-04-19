export const AdminUser = {
  userId: 1,
  token: 'admin',
  menuName: ['role-list', 'permission', 'basic-form', 'advance-form', 'basic-list', 'card-list', 'base-table'],
  menuList: [
    {
      icon: "Odometer",
      index: "/dashboard",
      title: "仪表盘",
      subs: [
        {
          index: "/workplace",
          title: "工作台"
        },
        {
          index: "/analysis",
          title: "分析页"
        }
      ]
    },
    {
      icon: "SetUp",
      index: "/system",
      title: "系统管理",
      subs: [
        {
          index: "/role-list",
          title: "角色管理"
        },
        {
          index: "/permission",
          title: "权限管理"
        }
      ]
    },
    {
      icon: "Edit",
      index: "/forms",
      title: "表单页",
      subs: [
        {
          index: "/basic-form",
          title: "基础表单"
        },
        {
          index: "/advance-form",
          title: "进阶表单"
        }
      ]
    },
    {
      icon: "Grid",
      index: "/list",
      title: "列表页",
      subs: [
        {
          index: "/basic-list",
          title: "标准列表"
        },
        {
          index: "/card-list",
          title: "卡片列表"
        },
        {
          index: "/table",
          title: "表格",
          subs: [
            {
              index: "/base-table",
              title: "基础表格"
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
  menuList: [
    {
      icon: "Odometer",
      index: "/dashboard",
      title: "仪表盘",
      subs: [
        {
          index: "/workplace",
          title: "工作台"
        },
        {
          index: "/analysis",
          title: "分析页"
        }
      ]
    },
    {
      icon: "Edit",
      index: "/forms",
      title: "表单页",
      subs: [
        {
          index: "/basic-form",
          title: "基础表单"
        },
        {
          index: "/advance-form",
          title: "进阶表单"
        }
      ]
    },
    {
      icon: "Grid",
      index: "/list",
      title: "列表页",
      subs: [
        {
          index: "/basic-list",
          title: "标准列表"
        },
        {
          index: "/card-list",
          title: "卡片列表"
        },
        {
          index: "/table",
          title: "表格",
          subs: [
            {
              index: "/base-table",
              title: "基础表格"
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
  menuList: [
    {
      icon: "Odometer",
      index: "/dashboard",
      title: "仪表盘",
      subs: [
        {
          index: "/workplace",
          title: "工作台"
        },
        {
          index: "/analysis",
          title: "分析页"
        }
      ]
    },
    {
      icon: "Grid",
      index: "/list",
      title: "列表页",
      subs: [
        {
          index: "/basic-list",
          title: "标准列表"
        },
        {
          index: "/card-list",
          title: "卡片列表"
        },
        {
          index: "/table",
          title: "表格",
          subs: [
            {
              index: "/base-table",
              title: "基础表格"
            }
          ]
        }
      ]
    }
  ]
}
