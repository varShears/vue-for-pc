/*
 * @Description:
 * @Version: 2.0
 * @Autor: Ling Long
 * @Date: 2020-01-16 10:02:17
 * @LastEditors  : Ling Long
 * @LastEditTime : 2020-01-19 10:12:02
 */
const sList = [
  {
    key: "/home",
    title: "主页",
    path: "/home"
  },
  {
    key: "/home/category",
    title: "分类",
    children: [
      {
        key: "/home/category/category1",
        title: "分类1",
        children: [
          {
            key: "/home/category/category1/category1.1",
            title: "分类1.1",
            path: "/category/category1/category1.1"
          }
        ]
      }
    ]
  }
]
export default sList
