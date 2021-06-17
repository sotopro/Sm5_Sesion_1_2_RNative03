const animals = [
    {
        name: 'Lion',
        scientificName: 'Panthero leo',
        size: 150,
        diet: ['meat']
    },
    {
        name: 'Gorilla',
        scientificName: 'Gorilla beriingei',
        size: 250,
        diet: ['plants', 'insects'],
        additional: {
            notes: 'This is the easter gorilla.'
        }
    },
    {
        name: 'Zebra',
        scientificName: 'Equus quagga',
        size: '330',
        diet: ['plants'],
        additional: {
            notes: 'There are three different species of zebra.',
            link: 'https://en.wikipedia.org/wiki/Zebra'
        }
    }
]

export { animals }