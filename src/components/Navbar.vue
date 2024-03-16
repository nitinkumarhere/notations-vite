<template>
  <header class="primary-header">
    <div class="container">
      <div class="logo">
        <a href="#home">Songbook</a>
      </div>
      <div>
        <nav class="primary-navigation right-align">
            <a class="active" href="#home">Home</a>
            <a href="#tuner">Tuner</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </nav>
      </div>
    </div>

  </header>

</template>


<script>



</script>
<style scoped >

.container {
  /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
  font:bold;
  display: flex;
  align-items: center;
  /* flex-direction: row; */
  /* justify-content: space-between; */
  width:100%;
  background: rgb(44, 41, 42);
  z-index: 100;
  /* margin: 0 auto; */
}
.primary-header .logo a {
  font-size: 40px;
  text-decoration: none;
  color: rgb(0, 212, 205);

  /* position: fixed; */
  top:0;
  left:0;
  padding: 8px 60px;
  border:4px;
  /* justify-content: space-between; */
  align-items: center;
  z-index: 100;
}

.primary-navigation a {
  /* position:absolute; */
  display: inline-flexbox;
  flex-direction:row;
  font-size: 30px;
  left:auto;
  right: 0;
  color:rgb(103, 105, 113);
  font-weight: 400;
  justify-content:flex-end;
  /* align-items:flex-end; */
  /* margin-left:auto;  */
  /* margin-right:20px;  */
  text-decoration: none;
  padding: 12px 30px;
  border:10px;
  /* overflow: hidden; */
}
.primary-navigation {
  /* right:0%; */
  /* display: flex;
  margin-left: auto;
  flex-direction:row; */
}
/* Add a black background color to the top navigation */
/* .topnav {
  position: fixed;
  top:0;
  left:0;
  width:100%;
  padding:20px 100px;
  background-color: seagreen;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* overflow: hidden; */
/* } */ 

*{
  padding:0;
  margin:0;
  box-sizing: border-box;

}

/* Style the links inside the navigation bar */
/* .topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
/* .topnav a:hover {
  background-color: #ddd;
  color: black;
} */

/* Add a color to the active/current link */
.primary-navigation a.active {
  /* background-color: #d2e7df; */
  color: white;
}
a:hover {
        transition-delay: 0.1s;
        color: rgb(0, 0, 0);
    }
</style>