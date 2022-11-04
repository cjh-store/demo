export default {
  /**
   * 描述  token操作
   * @param {String} filename
   */
  // todo:到时候修改为安卓获取
  // getToken,

  /**
   * 描述  获取文件后缀名
   * @param {String} filename
   */
  getExt(filename: string) {
    if (typeof filename === 'string') {
      return filename.split('.').pop()?.toLowerCase()
    } else {
      throw new Error('filename must be a string type')
    }
  },

  /**
   * @description 将url请求参数转为json格式
   * @param url
   */
  paramObj(url: string) {
    const search = url.split('?')[1]
    if (!search) {
      return {}
    }
    return JSON.parse(
      '{"' +
        decodeURIComponent(search)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"')
          .replace(/\+/g, ' ') +
        '"}',
    )
  },

  /**
   * @description 获取随机id
   * @param length
   * @returns {string}
   */
  uuid(length = 32) {
    const num = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let str = ''
    for (let i = 0; i < length; i++) {
      str += num.charAt(Math.floor(Math.random() * num.length))
    }
    return str
  },

  /**
   * 判断是否为存在
   */
  isTrue(a: any) {
    if (a === 0) return false //检验空字符串
    if (a === '') return false //检验空字符串
    if (a === 'null') return false //检验字符串类型的null
    if (a === 'undefined') return false //检验字符串类型的 undefined
    if (!a && a !== 0 && a !== '') return false //检验 undefined 和 null
    if (Array?.prototype?.isPrototypeOf(a) && a.length === 0) return false //检验空数组
    if (Object?.prototype?.isPrototypeOf(a) && Object.keys(a).length === 0) {
      return false
    } //检验空对象
    return true
  },

  /**
   * 获取静态资源地址
   */
  getFileUrl(url) {
    return new URL(`../assets/img/${url}`, import.meta.url).href
  },
}
