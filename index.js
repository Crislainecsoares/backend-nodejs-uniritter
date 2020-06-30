const app = require('./bin/express')
const bodyParser = require('body-parser')
const Routes = require('./models/routes')

const port = process.env.PORT || 3333
const ip = process.env.IP 

app.use(bodyParser.json())

require('./models/cadastroController')(app);
require('./models/campusController')(app);
require('./models/checkinController')(app);
require('./models/checkoutController')(app);

app.listen(port, ip, () => {
    console.log(`Api ok in port ${ip}:${port}`)
})

