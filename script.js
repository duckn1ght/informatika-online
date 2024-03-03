function openPopUpAbout() {
    let popup = document.querySelector('.pop_up');
    let popupAbout = document.querySelector('.pop_up_about');
    popup.style.display = 'flex';
    popupAbout.style.display = 'flex';
}
function closePopUpAbout() {
    let popup = document.querySelector('.pop_up');
    let popupAbout = document.querySelector('.pop_up_about');
    popup.style.display = 'none';
    popupAbout.style.display = 'none';
}
function openPopUpEdit() {
    let popup = document.querySelector('.pop_up');
    let popupEdit = document.querySelector('.pop_up_edit');
    popup.style.display = 'flex';
    popupEdit.style.display = 'flex';
}
function closePopUpEdit() {
    let popup = document.querySelector('.pop_up');
    let popupEdit = document.querySelector('.pop_up_edit');
    popup.style.display = 'none';
    popupEdit.style.display = 'none';
}
function openPopUpImage(imagePath) {
    let popup = document.querySelector('.pop_up');
    let popupContainer = document.querySelector('.pop_up_container');
    let popupImage = document.querySelector('.pop_up_image');
    popupImage.src = imagePath;
    popupContainer.style.display = 'flex';
    popup.style.display = 'flex';
}
function closePopUpImage() {
    let popup = document.querySelector('.pop_up');
    let popupContainer = document.querySelector('.pop_up_container');
    popupContainer.style.display = 'none';
    popup.style.display = 'none';
}


function test() {
    let btn = document.getElementById('submit_btn');
    let points = 0;
    let pointsP = document.getElementById('points');
    let true_answers = [];
    let resultTexts = [];
    for (let i = 1; i < 6; i++) {
        let textItem = document.getElementById(`result_text_${i}`);
        let item = document.getElementById(`t_answer_${i}`);
        true_answers.push(item);
        resultTexts.push(textItem);
    }

    for (let i = 0; i < true_answers.length; i++) {
        if (true_answers[i].checked) {
            resultTexts[i].style.display = 'block';
            resultTexts[i].innerHTML = 'Ответ верный!';
            resultTexts[i].style.color = 'green';
            points++;
        } else {
            resultTexts[i].style.display = 'block';
            resultTexts[i].innerHTML = 'Ответ не верный!';
            resultTexts[i].style.color = 'red';
        }
    }
    pointsP.style.display = 'block';
    pointsP.innerHTML = `Итог: ${points}/5`;
    btn.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("up");

    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 300) {
            //   backToTop.style.display = "block";
            backToTop.style.opacity = 1;
        } else {
            backToTop.style.opacity = 0;
            // backToTop.style.display = "none";
        }
    });

    // Плавная прокрутка при клике на кнопку
    backToTop.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});



function srcl(elemId) {
    let item = document.getElementById(elemId);
    if (item) {
        item.scrollIntoView({behavior: 'smooth', block: 'start'});
    } else {
        console.log("error");
    }
}
