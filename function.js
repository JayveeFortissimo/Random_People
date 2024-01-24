const ul = document.querySelector('.naming');

const create = document.createElement('h4');
const create1 = document.createElement('h4');
const create2 = document.createElement('h4');
const create3 = document.createElement('h4');
const create4 = document.createElement('h4');

const image = document.querySelector('.images')
const createImage = document.createElement('img');

const body = document.querySelector('body');






const button = document.querySelector('.BTN button').addEventListener('click',()=>{

   fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
       images(data.results[0]);
    }
    
    )
    .catch(error => console.log(error))


})


function images(user){
    const {name,gender,location,dob,email,picture} = user;

    const names  = create.textContent = `${name.title} ${name.first} ${name.last} `;
    const genders = create.textContent = `${gender} `;
    const locations = create.textContent = `${location.country}`;
    const emails = create.textContent = `${email}`;
    const ages = create.textContent = `${dob.age}`

    create.textContent = `Name: ${names}`
    create1.textContent = `Gender: ${genders}`
    create2.textContent = `Location: ${locations}`
    create3.textContent = `Email: ${emails}`
    create4.textContent = `Age: ${ages}`

    createImage.setAttribute('src',`${picture.large}`)
    
    ul.appendChild(create)
    ul.appendChild(create1)
    ul.appendChild(create2)
    ul.appendChild(create3)
    ul.appendChild(create4)
    image.appendChild(createImage)

    if(gender === 'male'){
     body.style.backgroundColor ='blue'
    }else{
     body.style.backgroundColor ='hotpink'
    }


}

