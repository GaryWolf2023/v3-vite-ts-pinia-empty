// 这是一个存放方法的文件
// 1. 生成随机数，参数为最小值和最大值，返回值为一个随机数
export function randomNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// 时间转化方法
export function formatTime(timestamp : any, format: string) {
    var format_Arr = ['Y', 'M', 'D', 'h', 'm', 's'];

    timestamp = timestamp.toString().length === 13 ? Number(timestamp) : timestamp*1000;
    var data = new Date(timestamp);
    var Y = zerofill(data.getFullYear()),
        M = zerofill(data.getMonth()+1),
        D = zerofill(data.getDate()),
        h = zerofill(data.getHours()),
        m = zerofill(data.getMinutes()),
        s = zerofill(data.getMilliseconds());

    var time_Arr = [Y, M, D, h, m, s];

    time_Arr.forEach(function (value, index) {
        format = format.replace(format_Arr[index], value);
    });

    return format;

    function zerofill (time: number) {
        var tiem_str = time.toString();
        return tiem_str[1] ? tiem_str : '0' + tiem_str;
    }
}

// 递归遍历数组，返回一个一维数组
export function getTreeList(data: any) {
    let arr: object[] = []
    data.forEach((item: any) => {
        arr.push(item)
        if (item.children) {
            getTreeList(item.children)
        }
    })
    return arr
}

interface TreeList {
    children: TreeList[]
}
// 遍历business列表专用
export function getTreeList2(data: TreeList[]) {
    let arr = [] as TreeList[]
    data.forEach((it) => {
        if (it.children && it.children.length>0) {
            getTreeList2(it.children)
        } else {
            arr.push(it)
        }
    })
    return arr
}