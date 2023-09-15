var listImg = document.querySelector('.list-image')


const app = {
    images: [
        {
            id: 1,
            title: 'BEACH',
            url: './assets/images/beach1.png'
        },
        {
            id: 2,
            title: 'NATURAL',
            url: './assets/images/natural.png'
        },{
            id: 3,
            title: 'HOTEL',
            url: './assets/images/hotel.png'
        },{
            id: 4,
            title: 'ENJOY',
            url: './assets/images/cano.png'
        },
    ],
    // Render Images Function
    render: function () {
        const htmls = this.images.map(images => {
                return `<div class="img-item">
                    <img src="${images.url}">
                    <h1>${images.title}</h1>
                </div>`
        })
        listImg.innerHTML = htmls.join('')
    },
    // Start Function
    start: function () {
        this.render()
    }
}


// Start
app.start()