//   xdd -> Zykem#9999
function showMain() {

    console.clear();
    console.log('\n\nFIVEM-TOOL\n\n[1] Server online Users\n[2] Server resources\n[3] Get Whole Server Object\n[4] Get IP:PORT by CFX url\n\n')
    readline.question("Pick [1,2,3]:", (pick) => {
        if (pick === '1') {
            console.clear();
            readline.question("Server IP:PORT (Default PORT: 30120):", (ip) => {
    
                const srv = new fivem.Server(ip) // Set the IP with port.
                const onlinePlayers = srv.getPlayers();
                
                    setInterval(() => {
    
                        srv.getPlayers().then(data => console.log(data + ' PLAYERS ONLINE')) // Get & log the data!
                        
                    }, 1500)
                    readline.question("\n[1] GOTO Main Menu\n[2] EXIT Process\nYour Choose::", (pick2) => {

                        if(pick2 === '1') {

                            showMain();

                        }else {

                            process.exit();

                        }

                  })
    
            })
    
        }
    
        if (pick === '2') {
    
            console.clear();
            readline.question("Server IP:PORT (Default PORT: 30120):", (ip) => {
    
                const srv = new fivem.Server(ip) // Set the IP with port.
                const onlinePlayers = srv.getPlayers();
                srv.getResources().then(data => console.log(data)) // Get & log the data!     
                readline.question("\n[1] GOTO Main Menu\n[2] EXIT Process\nYour Choose::", (pick2) => {

                    if(pick2 === '1') {

                        showMain();

                    }else {

                        process.exit();

                    }

              })
            })
    
        }
    
        if(pick === '3'){
    
            console.clear();
            readline.question("Server IP:PORT (Default PORT: 30120):", (ip) => {
    
                const srv = new fivem.Server(ip) // Set the IP with port.
                const onlinePlayers = srv.getPlayers();
                srv.getServer().then(data => console.log(data));   
                readline.question("\n[1] GOTO Main Menu\n[2] EXIT Process\nYour Choose::", (pick2) => {

                    if(pick2 === '1') {

                        showMain();

                    }else {

                        process.exit();

                    }

              })
            })
    
        }
    
        if(pick === '4') {
    
            console.clear();
            readline.question("Enter cfx url (cfx.re/????):", (url) => {
    
                if (url.startsWith("cfx.re/join/")) {
      
                    var request = "https://" + url
                  
                  }
                  
                  else {
                    
                    var request = "https://cfx.re/join/" + url
                    var url = "cfx.re/join/" + url;
                  
                  }
                  try {
                  
                    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
                    var req = new XMLHttpRequest();
                    req.open('GET', request, false);
                    req.send();
                    var response = req.getResponseHeader('x-citizenfx-url').replace("http://", "").replace("/", "");
                    
                  }
                  catch(error) {
                      var response = "Server wasn't found."
                  }
                  console.log(`\x1b[0mIP address: \x1b[36m${response}\x1b[0m`);
                  
                  readline.question("\n[1] GOTO Main Menu\n[2] EXIT Process\nYour Choose::", (pick2) => {

                        if(pick2 === '1') {

                            showMain();

                        }else {

                            process.exit();

                        }

                  })

            })
    
        }
    })

}

// i love doggo
const fivem = require('fivem')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


showMain();