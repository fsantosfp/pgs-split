const express = require('express')
const app = express()

app.get('/pgs/notification',( req , res ) => {
    res.send('Aqui eu receberei as notificações')
})

app.listen(3000, () => { console.log('>>> Server On') })

