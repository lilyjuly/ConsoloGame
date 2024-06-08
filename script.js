var player = {
    name: "နီနီ",
    health: 100,
    attack: 10,
  };

  var Roboto = {
    name: "လှလှ",
    health: 100,
    attack: 8,
  };

  // Function to handle player's attack
  function playerAttack() {
    var damage = Math.floor(Math.random() * player.attack) + 1;
    Roboto.health -= damage;
    updateResult(
      " အလှမယ် နီနီ နှင့် " +
        Roboto.name +
        ". " +
        Roboto.name +
        " တို့ယှဥ်ပြိုင်ကြရာ  " +
        Roboto.health +
        " ဘယ်သူနိုင်မလဲ "
    );

    if (Roboto.health <= 0) {
      endGame("ရှုံးနိမ့်သွားသည်" + Roboto.name + "!");
    } else {
      setTimeout(computerRobotAttack, 3000); // Delay Roboto's attack for 1 second
    }
  }

  // Function to handle Roboto's attack
  function computerRobotAttack() {
    var damage = Math.floor(Math.random() * Roboto.attack) + 1;
    player.health -= damage;
    updateResult(
      Roboto.name +
        " နှင့်နီနီ အနိုင်ဘယ်သူရမလဲ" +
        player.health +
        " နီနီ နိုင်သည် ."
    );

    if (player.health <= 0) {
      endGame(" ကျေးဇူးတင်ပါတယ် " + Roboto.name + "Thank");
    }
  }

  // Function to update result on the screen
  function updateResult(message) {
    var resultElement = document.getElementById("result");
    resultElement.textContent = message;
  }

  // Function to end the game
  function endGame(message) {
    updateResult(message);
    document.getElementById("attack-btn").disabled = true;
  }

  // Event listener for attack button
  document.getElementById("attack-btn").addEventListener("click", playerAttack);