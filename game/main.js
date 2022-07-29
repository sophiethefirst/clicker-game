const form = document.getElementsByTagName('form');
const submitBtn = document.getElementById('submit');
const gameWindow = document.getElementById('game-window');
const gameImages = document.getElementById('game-images');

const levels = [{
  levelNum: `LEVEL 1`,
  targetImg: `https://thumbs.gfycat.com/RaggedIllinformedCattle-size_restricted.gif`,
  backgroundImg: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f849f1e6-b991-4b89-bd9b-7b86ae209054/d796494-4088057a-cf75-4962-a3fa-eeff274cd400.png/v1/fill/w_1024,h_576,q_80,strp/bosque_naruto_by_lwisf3rxd_d796494-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZjg0OWYxZTYtYjk5MS00Yjg5LWJkOWItN2I4NmFlMjA5MDU0XC9kNzk2NDk0LTQwODgwNTdhLWNmNzUtNDk2Mi1hM2ZhLWVlZmYyNzRjZDQwMC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wCV9A3_ZSiSaMyhZ_jrsVMAVUWeIAmCupka6EE5rZCE`
},
{
  levelNum: `LEVEL 2`,
  targetImg: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/349b737f-a7b5-42e2-b741-e0867058ba6b/d61y5da-27ff1f15-a053-43f7-a414-272aa278b2f2.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM0OWI3MzdmLWE3YjUtNDJlMi1iNzQxLWUwODY3MDU4YmE2YlwvZDYxeTVkYS0yN2ZmMWYxNS1hMDUzLTQzZjctYTQxNC0yNzJhYTI3OGIyZjIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.19_jBbHOrVAPrNVZI9nF8DRjAHNfRePKOp2mC5m4dLg`,
  backgroundImg: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f849f1e6-b991-4b89-bd9b-7b86ae209054/d7108e7-1a45dfb0-552f-4b7c-ab4c-7d3b2f13e7d0.jpg/v1/fill/w_1024,h_576,q_75,strp/desierto_naruto_by_lwisf3rxd_d7108e7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZjg0OWYxZTYtYjk5MS00Yjg5LWJkOWItN2I4NmFlMjA5MDU0XC9kNzEwOGU3LTFhNDVkZmIwLTU1MmYtNGI3Yy1hYjRjLTdkM2IyZjEzZTdkMC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oZ5iJnGPJ2jns4MrJv6ka8wHkEhUgp5jgzC-KAgvsKE`
},
{
  levelNum: `LEVEL 3`,
  targetImg: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4990ff4a-1c41-47b0-90ee-e75c13e216b9/dcm3tiq-0ac79adc-8784-4e66-a03b-5a9146f5cd7f.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ5OTBmZjRhLTFjNDEtNDdiMC05MGVlLWU3NWMxM2UyMTZiOVwvZGNtM3RpcS0wYWM3OWFkYy04Nzg0LTRlNjYtYTAzYi01YTkxNDZmNWNkN2YuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6m6aJbwD_XTIsCKmNqMRYYLXDBOgKpSeMtrwUX4uH8s`,
  backgroundImg: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f849f1e6-b991-4b89-bd9b-7b86ae209054/d6msae4-d91b5219-f842-41da-970e-d80535e50b66.png/v1/fill/w_1024,h_576,q_80,strp/bosque_naruto_by_lwisf3rxd_d6msae4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZjg0OWYxZTYtYjk5MS00Yjg5LWJkOWItN2I4NmFlMjA5MDU0XC9kNm1zYWU0LWQ5MWI1MjE5LWY4NDItNDFkYS05NzBlLWQ4MDUzNWU1MGI2Ni5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BWNggBSYAwZqGkchrDnFj1xvbiO8FXEu8-6CflN_XpM`
},
{
  levelNum: `LEVEL 4`,
  targetImg: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7e37d55c-fda0-46cc-9f2e-76228177a8e4/d1iys4m-d93b702a-035e-4400-b9c2-4b1d1aa4359d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdlMzdkNTVjLWZkYTAtNDZjYy05ZjJlLTc2MjI4MTc3YThlNFwvZDFpeXM0bS1kOTNiNzAyYS0wMzVlLTQ0MDAtYjljMi00YjFkMWFhNDM1OWQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4i8GQRcrsUkN-iEK3y3Xbkjw71RHiVZapYSyl0tOWhk`,
  backgroundImg: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8e27d769-0a2f-4aa3-a6b2-83c556cc602d/d78k9nc-1c91b5ce-88b4-4e33-8ca9-7f934fa19711.png/v1/fill/w_1024,h_575,q_80,strp/background_naruto_by_nitopfam_d78k9nc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc1IiwicGF0aCI6IlwvZlwvOGUyN2Q3NjktMGEyZi00YWEzLWE2YjItODNjNTU2Y2M2MDJkXC9kNzhrOW5jLTFjOTFiNWNlLTg4YjQtNGUzMy04Y2E5LTdmOTM0ZmExOTcxMS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.8I2vDFACTezHyrLJzN-h2SHeob23sPlSDyr0XW3O19U`
},
{
  backgroundImg: 'https://media0.giphy.com/media/lYfOhwR8WOJlBzpu6I/giphy.gif?cid=790b761140b9e441856a65a0b9a6dd4e22050e239780e798&rid=giphy.gif&ct=s'
}
]

const backgroundImg = document.createElement('img');
backgroundImg.setAttribute('src', levels[0].backgroundImg);
backgroundImg.setAttribute('class', 'bg-img');
gameImages.appendChild(backgroundImg);


const charachterImg = document.createElement('img');
charachterImg.setAttribute('src', levels[0].targetImg);
charachterImg.setAttribute('class', 'target-img');
gameImages.appendChild(charachterImg);


function showFinal () {
const finishText = document.createElement('p');
finishText.setAttribute('id', 'finish-text');
finishText.innerHTML = 'YOU WON... this time'
gameWindow.appendChild(finishText);
};

let count = 0;
  
function countClicks () {
const click = document.getElementById('clicks');
click.innerHTML = `${count}`;
} 
 
const levelNumber = document.getElementById('level');
levelNumber.innerHTML = `${levels[0].levelNum}`;

// я заранее извиняюсь за следующий код

charachterImg.addEventListener('click', evt => {
  count++;
  countClicks();
  if(count === 5) {
    charachterImg.src = levels[1].targetImg;
    backgroundImg.src = levels[1].backgroundImg;
    levelNumber.innerHTML = `${levels[1].levelNum}`;
  } else if (count === 10) {
    charachterImg.src = levels[2].targetImg;
    backgroundImg.src = levels[2].backgroundImg;
    levelNumber.innerHTML = `${levels[2].levelNum}`;
  } else if (count === 15) {
    charachterImg.src = levels[3].targetImg;
    backgroundImg.src = levels[3].backgroundImg;
    levelNumber.innerHTML = `${levels[3].levelNum}`;
  } else if (count === 20) {
    showFinal();
    charachterImg.parentNode.removeChild(charachterImg);
    backgroundImg.parentNode.removeChild(backgroundImg);
  }
})
 
// submitBtn.addEventListener('submit', value => {
//    let userName = document.getElementById('name-form').value;
//    document.getElementById('user-name').textContent = `${userName}`;
// });
// я хотела также добавить вывод имени, но получаю только ошибку, что userName null