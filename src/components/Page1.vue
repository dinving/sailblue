<template>
  <div class="content">
    <div class="kontejner">
      <div class="textcontent">
        <h1>Co je Sail Blue?</h1>
        <br />
        <p>Oceány se dusí a bojují s problémy. Odpad zamořuje pláže, hromadí se v modrých hlubinách i na neobydlených ostrovech. Moře je znečištěné toxickými látkami a jeho rovnováhu narušuje i nešetrný rybolov.</p>

        <p>
          <strong>Pojďme to spolu změnit.</strong>
        </p>

        <p>
          Připojte se k
          <strong>jachtařům z yachting&deg;com</strong>. Společně můžeme
          <strong>zachovat oceány modré</strong> a pláže čisté. Aktivní a odpovědné jachtaře podpoříme.
        </p>

        <p>
          <strong>Sail&nbsp;Blue!</strong>
        </p>
        <div class="contentcolor">
          <p>
            Sail Blue je
            <b>neformální iniciativa</b> zaměřená na podporu odpovědného přístupu, ochranu a čištění pláží, pobřeží i podmořského světa.
          </p>

          <ul>
            <li>
              Podporujeme všechny jachtaře hrdiny, kteří
              <strong>při svých plavbách</strong> šetří životní prostředí,
              <strong>čistí pláže</strong> a chrání oceán
            </li>
            <li>
              Šíříme
              <strong>osvětu, inspirujeme</strong> a nadšence propojujeme
            </li>
            <li>
              <strong>Monitorujeme</strong> problematická místa i pozitivní příklady
            </li>
            <li>
              Organizujeme
              <strong>společné ekologicky odpovědné plavby a akce</strong>
            </li>
          </ul>
        </div>
        <h2>Jak se zapojit?</h2>

        <ul>
          <li>
            <b>Na vlastní pěst.</b> Propojte svou dovolenou na lodi s čištěním pláží, odpovědným plachtěním nebo mapováním míst i akcí. Aktivní jachtaře podpoříme.
          </li>
        </ul>

        <ul>
          <li>
            <strong>Sdílejte myšlenku.</strong> Dejte najevo, že vám na oceánech záleží, a pomozte nám šířit myšlenku mezi ostatní jachtaře a propojovat je. Dodáme vám krásnou vlaječku na loď i spoustu nápadů, jak se zapojit.
          </li>
        </ul>

        <ul>
          <li>
            <strong>Plujte v tom s námi.</strong> Přidejte se ke společné &nbsp;flotilové plavbě. Užijeme si skvělý jachting a vrátíme plážím neposkvrněnost.
          </li>
        </ul>
      </div>
      <div class="kont">
        <img src="assets/img/lod.jpg" alt="lod" />
      </div>
    </div>
    <div
      class="apel"
    >Chcete se zapojit? Dejte nám o sobě vědět a získejte podporu yachting&deg;com. I malý krok se počítá.</div>
    <div class="textcontent2">
      <h2>Proč vzniklo Sail Blue?</h2>

      <p>Oceány a moře pokrývají více než 70 % naší planety, dávají nám život i překrásné zážitky. Aby to tak bylo i nadále, potřebujeme změnu.</p>
    </div>
    <div class="kontejner">
      <div class="textcontent">
        <ul>
          <li>
            Každý rok se do oceánu dostane
            <u>
              <a href="https://www.yachting.com/cs/novinky-a-clanky/plachteni-v-oceanu-plastu">
                <strong>více než 8 milionů tun plastů</strong>
              </a>
            </u>
            <strong>.</strong> Podle posledních studií je číslo možná vyšší&nbsp;&ndash; až 14 milionů tun ročně.
          </li>
          <li>
            Odpad i &ldquo;sítě duchů&rdquo;
            <strong>zabíjí</strong> každý rok až milion mořských ptáků, 100 tisíc mořských savců, mořských želv a nespočet ryb.
          </li>
          <li>
            Podle některých odhadů bude do roku 2050 v oceánu
            <strong>více plastů než ryb</strong>a&nbsp; 99 % mořských ptáků bude mít v útrobách úlomky plastů.
          </li>
          <li>
            Do vody se dostává řada
            <strong>toxických látek</strong>. Usazují se v těle živočichů, zabíjí je nebo negativně ovlivňují reprodukční orgány, což opět ohrožuje populaci ryb, ptáků i dalších zvířat.
          </li>
          <li>
            Palčivým problémem je&nbsp;i
            <strong>nešetrný rybolov</strong>a přelovování některých druhů. A pro člověka samozřejmě kontaminace konzumovaných ryb.
          </li>
          <li>
            Největším problémem je
            <strong>změna klimatu,</strong>která dopadá i na mnoho jachtařských lokalit. Zvyšuje se teplota oceánů, tají ledovce, narůstá kyselost, snižuje se okysličení a oceány se dusí.
          </li>
        </ul>
      </div>
      <div class="kont">
        <img src="assets/img/white-sand-beach-bc8d1d.jpg" alt="lod" />
      </div>
    </div>
    <p>Pojďme do toho společně. Spolupracovat, diskutovat, mapovat eco friendly mariny, znečištěná místa a všechny smysluplné akce a iniciativy.&nbsp; Napište nám své nápady, jak změnit stav oceánů chováním na moři, nebo rovnou pošlete fotky ze svých akcí jako inspiraci pro ostatní.</p>
    <p>Oceán je pro nás jachtaře tím nejkrásnějším živlem. Každý malý krok, který pomůže snížit jeho znečištění a zlepšit jeho stav, se počítá.</p>
    <p>
      <strong>Děkujeme</strong>.
    </p>
    <br />
  </div>
</template>
  <script>
import Maps from "./Maps.vue";
import Carousel from "./Carousel.vue";
import Card from "./Card.vue";

export default {
  name: "Page1",
  components: {
    Maps,
    Carousel,
    Card
  }
};
</script>
<style scoped>
body {
  background-color: white;
}
.content {
  background-color: white;
  margin: 0 50px 0 50px;
  padding-top: 40px;
  padding-left: 60px;
}

.kontejner {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: flex-start;
}

.textcontent {
  width: 50%;
  padding: 20px 40px 20px 40px;
}
.textcontent2 {
  padding: 20px 40px 20px 40px;
}
.kont {
  width: 50%;

  padding: 20px 40px 20px 40px;
}

h1 {
  float: none;
}
.contentcolor {
  background-color: #70b9f542;
  padding: 20px 40px 20px 40px;
  border-left: solid 2px #03467e42;
  margin-top: 10px;
  margin-bottom: 10px;
}
img {
  width: 90%;
}
/* float: right; */
/* ;
  overflow: auto;
  padding: 0 0 0 30px;
}
*/
h3 {
  float: none;
  padding-top: 10px;
}
h2 {
  float: none;
  padding-top: 10px;
  padding-bottom: 10px;
}
.apel {
  padding: 20px;

  font-size: larger;
  font-weight: bolder;
  color: #071d49;
  border-left: solid 3px #071d49;
  margin-left: 20px;
}
</style>