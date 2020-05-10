
class App{
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form')
        this.listEl = document.getElementById('repo-list')

        //this.registerHandler();
    }


    // registerHandler(){
    //     this.formEl.onclick = event => this.addRepository(event);
    // }

    addRepository(event){
    event.preventDefault();


    const URL = `https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72`;
    fetch(URL)
    .then(resposta => resposta.json())
    .then(data => {
        console.log(data)
        for(let item of data){
            this.repositories.push({
                photo:item.photo,
                name: item.name,
                property_type: item.property_type,
                price: `R$ ${item.price}`,
            });
        }

        this.render();
    })
    .catch(erro => console.error(erro));
    

    }

    render(){
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('div');
            imgEl.style.backgroundImage = `url(${repo.photo})`;
            imgEl.classList.add('card__quarto__img');
            let titleEl = document.createElement('h4');
            titleEl.appendChild(document.createTextNode(repo.name));
            titleEl.classList.add('card__quarto__text');
            let descEl = document.createElement('p');
            descEl.appendChild(document.createTextNode(repo.property_type));
            descEl.classList.add('tipo');
            let valorEl = document.createElement('p');
            valorEl.appendChild(document.createTextNode(repo.price));
            valorEl.classList.add('price');
            let listItemEl = document.createElement('div');
            listItemEl.classList.add('card__quarto');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descEl);
            listItemEl.appendChild(valorEl);
            this.listEl.appendChild(listItemEl)
        });
    }
}

window.onload = function(){ const app = new App(); app.addRepository(event) }