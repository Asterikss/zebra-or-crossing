
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>Cat or Dog ai predictor</title>
		<link rel="stylesheet" href="https://unpkg.com/mvp.css">
	</head>
	<body>
		<a href="https://github.com/nuvic/predict_image"><img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_left_green_007200.png?resize=149%2C149" class="attachment-full size-full" alt="GitHub code" data-recalc-dims="1"></a>
		<header>
			<h1>Zebra or a zebra crossing?</h1>
			<h2>A deep learning model will predict that for you</h2>
			<p>Api hosted <a href="https://hf.space/embed/Asteriks/Zebra_crossing/+" target="_blank">here</a> (Hugging face). Webpage inspired by 
			<a href="https://github.com/nuvic/predict_image">nuvic</a></p>

			<a href="https://github.com/nuvic/predict_image" target="_blank">Github Repo</a>
		</header>
		<main>
			<header>
				<h2>Submit a picture</h2>
				<p id="prediction"></p>
				<p id="confidences"></p>
				<p id="error"></p>
			</header>
			<section>
				<img id="myImage" height="400" width="400">
				<form id="form">
					<label for="fileInput"></label>
					<input id="fileInput" type="file" onchange="onFileSelected(event)" name="File">
				</form>
			</section>
		</main>
		<script src="index.js"></script>
	</body>
</html>
