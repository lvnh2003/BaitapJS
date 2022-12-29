var temp = [];
var meaning = 
{
    hello :'Xin chao',
    bye: 'Tam biet',
    good : 'Tot',
}
menu();
function menu() {
    var option = prompt('Menu: \n == TỪ ĐIỂN ANH VIỆT == \n --1. Nhập dữ liệu\n --2.Xuất dữ liệu\n --3.Dịch từ\n --4.Thêm từ vựng\n --5.Thoát');
    
    try {
        if (isNaN(option)) throw 'Vui lòng nhập đúng lựa chọn';

        translate(parseInt(option));


    } catch (error) {
        console.log(error);
    }
}

function translate(option) {
    switch (option) {
        case 1:
            enter();
            break;
        case 2:
            show(temp);
            break;
        case 3:
            mean(temp[temp.length-1]);
            break;
        case 4:
            add();
            break;
        case 5:
            exit();
            break;
    }
    
}
function enter() {
    var text = prompt('Nhập thông tin: ');
    temp.push(text);
    menu();

}
function show(arr) {
    for (var i=0;i<arr.length; i++) {
        console.log(arr[i]);
    }
    menu();
}
function mean(text)
{   
   console.log( (meaning[text] )? `Tu cua ban vua nhap ${text} co nghia la ${meaning[text]}` : `Khong tim thay` );
    menu();
}
function add()
{
    var text=prompt('Nhập thông tin: ');
    var mean= prompt('Nghĩa của từ vừa nhập: ');
    var newOj={};
    newOj[text]=mean;
    Object.assign(meaning,newOj);
    console.log('Bạn vừa thêm '+text+' vào từ điển');
    
    menu();
}
function exit()
{
    console.log('Cam on ban da su dung dich vu');
}
