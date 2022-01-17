const getUuid = require('mc-player-uuid');
const fetch = require('node-fetch');

var UsersList = ['SeraphFlonne','Demachiana','TheIneptOne','Charmandr004','Charmeleon005','Charizard006x','Squirtle007x','Wartortle008x','Blastoise009x','Caterpie010x','Metapod011x','Butterfree012','Weedle013x','Kakuna014x','Beedrill015x','Pidgey016x','Pidgeotto17x','Pidgeot018x','Rattata019x','Raticate020x','Spearow021x','Fearow022x','Ekans023x','Arbok024x','Clericalrose','Raichu026x','Sandshrew027x','Sandslash028x','Nidoran029x','Clefairy035x','Clefable036x','Vulpix037x','Ninetales038x','Jiglypuff039x','Wiglytuff040x','Growlithe058x','Arcanine059x','Cubone104x','Marowak105x','Chansey113x','Eevee133x','Vaporeon135x','Jolteon135x','Flareon136x','Snorlax143x','Articuno144x','Moltres146x','Mew151x'];

// for (var i = 0, length = UsersList.length; i < length; i++) {
//     getUuid(UsersList[i]).then((uuid) => {
//         console.log(uuid);
//     });
// }

// getUuid('as23ssssd').then((uuid) => {
//     console.log(uuid);
// });


var passedList = [];
var failedList = [];

async function doSomething() {


    for (var i = 0, length = UsersList.length; i < length; i++) {
        try {
            const res = await fetch(`https://api.mojang.com/users/profiles/minecraft/${UsersList[i]}`);
    
            if (res.statusText == 'No Content') {
                failedList.push(UsersList[i])
            }
            else if (res.statusText == 'OK') {
                passedList.push(UsersList[i])
            }
            else {
                console.log(`Exception occurred with ${UsersList[i]}`)
            }

            // const body = await res.json();
            // console.log(body)
        }
        catch (err) {
            console.log(err)
        }
    }

 
    console.log('Passed accounts: ')
    // console.table(passedList)

    console.log('Failed accounts: ')
    // console.table(failedList)

    
}


doSomething()

exports.passedList = passedList
exports.failedList = failedList
