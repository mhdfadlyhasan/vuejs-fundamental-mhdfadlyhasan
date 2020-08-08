<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="navbar-brand" >Video Caption Finder</div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <div class="nav-link" ><router-link to="/">Home</router-link></div>
          </li>
          <li class="nav-item">
            <div class="nav-link" ><router-link to="/about">About</router-link></div> 
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/mhdfadlyhasan">My Github!</a> 
          </li>
        </ul>
      </div>
    </nav>
    <div id="content">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  
}
</style>