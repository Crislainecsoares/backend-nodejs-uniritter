const app = require ('./bin/express')
const bodyParser = require ('body-parser')
const Routes = require('./models/routes')


const port = 3333


app.use(bodyParser.json())

// app.use('/campus/', Routes)

require('./models/cadastroController')(app);
require('./models/campusController')(app);
require('./models/checkinController')(app);
require('./models/checkoutController')(app);


app.listen(port, () => {
    console.log(`Api ok in port ${port}`)
})

