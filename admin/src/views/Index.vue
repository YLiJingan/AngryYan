<template>
  <div class="container-fulid">
    <nav class="navbar navbar-inverse nav-fixed-top">
      <img src="../assets/logo_white.png" alt="logo">
       <div id="navbar" style="height: 1px;">
        <ul class="nav navbar-nav">
          <li><img src='../assets/cat.jpg'></li><br/>
          <li style='display:inline-block;'><a >欢迎您,颜小腰</a></li>
          <li style='display:inline-block;'><a href="#">退出</a></li>
        </ul>
      </div> 
    </nav>
    <div class="row clearfix" style="margin:0px;margin-top:1px;">
      <div class="col-md-2 col-lg-2 col-sm-3 col-xs-3 nav-aside" id='aside-list' style='height:100%; overflow:hidden; padding-bottom:9999px; margin-bottom:-9999px;'>
        <aside>
            <ul id="accordion">
              <li>
                <a data-toggle="collapse"  class="collapsed" aria-expanded="false" href="#collapseOne" @click="toggle">
                  <i class="icon-home icon-large"></i>
                  <span style='display:inline-block'><router-link to='/'>Home</router-link></span>
                  <span class="icon " v-bind:class="{'icon-chevron-right': isA, 'icon-chevron-down':!isA}"></span>
                </a>
                <ul class="sub collapse" id="collapseOne" aria-expanded="false">
                  <li><router-link to="/chart">Chart #</router-link></li>
                  <li><router-link to="/table">Table #</router-link></li>
                </ul>
              </li>
              <li>
                <a data-toggle="collapse"  class="collapsed" aria-expanded="false" href="#collapseTwo">
                  <i class=" icon-calendar"></i>
                  <span style='display:inline-block'><router-link to='/'>Home</router-link></span>
                  <span class="icon " v-bind:class="{'icon-chevron-right': isA, 'icon-chevron-down':!isA}"></span>
                </a>
                <ul class="sub collapse" id="collapseTwo" aria-expanded="false">
                  <li><router-link to="/form">Form #</router-link></li>
                  <li><router-link to="/tabs">Tabs #</router-link></li>
                </ul>
              </li>
              <li>
                <a data-toggle="collapse"  class="collapsed" aria-expanded="false" href="#collapseThree">
                  <i class=" icon-tasks"></i>
                  <span style='display:inline-block'><router-link to='/'>Home</router-link></span>
                  <span class="icon " v-bind:class="{'icon-chevron-right': isA, 'icon-chevron-down':!isA}"></span>
                </a>
                <ul class="sub collapse" id="collapseThree" aria-expanded="false">
                  <li><a>###</a></li>
                  <li><a>###</a></li>
                </ul>
              </li>
              <li>
                <a data-toggle="collapse"  class="collapsed" aria-expanded="false" href="#collapseFour">
                  <i class=" icon-cogs"></i>
                  <span style='display:inline-block'><router-link to='/'>Home</router-link></span>
                  <span class="icon " v-bind:class="{'icon-chevron-right': isA, 'icon-chevron-down':!isA}"></span>
                </a>
                <ul class="sub collapse" id="collapseFour" aria-expanded="false">
                  <li><a>###</a></li>
                  <li><a>###</a></li>
                </ul>
              </li>
            </ul>
        </aside>
      </div>
      <div class="col-md-10 col-lg-10 col-sm-9 col-xs-9 wrapper clearfix">
        <div class="row">
          <div class="col-md-12">
            <h3 style="display:inline-block"> {{$route.name}}</h3>
            <ul style="float:right;padding-right: 40px;padding-top:20px;">
              <li v-for ='item in $route.matched' :key="item.path" style="display:inline-block;cursor:pointer;">
                {{item.name}} /
              </li>
            </ul>
          </div>
        </div>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data: function(){
      return {
        isA:true
      };
    },

    methods: {
      toggle: function(){
        this.isA = !this.isA;
      }
    },
    // mounted:function(){
    //   var asideHeight = document.body.clientHeight;
    //   console.log(asideHeight);
    //   document.getElementById('aside-list').style.height = parseInt(asideHeight) - 60 +'px';
    // }
  };
</script>

<style scoped>
  @import '../assets/css/font-awesome.min.css';
  div{
    box-sizing:border-box;
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;
  }
  .container-fulid{
    margin:0 auto;
    min-width:650px !important;
  }
  ul li{
    list-style: none;
  }
nav img{
    width: 80px;
    height: 60px;
    float:left;
}

@media (max-width: 768px){
    .navbar-inverse {
        background-color: #000;
        border-color: transparent;
    }
}
.navbar{
    padding-left:110px;
    margin:0px;
    height: 60px;
}

 @media (min-width: 768px){
.navbar {
    border-radius: 0px;
}
}
@media (max-width:768px){
    .navbar{
        padding-left:0px;
    }
}
@media (max-width:992px){
    .navbar{
        padding-left:40px;
    }
}
.navbar-inverse .navbar-brand {
    color: #fff;
}
.navbar-inverse .navbar-nav>li {
    color: #fff;
}

.navbar-inverse .navbar-nav>li>a {
  color: #fff;
}
.navbar-inverse .navbar-nav>li>a:hover{
    color:#9d9d9d;
    cursor:pointer;
}
.navbar-brand{
    color:#fff;
    font-size:24px;
    padding-top:25px;
}
.navbar-toggle{
    margin-top:13px;
}
#navbar .navbar-nav {
    float:right;
    width:250px;
    height:60px;
}
@media (max-width:768px) {
    .navbar-nav{
       margin: 0px;
    }
} 
#navbar img{
    width:48px;
    height:48px;
    border-radius:50%;
    margin-top:10px;
}
 #accordion{
    background-color:#394a59;
    padding:0px;
    margin:0px;
    font-size:16px;
    line-height:16px;
  }
  #accordion ul{
    padding-left:0px;
  }
  #accordion ul,li a:hover,a:focus,a{
    text-decoration: none;
    color:#fff;
  }
  #accordion a{
    display:inline-block;
    padding-left:30px;
  }
  #accordion span a{
    padding-left:10px;
  }
  a:hover{
    background-color:#2e3b46;
  }
  #accordion > li{
    line-height:50px;
    border-top:1px solid #fff;
  }
  #accordion li a{
    position:relative;
    width:100%;
  }
  #accordion>li ul li{
    border-top:1px solid #fff;
    cursor:pointer;
    font-size:14px;
  }
  #accordion>li ul li a{
    width:100%;
    padding-left:80px;
  }
  #accordion .icon{
    position:absolute;
    top:40%;
    left:80%;
    font-size:14px;
  }

  .nav-aside{
    padding:0px;
    background-color: #394a59;
  }

  .wrapper{
    background-color:#eeeeee;
    padding: 0px;
    margin-top:1px;
  }
  .row{
    margin:0px;
  }
</style>
