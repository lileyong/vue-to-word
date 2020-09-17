import Vue from 'vue'

// 将vue转成word
export default function VueToWord({ VueComp, fileName }) {
    const Constructor = Vue.extend(VueComp)
    const instance = new Constructor().$mount()

    createWord(instance.$el.innerHTML, fileName)
}

// 生成word文件
export function createWord(content, filename) {
    const blob = new Blob([content], {
        type: 'application/msword;charset=utf-8',
    })

    const url = URL.createObjectURL(blob)

    download(url, filename)
}

// 下载文件
export function download(url, filename) {
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
}
