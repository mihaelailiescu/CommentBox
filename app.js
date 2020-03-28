var id = 0;
// pentru a genera id-uri, am decis sa folosesc o functie care sa incrementeze un contor 
function generateNewId() {
    id = id + 1;
    return id;
}

const comments = [{
    id: generateNewId(),
    name: 'razvan',
    email: "razvan@gmail.com",
    image: "https://images.app.goo.gl/bcNEye3KAHh3ibCk6",
    msg: 'ce faci?'
}, ]

document.addEventListener("DOMContentLoaded", function(event) {
    displayComments(comments, commentList);
});

const btn = document.querySelector('#commentBtn');
const input = document.querySelector('#commentInput');
const name = document.querySelector('#nameInput');
const commentList = document.querySelector('#commentList');

btn.addEventListener('click', function() {
    comment = {
        id: generateNewId(),
        name: name.value,
        email: "razvan@gmail.com",
        image: "https://images.app.goo.gl/bcNEye3KAHh3ibCk6",
        msg: input.value
    };
    if (validateComment(comment) === true) {
        comments.push(comment);
        deleteChildren(commentList);
        displayComments(comments, commentList)
    }
})

function validateComment(comment) {
    if (comment.name === "" || comment.msg === "") {
        return false;
    }
    return true
}

function deleteChildren(element) {

    var child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

function displayComments(comments, containerNode) {
    function addParagraph(text) {
        const newP = document.createElement("p");
        newP.innerText = text;
        return newP;
    }

    function addTitle(title) {
        const h1 = document.createElement("h1");
        h1.innerText = title;
        return h1;
    }

    function addDeleteBtn(text, commentId) {
        const deleteBtn = document.createElement("button");
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.padding = "7px";
        deleteBtn.style.width = "120px";
        deleteBtn.style.margin = "0px 0px 0px 200px";
        deleteBtn.style.color = "white";
        deleteBtn.style.borderRadius = "8px";
        deleteBtn.style.fontSize = "large";
        deleteBtn.innerHTML = text;
        deleteBtn.addEventListener('click', function() {
            console.log(commentId);
            deleteCommentById(commentId);
            deleteChildren(commentList);
            displayComments(comments, commentList)
        })
        return deleteBtn;

    }

    function createCommentNode(comment) {
        const containerBox = document.createElement('div');
        const title = addTitle(comment.name);
        const p = addParagraph(comment.msg);
        const b = addDeleteBtn("Delete", comment.id);
        containerBox.appendChild(title);
        containerBox.appendChild(p);
        containerBox.appendChild(b);

        return containerBox;
    }

    // parcurgere commentarii
    for (let idx = 0; idx < comments.length; idx++) {
        const comment = comments[idx];
        // creaza prezentarea comentariului in DOM
        const commentNode = createCommentNode(comment);
        // punem in dom comentariul
        containerNode.appendChild(commentNode);
    }
}

function deleteCommentById(commentId) {
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].id === commentId) {
            comments.splice(i, 1);
        }
    }
}