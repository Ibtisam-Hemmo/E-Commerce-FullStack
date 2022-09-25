const express = require('express')
app = express()
app.get('/data', (req, res) => {
    res.json({ a: 'aa' })
})
app.listen(5000, () => {

})