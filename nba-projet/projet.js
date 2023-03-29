const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f56eca63f6mshe7a786ba8e2eb2dp1f6f0ejsn51db271d413d',
        'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com'
    }
};
// // appel avec la methode fetch pour recuperer les données
// fetch('https://basketapi1.p.rapidapi.com/api/basketball/tournament/132/season/38191/standings/total', options)

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '77ceaa6f3bmsh561e24af6bc3098p16b0a4jsna769b588485b',
//         'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com'
//     }
// };
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '9236bda5e3msh447c95af264497cp16e78cjsn79b1c2e49353',
//         'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com'
//     }
// };

fetch('https://basketapi1.p.rapidapi.com/api/basketball/tournament/132/season/38191/standings/total', options)
    .then(response => response.json())

    // .then(data => console.log(data));

    .then(data => {

        const list = [data];

        // faire un map sur les items de la reponse APi

        list.map((item) => {


            for (i = 0; i < item.standings.length; i++) {



                const name = item.standings[0].name;
                console.log(item);
                const nameteam = item.standings[0].rows[i].team.name;
                const gamesBehind = item.standings[0].rows[i].gamesBehind;
                const losses = item.standings[0].rows[i].losses;
                const matches = item.standings[0].rows[i].matches;
                const pourcentage = item.standings[0].rows[i].percentage;
                const position = item.standings[0].rows[i].position;
                const wins = item.standings[0].rows[i].wins;
                // stockage et recuperation des données de l APi dans la constante equipe
                const equipe =
                    ` <tr> 
            <td>${name}<td>
            <td>${gamesBehind} <td>
            <td>${nameteam} <td>
            <td>${position}<td>
            <td>${matches}<td> 
            <td>${losses} <td> 
            <td>${pourcentage}<td>
            <td>${wins}<td>

        <tr>
    `
                // affichage des données recuperées du tableau dans html
                document.querySelector('.tableau').innerHTML += equipe;


            }
        })
    })
    .catch(err => console.error(err));


// decalaration des constantes qui stockent les données sur les pop-up

const email = document.getElementById("email")
const btn = document.getElementById("btn")
const pop1 = document.getElementById("pop1")
const pop2 = document.getElementById("pop2")
const button = document.getElementById("button")
const buttonok = document.getElementById("buttonok")


// evenement click sur le bouton
btn.addEventListener("click", function (e) {



    if (email.value == "") {

        pop2.classList.remove('invisible');

    } else {
        pop1.classList.remove('invisible');
    }
})

button.addEventListener("click", function (e) {
    pop2.classList.add('invisible')

})
buttonok.addEventListener("click", function (e) {
    pop1.classList.add('invisible')

})


