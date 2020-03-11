function renderMenu(renderHook) {
    renderHook.innerHTML = ``;
    console.log('working');
    console.log(renderHook);
    const menu = `<section class="menu">
        <h1 class="menu__title">The Menu</p>
        <div class="menu__dishes">
          <div class="menu__dish">
            <p class="menu__name">Volluplate cillum fugiat</p>
            <p class="menu__price">$50</p>
            <p class="menu__description">Cheese, tomato, mushrooms, onions</p>
          </div>
          <div class="menu__dish">
            <p class="menu__name">Metus varius laoreet</p>
            <p class="menu__price">$17</p>
            <p class="menu__description">Chicken, mozzarella cheese, onions</p>
          </div>
          <div class="menu__dish">
            <p class="menu__name">Volluplate cillum fugiat</p>
            <p class="menu__price">$50</p>
            <p class="menu__description">Cheese, tomato, mushrooms, onions</p>
          </div>
          <div class="menu__dish">
            <p class="menu__name">Metus varius laoreet</p>
            <p class="menu__price">$17</p>
            <p class="menu__description">Chicken, mozzarella cheese, onions</p>
          </div>
          <div class="menu__dish">
            <p class="menu__name">Volluplate cillum fugiat</p>
            <p class="menu__price">$50</p>
            <p class="menu__description">Cheese, tomato, mushrooms, onions</p>
          </div>
          <div class="menu__dish">
            <p class="menu__name">Metus varius laoreet</p>
            <p class="menu__price">$17</p>
            <p class="menu__description">Chicken, mozzarella cheese, onions</p>
          </div>
          <div class="menu__dish">
            <p class="menu__name">Volluplate cillum fugiat</p>
            <p class="menu__price">$50</p>
            <p class="menu__description">Cheese, tomato, mushrooms, onions</p>
          </div>
          <div class="menu__dish">
            <p class="menu__name">Metus varius laoreet</p>
            <p class="menu__price">$17</p>
            <p class="menu__description">Chicken, mozzarella cheese, onions</p>
          </div>
        </div>
      </section>`;
    renderHook.innerHTML = menu;
  };

  export default renderMenu;