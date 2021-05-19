$(document).ready(function() {
    $(".title").lettering();
    $(".button").lettering();
  });
  
  
  
  
  
  $(document).ready(function() {
    animation();
  }, 1000);
  
  $('.button').click(function() {
    animation();
  });
  
  
  function animation() {
    var title1 = new TimelineMax();
    title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
    title1.staggerFromTo(".title span", 0.5, 
    {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
    {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
    title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
  }











new Vue({
    el: '#app',
    data: {
        A1kor: ['나라', '중국', '일본', '미국', '한국', '프랑스', '독일', '호주', '영국', '빈칸', '알맞다', '단어', '선생님', '학생', '의사', '회사원', '요리사', '기자', '가수', '군인'],
        A1uzb: ['Davlat', 'Xitoy', 'Yaponiya', 'AQSH', 'Koreya', 'Fransiya', 'Germaniya', 'Avstraliya', 'Angliya', "Bo'sh joy", 'Mos', "So'z", "O'qituvchi", "O'quvchi", 'Doktor', 'Firma ishchisi', 'Oshpaz', 'Muxbir', "Qo'shiqchi", 'Askar'],
        savol: " ",
        variantA: " ",
        variantB: " ",
        variantC: " ",
        variantD: " ",
        count: 0,
        alert1: 1,
        alert2: 0,
    },
    methods: {
        next() {
            this.count++
            if (this.count >= this.A1kor.length) {
                this.count = 0
            }
            document.getElementById("A").style.backgroundColor = "rgba(0, 247, 255, 0.158)"
            document.getElementById("B").style.backgroundColor = "rgba(0, 247, 255, 0.158)"
            document.getElementById("C").style.backgroundColor = "rgba(0, 247, 255, 0.158)"
            document.getElementById("D").style.backgroundColor = "rgba(0, 247, 255, 0.158)"
        },
        prev() {
            this.count--
            if (this.count < 0) {
                this.count = 0 ;
            }
        },
        check(){
            if (this.alert2 === 1) {
                document.getElementById("A").style.backgroundColor = "lightgreen"
                document.getElementById("B").style.backgroundColor = "red"
                document.getElementById("C").style.backgroundColor = "red"
                document.getElementById("D").style.backgroundColor = "red"
            } else if (this.alert2 === 2) {
                document.getElementById("A").style.backgroundColor = "red"
                document.getElementById("B").style.backgroundColor = "lightgreen"
                document.getElementById("C").style.backgroundColor = "red"
                document.getElementById("D").style.backgroundColor = "red"
            } else if (this.alert2 === 3) {
                document.getElementById("A").style.backgroundColor = "red"
                document.getElementById("B").style.backgroundColor = "red"
                document.getElementById("C").style.backgroundColor = "lightgreen"
                document.getElementById("D").style.backgroundColor = "red"
            } else if (this.alert2 === 4) {
                document.getElementById("A").style.backgroundColor = "red"
                document.getElementById("B").style.backgroundColor = "red"
                document.getElementById("C").style.backgroundColor = "red"
                document.getElementById("D").style.backgroundColor = "lightgreen"
            }
            this.alert1 = 0
        }
        
    },
    watch: {
        count: function mounted() {
            if (this.alert1 === 1){
                alert("Variantlardan birini tanlang. Agar javobni bilmasangiz bilib olasiz!")
                return
            }
            this.alert1 = 1
            this.savol = this.A1uzb[this.count];
    
            const rn1 = Math.ceil(4 * Math.random());
    
    
            function bir(x) {
                var num = Math.floor(Math.random() * (x));
                return (num === this.count) ? generateRandom(x) : num;
            }
            const rn2 = bir(this.A1kor.length);
    
    
            function ikki(x) {
                var num = Math.floor(Math.random() * (x));
                return (num === this.count || num === rn2) ? generateRandom(x) : num;
            }
            const rn3 = ikki(this.A1kor.length);
    
    
            function uch(x) {
                var num = Math.floor(Math.random() * (x));
                return (num === this.count) ? generateRandom(x) : num;
            }
            const rn4 = uch(this.A1kor.length);
    
            if (rn1 === 1) {
                this.variantA = this.A1kor[this.count]
                this.variantB = this.A1kor[rn2]
                this.variantC = this.A1kor[rn3]
                this.variantD = this.A1kor[rn4]
                this.alert2 = 1
            } else if (rn1 === 2) {
                this.variantA = this.A1kor[rn2]
                this.variantB = this.A1kor[this.count]
                this.variantC = this.A1kor[rn3]
                this.variantD = this.A1kor[rn4]
                this.alert2 = 2
            } else if (rn1 === 3) {
                this.variantA = this.A1kor[rn3]
                this.variantB = this.A1kor[rn2]
                this.variantC = this.A1kor[this.count]
                this.variantD = this.A1kor[rn4]
                this.alert2 = 3
            } else if (rn1 === 4) {
                this.variantA = this.A1kor[rn4]
                this.variantB = this.A1kor[rn2]
                this.variantC = this.A1kor[rn3]
                this.variantD = this.A1kor[this.count]
                this.alert2 = 4
            }
    
    
        }
    },
    mounted() {

        this.savol = this.A1uzb[this.count];

        Vue.prototype.$rn1 = Math.ceil(4 * Math.random());


        function bir(x) {
            var num = Math.floor(Math.random() * (x));
            return (num === this.count) ? generateRandom(x) : num;
        }
        const rn2 = bir(this.A1kor.length);


        function ikki(x) {
            var num = Math.floor(Math.random() * (x));
            return (num === this.count || num === rn2) ? generateRandom(x) : num;
        }
        const rn3 = ikki(this.A1kor.length);


        function uch(x) {
            var num = Math.floor(Math.random() * (x));
            return (num === this.count) ? generateRandom(x) : num;
        }
        const rn4 = uch(this.A1kor.length);

        if (this.$rn1 === 1) {
            this.variantA = this.A1kor[this.count]
            this.variantB = this.A1kor[rn2]
            this.variantC = this.A1kor[rn3]
            this.variantD = this.A1kor[rn4]
            this.alert2 = 1
        } else if (this.$rn1 === 2) {
            this.variantA = this.A1kor[rn2]
            this.variantB = this.A1kor[this.count]
            this.variantC = this.A1kor[rn3]
            this.variantD = this.A1kor[rn4]
            this.alert2 = 2
        } else if (this.$rn1 === 3) {
            this.variantA = this.A1kor[rn3]
            this.variantB = this.A1kor[rn2]
            this.variantC = this.A1kor[this.count]
            this.variantD = this.A1kor[rn4]
            this.alert2 = 3
        } else if (this.$rn1 === 4) {
            this.variantA = this.A1kor[rn4]
            this.variantB = this.A1kor[rn2]
            this.variantC = this.A1kor[rn3]
            this.variantD = this.A1kor[this.count]
            this.alert2 = 4
        }


    },
})