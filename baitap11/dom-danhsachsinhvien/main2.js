const students = [
    {
        id: 1,
        name: 'Nguyen Van Teo',
        classId: 1
    },
    {
        id: 2,
        name: 'Nguyen Van Ti',
        classId: 2
    },
    {
        id: 3,
        name: 'Tran Van Tun',
        classId: 3
    },
    {
        id: 4,
        name: 'Nguyen Thi Heo',
        classId: 1
    },
    {
        id: 5,
        name: 'Le Thi Be',
        classId: 1
    }
]

const classList = [
    {
        id: 1,
        name: "CNTT"
    },
    {
        id: 2,
        name: 'DTVT'
    },
    {
        id: 3,
        name: 'THXD'
    },
    {
        id: 4,
        name: 'XDDD'
    }
]
const stName = document.querySelector('input[name="name"]');
const classNameSelect = document.querySelector('select[name="class"]');
const btnAdd = document.querySelector('input[value=Thêm]');
const btnEdit = document.querySelector('#acceptEdit');


function getClassByIds(classIds) {
    return classList.filter(function (el) {
        return classIds.includes(el.id);
    })
}

function getClassNameById(id) {
    return classList.find(function (el) {
        return el.id === Number(id);
    }).name;
}

const classIds = students.map(function (student) {
    return student.classId;
})

const classByIds = getClassByIds(classIds);
// console.log(classByIds);

const listStudents = [];
students.forEach(function (student) {
    const classInfo = classByIds.find(function (el) {
        return el.id === student.classId;
    })
    const it = {
        id: student.id,
        studentName: student.name,
        className: classInfo.name
    }
    listStudents.push(it);
})

const tbElement = document.querySelector('#tbl');

// Tiêu đề
const tr1Element = document.createElement('tr');

const htmlTitle = `
    <th>ID</th>
    <th>Tên sinh viên</th>
    <th>Lớp</th>
    <th>Chức năng</th>
`;

tr1Element.innerHTML = htmlTitle;
tbElement.appendChild(tr1Element);

// Nội dung
listStudents.forEach(function (student) {
    const tr2Element = document.createElement('tr');
    tr2Element.setAttribute('id', 'student-' + student.id)
    const htmlContent = `
        <td>${student.id}</td>
        <td>${student.studentName}</td>
        <td>${student.className}</td>
        <td>
        <button onclick="edit(${student.id})">Sửa</button>
        <button onclick="destroy(${student.id})">Xóa</button>
        </td>
    `;

    tr2Element.innerHTML = htmlContent;

    tbElement.appendChild(tr2Element);

})

const className = document.querySelector('#class');

var htmlOptions = `<option value=''>-- Chọn lớp --</option>`;
classList.forEach(function (className) {
    htmlOptions += `
        <option value='${className.id}'>${className.name}</option>
    `;
})

className.innerHTML = htmlOptions;

const inputForm = document.forms.myform;



inputForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var check = true;
    if (validation(stName) || validation(classNameSelect)) { check = false }


    if (check) {
        if (e.submitter.defaultValue == 'Thêm') {
            const newSt = {
                id: students[students.length - 1].id + 1,
                name: stName.value,
                classId: classNameSelect.value
            }

            students.push(newSt);
            
            stName.value = '';
            classNameSelect.value = '';
            const tr3Element = document.createElement('tr');
            tr3Element.setAttribute('id', 'student-' + newSt.id)
            const htmls = `
                <td>${newSt.id}</td>
                <td>${newSt.name}</td>
                <td>${getClassNameById(newSt.classId)}</td>
                <td>
                <button onclick="edit(${newSt.id})">Sửa</button>
                <button onclick="destroy(${newSt.id})">Xóa</button>
                </td>
            `;

            tr3Element.innerHTML = htmls;

            tbElement.appendChild(tr3Element);

        }
        else {
            var id = btnEdit.value;

            students.map(student => student.id == id ? [student.name = stName.value, student.classId = classNameSelect.value] : student);
            var name = document.getElementById('student-' + id).getElementsByTagName('td')[1];
            name.innerHTML = stName.value;
            var classNameTag = document.getElementById('student-' + id).getElementsByTagName('td')[2];
            classNameTag.innerHTML = getClassNameById(classNameSelect.value);
            clearForm()
        }
    }
})




function edit(id) {
    var student = students.find((student) => { return student.id === id });
    console.log(student);
    stName.value = student.name;

    classNameSelect.value = student.classId;
    btnAdd.style.display = "none";
    btnEdit.style.display = "block";
    btnEdit.setAttribute('value', id);
}



function destroy(id) {
    if (confirm('Xác nhận xóa')) {
        var idx = students.findIndex((student) => { return student.id === id });
        students.splice(idx, 1);
        document.getElementById('student-' + id).remove();
    }
}




function validation(input) {
    if (input.value === '') {
        input.parentElement.querySelector('.message')
            .setAttribute('style', 'display: block; color: red;');
        return true;
    } else {
        input.parentElement.querySelector('.message')
            .setAttribute('style', 'display: none;');
        return false;
    }
}



stName.onblur = function () {
    if (this.value === '') {
        document.querySelector('.message').setAttribute('style', 'display: block;color:red');
    } else {
        document.querySelector('.message').setAttribute('style', 'display: none ');
    }
}



classNameSelect.onblur = function () {
    if (this.value === '') {
        document.querySelector('.message').setAttribute('style', 'display: block;color: red; ');
    } else {
        document.querySelector('.message').setAttribute('style', 'display: none ');
    }
}
var add_btn= document.getElementById('add');
add_btn.onclick=function()
{
    btnAdd.style.display = "block";
    btnEdit.style.display = "none";
    clearForm()
}
function clearForm()
{
    stName.value=''
    classNameSelect.value=''
}