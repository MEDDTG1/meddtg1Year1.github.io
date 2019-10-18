

const Message = (e) => {
    const Name = document.getElementById('Name').value

    window.alert(`Thank you ${Name} for your email`)
}

document.getElementById('SubmitButton').addEventListener('click', Message)