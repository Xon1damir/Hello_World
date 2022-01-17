function formatName(username) {
    return 'CHINGIZ_XON' + ' ' + 'XUDOYOROV';
    
  }
  
  function GetGreeting(username) {
    if (true) 
      return <h1>Hello, {formatName(username)}!</h1>;

    return <h1>Hello, Stranger.</h1>;
  };
  const username = {
    firstName: 'CHINGIZ_XON',
    lastName: 'XUDOYOROV'
  };

  export default GetGreeting;

  