// Navigation principale

let historyStack = [];

function goTo(view){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+view).classList.add('active');
}

function nav(page){
  historyStack.push(page);

  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');

  document.getElementById('title').innerText =
    page.charAt(0).toUpperCase() + page.slice(1);

  loadPageData(page);
}

function back(){
  historyStack.pop();
  let prev = historyStack.pop() || "dashboard";
  nav(prev);
}

// Auth

function register(){
  const name = document.getElementById('reg-name').value;
  const email = document.getElementById('reg-email').value;
  const pass = document.getElementById('reg-pass').value;

  if(!name || !email || !pass){
    alert("Remplis tous les champs");
    return;
  }

  DB.user = { name, email };
  localStorage.setItem("user", JSON.stringify(DB.user));

  goTo("app");
  nav("dashboard");
}

function login(){
  const email = document.getElementById('login-email').value;

  if(!email){
    alert("Entre ton email");
    return;
  }

  let user = JSON.parse(localStorage.getItem("user"));

  if(!user){
    alert("Aucun compte trouvé");
    return;
  }

  DB.user = user;

  goTo("app");
  nav("dashboard");
}

function logout(){
  localStorage.removeItem("user");
  DB.user = null;
  goTo("landing");
}

// Charger données dynamiques

function loadPageData(page){

  if(page === "dashboard"){
    const el = document.getElementById("page-dashboard");
    el.innerHTML = `
      <div class="grid">
        <div class="card">Score ${DB.stats.score}</div>
        <div class="card">Candidatures ${DB.stats.applications}</div>
        <div class="card">Entretiens ${DB.stats.interviews}</div>
      </div>
    `;
  }

  if(page === "personality"){
    const p = DB.personality;
    document.getElementById("page-personality").innerHTML = `
      <div class="card">
        <h3>Big Five</h3>
        <p>Ouverture: ${p.openness}</p>
        <p>Conscience: ${p.conscientiousness}</p>
        <p>Extraversion: ${p.extraversion}</p>
        <p>Agréabilité: ${p.agreeableness}</p>
        <p>Stabilité: ${p.neuroticism}</p>
      </div>
    `;
  }

  if(page === "skills"){
    const skillsHTML = DB.skills.map(s =>
      `<p>${s.name} - ${s.level}</p>`
    ).join("");

    document.getElementById("page-skills").innerHTML = `
      <div class="card">
        <h3>Compétences</h3>
        ${skillsHTML}
      </div>
    `;
  }

  if(page === "jobs"){
    const jobsHTML = DB.jobs.map(j =>
      `<p>${j.role} - ${j.company}</p>`
    ).join("");

    document.getElementById("page-jobs").innerHTML = `
      <div class="card">
        <h3>Candidatures</h3>
        ${jobsHTML}
        <button onclick="apply()">Postuler</button>
      </div>
    `;
  }

  if(page === "coach"){
    const coachHTML = DB.coaching.map(c =>
      `<p>${c}</p>`
    ).join("");

    document.getElementById("page-coach").innerHTML = `
      <div class="card">
        <h3>Coaching IA</h3>
        ${coachHTML}
      </div>
    `;
  }

}

// Actions

function apply(){
  DB.stats.applications++;
  alert("Candidature envoyée !");
  loadPageData("dashboard");
}

// Auto login

window.onload = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  if(user){
    DB.user = user;
    goTo("app");
    nav("dashboard");
  }
};
