function navbar(){
    return ` <div id="navbar">
    <div>
        <img  id="logo" src="./logo.jpg">
    </div>
    <div id="middle">
        <input id="showData" type="text" placeholder="Search Here">
    </div>
    <div id="last">
    <p><a id = "register" href="../signup_login.html">Register</a></p>
    <p><a href="../receipeOfTheDay.html">Receipe of the day</a></p>
    </div>
</div>`
}

export {navbar}