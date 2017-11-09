/*
 fazer um stream de escrita que receba do process.stdin linhas da seguinte forma:
{ destinatario: 'fulano',
mensagem: 'olá, quer teclar?'}

  e salve num diretório de dados com o seguinte esquema para chave:
  'destinatario::data'
  
  e o valor sendo o json:
  {
    remetente:    'perguntadonoprompt',
    destinatario: fulando,
    data:         Data.now(),
    mensagem:     'olá, quer teclar?'
  }
*/