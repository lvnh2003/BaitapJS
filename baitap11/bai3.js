const students = [
    {
        id: 1,
        name: 'Nguyen Van A',
        classId: 1
    },
    {
        id: 2,
        name: 'Nguyen Van B',
        classId: 2
    },
    {
        id: 3,
        name: 'Nguyen Van C',
        classId: 3
    },
    {
        id: 4,
        name: 'Nguyen Van D',
        classId: 1
    },
    {
        id: 5,
        name: 'Nguyen Van E',
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
        name: 'HoaTP'
    },
    {
        id: 4,
        name: 'XDDD'
    }
]

function getClass(classId) {
    return classList.filter(function (classes) {
        return classId.includes(classes.id);
    })
}

const classId = students.map(function (student) {
    return student.classId;
})

const classById = getClass(classId);
// console.log(classByIds);

const ITStudents = [];
students.forEach(function (student) {
    const classInfo = classById.find(function (classes) {
        return classes.id === student.classId;
    })
    if (classInfo.id === 1) {
        const it = {
            id: student.id,
            studentName: student.name,
            className: classInfo.name
        }
        ITStudents.push(it);
    }
})

console.table(ITStudents);