<template>
  <div class="roadmap-wrapper">
    <h3>Algemeen</h3>
    <ul>
      <li>Eerste (visuele) bugs fixen</li>
      <li>Alles goed leesbaar krijgen op verschillende devices</li>
      <li>Goed logo fixen</li>
      <li>Header herbouwen, neemt nu te veel ruimte in</li>
      <li>
        Alle stats verzamelen voor de schillende pagina's dus: goals, assists,
        leeftijden etc.
      </li>
    </ul>
    <h3>Home (deze pagina)</h3>
    <ul>
      <li>Nieuws tonen (nieuwe speler oid.)</li>
      <li>Eerstvolgende wedstijd tonen</li>
      <li>Aanwezigheid spelers</li>
      <li>Een opstelling creator met de aangemelde spelers</li>
    </ul>
    <h3>Spelers</h3>
    <ul>
      <li>Betere fotos</li>
      <li>Alles is net ff te klein of onleesbaar, dat fixen dus.</li>
      <li>Header pas laten verschijnen als een spelers is aangeklikt</li>
      <li>Fotos eventueel laten draaien als ze naar positie schuiven</li>
      <li>Soepelere overgang om terug naar spelerovergang te gaan</li>
    </ul>
    <h3>Stats</h3>
    <ul>
      <li>Stats verzamelen</li>
      <li>Alex' stats verwerken</li>
      <li>Uitschuifmenus voor elke stats</li>
      <li>
        Menus: stand competitie, goals, assists, minutengespeeld dat soort shit
      </li>
    </ul>
    <h3>Wedtrijden</h3>
    <ul>
      <li>Minder rommelig laten ogen</li>
      <li>Zoek functie</li>
      <li>Andere pijltjes</li>
      <li>
        Zorgen dat je ook kan scrollen ipv alleen de pijltjes te gebruiken
      </li>
      <li>icoontje bij bekerwedstrijden</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  beforeMount() {
    document.getElementById("aap").innerHTML = "roadmap site";
  },
};
</script>

<style scoped>
.roadmap-wrapper {
  margin: 0 auto;
  width: 300px;
  text-align: left;
  overflow-y: auto;
}
</style>
