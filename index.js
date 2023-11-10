const http = require('http');
const rupiah = require('rupiah-format');
const host = '127.0.0.1';
const port = '3001'

// request adalah = data masuk dari luar
// response adalah = data keluar dari sistem

const server = http.createServer(function (request, response) {
    const nama = "Riko";
    const duit = 100000;
    const jajan = 25000;
    const sisa = duit - jajan;

    const sisaDuit = rupiah.convert(sisa);
    console.log(`sisa duit: `, sisaDuit)

    const hasil = `halo saya ${nama}, saya jajan sebanyak ${jajan}, duit saya tadinya ${duit}, 
    sekarang jadi ${sisaDuit}`

    response.statusCode = 200;
    response.end(hasil);
});

server.listen(port, host, '', function () {
console.log(`server menyala di ${host}:${port}`);
});