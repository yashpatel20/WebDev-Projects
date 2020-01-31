function renderRecommended(renderHook) {
    renderHook.innerHTML = ``;
    const recommended = `<section class="featured">
          <p class="featured__paragraph">Featured dishes</p>
          <div class="featured__tabs">
            <div class="featured__tab">
              <div class="featured__img-container">
                <img src="./images/first.png" alt="" class="featured__img" />
              </div>
              <div class="featured__text-container">
                <p class="featured__name">Fugiat nulia sint</p>
                <p class="featured__price">$30</p>
              </div>
            </div>
            <div class="featured__tab">
              <div class="featured__img-container">
                <img src="./images/second.png" alt="" class="featured__img" />
              </div>
              <div class="featured__text-container">
                <p class="featured__name">Fugiat nulia sint</p>
                <p class="featured__price">$30</p>
              </div>
            </div>
            <div class="featured__tab">
              <div class="featured__img-container">
                <img src="./images/third.png" alt="" class="featured__img" />
              </div>
              <div class="featured__text-container">
                <p class="featured__name">Fugiat nulia sint</p>
                <p class="featured__price">$30</p>
              </div>
            </div>
            <div class="featured__tab">
              <div class="featured__img-container">
                <img src="./images/fourth.png" alt="" class="featured__img" />
              </div>
              <div class="featured__text-container">
                <p class="featured__name">Fugiat nulia sint</p>
                <p class="featured__price">$30</p>
              </div>
            </div>
          </div>
        </section>`;
    renderHook.innerHTML = recommended;
  };

  export default renderRecommended;