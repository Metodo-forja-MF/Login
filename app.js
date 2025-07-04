// Inicialização do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBKtKrRP4AjLHcdeEdyTlTZC9hHdv5y7no",
  authDomain: "metodo-forja.firebaseapp.com",
  projectId: "metodo-forja",
  storageBucket: "metodo-forja.appspot.com",
  messagingSenderId: "949719386034",
  appId: "1:949719386034:web:5c015b5fbe082821ea86ab"
};

firebase.initializeApp(firebaseConfig);

// Lógica de login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita o recarregamento da página

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      // Redireciona para a área de membros após login bem-sucedido
      window.location.href = "https://metodo-forja-mf.github.io/membros/";
    })
    .catch((error) => {
      alert("Erro no login: " + error.message);
    });
});
