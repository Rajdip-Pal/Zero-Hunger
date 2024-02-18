# Zero-Hunger
Building Website for a solution of zero Hunger 

<p>All html files should be stored in views directory, but it's extension should be '.hbs' (handlebars) instead of '.html'.<br>
All css and image files should be stored in public directory.</p>

<p>All 'href' attributes will have it's base directory in public directory. For example, to add css link in '.hbs' files present at views the code should be<br>
<b>link rel="stylesheet" href="css/style.css"</b> <br>
instead of <br>
<b>link rel="stylesheet" href="../public/css/style.css"<br>
</b></p>

<h1>To run Live Server</h1>
<p>
  <ol>
    <li>Create a new codespace. Wait for the codespace to be build properly.</li>
    <li>Open git bash terminal.</li>
    <li>Run "<b>npm i nodemon</b>" in the terminal. Wait for the download and installation.</li>
    <li>Type "<b>npm run dev</b>" in the terminal.</li>
    <li>Click on "<b>Port</b>" in the terminal options.</li>
    <li>Click on the "<b>Open in Browser</b>" to enjoy Live Server.</li>
  </ol>
</p>
