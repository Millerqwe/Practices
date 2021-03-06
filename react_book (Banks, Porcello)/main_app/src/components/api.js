function getUsers(count) {
    return ( 
      new Promise((resolves, reject) => {
        const api = `https://api.randomuser.me/?nat=US&results=${count}`;
        const request = new XMLHttpRequest();
        request.open('GET', api);
  
        request.onload = () => (request.status === 200) ? 
          resolves(JSON.parse(request.response).results) :
          reject(Error(request.statusText));
  
        request.onerror = err => reject(err);
        request.send();
      })
    )
  }