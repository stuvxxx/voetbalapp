import { createStore } from "vuex";

export default createStore({
  state: {
    active: "",
    teams: {
      Zeeburgia: {
        logo: "./assets/zeeburgia-logo.png",
        nmr: 10,
      },
      JOS: {
        logo: "./assets/jos-logo.png",
        nmr: 4,
      },
      Fortius: {
        logo: "./assets/fortius-logo.png",
        nmr: 3,
      },
      FIT: {
        logo: "./assets/fit-logo.png",
        nmr: 7,
        spelers: {
          marc: {
            naam: "Marc Zwiers",
            leeftijd: 37,
            foto: "",
            pos: "CV",
            voet: "Rechts",
            goals: 0,
            assists: 0,
            kaarten: 0,
            mins: 180,
          },
          daniel: {
            naam: "Daniel Aw",
            leeftijd: "?",
            foto: "",
            pos: "VM",
            voet: "Rechts",
            goals: 0,
            assists: 0,
            kaarten: 0,
            mins: 180,
          },
          alex: {
            naam: "Alexander Bulthuis",
            leeftijd: 42,
            foto: "",
            pos: "RB",
            voet: "Rechts",
            goals: 0,
            assists: 0,
            kaarten: 0,
            mins: 180,
          },
          sjoerd: {
            naam: "Sjoerd Droger",
            leeftijd: "?",
            foto: "",
            pos: "LB",
            voet: "Rechts",
            goals: 0,
            assists: 0,
            kaarten: 0,
            mins: 0,
          },
          fakkel: {
            naam: "Martijn Fakkeldij",
            leeftijd: "?",
            foto: "",
            pos: "CV, VM, SP, MM, OP, SS",
            voet: "Rechts",
            goals: 0,
            assists: 1,
            kaarten: 0,
            mins: 160,
          },
          isani: {
            naam: "Isani Franzua Martinez",
            leeftijd: "?",
            foto: "",
            pos: "LB, CV, VM",
            voet: "Rechts",
            goals: 0,
            assists: 0,
            kaarten: 0,
            mins: 90,
          },
          pepijn: {
            naam: "Pepijn Van Hulst",
            leeftijd: "?",
            foto: "",
            pos: "LV, LB, CV",
            voet: "Rechts",
            goals: 0,
            assists: 0,
            kaarten: 0,
            mins: 180,
          },
          joep: {
            naam: "Joep Maenen",
            leeftijd: "?",
            foto: "",
            pos: "CV",
            voet: "Rechts",
            goals: 0,
            assists: 0,
            kaarten: 0,
            mins: 0,
          },
          oscar: {
            naam: "Oscar Verheul",
            leeftijd: "?",
            foto: "",
            pos: "RV",
            voet: "Rechts",
            goals: 1,
            assists: 0,
            kaarten: 0,
            mins: 180,
          },
          jip: {
            naam: "Jip Verwiel",
            leeftijd: "?",
            foto: "",
            pos: "VM, AM",
            voet: "Rechts",
            goals: 1,
            assists: 0,
            kaarten: 0,
            mins: 180,
          },
          bas: {
            naam: "Bas Voorwinde",
            leeftijd: 39,
            foto: "",
            pos: "SP",
            voet: "Rechts",
            goals: 1,
            assists: 0,
            kaarten: 0,
            mins: 160,
          },
          tim: {
            naam: "Tim Wagemakers",
            leeftijd: "?",
            foto: "",
            pos: "KP",
            voet: "Links",
            goals: 0,
            assists: 0,
            kaarten: 0,
            mins: 180,
          },
          lauran: {
            naam: "Lauran Ypinga",
            leeftijd: "?",
            foto: "",
            pos: "AM, VM",
            voet: "Rechts",
            goals: 0,
            assists: 0,
            kaarten: 0,
            mins: 90,
          },
          metin: {
            naam: "Metin van Zijl",
            leeftijd: "?",
            foto: "",
            pos: "AM, LV",
            voet: "Tweebenig",
            goals: 0,
            assists: 0,
            kaarten: 0,
            mins: 0,
          },
          tomh: {
            naam: "Tom Haarts",
            leeftijd: "?",
            foto: "",
            pos: "VM",
            voet: "Rechts",
            goals: 0,
            assists: 0,
            kaarten: 0,
            mins: 0,
          },
          tomn: {
            naam: "Tom van der Velde",
            leeftijd: "?",
            foto: "",
            pos: "RB, LB",
            voet: "Rechts",
            goals: 0,
            assists: 0,
            kaarten: 0,
            mins: 30,
          },
          pelle: {
            naam: "Pelle",
            leeftijd: "?",
            foto: "",
            pos: "RB, RV, VM",
            voet: "Rechts",
            goals: 0,
            assists: 0,
            kaarten: 0,
            mins: 0,
          },
        },
      },
    },
    wedstrijden: {
      ZeeburgiaFIT: {
        datum: "04-09-2022",
        tijdstip: "11:30",
        uitslag: {
          thuis: 1,
          uit: 1,
        },
        goals: [
          {
            minuut: 44,
            score: "thuis",
          },
          {
            minuut: 65,
            score: "uit",
            goalwie: "e.d.",
            assistwie: "Fakkel",
          },
        ],
      },
      FITJOS: {
        datum: "11-09-2022",
        uitslag: {
          thuis: 4,
          uit: 2,
        },
        goals: [
          {
            minuut: 25,
            score: "thuis",
            goalwie: "Bas",
            assistwie: "?",
          },
          {
            minuut: 35,
            score: "thuis",
            goalwie: "Invaller",
            assistwie: "?",
          },
          {
            minuut: 45,
            score: "uit",
          },
          {
            minuut: 60,
            score: "thuis",
            goalwie: "Oscar",
            assistwie: "?",
          },
          {
            minuut: 80,
            score: "thuis",
            goalwie: "Jip",
            assistwie: "?",
          },
          {
            minuut: 85,
            score: "uit",
          },
        ],
      },
      FITFORTIUS: {
        datum: "18-09-2022",
        uitslag: {
          thuis: undefined,
          uit: undefined,
        },
        goals: [],
      },
    },
  },
  getters: {
    getAllWedstrijden() {
      return this.state.wedstrijden;
    },
  },
  mutations: {
    changeActiveWedstrijden(state) {
      state.active = state;
    },
  },
  actions: {},
  modules: {},
});
