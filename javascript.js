//Help menu variables
var helpMenu_contact_command  = 'contact '; var helpMenu_contact_info     = '      | list my contact information';
var helpMenu_accounts_command = 'accounts '; var helpMenu_accounts_info    = '      | list my accounts';
var helpMenu_projects_command = 'projects'; var helpMenu_projects_info    = '      | list my projects';
var helpMenu_clear_command    = 'clear   '; var helpMenu_clear_info       = '      | clear the console';

//Contact menu variables
var contactMenu_name_command     = 'name    '; var contactMenu_name_info        = '      | Mathias Naess Iversen';
var contactMenu_location_command = 'location'; var contactMenu_location_info    = '      | Bergen, Norway';
var contactMenu_email_command    = 'email   '; var contactMenu_email_info       = '      | epost@mathiasni.com';

//Accounts menu variables
var accountsMenu_github_name    = 'GitHub:       | '; var accountsMenu_github_link    = '<a href="https://github.com/MathiasNI" style="color:#55b6c2">https://github.com/MathiasNI</a>';
var accountsMenu_linkedin_name  = 'LinkedIn:     | '; var accountsMenu_linkedin_link  = '<a href="https://linkedin.com/" style="color:#55b6c2">https://linkedin.com/</a>';

//Unknown input variable
var errorMenu = "<p> <span class='red'>Command not found.  Type 'help' to see a list over available commands.</span> </p>";

var dt = new Date();

window.onload = function() {document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));
}

function userInput(ele) {
    if(event.key === 'Enter') {
      if(ele.value == "help") {
        document.getElementById("consoleInput").innerHTML  = '<p> <span class="green">guest@mathiasni.com</span> <span class="pink">dir</span> <span class="yellow">/www</span> <br/> <span class="white">$ </span>' + ele.value + "</p>";
        document.getElementById("consoleOutput").innerHTML = "<pre>" + helpMenu_contact_command + helpMenu_contact_info + "<br/>" + helpMenu_accounts_command + helpMenu_accounts_info + "<br/>" + helpMenu_projects_command + helpMenu_projects_info + "<br/>" + helpMenu_clear_command + helpMenu_clear_info + "</pre>";
      } else if (ele.value == "accounts") {
        document.getElementById("consoleInput").innerHTML  = '<p> <span class="green">guest@mathiasni.com</span> <span class="pink">dir</span> <span class="yellow">/www</span> <br/> <span class="white">$ </span>' + ele.value + "</p>";
        document.getElementById("consoleOutput").innerHTML = "<pre>" + accountsMenu_github_name + accountsMenu_github_link + "<br/>" + accountsMenu_linkedin_name + accountsMenu_linkedin_link + "</pre>";
      } else if (ele.value == "contact") {
        document.getElementById("consoleInput").innerHTML  = '<p> <span class="green">guest@mathiasni.com</span> <span class="pink">dir</span> <span class="yellow">/www</span> <br/> <span class="white">$ </span>' + ele.value + "</p>";
        document.getElementById("consoleOutput").innerHTML = "<pre>" + contactMenu_name_command + contactMenu_name_info + "<br/>" + contactMenu_location_command + contactMenu_location_info + "<br/>" + contactMenu_email_command + contactMenu_email_info + "</pre>";
      } else if (ele.value == "projects") {
        document.getElementById("consoleInput").innerHTML  = '<p> <span class="green">guest@mathiasni.com</span> <span class="pink">dir</span> <span class="yellow">/www</span> <br/> <span class="white">$ </span>' + ele.value + "</p>";
        document.getElementById("consoleOutput").innerHTML = "<pre>" + "None" + "          | None" +  "</pre>";
      } else if (ele.value == "clear") {
        document.getElementById("consoleInput").innerHTML  = "";
        document.getElementById("consoleOutput").innerHTML = "";
      } else {
        document.getElementById("consoleInput").innerHTML  = '<p> <span class="green">guest@mathiasni.com</span> <span class="pink">dir</span> <span class="yellow">/www</span> <br/> <span class="white">$ </span>' + ele.value + "</p>";
        document.getElementById("consoleOutput").innerHTML = errorMenu;
      }
      ele.value = "";
    }
}
