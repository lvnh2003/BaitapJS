const listHoa = [
    {
        id: 1,
        tenHoa: 'Hoa Phong Lan',
        loaiHoa: 'Khai trương',
        hinhAnh: 'images/tmp/hoa1.jpg'
    },
    {
        id: 2,
        tenHoa: 'Hoa tỷ muội',
        loaiHoa: 'Khai trương2',
        hinhAnh: 'images/tmp/hoa2.jpg'
    },
    {
        id: 3,
        tenHoa: 'Hoa Violet',
        loaiHoa: 'Hoa kỷ niệm',
        hinhAnh: 'images/tmp/hoa3.jpg'
    },
    {
        id: 4,
        tenHoa: 'Hoa thủy tiên',
        loaiHoa: 'Hoa tình yêu',
        hinhAnh: 'images/tmp/hoa4.jpg'
    },
    {
        id: 5,
        tenHoa: 'Hoa cẩm chướng',
        loaiHoa: 'Hoa hạnh phúc',
        hinhAnh: 'images/tmp/hoa5.jpg'
    }
]
var table = document.getElementById('tbl');


render();
function render() {
    var content = `
    <tr> 
        <th> ID </th>
        <th> Tên hoa </th>
        <th> Loại hoa </th>
        <th> Hình ảnh </th>
        <th> Chức năng </th>
    </tr>`;
    listHoa.forEach((hoa) => {
        content += `
            <tr id="fl-${hoa.id}">
                <td> ${hoa.id} </td>
                <td> ${hoa.tenHoa} </td>
                <td> ${hoa.loaiHoa} </td>
                <td> <img src="${hoa.hinhAnh} " > </td>
                <td> <a id="edit" href="#" onclick="edit(${hoa.id})">  Sửa 
                <img src="./images/pencil.gif">  </a>  <a href="#"  onclick="destroy(${hoa.id})">  Xóa 
                <img src="./images/bin.gif"> </a>  </td>
            </tr>    
        `
    })
    table.innerHTML = content;
}

var form = document.getElementById('form');
var accept = document.getElementById('update');
var editBtn = document.getElementById('edit');
var nameFl = document.querySelector('input[name=tenHoa]');
var type = document.querySelector('input[name=loaiHoa]');
document.getElementById('add').onclick = function () {
    show();
    accept.remove();


}
document.querySelector('#acceptadd').onclick = function () {
    validation(nameFl);
    validation(type);
    var path = document.querySelector('input[name=hinhAnh]');
    var check = true;
    if (validation(nameFl)) {
        check = false;
    }
    if (validation(type)) {
        check = false;
    }
    if (check) {
        var newFl =
        {
            id: listHoa[listHoa.length - 1].id + 1,
            tenHoa: nameFl.value,
            loaiHoa: type.value,
            hinhAnh: path.value
        }
        listHoa.push(newFl);
        clear();
        render();
    }


}
function show() {
    form.style.display = "block";

    form.appendChild(accept);
}
function clear() {
    nameFl.value = "";
    type.value = "";
}
function edit(id) {

    show();
    var hoaSearch = listHoa.find((hoa) => { return hoa.id == id });
    nameFl.value = hoaSearch.tenHoa;
    type.value = hoaSearch.loaiHoa;

    accept.onclick = function () {
        var check = true;
        if (validation(nameFl)) {
            check = false;
        }
        if (validation(type)) {
            check = false;
        }
        if (check) {
            listHoa.map(hoa => hoa.id == id ? [hoa.tenHoa = nameFl.value, hoa.loaiHoa = type.value] : hoa);
            
            form.style.display = 'none';
            render();
        }
    }

}
function destroy(id) {

    if (confirm('Xác nhận xóa')) {
        var idx = listHoa.findIndex((hoa) => { return hoa.id === id });
        listHoa.splice(idx, 1);
        document.getElementById('fl-' + id).remove();
    }
}
nameFl.onblur = function () {
    if (this.value === '') {
        this.parentElement.querySelector('.message')
            .setAttribute('style', 'display: block; color: red; ');
    } else {
        this.parentElement.querySelector('.message')
            .setAttribute('style', 'display: none;');
    }
}

type.onblur = function () {
    if (this.value === '') {
        this.parentElement.querySelector('.message')
            .setAttribute('style', 'display: block; color: red; ');
    } else {
        this.parentElement.querySelector('.message')
            .setAttribute('style', 'display: none;');
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