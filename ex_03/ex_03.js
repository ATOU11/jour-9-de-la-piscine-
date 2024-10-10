const images_data=[['https://media.giphy.com/media/3oD3Yrwt1gRDhiQZ5S/giphy.gif', 'Who am I'],
['https://media.giphy.com/media/3oD3YiCUVULluiN9WU/giphy.gif','Happy sausage'],
['https://media.giphy.com/media/3oD3YLTOkztY9xfiQE/giphy.gif','Stripes'],
['https://media.giphy.com/media/l3UcCohhJm3KEhTWw/giphy.gif','Tornadoes'],
['https://media.giphy.com/media/3oD3YiL23DDll9bAWc/giphy.gif','Walking squares'],
['https://media.giphy.com/media/26ufjJgVk087WtjEI/giphy.gif','Cubes'],
['https://media.giphy.com/media/l3Ucp4ROadmpk7aVy/giphy.gif','Hairy'],
['https://media.giphy.com/media/3oD3YOacdm13voG59K/giphy.gif','The Beanstalk'],
['https://media.giphy.com/media/l3UcDs1plijcJfOzC/giphy.gif','Tiles'],
['https://media.giphy.com/media/3oD3YnBHaVfd0rSY1i/giphy.gif','In and Out'],
['https://media.giphy.com/media/26ACqq4q3I8UDF3IA/giphy.gif','Switching points']]
function generate_cards(cards_data){
    const cards_elements=document.getElementById('cards-list')
    cards_data.forEach((card_data,index)=>{
        cards_elements.innerHTML+=`
            <div class="card ${index}">
                <div class="card_image"><img src="${card_data[0]}"/></div>
                <div class="card_title"><p>${card_data[1]}</p></div>
            </div>`
    })
}
window.onload=()=>generate_cards(images_data)
document.getElementById('cards-list').addEventListener('wheel',(event)=>{
    event.preventDefault()
    document.getElementById('cards-list').scrollLeft+=event.deltaY
})
document.getElementById('cards-list').addEventListener('click',(event)=>{
    if(event.target.closest('.card')){
        const card=event.target.closest('.card')
        // Supprime la classe zoomed de toutes les cartes
        const zoomed_cards=document.querySelectorAll('.card.zoomed')
        zoomed_cards.forEach((zoomed_card)=>zoomed_card.classList.remove('zoomed'))
        // Ajoute la classe zoomed à la carte cliquée
        card.classList.add('zoomed')
    }
})
document.addEventListener('keydown',(event)=>{
    if(event.key==='Escape'){
        const zoomed_card=document.querySelector('.card.zoomed')
        if(zoomed_card){
            zoomed_card.classList.remove('zoomed')
        }
    }
})