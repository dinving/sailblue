<template>
  <div>
    <form class="test" v-show="isTest" v-on:submit.prevent>
      <h1>Kolik plastu spotřebuješ za rok?</h1>
      <label for="pet">
        1. Kolik
        <strong>plastových lahví</strong> za měsíc průměrně spotřebuješ? Myslíme měkkou láhev 250 ml až 2 l.
      </label>
      <img src="assets/img/pet.jpg" alt="pet" />
      <input class="pole" id="pet" type="number" v-model.number="pet" />
      kusů
      <label for="bpe">
        2. Kolik
        <strong>pevných plastových lahví</strong> za měsíc průměrně spotřebuješ? Myslíme pevnou od pracího gelu nebo jaru.
      </label>
      <img src="assets/img/hdpe.jpg" alt="hdpe" />
      <input class="pole" id="bpe" type="number" v-model.number="bpe" /> kusů
      <label for="taska">
        3. Kolik
        <strong>tenkých plastových tašek nebo pytlíků</strong> za měsíc průměrně spotřebuješ?
      </label>
      <img src="assets/img/taska.jpg" alt="taska" />
      <input class="pole" id="taska" type="number" v-model.number="taska" /> kusů
      <label for="fork">
        4. Kolik
        <strong>jednorázových plastových příborů, tácků nebo kelímků</strong> za měsíc průměrně spotřebuješ? Myslíme i jako obal z obchodu?
      </label>
      <img src="assets/img/fork.jpg" alt="fork" />
      <input class="pole" id="fork" type="number" v-model.number="fork" /> kusů
      <label for="snack">
        5. Kolik
        <strong>plastových obalů od sušenek, ovoce, sýrů</strong> za měsíc průměrně spotřebuješ? Myslíme i jako obal z obchodu?
      </label>
      <img src="assets/img/snack.jpg" alt="snack" />
      <input class="pole" id="snack" type="number" v-model.number="snack" />
      kusů
      <label for="obed">
        6. Kolik
        <strong>polystyrenových/pěnových boxů na oběd</strong> za měsíc průměrně spotřebuješ?
      </label>

      <img src="assets/img/obed.jpg" alt="obed" />
      <input class="pole" id="obed" type="number" v-model.number="obed" /> kusů
      <br />
      <label for="straw">
        7. Kolik
        <strong>brček</strong> za měsíc průměrně spotřebuješ?
      </label>
      <br />

      <img src="assets/img/straw.jpg" alt="straw" />
      <input class="pole" id="straw" type="number" v-model.number="straw" /> kusů
      <label for="waste">
        8. Kolik
        <strong>dalších plastů</strong> odhadem za měsíc průměrně spotřebuješ? Myslíme další plastové obaly, tyčinky na čištění uší, jednorázové plastove předměty.
      </label>
      <br />

      <img src="assets/img/waste.jpg" alt="waste" />
      <input class="pole" id="waste" type="number" v-model.number="waste" />
      gramů.
      <button class="button" type="submit" v-on:click="vyhodnot">Spočítej</button>
    </form>
    <div class="result" v-show="!isTest">
      <h1>Kolik spotřebuješ plastu?</h1>Tvůj výsledek je
      <p class="hard">{{novecislo }}</p>&shy gramů plastu za rok.
      <p>
        To je
        <strong>{{cislokg}}</strong> kilogramů za rok.
        Nebo také
        <strong>{{cislozaden}} gramů plastu každý den.</strong>
      </p>
      <p>Každý rok se do oceánu dostane více než 8 milionů tun plastů. To je jako kdybychom do moře každou minutu vyklopili plný nákladní vůz plastu. Nebo si představte přes 200 miliard plastových lahví za rok. Plasty zůstávají v ekosystému řadu let a každý den poškozují mořské živočichy. Podle některých odhadů při rychlosti, s jakou vyhazujeme produkty z plastů, bude do roku 2050 v oceánu více plastů než ryb a odhadem 99 procent mořských ptáků bude mít v útrobách úlomky plastů.</p>
      <h2>Co teď?</h2>
      <h3>Možností je hodně a některé nás nic nestojí!</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "Test",

  data() {
    return {
      cislo: [
        {
          type: "number",
          required: true
        }
      ],
      novecislo: 0,
      cislozaden: 0,
      cislokg: 0,

      isTest: true,
      pet: [
        {
          type: "number",
          required: true
        }
      ],
      bpe: [
        {
          type: "number",
          required: true
        }
      ],
      taska: [
        {
          type: "number",
          required: true
        }
      ],
      fork: [
        {
          type: "number",
          required: true
        }
      ],
      snack: [
        {
          type: "number",
          required: true
        }
      ],
      obed: [
        {
          type: "number",
          required: true
        }
      ],
      straw: [
        {
          type: "number",
          required: true
        }
      ],
      waste: [
        {
          type: "number",
          required: true
        }
      ]
    };
  },
  // mozna mounted
  methods: {
    vyhodnot() {
      this.isTest = !this.isTest;
      this.novecislo =
        Math.round(
          this.pet * 28 +
            this.bpe * 95 +
            this.taska * 0.3 +
            this.fork * 4 +
            this.snack * 15 +
            this.obed * 20 +
            this.straw * 0.5 +
            this.waste
        ) * 12;
      this.cislokg = this.novecislo / 1000;
      this.cislozaden = Number(this.novecislo / 365).toFixed(2);
      return this.novecislo;
      return this.cislokg;
      return this.cislozaden;
    },

    vyh() {
      this.$emit("vyh");
    }
  }
};
</script>

<style scoped>
.pole {
  border: solid 2px #071d49;
  border-radius: 4px;
  margin: 10px 0 10px 0px;
  width: 120px;
}
.button {
  background-color: #24cae7;
  border: #24cae7;
  border-radius: 10px;
  font-weight: 700;
  font-size: 18px;
  padding: 3px 10px 3px 10px;
  margin-left: 20px;
}
.test {
  padding: 40px;
  max-width: 750px;
  margin-left: 120px;
  margin-top: 40px;
  background-color: white;
  border-radius: 5px;
}
img {
  max-width: 200px;
  padding: 20px;
  text-align: center;
  margin-right: 10px;
}
.result {
  padding: 40px;
  max-width: 750px;
  margin-left: 120px;
  margin-top: 40px;
  background-color: white;
  border-radius: 5px;
  font: 600;
}
.hard {
  color: orange;
  font-size: 22px;
  font-weight: bold;
  display: inline-block;
}
</style>