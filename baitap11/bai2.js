const students = [
    {
        id: 1,
        name: "Dinh",
        toan: 7,
        ly: 8,
        hoa: 8
    },
    {
        id: 2,
        name: "Nam",
        toan: 10,
        ly: 8,
        hoa: 5,
    },
    {
        id: 3,
        name: "Tan",
        toan: 3,
        ly: 4,
        hoa: 5,
    },
    {
        id: 4,
        name: "Hung",
        toan: 9,
        ly: 7,
        hoa: 7,
    },
    {
        id: 5,
        name: "Tri",
        toan: 9,
        ly: 8,
        hoa: 9,
    },
    {
        id: 6,
        name: "Anh",
        toan: 9,
        ly: 10,
        hoa: 9,
    },
    {
        id: 7,
        name: "Binh",
        toan: 3,
        ly: 6,
        hoa: 9,
    }
];

menu();
function menu() {
    var option = prompt('Menu\n 1.Nhập dữ liệu\n 2.Xuất dữ liệu\n 3.Tìm sinh viene\n 4.Lọc ra sinh viên loại giỏi\n 5.Cộng cho mỗi sinh viên 1 điểm toán\n 6.Thêm thuộc tính tổng điểm 3 môn\n 7.Tính tổng điểm của các sinh viên\n 8.Sắp xếp danh sách sinh viên theo tổng điểm tăng dần \n 9.Tính điểm trung bình của các sinh viên\n 10.Xóa sinh viên \n 11.Thoát ');
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
            filterStudent();
            break;
        case 5:
            buffPoint();
            break;
        case 6:
            addAttr();
            break;
        case 7:
            calculate();
            break;
        case 8:
            ASC();
            break;
        case 9:
            average();
        case 10:
            destroy();
            break;
        case 11:
            exit();

    }
}
function enter() {

    var id = students.length + 1;
    var name = prompt('Tên: ');
    var toan = prompt('Nhập điểm Toán: ');
    var ly = prompt('Nhập điểm Lý');
    var hoa = prompt('Nhập điểm Hóa');
    var studentMoi = {
        id: id,
        name: name,
        toan: toan,
        ly: ly,
        hoa: hoa,
    }
    students.push(studentMoi);
    menu();
}
function show() {
    console.log(students);
    menu();
}
function search() {
    var searchId = parseInt(prompt('Nhập id của sinhv viên'));
    var result = students.find(({ id }) => id == searchId);
    if (!result) {
        console.log('Không tìm thấy');
    }
    else {
        console.log(result);
    }
    menu();
}
function filterStudent() {
    var result = students.filter(({ toan, ly, hoa }) => avg(toan, ly, hoa) > 8);

    console.log(result);
    menu();
}
function buffPoint() {
    students.map(function (student) {
        student.toan < 10 ? student.toan += 1 : '';
    }
    );
    menu();
}
function addAttr() {
    students.map(function (student) {
        student.avg = avg(student.toan,student.ly,student.hoa);
        
    });
    menu();
}
function calculate() {
    var value = students.reduce(function (total, student) {
       return total + avg(student.toan,student.ly,student.hoa);
    }, 0);
    console.log('Điểm của tất cả các sinh viên là ' +value);
    menu();
}
function ASC()
{
    console.log(students.sort(function(studentA,studentB){
        return  avg(studentA.toan,studentA.ly,studentA.hoa) - avg(studentB.toan,studentB.ly,studentB.hoa); ;
    }));
    menu();
}
function average()
{
    var value = students.reduce(function (total, student) {
        return total + avg(student.toan,student.ly,student.hoa);
     }, 0);
    console.log('Điểm trung bình của các sinh viến '+value/count(students));
};
function destroy() {
    var searchId = parseInt(prompt('Nhập id của sinhv viên cần xóa'));
    var result = students.find(({ id }) => id == searchId);
    if (!result) {
        console.log('Không tìm thấy');
    }
    else {
        students.splice(searchId - 1, 1);
    }


    menu();
}
function exit() {
    console.log('GoodBye');
}
function avg(toan, ly, hoa) {
    return (toan + ly + hoa) / 3;
}