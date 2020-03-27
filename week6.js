const comments = [{
    id: '1',
    name: 'razvan',
    msg: 'ce faci2?'
}, ]

const btn = document.querySelector('#commentBtn');
const input = document.querySelector('#commentInput');
const coomentList = document.querySelector('#commentList');
btn.addEventListener('click', function() {
    comments.push({
        name: 'Alex',
        msg: input.value
    });
    displayComments(comments, document.body)
})


displayComments(comments, document.body)



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



    function createCommentNode(comment) {
        const containerBox = document.createElement('div');

        const title = addTitle(comment.name);
        const p = addParagraph(comment.msg);
        containerBox.appendChild(title);
        containerBox.appendChild(p);

        return containerBox;
    }

    // parcurgere commentarii
    for (let idx = 0; idx < comments.length; idx++) {
        const comment = comments[idx];
        // creaza preprezenarea comentariului in DOM
        const commentNode = createCommentNode(comment);
        // punem in dom comentariul
        containerNode.appendChild(commentNode);
    }
}
}
}