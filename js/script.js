/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

Consigli del giorno: Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!

Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

*/



const team  = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        immagine: './img/wayne.jpeg',
    },

    {
        nome: 'Angela Caroll',
        ruolo:'Chief Editor',
        immagine: './img/caroll.jpeg',
    },

    {
        nome:'Walter Gordon',
        ruolo:'Office Manager',
        immagine: './img/gordon.jpeg',
    },

    {
        nome:'Angela Lopez',
        ruolo:'Social Media Manager',
        immagine: './img/lopez.jpeg',
    },

    {
        nome:'Scott Estrada',
        ruolo:'Developer',
        immagine: './img/estrada.jpeg',
    },

    {
        nome:'Barbara Ramos',
        ruolo:'Graphic Designer',
        immagine: './img/ramos.jpeg',
    }
];





const teamContainerEl = document.getElementById('team');

for (let i = 0; i < team.length; i++) {
    const member = team[i];
     console.log(member.nome, member.ruolo, member.immagine);


     const memberDiv = document.createElement('div');
     memberDiv.className = 'member';

     memberDiv.innerHTML = `<img src="${member.immagine}" class="card-img-top img_rounded"
     <h2>Nome: ${member.nome}</h2>
     <p>Ruolo: ${member.ruolo}</p>`;
     teamContainerEl.appendChild(memberDiv);



}

    
