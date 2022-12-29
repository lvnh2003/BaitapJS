var students = [
    {
        id: 1,
        name: "Dinh",
        toan: 5,
        ly: 6,
        hoa: 7
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
function avg(toan, ly, hoa) {
    return (toan + ly + hoa) / 3;
}
//1. Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không? (biết điểm trung bình là 5)
var check1 = students.every(function (student) {
    return avg(student['toan'], student['ly'], student['hoa']) > 5;
});
console.log('Score of all of student above average is ' + check1)
//2. Kiểm tra xem có sinh viên nào xếp loại giỏi không? (có các môn đều 8 điểm trở lên)
var check2 = students.some(function (student) {
    return avg(student['toan'], student['ly'], student['hoa']) > 8;
});
console.log('Has good student is ' + check2);
//3. Lọc ra các sinh viên xếp loại giỏi và in ra thông tin gồm Tên, Toán, Lý, Hóa
students.forEach(function (student) {
    if (avg(student['toan'], student['ly'], student['hoa']) > 8) {
        console.log(student['name'], student['toan'], student['ly'], student['hoa']);
    }
});
//4. Tìm 1 sinh viên xếp loại giỏi
var check4 = students.find(function (student) {
    return avg(student['toan'], student['ly'], student['hoa']) > 8;
})
console.log(check4);
//5. Cộng cho mỗi sinh viên 1 điểm toán
var newArray = students.map(function (student) {
    return {
        id: student.id,
        name: student.name,
        toan: student.toan + 1,
        ly: student.ly,
        hoa: student.hoa + 1
    };
})
console.log(newArray);
//6. Tính tổng điểm toán của các sinh viên, và tính điểm toán trung bình của các sinh viên
var totalMath = 0, count = 0;
students.forEach(function (student) {
    totalMath += student['toan'];
    count++;
});
console.log('Total mark Math of all student is ' + totalMath);
console.log('Average mark Math of all student is ' + totalMath / count);