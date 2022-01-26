const developersData = [
  {
    name: "Edgar Luna",
    description: "texto de relleno",
    projectImg: "assets/images/cq.webp",
    altImg: "Proyecto de Edgar Luna",
    projectDescription: "texto de relleno",
    contact: {
      github: "https://github.com/3dgar-xd",
      email: "mailto:ejlc2001@gmail.com",
      portfolio: "https://3dgar-xd.github.io/Portafolio/",
    },
  },
  // aqui se añaden más
];
developersData.forEach((dev) => {
  document.querySelector("#developerProject").innerHTML += `
  <details>
  <!-- lista de desarrolladores -->
    <summary>${dev.name}</summary>
    <p>
  <!-- descripcion de desarrolladores -->
      ${dev.description}
    </p>
    <figure>
  <!-- imagen de su mejor/es proyecto/s -->
        <img src=${dev.projectImg} alt=${dev.altImg}/>
        <figcaption>
  <!-- descripcion de su mejor/es proyecto/s -->
          ${dev.projectDescription}
        </figcaption>
    </figure>
  </details> `;

  document.querySelector("#developerContact").innerHTML += `
  <details>
  <!-- lista de contacto -->
    <summary>Github</summary>
  <!-- lista de devs -->
  <a href=${dev.contact.github}>${dev.name}</a>
  </details>

  <details>
  <summary>Email</summary>
  <a href=${dev.contact.email}>${dev.name}</a>
  </details>

  <details>
  <summary>Portfolio</summary>
  <a href=${dev.contact.portafolio}>${dev.name}</a>
  </details>
    `;
});
