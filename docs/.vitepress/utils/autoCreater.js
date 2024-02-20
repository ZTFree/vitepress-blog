import fs from 'fs'
import path from 'path'


const ROOT_PATH = path.resolve()
const MD_PATH = path.join(ROOT_PATH,'docs','MD-Pro')
console.log(MD_PATH);

const ignoreArr = ['.git', '备忘录', 'index.md']

// 判断是否显示在侧边栏或导航栏
function judgeIllegal(v) {
    if (ignoreArr.includes(v)) return true
    if (v[0] === '$') return true
}

// 侧边栏单分类对象
function sidebarBranchCreator(dir, dirname, arr = []) {

    const ps = path.join(dirname, dir)

    const stat = fs.statSync(ps)

    let obj = null
    if (stat.isDirectory()) {
        // 文件夹
        const innerDir = fs.readdirSync(ps)
        const iArr = []
        innerDir.forEach(v => {
            if (judgeIllegal(v)) return

            sidebarBranchCreator(path.join(dir, v), dirname, iArr)
        })

        obj = {
            text: path.basename(ps),
            items: iArr,
            collapsed: true
        }

    } else {
        // 文件
        const link = path.basename(dirname) + '/' + dir.replace(/\.md|\.\.\\/g, '').replace(/\\/g, '/')
        // console.log(link);
        obj = {
            text: path.basename(ps, '.md'),
            link
        }
    }
    arr.push(obj)

    return arr
}

// 侧边栏对象
export function sideBarCreator() {

    const basename = path.basename(MD_PATH)
    const obj = {}

    fs.readdirSync(MD_PATH).forEach((v) => {
        if (judgeIllegal(v)) return

        const stat = fs.statSync(path.join(MD_PATH, v))
        if (stat.isDirectory()) {
            const res = sidebarBranchCreator(v, MD_PATH)
            res[0].collapsed = false
            obj[`${basename}/${v}/`] = res
        }
    })

    return obj

}

// 导航栏分类展开栏数组
export function categoryCreator() {
// return [{
//     text: `${ROOT_PATH}`,
//     link: '/'
//   },{
//     text: `${MD_PATH}`,
//     link: '/'
//   }]

    return fs.readdirSync(MD_PATH).reduce((pre, v) => {
        if (judgeIllegal(v)) return pre
        const stat = fs.statSync(path.join(MD_PATH, v))
        if (stat.isDirectory()) {

            const link = '/' + path.join(MD_PATH, v).replace(/\.md|\.\.\\/g, '').replace(/\\/g, '/') + '/'
            pre.push({
                // text: v,
                text: link,
                link
            })

        }
        return pre
    }, [])


}