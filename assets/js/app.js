
// const A1kor = ['나라', '중국', '일본', '미국', '한국', '프랑스', '독일', '호주', '영국', '빈칸', '알맞다', '단어', '선생님', '학생', '의사', '회사원', '요리사', '기자', '가수', '군인'];

// const A1uzb = ['Davlat', 'Xitoy', 'Yaponiya', 'AQSH', 'Koreya', 'Fransiya', 'Germaniya', 'Avstraliya', 'Angliya', "Bo'sh joy", 'Mos', "So'z", "O'qituvchi", "O'quvchi", 'Doktor', 'Firma ishchisi', 'Oshpaz', 'Muxbir', "Qo'shiqchi", 'Askar'];

// const count = 0;
// const a = document.getElementById("A");
// const b = document.getElementById("B");
// const c = document.getElementById("C");
// const d = document.getElementById("D");
// const word = document.getElementById("word");
// const rn1 = Math.ceil( 4*Math.random());


// function bir(x) {
//     var num = Math.floor(Math.random()*(x));
//     return (num === count) ? generateRandom(x) : num;
// }
// const rn2 = bir(A1kor.length);


// function ikki(x) {
//     var num = Math.floor(Math.random()*(x));
//     return (num === count || num === rn2) ? generateRandom(x) : num;
// }
// const rn3 = ikki(A1kor.length);


// function uch(x) {
//     var num = Math.floor(Math.random()*(x));
//     return (num === count) ? generateRandom(x) : num;
// }
// const rn4 = uch(A1kor.length);


// word.innerText = A1uzb[count];

//  if( rn1 === 1 ){
//     a.innerText = A1kor[count]
//     b.innerText = A1kor[rn2]
//     c.innerText = A1kor[rn3]
//     d.innerText = A1kor[rn4]
//  } else if( rn1 === 2 ){
//     b.innerText = A1kor[count]
//     a.innerText = A1kor[rn2]
//     c.innerText = A1kor[rn3]
//     d.innerText = A1kor[rn4]
//  } else if( rn1 === 3 ){
//     c.innerText = A1kor[count]
//     b.innerText = A1kor[rn2]
//     a.innerText = A1kor[rn3]
//     d.innerText = A1kor[rn4]
//  } else if( rn1 === 4 ){
//     d.innerText = A1kor[count]
//     b.innerText = A1kor[rn2]
//     c.innerText = A1kor[rn3]
//     a.innerText = A1kor[rn4]
//  }


// function next(){
//     count++
//     if(count > A1kor.length){
//         count = 0
//     }
// }
// function prev(){
//     count--
//     if(count < 0){
//         count = 0
//     }
// }

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
        checked1: 'a',
    },
    methods: {
        check1(){
            if( this.rn1 === 1){
                this.checked1 = true;
            }else{
                this.checked1 = false;
            }
            return this.checked1
        },
        next() {
            this.count++
            if (this.count > this.A1kor.length) {
                this.count = 0
            }
        },
        prev() {
            this.count--
            if (this.count < 0) {
                this.count = 0
            }
        },

        
    },
    watch: {
        count: function mounted() {

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
            } else if (rn1 === 2) {
                this.variantA = this.A1kor[rn2]
                this.variantB = this.A1kor[this.count]
                this.variantC = this.A1kor[rn3]
                this.variantD = this.A1kor[rn4]
            } else if (rn1 === 3) {
                this.variantA = this.A1kor[rn3]
                this.variantB = this.A1kor[rn2]
                this.variantC = this.A1kor[this.count]
                this.variantD = this.A1kor[rn4]
            } else if (rn1 === 4) {
                this.variantA = this.A1kor[rn4]
                this.variantB = this.A1kor[rn2]
                this.variantC = this.A1kor[rn3]
                this.variantD = this.A1kor[this.count]
            }
    
    
        }
    },
    mounted() {

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
        } else if (rn1 === 2) {
            this.variantA = this.A1kor[rn2]
            this.variantB = this.A1kor[this.count]
            this.variantC = this.A1kor[rn3]
            this.variantD = this.A1kor[rn4]
        } else if (rn1 === 3) {
            this.variantA = this.A1kor[rn3]
            this.variantB = this.A1kor[rn2]
            this.variantC = this.A1kor[this.count]
            this.variantD = this.A1kor[rn4]
        } else if (rn1 === 4) {
            this.variantA = this.A1kor[rn4]
            this.variantB = this.A1kor[rn2]
            this.variantC = this.A1kor[rn3]
            this.variantD = this.A1kor[this.count]
        }


    },
})