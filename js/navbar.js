/**
 * adding navbar to html
 *
 * @author Mia Gudelj
 */


/**
 * register listeners and load the animal data
 */
$(document).ready(
    function () {
        addNavbarContent();
    }
);

function addNavbarContent() {
    var navbarData = "";

    navbarData += `<li class="nav-item"> `;
    navbarData += `<a href="../index.html" class="nav-link font-weight-bold text-uppercase">Home</a> `;
    navbarData += `</li> `;
    navbarData += `<li class="nav-item dropdown megamenu"> `;
    navbarData += `    <a id="megamneu" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle font-weight-bold text-uppercase">Mega Menu</a> `;
    navbarData += `    <div aria-labelledby="megamneu" class="dropdown-menu border-0 p-0 m-0"> `;
    navbarData += `        <div class="container"> `;
    navbarData += `            <div class="row bg-white rounded-0 m-0 shadow-sm"> `;
    navbarData += `                <div class="col-lg-7 col-xl-8"> `;
    navbarData += `                    <div class="p-4"> `;
    navbarData += `                        <div class="row"> `;
    navbarData += `                            <div class="col-lg-6 mb-4"> `;
    navbarData += `                                <h6 class="font-weight-bold text-uppercase"> `;
    navbarData += `                                    <a href="generikum.html" class="nav-link">Was ist ein Generikum</a> `;
    navbarData += `                                </h6> `;
    navbarData += `                                <ul class="list-unstyled"> `;
    navbarData += `                                        <li class="nav-item"> `;
    navbarData += `                                        <a href="#" class="nav-link text-small pb-0">Schlechter / Besser?</a> `;
    navbarData += `                                    </li> `;
    navbarData += `                                    <li class="nav-item"> `;
    navbarData += `                                        <a href="#" class="nav-link text-small pb-0 ">Warum sind sie günstiger?</a> `;
    navbarData += `                                    </li> `;
    navbarData += `                                    <li class="nav-item"> `;
    navbarData += `                                        <a href="#" class="nav-link text-small pb-0 ">Merkmale</a> `;
    navbarData += `                                    </li> `;
    navbarData += `                                </ul> `;
    navbarData += `                            </div> `;
    navbarData += `                            <div class="col-lg-6 mb-4"> `;
    navbarData += `                                <h6 class="font-weight-bold text-uppercase"> `;
    navbarData += `                                    <a href="ch.html" class="nav-link">Lage in der Schweiz</a> `;
    navbarData += `                                </h6> `;
    navbarData += `                                <ul class="list-unstyled"> `;
    navbarData += `                                    <li class="nav-item"> `;
    navbarData += `                                        <a href="#verbreitung" class="nav-link text-small pb-0 ">Verbreitung</a></li> `;
    navbarData += `                                    <li class="nav-item"> `;
    navbarData += `                                        <a href="#beispiele" class="nav-link text-small pb-0 ">Beispiele</a> `;
    navbarData += `                                    </li> `;
    navbarData += `                                </ul> `;
    navbarData += `                            </div> `;
    navbarData += `                            <div class="col-lg-6 mb-4"> `;
    navbarData += `                                <h6 class="font-weight-bold text-uppercase"> `;
    navbarData += `                                    <a href="usa.html" class="nav-link">Lage in den USA</a> `;
    navbarData += `                                </h6> `;
    navbarData += `                                <ul class="list-unstyled"> `;
    navbarData += `                                    <li class="nav-item"> `;
    navbarData += `                                        <a href="#" class="nav-link text-small pb-0 ">Verbreitung</a> `;
    navbarData += `                                    </li> `;
    navbarData += `                                    <li class="nav-item"> `;
    navbarData += `                                        <a href="#" class="nav-link text-small pb-0 ">Beispiele</a> `;
    navbarData += `                                    </li> `;
    navbarData += `                                </ul> `;
    navbarData += `                            </div> `;
    navbarData += `                            <div class="col-lg-6 mb-4"> `;
    navbarData += `                                <h6 class="font-weight-bold text-uppercase"> `;
    navbarData += `                                    <a href="vergleich.html" class="nav-link">Vergleich CH - USA</a> `;
    navbarData += `                                </h6> `;
    navbarData += `                                <ul class="list-unstyled"> `;
    navbarData += `                                    <li class="nav-item"> `;
    navbarData += `                                        <a href="#" class="nav-link text-small pb-0 ">...</a> `;
    navbarData += `                                    </li> `;
    navbarData += `                                </ul> `;
    navbarData += `                            </div> `;
    navbarData += `                        </div> `;
    navbarData += `                    </div> `;
    navbarData += `                </div> `;
    navbarData += `                <div class="col-lg-5 col-xl-4 px-0 d-none d-lg-block navpic"> `;
    navbarData += `                    <img class="navpic"> `;
    navbarData += `                </div> `;
    navbarData += `            </div> `;
    navbarData += `        </div> `;
    navbarData += `    </div> `;
    navbarData += `</li> `;
    navbarData += `<li class="nav-item"> `;
    navbarData += `    <a href="" class="nav-link font-weight-bold text-uppercase">...</a> `;
    navbarData += `</li> `;
    navbarData += `<li class="nav-item"> `;
    navbarData += `    <a href="quellen.html" class="nav-link font-weight-bold text-uppercase">Quellen</a> `;
    navbarData += `</li> `;

    $(".navbar-nav > ul").html(navbarData);
}