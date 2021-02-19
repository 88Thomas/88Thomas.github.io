<?php 
if (isset($_POST['messages']) AND isset($_POST['pseudonyme']))
{
    setcookie('pseudo',$_POST['pseudonyme'], time() + 365*24*3600, null, null, false, true);
}
 ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Paroisse Orthodoxe Sainte Clotilde</title> 
        <link href="../styleclot.css" rel="stylesheet" type="text/css">
        <meta name="viewport" content="width=device-width, initial-scale=0.5"/>
    </head>
    <body>
        <a href="../index.html"><h1>Paroisse Orthodoxe Sainte Clotilde</h1></a>
        <div id="menu-sdossier"></div>
        <p>Minichat</p>
        <?php 
        $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root');
        ?>
        <form method="post" action="minichat.php">
            <fieldset>
                <legend>Envoyer un message</legend> 
                <label for="pseudo">Votre pseudo :</label>
                <input type="text" name="pseudonyme" id="pseudo" value="<?= htmlspecialchars($_COOKIE['pseudo'] ?? '') ?>"/> <!-- ?= raccourci à ?php echo et $_COOKIE['pseudo'] ?? '' est un raccourci à isset($_COOKIE['pseudo']) ? $_COOKIE['pseudo'] : ''-->
                <label for="msg">Votre message :</label>
                <input type="text" name="messages" id="msg" />
                <input type="submit" value="Envoyer" />
            </fieldset>
        </form>
        <?php
        if (isset($_POST['messages']) AND isset($_POST['pseudonyme']))
        {
            if (strlen($_POST['messages']) >= 1 AND strlen($_POST['pseudonyme']) >= 2)
            {
                $requete = $bdd->prepare('INSERT INTO minichat(pseudo,messages) VALUES (?,?)');
                $requete->execute(array($_POST["pseudonyme"],$_POST["messages"]));
            }
        }
        $msgaffiche = 10;
        $m = $bdd->query('SELECT COUNT(*) FROM minichat');
        $max = $m->fetchColumn();
        if (isset($_POST['lireplus']))
        {
            if ($_POST['lireplus'] + 10 > $max)
            {
                $msgaffiche = $max;
            }
            else
            {
                $msgaffiche = $_POST['lireplus'] + 10;
            }
        }
        elseif (isset($_POST['liremoins']))
        {
            if ($_POST['liremoins'] - 10 < 0)
            {
                $msgaffiche = 0;
            }
            else
            {
                $msgaffiche = $_POST['liremoins'] - 10;
            }
        }
        $msg = $bdd->prepare('SELECT pseudo,messages FROM minichat ORDER BY ID DESC LIMIT :nbmsg');
        $msg->bindParam('nbmsg', $msgaffiche, PDO::PARAM_INT);
        $msg->execute();
        while ($donnees = $msg->fetch())
        {
            print '<p><strong>'. htmlspecialchars($donnees['pseudo']) . ' </strong>: ' . htmlspecialchars($donnees['messages']) . '</p>';
        }
        ?>
        <form method="post" action="minichat.php">
            <input type="hidden" name="liremoins" value="<?php echo $msgaffiche; ?>" />
            <input type="submit" value="Masquer" />
        </form>
        <form method="post" action="minichat.php">
            <input type="hidden" name="lireplus" value="<?php echo $msgaffiche; ?>" />
            <input type="submit" value="Lire la suite" />
        </form>
        <script type="text/javascript" src="../mainclot.js"></script>
    </body>
</html>