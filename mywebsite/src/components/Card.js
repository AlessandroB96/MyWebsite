import React from "react";

function Card({ projectNumber, projectTitle, projectDescription, url, value }) {
  return (
    <button class="btn" id="hoverbig" value={value}>
      <a class="card-link" target="google" href={url}>
        <section class={projectNumber} id="allcards">
          <p class="cards-title">{projectTitle}</p>
          <p class="cards">{projectDescription} </p>
        </section>
      </a>
    </button>

  );
}

export default Card;
