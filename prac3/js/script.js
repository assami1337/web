const shapes = document.querySelectorAll('.shape');
const counter = document.getElementById('counter');
let clickCount = 0;
let lastClickedFigure = null;

counter.innerText = document.querySelectorAll(".figure_click").length;

shapes.forEach(shape => {
  shape.addEventListener('click', () => {
    shapes.forEach(shape => {
        shape.classList.remove('pulse');
    })
    
    if (shape.classList.contains('figure_click')) {
        shape.classList.remove('figure_click');
        shape.classList.remove('pulse');
        lastClickedFigure = null;
      } else {
        shape.classList.add('figure_click');
        shape.classList.add('pulse');
        lastClickedFigure = shape;
      }
      counter.innerText = document.querySelectorAll(".figure_click").length;
  });
});





// Обработчик клика по кнопкам
var buttons = document.querySelectorAll('.add-shape, .clear-shapes');

buttons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    var target = event.target;
    if (target.classList.contains('add-shape')) {
      var shapeType = target.getAttribute('data-shape');
      addShape(shapeType);
    } else if (target.classList.contains('clear-shapes')) {
      clearShapes();
    }
  });
});

// Добавление фигуры
function addShape(shapeType) {
  var shapesContainer = document.querySelector('.shapes-container');
  var shape = document.createElement('div');
  shape.classList.add('shape', shapeType);
  shapesContainer.appendChild(shape);
}

// Очистка фигур
function clearShapes() {
  var shapesContainer = document.querySelector('.shapes-container');
  shapesContainer.innerHTML = '';
}

// script.js

// Всплывающее окно
var modalButton = document.getElementById('modal-button');
var modal = document.getElementById('modal');
var closeButton = document.getElementById('close-button');

modalButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

const sliderWrapper = document.querySelector('.slider-wrapper');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

const slideWidth = document.querySelector('.slider-item').offsetWidth;
let currentPosition = 0;

function updateButtons() {
  prevButton.disabled = currentPosition === 0;
  nextButton.disabled = currentPosition <= -(slideWidth * 2);
}

function slide(direction) {
  currentPosition += direction * slideWidth;
  sliderWrapper.style.transform = `translateX(${currentPosition}px)`;
  updateButtons();
}

prevButton.addEventListener('click', () => slide(1));
nextButton.addEventListener('click', () => slide(-1));

updateButtons();
