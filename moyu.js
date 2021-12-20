/* 

摸鱼提醒
cron 30 8 * * * 

 *@authot:  Mol
 *@create: 2021-11-24-20/20-20
 
 */

const $ = new Env("摸鱼人的哀歌");
var fishMan = new Date(),
    year = fishMan.getFullYear(),
    month = fishMan.getMonth(),
    day = fishMan.getDate(),
    hour = fishMan.getHours();
var msg = ''

function headInfo() {
    var mae = ''
    if (hour >= 6 && hour < 12) {
        mae = '上午'
    } else if (hour >= 12 && hour < 18) {
        mae = '下午'
    } else if ((hour >= 18 && hour < 24) || hour < 6) {
        mae = '晚上'
    }
    let info = `【摸鱼办】
提醒您：${month + 1}月${day}日${mae}好，摸鱼人！工作再累，一定不要忘记摸鱼哦！
有事没事起身去茶水间， 去厕所， 去廊道走走别老在工位上坐着， 钱是老板的, 但命是自己的! `
    msg += info
}

function weekend() {
    let item = fishMan.getDay()
    let info = ``
    if (item > 0 && item <= 5) {
        item = 6 - item
        info = `\n距离周末还有${item}天\n`
    } else {
        info = `\n好好享受周末吧\n`
    }
    msg += info
}
var startDate = Date.parse(fishMan);

function festival([chinese, fmonth, fday]) {
    let info = ``
    let newfestival = new Date(`${year + 1},${fmonth},${fday}`)
    let endDate = Date.parse(newfestival);
    let days = Math.round((endDate - startDate) / (1 * 24 * 60 * 60 * 1000));
    if (month == fmonth && day == fday) {
        info = `今天就是${chinese}节，好好享受！\n`
    } else {
        info = `距离${chinese}节还有${days}天\n`
    }
    msg += info
}

function lastInfo() {
    let info = `上班是帮老板赚钱，摸鱼是赚老板的钱！最后，祝愿天下所有摸鱼人，都能愉快的渡过每一天…\n​`
    msg += info
    
}

function festivalAll() {
    let festivalList = [
        ['元旦', 1, 1],
        ['春节', 2, 1],
        ['清明', 4, 3],
        ['劳动节', 4, 30],
        ['端午', 6, 3],
        ['中秋', 9, 10],
        ['国庆', 10, 1],
    ]
    const n = festivalList.length;
    for (let i = 0; i < n; i++) {
        festival(festivalList[i])
    }
}
(function main() {
    headInfo()
    weekend()
    festivalAll()
    lastInfo()
    console.log(msg)
})()
