//변수 호출
const btnClick = document.getElementById('btn');
const color = document.querySelector('.color');

//버튼 클릭 이벤트
btnClick.addEventListener('click', () => {
    //rgb안에 random번호 생성
    const randomRGBArray = getRandomNumber(0, 255);
    console.log(randomRGBArray);
    const [r, g, b] = randomRGBArray;
    
    //템플릿 리터럴
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    color.textContent = rgbColor;

    //back ground color insert
    color.style.color = rgbColor;
    document.body.style.backgroundColor = rgbColor;

});

function getRandomNumber(min, max){
    // rgb 랜덤값 추출 함수로 빼서 관심사 분리 함수의 재사용의 호출
    let randomRGBArray = [];
    
    for(let i = 0; i<3; i++){
        const randomNumber = Math.floor(Math.random()*(max - min + 1)) + min;
        randomRGBArray.push(randomNumber);
    }

    return randomRGBArray;
}