document.addEventListener('DOMContentLoaded', () => {
  let ranges = document.querySelectorAll('.input_range');

  for (let range of ranges) {
    range.addEventListener('input', () => {
      range.nextElementSibling.style.width = `${range.value / range.max * 100}%`;
      range.previousElementSibling.style.left = `${range.value / range.max * 100}%`;

      if (range.parentElement.classList.contains('price')) {
        range.previousElementSibling.innerHTML = `${range.value}$`;
      } else if (range.parentElement.classList.contains('thc')) {
        range.previousElementSibling.innerHTML = `${range.value}%`;
      } else if (range.parentElement.classList.contains('cbd')) {
        range.previousElementSibling.innerHTML = `${range.value}%`;
      }
    });
  }

  let tags = document.querySelector('.tag-list'),
    checkboxes = document.querySelectorAll('.checkbox');


  tags.addEventListener('click', (e) => {
    if (e.target.classList.contains('close') || e.target.parentElement.classList.contains('close')) {
      e.target.closest('li').remove();
      console.log(e.target.parentElement.previousElementSibling)


      for (let check of checkboxes) {
        if (e.target.parentElement.previousElementSibling.innerHTML == check.nextElementSibling.innerHTML) {
          check.checked = false;
        }
      }
    }
  });

  for (let check of checkboxes) {
    check.addEventListener('change', () => {
      if (check.checked) {
        tags.innerHTML += `
          <li><span>${check.nextElementSibling.innerHTML}</span>
          <button class="close"><img src="images/sprite.svg#close"></button>
      </li >
          `;

      } else {
        let tagsValue = tags.querySelectorAll('li');
        value = check.nextElementSibling.innerHTML;
        for (let tag of tagsValue) {
          if (tag.firstElementChild.innerHTML.includes(value)) {
            tag.remove();
          }
        }
      }
    });
  }

  let toggleBtns = document.querySelectorAll('.checking');

  for (let btn of toggleBtns) {
    btn.addEventListener('click', () => {
      btn.querySelector('.toggleBtn').classList.toggle('toggle');
    })
  }

  let menuDropdown = document.querySelector('#menu')

  menuDropdown.addEventListener('click', () => {
    menuDropdown.nextElementSibling.classList.toggle('dropdown_active')
  })
});