<template>
  <div class="wedstrijd-wrapper">
    <WedstrijdCard :wedstrijden="wedstrijden" />
  </div>
  <div class="scroll-nav">
    <img @click="back" id="arrow-back" src="../assets/arrow-left.png" />
    <div id="under-text">{{ dateInView }}</div>
    <img @click="forward" id="arrow-forward" src="../assets/arrow-right.png" />
  </div>
</template>

<script>
import WedstrijdCard from "@/components/WedstrijdCard.vue";
export default {
  name: "WedstrijdenView",
  components: {
    WedstrijdCard,
  },
  data() {
    return {
      date: "",
      dateInView: null,
      dateList: [],
      wedstrijden: [
        {
          id: 1,
          thuis: { team: "Zeeburgia 3", logo: "zeeburgia-logo.png" },
          uit: { team: "FIT 7", logo: "fit-logo.png" },
          datum: "04-09-2022",
          tijdstip: "11:30",
          uitslag: {
            thuis: 1,
            uit: 1,
          },
          beker: true,
          goals: [
            {
              minuut: 44,
              score: "thuis",
              goalwie: "Ahmed",
            },
            {
              minuut: 65,
              score: "uit",
              goalwie: "e.d.",
              assistwie: "Fakkel",
            },
          ],
        },
        {
          id: 2,
          thuis: { team: "FIT 7", logo: "fit-logo.png" },
          uit: { team: "JOS 3", logo: "jos-logo.png" },
          datum: "11-09-2022",
          tijdstip: "15:15",
          uitslag: {
            thuis: 4,
            uit: 2,
          },
          beker: true,
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
              goalwie: "Henk de Peer",
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
              goalwie: "Henk de Peer",
            },
          ],
        },
        {
          id: 3,
          thuis: { team: "FIT 7", logo: "fit-logo.png" },
          uit: { team: "Arsenal 8", logo: "arsenal-logo.png" },
          datum: "25-09-2022",
          tijdstip: "10:00",
          uitslag: {
            thuis: 1,
            uit: 5,
          },
          beker: false,
          goals: [
            {
              minuut: 22,
              score: "uit",
              goalwie: "Kjepper Snip",
            },
            {
              minuut: 35,
              score: "uit",
              goalwie: "Jos Knoopei",
            },
            {
              minuut: 40,
              score: "uit",
              goalwie: "Kjepper Snip",
            },
            {
              minuut: 50,
              score: "thuis",
              goalwie: "????",
            },
            {
              minuut: 60,
              score: "uit",
              goalwie: "Harry Droplul",
            },
            {
              minuut: 65,
              score: "uit",
              goalwie: "Fritsie",
            },
          ],
        },
        {
          id: 4,
          thuis: { team: "Geinburgia 3", logo: "geinburgia-logo.png" },
          uit: { team: "FIT 7", logo: "fit-logo.png" },
          datum: "02-10-2022",
          tijdstip: "10:00",
          uitslag: {
            thuis: 2,
            uit: 2,
          },
          beker: false,
          goals: [
            {
              minuut: 22,
              score: "uit",
              goalwie: "Daniel",
            },
            {
              minuut: 35,
              score: "uit",
              goalwie: "????",
            },
            {
              minuut: 80,
              score: "thuis",
              goalwie: "Joey Doekhie",
            },
            {
              minuut: 93,
              score: "thuis",
              goalwie: "Dave Jansen",
            },
          ],
        },
        {
          id: 5,
          thuis: { team: "FIT 7", logo: "fit-logo.png" },
          uit: { team: "FORTIUS 3", logo: "fortius-logo.png" },
          datum: "04-10-2022",
          tijdstip: "20:00",
          uitslag: {
            thuis: 5,
            uit: 2,
          },
          beker: true,
          goals: [
            {
              minuut: 10,
              score: "thuis",
              goalwie: "????",
              assistwie: "?",
            },
            {
              minuut: 35,
              score: "thuis",
              goalwie: "????",
              assistwie: "?",
            },
            {
              minuut: 46,
              score: "thuis",
              goalwie: "????",
            },
            {
              minuut: 60,
              score: "uit",
              goalwie: "Los Mendos",
              assistwie: "?",
            },
            {
              minuut: 65,
              score: "thuis",
              goalwie: "????",
              assistwie: "?",
            },
            {
              minuut: 75,
              score: "thuis",
              goalwie: "Lauran",
            },
            {
              minuut: 85,
              score: "uit",
              goalwie: "Garcia",
            },
          ],
        },
        {
          id: 6,
          thuis: { team: "FIT 7", logo: "fit-logo.png" },
          uit: { team: "CTO 3", logo: "cto-logo.png" },
          datum: "09-10-2022",
          tijdstip: "10:00",
          uitslag: {
            thuis: 2,
            uit: 6,
          },
          beker: false,
          goals: [
            {
              minuut: 10,
              score: "uit",
              goalwie: "Rene Dolstra",
            },
            {
              minuut: 35,
              score: "uit",
              goalwie: "Roy Bruil",
            },
            {
              minuut: 41,
              score: "thuis",
              goalwie: "????",
            },
            {
              minuut: 60,
              score: "uit",
              goalwie: "Edward Lion",
            },
            {
              minuut: 65,
              score: "uit",
              goalwie: "Stefano Antonia",
              assistwie: "?",
            },
            {
              minuut: 75,
              score: "uit",
              goalwie: "Stefano Antonia",
            },
            {
              minuut: 85,
              score: "uit",
              goalwie: "Tommy Janssen",
            },
            {
              minuut: 86,
              score: "thuis",
              goalwie: "????",
            },
          ],
        },
        {
          id: 7,
          thuis: { team: "G.M'meer 3", logo: "geuzen-logo.png" },
          uit: { team: "FIT 7", logo: "fit-logo.png" },
          datum: "16-10-2022",
          tijdstip: "10:00",
          uitslag: {
            thuis: 8,
            uit: 3,
          },
          beker: false,
          goals: [
            {
              minuut: 10,
              score: "thuis",
              goalwie: "Felix Blom",
            },
            {
              minuut: 12,
              score: "thuis",
              goalwie: "Rik Blekkenhorst",
            },
            {
              minuut: 20,
              score: "thuis",
              goalwie: "Reduane Dahmani",
            },
            {
              minuut: 35,
              score: "thuis",
              goalwie: "Sacha Overmars",
            },
            {
              minuut: 41,
              score: "uit",
              goalwie: "Marc",
            },
            {
              minuut: 43,
              score: "thuis",
              goalwie: "Gianni Beets",
            },
            {
              minuut: 65,
              score: "thuis",
              goalwie: "Sacha Overmars",
              assistwie: "?",
            },
            {
              minuut: 75,
              score: "uit",
              goalwie: "Oscar",
            },
            {
              minuut: 80,
              score: "thuis",
              goalwie: "Felix Blom",
              assistwie: "?",
            },
            {
              minuut: 85,
              score: "uit",
              goalwie: "Fakkel",
            },
            {
              minuut: 88,
              score: "thuis",
              goalwie: "Raz van Houts",
            },
          ],
        },
        {
          id: 8,
          thuis: { team: "FIT 7", logo: "fit-logo.png" },
          uit: { team: "Abcoude 6", logo: "abcoude-logo.png" },
          datum: "30-10-2022",
          tijdstip: "10:00",
          uitslag: {
            thuis: 2,
            uit: 2,
          },
          beker: false,
          goals: [
            {
              minuut: 21,
              score: "thuis",
              goalwie: "????",
            },
            {
              minuut: 65,
              score: "thuis",
              goalwie: "Marc",
            },
            {
              minuut: 75,
              score: "uit",
              goalwie: "Rodney Griffioen",
            },
            {
              minuut: 89,
              score: "uit",
              goalwie: "Sander Bon",
            },
          ],
        },
        {
          id: 9,
          thuis: { team: "Hoofddorp 8", logo: "hoofddorp-logo.png" },
          uit: { team: "FIT 7", logo: "fit-logo.png" },
          datum: "06-11-2022",
          tijdstip: "10:00",
          uitslag: {
            thuis: 6,
            uit: 0,
          },
          beker: false,
          goals: [
            {
              minuut: 21,
              score: "thuis",
              goalwie: "Manuel de Boer",
            },
            {
              minuut: 35,
              score: "thuis",
              goalwie: "Dennis Dat",
            },
            {
              minuut: 40,
              score: "thuis",
              goalwie: "Jeroen Dat",
            },
            {
              minuut: 44,
              score: "thuis",
              goalwie: "David Kluin",
            },
            {
              minuut: 60,
              score: "thuis",
              goalwie: "David Kluin",
            },
            {
              minuut: 75,
              score: "thuis",
              goalwie: "Tom Vols",
            },
          ],
        },
        {
          id: 10,
          thuis: { team: "FIT 7", logo: "fit-logo.png" },
          uit: { team: "WV-HEDW 10", logo: "hedw-logo.png" },
          datum: "13-11-2022",
          tijdstip: "10:00",
          uitslag: {
            thuis: 2,
            uit: 2,
          },
          beker: false,
          goals: [
            {
              minuut: 21,
              score: "thuis",
              goalwie: "Oscar",
            },
            {
              minuut: 41,
              score: "thuis",
              goalwie: "Peppie",
            },
            {
              minuut: 60,
              score: "uit",
              goalwie: "Liam Langereis",
            },
            {
              minuut: 89,
              score: "uit",
              goalwie: "Davey Wilmans",
            },
          ],
        },
        {
          id: 11,
          thuis: { team: "FIT 7", logo: "fit-logo.png" },
          uit: { team: "Zeebugia 8", logo: "zeeburgia-logo.png" },
          datum: "27-11-2022",
          tijdstip: "10:00",
          uitslag: {
            thuis: 1,
            uit: 3,
          },
          beker: false,
          goals: [
            {
              minuut: 21,
              score: "thuis",
              goalwie: "e.g.",
            },
            {
              minuut: 41,
              score: "uit",
              goalwie: "Sjors Meinders",
            },
            {
              minuut: 60,
              score: "uit",
              goalwie: "Eli Ersahin",
            },
            {
              minuut: 89,
              score: "uit",
              goalwie: "Lorenzo Fraser",
            },
          ],
        },
        {
          id: 12,
          thuis: { team: "WEESP 3", logo: "weesp-logo.png" },
          uit: { team: "FIT 7", logo: "fit-logo.png" },
          datum: "04-12-2022",
          tijdstip: "10:00",
          uitslag: {
            thuis: "-",
            uit: "-",
          },
          beker: false,
          goals: [],
        },
        {
          id: 13,
          thuis: { team: "FIT 7", logo: "fit-logo.png" },
          uit: { team: "Oudekerk 4", logo: "oudekerk-logo.png" },
          datum: "11-12-2022",
          tijdstip: "12:30",
          uitslag: {
            thuis: "-",
            uit: "-",
          },
          beker: false,
          goals: [],
        },
        {
          id: 14,
          thuis: { team: "Zeeburgia 13", logo: "zeeburgia-logo.png" },
          uit: { team: "FIT 7", logo: "fit-logo.png" },
          datum: "29-01-2023",
          tijdstip: "12:00",
          uitslag: {
            thuis: "-",
            uit: "-",
          },
          beker: false,
          goals: [],
        },
        {
          id: 15,
          thuis: { team: "Arsenal 8", logo: "arsenal-logo.png" },
          uit: { team: "FIT 7", logo: "fit-logo.png" },
          datum: "05-02-2023",
          tijdstip: "16:30",
          uitslag: {
            thuis: "-",
            uit: "-",
          },
          beker: false,
          goals: [],
        },
        {
          id: 16,
          thuis: { team: "FIT 7", logo: "fit-logo.png" },
          uit: { team: "Geinburgia 3", logo: "geinburgia-logo.png" },
          datum: "12-02-2023",
          tijdstip: "15:00",
          uitslag: {
            thuis: "-",
            uit: "-",
          },
          beker: false,
          goals: [],
        },
        {
          id: 17,
          thuis: { team: "CTO 3", logo: "cto-logo.png" },
          uit: { team: "FIT 7", logo: "fit-logo.png" },
          datum: "05-03-2023",
          tijdstip: "12:00",
          uitslag: {
            thuis: "-",
            uit: "-",
          },
          beker: false,
          goals: [],
        },
        {
          id: 18,
          thuis: { team: "FIT 7", logo: "fit-logo.png" },
          uit: { team: "G.M'meer 3", logo: "geuzen-logo.png" },
          datum: "12-03-2023",
          tijdstip: "14:30",
          uitslag: {
            thuis: "-",
            uit: "-",
          },
          beker: false,
          goals: [],
        },
        {
          id: 19,
          thuis: { team: "Abcoude", logo: "abcoude-logo.png" },
          uit: { team: "FIT 7", logo: "fit-logo.png" },
          datum: "19-03-2023",
          tijdstip: "14:30",
          uitslag: {
            thuis: "-",
            uit: "-",
          },
          beker: false,
          goals: [],
        },
        {
          id: 20,
          thuis: { team: "FIT 7", logo: "fit-logo.png" },
          uit: { team: "Hoofddorp 8", logo: "hoofddorp-logo.png" },
          datum: "26-03-2023",
          tijdstip: "14:30",
          uitslag: {
            thuis: "-",
            uit: "-",
          },
          beker: false,
          goals: [],
        },
        {
          id: 21,
          thuis: { team: "WV-HEDW 10", logo: "hedw-logo.png" },
          uit: { team: "FIT 7", logo: "fit-logo.png" },
          datum: "02-04-2023",
          tijdstip: "12:00",
          uitslag: {
            thuis: "-",
            uit: "-",
          },
          beker: false,
          goals: [],
        },
        {
          id: 22,
          thuis: { team: "FIT 7", logo: "fit-logo.png" },
          uit: { team: "Zeeburgia 13", logo: "zeeburgia-logo.png" },
          datum: "23-04-2023",
          tijdstip: "14:30",
          uitslag: {
            thuis: "-",
            uit: "-",
          },
          beker: false,
          goals: [],
        },
        {
          id: 23,
          thuis: { team: "Zeeburgia 8", logo: "zeeburgia-logo.png" },
          uit: { team: "FIT 7", logo: "fit-logo.png" },
          datum: "23-04-2023",
          tijdstip: "12:00",
          uitslag: {
            thuis: "-",
            uit: "-",
          },
          beker: false,
          goals: [],
        },
        {
          id: 24,
          thuis: { team: "Ouderkerk 4", logo: "oudekerk-logo.png" },
          uit: { team: "FIT 7", logo: "fit-logo.png" },
          datum: "14-05-2023",
          tijdstip: "14:00",
          uitslag: {
            thuis: "-",
            uit: "-",
          },
          beker: false,
          goals: [],
        },
        {
          id: 25,
          thuis: { team: "FIT 7", logo: "fit-logo.png" },
          uit: { team: "WEESP 3", logo: "weesp-logo.png" },
          datum: "21-05-2023",
          tijdstip: "14:30",
          uitslag: {
            thuis: "-",
            uit: "-",
          },
          beker: false,
          goals: [],
        },
      ],
    };
  },
  methods: {
    getDate: function () {
      console.log("RUNNING: getDate");
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let currentDate = `${day}-${month}-${year}`;
      this.date = currentDate;
      console.log("FINISHED: getDate");
    },
    getDateList: function () {
      console.log("RUNNING: getDateList");
      this.wedstrijden.map((x) => {
        this.dateList.push(x.datum);
      });
      console.log("FINISHED: getDateList");
    },
    calculateDateInView: function () {
      console.log("RUNNING: calculateDateInView");
      let numbers = [];
      const currentDate = new Date();
      this.dateList.map((x) => {
        let splitDate = x.split("-", 3);
        let day = splitDate[0];
        let month = splitDate[1];
        let year = splitDate[2];
        let calcDate = new Date(year, month - 1, day);
        let Difference_In_Time = calcDate.getTime() - currentDate.getTime();
        if (Difference_In_Time > 0) {
          numbers.push(Difference_In_Time + "/" + x);
        }
      });
      const takeFirst = numbers[0].split("/", 2);
      const dateInView = takeFirst[1];
      this.dateInView = dateInView;
      console.log("RUNNING: calculateDateInView" + " RETURN: " + dateInView);
      return dateInView;
    },
    autoScroll: function (date) {
      console.log("RUNNING: autoscroll");
      const scollTo = document.getElementById(date);
      const underText = document.getElementById("under-text");
      scollTo.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      underText.innerHTML = this.dateInView;
      console.log("FINISHED: autoscroll");
    },
    findDatePos: function () {
      return this.dateList.indexOf(this.dateInView);
    },
    back() {
      const arrowBack = document.getElementById("arrow-back");
      const arrowForward = document.getElementById("arrow-forward");
      if (arrowForward.style.visibility == "hidden") {
        arrowForward.style.visibility = "visible";
      }
      if (this.findDatePos() - 1 == 0) {
        arrowBack.style.visibility = "hidden";
      }
      const newPos = this.findDatePos() - 1;
      this.autoScroll(this.dateList[newPos]);
      this.dateInView = this.dateList[newPos];
    },
    forward() {
      const arrowBack = document.getElementById("arrow-back");
      const arrowForward = document.getElementById("arrow-forward");
      if (arrowBack.style.visibility == "hidden") {
        arrowBack.style.visibility = "visible";
      }
      console.log(this.findDatePos() + 1);
      if (this.findDatePos() + 1 == 22) {
        arrowForward.style.visibility = "hidden";
      }
      const newPos = this.findDatePos() + 1;
      this.autoScroll(this.dateList[newPos]);
      this.dateInView = this.dateList[newPos];
    },
    //touch(command) {
    //  const arrowBack = document.getElementById("arrow-back");
    //  const arrowForward = document.getElementById("arrow-forward");
    //  if (command == "back") {
    //    arrowBack.style.background = "rgb(255, 117, 47)";
    //  }
    //  if (command == "backEnd") {
    //    arrowBack.style.background = "black";
    //  }
    //  if (command == "forward") {
    //    arrowForward.style.background = "rgb(255, 117, 47)";
    //  }
    //  if (command == "forwardEnd") {
    //    arrowForward.style.background = "black";
    //  }
    //},
  },
  mounted() {
    console.log("RUNNING: mounted");
    this.getDate();
    this.getDateList();
    const upComing = this.calculateDateInView();
    this.autoScroll(upComing);
    console.log("FINISHED: mounted");
    document.getElementById("under-title").innerHTML = "Wedstrijden";
  },
};
</script>

<style scoped>
.wedstrijd-wrapper {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow: hidden;
}
.scroll-nav {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
img {
  height: 40px;
  cursor: pointer;
}
</style>
