app.listen(process.env.PORT);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.get('/', (req, res) => {
    res.json({
        msg: 'OK'
    })
})


app.listen(port);
