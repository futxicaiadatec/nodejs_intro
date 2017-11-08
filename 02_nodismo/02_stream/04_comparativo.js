process.stdin.on('readable', function () {
    var buf = process.stdin.read();
    console.dir(buf);
})

/*
**
  versão antiga da API usava o evento data
  
  process.stdin.on('data', function (buf) {
      console.log(buf);
  });
  
  se for usado o node entra em modo de compatibilidade
  o stream fica num fluxo contínuo e não existe mais o mecanismo de contra pressão
  
  https://nodejs.org/docs/latest/api/stream.html#stream_buffering
*/
