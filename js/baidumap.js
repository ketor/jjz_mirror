var map = new BMap.Map("jjz-map");
var point = new BMap.Point(116.400244, 39.92556);
map.centerAndZoom(point, 12);

map.addControl(new BMap.NavigationControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));// 添加平移缩放控件
map.addControl(new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));// 添加比例尺控件
map.addControl(new BMap.MapTypeControl());//添加地图类型控件
map.enableScrollWheelZoom();//启用滚轮放大缩小
map.disable3DBuilding();// 禁用地图的3D楼块展现功能

var ctrl = new BMapLib.TrafficControl();
map.addControl(ctrl);
ctrl.setAnchor(BMAP_ANCHOR_TOP_LEFT);
// ctrl.showTraffic() // 显示实时路况，暂不默认开启

// 添加定位控件
var geolocationControl = new BMap.GeolocationControl();
map.addControl(geolocationControl);

geolocationControl.addEventListener("locationSuccess", function (e) {
    // 定位成功事件
    var address = '';
    address += e.addressComponent.province;
    address += e.addressComponent.city;
    address += e.addressComponent.district;
    address += e.addressComponent.street;
    address += e.addressComponent.streetNumber;
    console.log("当前定位地址为：" + address);
    var point1 = new BMap.Point(e.point.lng, e.point.lat);// 创建点坐标(经度,纬度)
    var mk = new BMap.Marker(point1);// 创建标注
    map.addOverlay(mk);// 将标注添加到地图中
    mk.enableDragging();//可拖拽 disableDragging（不可拖拽）
    mk.setAnimation(BMAP_ANIMATION_BOUNCE);//跳动的动画
    map.panTo(point1);//移动
});

geolocationControl.addEventListener("locationError", function (e) {
    // 定位失败事件
    alert(e.message);
});

//====二环内外地车限行路段 start====
//二环主路
var polyline = new BMap.Polyline([new BMap.Point(116.385871, 39.955059), new BMap.Point(116.436734, 39.95575), new BMap.Point(116.438925, 39.955197), new BMap.Point(116.440264, 39.953427), new BMap.Point(116.441548, 39.920012), new BMap.Point(116.442141, 39.916927), new BMap.Point(116.44277, 39.907588), new BMap.Point(116.444782, 39.905623), new BMap.Point(116.450603, 39.903714), new BMap.Point(116.452813, 39.884186), new BMap.Point(116.450549, 39.877763), new BMap.Point(116.447926, 39.876296), new BMap.Point(116.424391, 39.877293), new BMap.Point(116.421265, 39.878539), new BMap.Point(116.390291, 39.877348), new BMap.Point(116.373223, 39.875549), new BMap.Point(116.365103, 39.874164), new BMap.Point(116.357198, 39.874386), new BMap.Point(116.355329, 39.876241), new BMap.Point(116.355976, 39.881307), new BMap.Point(116.355221, 39.902344), new BMap.Point(116.356946, 39.903838), new BMap.Point(116.362551, 39.904641), new BMap.Point(116.36336, 39.905969), new BMap.Point(116.363216, 39.917923), new BMap.Point(116.362048, 39.948297), new BMap.Point(116.364258, 39.950164), new BMap.Point(116.378865, 39.954658), new BMap.Point(116.385898, 39.955073)], {
        strokeColor: "red",
        strokeWeight: 3,
        strokeOpacity: 0.0
});
map.addOverlay(polyline); //增加折线

//长安街
var polyline = new BMap.Polyline([new BMap.Point(116.468336, 39.914022), new BMap.Point(116.441495, 39.914506), new BMap.Point(116.424382, 39.914402), new BMap.Point(116.398035, 39.913752), new BMap.Point(116.363019, 39.912929), new BMap.Point(116.316801, 39.91351)], {
        strokeColor: "red",
        strokeWeight: 5,
        strokeOpacity: 0.0
});
map.addOverlay(polyline); //增加折线

//北池子大街、南池子大街
var polyline = new BMap.Polyline([new BMap.Point(116.409717, 39.914188), new BMap.Point(116.408909, 39.929796)], {
        strokeColor: "red",
        strokeWeight: 5,
        strokeOpacity: 0.0
});
map.addOverlay(polyline); //增加折线

//正义路
var polyline = new BMap.Polyline([new BMap.Point(116.413054, 39.914184), new BMap.Point(116.413198, 39.907121)], {
        strokeColor: "red",
        strokeWeight: 5,
        strokeOpacity: 0.0
});
map.addOverlay(polyline); //增加折线

//台基厂大街
var polyline = new BMap.Polyline([new BMap.Point(116.41786, 39.914267), new BMap.Point(116.418157, 39.907253)], {
        strokeColor: "red",
        strokeWeight: 5,
        strokeOpacity: 0.0
});
map.addOverlay(polyline); //增加折线

//广场东侧路
var polyline = new BMap.Polyline([new BMap.Point(116.405746, 39.914039), new BMap.Point(116.406097, 39.906671)], {
        strokeColor: "red",
        strokeWeight: 5,
        strokeOpacity: 0.0
});
map.addOverlay(polyline); //增加折线

//广场西侧路
var polyline = new BMap.Polyline([new BMap.Point(116.402504, 39.906464), new BMap.Point(116.402072, 39.913894)], {
        strokeColor: "red",
        strokeWeight: 5,
        strokeOpacity: 0.0
});
map.addOverlay(polyline); //增加折线

//20180101 人民大会堂西路
var polyline = new BMap.Polyline([new BMap.Point(116.398066, 39.913756), new BMap.Point(116.398178, 39.909738), new BMap.Point(116.399404, 39.90924),new BMap.Point(116.399817, 39.909182), new BMap.Point(116.40236, 39.909248)], {
        strokeColor: "red",
        strokeWeight: 5,
        strokeOpacity: 0.0
});
map.addOverlay(polyline); //增加折线

//20180101 增加西什库大街
var polyline = new BMap.Polyline([new BMap.Point(116.386446, 39.938977), new BMap.Point(116.386051, 39.937207), new BMap.Point(116.386662, 39.928825), new BMap.Point(116.385314, 39.928783), new BMap.Point(116.385368, 39.930484), new BMap.Point(116.386464, 39.930609)], {
        strokeColor: "red",
        strokeWeight: 5,
        strokeOpacity: 0.0
});
map.addOverlay(polyline); //增加折线

//20180101 增加西安门内大街, 文津街
var polyline = new BMap.Polyline([new BMap.Point(116.38014, 39.928534), new BMap.Point(116.390075, 39.928908), new BMap.Point(116.390848, 39.928755), new BMap.Point(116.392752, 39.928783), new BMap.Point(116.394728, 39.928769), new BMap.Point(116.395663, 39.928576), new BMap.Point(116.397298, 39.928589)], {
        strokeColor: "red",
        strokeWeight: 5,
        strokeOpacity: 0.0
});
map.addOverlay(polyline); //增加折线

//20180101 增加府右街
var polyline = new BMap.Polyline([new BMap.Point(116.388171, 39.928825), new BMap.Point(116.38835, 39.924647), new BMap.Point(116.388063, 39.922129), new BMap.Point(116.388243, 39.917315), new BMap.Point(116.389258, 39.913535)], {
        strokeColor: "red",
        strokeWeight: 5,
        strokeOpacity: 0.0
});
map.addOverlay(polyline); //增加折线

//20180101 增加北长街、南长街
var polyline = new BMap.Polyline([new BMap.Point(116.397298, 39.928589), new BMap.Point(116.397693, 39.921244), new BMap.Point(116.398304, 39.914043), new BMap.Point(116.39816, 39.913839)], {
        strokeColor: "red",
        strokeWeight: 5,
        strokeOpacity: 0.0
});
map.addOverlay(polyline); //增加折线

//20180101 增加景山前街、五四大街
var polyline = new BMap.Polyline([new BMap.Point(116.397298, 39.928589), new BMap.Point(116.39816, 39.929426), new BMap.Point(116.407898, 39.929869), new BMap.Point(116.408993, 39.929838), new BMap.Point(116.410269, 39.930619), new BMap.Point(116.411545, 39.930689), new BMap.Point(116.413162, 39.930654)], {
        strokeColor: "red",
        strokeWeight: 5,
        strokeOpacity: 0.0
});
map.addOverlay(polyline); //增加折线

//20180101 增加北沿河大街、南沿河大街
var polyline = new BMap.Polyline([new BMap.Point(116.412695, 39.930633), new BMap.Point(116.412182, 39.939748), new BMap.Point(116.412686, 39.930619), new BMap.Point(116.41318, 39.919327), new BMap.Point(116.413072, 39.914291)], {
        strokeColor: "red",
        strokeWeight: 5,
        strokeOpacity: 0.0
});
map.addOverlay(polyline); //增加折线

//20180101 增加地安门内大街
var polyline = new BMap.Polyline([new BMap.Point(116.402633, 39.939731), new BMap.Point(116.402741, 39.938597), new BMap.Point(116.402912, 39.934783)], {
        strokeColor: "red",
        strokeWeight: 5,
        strokeOpacity: 0.0
});
map.addOverlay(polyline); //增加折线

//20180101 增加景山后街、景山西街、景山东街
var polyline = new BMap.Polyline([new BMap.Point(116.400145, 39.929534), new BMap.Point(116.39993, 39.934625), new BMap.Point(116.400442, 39.934733), new BMap.Point(116.404641, 39.934788), new BMap.Point(116.405706, 39.934726), new BMap.Point(116.405836, 39.934238), new BMap.Point(116.405885, 39.932139), new BMap.Point(116.405998, 39.929802)], {
        strokeColor: "red",
        strokeWeight: 5,
        strokeOpacity: 0.0
});
map.addOverlay(polyline); //增加折线
//====二环内外地车限行路段 end====

// 添加点击事件侦听
function addClickHandler(marker, title, content) {
        marker.addEventListener("click",
        function(e) {
                displayInfo(title, content, e)
        });
}
if (typeof(points) != 'undefined') {
        // 在地图中输出坐标点
        for (var i = 0,
        n = points.length; i < n; i++) {
                var point = new BMap.Point(points[i].pointx, points[i].pointy);
                addMarker(point, points[i].pathname);
        }
}
// 添加覆盖物
function addMarker(point, title, content) {
        var marker = new BMap.Marker(point);
        var label = new BMap.Label(title, {
                offset: new BMap.Size(20, -10)
        });
        label.setStyle({
                display: "none"
        });
        if (points[i].biaozhu == "1") {
                marker = new BMap.Marker(point, {
                        icon: new BMap.Icon(blue_icon, new BMap.Size(20, 25)),
                        offset: new BMap.Size(0, -10)
                }); //创建对象
        } else {
                marker = new BMap.Marker(point, {
                        icon: new BMap.Icon(red_icon, new BMap.Size(20, 25)),
                        offset: new BMap.Size(0, -10)
                });
        }
        marker.setLabel(label);
        marker.addEventListener("mouseover",
        function() {
                label.setStyle({ //给label设置样式，任意的CSS都是可以的
                        display: "block"
                });
        });
        marker.addEventListener("mouseout",
        function() {
                label.setStyle({ //给label设置样式，任意的CSS都是可以的
                        display: "none"
                });
        });
        map.addOverlay(marker);
        var opts = {
                title: points[i].title
        };
        var infoWindow = new BMap.InfoWindow(points[i].pathname + '<br /><a href="' + points[i].id + '"\" target=\"_blank\"" style="font-size:12px; color:#FFFFFF; background:#FF0000; padding:3px;">查看街景</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', opts); // 创建信息窗口对象，引号里可以书写任意的html语句。
        marker.addEventListener("click",
        function() {
                map.openInfoWindow(infoWindow, point); //开启信息窗口
        });
}

// 显示坐标
function showPoint(e)
{
        console.log(e.point.lng + ", " + e.point.lat);
}
map.addEventListener("click", showPoint);
