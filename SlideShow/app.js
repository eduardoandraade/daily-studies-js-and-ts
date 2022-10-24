'use strict';

const images = [
    { 'id': '1', 'url':'./img/1.jpg' },
    { 'id': '2', 'url':'./img/2.jpg' },
    { 'id': '3', 'url':'./img/3.jpg' },
    { 'id': '4', 'url':'./img/noite.svg' },
]

const container = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages ( images, container );
