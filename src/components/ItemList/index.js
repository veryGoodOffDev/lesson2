import './style.scss';
import avatar from '@/assets/images/userAvatar.jpg'
const create = document.createElement.bind(document)

export const createItem = (id, title, status, created, edited, number, isProject) => {

    const taskItem = create('li'),
          itemCard = create('div'),
          itemHead = create('div'),
          itemTitle = create('h3'),
          itemImg = create('img'),
          cardBody = create('div'),
          itemCreated = create('p'),
          itemNumber = create('span'),
          itemBadge = create('span'),
          itemEdited = create('p'),
          itemMenu = create('div'),
          itemMenuDots = create('span'),
          itemTooltip = create('span')
          


    taskItem.className = 'task__list-item'
    taskItem.id = id
    itemCard.className = 'item-card'
    itemHead.className = 'item-card__head'
    itemTitle.className =  'item-card__title'
    itemTitle.textContent = title
    
    itemImg.className = 'user__img'
    itemImg.src = avatar
    itemImg.alt = "user avatar"

    cardBody.className = 'item-card__body'
    itemCreated.className = 'item-card__created'
    itemCreated.textContent = created

    itemNumber.className = 'item-card__number'
    itemNumber.textContent = number

    itemBadge.className = "badge bg-bronze"
    itemBadge.textContent = status

    itemEdited.className = 'item-card__edited'
    itemEdited.textContent = edited

    itemMenu.className = 'item-menu'
    itemMenuDots.className = 'item-menu__dots'

    itemTooltip.className = 'tooltip'
    itemTooltip.textContent = title

    taskItem.append(itemCard, itemMenu, itemTooltip)
    itemCard.append(itemHead, cardBody)
    itemMenu.append(itemMenuDots)
    if (!isProject) {
        itemHead.append(itemTitle, itemImg)
        itemCreated.append(itemBadge)
    } else {
        itemHead.append(itemTitle)
    }

    cardBody.append(itemCreated, itemEdited)
    itemCreated.prepend(itemNumber)

    return taskItem;
}