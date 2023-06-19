import './style.scss';

export const createEmptyPage = (text) => {
    const noTasksContainer = document.createElement('div'),
          noTasksInner = document.createElement('div'),
          noTasksTitle = document.createElement('p'),
          noTasksBtn = document.createElement('button');

          noTasksContainer.className = 'no-tasks__page'
          noTasksInner.className = 'no-tasks__page-inner'
          noTasksTitle.className = 'no-tasks__title'

          noTasksTitle.textContent = text
          noTasksBtn.className = 'no-tasks__btn'
          noTasksBtn.textContent = 'Добавить'

          noTasksContainer.append(noTasksInner)
          noTasksInner.append(noTasksTitle, noTasksBtn)
          
          return noTasksContainer
}