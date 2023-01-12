const students = [
    {
        id: 1,
        name: "Dinh",

    },
    {
        id: 2,
        name: "Nam",

    },
    {
        id: 3,
        name: "Tan",

    },
    {
        id: 4,
        name: "Hung",

    },
    {
        id: 5,
        name: "Tri",

    },
    {
        id: 6,
        name: "Anh",

    },
    {
        id: 7,
        name: "Binh",

    }
];


reset();
function reset()
{   
    var content='';
    var tableElemnet = document.getElementById('table').getElementsByTagName('tbody')[0];
    students.forEach(student => {
        
        content = content+ `    
        <tr id="student-${student.id}"> 
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td> <button onclick="editStudent(${student.id})" class="btn btn-primary"> Sửa </button> </td>
            <td><button onclick="deleteStudent(${student.id})" class="btn btn-danger"> Xóa</button>  </td>
        </tr>
    `;
    
    });
    tableElemnet.innerHTML=content;
}


function editStudent(id) {
    var student = students.find(function (st) {
        return st.id === id;
    });
    var name = document.querySelector('input[name="name"]');
    
    name.value=student.name;
    
    var accept= document.getElementById('update');
    accept.style.visibility="visible";
    accept.onclick=function()
    {
        
        for (var i in students) {
            if (students[i].id == id) {
                students[i].name = name.value;
                break;
            }
        }
        
        reset();
        name.value="";
        accept.style.visibility="hidden";
    }
    
    
}

function deleteStudent(id) {
   
    var option = confirm('Bạn có chắc muốn xóa sinh viên này không');
    if (option) {
        var student= students.findIndex((student) => student.id===id);
        students.splice(student,1);
        reset();
    }
}
function add() {
    var nameElement = document.querySelector('input[name="name"]');
    var name= nameElement.value;

    var id = students.length + 1;
   
    var newStudent = {
        id: id,
        name: name
    }
    students.push(newStudent);

    reset();
    nameElement.value="";
}


