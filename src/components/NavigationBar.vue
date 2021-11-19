<template>
    <nav class="navbar navbar-expand-xl navbar-dark navbarParent">
        <div class="container-fluid mt-0 pl-2 pr-0">
            <div class=" d-none d-md-block d-xl-none containercenter" >
                <form class="d-flex">
                    <input class="form-control me-2 rounded-pill searchbalk" style="width: 100%" type="search"
                           placeholder="Zoeken"
                           aria-label="Search">
                    <button class="btn btn-outline-light btnSearch ml-2" type="submit"><i class="fas fa-search" aria-hidden="true"></i></button>
                </form>
            </div>


            <button id="navCollapseToggler" class="navbar-toggler mr-3" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse mt-2" id="navbarSupportedContent">

                <div class=" d-xs-block d-md-none containercenter" >
                    <form class="d-flex">
                        <input class="form-control me-2 rounded-pill searchbalk" style="width: 100%" type="search"
                               placeholder="Zoeken"
                               aria-label="Search">
                        <button class="btn btn-outline-light btnSearch ml-2" type="submit"><i class="fas fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>

                <ul class="navbar-nav me-auto mb-2 h5">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="../main/hoofdpagina.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="../about/about.html">Over ons</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdownLbl" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Collectie's
                        </a>
                    </li>
                        <div class="dropdown-menu shadow p-0" id="navbarDropdown" aria-labelledby="navbarDropdownLbl" style="background-color: black">
                            <div class="d-flex">
                                <div class="d-block" >
                                    <a class="dropdown-item" id="dropdown-titel" href="../product/product.html">Soorten</a>
                                    <a class="dropdown-item" href="#">Zwarte thee</a>
                                    <a class="dropdown-item" href="#">Groene thee</a>
                                    <a class="dropdown-item" href="#">Witte thee</a>
                                    <a class="dropdown-item" href="#">Kruidenthee</a>
                                    <a class="dropdown-item" href="#">Vruchtenthee</a>
                                </div>
                                <div class="d-block">
                                    <a class="dropdown-item" id="dropdown-titel1" href="#">Thee per land</a>
                                    <a class="dropdown-item"  href="#">Griekenland</a>
                                    <a class="dropdown-item"  href="#">Turkije</a>
                                    <a class="dropdown-item"  href="#">Marokko</a>
                                    <a class="dropdown-item"  href="#">Ierland</a>
                                </div>
                                <div class="d-block">
                                    <a class="dropdown-item" id="dropdown-titel2" href="#">Extra</a>
                                    <a class="dropdown-item"  href="#">Nieuw</a>
                                    <a class="dropdown-item"  href="#">Geschenk</a>
                                    <a class="dropdown-item"  href="../product/Thee-asseccoires.html">Thee-asseccoires</a>
                                </div>
                            </div>
                        </div>
                    <li class="nav-item">
                    </li>
                </ul>
                <div class="m-auto d-none d-xl-block containercenter">
                    <form class="d-flex">
                        <input class="form-control me-2 rounded-pill searchbalk" style="width: 100%" type="search"
                               placeholder="Zoeken"
                               aria-label="Search">
                        <button class="btn btn-outline-light btnSearch ml-2" type="submit"><i class="fas fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>
                <div class="h5" id="rightcontainer">
                    <a class="navbar-brand p-xl-2 m-xl-1 btnContact" href="../contactformulier/contact.html">Contact</a>
                    <a class="navbar-brand p-xl-1" href="../winkelwagen/winkelwagen.html"><i class="fas fa-shopping-basket" aria-hidden="true"></i></a>
                    <a class="navbar-brand p-xl-1" href="../login/login.html"><i class="fas fa-user" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </nav>

</template>

<script>
    export default {
        name: "NavigationBar"
    }
</script>

<style scoped>
    /*===NAVBAR===*/

    header {
        width: 100%;
        vertical-align: top;
        position: relative;
        z-index: 2;
    }

    .navbarParent {
        background: rgba(0, 0, 0, 0.65);
    }

    .btnSearch {
        border-radius: 45px;
        background-color: transparent;
        border-color: transparent;
        height: auto;
        margin: auto;
    }

    .btnSearch:hover {
        background-color: white;
        border-color: black;
        box-shadow: 0 0 5px black;
    }



    .containercenter {
        width: 30%;
    }


    .searchbalk:hover {
        box-shadow: 0 0 5px white;
    }

    #imgLogoTshop {
        width: 155px;
    }

    #imgLogoTshop img {
        width: 100%;
    }

    .show > .dropdown-menu {
        max-height: 800px;
        visibility: visible;
    }

    .dropdown-menu {
        display: block;
        max-height: 0;
        visibility: hidden;
        transition: all 1s ease-in-out;
        overflow: hidden;
    }

    /* zorgt ervoor dat alles mooi gesorteerd is en er voldoende afstand is */
    .d-block{
        width: 22em;
        padding: 28px;
    }

    #dropdown-titel, #dropdown-titel1, #dropdown-titel2{
        font-size:22px;
        font-weight: 400;
    }





    .dropdown-item {
        display: block;
        width: 100%;
        padding: .25rem 1.5rem;
        clear: both;
        font-weight: 300;
        color: white;
        text-align: inherit;
        white-space: nowrap;
        border: 0;
        background-color: black;
        font-size: 1.2em;
    }

    /*GROTE SCHERMEN*/
    @media screen and (max-width: 1200px) {

        .navbarParent {
            background: rgba(0, 0, 0, 0.82);
        }

        .containercenter {
            width: 35%;
        }

        .navbarParent {
            padding: 15px 0;
        }

        #navbarSupportedContent ul > li a, #rightcontainer {
            /*text-align: center;*/
            padding-left: 25px;
        }

        #rightcontainer a {
            padding: 5px;
        }

        #rightcontainer {
            padding-left: 20px;
        }

        nav div a {
            margin-right: 10px;
        }

        nav div a:hover {
            transition: all 0.3s ease;
            box-shadow: 0 0 10px lightcyan;
            border-radius: 0;
        }

        /*DROPDOWN*/
        .dropdown:active .dropdown-menu {
            display: block;
        }

        nav .dropdownNav a:hover {
            transition: all 0.3s;
            box-shadow: 0 0 10px black;
            border-radius: 0;
        }

    }

    @media screen and (min-width: 1200px) {

        .dropdown:hover .dropdown-menu {
            display: block;
        }

    }

    @media screen and (max-width: 1200px) {
        nav #rightcontainer a:hover {
            transition: all 0.3s ease;
            box-shadow: 0 0 25px white;
            border-radius: 100px;
        }
    }

    @media screen and (max-width: 768px) {
        .containercenter {
            padding-left: 25px;
            width: 75%;
            max-width: 300px;
            margin: auto;
        }

    }

    /*==============*/

    /*USER in navbar*/
    #containerUser {
        width: 50px;
        height: 50px;
        border-radius: 100px;
        background: #ffffff;
    }

    #nameUser {
        width: 100%;
        text-align: center;
        color: #000000;
        font-size: 24px;
        height: auto;
        line-height: 2;
    }
    /*USERCARD*/
    #userCard{
        position: absolute;
        width: 18rem;
        right: 0.5%;
        top: 110%;
    }

    #userCardProfilePictureContainer{
        margin: 1rem auto ;
        width: 100px;
        height: 100px;
        border-radius: 100px;
        background: #646363;
    }

    #userCardProfilePicture{
        width: 100%;
        text-align: center;
        color: #ffffff;
        font-size: 48px;
        line-height: 6rem;
    }

    #userCardProfilePictureWrap{
        width: 100%;
        height: 7rem;
    }

    #userCardButtonList .list-group-item:hover {
        background-color: #646363;
        transition: all 0.3s ease;
        color: white;
    }

    #userCard{
        visibility: hidden;
        background: whitesmoke;
        border-radius: 25px;
        border: 1px solid lightgrey;
    }

    .loginFalse {
        display: inline-block;
    }
    .loginTrue {
        display: none;
    }
    #login_link:hover {
        cursor: pointer;
    }
    .CenterText {
        text-align: center;
    }
    .RemoveUnderLine {
        background: whitesmoke;
    }
    .RemoveUnderLine:hover {
        text-decoration: none;
    }
    .list-group-flush>.list-group-item {
        border-width: 1px 0 0 0;
        background-color: #ededed;
    }
    .list-group-flush>.list-group-item:last-child {
        border-width: 1px 0 1px 0;
    }
</style>