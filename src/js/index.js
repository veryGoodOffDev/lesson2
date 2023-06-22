import '@/scss/index.scss';
import { renderTaskList, renderEmptyPage,renderHeadMenu } from '@/js/render';
import '@/js/event.js'
import { setDropDownMenu } from './event';
renderHeadMenu()
renderTaskList()
renderEmptyPage('Не создан ни один проект')
setDropDownMenu()

