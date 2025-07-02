
// Configuração do Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Função de login
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      // Redireciona após login bem-sucedido
      window.location.href = "https://metodo-forja-mf.github.io/modulos/";
    })
    .catch((error) => {
      alert("Erro no login: " + error.message);
    });
});
