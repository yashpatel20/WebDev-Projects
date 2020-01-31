function renderContact(renderHook) {
    renderHook.innerHTML = ``;
    const contact = `<section class="contact">
    <p class="contact__paragraph">Contact us!</p>
    <p class="contact__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
      dicta sint optio obcaecati rem dolor ad provident quisquam tenetur
      illum at accusantium consequatur incidunt, maiores, nobis magnam
      voluptatem et iusto?Facilis saepe in, soluta exercitationem incidunt
      praesentium ullam repellendus provident id eligendi magnam, modi
      harum, perspiciatis omnis quas possimus accusamus! Delectus harum
      maxime aliquid ratione vel libero voluptatibus blanditiis magni?
    </p>
  </section>`;
    renderHook.innerHTML = contact;
  };
  
export default renderContact; 