const doiBong = [
    {
        id: 1,
        ten: 'Brazin',
        huanLuyenVien: 'Tite',
        soLanVoDich: 15
    },
    {
        id: 2,
        ten: 'Đức',
        huanLuyenVien: 'Hansi Flick',
        soLanVoDich: 10
    },
    {
        id: 3,
        ten: 'Pháp',
        huanLuyenVien: 'Deschamps',
        soLanVoDich: 12
    }
];
menu();
function menu() {
    var option = prompt('Menu\n 1.Nhập dữ liệu\n 2.Xuất dữ liệu\n 3.Tìm thông tin\n 4.Xóa thông tin đội bóng\n 5.Thoát');
    try {
        if (isNaN(option)) throw 'Vui lòng nhập đúng lựa chọn';

        work(parseInt(option));


    } catch (error) {
        console.log(error);
    }
}
function work(option) {
    switch (option) {
        case 1:
            enter();
            break;
        case 2:
            show();
            break;
        case 3:
            search();
            break;
        case 4:
            destroy();
            break;
        case 5:
            exit();

    }
}
function enter() {

    var id = doiBong.length + 1;
    var ten = prompt('Tên đội bóng: ');
    var huanLuyenVien = prompt('Tên huấn luyện viên: ');
    var soLanVoDich = prompt('Số lần vô địch');
    var doiBongNoi = {
        id: id,
        ten: ten,
        huanLuyenVien: huanLuyenVien,
        soLanVoDich: soLanVoDich
    }
    doiBong.push(doiBongNoi);
    menu();
}
function show() {
    for (var i=0;i<doiBong.length; i++) {
        console.log(doiBong[i]);
    }
    menu();
}
function search() {
    var searchId = parseInt(prompt('Nhập id của đội bóng'));
    var result = doiBong.find(({ id }) => id == searchId);
    if (!result) {
        console.log('Không tìm thấy');
    }
    else {
        console.log(result);
    }
    menu();
}
function destroy() {
    var searchId = parseInt(prompt('Nhập id của đội bóng cần xóa'));
    var result = doiBong.find(({ id }) => id == searchId);
    if (!result) {
        console.log('Không tìm thấy');
    }
    else {
        doiBong.splice(searchId-1, 1);
    }


    menu();
}
function exit() {
    console.log('GoodBye');
}