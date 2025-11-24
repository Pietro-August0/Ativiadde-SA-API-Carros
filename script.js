function buscarMoto() {
    fetch("http://10.92.199.53:3000/carros")
        .then((res) => res.json())
        .then((data) => {

            //Div onde os carros vão aparecer
            let divContainerCarro = document.getElementById("containerCarros")

            data.forEach(carro => {
                //Criando card
                let card = document.createElement("div")

                card.innerHTML =

                    <div>
                        <img src="${carro.imagem}" />
                        <div style="display: flex;">
                            <h5>${carro.nome}</h5>
                            <h5>${carro.preco}</h5>
                        </div>
                    </div>

                divContainerCarro.append(card)
            });
        })
}

function buscarCarro() {
    fetch("http://10.92.199.53:3000/motos")
        .then((res) => res.json())
        .then((data) => {

            //Div onde as motos vão aparecer
            let divContainerMoto = document.getElementById("containerMotos")

            data.forEach(moto => {
                //Criando card
                let card = document.createElement("div")

                card.innerHTML =

                    <div>
                        <img src="${moto.imagem}" />
                        <div style="display: flex;">
                            <h5>${moto.nome}</h5>
                            <h5>${moto.preco}</h5>
                        </div>
                    </div>

                divContainerCarro.append(card)
            });
        })
}

function buscarVendedores() {
    fetch("http://10.92.199.53:3000/vendedores")
        .then((res) => res.json())
        .then((data) => {

            //Div onde os vendedores vão aparecer
            let divContainerVendedor = document.getElementById("containerVendedores")

            data.forEach(vendedor => {
                //Criando card
                let card = document.createElement("div")

                card.innerHTML =
                    <div>
                        <img src="${vendedor.imagem}" />
                        <h5>${vendedor.nome}</h5>
                    </div>

                divContainerVendedor.append(card)
            });
        })
}