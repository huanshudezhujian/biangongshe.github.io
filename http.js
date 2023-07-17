function countVisitors() {
    if (typeof(Storage) !== "undefined") {
    if (localStorage.pageviews) {
        localStorage.pageviews = Number(localStorage.pageviews) + 1; // 增加浏览次数
    } else {
        localStorage.pageviews = 1; // 第一次访问
    }
    document.getElementById("visits").innerHTML = "累计浏览：" + localStorage.pageviews;
    } else {
        document.getElementById("visits").innerHTML = "您的浏览器不支持";
    }
}