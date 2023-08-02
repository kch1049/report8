
    let elNav = document.querySelector('nav');
    let elSubNav = document.querySelector('.sub-nav');
    let elSubNav2 = document.querySelector('.sub-nav2');
    let elSubNav3 = document.querySelector('.sub-nav3');
    let elSubNav4 = document.querySelector('.sub-nav4');
    let elBtn = document.querySelector('nav button');
    
    function tglBtn(){
        elBtn.classList.toggle('active');
    }
    function tglNav(){
        elNav.classList.toggle('active');
    }
    function tglSubNav(){
        elSubNav.classList.toggle('active');
    }
    function tglSubNav2(){
        elSubNav2.classList.toggle('active');
    }
    function tglSubNav3(){
        elSubNav3.classList.toggle('active');
    }
    function tglSubNav4(){
        elSubNav4.classList.toggle('active');
    }
    function tglBtnNav(self){
        self.classList.toggle('close');
    }
    function tglH2(self){
        self.classList.toggle('active');
    }
    function tglH3(self){
        self.classList.toggle('active');
    }
    