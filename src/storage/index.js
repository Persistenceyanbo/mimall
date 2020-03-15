/**
 * Storage封装
 */
const STORAGE_KEY = 'mall'
export default {
    // 存储值  module_name表示浏览器中的session_storage里面的值
    setItem (key, value, module_name) {
        if (module_name) {
            // 有sessionStorage的时候直接获取信息，
            let val = this.getItem(module_name)
            val[key] = value
            this.setItem(module_name, val) // 重新写入
        } else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
        }
    },
    // module_name 表示模块名称
    getItem (key, module_name) {
        // this.getStorage()先获取storage里面的值然后在获取里面的值
        if (module_name) {
            // 获取某一个模块下面的属性ueser下面的username
            let val = this.getItem(module_name);
            if (val) return val[key]
        }
        return this.getStorage()[key];
    },
    getStorage() { // 获取sessionStorage的信息
        // 如果开始存在sessionStorage的情况下的话，就从浏览器获取，如果不存在就是一个空的字符串对象
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    },
    clear (key, module_name) {
        let val = this.getStorage();
        if (module_name) {
            // 当模块不存在的时候return
            if (!val[module_name]) return;
            delete val[module_name][key]
        } else {
            delete val[key]
        }
        // 要把整个值写进去 值需要重新写入
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
}