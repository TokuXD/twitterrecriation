document.addEventListener('DOMContentLoaded', function() {
const textInput = document.querySelector(".post-input"); 
const postButton = document.querySelector(".button-post");
let postCount = 0; 

function CreateNewPost(Text){
    if (Text.trim() === ""){ 
        alert(`Por favor, escreva algo para postar!`); 
        return;
    }

    const postItem = document.createElement('div');
    postItem.className = 'post-item';
    postItem.id = `post-${postCount}`;
    postCount++;

    postItem.innerHTML = `
    <div class="post-item-left">
        <div class="post-profile-img"></div>
    </div>
    <div class="post-item-right">
        <div class="post-header">
            <span class="post-author-name">Henri</span>
            <span class="post-author-handle">@henri</span>
        </div>
        <div class="post-text">${Text}</div>
    </div>
    `;

    const postContainer = document.querySelector('.post-container');
    let postFeed = document.querySelector('.post-feed');
    
    if (!postFeed) {
        postFeed = document.createElement('div');
        postFeed.className = 'post-feed';
        postContainer.parentNode.insertBefore(postFeed, postContainer.nextSibling);
    } 

    postFeed.insertBefore(postItem, postFeed.firstChild);
    textInput.value = "";
    textInput.focus();
    }

    postButton.addEventListener('click', function(){
    const textContent = textInput.value;
    CreateNewPost(textContent);
    })

});