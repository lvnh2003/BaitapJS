const danhSachQuanBai = [
    {
        id: 1,
        name: 'Ba bích', // Tên quân bài, ví dụ: Năm cơ, Sáu bích...
        exp: 3, //Hệ số quân bài (từ 1 đến 13)
        point: 1 // Điểm của quân bài (từ 1 đến 4)
    },
    {
        id: 2,
        name: 'Năm rô',
        exp: 5,
        point: 3
    },
    {
        id: 3,
        name: 'Bốn cơ',
        exp: 4,
        point: 4
    }
]

menu();
function menu() {

    var option = prompt("Menu \n 1.Nhập 1 quân bài \n 2.Nhập mảng các quân bài \n 3.Sắp xếp các quân bài tăng dần \n 4.Sắp xếp các quần bài giảm dần \n 5.Hiển thị các danh sách quần bài\n 6.Thoát");
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
            input();
            break;
        case 2:
            inputArray();
            break;
        case 3:
            ASC();
            break;
        case 4:
            DES();
            break;
        case 5:
            show();
            break;

        case 6:
            exit();
            break;


        default:
            console.log('Vui lòng chọn đúng option');
            break;
    }
}
function input()
{
    var id = danhSachQuanBai.length + 1;
    var name = prompt('Tên quân bài: ');
    var exp = parseInt(prompt('Hệ số quân bài: '));
    var point = parseInt(prompt('Điểm '));
    var quanBaiMoi = {
        id: id,
        name: name,
        exp: exp,
        point: point
    }
    danhSachQuanBai.push(quanBaiMoi);
    menu();
}
function inputArray()
{
    do {
        var id = danhSachQuanBai.length + 1;
        var name = prompt('Tên quân bài: ');
        var exp = parseInt(prompt('Hệ số quân bài: '));
        var point = parseInt(prompt('Điểm '));
        var quanBaiMoi = {
            id: id,
            name: name,
            exp: exp,
            point: point
        }
        danhSachQuanBai.push(quanBaiMoi);
        var choose= confirm('Bạn có muốn thêm quần bài nữa không? ');
        
    } while (choose);
    menu();
    
}
function ASC()
{
    console.log(danhSachQuanBai.sort(function(quanbaiA,quanbaiB){
        return  quanbaiA.exp- quanbaiB.exp ;
    }));
    menu();
}
function DES()
{
    console.log(danhSachQuanBai.sort(function(quanbaiA,quanbaiB){
        return  quanbaiB.exp - quanbaiA.exp ;
    })); 
    menu();
}
function show() {
    for (var i=0;i<danhSachQuanBai.length; i++) {
        console.log(danhSachQuanBai[i]);
    }
    menu();
}
function exit()
{
    console.log('Goodbye');
}