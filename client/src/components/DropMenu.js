import React from 'react';
import '../style/dropmenu.css';

const DropMenu = () => {
  return (
    <div class="templates_buttons-container">
      <div class="templates_buttons">
        <div class="templates_intro-button-text">
          {/* BUTTON-1 */}
          <nav>
            <ul>
              <li>
                <div class="down_text">
                  Wszystkie szablony
                  <i class="down1" />
                </div>
                <ul>
                  <li>
                    <div class="dropMenu_main-container">
                      {/* BOX-1 */}
                      <div class="dropMenu_box">
                        <div class="dropMenu_container">
                          <div class="dropMenu_main-text">Biznes</div>
                          <div class="dropMenu_container-text">
                            <div class="menu_text-disabled">Konsultacje i szkolenia</div>
                            <div class="menu_text-disabled">Konserwacja techniczna i serwisowa</div>
                            <div class="menu_text-disabled">Reklama i marketing</div>
                            <div class="menu_text-disabled">Technologia i aplikacje</div>
                            <div class="menu_text-disabled">Nieruchomość</div>
                            <div class="menu_text-disabled">Finanse i orzecznictwo</div>
                            <div class="menu_text-disabled">Samochody i pojazdy</div>
                          </div>
                        </div>
                      </div>
                      <div class="dropMenu_border " />
                      {/* BOX-2 */}
                      <div class="dropMenu_box">
                        <div class="dropMenu_container">
                          <div class="dropMenu_main-text">Zdrowie i samopoczucie</div>
                          <div class="dropMenu_container-text">
                            <div class="menu_text-disabled">Zdrowie</div>
                            <div class="menu_text-disabled">Sport i fitness</div>
                          </div>
                          <div class="dropMenu_main-text">Landings</div>
                          <div class="dropMenu_container-text">
                            <div class="menu_text-disabled">Wkrótce otwarcie</div>
                            <div class="menu_text-disabled">Strona promocyjna</div>
                            <div class="menu_text-disabled">Profesjonalne CV</div>
                          </div>
                        </div>
                      </div>
                      <div class="dropMenu_border" />
                      {/* BOX-3 */}
                      <div class="dropMenu_box">
                        <div class="dropMenu_container">
                          <div class="dropMenu_main-text">Moda i styl</div>
                          <div class="dropMenu_container-text">
                            <a class="link_dropMenu" href="/templates/fashion">Moda</a>
                            <a class="link_dropMenu" href="/templates/accessories">Akcesoria</a>
                          </div>
                          <div class="dropMenu_main-text">Podróż i turystyka</div>
                          <div class="dropMenu_container-text">
                            <div class="menu_text-disabled">Hotele i minihotele</div>
                            <div class="menu_text-disabled">Apartamenty i hostele</div>
                            <div class="menu_text-disabled">Usługi turystyczne</div>
                          </div>  
                        </div>
                      </div>
                      <div class="dropMenu_border" />
                      {/* BOX-4 */}
                      <div class="dropMenu_box">
                        <div class="dropMenu_container">
                          <div class="dropMenu_main-text">Restauracje i jedzenie</div>
                          <div class="dropMenu_container-text">
                            <div class="menu_text-disabled">Catering i kucharze</div>
                            <div class="menu_text-disabled">Restauracja</div>
                            <div class="menu_text-disabled">Kawiarnie i piekarnie</div>
                            <div class="menu_text-disabled">Bar i klub</div>
                            <div class="menu_text-disabled">Jedzenie i napoje</div>
                          </div>
                          <div class="dropMenu_main-text">Piękno i włosy</div>
                          <div class="dropMenu_container-text">
                            <div class="menu_text-disabled">Makijaż i kosmetyki</div>
                            <div class="menu_text-disabled">Włosy</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        {/* BUTTON-2 (in CSS use 'mod-2' to add new styles ) */}
        <nav>
          <ul>
            <li>
              <div class="down_text mod-2222">
                Sklepy internetowy
                <i class="down1" />
              </div>
              <ul>
                <li>
                  <div class="dropMenu_main-container mod-2">
                    <div class="dropMenu_box mod-222">
                      <div class="dropMenu_container">
                        <div class="dropMenu_main-text">Sklepy internetowy</div>
                        <div class="dropMenu_container-text mod-22">
                          <div class="menu_text">Moda i odzież</div>
                          <div class="menu_text-disabled">Biżuteria i akcesoria</div>
                          <div class="menu_text-disabled">Produkty i materiały</div>
                          <div class="menu_text-disabled">Dom i wystrój</div>
                          <div class="menu_text-disabled">Nieruchomość</div>
                          <div class="menu_text-disabled">Sport i aktywny </div>
                          <div class="menu_text-disabled">Elektronika</div>
                          <div class="menu_text-disabled">Książki</div>
                          <div class="menu_text-disabled">Samochody</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* BUTTON-3 (in CSS use 'mod-3' to add new styles ) */}
        <nav>
          <ul>
            <li>
              <div class="down_text mod-2222">
                Wspólnota
                <i class="down1" />
              </div>
              <ul class="mod-33">
                <li style={{display: 'flex'}}>
                  <div class="dropMenu_main-container mod-2">
                    <div class="dropMenu_box mod-222">
                      <div class="dropMenu_container">
                        <div class="dropMenu_main-text">Edukacja</div>
                        <div class="dropMenu_container-text mod-22">
                          <div class="menu_text-disabled">Szkoła i uczelnie</div>
                          <div class="menu_text-disabled">Edukacja online</div>
                          <div class="menu_text-disabled">Zajęcia i kursy</div>
                        </div>
                        <div class="dropMenu_main-text">Wspólnota</div>
                        <div class="dropMenu_container-text mod-22">
                          <div class="menu_text-disabled">Religia</div>
                          <div class="menu_text-disabled">Organizacje</div>
                          <div class="menu_text-disabled">Forum internetowe</div>
                        </div>
                      </div>
                    </div>
                    <div class="dropMenu_border mod-3" />
                  </div>
                  <div class="dropMenu_main-container mod-2">
                    <div class="dropMenu_box mod-222">
                      <div class="dropMenu_container">
                        <div class="dropMenu_main-text">Środki</div>
                        <div class="dropMenu_container-text mod-22">
                          <div class="menu_text-disabled">Ślub</div>
                          <div class="menu_text-disabled">Święta i uroczystości</div>
                          <div class="menu_text-disabled">Konferencje i seminaria</div>
                          <div class="menu_text-disabled">Organizacja imprez</div>
                          <div class="menu_text-disabled">Miejsca przeprowadzenia</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DropMenu;
