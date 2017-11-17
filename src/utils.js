/**
 * 获取URL参数
 * @param  {string} param 截取字段名
 * @return {string}       value
 */
export function getParameter(param) {
  var query = window.location.search;
  var iLen = param.length;
  var iStart = query.indexOf(param);
  if (iStart == -1)
    return "";
  iStart += iLen + 1;
  var iEnd = query.indexOf("&", iStart);
  if (iEnd == -1)
    return query.substring(iStart);
  return query.substring(iStart, iEnd);
}

/**
 * 判断是否为微信
 * @return {Boolean} [true: 微信环境, false: 非微信]
 */
export function isWeixin() {
  let ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  } else {
    return false;
  }
}

/**
 * 判断是否为qq
 * @return {Boolean} [true: qq环境, false: 非qq]
 */
export function isQQ() {
  let ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/QQ/i) == "qq") {
    return true;
  } else {
    return false;
  }
}

/**
 * 判断环境是pc端还是mobile端
 */
export function isMobile() {
  let userAgentInfo = navigator.userAgent;
  let Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"
  ];
  let flag = false;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = true;
      break;
    }
  }
  return flag;
}

/**
 * 超过一千用k来表示
 * @param  {Number} num  点赞数
 * @return {String}      处理后的点赞数
 */
export function processNumber(num) {
  if (num >= 1000) {
    var numberThousand = Math.round(Math.round(num / 10) / 10) / 10;
    return numberThousand + 'k';
  } else {
    return num;
  }
}
