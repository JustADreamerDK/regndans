var card = {
    template: `
   <div class="card">
   <div class="card__forside" id="card__forside1">
       <h5>
           {{ teknologi }}
       </h5>
       <h4>
           {{ forklaring }}
       </h4>
   </div>
   <div class="card__bagside" id="card__bagside1">
       <h5>
           Eksempler:
       </h5>
       <ul>
           <li>
               {{ eksempel }}
           </li>
       </ul>
   </div>
  </div>
  `,
    data: function() {
      return {
        teknologi: 'Forstår lyd',
        forklaring: 'Kan gennemføre meningsfyldt kommunikation gennem samtale eller tekst',
        eksempel: 'Chat bots som Siri, Alexa og Google home. En mere avanceret version er veninden Hikari, som laver billeder på en lille skærm. Systemet benytter mikrofoner og kameraer. Sensorer registrerer temperatur og bevægelse, hvilket gør en mere personlig interaktion mulig.'
      }
    },
  };
  new Vue({
    el: '#card',
    components: {
      'card': card
    }
  })
  