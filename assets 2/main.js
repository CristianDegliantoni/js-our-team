const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
const container = document.getElementById("container");
const memberForm = document.getElementById("add-member-form");

// Funzione che genera e inserisce nell'HTML tutte le card del team
function renderTeam() {
  let cardsHTML = "";

  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];

    cardsHTML += `
      <div class="card-member">
        <div class="card-img">
          <img src="${member.img}" alt="${member.name}">
        </div>
        <div class="card-text">
          <h2>${member.name}</h2>
          <h3>${member.role}</h3>
          <p>${member.email}</p>
        </div>
      </div>
    `;
  }

  container.innerHTML = cardsHTML;
}

// Chiamata iniziale per mostrare i membri predefiniti
renderTeam();

// Gestione dell'invio del form per aggiungere un nuovo membro
memberForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value.trim();
  const email = document.getElementById("email").value.trim();
  const imgInput = document.getElementById("img").value.trim();

  // Se l'utente non inserisce un'immagine, usiamo un placeholder o una foto predefinita
  const img = imgInput !== "" ? imgInput : "img/male1.png";

  const newMember = {
    name: name,
    role: role,
    email: email,
    img: img
  };

  // Aggiungiamo il nuovo membro all'array
  teamMembers.push(newMember);

  // Aggiorniamo la visualizzazione delle card nella pagina
  renderTeam();

  // Resettiamo i campi del form
  memberForm.reset();
});