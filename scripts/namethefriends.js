var easyCards = [
  
   ' https://i.imgur.com/3tYeVvI.png',
    'https://i.imgur.com/Ed2gYdN.png',
'    https://i.imgur.com/TDbamJp.png',
 '   https://i.imgur.com/btbpRmD.png',
  '  https://i.imgur.com/GfTxxVk.png',
  '  https://i.imgur.com/d4wKIKT.png',
   
'   https://i.imgur.com/s4JLtP3.png',
'   https://i.imgur.com/HUFQdL4.png',
    
'https://i.imgur.com/FIB9MnG.png',
    
  '  https://i.imgur.com/icL1AM1.png',
 
  '  https://i.imgur.com/8hGTjqx.png',
 '   https://i.imgur.com/oQka5oy.png',
  '  https://i.imgur.com/OfBciUI.png',
    
  '  https://i.imgur.com/cgApzxB.png',

    
  '  https://i.imgur.com/JU5k7Ke.png',
  '  https://i.imgur.com/kFVHygs.png',
   ' https://i.imgur.com/0DzM10H.png',
  '  https://i.imgur.com/j6Y7lBf.png',
  '  https://i.imgur.com/X5eZvlr.png',
 '   https://i.imgur.com/FLJ31p1.png',
  '  https://i.imgur.com/h1j14Lq.png',
  '  https://i.imgur.com/7VMwdF0.png',
  '  https://i.imgur.com/bEbFnOS.png',
   ' https://i.imgur.com/S5XatpH.png',
   ' https://i.imgur.com/lKBrEpJ.png',
  '  https://i.imgur.com/PqwIWPi.png',
  '  https://i.imgur.com/RQNQ6KM.png',
  '  https://i.imgur.com/T4FVvpd.png',
  '  https://i.imgur.com/brOYD7I.png',
  '  https://i.imgur.com/evpmcRR.png',
  '  https://i.imgur.com/R5LFJKa.png',
  '  https://i.imgur.com/92yOs0q.png',
  '  https://i.imgur.com/zrO0n4Y.png',
  '  https://i.imgur.com/VpoK5Z3.png',
    

    ]
var mediumCards = [

   ' https://i.imgur.com/nLrrcCQ.png',
    'https://i.imgur.com/GYZ2uiU.png',
'  https://i.imgur.com/YckoZEf.png',
 '  https://i.imgur.com/wJw3K4i.png',
  '  https://i.imgur.com/Lh6Pfu5.png',
  ' https://i.imgur.com/Bripkqj.png',
   
'   https://i.imgur.com/CzgNbXR.png',
'  https://i.imgur.com/HtrlHDL.png',
    
'https://i.imgur.com/giR11ng.png',
    
  ' https://i.imgur.com/hvPrBhK.png',
 
  ' https://i.imgur.com/arW9q3Y.png',


  
    

    ]
var easyMediumCards = easyCards.concat(mediumCards);
var hardCards = [
 
    ]
var easyMediumHard = easyMediumCards.concat(hardCards);
var expertCards = [
    
    ]

window.onload = function () {

    function sliderChange() {
        var slider = document.getElementById('difficulty'),
            easy = document.getElementsByClassName('easy'),
            medium = document.getElementsByClassName('medium'),
            easymedium = document.getElementsByClassName('easymedium'),
            hard = document.getElementsByClassName('hard'),
            easymediumhard = document.getElementsByClassName('easymediumhard'),
            expert = document.getElementsByClassName('expert');
        slider.onchange = function() {
            if (slider.value == '0') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'inline-block';
                    medium[i].style.display = 'none';
                    easymedium[i].style.display = 'none';
                    hard[i].style.display = 'none';
                    easymediumhard[i].style.display = 'none';
                    expert[i].style.display = 'none';   
                }
            }
            else if (slider.value == '1') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'inline-block';
                    easymedium[0].style.display = 'none';
                    hard[i].style.display = 'none';
                    easymediumhard[i].style.display = 'none';
                    expert[i].style.display = 'none';
                }
            }
            else if (slider.value == '2') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'none';
                    easymedium[i].style.display = 'inline-block';
                    hard[i].style.display = 'none';
                    easymediumhard[i].style.display = 'none';
                    expert[i].style.display = 'none';
                }
            }
            else if (slider.value == '3') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'none';
                    easymedium[i].style.display = 'none';
                    hard[i].style.display = 'inline-block';
                    easymediumhard[0].style.display = 'none';
                    expert[i].style.display = 'none';
                }
            }
            else if (slider.value == '4') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'none';
                    easymedium[i].style.display = 'none';
                    hard[i].style.display = 'none';
                    easymediumhard[i].style.display = 'inline-block';
                    expert[i].style.display = 'none';
                }
            }
            else if (slider.value == '5') {
                for (var i = 0; i < 2; i++) {
                    easy[i].style.display = 'none';
                    medium[i].style.display = 'none';
                    easymedium[i].style.display = 'none';
                    hard[i].style.display = 'none';
                    easymediumhard[i].style.display = 'none';
                    expert[i].style.display = 'inline-block';
                }
            }
        }
        slider.defaultValue = '1';
    }
    sliderChange();

    function pullCard() {
        var cardContainer = document.getElementById('card_pull'),
            message = document.getElementById('pull_card'),
            slider = document.getElementById('difficulty'),
            cardImage = document.createElement('img');
        cardContainer.onclick = function () {
            message.style.display = 'none';
            if (slider.value == '0') {
                cardContainer.style.background = '#F36024';
                var number = Math.floor(Math.random()*easyCards.length);
                cardImage.src = easyCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '1') {
                cardContainer.style.background = '#42BFAE';
                var number = Math.floor(Math.random()*mediumCards.length);
                cardImage.src = mediumCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '2') {
                cardContainer.style.background = '#42BFAE';
                var number = Math.floor(Math.random()*easyMediumCards.length);
                cardImage.src = easyMediumCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '3') {
                cardContainer.style.background = '#2861AC';
                var number = Math.floor(Math.random()*hardCards.length);
                cardImage.src = hardCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '4') {
                cardContainer.style.background = '#2861AC';
                var number = Math.floor(Math.random()*easyMediumHard.length);
                cardImage.src = easyMediumHard[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
            if (slider.value == '5') {
                cardContainer.style.background = '#ABC54A';
                var number = Math.floor(Math.random()*expertCards.length);
                cardImage.src = expertCards[number];
                cardImage.classList.addClass = 'active';
                cardContainer.appendChild(cardImage);
            }
        }
    }
    pullCard();

}
