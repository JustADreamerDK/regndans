var faq = {
    template: `<div>
   <div class="faq__button" id="faq__button1">
                  <h3></h3><h3>{{ sporgsmaal }}</h3><h3>▼</h3>
              </div>
              <div class="faq__button--luk" id="faq__button--luk1">
                  <h3></h3><h3>{{ sporgsmaal }}</h3><h3>▼</h3>
              </div>
              <div class="faq__answer" id="faq__answer1">
                  <p>{{ svar }}</p>
              </div>
              </div>
  `,
    data: function() {
      return {
        sporgsmaal: 'Hvad betyder farverne?',
        svar: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut ultrices magna quis imperdiet ornare. Pellentesque sollicitudin, nulla a mattis eleifend, nibh metus suscipit justo, sit amet interdum est magna eget felis. Nunc posuere risus sed finibus suscipit. Donec vel justo eu tellus scelerisque laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Maecenas dui enim, dictum at porta euismod, volutpat sit amet risus.'
      }
    },
  };
  new Vue({
    el: '#faq',
    components: {
      'faq': faq
    }
  })
  