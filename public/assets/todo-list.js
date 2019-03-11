async function formSubmit() {
    var inputBox = document.getElementById('input-box');
    var data = { item: inputBox.value };
    // calling the post api
    const response = await fetch('/todo', {
        method: 'POST',
        body: JSON.stringify(data), // string or object
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(() => {
        location.reload();
    })
}
async function deleteItem(event) {
    let item = event.target.innerText;
    const response = await fetch('/todo/' + item, {
        method: 'delete'
    })
    .then(() => {
        location.reload();
    });
}