<template>
    <nav id="navbar-ays" class="navbar navbar-default navbar-static-top navbar-fixed-top overflow" role="navigation">
<div class="container-fluid">
<div class="navbar-header">
<a class="navbar-brand" href="/">
<img src="https://www.atyoursite.be//Content/img/AYS_licht.svg" alt="AtYourSite. Logo" width="140" height="35">
</a>

<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar">
<span class="icon-bar top-bar"></span>
<span class="icon-bar middle-bar"></span>
<span class="icon-bar bottom-bar"></span>
</button>
</div>

<div class="navbar-collapse collapse" id="main-navbar">
<ul class="nav navbar-nav navbar-right">
<li>
<a href="//www.atyoursite.be/nl/over-ons">
Over AYS.
</a>
</li>
<li>
<a href="//www.atyoursite.be/#watwedoen">
Diensten
</a>
</li>
<li>
<a href="//www.atyoursite.be/nl/contact">
Contact
</a>
</li>
<li>
<a href="//www.atyoursite.be/nl/jobs">
Jobs
</a>
</li>
<li>
<a href="//www.atyoursite.be/nl/offerte-aanvraag">
Offerte aanvraag
</a>
</li>
</ul>
</div>
</div>
</nav>
</template>

<script>
import DatePicker from 'vue3-datepicker'
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>